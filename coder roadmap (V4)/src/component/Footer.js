import React from 'react'
import "../CSS/Footer.css";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    // <!-- *************** Section -7 Start  **************** -->
    <div className="footer">
        <footer>
            <div className="logo footer-logo">
            <Link to="/"><span><span className="W">C</span><span className="oder">oder</span> <span className="road">Road</span><span
                        className="map">Map</span></span></Link>
            </div>
            <div className="copyright">© Coder RoadMap · FAQs · Terms · Privacy</div>
        </footer>
    </div>

    // <!-- *************** Section -7 End  **************** -->
  )
}
