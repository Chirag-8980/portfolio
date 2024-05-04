import React, { useEffect, useState } from "react";
import { ApiContext } from "../CreateContext";
import {
  IconApi,
  IconBrandGithubFilled,
  IconCode,
  IconDatabaseCog,
  IconServerCog,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";

const ApiState = ({ children }) => {
  const mainMenuItem = [
    {
      name: "About",
      to: "/",
      iconClass: "fa-light fa-address-card",
      // iconClass: <IconUser/>,
    },
    {
      name: "Resume",
      to: "/resume",
      iconClass: "fa-light fa-file-user",
      // iconClass: <IconUser/>,
    },
    {
      name: "Contact",
      to: "/contact",
      iconClass: "fa-light fa-address-book",
      // iconClass: <IconUser/>,
    },
  ];

  const profileData = {
    name: "Chirag Kachhadiya",
    profession: "MERN Stack Devloper",
    phone: "+91 8980750691",
    email: "chiragkachhadiya000@gmail.com",
    location: "India",
    dob: "Dec 31, 2002",
    social_media: [
      // {
      //   platform: "facebook",
      //   link: "",
      //   icon: <i className="fa-brands fa-facebook-f"></i>,
      // },
      {
        platform: "instagram",
        link: "https://www.instagram.com/chirag_kachhadiya_?igsh=MW13dmE1d2xsaGdqZw==",
        icon: <i className="fa-brands fa-instagram"></i>,
      },
      {
        platform: "linkedin",
        link: "https://linkedin.com/in/chirag-kachhadiya-4a2b0b229",
        icon: <i className="fa-brands fa-linkedin-in"></i>,
      },
      {
        platform: "Github",
        link: "https://github.com/Chirag-8980",
        icon: <IconBrandGithubFilled />,
      },
    ],
  };

  const aboutData = {
    summary: [
      "I am MERN stack developer with a focus on building dynamic and scalable web applications. Proficient in leveraging MongoDB, Express.js, React.js, and Node.js to develop full-stack solutions that meet client needs and exceed expectations. Experienced in designing and implementing RESTful APIs, integrating third-party services, and optimizing application performance.",
      "Skilled in collaborating with cross-functional teams to deliver robust and user-friendly products. Passionate about continuous learning and staying abreast of emerging technologies in the MERN stack ecosystem.",
    ],
    whatDo: [
      {
        title: "Web Devlopment",
        icon: <i className="fa-regular fa-code"></i>,
        // icon: <IconCode width={150} height={150} />,
        description:
          "As a MERN stack developer, I specialize in creating dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js. I excel in crafting user-friendly interfaces and robust back-end systems to bring your ideas to life",
      },
      {
        title: "Backend Development",
        icon: <i className="fa-regular fa-server"></i>,
        description:
          "With a strong command of Node.js and Express.js, I develop scalable and efficient server-side architectures. From API integration to database management, I ensure smooth communication between the front and back ends of your application",
      },
      {
        title: "Database Management",
        icon: <i className="fa-regular fa-database"></i>,
        description:
          "I specialize in MongoDB and MySql, leveraging its flexibility and scalability to design optimized database schemas. Whether it's structuring data for performance or implementing complex queries, I ensure your application's data layer is robust and reliable",
      },
      {
        title: "API Development",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d566ff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline  icon-tabler-api"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 13h5" />
            <path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" />
            <path d="M20 8v8" />
            <path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" />
          </svg>
        ),
        description:
          "I have experience in building RESTful APIs using Node.js and Express.js, enabling seamless communication between different components of your application. I focus on creating well-documented and efficient endpoints to support your application's functionality",
      },
    ],
  };

  const resumeData = {
    Education: [
      {
        degree: "Bachelor Of Computer Application (B.C.A)",
        university: "Sutex Bank College Of Computer Application",
        duration: {
          start: "2020",
          end: "2023",
        },
      },
      {
        degree: "Master Of Computer Application (M.C.A)",
        university: "Jain University (Banglore)",
        duration: {
          start: "2023",
          end: "Present",
        },
      },
    ],
    Experience: [
      {
        company_name: "Codeash Infotech",
        designation: "JR. ReactJs Devloper",
        duration: {
          start: "2023",
          end: "Present",
        },
      },
    ],
    Knowledge_tag: [
      "HTML",
      "CSS",
      "JavaScript",
      "React Js",
      "Node JS",
      "Express JS",
      "MongoDB",
      "MYSQL",
      "jquary",
      "Tailwind",
      "Bootstrap"
    ],
  };

  const DefaultData = {
    mainMenuItem,
    profileData,
    aboutData,
    resumeData,
  };
  return (
    <ApiContext.Provider value={DefaultData}>{children}</ApiContext.Provider>
  );
};

export default ApiState;
