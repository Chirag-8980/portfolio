import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ApiContext } from "../../context/CreateContext";

const MenuBar = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const { mainMenuItem } = useContext(ApiContext);

  return (
    <>
      {/* <div className="col-xxl-1 d-xxl-block d-none"/> */}
      <div className="bostami-main-menu-wrap">
        <nav
          className="bastami-main-menu main_menu"
          style={{ display: "block" }}
        >
          <ul>
            {mainMenuItem.map((menuItem, i) => {
              return (
                <li
                  className={` cursor-pointer text-light ${location.pathname == menuItem.to ? "active text-dark" : "text-black"}`}
                  key={i}
                  onClick={()=>{
                    navigate(menuItem.to)
                  }}
                >
                <a className="">
                    <span>
                      <i className={`${menuItem.iconClass}`} />
                      {/* {menuItem.iconClass} */}
                    </span>
                    {menuItem.name}
                  </a>
                </li>
              );
            })}
            {/* <li className="active">
                <Link to="/">
                  <span>
                    <i className="fa-light fa-address-card" />
                  </span>
                  about
                </Link>
              </li> */}
            {/* <li>
              <Link to="/resume">
                <span>
                  <i className="fa-light fa-file-user" />
                </span>
                Resume
              </Link>
            </li> */}
            {/* <li>
              <a href="portfolio.html">
                <span>
                  <i className="fa-light fa-briefcase" />
                </span>
                Works
              </a>
            </li> */}
            {/* <li>
              <a href="blog.html">
                <span>
                  <i className="fa-light fa-newspaper" />
                </span>
                Blogs
              </a>
            </li> */}
            {/* <li>
              <a href="contact.html">
                <span>
                  <i className="fa-light fa-address-book" />
                </span>
                contact
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
      {/* </div> */}
    </>
  );
};

export default MenuBar;
