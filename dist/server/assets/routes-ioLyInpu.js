import { useEffect, useMemo, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion, useDragControls, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowDown, ArrowUp, ArrowUpRight, CalendarDays, Facebook, Heart, HeartHandshake, Instagram, Mail, MapPin, Menu, MessageCircle, Newspaper, Phone, Play, Star, Target, X, Youtube } from "lucide-react";
import { createPortal } from "react-dom";
//#region src/assets/reel-1.jpg
var reel_1_default = "/assets/reel-1--McjWYqq.jpg";
//#endregion
//#region src/assets/reel-2.jpg
var reel_2_default = "/assets/reel-2-Ccc5Ri9l.jpg";
//#endregion
//#region src/assets/reel-3.jpg
var reel_3_default = "/assets/reel-3-3W7UkIbs.jpg";
//#endregion
//#region src/assets/reel-4.jpg
var reel_4_default = "/assets/reel-4-BZHlDsF2.jpg";
//#endregion
//#region src/assets/media1.jpg
var media1_default = "/assets/media1-c0HTfFoR.jpg";
//#endregion
//#region src/assets/media2.jpg
var media2_default = "/assets/media2-BbKaohkM.jpg";
//#endregion
//#region src/assets/media3.png
var media3_default = "/assets/media3-Bu3OKu_b.png";
//#endregion
//#region src/components/site/data.ts
var INSTAGRAM_URL = "https://www.instagram.com/alaamirkhan?igsh=M3RtNTY5dzFyeW10";
var FACEBOOK_URL = "https://www.facebook.com/share/1YKoupT83u/?mibextid=wwXIfr";
var EMAIL = "teamalaamir@gmail.com";
var PHONE_DISPLAY = "+91 92448 15161";
var WHATSAPP_NUMBER = "919244815161";
var WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello AL Aamir Khan, I'd like to discuss a collaboration.")}`;
var NAV_LINKS = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Brands",
		href: "#brands"
	},
	{
		label: "Instagram",
		href: "#instagram"
	},
	{
		label: "YouTube",
		href: "#youtube"
	},
	{
		label: "Media",
		href: "#media"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
var SOCIAL_PROOF = [
	{
		value: 25e6,
		suffix: "+",
		label: "Monthly Reach"
	},
	{
		value: 50,
		suffix: "+",
		label: "Brand Collaborations"
	},
	{
		value: 18e7,
		suffix: "+",
		label: "Content Views"
	},
	{
		value: 20,
		suffix: "+",
		label: "Media Features"
	}
];
var TIMELINE = [
	{
		phase: "Started",
		year: "2018",
		text: "First frames, first stories in Bhopal - a phone camera, a notebook of ideas and an unreasonable belief in the craft."
	},
	{
		phase: "Growth",
		year: "2020",
		text: "A distinct visual language emerged. Audiences across Bhopal and Madhya Pradesh arrived for the storytelling and stayed for the honesty."
	},
	{
		phase: "Recognition",
		year: "2023",
		text: "National brands, editorial features and industry honours followed the work rather than the noise."
	},
	{
		phase: "Today",
		year: "Now",
		text: "Building brand collaborations and campaigns with India's most considered brands, from concept to final cut."
	}
];
var REELS = [
	{
		image: reel_1_default,
		brand: "Urban Threads",
		category: "Fashion & Apparel",
		featured: true,
		likes: "128K",
		caption: "Everyday style, elevated ✨",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_2_default,
		brand: "Style Avenue",
		category: "Fashion & Apparel",
		featured: false,
		likes: "94.6K",
		caption: "New season, new looks 👕",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_3_default,
		brand: "Classic Wear",
		category: "Fashion & Apparel",
		featured: false,
		likes: "212K",
		caption: "Find your signature style 😎",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_4_default,
		brand: "Street Culture",
		category: "Fashion & Apparel",
		featured: false,
		likes: "76.2K",
		caption: "Streetwear essentials 🔥",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_2_default,
		brand: "Bhopal Food House",
		category: "Restaurants & Cafés",
		featured: true,
		likes: "105K",
		caption: "A must-try spot for food lovers 🍔",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_3_default,
		brand: "The Coffee Corner",
		category: "Restaurants & Cafés",
		featured: false,
		likes: "82K",
		caption: "Coffee, conversations and good vibes ☕",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_4_default,
		brand: "Spice Junction",
		category: "Restaurants & Cafés",
		featured: false,
		likes: "67.4K",
		caption: "Flavours worth coming back for 😋",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_1_default,
		brand: "Cafe Boulevard",
		category: "Restaurants & Cafés",
		featured: false,
		likes: "91K",
		caption: "Your next café hangout 📍",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_3_default,
		brand: "Prime Properties",
		category: "Real Estate",
		featured: false,
		likes: "116K",
		caption: "Discover a place to call home 🏡",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_1_default,
		brand: "Bhopal Realty",
		category: "Real Estate",
		featured: false,
		likes: "73K",
		caption: "Your property search starts here 🔑",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_2_default,
		brand: "Urban Nest",
		category: "Real Estate",
		featured: false,
		likes: "88.5K",
		caption: "Modern homes, thoughtful spaces 🏙️",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_4_default,
		brand: "Landmark Estates",
		category: "Real Estate",
		featured: false,
		likes: "64K",
		caption: "Explore your next investment 📈",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_4_default,
		brand: "Green Acres Villa",
		category: "Farmhouses & Villas",
		featured: false,
		likes: "54K",
		caption: "A peaceful escape from the city 🌿",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_1_default,
		brand: "The Weekend Estate",
		category: "Farmhouses & Villas",
		featured: false,
		likes: "62K",
		caption: "Make weekends feel special 🌳",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_2_default,
		brand: "Royal Farm Retreat",
		category: "Farmhouses & Villas",
		featured: false,
		likes: "47.8K",
		caption: "Space to relax and reconnect ✨",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_3_default,
		brand: "Palm Grove Villas",
		category: "Farmhouses & Villas",
		featured: false,
		likes: "71K",
		caption: "Your private getaway awaits 🏡",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_1_default,
		brand: "Grand Palace Hotel",
		category: "Hotels & Resorts",
		featured: false,
		likes: "93K",
		caption: "Experience a stay beyond ordinary 🛎️",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_2_default,
		brand: "Lakeview Resort",
		category: "Hotels & Resorts",
		featured: false,
		likes: "81K",
		caption: "Wake up to beautiful views 🌅",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_3_default,
		brand: "The Heritage Inn",
		category: "Hotels & Resorts",
		featured: false,
		likes: "58.6K",
		caption: "Comfort meets timeless hospitality 🛏️",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_4_default,
		brand: "Serenity Retreat",
		category: "Hotels & Resorts",
		featured: false,
		likes: "69K",
		caption: "Check in, slow down and unwind 🌴",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_3_default,
		brand: "Premium Motors",
		category: "Automobiles",
		featured: false,
		likes: "142K",
		caption: "Meet your next drive 🚘",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_4_default,
		brand: "Drive District",
		category: "Automobiles",
		featured: false,
		likes: "98K",
		caption: "Designed for the open road 🛣️",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_1_default,
		brand: "Velocity Auto",
		category: "Automobiles",
		featured: false,
		likes: "76.5K",
		caption: "Power, precision and performance ⚡",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_2_default,
		brand: "Elite Wheels",
		category: "Automobiles",
		featured: false,
		likes: "112K",
		caption: "Find the car that fits your lifestyle 🏁",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_4_default,
		brand: "The Luxe Edit",
		category: "Luxury Lifestyle",
		featured: false,
		likes: "87K",
		caption: "The finer details make the difference ✨",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_1_default,
		brand: "Prestige Living",
		category: "Luxury Lifestyle",
		featured: false,
		likes: "124K",
		caption: "A closer look at refined living 🥂",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_2_default,
		brand: "Opulent India",
		category: "Luxury Lifestyle",
		featured: false,
		likes: "69.8K",
		caption: "Luxury in every little detail 💎",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_3_default,
		brand: "Signature Society",
		category: "Luxury Lifestyle",
		featured: false,
		likes: "101K",
		caption: "Discover a more considered lifestyle 🖤",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_1_default,
		brand: "Oud House",
		category: "Fragrances & Perfumes",
		featured: false,
		likes: "65K",
		caption: "A fragrance that leaves an impression 🌹",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_2_default,
		brand: "Scent Stories",
		category: "Fragrances & Perfumes",
		featured: false,
		likes: "73.2K",
		caption: "Find your signature scent 💫",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_3_default,
		brand: "Essence Atelier",
		category: "Fragrances & Perfumes",
		featured: false,
		likes: "51K",
		caption: "Crafted for unforgettable moments 🌸",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_4_default,
		brand: "Aura Perfumes",
		category: "Fragrances & Perfumes",
		featured: false,
		likes: "89K",
		caption: "A new layer of everyday elegance ✨",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_2_default,
		brand: "Glow Theory",
		category: "Beauty & Skincare",
		featured: false,
		likes: "134K",
		caption: "Build your everyday skincare routine 🧴",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_3_default,
		brand: "Pure Radiance",
		category: "Beauty & Skincare",
		featured: false,
		likes: "92K",
		caption: "A little self-care goes a long way 💖",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_4_default,
		brand: "Skin Rituals",
		category: "Beauty & Skincare",
		featured: false,
		likes: "78.4K",
		caption: "Simple steps, thoughtful care 🌿",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_1_default,
		brand: "Beauty Lab",
		category: "Beauty & Skincare",
		featured: false,
		likes: "109K",
		caption: "Discover your daily glow ✨",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_3_default,
		brand: "TimeCraft",
		category: "Watches & Accessories",
		featured: false,
		likes: "56K",
		caption: "Every second tells a story ⌚",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_4_default,
		brand: "The Accessory Room",
		category: "Watches & Accessories",
		featured: false,
		likes: "83K",
		caption: "Small details, big impact ✨",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_1_default,
		brand: "Chrono House",
		category: "Watches & Accessories",
		featured: false,
		likes: "68.7K",
		caption: "Timeless style for every occasion 🕰️",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_2_default,
		brand: "Modern Metals",
		category: "Watches & Accessories",
		featured: false,
		likes: "49K",
		caption: "Finish your look with the right detail 💍",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_1_default,
		brand: "Golden Arc",
		category: "Fine Jewellery",
		featured: false,
		likes: "128K",
		caption: "Jewellery that makes moments shine 💛",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_2_default,
		brand: "Heirloom Jewels",
		category: "Fine Jewellery",
		featured: false,
		likes: "94.6K",
		caption: "Tradition meets contemporary design 💎",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_3_default,
		brand: "Regal Ornaments",
		category: "Fine Jewellery",
		featured: false,
		likes: "72K",
		caption: "Celebrate every special occasion ✨",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_4_default,
		brand: "The Gold Studio",
		category: "Fine Jewellery",
		featured: false,
		likes: "86.5K",
		caption: "A timeless touch of elegance 🌟",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_2_default,
		brand: "Explore India",
		category: "Travel & Tourism",
		featured: false,
		likes: "118K",
		caption: "Your next adventure starts here 🧳",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_3_default,
		brand: "Wander Trails",
		category: "Travel & Tourism",
		featured: false,
		likes: "97K",
		caption: "Discover places worth remembering 🌍",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_4_default,
		brand: "Hidden Horizons",
		category: "Travel & Tourism",
		featured: false,
		likes: "74.3K",
		caption: "Take the scenic route 🚗",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_1_default,
		brand: "Holiday Diaries",
		category: "Travel & Tourism",
		featured: false,
		likes: "105K",
		caption: "Turn your travel plans into memories 📸",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_2_default,
		brand: "Fresh Sip Co.",
		category: "Food & Beverages",
		featured: false,
		likes: "66K",
		caption: "Refresh your day with every sip 🥤",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_3_default,
		brand: "The Snack Studio",
		category: "Food & Beverages",
		featured: false,
		likes: "89K",
		caption: "Snack time just got better 🍟",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_4_default,
		brand: "Harvest Table",
		category: "Food & Beverages",
		featured: false,
		likes: "57.5K",
		caption: "Good ingredients, great taste 🥗",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_1_default,
		brand: "Daily Brew",
		category: "Food & Beverages",
		featured: false,
		likes: "102K",
		caption: "A fresh favourite for every day ☕",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_4_default,
		brand: "Space & Form",
		category: "Interior Design",
		featured: false,
		likes: "79K",
		caption: "Thoughtful design changes everything 🛋️",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_1_default,
		brand: "Studio Habitat",
		category: "Interior Design",
		featured: false,
		likes: "91.6K",
		caption: "A fresh perspective on modern spaces 🏠",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_2_default,
		brand: "Design District",
		category: "Interior Design",
		featured: false,
		likes: "62K",
		caption: "Where creativity meets functionality 📐",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_3_default,
		brand: "Form & Finish",
		category: "Interior Design",
		featured: false,
		likes: "84K",
		caption: "Details that bring a room together ✨",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_1_default,
		brand: "Cozy Corners",
		category: "Home & Decor",
		featured: false,
		likes: "61K",
		caption: "Make yourself at home 🏡",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_2_default,
		brand: "Casa Living",
		category: "Home & Decor",
		featured: false,
		likes: "75.8K",
		caption: "Little touches, lovely spaces 🌿",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_3_default,
		brand: "Nest & Nook",
		category: "Home & Decor",
		featured: false,
		likes: "48K",
		caption: "Bring warmth into every corner 🕯️",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_4_default,
		brand: "Everyday Home",
		category: "Home & Decor",
		featured: false,
		likes: "93K",
		caption: "Simple ideas for a beautiful home 🪴",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_3_default,
		brand: "Fit District",
		category: "Wellness & Fitness",
		featured: false,
		likes: "143K",
		caption: "Small steps, stronger habits 💪",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_4_default,
		brand: "Balance Studio",
		category: "Wellness & Fitness",
		featured: false,
		likes: "86K",
		caption: "Make time for your wellbeing 🧘",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_1_default,
		brand: "Active Life",
		category: "Wellness & Fitness",
		featured: false,
		likes: "112K",
		caption: "Move more, feel better 🏃",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_2_default,
		brand: "Mindful Moments",
		category: "Wellness & Fitness",
		featured: false,
		likes: "69.4K",
		caption: "A little balance goes a long way 🌱",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_4_default,
		brand: "NextGen Tech",
		category: "Consumer Technology",
		featured: false,
		likes: "107K",
		caption: "Technology made for everyday life 📱",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_1_default,
		brand: "Gadget Garage",
		category: "Consumer Technology",
		featured: false,
		likes: "88K",
		caption: "Take a closer look at the latest tech 🎧",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_2_default,
		brand: "Smart Living Tech",
		category: "Consumer Technology",
		featured: false,
		likes: "73.5K",
		caption: "Smarter features, simpler living ⚡",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_3_default,
		brand: "Digital Hub",
		category: "Consumer Technology",
		featured: false,
		likes: "99K",
		caption: "Discover your next favourite gadget 💻",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_1_default,
		brand: "The Premium Store",
		category: "Premium Retail",
		featured: false,
		likes: "64K",
		caption: "A curated shopping experience 🛍️",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_2_default,
		brand: "Select Avenue",
		category: "Premium Retail",
		featured: false,
		likes: "78K",
		caption: "Discover something a little different ✨",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_3_default,
		brand: "Signature Select",
		category: "Premium Retail",
		featured: false,
		likes: "53.7K",
		caption: "Thoughtful picks for modern living 🖤",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_4_default,
		brand: "The Curated Edit",
		category: "Premium Retail",
		featured: false,
		likes: "96K",
		caption: "Find your next favourite here 🎁",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_2_default,
		brand: "Grand Moments Events",
		category: "Events & Experiences",
		featured: false,
		likes: "121K",
		caption: "Make every celebration memorable 🎉",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	},
	{
		image: reel_3_default,
		brand: "The Event Atelier",
		category: "Events & Experiences",
		featured: false,
		likes: "87K",
		caption: "Beautifully planned, brilliantly remembered ✨",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_4_default,
		brand: "Celebration Co.",
		category: "Events & Experiences",
		featured: false,
		likes: "69K",
		caption: "Bring people together in style 🥂",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_1_default,
		brand: "Moments & More",
		category: "Events & Experiences",
		featured: false,
		likes: "102K",
		caption: "Every detail deserves its moment 📸",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_3_default,
		brand: "Beyond Ordinary",
		category: "Luxury Experiences",
		featured: false,
		likes: "114K",
		caption: "Discover experiences worth remembering 🌟",
		url: "https://www.instagram.com/reel/DbXy5EuNFsj/"
	},
	{
		image: reel_4_default,
		brand: "The Privilege Club",
		category: "Luxury Experiences",
		featured: false,
		likes: "82.6K",
		caption: "Make room for something extraordinary 🥂",
		url: "https://www.instagram.com/reel/DbLpqVPtRkN/"
	},
	{
		image: reel_1_default,
		brand: "Elite Escape",
		category: "Luxury Experiences",
		featured: false,
		likes: "97K",
		caption: "A different way to experience luxury ✨",
		url: "https://www.instagram.com/reel/DbWAz3VtRx6/"
	},
	{
		image: reel_2_default,
		brand: "Rare Moments",
		category: "Luxury Experiences",
		featured: false,
		likes: "71.5K",
		caption: "Turn special occasions into lasting memories 💎",
		url: "https://www.instagram.com/reel/Dba6g2yOO_b/"
	}
];
var MEDIA = [
	{
		id: 1,
		image: media1_default,
		title: "शौक में शुरू किया यूट्यूब चैनल, अब लाखों प्रशंसक",
		description: "भोपाल के सोशल मीडिया क्रिएटर ए.एल. आमिर खान की डिजिटल यात्रा को Patrika Plus ने प्रमुखता से प्रकाशित किया। इस फीचर में बताया गया कि कैसे उन्होंने शौक के तौर पर YouTube शुरू किया और आज अपने कंटेंट के माध्यम से भोपाल की गलियों, बाजारों, स्थानीय व्यवसायों और सामाजिक विषयों को लाखों दर्शकों तक पहुँचाया।",
		outlet: "Patrika Plus",
		date: "23 September 2023",
		location: "Bhopal, Madhya Pradesh",
		link: "#"
	},
	{
		id: 2,
		image: media2_default,
		title: "YouTube Golden Play Button",
		description: "AL Aamir Khan received the prestigious YouTube Golden Play Button in recognition of crossing one million subscribers. The award celebrates his consistent efforts in creating impactful digital content and building one of Central India's fastest-growing creator communities.",
		outlet: "YouTube Creator Awards",
		date: "March 2026",
		location: "India",
		link: "#"
	},
	{
		id: 3,
		image: media3_default,
		title: "Featured by The Quint",
		description: "The Quint highlighted AL Aamir Khan's inspiring journey from a passionate local creator to one of Bhopal's recognised digital personalities. The feature showcases his storytelling style, support for local businesses, and his growing influence across social media platforms.",
		outlet: "The Quint",
		date: "December 2024",
		location: "Bhopal, Madhya Pradesh",
		link: "#"
	}
];
var BRAND_SLOTS = [
	"Fashion & Apparel",
	"Restaurants & Cafés",
	"Real Estate",
	"Farmhouses & Villas",
	"Hotels & Resorts",
	"Automobiles",
	"Luxury Lifestyle",
	"Fragrances & Perfumes",
	"Beauty & Skincare",
	"Watches & Accessories",
	"Fine Jewellery",
	"Travel & Tourism",
	"Food & Beverages",
	"Interior Design",
	"Home & Decor",
	"Wellness & Fitness",
	"Consumer Technology",
	"Premium Retail",
	"Events & Experiences",
	"Luxury Experiences"
];
//#endregion
//#region src/components/site/Navbar.tsx
function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-700 ${scrolled ? "border-b border-border/60 bg-background/70 backdrop-blur-xl" : "border-b border-transparent bg-transparent"}`,
		children: [/* @__PURE__ */ jsxs("nav", {
			className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]",
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "#home",
					className: `min-w-0 truncate font-display text-xl tracking-[0.2em] transition-colors duration-500 ${scrolled ? "text-foreground" : "text-ink-foreground"}`,
					children: "AL AAMIR KHAN"
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "hidden items-center gap-8 lg:flex",
					children: NAV_LINKS.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: l.href,
						className: `relative text-[0.78rem] tracking-[0.16em] uppercase transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100 ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-ink-foreground/75 hover:text-ink-foreground"}`,
						children: l.label
					}) }, l.href))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-end gap-3",
					children: [/* @__PURE__ */ jsx("a", {
						href: WHATSAPP_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: `hidden rounded-full border px-6 py-2.5 text-[0.72rem] tracking-[0.18em] uppercase transition-all duration-500 sm:inline-block ${scrolled ? "border-foreground/20 bg-foreground text-background hover:bg-gold hover:text-ink" : "border-ink-foreground/35 text-ink-foreground hover:border-gold hover:text-gold"}`,
						children: "Work With Me"
					}), /* @__PURE__ */ jsx("button", {
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						className: `shrink-0 rounded-full p-2 transition-colors lg:hidden ${scrolled ? "text-foreground" : "text-ink-foreground"}`,
						children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: open ? /* @__PURE__ */ jsx(motion.div, {
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			transition: {
				duration: .45,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden",
			children: /* @__PURE__ */ jsx("ul", {
				className: "mx-auto max-w-7xl px-6 py-6",
				children: NAV_LINKS.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "block border-b border-border/50 py-4 text-sm tracking-[0.16em] text-foreground uppercase last:border-0",
					children: l.label
				}) }, l.href))
			})
		}) : null })]
	});
}
//#endregion
//#region src/assets/hero.jpg
var hero_default = "/assets/hero-D3P2c9Z7.jpg";
//#endregion
//#region src/components/site/Hero.tsx
var EASE$6 = [
	.22,
	1,
	.36,
	1
];
var HEADLINE = [
	"Real stories.",
	"Real people.",
	"Real influence."
];
var PHRASES = [
	"vlogs people love",
	"reels people replay",
	"stories brands trust",
	"moments worth sharing"
];
function RotatingPhrase({ reduce }) {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		if (reduce) return;
		const id = window.setInterval(() => setIndex((n) => (n + 1) % PHRASES.length), 2600);
		return () => window.clearInterval(id);
	}, [reduce]);
	return /* @__PURE__ */ jsxs("span", {
		className: "relative inline-flex h-[1.5em] items-center overflow-hidden align-bottom",
		children: [/* @__PURE__ */ jsx(AnimatePresence, {
			mode: "wait",
			initial: false,
			children: /* @__PURE__ */ jsx(motion.span, {
				initial: {
					y: "100%",
					opacity: 0
				},
				animate: {
					y: 0,
					opacity: 1
				},
				exit: {
					y: "-100%",
					opacity: 0
				},
				transition: {
					duration: .5,
					ease: EASE$6
				},
				className: "inline-block whitespace-nowrap text-gold",
				children: PHRASES[index]
			}, PHRASES[index])
		}), /* @__PURE__ */ jsx(motion.span, {
			"aria-hidden": "true",
			className: "ml-1.5 inline-block h-[1em] w-[2px] bg-gold",
			animate: reduce ? void 0 : { opacity: [
				1,
				0,
				1
			] },
			transition: {
				duration: 1,
				repeat: Infinity
			}
		})]
	});
}
function Hero() {
	const ref = useRef(null);
	const reduce = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
	const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.18]);
	const fade = useTransform(scrollYProgress, [0, .8], [1, 0]);
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const sx = useSpring(mx, {
		stiffness: 60,
		damping: 20,
		mass: .6
	});
	const sy = useSpring(my, {
		stiffness: 60,
		damping: 20,
		mass: .6
	});
	const imgX = useTransform(sx, [-.5, .5], ["1.8%", "-1.8%"]);
	const imgY = useTransform(sy, [-.5, .5], ["1.2%", "-1.2%"]);
	function handlePointerMove(e) {
		if (reduce || e.pointerType !== "mouse") return;
		const rect = e.currentTarget.getBoundingClientRect();
		mx.set((e.clientX - rect.left) / rect.width - .5);
		my.set((e.clientY - rect.top) / rect.height - .5);
	}
	function handlePointerLeave() {
		mx.set(0);
		my.set(0);
	}
	return /* @__PURE__ */ jsxs("section", {
		id: "home",
		ref,
		onPointerMove: handlePointerMove,
		onPointerLeave: handlePointerLeave,
		className: "relative flex min-h-svh items-end overflow-hidden bg-ink",
		children: [
			/* @__PURE__ */ jsx(motion.div, {
				style: {
					y,
					scale
				},
				className: "absolute inset-0",
				children: /* @__PURE__ */ jsx(motion.div, {
					style: {
						x: imgX,
						y: imgY
					},
					className: "h-full w-full",
					children: /* @__PURE__ */ jsx(motion.img, {
						src: hero_default,
						alt: "AL Aamir Khan, Bhopal influencer and content creator",
						width: 1920,
						height: 1280,
						fetchPriority: "high",
						initial: reduce ? false : {
							scale: 1.18,
							filter: "blur(10px)"
						},
						animate: {
							scale: 1,
							filter: "blur(0px)"
						},
						transition: {
							duration: 2.2,
							ease: EASE$6
						},
						className: "h-full w-full object-cover object-[42%_28%]"
					})
				})
			}),
			!reduce && /* @__PURE__ */ jsx(motion.div, {
				"aria-hidden": "true",
				className: "pointer-events-none absolute -left-1/4 top-1/4 h-[70%] w-[55%] rounded-full bg-gold/20 blur-[110px] mix-blend-screen",
				animate: {
					x: [
						"0%",
						"60%",
						"0%"
					],
					opacity: [
						.25,
						.55,
						.25
					]
				},
				transition: {
					duration: 16,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/55 to-ink/10" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/45" }),
			/* @__PURE__ */ jsxs(motion.div, {
				style: { opacity: fade },
				className: "relative z-10 mx-auto w-full max-w-7xl px-6 pt-[clamp(5rem,13svh,10rem)] pb-[clamp(5rem,15svh,8rem)]",
				children: [
					/* @__PURE__ */ jsxs("h1", {
						className: "mt-[clamp(1rem,3svh,1.75rem)] max-w-4xl text-[length:clamp(2.5rem,min(12vw,10.5svh),6rem)] leading-[0.98] tracking-tight text-ink-foreground",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "sr-only",
							children: ["AL Aamir Khan, Bhopal's Digital Creator & Influencer:", " "]
						}), HEADLINE.map((line, i) => /* @__PURE__ */ jsx("span", {
							className: "-mb-[0.04em] block overflow-hidden pr-[0.1em] pb-[0.1em]",
							children: /* @__PURE__ */ jsx(motion.span, {
								initial: { y: "110%" },
								animate: { y: 0 },
								transition: {
									duration: 1.1,
									delay: .3 + i * .12,
									ease: EASE$6
								},
								className: `block ${i === HEADLINE.length - 1 ? "font-display font-normal text-gold italic" : ""}`,
								children: line
							})
						}, line))]
					}),
					/* @__PURE__ */ jsx(motion.span, {
						"aria-hidden": "true",
						initial: { scaleX: 0 },
						animate: { scaleX: 1 },
						transition: {
							duration: 1.1,
							delay: .9,
							ease: EASE$6
						},
						className: "mt-[clamp(0.75rem,2.5svh,1.75rem)] block h-px w-20 origin-left bg-gold"
					}),
					/* @__PURE__ */ jsxs(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: 1,
							ease: EASE$6
						},
						className: "mt-[clamp(0.75rem,2.5svh,1.5rem)] text-lg leading-[1.5] font-light text-ink-foreground sm:text-2xl",
						children: [/* @__PURE__ */ jsx("span", {
							className: "sr-only",
							children: "Bhopal-based Instagram influencer, YouTube vlogger and digital creator in Madhya Pradesh, making reels, vlogs and brand stories for automobile, tech, real estate, food and lifestyle brands. Available for brand collaborations and paid promotions in Bhopal and across India."
						}), /* @__PURE__ */ jsxs("span", {
							"aria-hidden": "true",
							children: ["I create ", /* @__PURE__ */ jsx(RotatingPhrase, { reduce })]
						})]
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1.1,
							delay: 1.15,
							ease: EASE$6
						},
						className: "mt-[clamp(1.25rem,4svh,2.5rem)] flex flex-wrap items-center gap-3 sm:gap-4",
						children: [/* @__PURE__ */ jsxs("a", {
							href: WHATSAPP_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[0.7rem] tracking-[0.18em] text-ink uppercase transition-transform duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_var(--gold)] sm:px-9 sm:py-4 sm:text-[0.72rem] sm:tracking-[0.2em]",
							children: ["Let's Collaborate", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
						}), /* @__PURE__ */ jsx("a", {
							href: "#about",
							className: "rounded-full border border-ink-foreground/30 px-7 py-3.5 text-[0.7rem] tracking-[0.18em] text-ink-foreground uppercase transition-all duration-500 hover:border-gold hover:text-gold sm:px-9 sm:py-4 sm:text-[0.72rem] sm:tracking-[0.2em]",
							children: "Watch My Journey"
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx(motion.a, {
				href: "#about",
				"aria-label": "Scroll to about section",
				style: { opacity: fade },
				className: "absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-ink-foreground/50 sm:block",
				children: /* @__PURE__ */ jsxs(motion.span, {
					animate: { y: [
						0,
						10,
						0
					] },
					transition: {
						duration: 2.4,
						repeat: Infinity,
						ease: "easeInOut"
					},
					className: "flex flex-col items-center gap-3",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[0.6rem] tracking-[0.3em] uppercase",
						children: "Scroll"
					}), /* @__PURE__ */ jsx(ArrowDown, { className: "h-4 w-4" })]
				})
			})
		]
	});
}
//#endregion
//#region src/assets/hero_exp.jpg
var hero_exp_default = "/assets/hero_exp-Dsa3CNod.jpg";
//#endregion
//#region src/components/site/Reveal.tsx
function Reveal({ children, delay = 0, className }) {
	return /* @__PURE__ */ jsx(motion.div, {
		className,
		initial: {
			opacity: 0,
			y: 28,
			filter: "blur(10px)"
		},
		whileInView: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .9,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
//#endregion
//#region src/components/site/CountUp.tsx
function formatCount(n) {
	if (n >= 1e6) return `${(n / 1e6).toFixed(1).replace(/\.0$/, "")}M`;
	if (n >= 1e3) return `${Math.round(n / 1e3)}K`;
	return String(n);
}
function CountUp({ value }) {
	const ref = useRef(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-60px"
	});
	const [display, setDisplay] = useState(0);
	useEffect(() => {
		if (!inView) return;
		const duration = 1800;
		const start = performance.now();
		let frame = 0;
		const tick = (now) => {
			const p = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - p, 3);
			setDisplay(value * eased);
			if (p < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [inView, value]);
	return /* @__PURE__ */ jsx("span", {
		ref,
		children: formatCount(Math.round(display))
	});
}
//#endregion
//#region src/components/site/About.tsx
var EASE$5 = [
	.22,
	1,
	.36,
	1
];
var TITLE_LINES$2 = ["Behind every reel,", "there's a real story."];
var PILLARS = [{
	label: "Mission",
	icon: Target,
	text: "Make digital storytelling feel human again. Content that earns attention, never buys it."
}, {
	label: "Values",
	icon: HeartHandshake,
	text: "Honest in every frame. Sharp in every edit. Loyal to the audience and to the brands that trust the work."
}];
function trackPointer$3(e) {
	const rect = e.currentTarget.getBoundingClientRect();
	e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
	e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}
var spotlightStyle$2 = { background: "radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), color-mix(in srgb, var(--gold) 22%, transparent), transparent 70%)" };
function About() {
	const reduce = useReducedMotion();
	const imgRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: imgRef,
		offset: ["start end", "end start"]
	});
	const imgY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const sx = useSpring(mx, {
		stiffness: 90,
		damping: 18
	});
	const sy = useSpring(my, {
		stiffness: 90,
		damping: 18
	});
	const rotateY = useTransform(sx, [-.5, .5], [7, -7]);
	const rotateX = useTransform(sy, [-.5, .5], [-5, 5]);
	function handleTilt(e) {
		if (reduce || e.pointerType !== "mouse") return;
		const rect = e.currentTarget.getBoundingClientRect();
		mx.set((e.clientX - rect.left) / rect.width - .5);
		my.set((e.clientY - rect.top) / rect.height - .5);
	}
	function resetTilt() {
		mx.set(0);
		my.set(0);
	}
	const tlRef = useRef(null);
	const { scrollYProgress: tlProgress } = useScroll({
		target: tlRef,
		offset: ["start 85%", "end 55%"]
	});
	const line = useSpring(tlProgress, {
		stiffness: 80,
		damping: 25
	});
	return /* @__PURE__ */ jsxs("section", {
		id: "about",
		className: "relative scroll-mt-16 overflow-hidden bg-ink pt-10 pb-16 text-ink-foreground sm:scroll-mt-20 sm:py-20 lg:py-[clamp(4rem,9svh,7rem)]",
		children: [!reduce && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(motion.div, {
			"aria-hidden": "true",
			className: "pointer-events-none absolute -left-32 top-20 h-[26rem] w-[26rem] rounded-full bg-gold/15 blur-[120px]",
			animate: {
				x: [
					0,
					80,
					0
				],
				y: [
					0,
					40,
					0
				]
			},
			transition: {
				duration: 18,
				repeat: Infinity,
				ease: "easeInOut"
			}
		}), /* @__PURE__ */ jsx(motion.div, {
			"aria-hidden": "true",
			className: "pointer-events-none absolute -right-32 bottom-40 h-[24rem] w-[24rem] rounded-full bg-[#ff2d6f]/10 blur-[120px]",
			animate: {
				x: [
					0,
					-70,
					0
				],
				y: [
					0,
					-50,
					0
				]
			},
			transition: {
				duration: 22,
				repeat: Infinity,
				ease: "easeInOut"
			}
		})] }), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid items-center gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14 xl:gap-20",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto w-full max-w-[18rem] sm:max-w-[22rem] lg:max-w-[calc(min(64svh,600px)*0.8)]",
					children: [
						/* @__PURE__ */ jsx(motion.div, {
							"aria-hidden": "true",
							initial: reduce ? false : {
								opacity: 0,
								scale: .6
							},
							whileInView: {
								opacity: 1,
								scale: 1
							},
							viewport: { once: true },
							transition: {
								duration: 1.2,
								delay: .5,
								ease: EASE$5
							},
							className: "absolute -top-5 -left-5 hidden h-28 w-28 origin-top-left rounded-tl-[1.75rem] border-t border-l border-gold/60 sm:block"
						}),
						/* @__PURE__ */ jsx("div", {
							onPointerMove: handleTilt,
							onPointerLeave: resetTilt,
							className: "[perspective:1100px]",
							children: /* @__PURE__ */ jsxs(motion.div, {
								style: reduce ? void 0 : {
									rotateX,
									rotateY
								},
								className: "relative overflow-hidden rounded-[1.75rem] bg-ink-foreground/10 p-px shadow-[0_40px_90px_-40px_rgba(0,0,0,0.95)]",
								children: [!reduce && /* @__PURE__ */ jsx(motion.span, {
									"aria-hidden": "true",
									className: "absolute -inset-[60%]",
									style: { background: "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, var(--gold) 320deg, transparent 360deg)" },
									animate: { rotate: 360 },
									transition: {
										duration: 7,
										repeat: Infinity,
										ease: "linear"
									}
								}), /* @__PURE__ */ jsxs(motion.div, {
									ref: imgRef,
									initial: reduce ? false : {
										opacity: 0,
										scale: .96
									},
									whileInView: {
										opacity: 1,
										scale: 1
									},
									viewport: {
										once: true,
										margin: "-60px"
									},
									transition: {
										duration: 1.2,
										ease: EASE$5
									},
									className: "relative aspect-[4/5] w-full overflow-hidden rounded-[calc(1.75rem-1px)] bg-ink",
									children: [/* @__PURE__ */ jsx(motion.img, {
										src: hero_exp_default,
										alt: "AL Aamir Khan, Bhopal influencer and content creator from Madhya Pradesh",
										width: 1024,
										height: 1280,
										decoding: "async",
										style: reduce ? void 0 : {
											y: imgY,
											scale: 1.15
										},
										className: "absolute inset-0 h-full w-full object-cover"
									}), /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" })]
								})]
							})
						}),
						/* @__PURE__ */ jsxs(motion.div, {
							animate: reduce ? void 0 : { y: [
								0,
								-6,
								0
							] },
							transition: {
								duration: 5,
								repeat: Infinity,
								ease: "easeInOut"
							},
							className: "absolute -right-3 -bottom-6 rounded-2xl border border-ink-foreground/15 bg-ink/70 px-5 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md sm:-right-6",
							children: [/* @__PURE__ */ jsxs("p", {
								className: "font-display text-2xl text-ink-foreground sm:text-3xl",
								children: [/* @__PURE__ */ jsx(CountUp, { value: 8 }), /* @__PURE__ */ jsx("span", {
									className: "text-gold",
									children: "+ yrs"
								})]
							}), /* @__PURE__ */ jsx("p", {
								className: "eyebrow mt-0.5 text-[0.6rem] text-ink-foreground/60",
								children: "Behind the camera"
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(motion.p, {
						initial: reduce ? false : {
							opacity: 0,
							y: 16
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .9,
							ease: EASE$5
						},
						className: "eyebrow text-gold",
						children: "About me"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 text-[length:clamp(2.25rem,min(8vw,6.5svh),3.75rem)] leading-[1.05] font-light tracking-tight text-ink-foreground",
						children: TITLE_LINES$2.map((line, i) => /* @__PURE__ */ jsx("span", {
							className: "block overflow-hidden pr-[0.1em] pb-[0.12em]",
							children: /* @__PURE__ */ jsx(motion.span, {
								initial: reduce ? false : { y: "110%" },
								whileInView: { y: 0 },
								viewport: {
									once: true,
									margin: "-60px"
								},
								transition: {
									duration: 1.1,
									delay: .1 + i * .14,
									ease: EASE$5
								},
								className: `block ${i === TITLE_LINES$2.length - 1 ? "font-display text-gold italic" : ""}`,
								children: line
							})
						}, line))
					}),
					/* @__PURE__ */ jsx(motion.p, {
						initial: reduce ? false : {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: 1,
							delay: .4,
							ease: EASE$5
						},
						className: "mt-[clamp(0.75rem,2.5svh,1.5rem)] max-w-lg text-[0.95rem] leading-relaxed font-light text-ink-foreground/70 sm:text-base",
						children: "I'm AL Aamir Khan, a Bhopal-based Instagram influencer and digital creator from Madhya Pradesh. For eight-plus years I've turned everyday moments into reels and vlogs people watch, trust and share, for automobile, tech, real estate, food and lifestyle brands. One rule: keep it real. That is why audiences stay and brands come back. Bhopal ka apna creator, brand collaborations ke liye hamesha ready."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-[clamp(1.25rem,4svh,2.5rem)] grid gap-3 sm:grid-cols-2",
						children: PILLARS.map((p, i) => /* @__PURE__ */ jsx(Reveal, {
							delay: .15 + i * .1,
							children: /* @__PURE__ */ jsxs("article", {
								onPointerMove: trackPointer$3,
								className: "group relative h-full overflow-hidden rounded-2xl border border-ink-foreground/10 bg-ink-foreground/[0.04] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_50px_-24px_color-mix(in_srgb,var(--gold)_50%,transparent)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-5",
								children: [
									/* @__PURE__ */ jsx("span", {
										"aria-hidden": "true",
										className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
										style: spotlightStyle$2
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "relative flex items-center gap-3",
										children: [/* @__PURE__ */ jsx("span", {
											className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/10 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink",
											children: /* @__PURE__ */ jsx(p.icon, { className: "h-4 w-4" })
										}), /* @__PURE__ */ jsx("p", {
											className: "eyebrow text-gold",
											children: p.label
										})]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "relative mt-3 text-[0.82rem] leading-relaxed font-light text-ink-foreground/70",
										children: p.text
									})
								]
							})
						}, p.label))
					})
				] })]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-20 sm:mt-28",
				children: [/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow text-gold",
					children: "My journey so far"
				}), /* @__PURE__ */ jsx("div", { className: "mt-6 h-px w-full bg-gradient-to-r from-gold/60 via-ink-foreground/15 to-transparent" })] }), /* @__PURE__ */ jsxs("ol", {
					ref: tlRef,
					className: "relative mt-14 space-y-10 pl-8 md:grid md:grid-cols-4 md:gap-10 md:space-y-0 md:pl-0",
					children: [
						/* @__PURE__ */ jsx("span", {
							"aria-hidden": "true",
							className: "absolute top-0 left-0 h-full w-px bg-ink-foreground/15 md:hidden"
						}),
						/* @__PURE__ */ jsx(motion.span, {
							"aria-hidden": "true",
							style: { scaleY: reduce ? 1 : line },
							className: "absolute top-0 left-0 h-full w-px origin-top bg-gold md:hidden"
						}),
						/* @__PURE__ */ jsx("span", {
							"aria-hidden": "true",
							className: "absolute inset-x-0 top-0 hidden h-px bg-ink-foreground/15 md:block"
						}),
						/* @__PURE__ */ jsx(motion.span, {
							"aria-hidden": "true",
							style: { scaleX: reduce ? 1 : line },
							className: "absolute inset-x-0 top-0 hidden h-px origin-left bg-gold md:block"
						}),
						TIMELINE.map((t, i) => /* @__PURE__ */ jsx(Reveal, {
							delay: i * .12,
							children: /* @__PURE__ */ jsxs("li", {
								className: "group relative md:pt-8",
								children: [/* @__PURE__ */ jsx(motion.span, {
									initial: reduce ? false : { scale: 0 },
									whileInView: { scale: 1 },
									viewport: { once: true },
									transition: {
										type: "spring",
										stiffness: 260,
										damping: 15,
										delay: i * .15
									},
									className: "absolute top-2 -left-[2.28rem] block h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_0_4px_color-mix(in_srgb,var(--gold)_22%,transparent)] md:top-[-5px] md:left-0"
								}), /* @__PURE__ */ jsxs("article", {
									onPointerMove: trackPointer$3,
									className: "relative overflow-hidden rounded-2xl border border-ink-foreground/10 bg-ink-foreground/[0.03] p-6 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-gold/50 group-hover:bg-ink-foreground/[0.06] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0",
									children: [
										/* @__PURE__ */ jsx("span", {
											"aria-hidden": "true",
											className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
											style: spotlightStyle$2
										}),
										/* @__PURE__ */ jsx("span", {
											className: "relative block font-display text-sm tracking-[0.2em] text-gold uppercase",
											children: t.year
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "relative mt-2 text-2xl text-ink-foreground transition-colors duration-500 group-hover:text-gold",
											children: t.phase
										}),
										/* @__PURE__ */ jsx("p", {
											className: "relative mt-3 text-sm leading-relaxed font-light text-ink-foreground/65",
											children: t.text
										})
									]
								})]
							})
						}, t.phase))
					]
				})]
			})]
		})]
	});
}
//#endregion
//#region src/components/site/SocialProof.tsx
function trackPointer$2(e) {
	const rect = e.currentTarget.getBoundingClientRect();
	e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
	e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}
function SocialProof() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ jsxs("section", {
		"aria-label": "Social proof",
		className: "relative overflow-hidden bg-ink py-14 text-ink-foreground sm:py-20",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute inset-0 bg-[radial-gradient(55%_70%_at_50%_0%,color-mix(in_srgb,var(--gold)_16%,transparent),transparent_70%)]"
		}), /* @__PURE__ */ jsx("div", {
			className: "relative mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden rounded-3xl border border-ink-foreground/10 bg-ink-foreground/[0.03] p-3 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-5",
				children: [
					/* @__PURE__ */ jsx(motion.span, {
						"aria-hidden": "true",
						initial: { scaleX: 0 },
						whileInView: { scaleX: 1 },
						viewport: {
							once: true,
							margin: "-80px"
						},
						transition: {
							duration: 1.4,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "absolute inset-x-10 top-0 h-px origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
					}),
					!reduce && /* @__PURE__ */ jsx(motion.span, {
						"aria-hidden": "true",
						className: "pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent",
						animate: { x: ["0%", "560%"] },
						transition: {
							duration: 3.4,
							repeat: Infinity,
							repeatDelay: 6,
							ease: "easeInOut"
						}
					}),
					/* @__PURE__ */ jsx("div", {
						className: "relative grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4",
						children: SOCIAL_PROOF.map((s, i) => /* @__PURE__ */ jsx(Reveal, {
							delay: i * .08,
							children: /* @__PURE__ */ jsxs("article", {
								onPointerMove: trackPointer$2,
								className: "group relative h-full overflow-hidden rounded-2xl border border-ink-foreground/10 bg-ink-foreground/[0.04] px-5 py-7 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:bg-ink-foreground/[0.07] hover:shadow-[0_24px_50px_-24px_color-mix(in_srgb,var(--gold)_55%,transparent)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-6 sm:py-9",
								children: [
									/* @__PURE__ */ jsx("span", {
										"aria-hidden": "true",
										className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
										style: { background: "radial-gradient(200px circle at var(--x, 50%) var(--y, 50%), color-mix(in srgb, var(--gold) 24%, transparent), transparent 70%)" }
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "relative font-display text-4xl leading-none tracking-tight text-ink-foreground sm:text-5xl",
										children: [/* @__PURE__ */ jsx(CountUp, { value: s.value }), /* @__PURE__ */ jsx("span", {
											className: "text-gold",
											children: s.suffix
										})]
									}),
									/* @__PURE__ */ jsx("div", { className: "relative mx-auto mt-5 h-px w-6 bg-gold transition-all duration-700 group-hover:w-14" }),
									/* @__PURE__ */ jsx("p", {
										className: "relative mt-3 text-[0.62rem] tracking-[0.16em] text-ink-foreground/60 uppercase transition-colors duration-500 group-hover:text-ink-foreground/90 sm:text-[0.68rem]",
										children: s.label
									}),
									/* @__PURE__ */ jsx("span", {
										"aria-hidden": "true",
										className: "absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-700 group-hover:scale-x-100"
									})
								]
							})
						}, s.label))
					})
				]
			})
		})]
	});
}
//#endregion
//#region src/components/site/Brands.tsx
function Brands() {
	const brands = [...BRAND_SLOTS, ...BRAND_SLOTS];
	return /* @__PURE__ */ jsxs("section", {
		id: "brands",
		className: "relative scroll-mt-16 overflow-hidden bg-background py-12 sm:py-16 lg:py-20",
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute left-1/2 top-10 h-64 w-96 -translate-x-1/2 rounded-full bg-gold/[0.045] blur-3xl"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative mx-auto max-w-7xl px-5 sm:px-8",
				children: /* @__PURE__ */ jsxs(Reveal, {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-3 flex items-center justify-center gap-3",
							children: [
								/* @__PURE__ */ jsx("span", { className: "h-px w-7 bg-gold/60" }),
								/* @__PURE__ */ jsx("p", {
									className: "eyebrow text-xs tracking-[0.24em] text-gold",
									children: "OUR COLLABORATIONS"
								}),
								/* @__PURE__ */ jsx("span", { className: "h-px w-7 bg-gold/60" })
							]
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl",
							children: [
								"Great Brands.",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "italic text-gold",
									children: "Lasting Impressions."
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base",
							children: "Creating distinctive brand experiences across industries."
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mt-8 sm:mt-10",
				children: [
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:w-16 lg:w-24"
					}),
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:w-16 lg:w-24"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "brands-marquee flex w-max gap-3 px-1 sm:gap-4",
						children: brands.map((brand, index) => /* @__PURE__ */ jsxs("div", {
							"aria-hidden": index >= BRAND_SLOTS.length,
							className: "brand-card group relative flex h-[76px] w-44 shrink-0 items-center gap-3 overflow-hidden rounded-xl border border-border/70 bg-card/70 px-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-card sm:h-[84px] sm:w-52 sm:px-5",
							children: [
								/* @__PURE__ */ jsx("span", {
									"aria-hidden": "true",
									className: "h-8 w-[3px] shrink-0 rounded-full bg-gold/40 transition-all duration-300 group-hover:h-11 group-hover:bg-gold"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "font-display text-sm leading-snug tracking-wide text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-base",
									children: brand
								}),
								/* @__PURE__ */ jsx("span", {
									"aria-hidden": "true",
									className: "absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-gold/0 transition-colors duration-300 group-hover:bg-gold/80"
								}),
								/* @__PURE__ */ jsx("span", {
									"aria-hidden": "true",
									className: "absolute inset-x-4 bottom-0 h-px origin-left scale-x-0 bg-gold/70 transition-transform duration-300 group-hover:scale-x-100"
								})
							]
						}, `${brand}-${index}`))
					})
				]
			}),
			/* @__PURE__ */ jsx(Reveal, {
				className: "relative mt-7 text-center",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-[10px] tracking-[0.22em] text-muted-foreground/60 sm:text-xs",
					children: "FASHION · LIFESTYLE · HOSPITALITY · LUXURY"
				})
			}),
			/* @__PURE__ */ jsx("style", { children: `
        .brands-marquee {
          animation: brands-scroll 55s linear infinite;
          will-change: transform;
        }

        .brands-marquee:hover {
          animation-play-state: paused;
        }

        .brand-card {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.025);
        }

        .brand-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
        }

        @keyframes brands-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brands-marquee {
            animation: none;
            will-change: auto;
          }
        }
      ` })
		]
	});
}
//#endregion
//#region src/components/site/openInstagram.ts
function openInstagram(e, url) {
	if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) return;
	try {
		const { pathname } = new URL(url);
		const parts = pathname.split("/").filter(Boolean);
		let deepLink = "";
		if (parts[0] === "reel" || parts[0] === "p") deepLink = `instagram://media?id=${parts[1]}`;
		else if (parts[0]) deepLink = `instagram://user?username=${parts[0]}`;
		if (!deepLink) return;
		e.preventDefault();
		const fallback = window.setTimeout(() => {
			window.open(url, "_blank", "noopener,noreferrer");
		}, 900);
		document.addEventListener("visibilitychange", () => {
			if (document.hidden) window.clearTimeout(fallback);
		}, { once: true });
		window.location.href = deepLink;
	} catch {}
}
//#endregion
//#region src/components/site/ReelsSheet.tsx
var EASE$4 = [
	.22,
	1,
	.36,
	1
];
var ALL = "All";
function ReelsSheet({ open, onClose }) {
	const reduce = useReducedMotion();
	const dragControls = useDragControls();
	const [active, setActive] = useState(ALL);
	const bodyRef = useRef(null);
	const closeBtnRef = useRef(null);
	const chipRefs = useRef({});
	const { categories, counts } = useMemo(() => {
		const map = /* @__PURE__ */ new Map();
		REELS.forEach((r) => map.set(r.category, (map.get(r.category) ?? 0) + 1));
		return {
			categories: [ALL, ...Array.from(map.keys())],
			counts: {
				[ALL]: REELS.length,
				...Object.fromEntries(map)
			}
		};
	}, []);
	const visible = useMemo(() => active === ALL ? REELS : REELS.filter((r) => r.category === active), [active]);
	useEffect(() => {
		if (!open) return;
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		const t = window.setTimeout(() => closeBtnRef.current?.focus(), 350);
		return () => {
			document.body.style.overflow = prevOverflow;
			window.removeEventListener("keydown", onKey);
			window.clearTimeout(t);
		};
	}, [open, onClose]);
	useEffect(() => {
		if (open) setActive(ALL);
	}, [open]);
	useEffect(() => {
		chipRefs.current[active]?.scrollIntoView({
			behavior: reduce ? "auto" : "smooth",
			inline: "center",
			block: "nearest"
		});
		bodyRef.current?.scrollTo({
			top: 0,
			behavior: reduce ? "auto" : "smooth"
		});
	}, [active, reduce]);
	if (typeof document === "undefined") return null;
	return createPortal(/* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 z-[100]",
		children: [/* @__PURE__ */ jsx(motion.div, {
			"aria-hidden": true,
			className: "absolute inset-0 bg-[#12031f]/70 backdrop-blur-sm",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: { duration: reduce ? 0 : .3 },
			onClick: onClose
		}), /* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute inset-x-0 bottom-0 flex justify-center",
			children: /* @__PURE__ */ jsxs(motion.div, {
				role: "dialog",
				"aria-modal": "true",
				"aria-label": "All reels",
				className: "pointer-events-auto relative flex h-[90svh] w-full max-w-5xl flex-col overflow-hidden rounded-t-[28px] border border-b-0 border-white/10 bg-[#14081f] text-white shadow-[0_-30px_80px_-20px_rgba(225,48,108,0.45)] sm:h-[88svh]",
				initial: { y: "100%" },
				animate: { y: 0 },
				exit: { y: "100%" },
				transition: reduce ? { duration: 0 } : {
					type: "spring",
					damping: 32,
					stiffness: 320,
					mass: .9
				},
				drag: "y",
				dragControls,
				dragListener: false,
				dragConstraints: {
					top: 0,
					bottom: 0
				},
				dragElastic: {
					top: 0,
					bottom: .7
				},
				onDragEnd: (_, info) => {
					if (info.offset.y > 120 || info.velocity.y > 600) onClose();
				},
				children: [
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute -top-24 left-1/2 h-48 w-[70%] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,#7b2ff7,#e1306c,#ff7a3d)] opacity-30 blur-3xl"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative shrink-0",
						children: [
							/* @__PURE__ */ jsxs("div", {
								onPointerDown: (e) => dragControls.start(e),
								className: "cursor-grab touch-none px-5 pt-3 active:cursor-grabbing sm:px-8",
								children: [/* @__PURE__ */ jsx("div", { className: "mx-auto h-1.5 w-11 rounded-full bg-white/30" }), /* @__PURE__ */ jsxs("div", {
									className: "mt-4 flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("p", {
											className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ff9ac0]",
											children: "Brand collabs"
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl",
											children: "All Reels"
										}),
										/* @__PURE__ */ jsxs("p", {
											"aria-live": "polite",
											className: "mt-1 text-xs text-white/60 sm:text-sm",
											children: [
												visible.length,
												" reel",
												visible.length === 1 ? "" : "s",
												active !== ALL && ` in ${active}`
											]
										})
									] }), /* @__PURE__ */ jsx("button", {
										ref: closeBtnRef,
										type: "button",
										onClick: onClose,
										onPointerDown: (e) => e.stopPropagation(),
										"aria-label": "Close",
										className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
										children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative mt-4",
								children: [
									/* @__PURE__ */ jsx("div", {
										role: "tablist",
										"aria-label": "Reel categories",
										className: "flex gap-2 overflow-x-auto px-5 pb-3 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
										children: categories.map((cat) => {
											const isActive = cat === active;
											return /* @__PURE__ */ jsxs("button", {
												ref: (el) => {
													chipRefs.current[cat] = el;
												},
												role: "tab",
												"aria-selected": isActive,
												type: "button",
												onClick: () => setActive(cat),
												className: `relative shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${isActive ? "text-white" : "bg-white/[0.07] text-white/70 hover:bg-white/[0.14] hover:text-white"}`,
												children: [isActive && /* @__PURE__ */ jsx(motion.span, {
													layoutId: "reel-chip-active",
													className: "absolute inset-0 rounded-full bg-[linear-gradient(135deg,#7b2ff7,#e1306c_55%,#ff7a3d)] shadow-[0_8px_20px_-8px_rgba(225,48,108,0.8)]",
													transition: reduce ? { duration: 0 } : {
														type: "spring",
														stiffness: 420,
														damping: 34
													}
												}), /* @__PURE__ */ jsxs("span", {
													className: "relative flex items-center gap-1.5 whitespace-nowrap",
													children: [cat, /* @__PURE__ */ jsx("span", {
														className: `rounded-full px-1.5 py-px text-[10px] font-bold ${isActive ? "bg-white/25 text-white" : "bg-white/10 text-white/60"}`,
														children: counts[cat]
													})]
												})]
											}, cat);
										})
									}),
									/* @__PURE__ */ jsx("div", {
										"aria-hidden": true,
										className: "pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-[#14081f] to-transparent sm:w-6"
									}),
									/* @__PURE__ */ jsx("div", {
										"aria-hidden": true,
										className: "pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#14081f] to-transparent sm:w-10"
									})
								]
							}),
							/* @__PURE__ */ jsx("div", { className: "h-px w-full bg-white/10" })
						]
					}),
					/* @__PURE__ */ jsx("div", {
						ref: bodyRef,
						className: "relative flex-1 overflow-y-auto overscroll-contain px-4 pb-6 pt-5 sm:px-8",
						children: /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4",
							children: visible.map((reel, i) => /* @__PURE__ */ jsxs(motion.a, {
								href: reel.url,
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: (e) => openInstagram(e, reel.url),
								initial: reduce ? false : {
									opacity: 0,
									y: 28,
									scale: .96
								},
								animate: {
									opacity: 1,
									y: 0,
									scale: 1
								},
								transition: {
									duration: .55,
									ease: EASE$4,
									delay: reduce ? 0 : Math.min(i, 11) * .045
								},
								whileHover: reduce ? void 0 : { y: -4 },
								className: "group relative block aspect-[3/4.2] overflow-hidden rounded-2xl border border-white/10 bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80",
								children: [
									/* @__PURE__ */ jsx("img", {
										src: reel.image,
										alt: reel.caption,
										loading: "lazy",
										className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "absolute inset-x-0 top-0 flex items-start justify-between p-2.5",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1 rounded-full bg-black/45 px-2 py-1 text-[10px] font-semibold backdrop-blur-md",
											children: [/* @__PURE__ */ jsx(Heart, { className: "h-3 w-3 fill-[#ff4d79] text-[#ff4d79]" }), reel.likes]
										}), reel.featured && /* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1 rounded-full bg-[#ffd36e] px-2 py-1 text-[10px] font-bold text-[#5a3a00]",
											children: [/* @__PURE__ */ jsx(Star, { className: "h-3 w-3 fill-current" }), "Featured"]
										})]
									}),
									/* @__PURE__ */ jsx("span", {
										className: "absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-90 items-center justify-center rounded-full bg-white/90 text-[#e1306c] opacity-0 shadow-xl backdrop-blur transition duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 max-sm:scale-100 max-sm:opacity-80",
										children: /* @__PURE__ */ jsx(Play, { className: "h-5 w-5 translate-x-[1px] fill-current" })
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-3 pb-3 pt-14",
										children: [
											/* @__PURE__ */ jsx("p", {
												className: "truncate text-sm font-bold leading-tight",
												children: reel.brand
											}),
											/* @__PURE__ */ jsx("p", {
												className: "mt-0.5 line-clamp-2 text-[11px] leading-snug text-white/75",
												children: reel.caption
											}),
											active === ALL && /* @__PURE__ */ jsx("span", {
												className: "mt-2 inline-block max-w-full truncate rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/85 backdrop-blur",
												children: reel.category
											})
										]
									})
								]
							}, `${reel.brand}-${i}`))
						}, active)
					}),
					/* @__PURE__ */ jsx("div", {
						className: "relative shrink-0 border-t border-white/10 bg-[#14081f]/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur sm:px-8",
						children: /* @__PURE__ */ jsxs("a", {
							href: "https://www.instagram.com/alaamirkhan?igsh=M3RtNTY5dzFyeW10",
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: (e) => openInstagram(e, "https://www.instagram.com/alaamirkhan?igsh=M3RtNTY5dzFyeW10"),
							className: "flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#7b2ff7,#e1306c_55%,#ff7a3d)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-10px_rgba(225,48,108,0.8)] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
							children: [/* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" }), "Follow for more on Instagram"]
						})
					})
				]
			})
		})]
	}) }), document.body);
}
//#endregion
//#region src/components/site/Reels.tsx
var EASE$3 = [
	.22,
	1,
	.36,
	1
];
var FAN = [
	{
		rotate: -8,
		y: 18,
		z: 10,
		scale: .94
	},
	{
		rotate: 0,
		y: -6,
		z: 30,
		scale: 1.06
	},
	{
		rotate: 8,
		y: 18,
		z: 20,
		scale: .94
	}
];
function Reels() {
	const reduce = useReducedMotion();
	const [sheetOpen, setSheetOpen] = useState(false);
	const featured = REELS.filter((r) => r.featured);
	const others = REELS.filter((r) => !r.featured);
	const gridReels = [...featured, ...others].slice(0, 3);
	return /* @__PURE__ */ jsxs("section", {
		id: "instagram",
		className: "relative scroll-mt-16 overflow-hidden bg-[linear-gradient(135deg,#7b2ff7_0%,#e1306c_45%,#ff7a3d_80%,#ffb347_100%)] py-12 text-white sm:py-14 lg:flex lg:min-h-svh lg:items-center lg:py-[clamp(3rem,7svh,6rem)]",
		children: [
			/* @__PURE__ */ jsx("style", { children: `
        @keyframes ig-blob { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,-24px) scale(1.12)} }
        @keyframes ig-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes ig-ring { 0%{transform:scale(1);opacity:.55} 100%{transform:scale(1.9);opacity:0} }
        @keyframes ig-shine { 0%{transform:translateX(-120%) skewX(-20deg)} 60%,100%{transform:translateX(220%) skewX(-20deg)} }
        .ig-blob { animation: ig-blob 12s ease-in-out infinite; }
        .ig-float { animation: ig-float 4s ease-in-out infinite; }
        .ig-ring { animation: ig-ring 2.4s ease-out infinite; }
        .ig-btn::after{content:"";position:absolute;inset:0;width:40%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent);animation:ig-shine 3.6s ease-in-out infinite}
        @media (prefers-reduced-motion: reduce){
          .ig-blob,.ig-float,.ig-ring,.ig-btn::after{animation:none!important}
        }
      ` }),
			/* @__PURE__ */ jsxs("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0",
				children: [
					/* @__PURE__ */ jsx("div", { className: "ig-blob absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" }),
					/* @__PURE__ */ jsx("div", {
						className: "ig-blob absolute -bottom-28 right-[-4rem] h-80 w-80 rounded-full bg-[#ffd36e]/30 blur-3xl",
						style: { animationDelay: "-5s" }
					}),
					/* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 opacity-[0.12]",
						style: {
							backgroundImage: "radial-gradient(rgba(255,255,255,.9) 1px, transparent 1px)",
							backgroundSize: "22px 22px"
						}
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto grid w-full max-w-6xl items-center gap-8 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center lg:text-left",
					children: [
						/* @__PURE__ */ jsxs(motion.span, {
							initial: {
								opacity: 0,
								y: 12
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .6,
								ease: EASE$3
							},
							className: "inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-md",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "relative flex h-2 w-2",
								children: [/* @__PURE__ */ jsx("span", { className: "ig-ring absolute inset-0 rounded-full bg-white" }), /* @__PURE__ */ jsx("span", { className: "relative h-2 w-2 rounded-full bg-white" })]
							}), "Live on Instagram"]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-4 font-extrabold leading-[0.95] tracking-[-0.04em] text-[length:clamp(2.25rem,min(9vw,8.5svh),4.75rem)]",
							children: ["Scroll less.", "Feel more."].map((line, i) => /* @__PURE__ */ jsx("span", {
								className: "block overflow-hidden pb-1",
								children: /* @__PURE__ */ jsx(motion.span, {
									className: `block ${i === 1 ? "text-[#fff3c4]" : ""}`,
									initial: { y: "110%" },
									whileInView: { y: 0 },
									viewport: { once: true },
									transition: {
										duration: .9,
										ease: EASE$3,
										delay: .1 + i * .12
									},
									children: line
								})
							}, line))
						}),
						/* @__PURE__ */ jsx(motion.p, {
							initial: {
								opacity: 0,
								y: 14
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .7,
								ease: EASE$3,
								delay: .4
							},
							className: "mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/90 sm:text-base lg:mx-0",
							children: "Brand collabs, behind-the-scenes aur real moments - seedha mere reels mein. Ek tap, aur kahani shuru."
						}),
						/* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 14
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .7,
								ease: EASE$3,
								delay: .5
							},
							className: "mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start",
							children: [/* @__PURE__ */ jsxs("a", {
								href: INSTAGRAM_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: (e) => openInstagram(e, INSTAGRAM_URL),
								className: "ig-btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#c2185b] shadow-[0_12px_28px_-10px_rgba(0,0,0,0.45)] transition hover:-translate-y-0.5",
								children: [/* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" }), "Follow on Instagram"]
							}), /* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => setSheetOpen(true),
								"aria-haspopup": "dialog",
								className: "inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20",
								children: ["Explore All Reels", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })]
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto flex items-center justify-center pb-4 pt-6",
					children: [
						/* @__PURE__ */ jsx("div", {
							"aria-hidden": true,
							className: "absolute left-1/2 top-1/2 h-[75%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-3xl"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "relative flex items-center justify-center",
							children: gridReels.map((reel, i) => {
								const f = FAN[i] ?? FAN[0];
								return /* @__PURE__ */ jsxs(motion.a, {
									href: reel.url,
									target: "_blank",
									rel: "noopener noreferrer",
									onClick: (e) => openInstagram(e, reel.url),
									initial: reduce ? false : {
										opacity: 0,
										y: 70,
										rotate: 0,
										scale: .85
									},
									whileInView: {
										opacity: 1,
										y: f.y,
										rotate: f.rotate,
										scale: f.scale
									},
									viewport: {
										once: true,
										margin: "-40px"
									},
									transition: {
										duration: .9,
										ease: EASE$3,
										delay: .15 * i
									},
									whileHover: reduce ? void 0 : {
										y: -22,
										rotate: 0,
										scale: 1.1,
										zIndex: 50
									},
									style: {
										zIndex: f.z,
										width: "clamp(118px, min(27vw, 30svh), 250px)",
										marginLeft: i === 0 ? 0 : "clamp(-70px, -5vw, -28px)"
									},
									className: "group relative block aspect-[3/4] shrink-0 overflow-hidden rounded-2xl border-[3px] border-white bg-black shadow-[0_28px_50px_-18px_rgba(40,0,40,0.65)]",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: reel.image,
											alt: reel.caption,
											loading: "lazy",
											className: "absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
										}),
										/* @__PURE__ */ jsxs("span", {
											className: "absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-md",
											children: [/* @__PURE__ */ jsx(Heart, { className: "h-3 w-3 fill-[#ff4d79] text-[#ff4d79]" }), reel.likes]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/80 via-black/50 to-transparent px-2.5 pb-2.5 pt-8",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ jsx("p", {
													className: "truncate text-[11px] font-bold leading-tight sm:text-xs",
													children: reel.brand
												}), /* @__PURE__ */ jsx("p", {
													className: "truncate text-[9px] uppercase tracking-wider text-white/70 sm:text-[10px]",
													children: reel.category
												})]
											}), /* @__PURE__ */ jsxs("span", {
												className: "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#e1306c] shadow-lg transition group-hover:scale-110",
												children: [/* @__PURE__ */ jsx("span", { className: "ig-ring absolute inset-0 rounded-full bg-white/70" }), /* @__PURE__ */ jsx(Play, { className: "relative h-3.5 w-3.5 translate-x-[1px] fill-current" })]
											})]
										})
									]
								}, `${reel.url}-${i}`);
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "ig-float absolute -right-1 top-0 hidden rotate-6 rounded-xl bg-white px-3 py-2 text-[11px] font-bold text-[#c2185b] shadow-xl sm:block",
							children: "Tap to watch ▶"
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx(ReelsSheet, {
				open: sheetOpen,
				onClose: () => setSheetOpen(false)
			})
		]
	});
}
//#endregion
//#region src/components/site/Media.tsx
var EASE$2 = [
	.22,
	1,
	.36,
	1
];
var TITLE_LINES$1 = ["Moments the world", "took notice of."];
function trackPointer$1(e) {
	const rect = e.currentTarget.getBoundingClientRect();
	e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
	e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}
var spotlightStyle$1 = { background: "radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), color-mix(in srgb, var(--gold) 16%, transparent), transparent 70%)" };
function MediaCard({ item, index }) {
	const reduce = useReducedMotion();
	const flipped = index % 2 === 1;
	item.link;
	return /* @__PURE__ */ jsx(Reveal, {
		delay: .05,
		children: /* @__PURE__ */ jsxs("article", {
			onPointerMove: trackPointer$1,
			className: "group relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-luxe transition-all duration-700 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-lift)] motion-reduce:transition-none motion-reduce:hover:translate-y-0",
			children: [/* @__PURE__ */ jsx("span", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
				style: spotlightStyle$1
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: `relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary/80 via-secondary/40 to-secondary/10 px-6 py-12 sm:px-10 lg:min-h-[26rem] ${flipped ? "lg:order-last" : ""}`,
					children: [/* @__PURE__ */ jsx("span", {
						"aria-hidden": "true",
						className: "pointer-events-none absolute inset-x-0 bottom-3 select-none truncate px-6 text-center font-display text-[5rem] leading-none text-foreground/[0.05] sm:text-[7rem]",
						children: item.outlet
					}), /* @__PURE__ */ jsx(motion.div, {
						initial: reduce ? false : {
							opacity: 0,
							y: 36,
							scale: .94
						},
						whileInView: {
							opacity: 1,
							y: 0,
							scale: 1
						},
						viewport: {
							once: true,
							margin: "-80px"
						},
						transition: {
							duration: 1,
							ease: EASE$2
						},
						className: "relative max-w-full",
						children: /* @__PURE__ */ jsxs("div", {
							className: `relative rounded-xl bg-white p-2 shadow-[0_30px_60px_-28px_rgba(0,0,0,0.5)] ring-1 ring-black/5 transition-transform duration-700 ease-out group-hover:rotate-0 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${flipped ? "rotate-[1.5deg]" : "-rotate-[1.5deg]"}`,
							children: [/* @__PURE__ */ jsxs("div", {
								className: "relative overflow-hidden rounded-md",
								children: [/* @__PURE__ */ jsx("img", {
									src: item.image,
									alt: item.title,
									loading: "lazy",
									className: "block max-h-[18rem] w-auto max-w-full object-contain sm:max-h-[22rem]"
								}), /* @__PURE__ */ jsx("span", {
									"aria-hidden": "true",
									className: "pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-all duration-[1100ms] ease-out group-hover:translate-x-[420%] group-hover:opacity-100 motion-reduce:hidden"
								})]
							}), /* @__PURE__ */ jsx("span", {
								"aria-hidden": "true",
								className: "absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 bg-gold/35 shadow-sm backdrop-blur-[1px]"
							})]
						})
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative flex flex-col justify-center p-7 sm:p-10 lg:p-12",
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "inline-flex w-fit items-center gap-2 rounded-full bg-gold/10 px-3.5 py-1.5 text-[0.68rem] tracking-[0.2em] text-gold uppercase",
							children: [/* @__PURE__ */ jsx(Newspaper, { className: "h-3.5 w-3.5" }), item.outlet]
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-5 font-display text-2xl leading-tight text-foreground transition-colors duration-500 group-hover:text-gold sm:text-3xl lg:text-4xl",
							children: item.title
						}),
						/* @__PURE__ */ jsx("div", { className: "mt-5 h-px w-12 bg-gold transition-all duration-700 group-hover:w-24" }),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 max-w-2xl text-base leading-relaxed font-light text-muted-foreground",
							children: item.description
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [item.date && /* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm text-foreground",
								children: [/* @__PURE__ */ jsx(CalendarDays, { className: "h-4 w-4 text-gold" }), item.date]
							}), item.location && /* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm text-foreground",
								children: [/* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-gold" }), item.location]
							})]
						})
					]
				})]
			})]
		})
	});
}
function Media() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ jsxs("section", {
		id: "media",
		className: "relative scroll-mt-16 overflow-hidden bg-background py-20 sm:py-28",
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_90%_0%,color-mix(in_srgb,var(--gold)_14%,transparent),transparent_70%),radial-gradient(45%_35%_at_0%_100%,color-mix(in_srgb,var(--gold)_10%,transparent),transparent_70%)]"
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "grid gap-8 md:grid-cols-[1fr_auto] md:items-end",
					children: /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx(motion.p, {
							initial: reduce ? false : {
								opacity: 0,
								y: 16
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .9,
								ease: EASE$2
							},
							className: "eyebrow text-gold",
							children: "Press & Recognition"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-4 text-4xl leading-[1.05] font-light tracking-tight text-foreground sm:text-5xl lg:text-6xl",
							children: TITLE_LINES$1.map((line, i) => /* @__PURE__ */ jsx("span", {
								className: "block overflow-hidden pr-[0.1em] pb-[0.12em]",
								children: /* @__PURE__ */ jsx(motion.span, {
									initial: reduce ? false : { y: "110%" },
									whileInView: { y: 0 },
									viewport: {
										once: true,
										margin: "-60px"
									},
									transition: {
										duration: 1.1,
										delay: .1 + i * .14,
										ease: EASE$2
									},
									className: `block ${i === TITLE_LINES$1.length - 1 ? "font-display text-gold italic" : ""}`,
									children: line
								})
							}, line))
						}),
						/* @__PURE__ */ jsx(motion.p, {
							initial: reduce ? false : {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-60px"
							},
							transition: {
								duration: 1,
								delay: .4,
								ease: EASE$2
							},
							className: "mt-6 max-w-xl text-base leading-relaxed font-light text-muted-foreground",
							children: "Features, interviews and honours from the publications and stages that backed the work."
						})
					] })
				}),
				/* @__PURE__ */ jsx("div", { className: "mt-10 h-px w-full bg-gradient-to-r from-gold/60 via-border to-transparent" }),
				/* @__PURE__ */ jsx("div", {
					className: "mt-14 space-y-8 sm:space-y-12",
					children: MEDIA.map((item, index) => /* @__PURE__ */ jsx(MediaCard, {
						item,
						index
					}, item.id))
				})
			]
		})]
	});
}
//#endregion
//#region src/components/site/Contact.tsx
var EASE$1 = [
	.22,
	1,
	.36,
	1
];
var TITLE_LINES = ["Let's create something", "amazing together."];
var OPEN_TO = [
	"Brand campaigns",
	"Long-form partnerships",
	"Appearances",
	"Speaking"
];
function trackPointer(e) {
	const rect = e.currentTarget.getBoundingClientRect();
	e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
	e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}
var spotlightStyle = { background: "radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), color-mix(in srgb, var(--gold) 22%, transparent), transparent 70%)" };
function Contact() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ jsxs("section", {
		id: "contact",
		className: "relative scroll-mt-16 overflow-hidden bg-ink py-16 text-ink-foreground sm:py-20 lg:flex lg:min-h-svh lg:items-center lg:py-[clamp(3rem,8svh,8rem)]",
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_0%,color-mix(in_srgb,var(--gold)_20%,transparent),transparent_70%),radial-gradient(45%_40%_at_85%_100%,rgba(255,45,111,0.14),transparent_70%)]"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(60%_60%_at_50%_45%,black,transparent)]"
			}),
			!reduce && /* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 flex items-center justify-center",
				children: [
					0,
					1,
					2
				].map((i) => /* @__PURE__ */ jsx(motion.span, {
					className: "absolute h-[22rem] w-[22rem] rounded-full border border-gold/30 sm:h-[34rem] sm:w-[34rem]",
					initial: {
						scale: .6,
						opacity: 0
					},
					animate: {
						scale: [.6, 1.5],
						opacity: [.5, 0]
					},
					transition: {
						duration: 7,
						repeat: Infinity,
						delay: i * 2.3,
						ease: "easeOut"
					}
				}, i))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto w-full max-w-4xl px-6 text-center",
				children: [
					/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-2.5 rounded-full border border-ink-foreground/20 bg-ink/40 px-4 py-1.5 text-[0.65rem] tracking-[0.2em] text-ink-foreground/80 uppercase backdrop-blur-md",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70 motion-reduce:hidden" }), /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-400" })]
						}), "Open for collaborations"]
					}) }),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-[clamp(1rem,3.5svh,2rem)] text-[length:clamp(2rem,min(8.5vw,8.5svh),5.25rem)] leading-[1.02] font-light tracking-tight text-ink-foreground",
						children: TITLE_LINES.map((line, i) => /* @__PURE__ */ jsx("span", {
							className: "block overflow-hidden pr-[0.1em] pb-[0.12em]",
							children: /* @__PURE__ */ jsx(motion.span, {
								initial: reduce ? false : { y: "110%" },
								whileInView: { y: 0 },
								viewport: {
									once: true,
									margin: "-60px"
								},
								transition: {
									duration: 1.1,
									delay: .1 + i * .14,
									ease: EASE$1
								},
								className: `block ${i === TITLE_LINES.length - 1 ? "font-display text-gold italic" : ""}`,
								children: line
							})
						}, line))
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-[clamp(0.75rem,2.5svh,1.75rem)] max-w-xl text-base leading-relaxed font-light text-ink-foreground/70",
							children: "Every enquiry is read personally. Here's what I'm open to."
						})
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: .25,
						children: /* @__PURE__ */ jsx("div", {
							className: "mx-auto mt-[clamp(0.75rem,2.5svh,1.5rem)] flex max-w-2xl flex-wrap justify-center gap-2",
							children: OPEN_TO.map((item) => /* @__PURE__ */ jsx("span", {
								className: "rounded-full border border-ink-foreground/15 px-4 py-1.5 text-xs font-light tracking-wide text-ink-foreground/70 transition-colors duration-500 hover:border-gold/60 hover:text-gold",
								children: item
							}, item))
						})
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: .3,
						children: /* @__PURE__ */ jsxs("div", {
							className: "mx-auto mt-[clamp(1.25rem,4.5svh,3rem)] grid max-w-3xl gap-3 text-left sm:grid-cols-2 sm:gap-4",
							children: [/* @__PURE__ */ jsxs("a", {
								href: WHATSAPP_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								onPointerMove: trackPointer,
								className: "group relative block overflow-hidden rounded-2xl bg-gold/30 p-px transition-transform duration-500 hover:-translate-y-1 motion-reduce:hover:translate-y-0",
								children: [!reduce && /* @__PURE__ */ jsx(motion.span, {
									"aria-hidden": "true",
									className: "absolute -inset-[80%]",
									style: { background: "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, var(--gold) 320deg, transparent 360deg)" },
									animate: { rotate: 360 },
									transition: {
										duration: 6,
										repeat: Infinity,
										ease: "linear"
									}
								}), /* @__PURE__ */ jsxs("span", {
									className: "relative flex h-full items-center gap-4 overflow-hidden rounded-[calc(1rem-1px)] bg-ink px-5 py-4 sm:px-6",
									children: [
										/* @__PURE__ */ jsx("span", {
											"aria-hidden": "true",
											className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
											style: spotlightStyle
										}),
										/* @__PURE__ */ jsx("span", {
											className: "relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-ink",
											children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" })
										}),
										/* @__PURE__ */ jsxs("span", {
											className: "relative min-w-0",
											children: [/* @__PURE__ */ jsx("span", {
												className: "block font-display text-xl text-ink-foreground",
												children: "Work With Me"
											}), /* @__PURE__ */ jsx("span", {
												className: "mt-0.5 block text-sm font-light text-ink-foreground/65",
												children: "Chat on WhatsApp"
											})]
										}),
										/* @__PURE__ */ jsx(ArrowUpRight, { className: "relative ml-auto h-5 w-5 shrink-0 text-gold transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })
									]
								})]
							}), /* @__PURE__ */ jsxs("a", {
								href: `mailto:${EMAIL}?subject=Brand%20Collaboration`,
								onPointerMove: trackPointer,
								className: "group relative block overflow-hidden rounded-2xl border border-ink-foreground/15 bg-ink-foreground/[0.04] transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 motion-reduce:hover:translate-y-0",
								children: [/* @__PURE__ */ jsx("span", {
									"aria-hidden": "true",
									className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
									style: spotlightStyle
								}), /* @__PURE__ */ jsxs("span", {
									className: "relative flex h-full items-center gap-4 px-5 py-4 sm:px-6",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/10 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink",
											children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" })
										}),
										/* @__PURE__ */ jsxs("span", {
											className: "min-w-0",
											children: [/* @__PURE__ */ jsx("span", {
												className: "block font-display text-xl text-ink-foreground",
												children: "Brand Collaboration"
											}), /* @__PURE__ */ jsx("span", {
												className: "mt-0.5 block truncate text-sm font-light text-ink-foreground/65",
												children: EMAIL
											})]
										}),
										/* @__PURE__ */ jsx(ArrowUpRight, { className: "ml-auto h-5 w-5 shrink-0 text-gold transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })
									]
								})]
							})]
						})
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/site/Footer.tsx
var SOCIALS = [
	{
		label: "Instagram",
		href: INSTAGRAM_URL,
		icon: Instagram
	},
	{
		label: "YouTube",
		href: "https://www.youtube.com/alaamirkhan",
		icon: Youtube
	},
	{
		label: "Facebook",
		href: FACEBOOK_URL,
		icon: Facebook
	}
];
function ContactRow({ href, icon, children }) {
	return /* @__PURE__ */ jsxs("a", {
		href,
		className: "group inline-flex max-w-full items-center gap-3 text-sm font-light text-ink-foreground/65 transition-colors duration-300 hover:text-gold",
		children: [/* @__PURE__ */ jsx("span", {
			className: "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink-foreground/15 text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink",
			children: icon
		}), /* @__PURE__ */ jsx("span", {
			className: "min-w-0 break-words",
			children
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "relative overflow-hidden bg-ink pt-14 text-ink-foreground sm:pt-16",
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,color-mix(in_srgb,var(--gold)_10%,transparent),transparent_70%)]"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid gap-10 md:grid-cols-[1.3fr_1fr_1.1fr] md:gap-12",
					children: [
						/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("p", {
								className: "font-display text-xl tracking-[0.2em] text-ink-foreground",
								children: "AL AAMIR KHAN"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 max-w-sm text-sm leading-relaxed font-light text-ink-foreground/60",
								children: "Digital creator, storyteller and influencer based in India."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-6 flex gap-3",
								children: SOCIALS.map(({ label, href, icon: Icon }) => /* @__PURE__ */ jsx("a", {
									href,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": label,
									className: "grid h-11 w-11 place-items-center rounded-full border border-ink-foreground/20 text-ink-foreground/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-ink hover:shadow-[0_14px_30px_-14px_var(--gold)] motion-reduce:hover:translate-y-0",
									children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
								}, label))
							})
						] }) }),
						/* @__PURE__ */ jsx(Reveal, {
							delay: .08,
							children: /* @__PURE__ */ jsxs("nav", {
								"aria-label": "Quick links",
								children: [/* @__PURE__ */ jsx("p", {
									className: "eyebrow text-gold",
									children: "Quick Links"
								}), /* @__PURE__ */ jsx("ul", {
									className: "mt-5 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1",
									children: NAV_LINKS.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
										href: l.href,
										className: "group inline-flex items-center gap-2 text-sm font-light text-ink-foreground/65 transition-colors duration-300 hover:text-gold",
										children: [/* @__PURE__ */ jsx("span", { className: "h-px w-0 bg-gold transition-all duration-300 group-hover:w-3" }), l.label]
									}) }, l.href))
								})]
							})
						}),
						/* @__PURE__ */ jsx(Reveal, {
							delay: .16,
							children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "eyebrow text-gold",
								children: "Get in touch"
							}), /* @__PURE__ */ jsxs("ul", {
								className: "mt-5 space-y-3",
								children: [/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(ContactRow, {
									href: `mailto:${EMAIL}`,
									icon: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
									children: EMAIL
								}) }), /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(ContactRow, {
									href: `tel:+${WHATSAPP_NUMBER}`,
									icon: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
									children: PHONE_DISPLAY
								}) })]
							})] })
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-foreground/10 pt-6 sm:flex-row",
					children: [/* @__PURE__ */ jsxs("p", {
						className: "text-center text-xs tracking-[0.14em] text-ink-foreground/45 uppercase sm:text-left",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" AL Aamir Khan. All rights reserved."
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-5",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-xs tracking-[0.14em] text-ink-foreground/35 uppercase",
							children: "Official Website"
						}), /* @__PURE__ */ jsx("a", {
							href: "#home",
							"aria-label": "Back to top",
							className: "group grid h-10 w-10 place-items-center rounded-full border border-ink-foreground/20 text-ink-foreground/80 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink",
							children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" })
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsx(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ jsx("p", {
					"aria-hidden": "true",
					className: "pointer-events-none mt-4 -mb-[0.18em] select-none bg-gradient-to-b from-ink-foreground/[0.14] to-transparent bg-clip-text text-center font-display text-[clamp(2.25rem,10.5vw,9.5rem)] leading-none tracking-[0.06em] whitespace-nowrap text-transparent",
					children: "AL AAMIR KHAN"
				})
			})
		]
	});
}
//#endregion
//#region src/components/site/WhatsAppButton.tsx
function WhatsAppButton() {
	return /* @__PURE__ */ jsxs(motion.a, {
		href: WHATSAPP_URL,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat on WhatsApp",
		initial: {
			opacity: 0,
			scale: .8
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		transition: {
			delay: 1.2,
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		whileHover: { scale: 1.08 },
		whileTap: { scale: .95 },
		className: "group fixed right-10 bottom-10 z-50 grid h-14 w-14 place-items-center rounded-full bg-ink text-ink-foreground shadow-[var(--shadow-lift)] ring-1 ring-gold/40 transition-colors duration-500 hover:bg-gold hover:text-ink sm:right-8 sm:bottom-8",
		children: [/* @__PURE__ */ jsx("span", { className: "absolute inset-0 animate-ping rounded-full bg-gold/25 [animation-duration:3s]" }), /* @__PURE__ */ jsx(MessageCircle, { className: "relative h-6 w-6" })]
	});
}
//#endregion
//#region src/components/site/Youtube.tsx
var AUTOPLAY_MS = 5500;
var FLIP_S = .95;
var EASE = [
	.22,
	1,
	.36,
	1
];
var RINGS = 6;
var SWIPE_THRESHOLD = 50;
var SWIPE_VERTICAL_TOLERANCE = 80;
var VIDEOS = [
	{
		title: "Jab Helicopter First Time Gaon Mein Utra Vlog 😍",
		thumbnail: "https://img.youtube.com/vi/I2FeuMMus40/hqdefault.jpg",
		url: "https://www.youtube.com/watch?v=I2FeuMMus40"
	},
	{
		title: "Tiger Mila Safari में 😍 Pench National Park Vlog",
		thumbnail: "https://img.youtube.com/vi/EkvqOGZZF4g/hqdefault.jpg",
		url: "https://www.youtube.com/watch?v=EkvqOGZZF4g"
	},
	{
		title: "Russian Waiters in Indian Wedding 😍 VIP Shadi Ka Khana Vlog",
		thumbnail: "https://img.youtube.com/vi/Tw8i5CSWtCI/hqdefault.jpg",
		url: "https://www.youtube.com/watch?v=Tw8i5CSWtCI"
	},
	{
		title: "One Day in Clock Towers Makkah | Visiting Kaaba Sharif",
		thumbnail: "https://img.youtube.com/vi/9KbxKL7AuAk/hqdefault.jpg",
		url: "https://www.youtube.com/watch?v=9KbxKL7AuAk"
	},
	{
		title: "5 Star Hotel का Breakfast - Jehan Numa Palace Buffet",
		thumbnail: "https://img.youtube.com/vi/JGhHDNKS_dg/hqdefault.jpg",
		url: "https://www.youtube.com/watch?v=JGhHDNKS_dg"
	},
	{
		title: "Bhopal का Mela 2022 - Jhula अब नही झूलेंगे 🥲",
		thumbnail: "https://img.youtube.com/vi/qmQ0N8X2Ajk/hqdefault.jpg",
		url: "https://www.youtube.com/watch?v=qmQ0N8X2Ajk"
	},
	{
		title: "12 Crores की Car 🔥 Bhopal Auto Expo 2022",
		thumbnail: "https://img.youtube.com/vi/VFgidddpRmY/hqdefault.jpg",
		url: "https://www.youtube.com/watch?v=VFgidddpRmY"
	},
	{
		title: "Taj Hotel Ka Khana 🔥",
		thumbnail: "https://img.youtube.com/vi/xsyDLE-cNxY/hqdefault.jpg",
		url: "https://www.youtube.com/watch?v=xsyDLE-cNxY"
	}
];
var CAROUSEL_CSS = `
@keyframes yt-progress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

.yt-fill {
  animation: yt-progress ${AUTOPLAY_MS}ms linear both;
}

.yt-carousel[data-paused="true"] .yt-fill {
  animation-play-state: paused;
}

.yt-carousel {
  touch-action: pan-y;
  user-select: none;
  -webkit-user-select: none;
}

.yt-carousel a,
.yt-carousel button {
  -webkit-tap-highlight-color: transparent;
}

@property --fold {
  syntax: "<length>";
  inherits: true;
  initial-value: 44px;
}

.yt-page {
  --fold: 44px;
  transition: --fold 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  clip-path: polygon(
    0 0,
    calc(100% - var(--fold)) 0,
    100% var(--fold),
    100% 100%,
    0 100%
  );
}

@media (min-width: 640px) {
  .yt-page { --fold: 56px; }
}

.yt-page:has(.yt-fold:hover),
.yt-page:has(.yt-fold:focus-visible) {
  --fold: 74px;
}

.yt-flap {
  clip-path: polygon(0 0, 0 100%, 100% 100%);
  background: linear-gradient(
    to bottom left,
    #fffdf6 0%,
    #ddd5bf 55%,
    #c4baa0 100%
  );
}

@media (prefers-reduced-motion: reduce) {
  .yt-page { transition: none; }
}
`;
var flipVariants = {
	enter: (dir) => dir > 0 ? {
		rotateY: 0,
		scale: .94,
		filter: "brightness(0.6)",
		zIndex: 1
	} : {
		rotateY: -100,
		scale: 1,
		filter: "brightness(0.7)",
		zIndex: 3
	},
	center: {
		rotateY: 0,
		scale: 1,
		filter: "brightness(1)",
		zIndex: 2,
		transition: {
			duration: FLIP_S,
			ease: EASE
		}
	},
	exit: (dir) => dir > 0 ? {
		rotateY: -100,
		scale: 1,
		filter: "brightness(0.7)",
		zIndex: 3,
		transition: {
			duration: FLIP_S,
			ease: [
				.4,
				0,
				.2,
				1
			]
		}
	} : {
		rotateY: 0,
		scale: .94,
		filter: "brightness(0.6)",
		zIndex: 1,
		transition: {
			duration: FLIP_S,
			ease: EASE
		}
	}
};
var fadeVariants = {
	enter: { opacity: 0 },
	center: {
		opacity: 1,
		transition: { duration: .4 }
	},
	exit: {
		opacity: 0,
		transition: { duration: .3 }
	}
};
function extractVideoId(url) {
	try {
		const parsed = new URL(url);
		if (parsed.hostname.includes("youtube.com")) return parsed.searchParams.get("v") ?? "";
		if (parsed.hostname.includes("youtu.be")) return parsed.pathname.split("/").filter(Boolean)[0] ?? "";
	} catch {
		return "";
	}
	return "";
}
function openYouTube(e, url) {
	if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) return;
	const videoId = extractVideoId(url);
	if (!videoId) return;
	e.preventDefault();
	const fallback = window.setTimeout(() => {
		window.open(url, "_blank", "noopener");
	}, 900);
	const onHide = () => {
		if (document.hidden) window.clearTimeout(fallback);
	};
	document.addEventListener("visibilitychange", onHide, { once: true });
	window.location.href = `youtube://www.youtube.com/watch?v=${videoId}`;
}
function usePerPage() {
	const [perPage, setPerPage] = useState(4);
	useEffect(() => {
		const lg = window.matchMedia("(min-width: 1024px)");
		const sm = window.matchMedia("(min-width: 640px)");
		const update = () => {
			setPerPage(lg.matches ? 4 : sm.matches ? 2 : 1);
		};
		update();
		lg.addEventListener("change", update);
		sm.addEventListener("change", update);
		return () => {
			lg.removeEventListener("change", update);
			sm.removeEventListener("change", update);
		};
	}, []);
	return perPage;
}
function VideoCard({ video }) {
	const suppressClick = useRef(false);
	const suppressTimer = useRef(null);
	useEffect(() => {
		return () => {
			if (suppressTimer.current !== null) window.clearTimeout(suppressTimer.current);
		};
	}, []);
	function handlePointerDown(e) {
		suppressClick.current = false;
	}
	function handleClick(e) {
		if (suppressClick.current) {
			e.preventDefault();
			e.stopPropagation();
			suppressClick.current = false;
			return;
		}
		openYouTube(e, video.url);
	}
	return /* @__PURE__ */ jsxs("a", {
		href: video.url,
		target: "_blank",
		rel: "noopener noreferrer",
		onPointerDown: handlePointerDown,
		onClick: handleClick,
		className: "group relative block aspect-video overflow-hidden rounded-lg bg-black shadow-[0_10px_20px_-10px_rgba(0,0,0,0.55)] ring-1 ring-black/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_30px_-12px_rgba(225,48,108,0.5)] hover:ring-gold/70 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: video.thumbnail,
				alt: video.title,
				loading: "lazy",
				draggable: false,
				className: "pointer-events-none absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.07] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
			}),
			/* @__PURE__ */ jsx("span", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-[900ms] ease-out group-hover:translate-x-[420%] group-hover:opacity-100 motion-reduce:hidden"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/75 to-black/30 px-3.5 py-2.5 backdrop-blur-[2px]",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "line-clamp-2 text-xs leading-snug font-medium text-white sm:text-sm",
					children: video.title
				}), /* @__PURE__ */ jsxs("span", {
					className: "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-black",
					children: [/* @__PURE__ */ jsx("span", {
						"aria-hidden": "true",
						className: "absolute inset-0 rounded-full bg-gold/50 opacity-0 group-hover:animate-ping group-hover:opacity-100 motion-reduce:hidden"
					}), /* @__PURE__ */ jsx(Play, { className: "relative h-3.5 w-3.5 fill-current" })]
				})]
			})
		]
	});
}
function YoutubeSection() {
	const reduce = useReducedMotion();
	const perPage = usePerPage();
	const pages = useMemo(() => {
		const chunks = [];
		for (let i = 0; i < VIDEOS.length; i += perPage) chunks.push(VIDEOS.slice(i, i + perPage));
		return chunks;
	}, [perPage]);
	const pageCount = pages.length;
	const [state, setState] = useState({
		page: 0,
		dir: 1
	});
	const [paused, setPaused] = useState(false);
	const pointerStart = useRef(null);
	const suppressClick = useRef(false);
	const suppressTimer = useRef(null);
	useEffect(() => {
		setState({
			page: 0,
			dir: 1
		});
	}, [perPage]);
	useEffect(() => {
		return () => {
			if (suppressTimer.current !== null) window.clearTimeout(suppressTimer.current);
		};
	}, []);
	const page = Math.min(state.page, pageCount - 1);
	function paginate(dir) {
		if (pageCount <= 1) return;
		setState((s) => ({
			page: (Math.min(s.page, pageCount - 1) + dir + pageCount) % pageCount,
			dir
		}));
	}
	function goTo(index) {
		if (index === page) return;
		setState({
			page: index,
			dir: index > page ? 1 : -1
		});
	}
	function onKeyDown(e) {
		if (e.key === "ArrowRight") paginate(1);
		if (e.key === "ArrowLeft") paginate(-1);
	}
	function onPointerDown(e) {
		if (!e.isPrimary || e.pointerType === "mouse" && e.button !== 0) return;
		pointerStart.current = {
			x: e.clientX,
			y: e.clientY,
			pointerId: e.pointerId,
			target: e.target
		};
	}
	function onPointerUp(e) {
		const start = pointerStart.current;
		if (!start || start.pointerId !== e.pointerId) return;
		const deltaX = e.clientX - start.x;
		const deltaY = e.clientY - start.y;
		pointerStart.current = null;
		if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaY) > SWIPE_VERTICAL_TOLERANCE || Math.abs(deltaX) < Math.abs(deltaY)) return;
		suppressClick.current = true;
		if (suppressTimer.current !== null) window.clearTimeout(suppressTimer.current);
		suppressTimer.current = window.setTimeout(() => {
			suppressClick.current = false;
		}, 500);
		paginate(deltaX < 0 ? 1 : -1);
	}
	function onPointerCancel() {
		pointerStart.current = null;
	}
	function onCarouselClickCapture(e) {
		if (!suppressClick.current) return;
		e.preventDefault();
		e.stopPropagation();
		suppressClick.current = false;
		if (suppressTimer.current !== null) {
			window.clearTimeout(suppressTimer.current);
			suppressTimer.current = null;
		}
	}
	const autoplay = !reduce && pageCount > 1;
	return /* @__PURE__ */ jsxs("section", {
		id: "youtube",
		className: "relative scroll-mt-16 overflow-hidden bg-ink py-10 text-ink-foreground sm:py-28",
		children: [
			/* @__PURE__ */ jsx("style", { children: CAROUSEL_CSS }),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_0%,rgba(255,45,111,0.18),transparent_70%),radial-gradient(50%_45%_at_90%_100%,rgba(255,170,60,0.12),transparent_70%)]"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid gap-6 md:grid-cols-[1fr_auto] md:items-center",
					children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-xs font-medium tracking-[0.25em] text-gold uppercase",
							children: "Watch on YouTube"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-4 text-4xl leading-tight font-light tracking-tight text-ink-foreground sm:text-5xl",
							children: "Big stories, told in full."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 max-w-xl text-base leading-relaxed font-light text-ink-foreground/70",
							children: "From village vlogs to home makeovers, watch the full videos on our channel."
						})
					] }) }), /* @__PURE__ */ jsx(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ jsxs("a", {
							href: "https://www.youtube.com/alaamirkhan",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1.5 rounded-full border border-ink-foreground/25 bg-white/5 px-4 py-2 text-[10px] tracking-[0.18em] text-ink-foreground uppercase backdrop-blur-sm transition hover:border-gold hover:text-gold",
							children: [/* @__PURE__ */ jsx(Youtube, { className: "h-3.5 w-3.5" }), "Visit YouTube Channel"]
						})
					})]
				}), /* @__PURE__ */ jsx(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ jsxs("div", {
						role: "region",
						"aria-roledescription": "carousel",
						"aria-label": "YouTube videos",
						"data-paused": paused,
						onKeyDown,
						onPointerDown,
						onPointerUp,
						onPointerCancel,
						onClickCapture: onCarouselClickCapture,
						onPointerEnter: (e) => {
							if (e.pointerType === "mouse") setPaused(true);
						},
						onPointerLeave: (e) => {
							if (e.pointerType === "mouse") setPaused(false);
							pointerStart.current = null;
						},
						onFocus: (e) => {
							if (e.target.matches(":focus-visible")) setPaused(true);
						},
						onBlur: () => setPaused(false),
						className: "yt-carousel relative mt-12 pl-3 touch-pan-y sm:mt-14 sm:px-16",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative mr-2 mb-2 sm:mr-3 sm:mb-3",
							children: [
								/* @__PURE__ */ jsx("div", {
									"aria-hidden": "true",
									className: "absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-sm bg-[repeating-linear-gradient(90deg,#e9e3d3_0_2px,#cdc5ae_2px_3px)] shadow-[0_30px_50px_-20px_rgba(0,0,0,0.9)] sm:translate-x-3 sm:translate-y-3"
								}),
								/* @__PURE__ */ jsx("div", {
									"aria-hidden": "true",
									className: "absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-sm bg-[repeating-linear-gradient(90deg,#f1ecdd_0_2px,#d6cfba_2px_3px)] sm:translate-x-[7px] sm:translate-y-[7px]"
								}),
								/* @__PURE__ */ jsx("div", {
									"aria-live": "off",
									className: "relative z-10 grid [perspective:3000px]",
									children: /* @__PURE__ */ jsx(AnimatePresence, {
										initial: false,
										custom: state.dir,
										children: /* @__PURE__ */ jsxs(motion.div, {
											custom: state.dir,
											variants: reduce ? fadeVariants : flipVariants,
											initial: "enter",
											animate: "center",
											exit: "exit",
											style: {
												transformOrigin: "left center",
												backfaceVisibility: "hidden",
												backgroundColor: "#f4efe2",
												backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.08) 22px, rgba(0,0,0,0) 56px), radial-gradient(120% 90% at 70% 0%, rgba(255,255,255,0.55), rgba(255,255,255,0) 60%)"
											},
											className: "yt-page relative col-start-1 row-start-1 flex flex-col rounded-sm px-4 pt-5 pb-3 pl-9 sm:px-6 sm:pt-6 sm:pl-12",
											children: [
												/* @__PURE__ */ jsx("div", {
													"aria-hidden": "true",
													className: "pointer-events-none absolute inset-y-0 left-2 flex flex-col justify-evenly py-6 sm:left-3",
													children: Array.from({ length: RINGS }).map((_, i) => /* @__PURE__ */ jsx("span", { className: "block h-2.5 w-2.5 rounded-full bg-[#3a3326]/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]" }, i))
												}),
												/* @__PURE__ */ jsx("div", {
													className: "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4",
													children: pages[page].map((video, i) => /* @__PURE__ */ jsx(VideoCard, { video }, `${video.url}-${i}`))
												}),
												/* @__PURE__ */ jsxs("p", {
													className: "mt-3 text-center font-serif text-xs italic tracking-wider text-black/45",
													children: [
														"— ",
														page + 1,
														" / ",
														pageCount,
														" —"
													]
												}),
												/* @__PURE__ */ jsx("div", {
													className: "pointer-events-none absolute top-0 right-0 [filter:drop-shadow(-3px_4px_4px_rgba(60,45,20,0.4))]",
													style: {
														width: "var(--fold)",
														height: "var(--fold)"
													},
													children: /* @__PURE__ */ jsx("button", {
														type: "button",
														"aria-label": "Turn to next page",
														tabIndex: pageCount > 1 ? 0 : -1,
														onClick: () => paginate(1),
														className: "yt-fold yt-flap pointer-events-auto block h-full w-full cursor-pointer"
													})
												})
											]
										}, `${perPage}-${page}`)
									})
								}),
								/* @__PURE__ */ jsx("div", {
									"aria-hidden": "true",
									className: "pointer-events-none absolute inset-y-0 -left-3 z-40 flex flex-col justify-evenly py-6 sm:-left-4",
									children: Array.from({ length: RINGS }).map((_, i) => /* @__PURE__ */ jsx("span", { className: "block h-2.5 w-7 rounded-full bg-[linear-gradient(180deg,#fafafa_0%,#a8a8a8_50%,#6e6e6e_100%)] shadow-[0_2px_3px_rgba(0,0,0,0.55)] sm:h-3 sm:w-9" }, i))
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-8 flex items-center justify-center gap-1",
							children: pages.map((_, i) => {
								const active = i === page;
								return /* @__PURE__ */ jsx("button", {
									type: "button",
									"aria-label": `Go to page ${i + 1} of ${pageCount}`,
									"aria-current": active ? "true" : void 0,
									onClick: () => goTo(i),
									className: "group p-2",
									children: /* @__PURE__ */ jsx("span", {
										className: `relative block h-1.5 overflow-hidden rounded-full bg-ink-foreground/25 transition-all duration-500 group-hover:bg-ink-foreground/50 ${active ? "w-10" : "w-1.5"}`,
										children: active && (autoplay ? /* @__PURE__ */ jsx("span", {
											className: "yt-fill absolute inset-0 origin-left bg-gold",
											onAnimationEnd: (e) => {
												if (e.animationName === "yt-progress") paginate(1);
											}
										}, `${perPage}-${page}`) : /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-gold" }))
									})
								}, i);
							})
						})]
					})
				})]
			})
		]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-background",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(SocialProof, {}),
				/* @__PURE__ */ jsx(About, {}),
				/* @__PURE__ */ jsx(Brands, {}),
				/* @__PURE__ */ jsx(Reels, {}),
				/* @__PURE__ */ jsx(YoutubeSection, {}),
				/* @__PURE__ */ jsx(Media, {}),
				/* @__PURE__ */ jsx(Contact, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(WhatsAppButton, {})
		]
	});
}
//#endregion
export { Index as component };
