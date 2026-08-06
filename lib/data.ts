// Central content for the Dixor clone — structure mirrors the source template.

import { Phone } from "lucide-react";

export const LOGO_DARK = "/media/logo.46fb92a1.png"; // dark logo → use on light bg
export const LOGO_LIGHT = "/media/logo-light.f1d48bdf.png"; // light logo → use on dark bg
export const ARROW = "/media/arrow.86889acb.png";

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Social Media Marketing", href: "/services/social-media" },
      { label: "Branding", href: "/services-2/branding" },
      { label: "Web Development", href: "/services-3" },
      { label: "SEO", href: "/services-4" },
      { label: "Paid Ads", href: "/service-5" },
      { label: "Photography & Video Productions", href: "/photography-and-video-production" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const HERO = {
  titleTop: "Bringing\t\tBright",
  titleBottom: "Side\tTo\t\tBright\t\tSide",
  image: "/media/1.6cbb05d4.png",
  brand: "Bright Media",
  description:
    "We manage all aspects of your project, ensuring seamless execution and exceptional results tailored for you.",
  cta: { label: "Know More", href: "/services" },
  stat: { value: "31", suffix: "K", label: "Completed Projects" },
};

export const ABOUT = {
  image: "/media/2.6f5c9794.jpg",
  heading: "Build Strong Digital Brand",
  text: "It involves crafting a unique identity, engaging storytelling, and consistent online presence to connect with audiences and drive sustainable growth.",
  services: [
    { no: "01", label: "Social Media" },
    { no: "02", label: "Branding" },
    { no: "03", label: "Video Production" },
  ],
};

export interface Service {
  id: number;
  no: string;
  title: string;
  icon: string; // dark theme icon
  iconLight: string; // light theme icon
  desc: string;
}

export const SERVICES: Service[] = [
  {
    id: 1,
    no: "01",
    title: "Static & Dynamic Websites",
    icon: "/assets/img/icon/1.png",
    iconLight: "/assets/img/icon/23.png",
    desc: "They feature dynamic content that can change based on user interactions or data input. hey are typically built using HTML and CSS and are suitable for businesses or Corporates who require a online presence to showcase their products or services.",
  },
  {
    id: 2,
    no: "02",
    title: "E-commerce",
    icon: "/assets/img/icon/2.png",
    iconLight: "/assets/img/icon/24.png",
    desc: "E-commerce websites allow businesses to sell products or services online. They include features such as shopping carts, secure payment gateways, and inventory management systems to facilitate online transactions.",
  },
  {
    id: 3,
    no: "03",
    title: "CMS",
    icon: "/assets/img/icon/3.png",
    iconLight: "/assets/img/icon/25.png",
    desc: "Content Management Systems websites are built using platforms like WordPress, Joomla, or Drupal, which allow users to easily create, manage, and update website content without extensive technical knowledge. CMS websites are ideal for blogs, news sites, and small to medium-sized businesses.",
  },
  {
    id: 4,
    no: "04",
    title: "LMS",
    icon: "/assets/img/icon/4.png",
    iconLight: "/assets/img/icon/26.png",
    desc: "Learning Management Systems websites are designed for online learning and education. They provide a platform for instructors to create and deliver courses, manage student enrollments, track progress, and assess learning outcomes. Examples of LMS platforms include Moodle, Canvas, and Blackboard.",
  },
];
export interface Service1 {
  id: number;
  no: string;
  title: string;
  icon: string; // dark theme icon
  iconLight: string; // light theme icon
  desc: string;
}

export const SERVICES1: Service1[] = [
  {
    id: 1,
    no: "01",
    title: "Customized Strategies",
    icon: "/assets/img/icon/1.png",
    iconLight: "/assets/img/icon/23.png",
    desc: "Tailored SEO solutions designed to meet your unique business needs, ensuring long-term growth and targeted audience engagement.",
  },
  {
    id: 2,
    no: "02",
    title: "Improved Visibility",
    icon: "/assets/img/icon/2.png",
    iconLight: "/assets/img/icon/24.png",
    desc: "Boosting search engine rankings with optimized keywords and content to help your brand reach the right audience effectively.",
  },
  {
    id: 3,
    no: "03",
    title: "Performance Optimization",
    icon: "/assets/img/icon/3.png",
    iconLight: "/assets/img/icon/25.png",
    desc: "Enhancing website speed, mobile responsiveness, and user experience to increase engagement and improve conversion rates across devices.",
  },
  {
    id: 4,
    no: "04",
    title: "Link Building",
    icon: "/assets/img/icon/4.png",
    iconLight: "/assets/img/icon/26.png",
    desc: "Acquiring high-quality backlinks from reputable sources to improve your website's authority, search rankings, and online visibility.",
  },
];

export interface Project {
  title: string;
  strong: string;
  imageDark: string;
  imageLight: string;
}

export const PROJECTS: Project[] = [
  { title: "Strategy", strong: "Development", imageDark: "/assets/img/portfolio/1.jpg", imageLight: "/assets/img/portfolio/43.jpg" },
  { title: "Consultation", strong: "", imageDark: "/assets/img/portfolio/2.jpg", imageLight: "/assets/img/portfolio/42.jpg" },
  { title: "Execution", strong: "", imageDark: "/assets/img/portfolio/2.jpg", imageLight: "/assets/img/portfolio/42.jpg" },
  { title: "Monitoring &", strong: "Optimization", imageDark: "/assets/img/portfolio/2.jpg", imageLight: "/assets/img/portfolio/42.jpg" },
  { title: "Review &", strong: "Feedback", imageDark: "/assets/img/portfolio/2.jpg", imageLight: "/assets/img/portfolio/42.jpg" },
];

export const TEAM_TABS = [
  { title: "Managing Director", sub: "Head of department" },
  { title: "Marketing Manager", sub: "Sales Department" },
  { title: "Software Developer", sub: "App Department" },
];

export interface Member {
  name: string;
  role: string;
  image: string;
}

export const TEAM: Member[] = [
  { name: "James Baker", role: "CEO & Founder", image: "/assets/img/team/1.jpg" },
  { name: "Dalton Gran", role: "Chairman", image: "/assets/img/team/2.jpg" },
  { name: "Ryan Ricketts", role: "Manager", image: "/assets/img/team/3.jpg" },
  { name: "Danny Russell", role: "Head of Marketing", image: "/assets/img/team/4.jpg" },
  { name: "Sark Hunnen", role: "Project Manager", image: "/assets/img/team/5.jpg" },
  { name: "Rusa Jinuh", role: "Web Developer", image: "/assets/img/team/6.jpg" },
  { name: "Dalton Grant", role: "UI Designer", image: "/assets/img/team/7.jpg" },
  { name: "Megh Grant", role: "Content Creator", image: "/assets/img/team/8.jpg" },
];

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  image: string;
  quote: string;
}

export const TESTIMONIAL_SHAPE = "/media/14.9e753aec.png";

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Michel Dark",
    role: "Envato Client",
    rating: 5,
    image: "/assets/img/team/11.jpg",
    quote:
      "Working with the team was seamless from start to finish — thoughtful strategy, sharp design, and delivery ahead of schedule.",
  },
  {
    name: "Alex Hales",
    role: "Envato Client",
    rating: 4.7,
    image: "/assets/img/team/12.jpg",
    quote:
      "They turned a vague idea into a polished brand and product. Communication was clear and the results speak for themselves.",
  },
  {
    name: "Micky James",
    role: "Envato Client",
    rating: 4.9,
    image: "/assets/img/team/13.jpg",
    quote:
      "A rare mix of creativity and technical depth. Our traffic and conversions climbed within the first quarter.",
  },
];

export const CLIENTS = {
  cards: [
    "/media/10.c79798b6.jpg",
    "/media/11.08664ad5.jpg",
    "/media/12.ead1ba4c.jpg",
    "/media/13.336b62ff.jpg",
  ],
  logos: [
    "/media/10.b10a069f.png",
    "/media/2.4d599ac1.png",
    "/media/3.48f861c5.png",
    "/media/4.06fbdace.png",
    "/media/8.2e588f13.png",
    "/media/6.b71f4983.png",
    "/media/7.473571ec.png",
  ],
};

export const WHY = {
  image: "/media/3.527ea292.jpg",
  items: [
    {
      title: "Personalized Strategies",
      body: "At Bright Media, we understand that one size doesn't fit all. We develop customized strategies tailored to each client's unique goals and target audience.",
    },
    {
      title: "Insight-Driven Decisions",
      body: "Our strategies are backed by thorough research and analysis. We leverage data-driven insights to make informed decisions and optimize campaign performance for maximum results.",
    },
    {
      title: "Creative Brilliance",
      body: "Creativity is at the heart of everything we do. Our team of skilled professionals crafts compelling content and visually stunning designs that captivate audiences and drive engagement.",
    },
    {
      title: "Ongoing Optimization",
      body: "We believe in the power of continuous improvement. We closely monitor campaign performance, analyze results, and refine strategies to ensure ongoing success and ROI for our clients.",
    },
  ],
  awards: [
    { icon: "fab fa-behance", label: "Behance Awards" },
    { icon: "fas fa-layer-group", label: "Design Awards" },
    { icon: "fab fa-laravel", label: "Coding Awards" },
  ],
};

export interface Step {
  title: string;
  icon: string;
  iconLight: string;
  desc: string;
}

export const PROCESS: Step[] = [
  { title: "Social Media Marketing", icon: "/assets/img/icon/5.png", iconLight: "/assets/img/icon/27.png", desc: "Engage and grow your audience with custom social media strategies to boost brand awareness and interaction." },
  { title: "BRANDING", icon: "/assets/img/icon/6.png", iconLight: "/assets/img/icon/28.png", desc: "Create Brand identity that resonates with your audience and reflects your core values." },
  { title: "WEB DEVELOPMENT", icon: "/assets/img/icon/7.png", iconLight: "/assets/img/icon/29.png", desc: "Build user-friendly, responsive websites designed to enhance customer experience and drive conversions effectively." },
  { title: "SEO", icon: "/assets/img/icon/8.png", iconLight: "/assets/img/icon/30.png", desc: "Optimize your online presence to improve search rankings, attract organic traffic, and increase visibility." },
  { title: "PAID ADS", icon: "/assets/img/icon/6.png", iconLight: "/assets/img/icon/28.png", desc: "Maximize reach and return on investment with targeted advertising campaigns across various digital platforms." },
  { title: "PHOTOGRAPHY/VIDEO PRODUCTION", icon: "/assets/img/icon/7.png", iconLight: "/assets/img/icon/29.png", desc: "Capture compelling visuals that tell your brand story and engage your audience across all media." },
];

export interface Post {
  date: { day: string; month: string };
  title: string;
  author: string;
  comments: number;
  image: string;
}

export const POSTS: Post[] = [
  {
    date: { day: "14", month: "Sep" },
    title: "Discovery incommode earnestly commanded by design",
    author: "Md Sohag",
    comments: 18,
    image: "/assets/img/blog/4.jpg",
  },
  {
    date: { day: "06", month: "Oct" },
    title: "Expression acceptance imprudence particular results",
    author: "Md Sohag",
    comments: 18,
    image: "/assets/img/blog/5.jpg",
  },
];

export const CONTACT = {
  phone: "+917 795 240 605",
  email: "info@brightmedia.tech",
  bg: "/assets/img/about/3.jpg",
};

export const FOOTER = {
  locations: [
    { country: "INDIA", address: "2nd floor, Regal Park, Mission Street, State Bank, Mangalore 575001", phone: "+917 795 240 605" },
    { country: "IVORY COAST", address: "11 BP 2498- 11, 4th Floor, Waimea Bldg, Marcory Boulevard VGE, Abidjan, Côte d'Ivoire", phone: "+225 079 797 9387" },
    { country: "UAE", address: "Business Centre, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates", phone: "+971 545 681 182" },
  ],
  usefulLinks: [
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Services", href: "/services" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Help Desk", href: "#" },
  ],
  social: [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-linkedin-in", href: "#" },
    { icon: "fab fa-behance", href: "#" },
    { icon: "fab fa-dribbble", href: "#" },
  ],
};
