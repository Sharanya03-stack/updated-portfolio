/**
 * Centralized Portfolio Data Object
 * Easily edit personal information, skills, and projects here without touching HTML.
 */
const portfolioData = {
    name: "Sharanya N",
    role: "Computer Science Engineer & UI/UX Designer",
    aboutShort: "Computer Science Engineering student specializing in IoT, Cybersecurity, and UI/UX design, building intelligent digital solutions.",
    aboutLong: "Passionate Computer Science professional driven by web development, UI/UX design, and cybersecurity fundamentals. Eager to leverage technical expertise in creating secure, high-performance, and user-centric applications.",
    profileImage: "assets/images/profile.jpg.jpeg",
    
    phone: "+91-6362813866",
    email: "sharureddy13@gmail.com",
    github: "https://github.com/Sharanya03-stack",
    linkedin: "https://www.linkedin.com/in/sharanya-n-203b7932a",
    location: "Bangalore, India",

    education: {
        institution: "Sri Sairam College of Engineering, Bangalore",
        degree: "Bachelor of Engineering (B.E.) in Computer Science Engineering",
        specialization: "Specialization: CSE (IoT, Cybersecurity including Blockchain)"
    },

    experience: [
        {
            role: "UI/UX Design Intern",
            company: "Edufyi Tech Solutions",
            period: "2024 - Present",
            description: [
                "Designed user-friendly interfaces for web and mobile applications.",
                "Created wireframes and interactive prototypes using Figma.",
                "Improved application usability through user-centered design principles."
            ]
        }
    ],

    skills: [
        {
            category: "Programming & Core",
            icon: "fa-solid fa-code",
            items: ["C", "Python", "C++", "Data Structures", "Cybersecurity Fundamentals"]
        },
        {
            category: "Web & Frameworks",
            icon: "fa-solid fa-laptop-code",
            items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Node.js", "Express.js", "FastAPI", "Tailwind CSS", "Android Studio"]
        },
        {
            category: "Database & Cloud",
            icon: "fa-solid fa-database",
            items: ["MongoDB", "PostgreSQL", "Supabase", "Cloudinary", "Firebase"]
        },
        {
            category: "Animation & Tools",
            icon: "fa-solid fa-palette",
            items: ["GSAP", "Chart.js", "AOS", "Figma", "UI/UX Design", "Git", "GitHub", "VS Code", "Orange"]
        }
    ],

    projects: [
        {
            title: "APEX University | Interactive Web Portal (Browser Battle Entry)",
            description: "Designed and engineered a multi-page responsive web application featuring a modern SaaS aesthetic and corporate-academic branding. Implemented complex JavaScript animations using GSAP, including ScrollTrigger clip-path reveals, smooth staggered load timelines, and an interactive custom cursor. Embedded dynamic data visualization components using Chart.js to display multi-year placement statistics and interactive recruitment tickers. Optimized UI performance and cross-browser responsiveness while integrating Google Translate API and dynamic interactive layouts.",
            technologies: ["JavaScript (ES6+)", "GSAP", "Tailwind CSS", "HTML5", "Chart.js", "AOS"],
            image: "assets/images/project1.jpg.jpeg",
            github: "https://github.com/Sharanya03-stack/browser-battle2.0",
            
        },
        {
            title: "CI/CD Triage Agent (Intelligent Pipeline Recovery Engine)",
            description: "Built an intelligent CI/CD pipeline failure diagnosis and recovery system designed to streamline DevOps workflows. Automatically executes comprehensive log analysis, pinpoints precise root causes, and categorizes system issues in real-time. Developed an intuitive interactive chatbot interface providing context-aware troubleshooting assistance for developers. Integrated dynamic Chart.js dashboards to visualize critical pipeline performance metrics, build stability trends, and historical failure recovery rates seamlessly across environments.",
            technologies: ["Python", "FastAPI", "JavaScript", "HTML", "CSS", "Chart.js"],
            image: "assets/images/project2.jpeg.jpeg",
            github: "https://github.com/Sharanya03-stack/AI-agent",
          
        },
        {
            title: "Zero Degree Cafe & Brewery",
            description: "Built a high-performance, mobile-responsive web UI using HTML5, Tailwind CSS, and JavaScript, featuring custom Google Fonts for a high-end luxury aesthetic. Integrated an ultra-dark hero layout with dynamic SVG accents, Ken Burns image-zoom CSS keyframe animations, and layered z-index hierarchy for depth. Engineered a real-time shopping bag slider, dynamic menu category filtering, telemetry metric widgets, and interactive table reservation modal forms.",
            technologies: ["HTML5", "Tailwind CSS", "JavaScript"],
            image: "assets/images/project3.jpeg.jpeg",
            github: "https://github.com/Sharanya03-stack/zero-degree",
            
        },
        {
            title: "House Hunt (StayFind Full-Stack Rental Platform)",
            description: "Developed a responsive MERN/Supabase web application featuring role-based authentication for property owners and house hunters. Built robust Express.js backend services with JWT authentication, custom middleware, and modular routing to handle user profiles and listings. Managed data persistence with Supabase/PostgreSQL and integrated Cloudinary for image asset uploads. Designed a high-performance React UI using Tailwind CSS, Axios interceptors, and custom React Context hooks for application state management.",
            technologies: ["React", "Node.js", "Express.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
            image: "assets/images/project4.jpeg.jpeg",
            github: "https://github.com/Sharanya03-stack/house-hunt1.0",
            
        },
        {
            title: "Skill Sync Student Industry Readiness Platform",
            description: "Developed a comprehensive platform engineered to help students align their technical skill sets directly with fast-evolving industry requirements. Implemented advanced skill-gap analysis algorithms that map current student proficiencies against emerging market tech stacks. Delivered customized technology learning recommendations and structured roadmaps for career development. Designed highly intuitive user interfaces with strong focus on accessibility, ease of navigation, and a fluid user experience.",
            technologies: ["Web Technologies", "UI/UX Design", "JavaScript", "CSS"],
            image: "assets/images/project5.jpeg.jpeg",
            github: "https://github.com/Sharanya03-stack",
            
        },
        
    ]
};