import React from "react";
import "../CSS/About.css";
import logo from "../images/abouts-devlopment.svg";

export default function About() {
  return (
    <>
      {/* <!-- *************** Start Abouts us  **************** --> */}
      <div className="abouts">
        <div className="sub-abouts">
          <div className="abouts-heading">
            <h1>About us</h1>
            <div className="para">
              We will help you to understand coding in an easy way with our
              1000+ courses for each individuals.
            </div>
          </div>
        </div>
        {/* <!-- *************** Start Abouts us  **************** -->
        <!-- *************** Start section-1  **************** --> */}
        <div className="sec-1">
          <div className="sub-abouts">
            <div className="abouts-heading">
            <h1>Why Coder RoadMap</h1>
            <div className="sec-1-para">
              We have started this as our assignment in 2023. Inspiration
              derived from the need to develop a faster, easier and more
              cost-effective way to create web portal for new learners. We work
              in inspiring environment to achieve the goals with flexible
              working hours and enjoyable atmosphere in clean and spacious
              office. You will find our office filled with young, passionate,
              and ambitious team members - creating great products while having
              a lot of fun.
            </div>
            </div>
          </div>
        </div>
        <div className="img">
        
            <img src={logo} alt="devlopment-image" />
          
        </div>
        {/* <!-- *************** End section-1  **************** -->
        <!-- *************** Start Vision **************** --> */}
        <div className="sec-vision">
          <div className="sub-sec-vision">
            <div className="sec-vision-heading">
              <h1>Our Vision and Mission</h1>
              <div className="sec-vision-para">
                We are creating innovative products that empower our users to
                grow and succeed. We are constantly prototyping new ideas,
                learning new technologies and working on making our portal even
                more, easier to use. Also, a technology platform connecting
                givers and nonprofits through a joyful and social donation
                experience.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- *************** End Vision **************** --> */}
    </>
  );
}
