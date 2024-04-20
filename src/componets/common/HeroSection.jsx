import React from "react";

const HeroSection = ({ children, title }) => {
  return (
    <>
      {/* <div className="col-xxl-8 col-xl-9" id="main_content"> */}
        <div className="bostami-page-content-wrap">
          {/* page title */}
          <div className="section-wrapper pl-60 pr-60 pt-60">
            <div className="bostami-page-title-wrap mb-15">
              <h2 className="page-title">{title}</h2>
            </div>
          </div>
          {/* contact form */}
          {children}
          {/* footer copyright */}
          {/* <div className="footer-copyright text-center bg-light-white-2 pt-25 pb-25">
            <span>
              © 2024 All Rights Reserved by{" "}
              <a
                href="https://themeforest.net/user/elite-themes24"
                target="_blank"
                rel="noopener noreferrer"
              >
                elite-themes24
              </a>
              .
            </span>
          </div> */}
        </div>
      {/* </div> */}
    </>
  );
};

export default HeroSection;
