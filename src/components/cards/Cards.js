// CardPage.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css'; 
import cardImage1 from '../../assets/1.jpg';
import cardImage2 from '../../assets/2.jpg';
import cardImage3 from '../../assets/3.jpg';
import cardImage4 from '../../assets/4.jpg';
import cardImage5 from '../../assets/5.jpg';
import cardImage6 from '../../assets/6.jpg';
import cardImage7 from '../../assets/7.jpg';
import cardImage8 from '../../assets/8.jpg';
import cardImage9 from '../../assets/9.jpg';
import cardImage10 from '../../assets/10.jpg';
import cardImage11 from '../../assets/11.jpg';
import cardImage12 from '../../assets/12.jpg';

function Cards() {
  const cardData = [
    { title: 'Hire Resources', image: cardImage1 },
    { title: 'Business Technology Platform', image: cardImage2 },
    { title: 'Enterprise Resource Planning', image: cardImage3 },
    { title: 'CRM & Customer Experience', image: cardImage4 },
    { title: 'Spend Management', image: cardImage5 },
    { title: 'Human Capital Management', image: cardImage6 },
    { title: 'Financial Management', image: cardImage7 },
    { title: 'Web Hosting', image: cardImage8 },
    { title: 'Web Development', image: cardImage9 },
    { title: 'Digital Marketing', image: cardImage10 },
    { title: 'App Development', image: cardImage11 },
    { title: 'Data Explore', image: cardImage12 },
  ];

  return (
    <div className="card-grid row row-cols-1 row-cols-md-3">
      {cardData.map((card, index) => (
        <div key={index} className="col mb-4">
          <Card className="card">
            <Card.Img variant="top" src={card.image} alt={`Image ${index + 1}`} className="card-img-top" />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Button className="button-read-more" variant="primary">
                Read More
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Cards;
