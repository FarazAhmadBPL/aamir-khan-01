import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";

export const INSTAGRAM_URL = "https://www.instagram.com/alaamirkhan?igsh=M3RtNTY5dzFyeW10";
export const FACEBOOK_URL = "https://www.facebook.com/share/1YKoupT83u/?mibextid=wwXIfr";
export const EMAIL = "teamalaamir@gmail.com";
export const PHONE_DISPLAY = "+91 92448 15161";
export const WHATSAPP_NUMBER = "919244815161";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello AL Aamir Khan, I'd like to discuss a collaboration.",
)}`;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  // { label: "Achievements", href: "#achievements" },
  { label: "Brands", href: "#brands" },
  { label: "Instagram", href: "#instagram" },
  { label: "YouTube", href: "#youtube" },
  { label: "Media", href: "#media" },
  // { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_PROOF = [
  { value: 25000000, suffix: "+", label: "Monthly Reach" },
  { value: 50, suffix: "+", label: "Brand Collaborations" },
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
    text: "First frames, first stories - a phone camera, a notebook of ideas and an unreasonable belief in the craft.",
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
  // Fashion & Apparel
  { image: reel1, brand: "Urban Threads", category: "Fashion & Apparel", featured: true, likes: "128K", caption: "Everyday style, elevated ✨", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },
  { image: reel2, brand: "Style Avenue", category: "Fashion & Apparel", featured: false, likes: "94.6K", caption: "New season, new looks 👕", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },
  { image: reel3, brand: "Classic Wear", category: "Fashion & Apparel", featured: false, likes: "212K", caption: "Find your signature style 😎", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },
  { image: reel4, brand: "Street Culture", category: "Fashion & Apparel", featured: false, likes: "76.2K", caption: "Streetwear essentials 🔥", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },

  // Restaurants & Cafés
  { image: reel2, brand: "Bhopal Food House", category: "Restaurants & Cafés", featured: true, likes: "105K", caption: "A must-try spot for food lovers 🍔", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },
  { image: reel3, brand: "The Coffee Corner", category: "Restaurants & Cafés", featured: false, likes: "82K", caption: "Coffee, conversations and good vibes ☕", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },
  { image: reel4, brand: "Spice Junction", category: "Restaurants & Cafés", featured: false, likes: "67.4K", caption: "Flavours worth coming back for 😋", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },
  { image: reel1, brand: "Cafe Boulevard", category: "Restaurants & Cafés", featured: false, likes: "91K", caption: "Your next café hangout 📍", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },

  // Real Estate
  { image: reel3, brand: "Prime Properties", category: "Real Estate", featured: false, likes: "116K", caption: "Discover a place to call home 🏡", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },
  { image: reel1, brand: "Bhopal Realty", category: "Real Estate", featured: false, likes: "73K", caption: "Your property search starts here 🔑", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },
  { image: reel2, brand: "Urban Nest", category: "Real Estate", featured: false, likes: "88.5K", caption: "Modern homes, thoughtful spaces 🏙️", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },
  { image: reel4, brand: "Landmark Estates", category: "Real Estate", featured: false, likes: "64K", caption: "Explore your next investment 📈", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },

  // Farmhouses & Villas
  { image: reel4, brand: "Green Acres Villa", category: "Farmhouses & Villas", featured: false, likes: "54K", caption: "A peaceful escape from the city 🌿", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },
  { image: reel1, brand: "The Weekend Estate", category: "Farmhouses & Villas", featured: false, likes: "62K", caption: "Make weekends feel special 🌳", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },
  { image: reel2, brand: "Royal Farm Retreat", category: "Farmhouses & Villas", featured: false, likes: "47.8K", caption: "Space to relax and reconnect ✨", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },
  { image: reel3, brand: "Palm Grove Villas", category: "Farmhouses & Villas", featured: false, likes: "71K", caption: "Your private getaway awaits 🏡", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },

  // Hotels & Resorts
  { image: reel1, brand: "Grand Palace Hotel", category: "Hotels & Resorts", featured: false, likes: "93K", caption: "Experience a stay beyond ordinary 🛎️", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },
  { image: reel2, brand: "Lakeview Resort", category: "Hotels & Resorts", featured: false, likes: "81K", caption: "Wake up to beautiful views 🌅", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },
  { image: reel3, brand: "The Heritage Inn", category: "Hotels & Resorts", featured: false, likes: "58.6K", caption: "Comfort meets timeless hospitality 🛏️", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },
  { image: reel4, brand: "Serenity Retreat", category: "Hotels & Resorts", featured: false, likes: "69K", caption: "Check in, slow down and unwind 🌴", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },

  // Automobiles
  { image: reel3, brand: "Premium Motors", category: "Automobiles", featured: false, likes: "142K", caption: "Meet your next drive 🚘", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },
  { image: reel4, brand: "Drive District", category: "Automobiles", featured: false, likes: "98K", caption: "Designed for the open road 🛣️", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },
  { image: reel1, brand: "Velocity Auto", category: "Automobiles", featured: false, likes: "76.5K", caption: "Power, precision and performance ⚡", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },
  { image: reel2, brand: "Elite Wheels", category: "Automobiles", featured: false, likes: "112K", caption: "Find the car that fits your lifestyle 🏁", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },

  // Luxury Lifestyle
  { image: reel4, brand: "The Luxe Edit", category: "Luxury Lifestyle", featured: false, likes: "87K", caption: "The finer details make the difference ✨", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },
  { image: reel1, brand: "Prestige Living", category: "Luxury Lifestyle", featured: false, likes: "124K", caption: "A closer look at refined living 🥂", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },
  { image: reel2, brand: "Opulent India", category: "Luxury Lifestyle", featured: false, likes: "69.8K", caption: "Luxury in every little detail 💎", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },
  { image: reel3, brand: "Signature Society", category: "Luxury Lifestyle", featured: false, likes: "101K", caption: "Discover a more considered lifestyle 🖤", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },

  // Fragrances & Perfumes
  { image: reel1, brand: "Oud House", category: "Fragrances & Perfumes", featured: false, likes: "65K", caption: "A fragrance that leaves an impression 🌹", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },
  { image: reel2, brand: "Scent Stories", category: "Fragrances & Perfumes", featured: false, likes: "73.2K", caption: "Find your signature scent 💫", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },
  { image: reel3, brand: "Essence Atelier", category: "Fragrances & Perfumes", featured: false, likes: "51K", caption: "Crafted for unforgettable moments 🌸", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },
  { image: reel4, brand: "Aura Perfumes", category: "Fragrances & Perfumes", featured: false, likes: "89K", caption: "A new layer of everyday elegance ✨", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },

  // Beauty & Skincare
  { image: reel2, brand: "Glow Theory", category: "Beauty & Skincare", featured: false, likes: "134K", caption: "Build your everyday skincare routine 🧴", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },
  { image: reel3, brand: "Pure Radiance", category: "Beauty & Skincare", featured: false, likes: "92K", caption: "A little self-care goes a long way 💖", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },
  { image: reel4, brand: "Skin Rituals", category: "Beauty & Skincare", featured: false, likes: "78.4K", caption: "Simple steps, thoughtful care 🌿", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },
  { image: reel1, brand: "Beauty Lab", category: "Beauty & Skincare", featured: false, likes: "109K", caption: "Discover your daily glow ✨", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },

  // Watches & Accessories
  { image: reel3, brand: "TimeCraft", category: "Watches & Accessories", featured: false, likes: "56K", caption: "Every second tells a story ⌚", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },
  { image: reel4, brand: "The Accessory Room", category: "Watches & Accessories", featured: false, likes: "83K", caption: "Small details, big impact ✨", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },
  { image: reel1, brand: "Chrono House", category: "Watches & Accessories", featured: false, likes: "68.7K", caption: "Timeless style for every occasion 🕰️", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },
  { image: reel2, brand: "Modern Metals", category: "Watches & Accessories", featured: false, likes: "49K", caption: "Finish your look with the right detail 💍", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },

  // Fine Jewellery
  { image: reel1, brand: "Golden Arc", category: "Fine Jewellery", featured: false, likes: "128K", caption: "Jewellery that makes moments shine 💛", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },
  { image: reel2, brand: "Heirloom Jewels", category: "Fine Jewellery", featured: false, likes: "94.6K", caption: "Tradition meets contemporary design 💎", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },
  { image: reel3, brand: "Regal Ornaments", category: "Fine Jewellery", featured: false, likes: "72K", caption: "Celebrate every special occasion ✨", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },
  { image: reel4, brand: "The Gold Studio", category: "Fine Jewellery", featured: false, likes: "86.5K", caption: "A timeless touch of elegance 🌟", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },

  // Travel & Tourism
  { image: reel2, brand: "Explore India", category: "Travel & Tourism", featured: false, likes: "118K", caption: "Your next adventure starts here 🧳", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },
  { image: reel3, brand: "Wander Trails", category: "Travel & Tourism", featured: false, likes: "97K", caption: "Discover places worth remembering 🌍", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },
  { image: reel4, brand: "Hidden Horizons", category: "Travel & Tourism", featured: false, likes: "74.3K", caption: "Take the scenic route 🚗", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },
  { image: reel1, brand: "Holiday Diaries", category: "Travel & Tourism", featured: false, likes: "105K", caption: "Turn your travel plans into memories 📸", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },

  // Food & Beverages
  { image: reel2, brand: "Fresh Sip Co.", category: "Food & Beverages", featured: false, likes: "66K", caption: "Refresh your day with every sip 🥤", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },
  { image: reel3, brand: "The Snack Studio", category: "Food & Beverages", featured: false, likes: "89K", caption: "Snack time just got better 🍟", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },
  { image: reel4, brand: "Harvest Table", category: "Food & Beverages", featured: false, likes: "57.5K", caption: "Good ingredients, great taste 🥗", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },
  { image: reel1, brand: "Daily Brew", category: "Food & Beverages", featured: false, likes: "102K", caption: "A fresh favourite for every day ☕", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },

  // Interior Design
  { image: reel4, brand: "Space & Form", category: "Interior Design", featured: false, likes: "79K", caption: "Thoughtful design changes everything 🛋️", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },
  { image: reel1, brand: "Studio Habitat", category: "Interior Design", featured: false, likes: "91.6K", caption: "A fresh perspective on modern spaces 🏠", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },
  { image: reel2, brand: "Design District", category: "Interior Design", featured: false, likes: "62K", caption: "Where creativity meets functionality 📐", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },
  { image: reel3, brand: "Form & Finish", category: "Interior Design", featured: false, likes: "84K", caption: "Details that bring a room together ✨", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },

  // Home & Decor
  { image: reel1, brand: "Cozy Corners", category: "Home & Decor", featured: false, likes: "61K", caption: "Make yourself at home 🏡", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },
  { image: reel2, brand: "Casa Living", category: "Home & Decor", featured: false, likes: "75.8K", caption: "Little touches, lovely spaces 🌿", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },
  { image: reel3, brand: "Nest & Nook", category: "Home & Decor", featured: false, likes: "48K", caption: "Bring warmth into every corner 🕯️", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },
  { image: reel4, brand: "Everyday Home", category: "Home & Decor", featured: false, likes: "93K", caption: "Simple ideas for a beautiful home 🪴", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },

  // Wellness & Fitness
  { image: reel3, brand: "Fit District", category: "Wellness & Fitness", featured: false, likes: "143K", caption: "Small steps, stronger habits 💪", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },
  { image: reel4, brand: "Balance Studio", category: "Wellness & Fitness", featured: false, likes: "86K", caption: "Make time for your wellbeing 🧘", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },
  { image: reel1, brand: "Active Life", category: "Wellness & Fitness", featured: false, likes: "112K", caption: "Move more, feel better 🏃", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },
  { image: reel2, brand: "Mindful Moments", category: "Wellness & Fitness", featured: false, likes: "69.4K", caption: "A little balance goes a long way 🌱", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },

  // Consumer Technology
  { image: reel4, brand: "NextGen Tech", category: "Consumer Technology", featured: false, likes: "107K", caption: "Technology made for everyday life 📱", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },
  { image: reel1, brand: "Gadget Garage", category: "Consumer Technology", featured: false, likes: "88K", caption: "Take a closer look at the latest tech 🎧", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },
  { image: reel2, brand: "Smart Living Tech", category: "Consumer Technology", featured: false, likes: "73.5K", caption: "Smarter features, simpler living ⚡", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },
  { image: reel3, brand: "Digital Hub", category: "Consumer Technology", featured: false, likes: "99K", caption: "Discover your next favourite gadget 💻", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },

  // Premium Retail
  { image: reel1, brand: "The Premium Store", category: "Premium Retail", featured: false, likes: "64K", caption: "A curated shopping experience 🛍️", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },
  { image: reel2, brand: "Select Avenue", category: "Premium Retail", featured: false, likes: "78K", caption: "Discover something a little different ✨", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },
  { image: reel3, brand: "Signature Select", category: "Premium Retail", featured: false, likes: "53.7K", caption: "Thoughtful picks for modern living 🖤", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },
  { image: reel4, brand: "The Curated Edit", category: "Premium Retail", featured: false, likes: "96K", caption: "Find your next favourite here 🎁", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },

  // Events & Experiences
  { image: reel2, brand: "Grand Moments Events", category: "Events & Experiences", featured: false, likes: "121K", caption: "Make every celebration memorable 🎉", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },
  { image: reel3, brand: "The Event Atelier", category: "Events & Experiences", featured: false, likes: "87K", caption: "Beautifully planned, brilliantly remembered ✨", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },
  { image: reel4, brand: "Celebration Co.", category: "Events & Experiences", featured: false, likes: "69K", caption: "Bring people together in style 🥂", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },
  { image: reel1, brand: "Moments & More", category: "Events & Experiences", featured: false, likes: "102K", caption: "Every detail deserves its moment 📸", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },

  // Luxury Experiences
  { image: reel3, brand: "Beyond Ordinary", category: "Luxury Experiences", featured: false, likes: "114K", caption: "Discover experiences worth remembering 🌟", url: "https://www.instagram.com/reel/DbXy5EuNFsj/" },
  { image: reel4, brand: "The Privilege Club", category: "Luxury Experiences", featured: false, likes: "82.6K", caption: "Make room for something extraordinary 🥂", url: "https://www.instagram.com/reel/DbLpqVPtRkN/" },
  { image: reel1, brand: "Elite Escape", category: "Luxury Experiences", featured: false, likes: "97K", caption: "A different way to experience luxury ✨", url: "https://www.instagram.com/reel/DbWAz3VtRx6/" },
  { image: reel2, brand: "Rare Moments", category: "Luxury Experiences", featured: false, likes: "71.5K", caption: "Turn special occasions into lasting memories 💎", url: "https://www.instagram.com/reel/Dba6g2yOO_b/" },
];

// export const MEDIA = {
//   featured: {
//     outlet: "Feature Story",
//     date: "Coming soon",
//     title: "The quiet architecture behind a modern Indian creator",
//     excerpt:
//       "A long-form conversation on craft, restraint and building an audience that trusts you — reserved for an upcoming publication feature.",
//   },
//   items: [
//     {
//       outlet: "Digital Publication",
//       date: "Coming soon",
//       title: "Creator economy: the storytellers shaping brand India",
//     },
//     {
//       outlet: "Business Daily",
//       date: "Coming soon",
//       title: "Why premium brands are moving budgets to creators",
//     },
//     {
//       outlet: "Lifestyle Magazine",
//       date: "Coming soon",
//       title: "A portrait of discipline: inside a creator's week",
//     },
//   ],
// };

import media1 from "@/assets/media1.jpg";
import media2 from "@/assets/media2.jpg";
import media3 from "@/assets/media3.png";

export const MEDIA = [
  {
    id: 1,
    image: media1,
    title: "शौक में शुरू किया यूट्यूब चैनल, अब लाखों प्रशंसक",
    description:
      "भोपाल के सोशल मीडिया क्रिएटर ए.एल. आमिर खान की डिजिटल यात्रा को Patrika Plus ने प्रमुखता से प्रकाशित किया। इस फीचर में बताया गया कि कैसे उन्होंने शौक के तौर पर YouTube शुरू किया और आज अपने कंटेंट के माध्यम से भोपाल की गलियों, बाजारों, स्थानीय व्यवसायों और सामाजिक विषयों को लाखों दर्शकों तक पहुँचाया।",
    outlet: "Patrika Plus",
    date: "23 September 2023",
    location: "Bhopal, Madhya Pradesh",
    link: "#",
  },
  {
    id: 2,
    image: media2,
    title: "YouTube Golden Play Button",
    description:
      "AL Aamir Khan received the prestigious YouTube Golden Play Button in recognition of crossing one million subscribers. The award celebrates his consistent efforts in creating impactful digital content and building one of Central India's fastest-growing creator communities.",
    outlet: "YouTube Creator Awards",
    date: "March 2026",
    location: "India",
    link: "#",
  },
  {
    id: 3,
    image: media3,
    title: "Featured by The Quint",
    description:
      "The Quint highlighted AL Aamir Khan's inspiring journey from a passionate local creator to one of Bhopal's recognised digital personalities. The feature showcases his storytelling style, support for local businesses, and his growing influence across social media platforms.",
    outlet: "The Quint",
    date: "December 2024",
    location: "Bhopal, Madhya Pradesh",
    link: "#",
  },
];
export const AWARDS = [
  { title: "Creator of the Year", org: "Awarding Organisation", year: "2025" },
  { title: "Excellence in Digital Storytelling", org: "Awarding Organisation", year: "2024" },
  { title: "Emerging Influencer Honour", org: "Awarding Organisation", year: "2023" },
  { title: "Campaign Craft Recognition", org: "Awarding Organisation", year: "2022" },
];

export const BRAND_SLOTS = [
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
  "Luxury Experiences",
];