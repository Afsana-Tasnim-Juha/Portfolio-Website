import food from "../assets/food.jpg";
import profile from "../assets/profile.jpg";
import logo1 from "../assets/logo1.png";

export const HERO_CONTENT = `I am a passionate web developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
    {
        year: "2023 - Present",
        role: "Senior Full Stack Developer",
        company: "Google Inc.",
        description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
        technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    },
    {
        year: "2022 - 2023",
        role: "Frontend Developer",
        company: "Adobe",
        description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
        technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
    },
    {
        year: "2021 - 2022",
        role: "Full Stack Developer",
        company: "Facebook",
        description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
        technologies: ["Python", "Svelte", "Three.js", "Postgres"],
    },
    {
        year: "2020 - 2021",
        role: "Software Engineer",
        company: "Paypal",
        description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
        technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
    },
];

export const PROJECTS = [
    {
        title: "Community Food Redistribution Platform",
        image: food,
        description:
            "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
        technologies: ["React.js", "MongoDB", "React Router", "Express.js", "API", "Firebase authentication", "Tailwind CSS", "HTML5"],
    },
    {
        title: "Espresso-Bliss-Bakery",
        image: logo1,
        description:
            "Espresso-Bliss-Bakery, a dynamic coffee and pastry web app, seamlessly integrates my MongoDB and Express.js expertise with Firebase authentication and React Router for a smooth front-end experience. The user's coffee and pastry selections are easy to add and change.",
        technologies: ["React.js", "MongoDB", "React Router", "Express.js", "API", "Firebase authentication", "Tailwind CSS", "HTML5"],
    },
    {
        title: "ProfessionalLink Hub",
        image: profile,
        description:
            "Join the exciting portal to career success—ProfessionalLink Hub. Find jobs and company information,and apply easily in one spot. Application trackers and industry blogs help you arrange your job search.",
        technologies: ["HTML5", "Tailwind CSS", "React Router", "JavaScript"],
    },

];

export const CONTACT = {
    address: "767 Fifth Avenue, New York, NY 10153 ",
    phoneNo: "+12 4555 666 00 ",
    email: "me@example.com",
};