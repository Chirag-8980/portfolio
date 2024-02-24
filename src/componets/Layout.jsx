import React, { useContext, useEffect, useState } from "react";
import ProfileBar from "./common/ProfileBar";
import MenuBar from "./common/MenuBar";
import { ApiContext } from "../context/CreateContext";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ Componet, title }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const { mainMenuItem } = useContext(ApiContext);
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <div>
      <div
        className="page-wrapper home-1"
        data-background="assets/img/bg/page-bg-1.jpg"
        style={{ backgroundImage: 'url("assets/img/bg/page-bg-1.jpg")' }}
      >
        <div className="bostami-header-area mb-30 z-index-5">
          <div className="container">
            <div className="bostami-header-wrap">
              <div className="row align-items-center">
                {/* logo */}
                <div className="col-6">
                  {/* <div className="bostami-header-logo">
                    <a
                      className="site-logo"
                      href="https://bostami-bootstrap.ibthemespro.com/index.html"
                    >
                      <img src="assets/img/logo/logo-2.png" alt="" />
                    </a>
                  </div> */}
                </div>
                {/* menu btn */}
                <div className="col-6">
                  <div className="bostami-header-menu-btn text-right">
                    {/* <div className="dark-btn dark-btn-stored dark-btn-icon">
                      <i className="fa-light fa-moon" />
                      <i className="fa-light fa-sun" />
                    </div> */}
                    <div
                      className={`menu-btn toggle_menu ${
                        mobileMenu ? "active" : ""
                      }`}
                      onClick={() => {
                        setMobileMenu(!mobileMenu);
                      }}
                    >
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* mobile menu */}

            <div className="mobile-menu-wrap">
              <div
                className={`mobile-menu mobile_menu mean-container ${
                  mobileMenu ? "active" : ""
                }`}
              >
                <div className="mean-bar">
                  <a
                    href="#nav"
                    className="meanmenu-reveal"
                    style={{ right: 0, left: "auto", display: "inline" }}
                  >
                    <span>
                      <span>
                        <span />
                      </span>
                    </span>
                  </a>
                  <nav className="mean-nav">
                    <ul>
                    {mainMenuItem.map((menuItem, i) => {
              return (
                  <li className={location.pathname == menuItem.to && "active"} key={i}>
                    <Link to={menuItem.to}>
                    <span>
                      <i className={`me-1 ${menuItem.iconClass}`} />
                    </span>
                    {menuItem.name}
                  </Link>
                </li>
              );
            })}
                      {/* <li className="active">
                        <a href="index.html">
                          <span>
                            <i className="fa-light fa-address-card" />
                          </span>
                          about
                        </a>
                      </li>
                      <li>
                        <a href="resume.html">
                          <span>
                            <i className="fa-light fa-file-user" />
                          </span>
                          Resume
                        </a>
                      </li>
                      <li>
                        <a href="portfolio.html">
                          <span>
                            <i className="fa-light fa-briefcase" />
                          </span>
                          Works
                        </a>
                      </li>
                      <li>
                        <a href="blog.html">
                          <span>
                            <i className="fa-light fa-newspaper" />
                          </span>
                          Blogs
                        </a>
                      </li>
                      <li className="mean-last">
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
              </div>
            </div>
          </div>
        </div>
        {/* header-end */}
        <div className="container z-index-3">
          <div className="row">
            {/* parsonal-info-start */}
            <div className="col-xxl-3 col-xl-3">
              <ProfileBar />
            </div>

            {/* personal-info-end */}
            {/* about-page-start */}
            {/* <div className="col-xxl-8 col-xl-9"> */}
            {/* <About/> */}
            <Componet title={title} />
            {/* </div> */}
            {/* about-page-end */}
            {/* main-menu-start */}
            <div className="col-xxl-1 d-xxl-block d-none">
              <MenuBar />
            </div>
            {/* main-menu-end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
