import React, { useContext, useEffect, useState } from "react";
import HeroSection from "./common/HeroSection";
import { ApiContext } from "../context/CreateContext";

const Resume = () => {
  const { resumeData } = useContext(ApiContext);
  const { Education, Experience, Knowledge_tag } = resumeData;
  return (
    <>
      <HeroSection title={"Resume"}>
        <div className="section-wrapper pl-60 pr-60 mb-60">
          <div className="row">
            {/* education */}
            <div className="col-xl-6 col-lg-7">
              <div className="bostami-section-title-wrap mb-20">
                <h4 className="section-title">
                  <i className="fa-light fa-school" />
                  Education
                </h4>
              </div>
              <div className="bostami-card-wrap">
                {Education.reverse().map((item, i) => {
                  return (
                    <div
                      className={`bostami-card-item  mb-20 ${
                        i % 2 === 0 ? "bg-prink" : "bg-catkrill"
                      }`}
                    >
                      <span className="card-subtitle">
                        {item.duration.start} - {item.duration.end}
                      </span>
                      <h6 className="card-title">{item.degree}</h6>
                      <p className="card-text">{item.university} </p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* education */}
            <div className="col-xl-6 col-lg-5">
              <div className="bostami-section-title-wrap mb-20">
                <h4 className="section-title">
                  <i className="fa-light fa-briefcase" />
                  experience
                </h4>
              </div>
              {Experience.reverse().map((item, i) => {
                return (
                  <div
                  key={i}
                    className={`bostami-card-item  mb-20 ${
                      i % 2 !== 0 ? "bg-prink" : "bg-catkrill"
                    }`}
                  >
                    <span className="card-subtitle">
                      {item.duration.start} - {item.duration.end}
                    </span>
                    <h6 className="card-title">{item.designation}</h6>
                    <p className="card-text">{item.company_name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="section-wrapper bg-light-white-2 pt-70 pb-60 pl-60 pr-60">
          <div className="row">
            {/* skill */}
            {/* <div className="col-xl-6 col-lg-7">
              <div className="bostami-section-title-wrap mb-20">
                <h4 className="section-title">Working Skills</h4>
              </div>
              <div className="skill-bar-wrap">
                <div className="skill-bar-item mb-30">
                  <div className="title-wrap">
                    <h5 className="title">Web Design</h5>
                    <span className="count">85%</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-line progress-bg-1"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill-bar-item mb-30">
                  <div className="title-wrap">
                    <h5 className="title">Mobile App</h5>
                    <span className="count">55%</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-line progress-bg-2"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill-bar-item mb-30">
                  <div className="title-wrap">
                    <h5 className="title">Illustrator</h5>
                    <span className="count">65%</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-line progress-bg-3"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill-bar-item">
                  <div className="title-wrap">
                    <h5 className="title">Photoshope</h5>
                    <span className="count">72%</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-line progress-bg-4"
                      style={{ width: "72%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* gk */}
            <div className="col-xl-12 col-lg-12">
              <div className="bostami-section-title-wrap mb-20">
                <h4 className="section-title">Knowledges</h4>
              </div>
              <div className="knowledeges-item-wrap">
                {Knowledge_tag.map((item, i) => {
                  return (
                    <span className="gk-item text-capitalize" key={i}>
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </HeroSection>
    </>
  );
};

export default Resume;
