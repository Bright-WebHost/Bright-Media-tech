// ─── Shared project data used by both the listing and detail pages ────────────

export const PROJECT_CATEGORIES = [
  "All",
  "Branding",
  "Social Media",
  "Photography",
  "Web & Digital",
  "Video Production",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface Project {
  id: string;
  brand: string;
  location: string;
  country: string;
  category: Exclude<ProjectCategory, "All">;
  image: string;
  year: string;
  tags: string[];
  // Detail-page extras
  tagline: string;
  challenge: string;
  solution: string;
  results: string[];
  gallery: string[];
}

export const ALL_PROJECTS: Project[] = [
  {
    id: "zara-india",
    brand: "Zara Collective",
    location: "Mumbai, India",
    country: "India",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    year: "2025",
    tags: ["Identity", "Logo Design", "Brand Strategy", "Style Guide"],
    tagline: "Redefining luxury fashion identity for the Indian market.",
    challenge:
      "Zara Collective needed a complete brand overhaul to resonate with a younger, culturally aware Indian audience while retaining aspirational luxury appeal.",
    solution:
      "We crafted a timeless visual identity system with a bilingual type system, refined color palette, and cohesive brand guidelines spanning digital and physical touchpoints.",
    results: [
      "340% increase in brand recall in 3 months",
      "2× growth in social following post-launch",
      "Featured in Vogue India's Brand Watch",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    ],
  },
  {
    id: "bloom-uae",
    brand: "Bloom Botanics",
    location: "Dubai, UAE",
    country: "UAE",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&q=80",
    year: "2025",
    tags: ["Instagram", "Content Strategy", "Campaigns", "Influencer"],
    tagline: "Growing an organic skincare brand's digital community from scratch.",
    challenge:
      "Bloom Botanics was a new entrant in the competitive UAE wellness space with zero social presence and a limited marketing budget.",
    solution:
      "We built a 12-month content calendar, partnered with micro-influencers, and ran geo-targeted awareness campaigns across Instagram and TikTok.",
    results: [
      "0 → 85K Instagram followers in 6 months",
      "4.8% average engagement rate (industry avg: 1.2%)",
      "Sold out first product batch in 72 hours",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&q=80",
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
  },
  {
    id: "novo-fashion",
    brand: "Novo Fashion",
    location: "Paris, France",
    country: "France",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
    year: "2025",
    tags: ["Editorial", "Lookbook", "Studio", "Lighting"],
    tagline: "Cinematic fashion photography for a premier Paris label.",
    challenge:
      "Novo Fashion required a complete SS25 lookbook that captured the collection's minimalist yet bold aesthetic across both digital and print formats.",
    solution:
      "A 3-day Paris studio shoot with our senior photographer and creative director. We designed a lighting rig and post-processing pipeline to achieve a signature film-like finish.",
    results: [
      "42-image editorial published in Harper's Bazaar",
      "Lookbook drove 28% spike in e-commerce traffic",
      "Campaign imagery licensed by 3 international magazines",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80",
    ],
  },
  {
    id: "peak-tech",
    brand: "Peak Technologies",
    location: "Bangalore, India",
    country: "India",
    category: "Web & Digital",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    year: "2024",
    tags: ["Website", "UI/UX", "SEO", "Performance"],
    tagline: "A next-generation B2B SaaS website built for conversion.",
    challenge:
      "Peak Technologies' legacy website was slow, visually dated, and converting less than 0.4% of visitors. They needed an overhaul before their Series A pitch.",
    solution:
      "Full redesign using Next.js 14, custom animation system, and a structured content strategy. We integrated an SEO framework targeting 200+ high-intent keywords.",
    results: [
      "Page speed score 34 → 97 on Google Lighthouse",
      "Conversion rate 0.4% → 3.1% in 60 days",
      "Organic traffic up 310% in 4 months",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&q=80",
    ],
  },
  {
    id: "soleil-cinema",
    brand: "Soleil Cinema",
    location: "London, UK",
    country: "UK",
    category: "Video Production",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    year: "2024",
    tags: ["Short Film", "4K", "Color Grading", "Score"],
    tagline: "Award-winning short film production for a London indie studio.",
    challenge:
      "Soleil Cinema had a script, minimal crew, and 8 weeks to shoot and deliver a 15-minute short for festival submission.",
    solution:
      "We handled full production: casting support, RED camera kit, Steadicam operator, and professional color grading and Dolby-compliant audio mix.",
    results: [
      "Selected at 4 international film festivals",
      "Won Best Cinematography at Edinburgh Shorts",
      "Acquired by a streaming platform for VOD release",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    ],
  },
  {
    id: "kona-surf",
    brand: "Kona Surf Co.",
    location: "Bali, Indonesia",
    country: "Indonesia",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80",
    year: "2025",
    tags: ["Identity", "Packaging", "Merch", "Environmental"],
    tagline: "Ocean-inspired branding for Bali's fastest-growing surf brand.",
    challenge:
      "Kona Surf Co. needed to stand out in a saturated market while communicating their sustainability ethos and premium quality.",
    solution:
      "We developed a wave-inspired visual language, sustainable packaging using recycled materials, and a complete brand activation for their flagship Canggu store.",
    results: [
      "Brand mentioned in Surfer Magazine's 'Brands to Watch'",
      "Retail sales up 190% in first quarter post-rebrand",
      "Export inquiries from 6 new markets",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    ],
  },
  {
    id: "lumiere-hotel",
    brand: "Lumière Hotel",
    location: "Sharjah, UAE",
    country: "UAE",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    year: "2024",
    tags: ["Hospitality", "Interior", "Aerial", "Real Estate"],
    tagline: "Showcasing five-star luxury through world-class photography.",
    challenge:
      "Lumière Hotel's marketing assets were outdated and failed to convey the property's premium renovated spaces for international travel platforms.",
    solution:
      "A 4-day shoot covering all 80 rooms, amenities, and exterior aerial photography using DJI Inspire 3. Post-processing focused on warm, inviting colour science.",
    results: [
      "Booking.com rating imagery uplift from 3.2 → 4.8",
      "Direct booking rate increased by 45%",
      "Images featured in Condé Nast Traveller",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80",
    ],
  },
  {
    id: "rift-apparel",
    brand: "Rift Apparel",
    location: "New York, USA",
    country: "USA",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    year: "2025",
    tags: ["TikTok", "Reels", "Influencer", "Paid Ads"],
    tagline: "Turning a Gen-Z streetwear brand into a viral social powerhouse.",
    challenge:
      "Rift Apparel had great product but no social voice, inconsistent content, and stagnant sales through its DTC store.",
    solution:
      "We repositioned their voice, built a TikTok-first content engine, managed creator collaborations, and ran performance ad campaigns on Meta and TikTok.",
    results: [
      "3 viral TikToks totalling 14M views in 30 days",
      "DTC revenue up 520% in 90 days",
      "70K new followers across platforms",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
  },
  {
    id: "terra-finance",
    brand: "Terra Finance",
    location: "Abidjan, Côte d'Ivoire",
    country: "Côte d'Ivoire",
    category: "Web & Digital",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    year: "2024",
    tags: ["Dashboard", "React", "Mobile App", "Fintech"],
    tagline: "A next-gen fintech dashboard designed for West African markets.",
    challenge:
      "Terra Finance needed a bilingual (FR/EN) web platform and mobile app that could handle micro-lending at scale across low-bandwidth regions.",
    solution:
      "We built a Progressive Web App with offline-first architecture, React Native mobile app, and a custom design system compliant with West African accessibility standards.",
    results: [
      "Onboarded 12,000 users in 2 months",
      "App rated 4.8 on Google Play Store",
      "Processing $2M+ in micro-loans monthly",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&q=80",
    ],
  },
  {
    id: "motion-stories",
    brand: "Motion Stories",
    location: "Los Angeles, USA",
    country: "USA",
    category: "Video Production",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    year: "2025",
    tags: ["Commercial", "Drone", "VFX", "Sound Design"],
    tagline: "High-altitude drone cinematography for a premium commercial.",
    challenge:
      "Motion Stories needed a 60-second hero commercial for a luxury automotive client featuring complex aerial sequences over coastal California.",
    solution:
      "We deployed a 4-drone unit, coordinated FAA permits for coastal airspace, and delivered a full VFX pipeline with seamless drone-to-ground transitions.",
    results: [
      "Commercial aired on NBC, CBS & ABC during prime time",
      "Automotive client saw 31% uplift in test drive inquiries",
      "Won Silver at the Clio Awards for Direction",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    ],
  },
];
