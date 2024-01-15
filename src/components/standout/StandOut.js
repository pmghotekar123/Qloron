import React from "react";
import './StandOut.css';
import { Card, Col, Row } from "react-bootstrap";

function StandOut() {
  const cardDetails = [
    { title: "Experience & Expertise", content: "We bring a wealth of expertise and years of experience in the industry, ensuring that we deliver top-notch solutions tailored to your unique business needs" },
    { title: "Customised Solutions", content: "We understand that every business is unique. Our team works closely with you to understand your requirements and provide customized solutions that align with your goals and objectives." },
    { title: "Skilled Team", content: "Our team comprises highly skilled professionals who are experts in their respective fields. They stay updated with the latest industry trends and technologies to deliver cutting-edge solutions." },
    { title: "Quality & Precision", content: "We have a strong focus on delivering high-quality solutions. Our rigorous quality assurance processes ensure that the end product meets the highest standards of performance, functionality, and security." },
    { title: "Timely Delivery", content: "We value your time and understand the importance of meeting deadlines. Our team is committed to delivering projects on time, ensuring that you can launch and implement your solutions without delay." },
    { title: "Competitive Pricing", content: "We offer competitive pricing structures to provide you with the best value for your investment. Our cost-effective solutions help you optimize your budget without compromising on quality." },
    { title: "Client-Centric Approach", content: "We offer competitive pricing structures to provide you with the best value for your investment. Our cost-effective solutions help you optimize your budget without compromising on quality." },
    { title: "Long-Term Partnership", content: "We believe in building long-term relationships with our clients. Our goal is to become your trusted technology partner, supporting your growth and providing ongoing support and maintenance." },
    { title: "Positive Track Record", content: "Our track record speaks for itself. We have a history of successful projects and satisfied clients who have achieved their business goals with our assistance." },
    { title: "Finish the Project", content: "The project is completed, and we give it to our customer. We also ask for the customer's feedback." },
  ];

  return (
    <div className="standout-container">
      <h1 className="standout-heading">
        Why we <span style={{ color: "#26D6EB" }}>Stand Out</span> from others
      </h1>
      <h6 className="standout-subheading">| HOW WE WORK</h6>

      <Row className="g-4 mx-auto standout-cards">
        {cardDetails.map((card, index) => (
          <Col key={index} xs={5} md={5} lg={5}>
            {/* 
              - 'xs={12}' means each card will take the full width on extra-small screens.
              - 'md={5}' means each card will take 5 columns on medium-sized screens.
              - 'lg={2}' means each card will take 2 columns on large screens.
            */}
            <Card className="standout-card">
              <Card.Body>
                <Card.Title className="standout-card-title">{card.title}</Card.Title>
                <p className="standout-text">{card.content}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default StandOut;