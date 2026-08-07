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
  category: "Social Media Marketing" | "Branding" | "Web Development" | "Software Development" | "Video Production" | "Paid Ads" | "Strategy";
  date: { day: string; month: string; year: string };
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  colorTheme: "lime" | "yellow" | "teal" | "pink" | "orange" | "purple";
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
  "Video Production",
  "Software Development",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    slug: "Bajaj",
    title: "Bike Manufacturers",
    excerpt: "How we crafted a high-octane digital experience for one of India’s most iconic mobility brands",
    category: "Branding",
    date: { day: "12", month: "Aug", year: "2026" },
    readTime: "4 min read",
    author: {
      name: "Danny Russell",
      role: "Head of Marketing",
      avatar: "/assets/img/team/4.jpg",
    },
    image: "https://brightmedia.tech/img/covers/project/bajaj.webp",
    colorTheme: "lime", // BRAND COLOR!
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
    colorTheme: "yellow",
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
    category: "Video Production",
    date: { day: "20", month: "Jul", year: "2026" },
    readTime: "4 min read",
    author: {
      name: "Megh Grant",
      role: "Content Creator",
      avatar: "/assets/img/team/8.jpg",
    },
    image: "https://brightmedia.tech/img/covers/project/lg/secondcup1.webp",
    colorTheme: "pink",
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
    category: "Paid Ads",
    date: { day: "15", month: "Jul", year: "2026" },
    readTime: "5 min read",
    author: {
      name: "Dalton Grant",
      role: "UI Designer",
      avatar: "/assets/img/team/7.jpg",
    },
    image: "https://brightmedia.tech/img/covers/project/kaiser.webp",
    colorTheme: "purple",
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
    category: "Social Media Marketing",
    date: { day: "04", month: "Jul", year: "2026" },
    readTime: "7 min read",
    author: {
      name: "Dalton Gran",
      role: "Chairman",
      avatar: "/assets/img/team/2.jpg",
    },
    image: "https://brightmedia.tech/img/allimg/logo/Metrowayslogo.webp",
    colorTheme: "orange",
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
    category: "Branding",
    date: { day: "12", month: "Aug", year: "2026" },
    readTime: "4 min read",
    author: {
      name: "Danny Russell",
      role: "Head of Marketing",
      avatar: "/assets/img/team/4.jpg",
    },
    image: "https://brightmedia.tech/img/covers/project/tonino.webp",
    colorTheme: "lime", // BRAND COLOR!
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
  // {
  //   id: "post-2",
  //   slug: "TAC",
  //   title: "The Architecture Corporation",
  //   excerpt: "Static web pages belong to the past. Explore how micro-interactions, motion physics, and sleek components convert casual browsers into loyal clients.",
  //   category: "Web Development",
  //   date: { day: "08", month: "Aug", year: "2026" },
  //   readTime: "6 min read",
  //   author: {
  //     name: "Rusa Jinuh",
  //     role: "Web Developer",
  //     avatar: "/assets/img/team/6.jpg",
  //   },
  //   image: "https://brightmedia.tech/img/allimg/logo/taclogo.webp",
  //   colorTheme: "yellow",
  //   stickyBgLight: "bg-[#fff275] text-slate-900",
  //   stickyBgDark: "bg-[#fde047] text-slate-900",
  //   textColor: "text-slate-900",
  //   badgeBg: "bg-slate-900 text-yellow-300",
  //   rotation: 3,
  //   likes: 98,
  //   commentsCount: 12,
  //   takeaways: [
  //     "Web development",
  //     // "Tailwind + Framer Motion = unbeatable web fluid design.",
  //     // "Keep dynamic animations under 300ms for crisp responsiveness.",
  //   ],
  //   content: {
  //     intro: "Web development has evolved from simple markup and styling to interactive digital art. Today's web user expects subtle feedback, smooth state transitions, and tactile interfaces that feel alive under their fingertips.",
  //     sections: [
  //       {
  //         heading: "Collaborating with TAC",
  //         body: "The Mangalore-based Architecture Corporation specializes in innovative design for residential, commercial, and luxury spaces, offering tailored solutions that bring exceptional interiors, landscapes, and high-rise projects to life.",
  //         stickyQuote: "Bright Media has captured their unique design style, creating a website that perfectly aligns with their vision and aesthetic, reflecting the essence of their architectural approach.",
  //       },
  //       // {
  //       //   heading: "Optimizing Performance with Next.js App Router",
  //       //   body: "Animations should never come at the expense of page speed. By leveraging Next.js server components and lightweight client motion utilities, we achieve 60fps animations with zero performance compromise.",
  //       // },
  //     ],
  //     conclusion: "Elevate your web project by adding delight to every click. Small details leave massive impressions.",
  //   },
  //   comments: [
  //     {
  //       id: "c3",
  //       name: "Michel Dark",
  //       avatar: "/assets/img/team/11.jpg",
  //       date: "Aug 09, 2026",
  //       text: "The paper desk canvas with draggable sticky notes is pure genius!",
  //       noteColor: "bg-[#fecdd3] text-gray-900",
  //     },
  //   ],
  // },
  // {
  //   id: "post-3",
  //   slug: "software",
  //   title: "Software Development",
  //   excerpt: "Search engines are no longer just indexing links—they are answering questions directly. Learn how to optimize your content for AI overview engines.",
  //   category: "Software Development",
  //   date: { day: "28", month: "Jul", year: "2026" },
  //   readTime: "5 min read",
  //   author: {
  //     name: "James Baker",
  //     role: "CEO & Founder",
  //     avatar: "/assets/img/team/1.jpg",
  //   },
  //   image: "/assets/img/portfolio/1.jpg",
  //   colorTheme: "teal",
  //   stickyBgLight: "bg-[#76f7cd] text-slate-900",
  //   stickyBgDark: "bg-[#2dd4bf] text-slate-950",
  //   textColor: "text-slate-950",
  //   badgeBg: "bg-slate-900 text-teal-300",
  //   rotation: -1,
  //   likes: 210,
  //   commentsCount: 24,
  //   takeaways: [
  //     "Structured schema data is compulsory for AI overview citations.",
  //     "Topic authority beats keyword density every time.",
  //     "Fast page load & mobile core web vitals are non-negotiable.",
  //   ],
  //   content: {
  //     intro: "Search engine optimization has experienced its biggest paradigm shift in two decades. Generative AI summaries mean users demand direct, authoritative answers right at the top of results.",
  //     sections: [
  //       {
  //         heading: "Semantic Content Architecture",
  //         body: "Creating deeply structured, highly relevant content blocks allows search crawlers and AI LLMs to ingest your authority cleanly.",
  //         stickyQuote: "Be the canonical source that AI algorithms quote with confidence.",
  //       },
  //     ],
  //     conclusion: "Adapt your SEO strategy today to stay at the apex of search rankings tomorrow.",
  //   },
  //   comments: [],
  // },
  // {
  //   id: "post-4",
  //   slug: "cinematic-video-production-brand-storytelling",
  //   title: "Cinematic Video Production: Crafting Visual Stories That Stop the Scroll",
  //   excerpt: "Behind the camera with Bright Media: How high-impact photography and 4K commercial videos drive viral engagement across all platforms.",
  //   category: "Video Production",
  //   date: { day: "20", month: "Jul", year: "2026" },
  //   readTime: "4 min read",
  //   author: {
  //     name: "Megh Grant",
  //     role: "Content Creator",
  //     avatar: "/assets/img/team/8.jpg",
  //   },
  //   image: "/assets/img/portfolio/2.jpg",
  //   colorTheme: "pink",
  //   stickyBgLight: "bg-[#fca5a5] text-slate-900",
  //   stickyBgDark: "bg-[#fb7185] text-slate-950",
  //   textColor: "text-slate-950",
  //   badgeBg: "bg-slate-900 text-rose-300",
  //   rotation: 4,
  //   likes: 175,
  //   commentsCount: 15,
  //   takeaways: [
  //     "The first 3 seconds of video determine 80% of audience retention.",
  //     "Crisp audio quality doubles perceived visual quality.",
  //     "Adapt video aspect ratios per channel (9:16 vertical vs 16:9 cinematic).",
  //   ],
  //   content: {
  //     intro: "Video is the undisputed king of digital content. But creating video that actually moves people requires a blend of cinematic mastery and social platform psychology.",
  //     sections: [
  //       {
  //         heading: "Lighting & Color Grading Aesthetics",
  //         body: "Professional lighting sets the emotional mood before a word is spoken. Pair that with tailored color grading that matches your brand palette.",
  //       },
  //     ],
  //     conclusion: "Turn your message into a visual spectacle that audiences cannot look away from.",
  //   },
  //   comments: [],
  // },
  // {
  //   id: "post-5",
  //   slug: "ai-workflows-creative-agencies",
  //   title: "Generative AI in Creative Workflows: Supercharging Humans, Not Replacing Them",
  //   excerpt: "How our design and development team integrates state-of-the-art AI tools to speed up ideation, prototype faster, and deliver pixel perfection.",
  //   category: "Paid Ads",
  //   date: { day: "15", month: "Jul", year: "2026" },
  //   readTime: "5 min read",
  //   author: {
  //     name: "Dalton Grant",
  //     role: "UI Designer",
  //     avatar: "/assets/img/team/7.jpg",
  //   },
  //   image: "/assets/img/portfolio/43.jpg",
  //   colorTheme: "purple",
  //   stickyBgLight: "bg-[#e9d5ff] text-purple-950",
  //   stickyBgDark: "bg-[#c084fc] text-purple-950",
  //   textColor: "text-purple-950",
  //   badgeBg: "bg-purple-950 text-purple-200",
  //   rotation: -3,
  //   likes: 310,
  //   commentsCount: 31,
  //   takeaways: [
  //     "AI accelerates initial design concepts from days to hours.",
  //     "Human polish guarantees soul, nuance, and brand integrity.",
  //     "Iterative AI pairing is the future of agency productivity.",
  //   ],
  //   content: {
  //     intro: "AI is not a threat to creative craft—it is the ultimate paintbrush. When paired with human intuition, creative boundaries expand exponentially.",
  //     sections: [
  //       {
  //         heading: "Rapid Mockups & Asset Generation",
  //         body: "By generating bespoke visual concepts instantly, we test dozens of creative directions before writing a single line of production code.",
  //       },
  //     ],
  //     conclusion: "Embrace AI as your co-pilot to elevate every client build.",
  //   },
  //   comments: [],
  // },
  // {
  //   id: "post-6",
  //   slug: "paid-ads-roi-scaling-framework",
  //   title: "The $100K Scaling Framework: High-Converting Ad Creative Secrets",
  //   excerpt: "Stop wasting ad budget on generic campaigns. Discover the blueprint behind our top-performing paid social and search campaigns.",
  //   category: "Social Media Marketing",
  //   date: { day: "04", month: "Jul", year: "2026" },
  //   readTime: "7 min read",
  //   author: {
  //     name: "Dalton Gran",
  //     role: "Chairman",
  //     avatar: "/assets/img/team/2.jpg",
  //   },
  //   image: "/assets/img/portfolio/42.jpg",
  //   colorTheme: "orange",
  //   stickyBgLight: "bg-[#fed7aa] text-orange-950",
  //   stickyBgDark: "bg-[#fb923c] text-orange-950",
  //   textColor: "text-orange-950",
  //   badgeBg: "bg-orange-950 text-orange-200",
  //   rotation: 2,
  //   likes: 89,
  //   commentsCount: 9,
  //   takeaways: [
  //     "Hook, value, call-to-action: the 3-part winning ad formula.",
  //     "A/B test creatives aggressively before scaling spend.",
  //     "Retargeting with custom sticky offers yields 4x ROAS.",
  //   ],
  //   content: {
  //     intro: "Paid media without creative strategy is just burning money. To achieve exceptional return on ad spend (ROAS), your ad creatives must captivate and compel action instantly.",
  //     sections: [
  //       {
  //         heading: "The Power of Direct Response Visuals",
  //         body: "High-performing ads don't look like ads—they look like authentic, engaging content native to the user's feed.",
  //       },
  //     ],
  //     conclusion: "Transform your ad strategy into a repeatable revenue generation engine.",
  //   },
  //   comments: [],
  // },
  // {
  //   id: "post-1",
  //   slug: "Bajaj",
  //   title: "Bike Manufacturers",
  //   excerpt: "How we crafted a high-octane digital experience for one of India’s most iconic mobility brands",
  //   category: "Branding",
  //   date: { day: "12", month: "Aug", year: "2026" },
  //   readTime: "4 min read",
  //   author: {
  //     name: "Danny Russell",
  //     role: "Head of Marketing",
  //     avatar: "/assets/img/team/4.jpg",
  //   },
  //   image: "https://brightmedia.tech/img/covers/project/bajaj.webp",
  //   colorTheme: "lime", // BRAND COLOR!
  //   stickyBgLight: "bg-[#d8fc38] text-[#0e0f11]",
  //   stickyBgDark: "bg-[#c9f31d] text-[#0e0f11]",
  //   textColor: "text-[#0e0f11]",
  //   badgeBg: "bg-[#0e0f11] text-[#c9f31d]",
  //   rotation: -2,
  //   pinned: true,
  //   likes: 142,
  //   commentsCount: 18,
  //   takeaways: [
  //     "Social Media Marketing",
  //     "Paid Ads",
  //     // "Consistency across web, video, and social is key.",
  //   ],
  //   content: {
  //     intro: "In an overcrowded digital landscape, standing out isn’t about being the loudest voice in the room—it’s about having the clearest frequency. Rebranding isn't a simple facelift; it's a strategic alignment of vision, visuals, and user emotion.",
  //     sections: [
  //       {
  //         heading: "Partnering with Bajaj Auto",
  //         body: "Bajaj Auto is a prominent player in the automotive industry, known for its innovative Bikes. We manage their social media pages in Ivory Coast, where our strategic approach has generated around 1 million impressions in a short period. Our efforts focus on engaging content that resonates with the audience, enhancing brand visibility and driving customer interaction.",
  //         // stickyQuote: "A brand identity is a living ecosystem—not a static PDF brand book.",
  //       },
  //       // {
  //       //   heading: "2. The Psychology of High-Vibrancy Colors",
  //       //   body: "Color drives quick subconscious decisions. Utilizing high-energy lime accents against high-contrast obsidian dark tones signals innovation, agility, and forward motion. It tells your customer that you are built for the modern internet.",
  //       // },
  //       // {
  //       //   heading: "3. Translating Brand into Conversion",
  //       //   body: "Great aesthetics build affinity, but strategic UX closes sales. By marrying bold typography with fluid micro-animations, users stay engaged 2.5x longer on brand touchpoints.",
  //       // },
  //     ],
  //     conclusion: "When you rebrand with intention, your audience stops scrolling and starts engaging. Ready to elevate your brand presence?",
  //   },
  //   comments: [
  //     {
  //       id: "c1",
  //       name: "Alex Hales",
  //       avatar: "/assets/img/team/12.jpg",
  //       date: "Aug 13, 2026",
  //       text: "The high-energy lime theme is insanely fresh! Love how tactile the sticky note aesthetic feels.",
  //       noteColor: "bg-[#feef8f] text-gray-900",
  //     },
  //     {
  //       id: "c2",
  //       name: "Sark Hunnen",
  //       avatar: "/assets/img/team/5.jpg",
  //       date: "Aug 14, 2026",
  //       text: "Point #2 about high-vibrancy color recall is spot on. Great read!",
  //       noteColor: "bg-[#a7f3d0] text-gray-900",
  //     },
  //   ],
  // },
  // {
  //   id: "post-2",
  //   slug: "TAC",
  //   title: "The Architecture Corporation",
  //   excerpt: "Static web pages belong to the past. Explore how micro-interactions, motion physics, and sleek components convert casual browsers into loyal clients.",
  //   category: "Web Development",
  //   date: { day: "08", month: "Aug", year: "2026" },
  //   readTime: "6 min read",
  //   author: {
  //     name: "Rusa Jinuh",
  //     role: "Web Developer",
  //     avatar: "/assets/img/team/6.jpg",
  //   },
  //   image: "https://brightmedia.tech/img/allimg/logo/taclogo.webp",
  //   colorTheme: "yellow",
  //   stickyBgLight: "bg-[#fff275] text-slate-900",
  //   stickyBgDark: "bg-[#fde047] text-slate-900",
  //   textColor: "text-slate-900",
  //   badgeBg: "bg-slate-900 text-yellow-300",
  //   rotation: 3,
  //   likes: 98,
  //   commentsCount: 12,
  //   takeaways: [
  //     "Web development",
  //     // "Tailwind + Framer Motion = unbeatable web fluid design.",
  //     // "Keep dynamic animations under 300ms for crisp responsiveness.",
  //   ],
  //   content: {
  //     intro: "Web development has evolved from simple markup and styling to interactive digital art. Today's web user expects subtle feedback, smooth state transitions, and tactile interfaces that feel alive under their fingertips.",
  //     sections: [
  //       {
  //         heading: "Collaborating with TAC",
  //         body: "The Mangalore-based Architecture Corporation specializes in innovative design for residential, commercial, and luxury spaces, offering tailored solutions that bring exceptional interiors, landscapes, and high-rise projects to life.",
  //         stickyQuote: "Bright Media has captured their unique design style, creating a website that perfectly aligns with their vision and aesthetic, reflecting the essence of their architectural approach.",
  //       },
  //       // {
  //       //   heading: "Optimizing Performance with Next.js App Router",
  //       //   body: "Animations should never come at the expense of page speed. By leveraging Next.js server components and lightweight client motion utilities, we achieve 60fps animations with zero performance compromise.",
  //       // },
  //     ],
  //     conclusion: "Elevate your web project by adding delight to every click. Small details leave massive impressions.",
  //   },
  //   comments: [
  //     {
  //       id: "c3",
  //       name: "Michel Dark",
  //       avatar: "/assets/img/team/11.jpg",
  //       date: "Aug 09, 2026",
  //       text: "The paper desk canvas with draggable sticky notes is pure genius!",
  //       noteColor: "bg-[#fecdd3] text-gray-900",
  //     },
  //   ],
  // },
  // {
  //   id: "post-3",
  //   slug: "seo-dominance-in-ai-search-era",
  //   title: "SEO Dominance in 2026: Winning Search in the Age of Generative AI",
  //   excerpt: "Search engines are no longer just indexing links—they are answering questions directly. Learn how to optimize your content for AI overview engines.",
  //   category: "Software Development",
  //   date: { day: "28", month: "Jul", year: "2026" },
  //   readTime: "5 min read",
  //   author: {
  //     name: "James Baker",
  //     role: "CEO & Founder",
  //     avatar: "/assets/img/team/1.jpg",
  //   },
  //   image: "/assets/img/portfolio/1.jpg",
  //   colorTheme: "teal",
  //   stickyBgLight: "bg-[#76f7cd] text-slate-900",
  //   stickyBgDark: "bg-[#2dd4bf] text-slate-950",
  //   textColor: "text-slate-950",
  //   badgeBg: "bg-slate-900 text-teal-300",
  //   rotation: -1,
  //   likes: 210,
  //   commentsCount: 24,
  //   takeaways: [
  //     "Structured schema data is compulsory for AI overview citations.",
  //     "Topic authority beats keyword density every time.",
  //     "Fast page load & mobile core web vitals are non-negotiable.",
  //   ],
  //   content: {
  //     intro: "Search engine optimization has experienced its biggest paradigm shift in two decades. Generative AI summaries mean users demand direct, authoritative answers right at the top of results.",
  //     sections: [
  //       {
  //         heading: "Semantic Content Architecture",
  //         body: "Creating deeply structured, highly relevant content blocks allows search crawlers and AI LLMs to ingest your authority cleanly.",
  //         stickyQuote: "Be the canonical source that AI algorithms quote with confidence.",
  //       },
  //     ],
  //     conclusion: "Adapt your SEO strategy today to stay at the apex of search rankings tomorrow.",
  //   },
  //   comments: [],
  // },
  // {
  //   id: "post-4",
  //   slug: "cinematic-video-production-brand-storytelling",
  //   title: "Cinematic Video Production: Crafting Visual Stories That Stop the Scroll",
  //   excerpt: "Behind the camera with Bright Media: How high-impact photography and 4K commercial videos drive viral engagement across all platforms.",
  //   category: "Video Production",
  //   date: { day: "20", month: "Jul", year: "2026" },
  //   readTime: "4 min read",
  //   author: {
  //     name: "Megh Grant",
  //     role: "Content Creator",
  //     avatar: "/assets/img/team/8.jpg",
  //   },
  //   image: "/assets/img/portfolio/2.jpg",
  //   colorTheme: "pink",
  //   stickyBgLight: "bg-[#fca5a5] text-slate-900",
  //   stickyBgDark: "bg-[#fb7185] text-slate-950",
  //   textColor: "text-slate-950",
  //   badgeBg: "bg-slate-900 text-rose-300",
  //   rotation: 4,
  //   likes: 175,
  //   commentsCount: 15,
  //   takeaways: [
  //     "The first 3 seconds of video determine 80% of audience retention.",
  //     "Crisp audio quality doubles perceived visual quality.",
  //     "Adapt video aspect ratios per channel (9:16 vertical vs 16:9 cinematic).",
  //   ],
  //   content: {
  //     intro: "Video is the undisputed king of digital content. But creating video that actually moves people requires a blend of cinematic mastery and social platform psychology.",
  //     sections: [
  //       {
  //         heading: "Lighting & Color Grading Aesthetics",
  //         body: "Professional lighting sets the emotional mood before a word is spoken. Pair that with tailored color grading that matches your brand palette.",
  //       },
  //     ],
  //     conclusion: "Turn your message into a visual spectacle that audiences cannot look away from.",
  //   },
  //   comments: [],
  // },
  // {
  //   id: "post-5",
  //   slug: "ai-workflows-creative-agencies",
  //   title: "Generative AI in Creative Workflows: Supercharging Humans, Not Replacing Them",
  //   excerpt: "How our design and development team integrates state-of-the-art AI tools to speed up ideation, prototype faster, and deliver pixel perfection.",
  //   category: "Paid Ads",
  //   date: { day: "15", month: "Jul", year: "2026" },
  //   readTime: "5 min read",
  //   author: {
  //     name: "Dalton Grant",
  //     role: "UI Designer",
  //     avatar: "/assets/img/team/7.jpg",
  //   },
  //   image: "/assets/img/portfolio/43.jpg",
  //   colorTheme: "purple",
  //   stickyBgLight: "bg-[#e9d5ff] text-purple-950",
  //   stickyBgDark: "bg-[#c084fc] text-purple-950",
  //   textColor: "text-purple-950",
  //   badgeBg: "bg-purple-950 text-purple-200",
  //   rotation: -3,
  //   likes: 310,
  //   commentsCount: 31,
  //   takeaways: [
  //     "AI accelerates initial design concepts from days to hours.",
  //     "Human polish guarantees soul, nuance, and brand integrity.",
  //     "Iterative AI pairing is the future of agency productivity.",
  //   ],
  //   content: {
  //     intro: "AI is not a threat to creative craft—it is the ultimate paintbrush. When paired with human intuition, creative boundaries expand exponentially.",
  //     sections: [
  //       {
  //         heading: "Rapid Mockups & Asset Generation",
  //         body: "By generating bespoke visual concepts instantly, we test dozens of creative directions before writing a single line of production code.",
  //       },
  //     ],
  //     conclusion: "Embrace AI as your co-pilot to elevate every client build.",
  //   },
  //   comments: [],
  // },
  // {
  //   id: "post-6",
  //   slug: "paid-ads-roi-scaling-framework",
  //   title: "The $100K Scaling Framework: High-Converting Ad Creative Secrets",
  //   excerpt: "Stop wasting ad budget on generic campaigns. Discover the blueprint behind our top-performing paid social and search campaigns.",
  //   category: "Social Media Marketing",
  //   date: { day: "04", month: "Jul", year: "2026" },
  //   readTime: "7 min read",
  //   author: {
  //     name: "Dalton Gran",
  //     role: "Chairman",
  //     avatar: "/assets/img/team/2.jpg",
  //   },
  //   image: "/assets/img/portfolio/42.jpg",
  //   colorTheme: "orange",
  //   stickyBgLight: "bg-[#fed7aa] text-orange-950",
  //   stickyBgDark: "bg-[#fb923c] text-orange-950",
  //   textColor: "text-orange-950",
  //   badgeBg: "bg-orange-950 text-orange-200",
  //   rotation: 2,
  //   likes: 89,
  //   commentsCount: 9,
  //   takeaways: [
  //     "Hook, value, call-to-action: the 3-part winning ad formula.",
  //     "A/B test creatives aggressively before scaling spend.",
  //     "Retargeting with custom sticky offers yields 4x ROAS.",
  //   ],
  //   content: {
  //     intro: "Paid media without creative strategy is just burning money. To achieve exceptional return on ad spend (ROAS), your ad creatives must captivate and compel action instantly.",
  //     sections: [
  //       {
  //         heading: "The Power of Direct Response Visuals",
  //         body: "High-performing ads don't look like ads—they look like authentic, engaging content native to the user's feed.",
  //       },
  //     ],
  //     conclusion: "Transform your ad strategy into a repeatable revenue generation engine.",
  //   },
  //   comments: [],
  // },
];
