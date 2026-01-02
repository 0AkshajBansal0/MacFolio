const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const linkedinPosts = [
  {
    id: 1,
    date: "Jan 8, 2025",
    title:
      "Oracle Cloud Infrastructure 2024 – Certified Foundations Associate",
    image: "/images/oracle-oci.jpg",
    link: "https://www.linkedin.com/posts/akshaj-bansal-44a6211b8_oraclecloud-cloudcomputing-oci-activity-7298039622960300032-mVNQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKjMzoBvmB60s4265apo2wRnyl-sSCuWVs",
  },
  {
    id: 2,
    date: "Mar 23, 2025",
    title:
      "CAD 3.0 Hackathon: Built RhythmX – A Platform for Artists to Monetize Music",
    image: "/images/cad3-hackathon.jpg",
    link: "https://www.linkedin.com/posts/akshaj-bansal-44a6211b8_hackathon-debugging-problemsolving-activity-7310499327779487744-uFyK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKjMzoBvmB60s4265apo2wRnyl-sSCuWVs",
  },
  {
    id: 3,
    date: "Jul 17, 2025",
    title:
      "Technology Intern at Airtel Payments Bank – Backend & SDLC Experience",
    image: "/images/airtel-internship.jpg",
    link: "https://www.linkedin.com/posts/akshaj-bansal-44a6211b8_excited-to-share-my-internship-experience-activity-7351666364736040960-t8XW?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKjMzoBvmB60s4265apo2wRnyl-sSCuWVs",
  },
];


const techStack = [
  {
    category: "Programming",
    items: ["Python", "Java", "C++", "C", "JavaScript"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Spring Boot"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    category: "Data & ML",
    items: ["NumPy", "Pandas"],
  },
  {
    category: "Core CS",
    items: ["Data Structures & Algorithms", "OOP", "DBMS"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

const socials = [
  {
    id: 1,
    text: "GitHub",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/0AkshajBansal0",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/akshaj-bansal-44a6211b8/",
  },
  {
    id: 3,
    text: "Instagram",
    icon: "/icons/instagram.png",
    bg: "#ff866b",
    link: "https://www.instagram.com/akshajbansal/",
  },
  {
    id: 4,
    text: "Email",
    icon: "/icons/gmail.png",
    bg: "#4bcb63",
    link: "mailto:bansalakshaj@gmail.com",
  },
];


const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.JPEG",
  },
  {
    id: 2,
    img: "/images/gal2.JPEG",
  },
  {
    id: 3,
    img: "/images/gal4.JPEG",
  },
  {
    id: 4,
    img: "/images/gal3.JPEG",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  linkedinPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1 — Rhythmix
    {
      id: 5,
      name: "Rhythmix",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Rhythmix.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Rhythmix is a music NFT marketplace that allows artists to tokenize and sell their music as NFTs.",
            "The platform enables creators to mint NFTs and list their music in a digital marketplace.",
            "Secure user authentication was implemented to ensure safe access and ownership handling.",
            "Firebase was integrated to support real-time updates and a smooth user experience.",
          ],
        },
        {
          id: 2,
          name: "rhythmix.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://rhythmix-rho.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "rhythmix.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/0AkshajBansal0/Rhythmix",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2 — DeepTrace
    {
      id: 6,
      name: "DeepTrace",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "DeepTrace.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "DeepTrace is an AI-powered forensic tool designed to detect AI-generated content, deepfakes, and manipulated media.",
            "The system performs multi-stage analysis across text, images, and metadata to identify synthetic or altered content.",
            "OpenAI and Replicate APIs were integrated to power advanced detection and classification workflows.",
            "The project focuses on accuracy, scalability, and real-world applicability in digital content verification.",
          ],
        },
        {
          id: 2,
          name: "deeptrace.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://deep-trace-web.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "deeptrace.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/0AkshajBansal0/DeepTrace",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3 — AI Trip Planner
    {
      id: 7,
      name: "AI Trip Planner",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "AI Trip Planner.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "AI Trip Planner is a full-stack, AI-powered application that generates complete travel itineraries based on user input.",
            "Users can specify destination, budget, duration, and travel companions to receive a detailed travel plan.",
            "The generated itinerary includes hotels, schedules, estimated costs, and locations.",
            "The project combines AI logic with authentication and data persistence to deliver a practical, real-world solution.",
          ],
        },
        {
          id: 2,
          name: "ai-trip-planner.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ai-trip-plannerakshaj.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "ai-trip-planner.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.jpg",
        },
        {
          id: 5,
          name: "Github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/0AkshajBansal0/AI-Trip-Planner",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/akshaj.JPEG",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/akshaj-2.JPG",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/akshaj-3.JPEG",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/akshaj.JPEG",
      description: [
        "Hey, I’m Akshaj 👋 - a developer who enjoys building clean, fast, and reliable products.",
        "I mainly work with JavaScript, React, and modern backend tools, focusing on solid logic and smooth user experience. I value clean UI, good UX, and writing code that’s easy to understand and maintain.",
        "Outside of dev, you’ll usually find me watching F1, overanalyzing race strategies, or running on coffee while polishing side projects ☕🏎️"
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };