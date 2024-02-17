import React from "react";

const ProfileBar = () => {
  return (
    <>
      {/* <div className="col-xxl-3 col-xl-3"> */}
        <div className="bostami-parsonal-info-area">
          <div className="bostami-parsonal-info-wrap">
            {/* img */}
            <div className="bostami-parsonal-info-img">
              <img
                src="assets/img/parsonal-info/parson-img-1.png"
                alt="avatar"
              />
            </div>
            {/* name */}
            <h4 className="bostami-parsonal-info-name">
              <a href="#">Bostami Hassan</a>
            </h4>
            <span className="bostami-parsonal-info-bio mb-15">
              Ui/Ux Designer
            </span>
            {/* socail link */}
            <ul className="bostami-parsonal-info-social-link mb-30">
              <li>
                <a href="#" className="facebook">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" className="instagram">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#" className="linkedin">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </li>
            </ul>
            {/* contact */}
            <div className="bostami-parsonal-info-contact mb-30">
              <div className="bostami-parsonal-info-contact-item phone">
                <div className="icon">
                  <i className="fa-solid fa-mobile-screen-button" />
                </div>
                <div className="text">
                  <span>Phone</span>
                  <p>+123 456 7890</p>
                </div>
              </div>
              <div className="bostami-parsonal-info-contact-item email">
                <div className="icon">
                  <i className="fa-regular fa-envelope-open-text" />
                </div>
                <div className="text">
                  <span>Email</span>
                  <p>example@mail.com</p>
                </div>
              </div>
              <div className="bostami-parsonal-info-contact-item location">
                <div className="icon">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <div className="text">
                  <span>Location</span>
                  <p>Hong kong china</p>
                </div>
              </div>
              <div className="bostami-parsonal-info-contact-item calendar">
                <div className="icon">
                  <i className="fa-light fa-calendar-days" />
                </div>
                <div className="text">
                  <span>Birthday</span>
                  <p>May 27, 1990</p>
                </div>
              </div>
            </div>
            {/* cv button */}
            <div className="bostami-parsonal-info-btn">
              <a className="btn-1" href="#">
                <span className="icon">
                  <i className="fa-regular fa-download" />
                </span>
                download cv
              </a>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default ProfileBar;
