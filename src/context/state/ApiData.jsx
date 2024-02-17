import React, { useEffect, useState } from "react";
import { ApiContext } from "../CreateContext";
import { useLocation } from "react-router-dom";

const ApiState = ({ children }) => {
 

  const mainMenuItem = [
    {
      name: "About",
      to: "/",
      iconClass: "fa-light fa-address-card"
    },
    {
      name: "Resume",
      to: "/resume",
      iconClass: "fa-light fa-file-user"
    },
    {
      name: "Contact",
      to: "/contact",
      iconClass: "fa-light fa-address-book"
    },
  ];

  const DefaultData = {
    mainMenuItem,
  };
  return (
    <ApiContext.Provider value={DefaultData}>{children}</ApiContext.Provider>
  );
};

export default ApiState;
