import React from "react";
import HeroSection from "./common/HeroSection";

const Contact = () => {
  return (
    <>
      <HeroSection title={"Contact"}>
        <div className="section-wrapper pr-60 pl-60 pb-60">
          <div className="contact-area bg-light-white-2">
            <h5 className="contact-title">
              I'm always open to discussing produuct
            </h5>
            <h5 className="contact-title-b">design work or partnerships.</h5>
            <form
              className="contact-form"
              action="https://formspree.io/f/xoqrgaab"
              method="post"
            >
              <div className="form-input-item mb-60">
                <label className="input-lebel name">name *</label>
                <input
                  name="name"
                  className="input-box name"
                  type="text"
                  required=""
                />
              </div>
              <div className="form-input-item mb-60">
                <label className="input-lebel gmail">Email *</label>
                <input
                  name="email"
                  className="input-box gmail"
                  type="Email"
                  required=""
                />
              </div>
              <div className="form-input-item mb-40">
                <label
                  className="input-lebel message"
                  style={{ color: "rgb(206, 101, 243)" }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  className="input-box message height"
                  cols={30}
                  rows={10}
                  style={{
                    height: 125,
                    borderBottom: "1px solid rgb(206, 101, 243)",
                  }}
                  defaultValue={""}
                />
              </div>
              <div className="form-btn-wrap">
                <button type="submit" value="Send" className="form-btn">
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </HeroSection>
    </>
  );
};

export default Contact;
