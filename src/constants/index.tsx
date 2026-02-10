export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/#about",
  },
  {
    id: 3,
    name: "Work",
    href: "/#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "/#contact",
  },
];

export const workBenefits = [
  {
    id: 1,
    title: "More than a website",
    desc: "You get a business tool designed to generate opportunities.",
  },
  {
    id: 2,
    title: "Design that sells",
    desc: "Attractive, brand-consistent interfaces that build trust and professionalism.",
  },
  {
    id: 3,
    title: "Performance optimization",
    desc: "Fast loading, smooth navigation, and full device compatibility.",
  },
  {
    id: 4,
    title: "Improve visibility",
    desc: "SEO implemented from the ground up so Google finds you before the competition.",
  },
  {
    id: 5,
    title: "Combined expertise",
    desc: "High-level web development backed by advertising knowledge ensures your message and visuals work together toward your goals.",
  },
  {
    id: 6,
    title: "Ongoing support",
    desc: "I don’t just deliver projects—I help them grow.",
  },
];

export const myProjects = [
  {
    title: "IFCI - Orchestras web platform",
    desc: "A web platform designed to centralize key information about children and youth orchestras across Ecuador. Developed for the Institute for the Promotion of Creativity and Innovation (IFCI) with the support of OEI, the project strengthens cultural networks and improves access to reliable data.",
    projectDesc: [
      {
        id: 1,
        subtitle: "Overview & Purpose",
        desc: "The IFCI platform was developed as a strategic digital tool for the Institute for the Promotion of Creativity and Innovation (IFCI), with the support of OEI. Its main purpose is to consolidate essential information about music groups and children’s and youth orchestras across several provinces in Ecuador, making this knowledge accessible to institutions, educators, and the wider public.",
      },
      {
        id: 2,
        subtitle: "Collaboration & Sector Impact",
        desc: "Beyond serving as an information repository, the platform promotes collaboration, strengthens cultural networks, and supports the visibility of formative and artistic work at a national scale. By centralizing data on orchestras, bands, teachers, and infrastructure, it becomes a valuable reference point for monitoring and decision-making in the cultural sector.",
      },
      {
        id: 3,
        subtitle: "Technical Implementation",
        desc: "Technically, the site was built with WordPress as the CMS and a fully custom-designed template. The implementation of Custom Post Types allows for a clear organization of content, enabling structured and dynamic data presentation. Users can perform detailed searches by province, making navigation intuitive and informative.",
      },
      {
        id: 4,
        subtitle: "Data Visualization & SEO",
        desc: "To further enrich the user experience, the platform integrates demographic statistical tools with Chart.js and GSAP-powered animations, delivering interactive and visually engaging navigation. Image optimization and SEO strategies were also applied, ensuring the website is both fast and highly discoverable in search engines.",
      },
    ],
    href: "https://creatividad.gob.ec/orquestas",
    slug: "ifci-orchestras-web-platform",
    mockup: "/assets/work/mockups/11-mockups-ifci.webp",
    mockup2: "/assets/work/mockups/12-mockups-ifci.webp",
    logo: "/assets/work/logos/ifci.svg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "wordpress",
        path: "/assets/work/tech/wp.png",
      },
      {
        id: 2,
        name: "Gsap",
        path: "/assets/work/tech/gsap.png",
      },
      {
        id: 3,
        name: "Chart.js",
        path: "/assets/work/tech/chartjs.png",
      },
      {
        id: 4,
        name: "Javascript",
        path: "/assets/work/tech/js.png",
      },
      {
        id: 5,
        name: "PHP",
        path: "/assets/work/tech/php.png",
      },
      {
        id: 6,
        name: "Adobe illustrator",
        path: "/assets/work/tech/ai.png",
      },
    ],
  },
  {
    title: "Pto99 - Agency web portfolio",
    desc: "A modern and responsive portfolio website developed for the advertising agency Pto99, created to showcase its projects with a fresh design aligned to its target audience. The interface highlights creativity while keeping navigation simple and engaging.",
    projectDesc: [
      {
        id: 1,
        subtitle: "Project Overview",
        desc: "The Pto99 portfolio website was created for the advertising agency as a dynamic showcase of its creative work. Designed with a fresh, modern, and responsive interface, the site aligns with the agency’s youthful and innovative spirit for a professional yet engaging online presence.",
      },
      {
        id: 2,
        subtitle: "Audience Value & Positioning",
        desc: "The platform allows potential clients and partners to explore Pto99’s portfolio in a visually appealing way. Its structure balances aesthetics and usability, reinforcing the agency’s positioning in the competitive field of advertising and creative services.",
      },
      {
        id: 3,
        subtitle: "Architecture & Content Model",
        desc: "Built on WordPress, the site includes a fully custom template and leverages Custom Post Types to manage and structure projects effectively on the frontend. This ensures scalability for future updates while maintaining consistent design and performance.",
      },
      {
        id: 4,
        subtitle: "Performance & Interactivity",
        desc: "JavaScript-driven on-demand video loading improves performance and SEO by optimizing resource usage. Additional GSAP animations create a dynamic browsing experience that reflects the agency’s creativity and energy.",
      },
    ],
    href: "https://pto99.com",
    slug: "pto99-agency-portfolio",
    mockup: "/assets/work/mockups/11-mockups-pto.webp",
    mockup2: "/assets/work/mockups/12-mockups-pto.webp",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/work/logos/pto.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "wordpress",
        path: "/assets/work/tech/wp.png",
      },
      {
        id: 2,
        name: "Gsap",
        path: "/assets/work/tech/gsap.png",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/work/tech/js.png",
      },
      {
        id: 4,
        name: "PHP",
        path: "/assets/work/tech/php.png",
      },
      {
        id: 5,
        name: "Adobe illustrator",
        path: "/assets/work/tech/ai.png",
      },
    ],
  },
  {
    title: "Score bebé - Neonatal Health web app",
    desc: "A specialized application designed for healthcare professionals in Ecuador, Score Bebé estimates neonatal health risks to support timely interventions. Built for PUCE with the participation of child health specialists, it provides doctors with a practical tool in settings without neonatal ICUs.",
    projectDesc: [
      {
        id: 1,
        subtitle: "Clinical Context & Purpose",
        desc: "Score Bebé is a web application designed for the Pontifical Catholic University of Ecuador (PUCE) to support healthcare professionals in assessing neonatal health risks. It provides an evidence-based tool for doctors in facilities without neonatal ICUs or specialized neonatologists.",
      },
      {
        id: 2,
        subtitle: "Risk Stratification Workflow",
        desc: "Through its questionnaire, the application categorizes risk levels—high, moderate, or low—making it easier for medical staff to implement timely interventions. The solution was developed in collaboration with pediatric and neonatal health specialists.",
      },
      {
        id: 3,
        subtitle: "Frontend Architecture & State Management",
        desc: "The app was built using React, with forms managed through React Hook Form for streamlined handling. State management uses Context and Reducers, while data is stored in the browser’s local storage for quick and reliable access.",
      },
      {
        id: 4,
        subtitle: "Reporting & Clinical Output",
        desc: "Results can be exported as PDF reports with recommendations for the attending physician, turning Score Bebé into a comprehensive, portable, and impactful tool for healthcare delivery.",
      },
    ],
    href: "https://scorebebe.com",
    slug: "score-bb-neonatal-health-web-app",
    mockup: "/assets/work/mockups/11-mockups-scorebb.webp",
    mockup2: "/assets/work/mockups/12-mockups-score.webp",
    logo: "/assets/work/logos/score.png",
    logoStyle: {
      backgroundColor: "#2D73C3",
      background:
        "linear-gradient(0deg, #2D73C3, #2D73C3), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/work/tech/react.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/work/tech/tailwindcss.png",
      },
      {
        id: 3,
        name: "Reakt hook form",
        path: "/assets/work/tech/rhf.png",
      },
      {
        id: 4,
        name: "React pdf",
        path: "/assets/work/tech/rpdf.png",
      },
      {
        id: 5,
        name: "Adobe illustrator",
        path: "/assets/work/tech/ai.png",
      },
    ],
  },
  {
    title: "Bridgeway Legacy Partners - Corporate Website",
    desc: "A professional and responsive corporate website developed for Bridgeway Legacy Partners, designed to communicate its long-term investment philosophy and people-first approach. The interface delivers clarity, trust, and strategic positioning for potential partners and business owners.",
    projectDesc: [
      {
        id: 1,
        subtitle: "Project Overview",
        desc: "The Bridgeway Legacy Partners website was created to present the firm’s mission of building and growing exceptional businesses while preserving founders’ legacy. With a clean and corporate design, the platform emphasizes credibility and long-term vision, aligning with the expectations of entrepreneurs and investors.",
      },
      {
        id: 2,
        subtitle: "Audience Value & Positioning",
        desc: "The site speaks directly to founders, business owners, and partners seeking sustainable growth and strategic support. By highlighting a differentiated strategy centered on long-term value, operational excellence, and a people-first culture, the platform reinforces Bridgeway’s positioning as a committed and trustworthy investment partner.",
      },
      {
        id: 3,
        subtitle: "Architecture & Content Model",
        desc: "Structured around key sections such as Strategy, Industries, About, and Contact, the website delivers information in a concise and highly scannable format. The content model prioritizes clarity, allowing visitors to quickly understand the firm’s approach, targeted sectors—including Business Services, Healthcare, Manufacturing, and IT—and leadership background.",
      },
      {
        id: 4,
        subtitle: "Brand Messaging & Strategic Narrative",
        desc: "Strong, value-driven messaging communicates Bridgeway’s focus on organic growth, strategic acquisitions, operational improvements, and talent development. The founder’s profile adds authenticity and leadership credibility, strengthening the brand narrative and fostering confidence among prospective partners.",
      },
    ],
    href: "https://bridgewaylegacy.com/",
    slug: "bridgeway-legacy",
    mockup: "/assets/work/mockups/11-mockups-brid.webp",
    mockup2: "/assets/work/mockups/12-mockups-brid.webp",
    logo: "/assets/work/logos/pto.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "wordpress",
        path: "/assets/work/tech/wp.png",
      },
      {
        id: 2,
        name: "Gsap",
        path: "/assets/work/tech/gsap.png",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/work/tech/js.png",
      },
      {
        id: 4,
        name: "PHP",
        path: "/assets/work/tech/php.png",
      },
      {
        id: 5,
        name: "Adobe illustrator",
        path: "/assets/work/tech/ai.png",
      },
    ],
  },
  {
    title: "Paso a paso - Baby healthcare documentary site",
    desc: "A documentary-style website aimed at guiding families in the care and upbringing of their children from birth through the first five years of life. It offers accessible resources and information, combining educational value with a friendly user experience.",
    projectDesc: [
      {
        id: 1,
        subtitle: "Mission & Audience",
        desc: "Paso a Paso is a documentary-style website created to guide families through the first years of their child’s life, providing accessible information on parenting, health, and early childhood development from birth to age five.",
      },
      {
        id: 2,
        subtitle: "Content Approach & Community Value",
        desc: "Combining a narrative approach with practical resources, the platform empowers families with tools and knowledge to support healthy growth and well-being. Content is educational, approachable, and community-oriented.",
      },
      {
        id: 3,
        subtitle: "Technology & Editing Workflow",
        desc: "Developed with Next.js and Nextra as the static site generator, the platform leverages MDX to enable easy content creation and updates, giving editors flexibility and a smooth publishing workflow.",
      },
      {
        id: 4,
        subtitle: "Performance & Media Optimization",
        desc: "Due to extensive use of visuals, all multimedia was optimized to WebP format, improving load times and reducing server strain for a smooth, efficient browsing experience.",
      },
    ],
    href: "https://paso-a-paso-2024.vercel.app",
    slug: "paso-a-paso-baby-healthcare-documentary-site",
    mockup: "/assets/work/mockups/11-mockups-paso.webp",
    mockup2: "/assets/work/mockups/12-mockups-paso.webp",
    logo: "/assets/work/logos/paso.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/work/tech/nextjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/work/tech/tailwindcss.png",
      },
      {
        id: 3,
        name: "Nextra",
        path: "/assets/work/tech/nextra.png",
      },
      {
        id: 4,
        name: "Adobe illustrator",
        path: "/assets/work/tech/ai.png",
      },
    ],
  },
  {
    title: "Galapagos Life Fund - Multilingual website",
    desc: "A multilingual website developed for the Galapagos Life Foundation, designed to raise awareness and facilitate participation in conservation and preservation initiatives in the Galápagos Islands. The platform serves both as an institutional showcase and as a tool for project applications.",
    projectDesc: [
      {
        id: 1,
        subtitle: "Mission & Scope",
        desc: "The Galapagos Life Fund website was developed for the Galapagos Life Foundation as a multilingual platform supporting conservation, preservation, and sustainability efforts in the Galápagos Islands.",
      },
      {
        id: 2,
        subtitle: "Engagement & Communication",
        desc: "By combining institutional communication with interactive tools, the site connects local and international audiences to opportunities for involvement—through project applications, educational resources, and multimedia galleries.",
      },
      {
        id: 3,
        subtitle: "Multisite Architecture & Structure",
        desc: "Implemented as a WordPress multisite with a custom-designed template and Custom Post Types, the architecture ensures flexible content management and scalability for diverse sections and future growth.",
      },
      {
        id: 4,
        subtitle: "Media & Performance Enhancements",
        desc: "JavaScript optimizations for video playback improve loading times and deliver a more seamless experience. Photo and video galleries highlight the foundation’s work and the islands’ natural beauty.",
      },
    ],
    href: "https://galapagoslifefund.org.ec/",
    slug: "galapagos-life-fund-multilingual-website",
    mockup: "/assets/work/mockups/11-mockups-gal.webp",
    mockup2: "/assets/work/mockups/12-mockups-gal.webp",
    logo: "/assets/work/logos/gal.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "Wordpress",
        path: "/assets/work/tech/wp.png",
      },
      {
        id: 2,
        name: "PHP",
        path: "/assets/work/tech/php.png",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/work/tech/js.png",
      },
      {
        id: 4,
        name: "Adobe illustrator",
        path: "/assets/work/tech/ai.png",
      },
    ],
  },
  {
    title: "Score CIMS - Healthcare web app",
    desc: "A research-driven web application developed to predict mortality risk in hospitalized COVID-19 patients in Ecuador. Created in collaboration with two major hospitals, it analyzed more than 5,000 cases to identify clinical and demographic risk factors.",
    projectDesc: [
      {
        id: 1,
        subtitle: "Research Context & Goal",
        desc: "Score CIMS is a research-based web application developed to predict mortality risk among hospitalized COVID-19 patients. The study analyzed data from more than 5,000 patients across two major hospitals in Ecuador.",
      },
      {
        id: 2,
        subtitle: "Methodology & Clinical Translation",
        desc: "The retrospective analysis informed a scoring system that helps healthcare professionals assess patient outcomes. The platform translates this evidence into a practical tool usable in clinical environments.",
      },
      {
        id: 3,
        subtitle: "Frontend & Algorithmic Processing",
        desc: "Built with React and React Hook Form, the application captures inputs that are processed by an algorithm to generate a mortality probability score, providing immediate insights into patient risk.",
      },
      {
        id: 4,
        subtitle: "Impact on Decision-Making",
        desc: "By combining rigorous research with modern technology, Score CIMS supports timely, informed clinical decisions in the treatment of COVID-19 patients.",
      },
    ],
    href: "https://cims-2024.vercel.app/",
    slug: "score-cims-healthcare-web-app",
    mockup: "/assets/work/mockups/11-mockups-cims.webp",
    mockup2: "/assets/work/mockups/12-mockups-cim.webp",
    logo: "/assets/work/logos/cims.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/work/tech/react.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/work/tech/tailwindcss.png",
      },
      {
        id: 3,
        name: "Reakt hook form",
        path: "/assets/work/tech/rhf.png",
      },
      {
        id: 4,
        name: "Adobe illustrator",
        path: "/assets/work/tech/ai.png",
      },
    ],
  },
  {
    title: "Urban Threads - E-commerce web app",
    desc: "An e-commerce platform built with Next.js as a hands-on project to strengthen expertise in advanced web development. The store covers the complete purchasing flow, from product browsing and cart management to checkout, with a dedicated admin panel for product management.",
    projectDesc: [
      {
        id: 1,
        subtitle: "Scope & Commerce Flow",
        desc: "Urban Threads is a full e-commerce platform developed to strengthen expertise in Next.js and advanced web technologies. It covers the end-to-end purchasing flow—from product display and cart to checkout—with an admin panel for product management.",
      },
      {
        id: 2,
        subtitle: "Architecture & Back-End Stack",
        desc: "The platform integrates Server-Side Rendering (SSR), Client-Side Rendering (CSR), dynamic routes, and server actions for scalability and robust performance, along with Docker and PostgreSQL for deployment and data management.",
      },
      {
        id: 3,
        subtitle: "UI, DX & SEO",
        desc: "Styling uses Tailwind CSS and TypeScript to enhance maintainability and developer productivity. Static and dynamic metadata improve SEO, making the store more visible and competitive.",
      },
      {
        id: 4,
        subtitle: "Media Delivery & Performance",
        desc: "Cloudinary handles image storage and delivery, ensuring efficient resource use and fast loading times for a modern, high-performing shopping experience.",
      },
    ],
    href: "https://urban-threads-shop.vercel.app/",
    slug: "urban-threads-ecommerce-web-app",
    mockup: "/assets/work/mockups/11-mockups-urban.webp",
    mockup2: "/assets/work/mockups/12-mockups-urban.webp",
    logo: "/assets/work/logos/urban.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/work/tech/nextjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/work/tech/tailwindcss.png",
      },
      {
        id: 3,
        name: "Postgre SQL",
        path: "/assets/work/tech/psql.png",
      },
      {
        id: 4,
        name: "Cloudinary",
        path: "/assets/work/tech/cloudinary.png",
      },
      {
        id: 5,
        name: "Docker",
        path: "/assets/work/tech/docker.png",
      },
    ],
  },
  {
    title: "Music Lab - Music school website",
    desc: "A professional website designed for Music Lab Ecuador, a music academy connected to Berklee City Music. The platform serves as the main communication channel for students and families, showcasing course schedules, program benefits, and application details, while reflecting the academy’s modern and creative identity.",
    projectDesc: [
      {
        id: 1,
        subtitle: "Institutional Context & Purpose",
        desc: "The Music Lab website was developed for Music Lab Ecuador, a music academy affiliated with Berklee City Music. It connects the academy with its community by providing accessible information about programs, schedules, benefits, and applications.",
      },
      {
        id: 2,
        subtitle: "Branding & Positioning",
        desc: "The design reflects Music Lab’s mission to inspire and nurture Ecuadorian talent while positioning the academy as a trusted educational reference aligned with Berklee’s global reputation.",
      },
      {
        id: 3,
        subtitle: "Technical Implementation",
        desc: "Built on WordPress, the project grants full autonomy over content management. A custom template with tailored CSS enables flexible creation, editing, and updating of site content without technical complexity.",
      },
      {
        id: 4,
        subtitle: "Outcome & User Experience",
        desc: "The result is a dynamic, user-friendly platform that highlights the academy’s strengths and offers prospective students and families a clear, engaging entry point to Music Lab’s programs.",
      },
    ],
    href: "https://musiclab.com.ec",
    slug: "music-lab-music-school-website",
    mockup: "/assets/work/mockups/11-mockups-music.webp",
    mockup2: "/assets/work/mockups/12-mockups-music.webp",
    logo: "/assets/work/logos/music.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "Wordpress",
        path: "/assets/work/tech/wp.png",
      },
      {
        id: 2,
        name: "PHP",
        path: "/assets/work/tech/php.png",
      },
      {
        id: 3,
        name: "HTML",
        path: "/assets/work/tech/html.png",
      },
      {
        id: 4,
        name: "CSS",
        path: "/assets/work/tech/css.png",
      },
    ],
  },
];

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean,
) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Freelance web developer",
    pos: "Lead Web Developer",
    duration: "2020 - Present",
    title:
      "Development of websites,web applications, custom WordPress plugins/themes, SEO, performance optimization, and maintenance.",
    icon: "/assets/work/logos/cm.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Optimuso Social",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Interactive applications for educational institutions and NGOs, with a focus on usability and accessibility.",
    icon: "/assets/work/logos/optimus.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Pto99",
    pos: "Web Developer",
    duration: "2015 - 2020",
    title:
      "Frontend development, digital campaigns, and corporate website maintenance.",
    icon: "/assets/work/logos/pto.png",
    animation: "salute",
  },
];
