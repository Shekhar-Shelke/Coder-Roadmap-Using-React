import React from 'react'
import shekhar from '../images/shekhar_pic.jpg';
import naresh from '../images/naresh_pic.jpg';
import "../CSS/OurTeam.css"
import "../CSS/About.css";

export default function OurTeam() {
  return (
    <>
    {/* <!-- *************** Start Our Team **************** -->
    <!-- ***************  Our Team Heading start **************** --> */}
    <div className="ourteam">
    <div className="sub-abouts">
          <div className="abouts-heading">
            <h1>Our team</h1>
            <div className="para">
            Our expert team is made up of creatives with technical knowhow, strategies who think
                    outside the box, and developers who push innovation.
            </div>
          </div>
        </div>
       
        {/* <!-- ***************  Our Team Heading End **************** -->
        <!-- ***************  Our Team Information start **************** --> */}

        <div className="team-info">
            <div className="info" id="info-1">
                <div className="info-img">
                    <img src={shekhar} alt="shekhar_pic"/>
                </div>
                <div className="info-para">
                    <div className="info-heading">Sharp-thinker</div>
                    <div className="info-sub-para">He is a very passionate and extremely out-of-the-box thinker, Shekhar is
                        driven to build a culture that helps people be their best selves at life.
                    </div>
                    <div className="info-Name">Shekhar Shelke</div>
                    <div className="info-disignation">Founder & CEO</div>
                </div>
            </div>
            <div className="info" id="info-1">
                <div className="info-img">
                    <img src={naresh} alt="shekhar_pic"/>
                </div>
                <div className="info-para">
                    <div className="info-heading">Power of experience</div>
                    <div className="info-sub-para">He comes with over thirteen years of experience in UX design and the
                        education industry. He is committed to inspiring and empowering person with a fine balance of
                        work and fun.</div>
                    <div className="info-Name">Naresh Nigadkar</div>
                    <div className="info-disignation">Co-Founder & UX Director</div>
                </div>
            </div>

        </div>
        {/* <!-- ***************  Our Team Information End **************** -->
        <!-- ***************  Our Team join us Start **************** --> */}
        <div className="sec-join">
            <div className="sub-sec-join">
                <div className="sec-join-heading">
                    <h1>Join us</h1>
                    <div className="sec-join-para">Coder RoadMap represents the trailblazing brands of the future and
                        consists of a team of technical visionaries who are masters of proprietary technology and
                        adaptive digital sales techniques. We are a fast-paced tech startup that rewards qualified
                        professionals for their performance. You will always be surrounded by inspiring people!</div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ***************  Our Team join us End **************** --> */}
    </>
  )
}
