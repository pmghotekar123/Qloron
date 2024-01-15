import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import "./Statistics.css";
import l1 from "../../assets/s1.jpg";
import l2 from "../../assets/s2.jpg";
import l3 from "../../assets/s3.jpg";
import l4 from "../../assets/s4.jpg";

function Statistics() {
    return (
      <Card className="sec6-card">
        <h1 className="sec6-card-head">
          Why choose our company for your{" "}
          <span style={{ color: "#26D6EB" }}>projects?</span>
        </h1>
        <div className="sec6-div">
          <div className="sec6-left">
            <div className="sec6-inner-left">
              <Col className="sec6-cols">
                <Row>
                  <Col style={{ display: "flex" }} className="pb-3">
                    <img src={l1} alt="not found" className="sec6-left-inner-img" />
                    <div className="sec6-left-inner-text">
                      <h3>100+</h3>
                      <h5> Projects</h5>
                    </div>
                  </Col>
                  <Col style={{ display: "flex" }} className="pb-3">
                    <img src={l2} alt="not found" className="sec6-left-inner-img" />
                    <div className="sec6-left-inner-text">
                      <h3>20+</h3>
                      <h5>Developers</h5>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ display: "flex" }}>
                    <img src={l3} alt="not found" className="sec6-left-inner-img" />
                    <div className="sec6-left-inner-text">
                      <h3>80+</h3>
                      <h5>Satisfied Clients</h5>
                    </div>
                  </Col>
                  <Col style={{ display: "flex" }}>
                    <img src={l4} alt="not found" className="sec6-left-inner-img" />
                    <div className="sec6-left-inner-text">
                      <h3>90%</h3>
                      <h5>Positive Feedback</h5>
                    </div>
                  </Col>
                </Row>
              </Col>
            </div>
          </div>
          <div className="sec6-right">
            <div className="sec6-inner-right">
              <p>
                We are a team of professional and enthusiastic people, who like what they do and are always in the process of growing and improving their skills.{" "}
              </p>
              <button className="sec6-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
  
  export default Statistics;