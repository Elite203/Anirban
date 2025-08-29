import React from "react";
import {
  FaPython,
  FaJava,
  FaNodeJs,
  FaReact,
  FaPhp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGoogle,
  FaWhatsapp,
  FaFire,
} from "react-icons/fa";
import {
  SiRubyonrails,
  SiDjango,
  SiSpring,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDart,
  SiKotlin,
} from "react-icons/si";
import {
  Code,
  Brush,
  Smartphone,
  Server,
  Megaphone,
  PenTool,
  Search,
  Bot,
  BarChart,
  Settings,
  HardDrive,
  DraftingCompass,
  ShieldCheck,
  FileText,
  PlusCircle,
  Image,
  Video,
  Eye,
  MessageSquare,
  ClipboardList,
  Code2,
  TestTube2,
  Film,
} from "lucide-react";
import { IconBrandFirebase } from "@tabler/icons-react";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/contact" },
];

export const aboutFeatures = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Expert Team of Developers & Designers",
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Expert Team of SEO and Content Writers",
  },
  {
    icon: <DraftingCompass className="w-8 h-8" />,
    title: "Expert Legal Advisor",
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Expert Team of Advertisers",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Comprehensive Support & Maintenance",
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "On-Time Delivery & Budget-Friendly",
  },
];

const createSkill = (Icon, name, color) => ({ Icon, name, color });

export const skillCategories = {
  "Programming Languages": [
    createSkill(FaPython, "Python", "#3776AB"),
    createSkill(FaJava, "Java", "#007396"),
    createSkill(SiRubyonrails, "Ruby", "#CC342D"),
    createSkill(FaNodeJs, "Node.js", "#339933"),
    createSkill(FaPhp, "PHP", "#777BB4"),
    createSkill(SiKotlin, "Kotlin", "#7F52FF"),
    createSkill(SiDart, "Dart", "#0175C2"),
  ],
  Frameworks: [
    createSkill(SiDjango, "Django", "#092E20"),
    createSkill(SiSpring, "Spring", "#6DB33F"),
    createSkill(FaReact, "React", "#61DAFB"),
    createSkill(SiExpress, "Express.js", "#FFFFFF"),
  ],
  Databases: [
    createSkill(SiMysql, "MySQL", "#4479A1"),
    createSkill(SiPostgresql, "PostgreSQL", "#4169E1"),
    createSkill(SiMongodb, "MongoDB", "#47A248"),
    createSkill(SiRedis, "Redis", "#DC382D"),
    createSkill(FaFire, "Firebase", "#FFCA28"),
  ],
};

const ServiceIcon = ({ children }) => (
  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white service-icon-3d">
    {children}
  </div>
);

export const services = [
  {
    slug: "web-development",
    icon: (
      <ServiceIcon>
        <Code className="w-8 h-8" />
      </ServiceIcon>
    ),
    title: "Web Development",
    description:
      "Building responsive, high-performance websites with modern technologies tailored to your business needs.",
  },
  {
    slug: "android-app-development",
    icon: (
      <ServiceIcon>
        <Smartphone className="w-8 h-8" />
      </ServiceIcon>
    ),
    title: "Android App Development",
    description:
      "Creating native Android applications that deliver seamless user experiences and powerful functionality.",
  },
  {
    slug: "website-ui-ux-design",
    icon: (
      <ServiceIcon>
        <Brush className="w-8 h-8" />
      </ServiceIcon>
    ),
    title: "Website UI/UX Design",
    description:
      "Designing intuitive and visually stunning user interfaces that enhance user engagement and conversion rates.",
  },
  {
    slug: "android-app-ui-ux-design",
    icon: (
      <ServiceIcon>
        <DraftingCompass className="w-8 h-8" />
      </ServiceIcon>
    ),
    title: "Android App UI/UX Design",
    description:
      "Crafting beautiful and user-friendly interfaces for Android apps that reflect your brand identity.",
  },
  {
    slug: "web-hosting-management",
    icon: (
      <ServiceIcon>
        <Server className="w-8 h-8" />
      </ServiceIcon>
    ),
    title: "Web Hosting & Management",
    description:
      "Providing reliable and secure web hosting solutions with comprehensive management and support.",
  },
  {
    slug: "software-consultation",
    icon: (
      <ServiceIcon>
        <Bot className="w-8 h-8" />
      </ServiceIcon>
    ),
    title: "Software Consultation",
    description:
      "Offering expert advice and strategic planning to help you leverage technology for business growth.",
  },
  {
    slug: "digital-marketing-seo",
    icon: (
      <ServiceIcon>
        <Search className="w-8 h-8" />
      </ServiceIcon>
    ),
    title: "Digital Marketing & SEO",
    description:
      "Boosting your online visibility and driving organic traffic with our proven SEO and marketing strategies.",
  },
  {
    slug: "content-writing",
    icon: (
      <ServiceIcon>
        <PenTool className="w-8 h-8" />
      </ServiceIcon>
    ),
    title: "Content Writing",
    description:
      "Crafting compelling and SEO-friendly content that resonates with your audience and builds your brand.",
  },
  {
    slug: "google-meta-ads",
    icon: (
      <ServiceIcon>
        <FaGoogle className="w-8 h-8" />
      </ServiceIcon>
    ),
    title: "Google & Meta Ads",
    description:
      "Managing targeted ad campaigns on Google and Meta platforms to maximize your ROI and reach.",
  },
  {
    slug: "logo-design",
    icon: (
      <ServiceIcon>
        <Image className="w-8 h-8" />
      </ServiceIcon>
    ),
    title: "Logo Design",
    description:
      "Professional logo design services to create a unique and memorable brand identity.",
  },
  {
    slug: "photo-editing",
    icon: (
      <ServiceIcon>
        <Image className="w-8 h-8" />
      </ServiceIcon>
    ),
    title: "Photo Editing",
    description:
      "Professional photo editing and retouching services to make your images stand out.",
  },
  
   {
    slug: "thumbnail-banner",
    icon: <ServiceIcon><HardDrive className="w-8 h-8" /></ServiceIcon>,
    title: "THUMBNAIL, BANNER, POSTER",
    description: "we can create stunning animation and visual effects to create short film, portfolio, podcast for  your YouTube channel."
  },
  {
    slug: "video-editing",
    icon: (
      <ServiceIcon>
        <Video className="w-8 h-8" />
      </ServiceIcon>
    ),
    title: "Video Editing",
    description:
      "Creating engaging and professional videos for marketing, social media, and corporate use.",
  },
  {
    slug: "motion-graphics",
    icon: (
      <ServiceIcon>
        <Film className="w-8 h-8" />
      </ServiceIcon>
    ),
    title: "Motion Graphics",
    description:
      "Bringing your brand to life with captivating motion graphics and animations for a dynamic impact.",
  },
    {
    slug: 'vfx-cgi-animation',
    icon: <ServiceIcon><Eye className="w-8 h-8" /></ServiceIcon>,
    title: "VFX, CGI, ANIMATION",
    description: "we can create stunning animation and visual effects to create short film, portfolio, podcast for  your YouTube channel"
  },
  {
    slug: "protect-your-brand",
    icon: (
      <ServiceIcon>
        <ShieldCheck className="w-8 h-8" />
      </ServiceIcon>
    ),
    title: "Protect Your Brand",
    description:
      "Comprehensive brand protection strategies including trademark and copyright services.",
  },
  {
    slug: "business-license-registration",
    icon: (
      <ServiceIcon>
        <FileText className="w-8 h-8" />
      </ServiceIcon>
    ),
    title: "Business License Registration",
    description:
      "Hassle-free registration services to get your business legally compliant and operational.",
  },
  {
    slug: "many-more",
    icon: (
      <ServiceIcon>
        <PlusCircle className="w-8 h-8" />
      </ServiceIcon>
    ),
    title: "Many More",
    description:
      "We offer a wide range of other services. Contact us to learn more about how we can help you.",
  },
];

export const teamMembers = [
  {
    name: "Anirban Mondal",
    role: "Founder & CEO",
    image: "Male founder and lead developer in a modern office",
    img: "/a.png",
  },
  {
    name: "Jane Doe",
    role: "Head of Design",
    img: "/e.png",
    image: "Creative female head of design smiling",
  },
  {
    name: "John Smith",
    role: "Marketing Director",
    image: "Confident male marketing director in a meeting",
    img: "/c.png",
  },
  {
    name: "Emily White",
    role: "SEO Specialist",
    image: "Female SEO specialist analyzing data on a computer",
    img: "/f.png",
  },
  {
    name: "Michael Brown",
    role: "Android Developer",
    image: "Male android developer coding on a laptop",
    img: "/e.png",
  },
  {
    name: "Sarah Green",
    role: "Content Strategist",
    image: "Female content strategist brainstorming ideas",
    img: "/b.png",
  },
  {
    name: "David Black",
    role: "Legal Advisor",
    image: "Professional male legal advisor in a suit",
    img: "/h.png",
  },
  {
    name: "Chris Grey",
    role: "Ads Campaign Manager",
    image: "Young male ads campaign manager reviewing analytics",
    img: "/i.png",
  },
];

export const testimonials = [
  {
    name: "Alex Johnson",
    company: "Tech Innovators Inc.",
    review:
      "Working with ANIRBAN'S SKILL ACADEMY was a game-changer for our project. Their expertise in web development and UI/UX design is unparalleled. They delivered beyond our expectations!",
    image: "Portrait of a smiling male client",
  },
  {
    name: "Samantha Lee",
    company: "Creative Solutions",
    review:
      "The team is incredibly talented and professional. They transformed our app idea into a reality with a seamless and beautiful user experience. Highly recommended!",
    image: "Portrait of a happy female client",
  },
  {
    name: "Michael Chen",
    company: "E-commerce Hub",
    review:
      "Their digital marketing and SEO services have significantly boosted our online presence. We've seen a remarkable increase in traffic and conversions. A fantastic partner to have.",
    image: "Professional headshot of a male e-commerce owner",
  },
  {
    name: "Jessica Rodriguez",
    company: "Startup Ventures",
    review:
      "From software consultation to final deployment, the process was smooth and transparent. Their team is responsive, knowledgeable, and truly cares about client success.",
    image: "Confident female startup founder",
  },
  {
    name: "David Wilson",
    company: "Future Gadgets",
    review:
      "The Android app they developed for us is top-notch. It's fast, reliable, and has received amazing feedback from our users. The best development team we've worked with.",
    image: "Portrait of a satisfied male tech CEO",
  },
  {
    name: "Laura Taylor",
    company: "Health & Wellness Co.",
    review:
      "Their content writing and SEO strategy have been instrumental in our growth. Our blog traffic has tripled, and we're ranking for keywords we never thought possible.",
    image: "Happy female wellness entrepreneur",
  },
];

// export const socialLinks = [
//   { Icon: FaFacebookF, href: "https://facebook.com" },
//   { Icon: FaInstagram, href: "https://instagram.com" },
//   { Icon: FaTwitter, href: "https://twitter.com" },
//   { Icon: FaLinkedinIn, href: "https://linkedin.com" },
// ];
export const socialLinks = [
  {
    Icon: FaFacebookF,
    href: "https://facebook.com",
    label: "Visit our Facebook page",
  },
  {
    Icon: FaInstagram,
    href: "https://instagram.com",
    label: "Visit our Instagram profile",
  },
  {
    Icon: FaTwitter,
    href: "https://twitter.com",
    label: "Follow us on Twitter",
  },
  {
    Icon: FaLinkedinIn,
    href: "https://linkedin.com",
    label: "Connect with us on LinkedIn",
  },
];

export const achievements = [
  { text: "97% customer satisfaction", image: "/i.png" },
  { text: "98% project completed", image: "/x.png" },
  { text: "100% on time project delivery", image: "y.png" },
  { text: "100% after work support", image: "z.png" },
  { text: "100% lower cost than others", image: "v.png" },
];

export const developmentProcess = [
  {
    icon: <MessageSquare />,
    title: "Consultation",
    description: "Understanding your requirements and objectives.",
  },
  {
    icon: <ClipboardList />,
    title: "Planning",
    description: "Detailed project planning and architecture design.",
  },
  {
    icon: <Code2 />,
    title: "Development",
    description: "Agile development with regular updates.",
  },
  {
    icon: <TestTube2 />,
    title: "Testing",
    description: "Thorough testing and quality assurance.",
  },
];

export const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of digital services including Web and Android App Development, UI/UX Design, Web Hosting, Software Consultation, Digital Marketing, SEO, Content Writing, Ad Campaigns, and much more.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline for a website project varies depending on its complexity. A simple marketing website can take 4-6 weeks, while a more complex e-commerce platform or web application can take several months. We provide a detailed timeline after our initial consultation.",
  },
  {
    question: "How long does it take to build an android app?",
    answer:
      "Similar to websites, the timeline for an Android app depends on its features and complexity. A simple app might take 2-3 months, while a more feature-rich application could take 6 months or more. We'll provide a detailed project plan after understanding your requirements.",
  },
  {
    question: "Can you help with my existing website?",
    answer:
      "Absolutely! We can help you redesign, update, or add new features to your existing website. We also offer SEO audits and performance optimization services to improve your current site.",
  },
  {
    question: "Can we help with your existing android app?",
    answer:
      "Yes, we can. Our team can help you with bug fixes, performance improvements, UI/UX redesign, or adding new features to your existing Android application.",
  },
  {
    question: "What is a static and dynamic website?",
    answer:
      "A static website has fixed content, and every visitor sees the same thing. It's fast and secure, great for portfolios or brochures. A dynamic website can display different content for different users (e.g., social media, e-commerce) and is managed through a content management system (CMS) or backend.",
  },
  {
    question: "What is a frontend in a website?",
    answer:
      "The frontend is everything the user sees and interacts with in their browser. It's the 'client-side' of the application, built with technologies like HTML, CSS, and JavaScript (and frameworks like React).",
  },
  {
    question: "What is a backend in a website?",
    answer:
      "The backend is the 'server-side' of the application. It handles the logic, database interactions, user authentication, and serves information to the frontend. It's the engine that powers the website.",
  },
  {
    question: "What is an admin panel?",
    answer:
      "An admin panel is a secure, private interface for a dynamic website or application that allows the owner or administrator to manage content, users, and other data without needing to code. It's the control center for the website.",
  },
  {
    question: "Does a static website need a backend and admin panel?",
    answer:
      "No. By definition, a static website does not have a backend or a database to manage content, so it does not need an admin panel. All content is hard-coded into the files.",
  },
  {
    question: "What are backlinks and keywords in SEO services?",
    answer:
      "Keywords are the words and phrases people type into search engines. SEO involves optimizing your site's content around these keywords. Backlinks are links from other websites to yours. They act as 'votes of confidence' and are a crucial factor for ranking higher in search results.",
  },
  {
    question: "Why should we must register our business in IP India?",
    answer:
      "Registering your business with IP (Intellectual Property) India protects your brand identity, such as your brand name (Trademark) and original creative works (Copyright). It gives you legal ownership and prevents others from using your intellectual property without permission.",
  },
  {
    question: "Are copyright and trademark the same?",
    answer:
      "No. A trademark protects brand names, logos, and slogans used on goods and services. A copyright protects original artistic and literary works, like books, music, software code, and website content. They protect different types of intellectual property.",
  },
  {
    question: "What should we register first: our logo or brand name?",
    answer:
      "It's generally recommended to register your brand name first, as it's the core of your identity. A logo can be registered separately as an artistic work (copyright) or as a device mark (trademark). Protecting the name is often the priority.",
  },
  {
    question: "Is MSME and GST registration mandatory for a startup business?",
    answer:
      "MSME registration is not mandatory but provides various government benefits. GST registration is mandatory if your annual turnover exceeds the threshold limit (e.g., ₹20 lakhs for services in most states) or if you're involved in inter-state trade or e-commerce.",
  },
];
