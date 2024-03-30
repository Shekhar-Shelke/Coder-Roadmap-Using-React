import React from "react";
import "../CSS/CourceDetails.css";
import home from "../images/home-course.png";
import arrow_right from "../images/chevron_right.png";
import star from "../images/pink-star.svg";
import check from "../images/check.svg";
import { Link } from "react-router-dom";
export default function CourceDetails(props) {
  return (
    <>
      <div className="courcesDeatils">
        <div className="courc-Location">
          <Link to="/"><img src={home} alt="" />
          <img src={arrow_right} alt="" /></Link>
          <div className="courDetails-Text">
            <p>Title of the course</p>
          </div>
        </div>
        
        
        <div className="Title">
          <div className="container-title">
            <div className="no-flex">
              <div className="title-heading">
                <p>Title of the course</p>
              </div>
              <div className="title-desc">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>
              <div className="rate">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <div className="price-sec">
              <div className="price-flex">
                <div className="member-price">
                  <p>$50.00</p>
                  <p>Member price</p>
                </div>
                <div className="non-member-price">
                  <p>$55.00</p>
                  <p>Non Member price</p>
                </div>
              </div>{
              props.valid==="true"?<Link to="#" ><div className="btn dark-btn size-1 flex-btn" onClick={props.showAlert}>
              <div className="sign-text1"> Add to cart</div>
              <div>
                <img src={arrow_right} alt="" />
              </div>
            </div></Link>
              
                :<Link to="/login">
                <div className="btn dark-btn size flex-btn">
                  <div className="sign-text1"> Sign in to purchase</div>
                  <div>
                    <img src={arrow_right} alt="" />
                  </div>
              </div></Link>
              }
            </div>
          </div>
        </div>
        <div className="description">
          <div className="desc-title">
            <p className="H">Description</p>
            <p className="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing.
            </p>
            <p className="H">Learning objectives</p>
            <div className="flex">
              <img src={check} alt="" />
              <p className="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.{" "}
              </p>
            </div>
            <div className="flex">
              <img src={check} alt="" />
              <p className="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.{" "}
              </p>
            </div>
            <div className="flex">
              <img src={check} alt="" />
              <p className="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.{" "}
              </p>
            </div>
            <div className="flex">
              <img src={check} alt="" />
              <p className="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
