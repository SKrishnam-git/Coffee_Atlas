import {
  BREWING,
  COFFEES,
  FAQS,
  GALLERY,
  ORIGINS,
  RECIPES,
  STATS,
  TESTIMONIALS,
  TIMELINE,
} from "../data/coffeeData";

// Keep the existing async interface while serving the content locally.
const local = (value) => Promise.resolve(value);

export const getCoffees = () => local(COFFEES);
export const getBrewing = () => local(BREWING);
export const getRecipes = () => local(RECIPES);
export const getTimeline = () => local(TIMELINE);
export const getOrigins = () => local(ORIGINS);
export const getStats = () => local(STATS);
export const getGallery = () => local(GALLERY);
export const getTestimonials = () => local(TESTIMONIALS);
export const getFaqs = () => local(FAQS);

export const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200";
