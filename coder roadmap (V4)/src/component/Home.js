import React, { useEffect, useState } from "react";
import "../CSS/Home.css";
import Right_Sign_logo from "../images/right-sign.svg";
import home_image1 from "../images/home-1.png";
import star from "../images/star.svg";
import section_3 from "../images/section-3.png";
import section_4 from "../images/section-4.png";
import section_5 from "../images/section-5.png";
import axios from "axios";
// import Signup from '../component/Signup';
import { Link } from 'react-router-dom'


export default function home(props) {
  const [auth,setAuth] = useState(false);
const [message,setMessage]=useState('');
const [name,setName]=useState('')
  axios.defaults.withCredentials=true;
  useEffect(()=>{
     
      
      axios.get("http://localhost:8081")
      .then((response) => {
        if(response.data.Status==="Success"){
           setAuth(true)
           console.log("heyy");
           props.getdata("false",response.data.name)
          setName(response.data.name)
        }else{
          setAuth(false)
              setMessage(response.data.Error)
        }
      })
    
  },[])
  return (
    <>
      {/* !-- *************** Section - 1 start **************** --> */}

      <div className="section-1" id="Home">
        <div className="sub-section" id="sub-section-1">
          <div className="sub-heading">World class education</div>
          <div className="heading">A better way to learn a code.</div>
          <div className="sub-heading" id="sub-heading-1">
            We will help you to understand coding in an easy <br />
            way with our 1000+ courses for each individuals.
          </div>
          <div className="getstarted">
            <Link to="/login">
              <span className="btn dark-btn"> Get Started</span>
            </Link>
            <Link to="/login">
              <span className="btn btn-1"> Learn more</span>
            </Link>
          </div>
          <div className="list">
            <div className="correct-list">
              <div>
                <img src={Right_Sign_logo} alt="" />
              </div>
              Skilled and experienced mentors
            </div>
            <div className="correct-list">
              <div>
                <img src={Right_Sign_logo} alt="" />
              </div>
              Supportive 1:1 coaching
            </div>
          </div>
        </div>

        <div className="sub-section" id="sub-section-2">
          <img src={home_image1} alt="Always Learn" />
        </div>
      </div>

      {/* <!-- *************** Section - 1 End **************** -->
<!-- *************** Explore our courses Section - 2 Start **************** --> */}
      <div className="section-2">
        <div className="explore-heading"> Explore our courses </div>
        <div className="sub-heading explore-sub-heading">
          This platform provides good videos, articles, and websites for coders
          in a properly structured way. It provides a proper way to learn web
          development, and other languages. So now learning to code has become
          easy, now not only to walk but just to run.
        </div>
        <div className="box-container">
          <div className="box" id="box1">
            <div className="boxheading"> Name of the course</div>
            <div className="star-list">
              <div>./
              
                <img src={star} alt="" />{" "}
              </div>
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
            <div className="viewdetails">
              <Link to="/Cources">View details</Link >
            </div>
          </div>
          <div className="box" id="box2">
            <div className="boxheading"> Name of the course</div>
            <div className="star-list">
              <div>
                <img src={star} alt="" />
              </div>
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
            <div className="viewdetails">
               <Link to="/Cources">View details</Link>
            </div>
          </div>
          <div className="box" id="box3">
            <div className="boxheading"> Name of the course</div>
            <div className="star-list">
              <div>
                <img src={star} alt="" />
              </div>
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
            <div className="viewdetails">
               <Link to="/Cources">View details</Link>
            </div>
          </div>
          <div className="box" id="box4">
            <div className="boxheading"> Name of the course</div>
            <div className="star-list">
              <div>
                <img src={star} alt="" />
              </div>
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
            <div className="viewdetails">
              <Link to="/Cources">View details</Link >
            </div>
          </div>
          <div className="box" id="box5">
            <div className="boxheading"> Name of the course</div>
            <div className="star-list">
              <div>
                <img src={star} alt="" />
              </div>
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
            <div className="viewdetails">
              <Link to="/Cources">View details</Link >
            </div>
          </div>
          <div className="box" id="box6">
            <div className="boxheading"> Name of the course</div>
            <div className="star-list">
              <div>
                <img src={star} alt="" />
              </div>
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
            <div className="viewdetails">
              <Link to="/Cources">View details</Link >
            </div>
          </div>
          <div className="box" id="box7">
            <div className="boxheading"> Name of the course</div>
            <div className="star-list">
              <div>
                <img src={star} alt="" />
              </div>
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
            <div className="viewdetails">
              <Link to="/Cources">View details</Link >
            </div>
          </div>
          <div className="box" id="box8">
            <div className="boxheading"> Name of the course</div>
            <div className="star-list">
              <div>
                <img src={star} alt="" />{" "}
              </div>
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
            <div className="viewdetails">
              <Link to="/Cources">View details</Link >
            </div>
          </div>
        </div>
        <div id="button-display">
          <Link to="/Cources">
            <div className="btn dark-btn btn2">View all courses</div>
          </Link>
        </div>
      </div>

      {/* <!-- *************** Explore our courses Section - 2 End  **************** -->

<!-- *************** Section -3 Start **************** --> */}
      <div className="section-3">
        <div className="sub-section-3">
          <img src={section_3} alt="Only Focus on your goal " />
        </div>
        <div className="sub-section-3-2">
          <div className="sec-3-heading">
            Why <span>choose and learn from Coder Roadmap?</span>
          </div>
          <div className="sub-para">
            This platform provides good videos, articles, and websites for
            coders in a properly structured way. It provides a proper way to
            learn web development, and other languages. So now learning to code
            has become easy, now not only to walk but just to run.
          </div>
          <div className="list-part">
            <div className="list-1">
              <div className="correct-list sub-list-1">
                <div>
                  <img src={Right_Sign_logo} alt="" />
                </div>
                Easy to understand
              </div>
              <div className="correct-list">
                <div>
                  <img src={Right_Sign_logo} alt="" />
                </div>
                Very flexible
              </div>
            </div>
            <div className="list-1">
              <div className="correct-list ">
                <div>
                  <img src={Right_Sign_logo} alt="" />
                </div>
                Affordable
              </div>
              <div className="correct-list">
                <div>
                  <img src={Right_Sign_logo} alt="" />
                </div>
                Job relevant
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- *************** Section -3 End **************** -->

<!-- *************** Section -4 Start **************** --> */}
      <div className="section-3">
        <div className="sub-section-4-1">
          <div className="sec-3-heading">How it works?</div>
          <div className="sub-para para-1">
            Our platform will be helping all beginner learners as we are
            providing structure and steps to them so that it will be easy to
            learn a particular programming language as well as the basic
            information of each language given.
          </div>

          <div className="sub-para">
            For example c, c++, HTML, CSS, PHP etc. Similarly, we also include
            programming quizzes in our courses. The task is divided into 3
            levels beginner/medium/advanced level. <span> Let's try it.</span>
          </div>
        </div>

        <div className="sub-section-4-2">
          <img src={section_4} alt="Only Focus on your goal " />
        </div>
      </div>

      {/* 
<!-- *************** Section -4 End **************** -->

<!-- *************** Section -5 Start **************** -->
 <!-- <div className="section-5"> */}
      <div className="section-5-heading"> Learners says about our courses </div>
      <div className="sub-heading explore-sub-heading">
        This is a global training provider based across the world that
        specialises in accredited and bespoke training courses. We crush the
        barriers to getting a best courses.
      </div>
      <div className="sec-5-box">
        <div className="box-sec-5">
          <div className="image">
            <img src={section_5} alt="" />
          </div>
          <div className="description">
            <div className="stars">
              <div>
                <img src={star} alt="" />
              </div>
              <div>
                <img src={star} alt="" />
              </div>
              <div>
                <img src={star} alt="" />
              </div>
              <div>
                <img src={star} alt="" />
              </div>
              <div>
                <img src={star} alt="" />
              </div>
            </div>

            <div className="sec-5-heading">Best learning platform</div>
            <div className="sec-5-para">
              This is a global training provider based across the world that
              specialises in accredited and bespoke training courses.
            </div>
            <div className="sec-5-sub-heading">Name of the learner</div>
            <div className="sec-5-footer">Learner</div>
          </div>
        </div>
        <div className="box-sec-5 #box-sec-5">
          <div className="image">
            <img src={section_5} alt="" />
          </div>
          <div className="description">
            <div className="stars">
              <div>
                <img src={star} alt="" />
              </div>
              <div>
                <img src={star} alt="" />
              </div>
              <div>
                <img src={star} alt="" />
              </div>
              <div>
                <img src={star} alt="" />
              </div>
              <div>
                <img src={star} alt="" />
              </div>
            </div>

            <div className="sec-5-heading">Best learning platform</div>
            <div className="sec-5-para">
              This is a global training provider based across the world that
              specialises in accredited and bespoke training courses.
            </div>
            <div className="sec-5-sub-heading">Name of the learner</div>
            <div className="sec-5-footer">Learner</div>
          </div>
        </div>
      </div>
      <div className="scroll-line">
        <div className="line-1" id="line-1"></div>
        <div className="line-1"></div>
        <div className="line-1"></div>
      </div>
      <div className="number">1/6</div>

      {/* <!-- *************** Swiper slide start **************** -->
<!-- Swiper --> */}

      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="slide-1">
            <div className="sec-5-box">
               <div className="box-sec-5">
                <div className="image">
                  <img src={section_5} alt="" />
                </div>
                <div className="description">
                  <div className="stars">
                    <div>
                      <img src={star} alt="" />
                    </div>
                    <div>
                      <img src={star} alt="" />
                    </div>
                    <div>
                      <img src={star} alt="" />
                    </div>
                    <div>
                      <img src={star} alt="" />
                    </div>
                    <div>
                      <img src={star} alt="" />
                    </div>
                  </div>

                  <div className="sec-5-heading">Best learning platform</div>
                  <div className="sec-5-para">
                    This is a global training provider based across the world
                    that specialises in accredited and bespoke training courses.
                  </div>
                  <div className="sec-5-sub-heading">Name of the learner</div>
                  <div className="sec-5-footer">Learner</div>
                </div>
              </div> 
               <div className="box-sec-5 #box-sec-5">
                    <div className="image">
                    <img src={section_5} alt="" />
                    </div>
                    <div className="description">
                    <div className="stars">
                        <div>
                        <img src={star} alt="" />
                        </div>
                        <div>
                        <img src={star} alt="" />
                        </div>
                        <div>
                        <img src={star} alt="" />
                        </div>
                        <div>
                        <img src={star} alt="" />
                        </div>
                        <div>
                        <img src={star} alt="" />
                        </div>
                    </div>

                    <div className="sec-5-heading">Best learning platform</div>
                    <div className="sec-5-para">
                        This is a global training provider based across the world
                        that specialises in accredited and bespoke training courses.
                    </div>
                    <div className="sec-5-sub-heading">Name of the learner</div>
                    <div className="sec-5-footer">Learner</div>
                    </div>
              </div> 
            </div>
          </div>
         <div className="slide-1">
            <div className="sec-5-box">
                <div className="box-sec-5">
                    <div className="image"><img src={section_5} alt=""/>
                    </div>
                    <div className="description">
                        <div className="stars">
                            <div><img src={star} alt=""/></div>
                            <div><img src={star} alt=""/></div>
                            <div><img src={star} alt=""/></div>
                            <div><img src={star} alt=""/></div>
                            <div><img src={star} alt=""/></div> 
                        </div>

                        <div className="sec-5-heading">Best learning platform</div>
                        <div className="sec-5-para">This is a global training provider based across the world that
                            specialises in accredited and bespoke training courses.</div>
                        <div className="sec-5-sub-heading">Name of the learner</div>
                        <div className="sec-5-footer">Learner</div>
                    </div>
                </div>
                <div className="box-sec-5 #box-sec-5">
                    <div className="image"><img src={section_5} alt=""/>
                    </div>
                    <div className="description">
                        <div className="stars">
                            <div><img src={star} alt=""/></div>
                            <div><img src={star} alt=""/></div>
                            <div><img src={star} alt=""/></div>
                            <div><img src={star} alt=""/></div>
                            <div><img src={star} alt=""/></div>
                        </div>

                        <div className="sec-5-heading">Best learning platform</div>
                        <div className="sec-5-para">This is a global training provider based across the world that
                            specialises in accredited and bespoke training courses.</div>
                        <div className="sec-5-sub-heading">Name of the learner</div>
                        <div className="sec-5-footer">Learner</div>
                    </div>
                </div>

            </div>
        </div>
        <div className="slide-1"><div className="sec-5-box">
            <div className="box-sec-5">
                <div className="image"><img src={section_5} alt=""/>
                </div>
                <div className="description">
                    <div className="stars">
                        <div><img src={star} alt=""/></div>
                        <div><img src={star} alt=""/></div>
                        <div><img src={star} alt=""/></div>
                        <div><img src={star} alt=""/></div>
                        <div><img src={star} alt=""/></div>
                    </div>

                    <div className="sec-5-heading">Best learning platform</div>
                    <div className="sec-5-para">This is a global training provider based across the world that
                        specialises in accredited and bespoke training courses.</div>
                    <div className="sec-5-sub-heading">Name of the learner</div>
                    <div className="sec-5-footer">Learner</div>
                </div>
            </div>
            <div className="box-sec-5 #box-sec-5">
                <div className="image"><img src={section_5} alt=""/>
                </div>
                <div className="description">
                    <div className="stars">
                        <div><img src={star} alt=""/></div>
                        <div><img src={star} alt=""/></div>
                        <div><img src={star} alt=""/></div>
                        <div><img src={star} alt=""/></div>
                        <div><img src={star} alt=""/></div>
                    </div>

                    <div className="sec-5-heading">Best learning platform</div>
                    <div className="sec-5-para">This is a global training provider based across the world that
                        specialises in accredited and bespoke training courses.</div>
                    <div className="sec-5-sub-heading">Name of the learner</div>
                    <div className="sec-5-footer">Learner</div>
                </div>
            </div>

        </div></div>
        <div className="slide-1">
            <div className="sec-5-box">
                <div className="box-sec-5">
                    <div className="image"><img src={section_5} alt=""/>
                    </div>
                    <div className="description">
                        <div className="stars">
                            <div><img src={star} alt=""/></div>
                            <div><img src={star} alt=""/></div>
                            <div><img src={star} alt=""/></div>
                            <div><img src={star} alt=""/></div>
                            <div><img src={star} alt=""/></div>
                        </div>

                        <div className="sec-5-heading">Best learning platform</div>
                        <div className="sec-5-para">This is a global training provider based across the world that
                            specialises in accredited and bespoke training courses.</div>
                        <div className="sec-5-sub-heading">Name of the learner</div>
                        <div className="sec-5-footer">Learner</div>
                    </div>
                </div>
                <div className="box-sec-5 #box-sec-5">
                    <div className="image"><img src={section_5} alt=""/>
                    </div>
                    <div className="description">
                        <div className="stars">
                            <div><img src={star} alt=""/></div>
                            <div><img src={star} alt=""/></div>
                            <div><img src={star} alt=""/></div>
                            <div><img src={star} alt=""/></div>
                            <div><img src={star} alt=""/></div>
                        </div>

                        <div className="sec-5-heading">Best learning platform</div>
                        <div className="sec-5-para">This is a global training provider based across the world that
                            specialises in accredited and bespoke training courses.</div>
                        <div className="sec-5-sub-heading">Name of the learner</div>
                        <div className="sec-5-footer">Learner</div>
                    </div>
                </div>

            </div>
            </div> 
          <div className="swiper-slide">Slide 4</div>
          <div className="swiper-slide">Slide 4</div> 
          <div className="swiper-slide">Slide 4</div>
          <div className="swiper-slide">Slide 4</div>
        </div>
        <div className="swiper-button-next right-btn"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>

      {/* <!-- *************** Swiper slide End **************** -->

<!-- *************** Section -5 End **************** -->


<!-- *************** Section -6 Start **************** --> */}
      <div className="section-6">
        <div className="subscribe">
          <div className="sub-sec-6">
            <div className="sec-6-heading"> Subscribe to get an updates</div>
            <div className="sec-6-para">
              {" "}
              Our platform will keep you updated on every new course.
            </div>
            <div className="email">
              {" "}
              <input
                type="email"
                name="email"
                className="email-submit"
                placeholder="Enter your email id"
              />
              <input type="submit" className="submit" value="subscribe" />{" "}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- *************** Section -6 End **************** --> */}

      
    </>
  );
}
