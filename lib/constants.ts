import { profile } from "@/data/profile";

export const SITE = {
  name: `${profile.firstName} ${profile.lastName}`,
  email: profile.email,
  phone: profile.phone,
  city: profile.city,
};