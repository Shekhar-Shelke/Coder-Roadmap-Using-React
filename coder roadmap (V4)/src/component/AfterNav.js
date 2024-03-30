import React from "react";
import "../CSS/AfterNav.css";
import line from "../images/Group line.svg";
import setting_item from "../images/setting_item.svg";
import Dashboard_logo from "../images/Dashboard_logo.svg";
import logout from "../images/logout.svg";
import tem_star from "../images/tem-star.svg";
import mycourses from "../images/mycourses.svg";
import { Link } from "react-router-dom";
import filter from "../images/filter_alt.svg"
import "../CSS/MyCources.css"

export default function AfterNav() {
  return (
    <>
      <div className="aftnav">
        <div className="join">
          <div className="lines-3">
            <img src={line} alt="" />
          </div>
          <div className="logo">
            <Link to="/">
              <span>
                <span className="c" style={{ color: "#FFF" }}>
                  C
                </span>
                <span className="oder">oder</span>{" "}
                <span className="road">Road</span>
                <span className="map">Map</span>
              </span>
            </Link>
          </div>
        </div>
        <div className="my-profile">
          <div className="pro-pic">
            <img src={setting_item} alt="" />
          </div>
          <Link to="/"><div className="logout-icon">
            <img src={logout} alt="" />
          </div></Link>
        </div>
      </div>
      <div className="horizontal-nav">
        <div className="manus">
          <div className="submenu">
            <div className="mycourses-menu">
            <Link to="/DashBoard"><div className="imgdash">
                <img src={Dashboard_logo} alt="" />
              </div></Link>
            </div>
            <Link to="/MyCources">
            <div className="mycourses-menu">
              <img src={mycourses} alt="" />
            </div></Link>
          </div>
        </div>
        
        
      </div>
     
    </>
  );
}
