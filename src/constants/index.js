import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Java developer trainee",
        company_name: "Intrainz",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "01/04/2023 - 01/06/2024",
        points: [
            "Developed and maintained the web application using Java and related technologies.",
            "Ensured the application was scalable, secure, and efficient in handling banking operations.",
            "Worked closely with cross-functional teams including designers, product managers, and other developers to ensure the application met all requirements and standards.",
            "Implemented responsive design techniques to ensure the application was accessible and functional across various devices and screen sizes.",
            "Utilized MySQL to manage the backend database, ensuring data integrity and security.",
        ],
    },
    {
        title: "Web developer",
        company_name: "Codsoft",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "10/06/2024 - 10/07/2024",
        points: [
            "Developed and maintained web applications using HTML, CSS, JavaScript, React.js, and other related technologies.",
            "Enhanced website performance and user experience by implementing best practices for front-end development.",
            "Collaborated with cross-functional teams, including designers, product managers, and other developers, to deliver high-quality web solutions.",
            "Implemented responsive design and ensured cross-browser compatibility.",
        ],
    },
    {
        title: "Machine Learning Trainee",
        company_name: "Bharat Intern",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "10/06/2024 - 10/06/2024",
        points: [
            "Gained hands-on experience in machine learning, focusing on building and deploying models.",
            "Developed and deployed projects including House Price Prediction and Iris Classification models.",
            "Enhanced skills in data preprocessing, model training, and evaluation.",
            "Built practical work experience in machine learning techniques and tools.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/vyshu111',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vaishnaviboddula/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: ' 3D Portfolio Project',
        description: ' An interactive 3D portfolio to showcase projects, skills, and experience. Technologies Used: Blender, Three.js, React.js, Node.js. Key Features: Interactive 3D models, user-friendly interface, responsive design. Outcome: Provided an engaging and visually appealing way to present work and attract potential employers.',
        link: 'https://github.com/vyshu111/Myportfolio',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Secure Bank Management System',
        description: ' A web-based system to manage bank accounts and transactions. Technologies Used: Java, MySQL. Key Features: User authentication, transaction processing,and account management. Outcome: Enabled efficient and secure banking operations.',
        link: 'https://vyshu111.github.io/QR_for_Simon_Game_/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: ' Full Stack Decentralized File Sharing DApp',
        description: ' A Decentralized application (DApp) for secure and efficient file sharing. Technologies Used: Ethereum, Solidity, IPFS, React.js, Node.js, MetaMask. Key Features: Decentralized storage, smart contracts for file integrity, user authentication, and secure file transfer. Outcome: Enabled a peer-to-peer file sharing system with enhanced security and privacy.',
        link: 'https://github.com/vyshu111/BharatInternTasks',
    },
    {
        iconUrl: './src/assets/icons/zomato.jpeg', // Replace with the actual icon URL for the project
        theme: 'btn-back-purple', // Choose a theme class that fits your design
        name: 'Zomato Backend',
        description: 'A robust backend service for a food delivery application. Technologies Used: Node.js, Express, MySQL, and REST APIs. Key Features: User authentication, restaurant data management, and order processing. Outcome: Provides a scalable and secure backend to support frontend functionality.',
        link: 'https://github.com/vyshu111/zomato_backend',
    },

];