import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ApiContext } from "../../context/CreateContext";

const MenuBar = () => {
  const location = useLocation();
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
                  className={location.pathname == menuItem.to && "active"}
                  key={i}
                >
                  <Link to={menuItem.to}>
                    <span>
                      <i className={`${menuItem.iconClass}`} />
                    </span>
                    {menuItem.name}
                  </Link>
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
