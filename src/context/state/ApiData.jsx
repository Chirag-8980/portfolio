import React, { useEffect, useState } from "react";
import { ApiContext } from "../CreateContext";
import { IconUser, IconUsers } from "@tabler/icons-react";

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
    profession: "Web Devloper",
    phone: "+91 8980750691",
    email: "chiragkachhadiya000@gmail.com",
    location: "India",
    dob: "Dec 31, 2002",
    social_media: [
      {
        platform: "facebook",
        link: "",
        icon: "fa-brands fa-facebook-f",
      },
      {
        platform: "instagram",
        link: "",
        icon: "fa-brands fa-instagram",
      },
      {
        platform: "linkedin",
        link: "www.linkedin.com/in/chirag-kachhadiya-4a2b0b229",
        icon: "fa-brands fa-linkedin-in",
      },
    ],
  };

  const aboutData = {
    summary: [
      "I am MERN stack developer with a focus on building dynamic and scalable web applications. Proficient in leveraging MongoDB, Express.js, React.js, and Node.js to develop full-stack solutions that meet client needs and exceed expectations. Experienced in designing and implementing RESTful APIs, integrating third-party services, and optimizing application performance.",
      "Skilled in collaborating with cross-functional teams to deliver robust and user-friendly products. Passionate about continuous learning and staying abreast of emerging technologies in the MERN stack ecosystem.",
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
        company_name : "Codeash Infotech",
        designation : "JR. ReactJs Devloper",
        duration : {
          start : "2023",
          end : "Present"
        }
      }
    ],
    Knowledge_tag : [
      "HTML", "CSS", "JavaScript" , "ReactJs" , "Node JS" ,"Express JS" , "MongoDB" ,"MYSQL"
    ]
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
