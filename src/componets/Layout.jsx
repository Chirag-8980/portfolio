import React, { useContext, useEffect } from "react";
import ProfileBar from "./common/ProfileBar";
import MenuBar from "./common/MenuBar";
import {  ApiContext } from "../context/CreateContext";

const Layout = ({Componet , title}) => {
    const {name} = useContext(ApiContext)
    useEffect(()=>{
    // console.log(name)
        document.title = title
    } , [])
  return (
    <div>
      <div
        className="page-wrapper home-1"
        data-background="assets/img/bg/page-bg-1.jpg"
        style={{ backgroundImage: 'url("assets/img/bg/page-bg-1.jpg")' }}
      >
        {/* PRELOADER */}
        {/* /PRELOADER */}
        {/* header-start */}
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
                    <div className="menu-btn toggle_menu">
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
              <div className="mobile-menu mobile_menu"></div>
            </div>
          </div>
        </div>
        {/* header-end */}
        <div className="container z-index-3">
          <div className="row">
            {/* parsonal-info-start */}
            <div className="col-xxl-3 col-xl-3">
            <ProfileBar/>
            </div>
           
            {/* personal-info-end */}
            {/* about-page-start */}
            {/* <div className="col-xxl-8 col-xl-9"> */}
            {/* <About/> */}
            <Componet title={title}/>
            {/* </div> */}
            {/* about-page-end */}
            {/* main-menu-start */}
            <div className="col-xxl-1 d-xxl-block d-none">
              <MenuBar/>
            </div>
            {/* main-menu-end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
