import React from 'react'
import com_logo from "../images/pro-com-logo.svg"
import "../CSS/ProcessCompleted.css"
import { Link } from 'react-router-dom'
import arrow_right from "../images/chevron_right.png";
export default function ProcessCompleted() {
  return (
    <>
    <div className="proc-complete">
    <div className="shopping-text">
            <p>Process completed</p>
        </div>
        <div className="proc-com">
            <div className="com-logo">
            <div className="pro-com-logo"><img src={com_logo} alt="" /></div></div>
            <div className="sucess-text">Success!</div>
            <div className="succ-line">Your order has been processed successfully.</div>
            <div className="com-btn"><Link to="/MyCources">
                <div className="btn dark-btn small-btn succ-btn size flex-btn">
                        <div className="">Go to my courses</div>
                        <div className="arrow-white">
                            <img src={arrow_right} alt="" />
                        </div>
                </div></Link>
                </div>
        </div>
    </div>
    </>
  )
}
