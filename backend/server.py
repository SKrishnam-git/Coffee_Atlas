from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

import coffee_data

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Coffee Atlas API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str


class Contact(ContactCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class NewsletterCreate(BaseModel):
    email: EmailStr


class Newsletter(NewsletterCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


# ---------- Seed ----------
async def seed_collection(name: str, docs: list, key: Optional[str] = None):
    coll = db[name]
    count = await coll.count_documents({})
    if count == 0 and docs:
        await coll.insert_many([{**d} for d in docs])
        logging.info(f"Seeded {len(docs)} docs into {name}")


@app.on_event("startup")
async def seed_data():
    await seed_collection("coffees", coffee_data.COFFEES)
    await seed_collection("brewing", coffee_data.BREWING)
    await seed_collection("recipes", coffee_data.RECIPES)
    await seed_collection("timeline", coffee_data.TIMELINE)
    await seed_collection("origins", coffee_data.ORIGINS)
    await seed_collection("stats", coffee_data.STATS)
    await seed_collection("gallery", coffee_data.GALLERY)
    await seed_collection("testimonials", coffee_data.TESTIMONIALS)
    await seed_collection("faqs", coffee_data.FAQS)


async def fetch(name: str):
    return await db[name].find({}, {"_id": 0}).to_list(1000)


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Coffee Atlas API"}


@api_router.get("/coffees")
async def get_coffees():
    return await fetch("coffees")


@api_router.get("/coffees/{slug}")
async def get_coffee(slug: str):
    doc = await db["coffees"].find_one({"slug": slug}, {"_id": 0})
    if not doc:
        raise HTTPException(status_code=404, detail="Coffee not found")
    return doc


@api_router.get("/brewing")
async def get_brewing():
    return await fetch("brewing")


@api_router.get("/recipes")
async def get_recipes():
    return await fetch("recipes")


@api_router.get("/timeline")
async def get_timeline():
    return await fetch("timeline")


@api_router.get("/origins")
async def get_origins():
    return await fetch("origins")


@api_router.get("/stats")
async def get_stats():
    return await fetch("stats")


@api_router.get("/gallery")
async def get_gallery():
    return await fetch("gallery")


@api_router.get("/testimonials")
async def get_testimonials():
    return await fetch("testimonials")


@api_router.get("/faqs")
async def get_faqs():
    return await fetch("faqs")


@api_router.post("/contact", response_model=Contact)
async def create_contact(payload: ContactCreate):
    obj = Contact(**payload.model_dump())
    await db["contacts"].insert_one(obj.model_dump())
    return obj


@api_router.post("/newsletter", response_model=Newsletter)
async def subscribe_newsletter(payload: NewsletterCreate):
    existing = await db["newsletter"].find_one({"email": payload.email})
    if existing:
        return Newsletter(**{k: v for k, v in existing.items() if k != "_id"})
    obj = Newsletter(**payload.model_dump())
    await db["newsletter"].insert_one(obj.model_dump())
    return obj


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
