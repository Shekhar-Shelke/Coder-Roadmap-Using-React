import React from 'react'
import star from "../images/star.svg";
import "../CSS/Cources.css";
import { Link } from 'react-router-dom';

export default function CourceBox() {
  return (
    <>
     <div className="box" id="box1">
                <div className="boxheading"> Name of the course</div>
                <div className="star-list">
                    <div><img src={star} alt=""/></div>
                    2.3K Reviews
                </div>
                <div className="price">
                    <div className="course-price" id="member-price1">
                        <div className="dollar"> $40</div>Course price
                    </div>
                    <div className="course-price" id="member-price2">
                        <div className="dollar"> $25</div>Member price
                    </div>
                </div>
                <div className="line"></div>
                <div className="viewdetails"><Link to="/CourceDetails">View details</Link></div>
            </div>
    </>
  )
}
