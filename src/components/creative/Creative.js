import React from "react";
import img from "../../assets/creative.jpg";
import "./Creative.css";

function Creative() {
  return (
    <div className="sec4-card">
      <div className="sec4-div">
        <div className="sec4-left">
          <h1 className="sec4-content">
            CREATIVE <span style={{ color: "#26D6EB" }}>CHALLENGES</span> ARE
            OUR PASSION
          </h1>
          <p className="sec4-para">
            Stay one step ahead with our future-proof technology services. We
            leverage the latest innovations and industry best practices to
            ensure your business remains agile, competitive, and prepared for
            the challenges of tomorrow.
          </p>
        </div>
        <div className="sec4-right">
          <img className="sec4-img" src={img} alt="Creative Services" />
        </div>
      </div>
    </div>
  );
}

export default Creative;