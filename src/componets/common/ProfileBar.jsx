import React, { useContext } from "react";
import { ApiContext } from "../../context/CreateContext";

const ProfileBar = () => {
  const { profileData } = useContext(ApiContext);
  return (
    <>
    
      {/* <div className="col-xxl-3 col-xl-3"> */}
      <div className="bostami-parsonal-info-area">
        <div className="bostami-parsonal-info-wrap">
          {/* img */}
          <div className="bostami-parsonal-info-img">
            <img src="assets/img/parsonal-info/user_profile_2.jpeg" alt="avatar" />
            {/* <img src="assets/img/parsonal-info/parson-img-1.png" alt="avatar" /> */}
          </div>
          {/* name */}
          <div className="bostami-parsonal-info-name">
            <h4 className="fw-semibold title">{profileData.name}</h4>
          </div>
          <span className="bostami-parsonal-info-bio mb-15">
            {profileData.profession}
          </span>
          {/* socail link */}
          <ul className="bostami-parsonal-info-social-link mb-30">
            {profileData.social_media.map((item, i) => {
              return (
                <li key={i}>
                  <a href={item.link} className={item.platform} target="_blank">
                    {/* <i className={item.icon} /> */}
                    {item.icon}
                  </a>
                </li>
              );
            })}
            
          </ul>
          {/* contact */}
          <div className="bostami-parsonal-info-contact mb-30">
            <div className="bostami-parsonal-info-contact-item phone">
              <div className="icon">
                <i className="fa-solid fa-mobile-screen-button" />
              </div>
              <div className="text">
                <span>Phone</span>
                <p>{profileData.phone}</p>
              </div>
            </div>
            <div className="bostami-parsonal-info-contact-item email">
              <div className="icon">
                <i className="fa-regular fa-envelope-open-text" />
              </div>
              <div className="text">
                <span>Email</span>
                <p style={{fontSize : "11px"}}>{profileData.email}</p>
              </div>
            </div>
            <div className="bostami-parsonal-info-contact-item location">
              <div className="icon">
                <i className="fa-solid fa-location-dot" />
              </div>
              <div className="text">
                <span>Location</span>
                <p>{profileData.location}</p>
              </div>
            </div>
            <div className="bostami-parsonal-info-contact-item calendar">
              <div className="icon">
                <i className="fa-light fa-calendar-days" />
              </div>
              <div className="text">
                <span>Birthday</span>
                <p>{profileData.dob}</p>
              </div>
            </div>
          </div>
          {/* cv button */}
          {/* <div className="bostami-parsonal-info-btn">
            <a className="btn-1" href="#">
              <span className="icon">
                <i className="fa-regular fa-download" />
              </span>
              Download cv
            </a>
          </div> */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ProfileBar;
