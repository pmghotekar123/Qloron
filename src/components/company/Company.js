import React from "react";
import "./Company.css";
import Slider from "react-infinite-logo-slider";
// import { useState } from "react";

import img1 from "../../assets/c1.jpg";
import img2 from "../../assets/c2.jpg";
import img3 from "../../assets/c3.jpg";
import img4 from "../../assets/c4.jpg";
import img5 from "../../assets/c5.jpg";
import img6 from "../../assets/c6.jpg";

function Company() {

  return (
    <>
      <div className="sec7-container">
        <div className="sec7-div1">
          <h1 className= "sec7-heading">
            <span style={{ color: "#26D6EB" }}>Trusted by companies</span> small
            and large around the globe
          </h1>
          <button className="sec7-div1-btn">Search or Customer Queries</button>
        </div>
        <div className="sec7-div2">
          <Slider
            width="250px"
            duration={30}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={"#fff"}
            // isPaused={isSliderPaused} // Pass the isPaused prop to control the slider
          >
            <Slider.Slide>
              <img src={img1} alt="any1" className="w-36 sec7-slider-img" />
            </Slider.Slide>
            <Slider.Slide>
              <img src={img2} alt="any2" className="w-36 sec7-slider-img" />
            </Slider.Slide>
            <Slider.Slide>
              <img src={img3} alt="any3" className="w-36 sec7-slider-img" />
            </Slider.Slide>
            <Slider.Slide>
              <img src={img4} alt="any4" className="w-36 sec7-slider-img" />
            </Slider.Slide>
            <Slider.Slide>
              <img src={img5} alt="any5" className="w-36 sec7-slider-img" />
            </Slider.Slide>
            <Slider.Slide>
              <img src={img6} alt="any6" className="w-36 sec7-slider-img" />
            </Slider.Slide>
          </Slider>
          {/* <button className="sec7-slider-btn" onClick={handlePauseToggle}>
            {isSliderPaused ? "Resume" : "Pause"} Slider
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Company;