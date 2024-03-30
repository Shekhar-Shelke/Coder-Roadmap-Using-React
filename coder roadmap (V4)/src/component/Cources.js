import React from "react";
// import star from "../images/star.svg";
import Cource from "../component/CourceBox";
import "../CSS/Cources.css";
import prev from '../images/prev icon.png';
import next from '../images/next icon.png';

export default function Cources() {
  return (
    <>
      {/* -- *************** Start Course-catalog  **************** --> */}
      <div className="Course-catalog">
        <div className="sub-Course-catalog catalog">
          <div className="Course-catalog-heading">
            <h1 id="Cources">Course catalog</h1>
            <div className="para">
              This platform provides good videos, articles, and websites for
              coders in a properly structured way. It provides a proper way to
              learn web development, and other languages. So now learning to
              code has become easy, now not only to walk but just to run.
            </div>
          </div>
        </div>
        {/* <!-- *************** End Course-catalog  **************** -->
        <!-- *************** Start sreach Course  **************** --> */}
        <div className="sec-1">
          <div className="input">
            
            <div>
              <input type="text"  id="fname" className="input-2" name="fname" placeholder=" Search courses" />
            </div>
            <div className="type">
              <select name="type" id="type" className="input-1">
                {/* <option value="" disabled hidden selected>
                  type
                </option> */}
                <option value="Name A-Z">Name A-Z</option>
                <option value="Name Z-A">Name Z-A</option>
                <option value="Best selling">Best selling</option>
                <option value="Popularity">Popularity</option>
                <option value="Price low to high">Price low to high</option>
                <option value="Price high to low">Price high to low</option>
                <option value="Customer ratings">Customer ratings</option>
              </select>
            </div>
            <div className="type">
              <select name="sort" id="sort" className="input-2">
                {/* <option value="" disabled hidden selected>
                  <span className="sort"> sort by</span>
                </option> */}
                <option value="Beginner">Beginner</option>
                <option value="Medium">Medium level</option>
                <option value="Advance">Advance</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- *************** End sreach Course  **************** --></div> */}

      <div className="section-2">
        <div className="box-container">
        <Cource/>
        <Cource/>
        <Cource/>
        <Cource/>
        <Cource/>
        <Cource/>
        <Cource/>
        <Cource/>
        <Cource/>
        <Cource/>
        <Cource/>
        <Cource/>
        <Cource/>
        <Cource/>
        <Cource/>
        <Cource/>
        </div>
      </div>
      {/* <!-- *************** footer next start ******************* --> */}
        <div className="show-item">
            <div className="show-text">Showing 1-20 of 100 items</div>
            <div className="numbers">
                <div className="num-box" id="box-1"><img src={prev} alt="prev"/></div>
                <div className="num-box" id="box-2"><img src={prev} alt="super-prev"/><img src={next} /></div>
                <div className="num-box active" id="box-3" >1</div>
                <div className="num-box" id="box-4">2</div>
                <div className="num-box" id="box-5">3</div>
                <div className="num-box" id="box-6">4</div>
                <div className="num-box" id="box-7">5</div>
                <div className="num-box" id="box-8"><img src={prev} alt="prev"/></div>
                <div className="num-box" id="box-9"><img src={prev} alt="super-prev"/><img src={next}/></div>
            </div>
        </div>
        {/* <!-- *************** footer next End ******************* --></div> */}
    </>
  );
}
