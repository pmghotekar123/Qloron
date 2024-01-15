import React from "react";
import Card from "react-bootstrap/Card";
import img from "../../assets/world.jpg";
import "./World.css";

function World() {
  return (
    <div className="sec2-div">
      <Card>
        <Card.Img src={img} className="img-fluid" style={{ width: '100%', height: '100%' }} />
        <Card.ImgOverlay>
          <h1 className="sec2-content">
            WE PROVIDE <span style={{ color: "#12B1BE" }}>WIDE RANGE</span> OF
            CREATIVE SERVICES
          </h1>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default World;