import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

const client = axios.create({ baseURL: API });

export const getCoffees = () => client.get("/coffees").then((r) => r.data);
export const getBrewing = () => client.get("/brewing").then((r) => r.data);
export const getRecipes = () => client.get("/recipes").then((r) => r.data);
export const getTimeline = () => client.get("/timeline").then((r) => r.data);
export const getOrigins = () => client.get("/origins").then((r) => r.data);
export const getStats = () => client.get("/stats").then((r) => r.data);
export const getGallery = () => client.get("/gallery").then((r) => r.data);
export const getTestimonials = () => client.get("/testimonials").then((r) => r.data);
export const getFaqs = () => client.get("/faqs").then((r) => r.data);
export const postContact = (data) => client.post("/contact", data).then((r) => r.data);
export const postNewsletter = (email) => client.post("/newsletter", { email }).then((r) => r.data);

export const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200";
