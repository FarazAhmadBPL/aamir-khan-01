import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";

export const INSTAGRAM_URL = "https://www.instagram.com/";
export const FACEBOOK_URL = "https://www.facebook.com/";
export const EMAIL = "contact@alaamirkhan.com";
export const PHONE_DISPLAY = "+91 00000 00000";
export const WHATSAPP_NUMBER = "910000000000";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello AL Aamir Khan, I'd like to discuss a collaboration.",
)}`;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Brands", href: "#brands" },
  { label: "Instagram", href: "#instagram" },
  { label: "Media", href: "#media" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_PROOF = [
  { value: 25000000, suffix: "+", label: "Monthly Reach" },
  { value: 35, suffix: "+", label: "Brand Collaborations" },
  { value: 180000000, suffix: "+", label: "Content Views" },
  { value: 20, suffix: "+", label: "Media Features" },
];

export const STATS = [
  { value: 553000, suffix: "+", label: "Instagram Followers" },
  { value: 35, suffix: "+", label: "Brand Collaborations" },
  { value: 20, suffix: "+", label: "Media Features" },
  { value: 6, suffix: "", label: "Awards & Honours" },
  { value: 8, suffix: "", label: "Years of Experience" },
];

export const TIMELINE = [
  {
    phase: "Started",
    year: "2018",
    text: "First frames, first stories — a phone camera, a notebook of ideas and an unreasonable belief in the craft.",
  },
  {
    phase: "Growth",
    year: "2020",
    text: "A distinct visual language emerged. Audiences arrived for the storytelling and stayed for the honesty.",
  },
  {
    phase: "Recognition",
    year: "2023",
    text: "National brands, editorial features and industry honours followed the work rather than the noise.",
  },
  {
    phase: "Today",
    year: "Now",
    text: "Building campaigns with India's most considered brands, from concept to final cut.",
  },
];

export const REELS = [
  {
    image: reel1,
    likes: "128K",
    caption: "Golden hour in the city that never slows down.",
    url: INSTAGRAM_URL,
  },
  // {
  //   image: reel2,
  //   likes: "94.6K",
  //   caption: "Behind the frame — every second is designed.",
  //   url: INSTAGRAM_URL,
  // },
  // {
  //   image: reel3,
  //   likes: "212K",
  //   caption: "On stage: what storytelling really costs.",
  //   url: INSTAGRAM_URL,
  // },
  // {
  //   image: reel4,
  //   likes: "76.2K",
  //   caption: "Details make the difference. Always have.",
  //   url: INSTAGRAM_URL,
  // },
];

export const MEDIA = {
  featured: {
    outlet: "Feature Story",
    date: "Coming soon",
    title: "The quiet architecture behind a modern Indian creator",
    excerpt:
      "A long-form conversation on craft, restraint and building an audience that trusts you — reserved for an upcoming publication feature.",
  },
  items: [
    {
      outlet: "Digital Publication",
      date: "Coming soon",
      title: "Creator economy: the storytellers shaping brand India",
    },
    {
      outlet: "Business Daily",
      date: "Coming soon",
      title: "Why premium brands are moving budgets to creators",
    },
    {
      outlet: "Lifestyle Magazine",
      date: "Coming soon",
      title: "A portrait of discipline: inside a creator's week",
    },
  ],
};

export const AWARDS = [
  { title: "Creator of the Year", org: "Awarding Organisation", year: "2025" },
  { title: "Excellence in Digital Storytelling", org: "Awarding Organisation", year: "2024" },
  { title: "Emerging Influencer Honour", org: "Awarding Organisation", year: "2023" },
  { title: "Campaign Craft Recognition", org: "Awarding Organisation", year: "2022" },
];

export const BRAND_SLOTS = [
  "Brand Partner",
  "Luxury House",
  "Tech Label",
  "Lifestyle Co.",
  "Fashion Atelier",
  "Automotive",
  "Hospitality",
  "Fragrance",
];