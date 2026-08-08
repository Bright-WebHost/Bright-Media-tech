export interface StickyComment {
  id: string;
  name: string;
  avatar: string;
  date: string;
  text: string;
  noteColor: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory | BlogCategory[] | string | string[];
  date: { day: string; month: string; year: string };
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  colorTheme: "lime" | "yellow" | "teal" | "pink" | "orange" | "purple" | "blue" | "sky-blue" | "gray";
  stickyBgLight: string;
  stickyBgDark: string;
  textColor: string;
  badgeBg: string;
  rotation: number; // degrees
  pinned?: boolean;
  likes: number;
  commentsCount: number;
  takeaways: string[];
  content: {
    intro: string;
    sections: { heading: string; body: string; stickyQuote?: string }[];
    conclusion: string;
  };
  comments: StickyComment[];
}

export const BLOG_CATEGORIES = [
  "All Projects",
  "Social Media Marketing",
  "Branding",
  "Web Development",
  "Paid Ads",
  "Photography & Videography",
  "Software Development",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    slug: "Bajaj",
    title: "Bike Manufacturers",
    excerpt: "How we crafted a high-octane digital experience for one of India’s most iconic mobility brands",
    category: ["Branding", "Social Media Marketing"],
    date: { day: "12", month: "Aug", year: "2026" },
    readTime: "4 min read",
    author: {
      name: "Danny Russell",
      role: "Head of Marketing",
      avatar: "/assets/img/team/4.jpg",
    },
    image: "https://brightmedia.tech/img/covers/project/bajaj.webp",
    colorTheme: "sky-blue", // BRAND COLOR!
    stickyBgLight: "bg-[#d8fc38] text-[#0e0f11]",
    stickyBgDark: "bg-[#c9f31d] text-[#0e0f11]",
    textColor: "text-[#0e0f11]",
    badgeBg: "bg-[#0e0f11] text-[#c9f31d]",
    rotation: -2,
    pinned: true,
    likes: 142,
    commentsCount: 18,
    takeaways: [
      "Social Media Marketing",
      "Paid Ads",
      // "Consistency across web, video, and social is key.",
    ],
    content: {
      intro: "In an overcrowded digital landscape, standing out isn’t about being the loudest voice in the room—it’s about having the clearest frequency. Rebranding isn't a simple facelift; it's a strategic alignment of vision, visuals, and user emotion.",
      sections: [
        {
          heading: "Partnering with Bajaj Auto",
          body: "Bajaj Auto is a prominent player in the automotive industry, known for its innovative Bikes. We manage their social media pages in Ivory Coast, where our strategic approach has generated around 1 million impressions in a short period. Our efforts focus on engaging content that resonates with the audience, enhancing brand visibility and driving customer interaction.",
          // stickyQuote: "A brand identity is a living ecosystem—not a static PDF brand book.",
        },
        // {
        //   heading: "2. The Psychology of High-Vibrancy Colors",
        //   body: "Color drives quick subconscious decisions. Utilizing high-energy lime accents against high-contrast obsidian dark tones signals innovation, agility, and forward motion. It tells your customer that you are built for the modern internet.",
        // },
        // {
        //   heading: "3. Translating Brand into Conversion",
        //   body: "Great aesthetics build affinity, but strategic UX closes sales. By marrying bold typography with fluid micro-animations, users stay engaged 2.5x longer on brand touchpoints.",
        // },
      ],
      conclusion: "Automotive Manufacturers",
    },
    comments: [
      {
        id: "c1",
        name: "Alex Hales",
        avatar: "/assets/img/team/12.jpg",
        date: "Aug 13, 2026",
        text: "The high-energy lime theme is insanely fresh! Love how tactile the sticky note aesthetic feels.",
        noteColor: "bg-[#feef8f] text-gray-900",
      },
      {
        id: "c2",
        name: "Sark Hunnen",
        avatar: "/assets/img/team/5.jpg",
        date: "Aug 14, 2026",
        text: "Point #2 about high-vibrancy color recall is spot on. Great read!",
        noteColor: "bg-[#a7f3d0] text-gray-900",
      },
    ],
  },
  {
    id: "post-2",
    slug: "TAC",
    title: "The Architecture Corporation",
    excerpt: "Static web pages belong to the past. Explore how micro-interactions, motion physics, and sleek components convert casual browsers into loyal clients.",
    category: "Web Development",
    date: { day: "08", month: "Aug", year: "2026" },
    readTime: "6 min read",
    author: {
      name: "Rusa Jinuh",
      role: "Web Developer",
      avatar: "/assets/img/team/6.jpg",
    },
    image: "https://brightmedia.tech/img/allimg/logo/taclogo.webp",
    colorTheme: "blue",
    stickyBgLight: "bg-[#fff275] text-slate-900",
    stickyBgDark: "bg-[#fde047] text-slate-900",
    textColor: "text-slate-900",
    badgeBg: "bg-slate-900 text-yellow-300",
    rotation: 3,
    likes: 98,
    commentsCount: 12,
    takeaways: [
      "Web development",
      // "Tailwind + Framer Motion = unbeatable web fluid design.",
      // "Keep dynamic animations under 300ms for crisp responsiveness.",
    ],
    content: {
      intro: "Web development has evolved from simple markup and styling to interactive digital art. Today's web user expects subtle feedback, smooth state transitions, and tactile interfaces that feel alive under their fingertips.",
      sections: [
        {
          heading: "Collaborating with TAC",
          body: "The Mangalore-based Architecture Corporation specializes in innovative design for residential, commercial, and luxury spaces, offering tailored solutions that bring exceptional interiors, landscapes, and high-rise projects to life.",
          stickyQuote: "Bright Media has captured their unique design style, creating a website that perfectly aligns with their vision and aesthetic, reflecting the essence of their architectural approach.",
        },
        // {
        //   heading: "Optimizing Performance with Next.js App Router",
        //   body: "Animations should never come at the expense of page speed. By leveraging Next.js server components and lightweight client motion utilities, we achieve 60fps animations with zero performance compromise.",
        // },
      ],
      conclusion: "Architecture",
    },
    comments: [
      {
        id: "c3",
        name: "Michel Dark",
        avatar: "/assets/img/team/11.jpg",
        date: "Aug 09, 2026",
        text: "The paper desk canvas with draggable sticky notes is pure genius!",
        noteColor: "bg-[#fecdd3] text-gray-900",
      },
    ],
  },
  {
    id: "post-3",
    slug: "software",
    title: "Software",
    excerpt: "Search engines are no longer just indexing links—they are answering questions directly. Learn how to optimize your content for AI overview engines.",
    category: "Software Development",
    date: { day: "28", month: "Jul", year: "2026" },
    readTime: "5 min read",
    author: {
      name: "James Baker",
      role: "CEO & Founder",
      avatar: "/assets/img/team/1.jpg",
    },
    image: "/assets/img/portfolio/1.jpg",
    colorTheme: "teal",
    stickyBgLight: "bg-[#76f7cd] text-slate-900",
    stickyBgDark: "bg-[#2dd4bf] text-slate-950",
    textColor: "text-slate-950",
    badgeBg: "bg-slate-900 text-teal-300",
    rotation: -1,
    likes: 210,
    commentsCount: 24,
    takeaways: [
      "Structured schema data is compulsory for AI overview citations.",
      "Topic authority beats keyword density every time.",
      "Fast page load & mobile core web vitals are non-negotiable.",
    ],
    content: {
      intro: "Search engine optimization has experienced its biggest paradigm shift in two decades. Generative AI summaries mean users demand direct, authoritative answers right at the top of results.",
      sections: [
        {
          heading: "Semantic Content Architecture",
          body: "Creating deeply structured, highly relevant content blocks allows search crawlers and AI LLMs to ingest your authority cleanly.",
          stickyQuote: "Be the canonical source that AI algorithms quote with confidence.",
        },
      ],
      conclusion: "Adapt your SEO strategy today to stay at the apex of search rankings tomorrow.",
    },
    comments: [],
  },
  {
    id: "post-4",
    slug: "Second-Cup",
    title: "Second Cup",
    excerpt: "Behind the camera with Bright Media: How high-impact photography and 4K commercial videos drive viral engagement across all platforms.",
    category: ["Photography & Videography", "Social Media Marketing"],
    date: { day: "20", month: "Jul", year: "2026" },
    readTime: "4 min read",
    author: {
      name: "Megh Grant",
      role: "Content Creator",
      avatar: "/assets/img/team/8.jpg",
    },
    image: "https://brightmedia.tech/img/covers/project/lg/secondcup1.webp",
    colorTheme: "gray",
    stickyBgLight: "bg-[#fca5a5] text-slate-900",
    stickyBgDark: "bg-[#fb7185] text-slate-950",
    textColor: "text-slate-950",
    badgeBg: "bg-slate-900 text-rose-300",
    rotation: 4,
    likes: 175,
    commentsCount: 15,
    takeaways: [
      "Social Media Marketing",
      "Photography and Video Prodcution",
    ],
    content: {
      intro: "Video is the undisputed king of digital content. But creating video that actually moves people requires a blend of cinematic mastery and social platform psychology.",
      sections: [
        {
          heading: "Collaborating with Second Cup",
          body: "Second Cup is a popular Canadian coffee shop chain known for its quality coffee and atmosphere. We enhanced their social media marketing with photography and videography, creating engaging content that showcases their offerings and connecting with their audience.",
        },
      ],
      conclusion: "Coffee Shop",
    },
    comments: [],
  },
  {
    id: "post-5",
    slug: "Kaiser",
    title: "Kaiser",
    excerpt: "How our design and development team integrates state-of-the-art AI tools to speed up ideation, prototype faster, and deliver pixel perfection.",
    category: ["Paid Ads", "Social Media Marketing", "Branding"],
    date: { day: "15", month: "Jul", year: "2026" },
    readTime: "5 min read",
    author: {
      name: "Dalton Grant",
      role: "UI Designer",
      avatar: "/assets/img/team/7.jpg",
    },
    image: "https://brightmedia.tech/img/covers/project/kaiser.webp",
    colorTheme: "pink",
    stickyBgLight: "bg-[#e9d5ff] text-purple-950",
    stickyBgDark: "bg-[#c084fc] text-purple-950",
    textColor: "text-purple-950",
    badgeBg: "bg-purple-950 text-purple-200",
    rotation: -3,
    likes: 310,
    commentsCount: 31,
    takeaways: [
      "Paid ads on Google",
      "Facebook",
      "Instagram",
      "Social media marketing",
      "Branding",
      "Website",
    ],
    content: {
      intro: "AI is not a threat to creative craft—it is the ultimate paintbrush. When paired with human intuition, creative boundaries expand exponentially.",
      sections: [
        {
          heading: "Collaborating with Kaiser",
          body: "Kaiser is a renowned German kitchen appliances manufacturer. We have enhanced their social media marketing through targeted paid advertising on Facebook, Instagram, and Google Ads. Our strategic campaigns have generated significant inquiries and positive results, effectively increasing brand visibility and connecting them with their audience.",
        },
      ],
      conclusion: "Kitchen Appliances Manufacturer",
    },
    comments: [],
  },
  {
    id: "post-6",
    slug: "Metroways",
    title: "Metroways",
    excerpt: "Stop wasting ad budget on generic campaigns. Discover the blueprint behind our top-performing paid social and search campaigns.",
    category: ["Social Media Marketing", "Paid Ads"],
    date: { day: "04", month: "Jul", year: "2026" },
    readTime: "7 min read",
    author: {
      name: "Dalton Gran",
      role: "Chairman",
      avatar: "/assets/img/team/2.jpg",
    },
    image: "https://brightmedia.tech/img/allimg/logo/Metrowayslogo.webp",
    colorTheme: "purple",
    stickyBgLight: "bg-[#fed7aa] text-orange-950",
    stickyBgDark: "bg-[#fb923c] text-orange-950",
    textColor: "text-orange-950",
    badgeBg: "bg-orange-950 text-orange-200",
    rotation: 2,
    likes: 89,
    commentsCount: 9,
    takeaways: [
      "Paid Ads",
      "Social Media Marketing",
    ],
    content: {
      intro: "Paid media without creative strategy is just burning money. To achieve exceptional return on ad spend (ROAS), your ad creatives must captivate and compel action instantly.",
      sections: [
        {
          heading: "Partnering with Metroways",
          body: "Metroways is a global travel agency with branches in three countries and a team of over 100 professionals, offering diverse travel services to a broad customer base.",
          stickyQuote: "Bright Media enhanced Metroways' online presence by managing their social media and running targeted paid ad campaigns, successfully generating quality leads and increasing customer engagement."
        },
      ],
      conclusion: "Travel Agency",
    },
    comments: [],
  },
  {
    id: "post-7",
    slug: "Tonino",
    title: "Tonino",
    excerpt: "How we crafted a high-octane digital experience for one of India’s most iconic mobility brands",
    category: ["Branding", "Social Media Marketing", "Video Production"],
    date: { day: "12", month: "Aug", year: "2026" },
    readTime: "4 min read",
    author: {
      name: "Danny Russell",
      role: "Head of Marketing",
      avatar: "/assets/img/team/4.jpg",
    },
    image: "https://brightmedia.tech/img/covers/project/tonino.webp",
    colorTheme: "pink", // BRAND COLOR!
    stickyBgLight: "bg-[#d8fc38] text-[#0e0f11]",
    stickyBgDark: "bg-[#c9f31d] text-[#0e0f11]",
    textColor: "text-[#0e0f11]",
    badgeBg: "bg-[#0e0f11] text-[#c9f31d]",
    rotation: -2,
    pinned: true,
    likes: 142,
    commentsCount: 18,
    takeaways: [
      "Social Media Marketing",
      "Paid Ads on Google",
      "Facebook",
      "Instagram",
      "Branding",
      "Website"
      // "Consistency across web, video, and social is key.",
    ],
    content: {
      intro: "In an overcrowded digital landscape, standing out isn’t about being the loudest voice in the room—it’s about having the clearest frequency. Rebranding isn't a simple facelift; it's a strategic alignment of vision, visuals, and user emotion.",
      sections: [
        {
          heading: "Teaming Up with Tonino",
          body: "Tonino is a renowned dining restaurant known for its exquisite Labanese and American Cuisines. We manage their social media pages to boost customer engagement and increase brand awareness across digital platforms.",
          stickyQuote: "Additionally, we provide professional photography and videography services, capturing the quality pictures of the dishes. Through visually appealing content, we help Tonino connect with their audience and showcase the unique flavors and experiences they offer.",
        },
        // {
        //   heading: "2. The Psychology of High-Vibrancy Colors",
        //   body: "Color drives quick subconscious decisions. Utilizing high-energy lime accents against high-contrast obsidian dark tones signals innovation, agility, and forward motion. It tells your customer that you are built for the modern internet.",
        // },
        // {
        //   heading: "3. Translating Brand into Conversion",
        //   body: "Great aesthetics build affinity, but strategic UX closes sales. By marrying bold typography with fluid micro-animations, users stay engaged 2.5x longer on brand touchpoints.",
        // },
      ],
      conclusion: "Kitchen Appliances Manufacturer",
    },
    comments: [
      {
        id: "c1",
        name: "Alex Hales",
        avatar: "/assets/img/team/12.jpg",
        date: "Aug 13, 2026",
        text: "The high-energy lime theme is insanely fresh! Love how tactile the sticky note aesthetic feels.",
        noteColor: "bg-[#feef8f] text-gray-900",
      },
      {
        id: "c2",
        name: "Sark Hunnen",
        avatar: "/assets/img/team/5.jpg",
        date: "Aug 14, 2026",
        text: "Point #2 about high-vibrancy color recall is spot on. Great read!",
        noteColor: "bg-[#a7f3d0] text-gray-900",
      },
    ],
  },
  {
    id: "post-8",
    slug: "Motorland",
    title: "Automotive Dealer",
    excerpt: "Static web pages belong to the past. Explore how micro-interactions, motion physics, and sleek components convert casual browsers into loyal clients.",
    category: ["Branding", "Social Media Marketing"],
    date: { day: "08", month: "Aug", year: "2026" },
    readTime: "6 min read",
    author: {
      name: "Rusa Jinuh",
      role: "Web Developer",
      avatar: "/assets/img/team/6.jpg",
    },
    image: "https://brightmedia.tech/img/covers/project/Mllog.webp",
    colorTheme: "sky-blue",
    stickyBgLight: "bg-[#fff275] text-slate-900",
    stickyBgDark: "bg-[#fde047] text-slate-900",
    textColor: "text-slate-900",
    badgeBg: "bg-slate-900 text-yellow-300",
    rotation: 3,
    likes: 98,
    commentsCount: 12,
    takeaways: [
      "Branding",
      "Social Media Marketing",
      
      // "Tailwind + Framer Motion = unbeatable web fluid design.",
      // "Keep dynamic animations under 300ms for crisp responsiveness.",
    ],
    content: {
      intro: "Web development has evolved from simple markup and styling to interactive digital art. Today's web user expects subtle feedback, smooth state transitions, and tactile interfaces that feel alive under their fingertips.",
      sections: [
        {
          heading: "Partnering with Motorland",
          body: "Motorland is an official dealer of automotive brands, including Biac, DFM, CFmoto, and AsiaStar. We collaborated with them on branding and social media marketing, enhancing their online presence and engaging their customers effectively. Additionaly, we have helped them in creating Technical sheet for all of their Vehicles and Designed 100+ Posts for them.",
          // stickyQuote: "Bright Media has captured their unique design style, creating a website that perfectly aligns with their vision and aesthetic, reflecting the essence of their architectural approach.",
        },
        // {
        //   heading: "Optimizing Performance with Next.js App Router",
        //   body: "Animations should never come at the expense of page speed. By leveraging Next.js server components and lightweight client motion utilities, we achieve 60fps animations with zero performance compromise.",
        // },
      ],
      conclusion: "Automotive (official dealer of Biac, DFM, CFmoto and AsiaStar)",
    },
    comments: [
      {
        id: "c3",
        name: "Michel Dark",
        avatar: "/assets/img/team/11.jpg",
        date: "Aug 09, 2026",
        text: "The paper desk canvas with draggable sticky notes is pure genius!",
        noteColor: "bg-[#fecdd3] text-gray-900",
      },
    ],
  },
  {
    id: "post-9",
    slug: "MCM",
    title: "Construction Materials",
    excerpt: "Search engines are no longer just indexing links—they are answering questions directly. Learn how to optimize your content for AI overview engines.",
    category: ["Social Media Marketing", "Web Development", "Paid Ads"],
    date: { day: "28", month: "Jul", year: "2026" },
    readTime: "5 min read",
    author: {
      name: "James Baker",
      role: "CEO & Founder",
      avatar: "/assets/img/team/1.jpg",
    },
    image: "https://brightmedia.tech/img/allimg/logo/mcm.webp",
    colorTheme: "teal",
    stickyBgLight: "bg-[#76f7cd] text-slate-900",
    stickyBgDark: "bg-[#2dd4bf] text-slate-950",
    textColor: "text-slate-950",
    badgeBg: "bg-slate-900 text-teal-300",
    rotation: -1,
    likes: 210,
    commentsCount: 24,
    takeaways: [
      "Social Media Managment",
      "Website",
    ],
    content: {
      intro: "Search engine optimization has experienced its biggest paradigm shift in two decades. Generative AI summaries mean users demand direct, authoritative answers right at the top of results.",
      sections: [
        {
          heading: "Merkom Construction Materials",
          body: "MCM is a leading manufacturer of construction materials, offering a wide range of high-quality products for various building needs. We manage their social media pages to increase engagement and brand recognition within the construction industry, as well as run targeted ad campaigns to drive customer interest and sales.",
          stickyQuote: "Additionally, we developed a dynamic, user-friendly website for MCM, designed to showcase their extensive product range and provide customers with an easy, informative browsing experience. Our efforts ensure MCM's digital presence reflects their expertise and commitment to quality in construction materials.",
        },
      ],
      conclusion: "Automotive",
    },
    comments: [],
  },
  {
    id: "post-10",
    slug: "Hafil",
    title: "Hafil Trading & Services",
    excerpt: "Behind the camera with Bright Media: How high-impact photography and 4K commercial videos drive viral engagement across all platforms.",
    category: ["Branding", "Web Development"],
    date: { day: "20", month: "Jul", year: "2026" },
    readTime: "4 min read",
    author: {
      name: "Megh Grant",
      role: "Content Creator",
      avatar: "/assets/img/team/8.jpg",
    },
    image: "https://brightmedia.tech/img/allimg/logo/hafillogo1.webp",
    colorTheme: "blue",
    stickyBgLight: "bg-[#fca5a5] text-slate-900",
    stickyBgDark: "bg-[#fb7185] text-slate-950",
    textColor: "text-slate-950",
    badgeBg: "bg-slate-900 text-rose-300",
    rotation: 4,
    likes: 175,
    commentsCount: 15,
    takeaways: [
      "Website",
      "Branding",
      // "Adapt video aspect ratios per channel (9:16 vertical vs 16:9 cinematic).",
    ],
    content: {
      intro: "Video is the undisputed king of digital content. But creating video that actually moves people requires a blend of cinematic mastery and social platform psychology.",
      sections: [
        {
          heading: "Partnering wiht Merkom Construction Materiels",
          body: "Hafil Trading & Services, based in Qatar, is a trusted provider of premium hospitality solutions for hotels, resorts, restaurants, and catering businesses.",
          stickyQuote: "At Bright Media, we had the pleasure of crafting their brand identity from scratch, designing a distinctive logo, developing comprehensive branding, and building a fully responsive website. Our work ensured Hafil their digital presence and their dedication to excellence in the hospitality industry.",
        },
      ],
      conclusion: "Trading and Services",
    },
    comments: [],
  },
  {
    id: "post-11",
    slug: "FarhatFreres",
    title: "Automotive Dealer",
    excerpt: "How our design and development team integrates state-of-the-art AI tools to speed up ideation, prototype faster, and deliver pixel perfection.",
    category: ["Social Media Marketing", "Web Development"],
    date: { day: "15", month: "Jul", year: "2026" },
    readTime: "5 min read",
    author: {
      name: "Dalton Grant",
      role: "UI Designer",
      avatar: "/assets/img/team/7.jpg",
    },
    image: "https://brightmedia.tech/img/allimg/logo/farhat%20.webp",
    colorTheme: "gray",
    stickyBgLight: "bg-[#e9d5ff] text-purple-950",
    stickyBgDark: "bg-[#c084fc] text-purple-950",
    textColor: "text-purple-950",
    badgeBg: "bg-purple-950 text-purple-200",
    rotation: -3,
    likes: 310,
    commentsCount: 31,
    takeaways: [
      "Social Media Management",
      "Website",
    ],
    content: {
      intro: "AI is not a threat to creative craft—it is the ultimate paintbrush. When paired with human intuition, creative boundaries expand exponentially.",
      sections: [
        {
          heading: "Partnering with Farhat Freres",
          body: "Farhat Freres is the official dealer for automotive brands such as Honda, Chevrolet, Foton, and Kaiyi. We manage their social media presence to enhance customer engagement and brand visibility.",
          stickyQuote: "Additionally, we developed a comprehensive website of over 50 pages, showcasing their extensive vehicles and delivering a seamless user experience.",
        },
      ],
      conclusion: "Automotive",
    },
    comments: [],
  },
  {
    id: "post-12",
    slug: "azim-group",
    title: "Group Of Companies",
    excerpt: "Stop wasting ad budget on generic campaigns. Discover the blueprint behind our top-performing paid social and search campaigns.",
    category: ["Branding", "Web Development"],
    date: { day: "04", month: "Jul", year: "2026" },
    readTime: "7 min read",
    author: {
      name: "Dalton Gran",
      role: "Chairman",
      avatar: "/assets/img/team/2.jpg",
    },
    image: "https://brightmedia.tech/img/allimg/logo/azimlogo1.webp",
    colorTheme: "orange",
    stickyBgLight: "bg-[#fed7aa] text-orange-950",
    stickyBgDark: "bg-[#fb923c] text-orange-950",
    textColor: "text-orange-950",
    badgeBg: "bg-orange-950 text-orange-200",
    rotation: 2,
    likes: 89,
    commentsCount: 9,
    takeaways: [
      "Website",
      "Branding",
    ],
    content: {
      intro: "Paid media without creative strategy is just burning money. To achieve exceptional return on ad spend (ROAS), your ad creatives must captivate and compel action instantly.",
      sections: [
        {
          heading: "Collaborating with Azim Group",
          body: "AZIM Group stands as a distinguished organisation within Qatar’s vibrant business landscape, encompassing seven unique companies under its banner.",
          stickyQuote: "Bright Media had the privilege of creating AZIM Group’s branding and designing a comprehensive website that showcases their diverse ventures.",
        },
      ],
      conclusion: "Group of Companies (7 different industries)",
    },
    comments: [],
  },
  {
    id: "post-13",
    slug: "GTSW",
    title: "Battery and Tyres",
    excerpt: "Stop wasting ad budget on generic campaigns. Discover the blueprint behind our top-performing paid social and search campaigns.",
    category: ["Social Media Marketing"],
    date: { day: "04", month: "Jul", year: "2026" },
    readTime: "7 min read",
    author: {
      name: "Dalton Gran",
      role: "Chairman",
      avatar: "/assets/img/team/2.jpg",
    },
    image: "https://brightmedia.tech/img/allimg/logo/Giti.webp",
    colorTheme: "yellow",
    stickyBgLight: "bg-[#fed7aa] text-orange-950",
    stickyBgDark: "bg-[#fb923c] text-orange-950",
    textColor: "text-orange-950",
    badgeBg: "bg-orange-950 text-orange-200",
    rotation: 2,
    likes: 89,
    commentsCount: 9,
    takeaways: [
      "Social Media Management",
    ],
    content: {
      intro: "Paid media without creative strategy is just burning money. To achieve exceptional return on ad spend (ROAS), your ad creatives must captivate and compel action instantly.",
      sections: [
        {
          heading: "Partnering with GTSW",
          body: "GTSW is the official distributor of Duracell automotive batteries and Giti Tyres, providing top-quality automotive products across its markets.",
          stickyQuote: "Bright Media supported GTSW by managing their social media and creating impactful posts, driving strong audience engagement and elevating brand visibility.",
        },
      ],
      conclusion: "Battery and Tyres",
    },
    comments: [],
  },
  {
    id: "post-14",
    slug: "Pulse",
    title: "Pulse",
    excerpt: "Stop wasting ad budget on generic campaigns. Discover the blueprint behind our top-performing paid social and search campaigns.",
    category: ["Branding", "Web Development"],
    date: { day: "04", month: "Jul", year: "2026" },
    readTime: "7 min read",
    author: {
      name: "Dalton Gran",
      role: "Chairman",
      avatar: "/assets/img/team/2.jpg",
    },
    image: "https://brightmedia.tech/img/allimg/logo/pulse.webp",
    colorTheme: "lime",
    stickyBgLight: "bg-[#fed7aa] text-orange-950",
    stickyBgDark: "bg-[#fb923c] text-orange-950",
    textColor: "text-orange-950",
    badgeBg: "bg-orange-950 text-orange-200",
    rotation: 2,
    likes: 89,
    commentsCount: 9,
    takeaways: [
      "Branding",
      "Website"
    ],
    content: {
      intro: "Paid media without creative strategy is just burning money. To achieve exceptional return on ad spend (ROAS), your ad creatives must captivate and compel action instantly.",
      sections: [
        {
          heading: "Collaborating with Pulse",
          body: "Pulse, a healthy restaurant based in KSA, offers nutritious daily meal subscriptions delivered straight to homes. We collaborated on branding their products, creating a cohesive identity that highlights their commitment to health and convenience.",
          // stickyQuote: "Bright Media supported GTSW by managing their social media and creating impactful posts, driving strong audience engagement and elevating brand visibility.",
        },
      ],
      conclusion: "Healthy Restaurant",
    },
    comments: [],
  },
  {
    id: "post-15",
    slug: "Amore",
    title: "Café",
    excerpt: "Stop wasting ad budget on generic campaigns. Discover the blueprint behind our top-performing paid social and search campaigns.",
    category: ["Branding", "Web Development", "Social Media Marketing"],
    date: { day: "04", month: "Jul", year: "2026" },
    readTime: "7 min read",
    author: {
      name: "Dalton Gran",
      role: "Chairman",
      avatar: "/assets/img/team/2.jpg",
    },
    image: "https://brightmedia.tech/img/allimg/logo/amore.webp",
    colorTheme: "teal",
    stickyBgLight: "bg-[#fed7aa] text-orange-950",
    stickyBgDark: "bg-[#fb923c] text-orange-950",
    textColor: "text-orange-950",
    badgeBg: "bg-orange-950 text-orange-200",
    rotation: 2,
    likes: 89,
    commentsCount: 9,
    takeaways: [
      "Social Media Management",
      "Photography"
    ],
    content: {
      intro: "Paid media without creative strategy is just burning money. To achieve exceptional return on ad spend (ROAS), your ad creatives must captivate and compel action instantly.",
      sections: [
        {
          heading: "Partnering with Amore",
          body: "Glacier Amore is one of the most reputed Cafe in Ivory coast and they are know for offering classic and premium Ice cream experience.",
          stickyQuote: "Bright Media has enhanced their online presence by managing their social media pages and capturing the essence of Amore through multiple photoshoots, showcasing their vibrant offerings.",
        },
      ],
      conclusion: "Café",
    },
    comments: [],
  },
  {
    id: "post-16",
    slug: "Istanbul",
    title: "Istanbul Sofrasi",
    excerpt: "Stop wasting ad budget on generic campaigns. Discover the blueprint behind our top-performing paid social and search campaigns.",
    category: ["Social Media Marketing"],
    date: { day: "04", month: "Jul", year: "2026" },
    readTime: "7 min read",
    author: {
      name: "Dalton Gran",
      role: "Chairman",
      avatar: "/assets/img/team/2.jpg",
    },
    image: "https://brightmedia.tech/img/allimg/logo/Istanbul.webp",
    colorTheme: "gray",
    stickyBgLight: "bg-[#fed7aa] text-orange-950",
    stickyBgDark: "bg-[#fb923c] text-orange-950",
    textColor: "text-orange-950",
    badgeBg: "bg-orange-950 text-orange-200",
    rotation: 2,
    likes: 89,
    commentsCount: 9,
    takeaways: [
      "Branding",
      "Website"
    ],
    content: {
      intro: "Paid media without creative strategy is just burning money. To achieve exceptional return on ad spend (ROAS), your ad creatives must captivate and compel action instantly.",
      sections: [
        {
          heading: "Partnering with Istanbul Sofrasi",
          body: "Istanbul Sofrasi is a traditional Turkish restaurant, offering an authentic taste of Turkey through its rich and flavorful cuisine.",
          stickyQuote: "Bright Media elevated their social media presence through strategic marketing, creating engaging content that resonated with audiences and enhanced their online visibility.",
        },
      ],
      conclusion: "Restaurant",
    },
    comments: [],
  },
  {
    id: "post-17",
    slug: "Taurus-Ivoire",
    title: "Taurus Ivoire",
    excerpt: "Stop wasting ad budget on generic campaigns. Discover the blueprint behind our top-performing paid social and search campaigns.",
    category: ["Branding", "Web Development"],
    date: { day: "04", month: "Jul", year: "2026" },
    readTime: "7 min read",
    author: {
      name: "Dalton Gran",
      role: "Chairman",
      avatar: "/assets/img/team/2.jpg",
    },
    image: "https://brightmedia.tech/img/allimg/taurusivoire/taurusivoire%20logo.webp",
    colorTheme: "pink",
    stickyBgLight: "bg-[#fed7aa] text-orange-950",
    stickyBgDark: "bg-[#fb923c] text-orange-950",
    textColor: "text-orange-950",
    badgeBg: "bg-orange-950 text-orange-200",
    rotation: 2,
    likes: 89,
    commentsCount: 9,
    takeaways: [
      "Branding",
      "Website"
    ],
    content: {
      intro: "Paid media without creative strategy is just burning money. To achieve exceptional return on ad spend (ROAS), your ad creatives must captivate and compel action instantly.",
      sections: [
        {
          heading: "Collaborating with Taurus Ivoire",
          body: "Taurus Ivoire, a trusted teak wood manufacturer in Ivory Coast, partnered with us to build a professional website and create impactful branding. Our work reflects their commitment to quality and craftsmanship, elevating their presence in the industry.",
          // stickyQuote: "Bright Media elevated their social media presence through strategic marketing, creating engaging content that resonated with audiences and enhanced their online visibility.",
        },
      ],
      conclusion: "Teak Wood",
    },
    comments: [],
  },
];
