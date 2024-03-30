import React from 'react'
import map from '../images/map.png';
import '../CSS/ContactUs.css'
import "../CSS/About.css";

export default function ContactUs() {
  return (
  <>
  {/* <!-- *************** Contact us Start **************** --> */}
    <div className="contact">
        <div className="sub-contact">
            <div className="abouts-heading">
                <h1>Contact us</h1>
                <div className="para">We would like to hear from you, we have offices and teams around the world. </div>
            </div>
        </div>
        <div className="dot">
            <div className="dot-1">
                <div className="dot-2">
                    <div className="dot-3"></div>
                </div>
            </div>
        </div>
        <div className="map-img">
            <img src={map} alt="map"/>
        </div>
        <div className="sec-2">
            <div className="sub-sec-2">
                <div className="part-1">
                    <div className="part-heading">Support</div>
                    <div className="part-headline">Our friendly team is here to help</div>
                    <div className="part-email">support@coaderroadmap.com</div>
                </div>
                <div className="part-1">
                    <div className="part-heading">Sales</div>
                    <div className="part-headline">Questions or queries? Get in touch!</div>
                    <div className="part-email">sales@coaderroadmap.com</div>
                </div>
                <div className="part-1">
                    <div className="part-heading">Phone</div>
                    <div className="part-headline">Mon-Fri from 8AM to 5PM</div>
                    <div className="part-email">+91 12345 12345</div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- *************** Contact us End **************** --> */}
  </>
  )
}
