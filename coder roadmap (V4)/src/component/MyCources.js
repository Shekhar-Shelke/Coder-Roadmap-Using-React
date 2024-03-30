import React from "react";
import filter from "../images/filter_alt.svg"
import label from "../images/class.svg"
import "../CSS/MyCources.css";
import { Link } from "react-router-dom";

export default function MyCources() {
  return (
    <>
      <div className="shopping-text dis-set">
        <p>My courses</p>
                    <div className="getstarted dropbtn">
                        <span className="btn btn-flexx  get-btn auth-btn"> Filters <img src={filter} alt="" className="flt-img" /> </span>
                    </div>
      </div>
      <div className="mycources">
      <div className="aftcource">
        <div className="course_name">Name of the course</div>
          <div className="lesson">
            <div className="class_img"><img src={label} alt="" /><div> 10 lessons</div></div>
            </div>
              <div className="presentage-of-course-comted">
                <div className="presentage-text">0%</div>
                <div className="complet-txet">Complete</div>
              </div>
              <Link style={{ textDecoration: 'none'}} to="/CourseLessons"><div className="start-cou">Start course</div></Link>
          </div>
      </div>
    </>
  );
}

