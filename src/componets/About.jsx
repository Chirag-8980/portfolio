import React, { useContext } from "react";
import HeroSection from "./common/HeroSection";
import { ApiContext } from "../context/CreateContext";

const About = ({title}) => {
  const { aboutData } = useContext(ApiContext);
  const {summary} = aboutData
    
  return (
    <>
    <HeroSection title={"About"}>
      <div className="bostami-page-content-wrap">
        {/* page title */}
        <div className="section-wrapper pl-60 pr-60 ">
      <div className="text-justify mb-35">
           {
            summary.map((text ,i)=>{
              return(
                <p key={i}>
                  {text}
                </p>
              )
            })
           }
          </div>
        </div>
        {/* what-do */}
        <div className="section-wrapper pl-60 pr-60">
          <div className="bostami-section-title-wrap mb-30">
            <h3 className="section-title">What I do!</h3>
          </div>
          <div className="bostami-what-do-wrap mb-30">
            <div className="row">
              {/* single item */}
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="bostami-what-do-item bg-prink">
                  <div className="icon">
                    <i className="fa-light fa-swatchbook" />
                  </div>
                  <div className="text">
                    <h4 className="title">Ui/Ux Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod tincidunt volutpat.
                    </p>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="bostami-what-do-item bg-catkrill">
                  <div className="icon">
                    <i className="fa-regular fa-grid-2" />
                  </div>
                  <div className="text">
                    <h4 className="title">App Development</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod tincidunt volutpat.
                    </p>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="bostami-what-do-item  bg-catkrill">
                  <div className="icon">
                    <i className="fa-regular fa-camera-retro" />
                  </div>
                  <div className="text">
                    <h4 className="title">Photography</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod tincidunt volutpat.
                    </p>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="bostami-what-do-item bg-prink bg-blue">
                  <div className="icon">
                    <i className="fa-regular fa-code" />
                  </div>
                  <div className="text">
                    <h4 className="title">Web Development</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod tincidunt volutpat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      </HeroSection>
    </>
  );
};

export default About;
