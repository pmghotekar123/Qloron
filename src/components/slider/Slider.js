import React from "react";
import ExampleCarouselImage from "../../assets/ExampleCarouselImage.jpg";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

function Slider() {
  return (
    <>
      <div className="sec1-container">
        <Carousel controls={false}>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ExampleCarouselImage}
              alt="First slide"
            />
            <div className="sec1-content">
              <h1>OUR CREATIVITY IS YOUR SUCCESS</h1>
              <p>
                Stay one step ahead with our future-proof technology services.
                We leverage the latest innovations and industry best practices
                to ensure your business remains agile, competitive, and prepared
                for the challenges of tomorrow.
              </p>
              <button className="sec1-btn">Read more</button>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ExampleCarouselImage}
              alt="Second slide"
            />
            <div className="sec1-content">
              <h1>OUR CREATIVITY IS YOUR SUCCESS</h1>
              <p>
                Stay one step ahead with our future-proof technology services.
                We leverage the latest innovations and industry best practices
                to ensure your business remains agile, competitive, and prepared
                for the challenges of tomorrow.
              </p>
              <button className="sec1-btn">Read more</button>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ExampleCarouselImage}
              alt="Third slide"
            />
            <div className="sec1-content">
              <h1>OUR CREATIVITY IS YOUR SUCCESS</h1>
              <p>
                Stay one step ahead with our future-proof technology services.
                We leverage the latest innovations and industry best practices
                to ensure your business remains agile, competitive, and prepared
                for the challenges of tomorrow.
              </p>
              <button className="sec1-btn">Read more</button>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Slider;
