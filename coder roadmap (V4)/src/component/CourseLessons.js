import React from 'react'
import right_arrow from "../images/right_arrow.svg"
import blank_circle from "../images/Play.svg"
import video_content from "../images/video-content.png"
import "../CSS/CourseLessons.css"

export default function CourseLessons() {
  return (
    <>
        <div className="cour-direction">
            <div className="flex-cour-lesson">
            <div className="mycour-text"><div>My courses</div> <div className="img-arrr"><img src={right_arrow} alt="" /></div></div>
            <div className="mycour-text"><div>Name of the courses </div> <div className="img-arrr"><img src={right_arrow} alt="" /></div></div>
            <div className="mycour-text"><div>React For Beginner</div> <div className="img-arrr"><img src={right_arrow} alt="" /></div></div>
            </div>
        </div>
        <div className="shopping-text">
          <p>React For Beginner</p>
        </div>
        <div className="actual-content">
            <div className="cour-content">
                <div className="cours-text">Course content</div>
                <div className="cour-lesson"><div className="lesson-img"><img src={blank_circle} alt="" /></div><div className="lesson-text">Lesson 1</div></div>
                <div className="cour-lesson"><div className="lesson-img"><img src={blank_circle} alt="" /></div><div className="lesson-text">Lesson 2</div></div>
                <div className="cour-lesson"><div className="lesson-img"><img src={blank_circle} alt="" /></div><div className="lesson-text">Lesson 3</div></div>
                <div className="cour-lesson"><div className="lesson-img"><img src={blank_circle} alt="" /></div><div className="lesson-text">Lesson 4</div></div>
            </div>
            <div className="video-content">
                <div className="video-text">Video</div>
                <div className="cour-sentance">Watch the video to engage in the course content. Upon completion of the video, you may take the next step.</div>
                <div className="video-img"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/-mJFZp84TIY?si=jrmmW4Gp1Waf-uGG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            </div>
        </div>
    </>
  )
}
