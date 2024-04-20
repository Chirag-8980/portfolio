import React, { useEffect, useState } from "react";
import { ApiContext } from "../CreateContext";

const ApiState = ({ children }) => {
  const mainMenuItem = [
    {
      name: "About",
      to: "/",
      iconClass: "fa-light fa-address-card",
    },
    {
      name: "Resume",
      to: "/resume",
      iconClass: "fa-light fa-file-user",
    },
    {
      name: "Contact",
      to: "/contact",
      iconClass: "fa-light fa-address-book",
    },
  ];


  const profileData ={
    name : "Chirag Kachhadiya",
    profession : "Web Devloper",
    phone : "+91 8980750691",
    email : "chiragkachhadiya000@gmail.com",
    location : "India",
    dob : "Dec 31, 2002",
    social_media : [
      {
        platform : "facebook",
        link : "",
        icon : "fa-brands fa-facebook-f"
      },
      {
        platform : "instagram",
        link : "",
        icon : "fa-brands fa-instagram"
      },
      {
        platform : "linkedin",
        link : "www.linkedin.com/in/chirag-kachhadiya-4a2b0b229",
        icon : "fa-brands fa-linkedin-in"
      },
    ]
  }

  

  const DefaultData = {
    mainMenuItem,profileData
  };
  return (
    <ApiContext.Provider value={DefaultData}>{children}</ApiContext.Provider>
  );
};

export default ApiState;
