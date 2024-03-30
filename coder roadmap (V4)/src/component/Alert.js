import React from "react";
import ok from "../images/alertOk.png";
// import close from "../images/close.png";
import "../CSS/Alert.css";
export default function Alert(props) {
  return (
    <>{props.added &&<div className="position">
        <div className="alert-block">
          <div className="alert-img">
            <img src={ok} alt="" />
          </div>
          <div className="alert-text">
              <p>Course added to the cart successfully.</p>
          </div>
          
        </div>
        </div>
      }
    </>
  );
}
