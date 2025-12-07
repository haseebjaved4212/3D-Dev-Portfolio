import {
    Code,
    Layout,
    Smartphone,
    Database,
    Globe,
    Cpu,
    Palette,
    Server,
} from "lucide-react";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: Globe,
    },
    {
        title: "React Native Developer",
        icon: Smartphone,
    },
    {
        title: "Backend Developer",
        icon: Server,
    },
    {
        title: "Content Creator",
        icon: Palette,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: "html",
    },
    {
        name: "CSS 3",
        icon: "css",
    },
    {
        name: "JavaScript",
        icon: "javascript",
    },
    {
        name: "TypeScript",
        icon: "typescript",
    },
    {
        name: "React JS",
        icon: "reactjs",
    },
    {
        name: "Next JS",
        icon: "nextjs",
    },
    {
        name: "Tailwind CSS",
        icon: "tailwind",
    },
    {
        name: "Three JS",
        icon: "threejs",
    },
    {
        name: "GSAP",
        icon: "gsap",
    },
    {
        name: "Spline",
        icon: "spline",
    },
    {
        name: "Python",
        icon: "python",
    },
];

const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Freelance",
        icon: Code,
        iconBg: "#383E56",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const projects = [
    {
        name: "CodeFlow AI",
        description:
            "A platform for code generation and assistance using AI.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "ai",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: "/project1.png", // Placeholder, will need to handle images
        source_code_link: "https://github.com/haseebjaved4212/CodeFlow.git",
        live_link: "https://code-flow-five.vercel.app",
    },
    {
        name: "Prayer Times App",
        description:
            "Web application that enables users to view daily prayer times for their location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "api",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: "/project2.png",
        source_code_link: "https://github.com/haseebjaved4212/Ramadan-Special-Website.git",
        live_link: "https://haseebjaved4212.github.io/Ramadan-Special-Website/",
    },
    {
        name: "AI Image Enhancer",
        description:
            "An AI-powered tool to enhance image quality and resolution.",
        tags: [
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "ai",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: "/project3.png",
        source_code_link: "https://github.com/haseebjaved4212/AI-Powered-Image-Enhancer.git",
        live_link: "https://haseebjaved4212.github.io/AI-Powered-Image-Enhancer/",
    },
    {
        name: "Real Estate Agency",
        description:
            "A comprehensive platform for a real estate agency to showcase properties.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "js",
                color: "pink-text-gradient",
            },
        ],
        image: "/project4.png",
        source_code_link: "https://github.com/haseebjaved4212/Real-Estate-Agency-Website.git",
        live_link: "https://haseebjaved4212.github.io/Real-Estate-Agency-Website/",
    },
];

export const socialLinks = {
    reddit: "https://www.reddit.com/u/Haseeb4212/s/DqFxYkvD1V",
    linkedin: "https://www.linkedin.com/in/haseeb-javed-0332b3341",
    instagram: "https://www.instagram.com/haseeb_javed4212?igsh=MTV0cWI2aHh2dDRmbw==",
    twitter: "https://x.com/Haseebjaved4212?t=Be1nJmdR3ipCsHK3dylBTA&s=09",
    github: "https://github.com/haseebjaved4212",
    email: "contactimhaseeb@gmail.com"
}

export { services, technologies, experiences, projects };
