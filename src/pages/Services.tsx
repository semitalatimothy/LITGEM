import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/services.scss"; // ✅ Import SCSS styles here

export const Services: React.FC = () => {
  const services = [
    {
      title: "Blood Sugar Test",
      desc: "Accurate testing and expert guidance for maintaining healthy blood sugar levels.",
      img: "/images/glucose.jpg",
    },
    {
      title: "Nutrition Counseling",
      desc: "Personalized meal planning and nutrition advice for a balanced diabetic lifestyle.",
      img: "/images/nutrition.jpg",
    },
    {
      title: "Insulin Therapy",
      desc: "Insulin programs and education for effective diabetes management.",
      img: "/images/insulin.jpg",
    },
    {
      title: "Foot & Eye Care",
      desc: "Comprehensive care and screenings to prevent diabetic complications.",
      img: "/images/feet.jpg",
    },
  ];

  return (
    <section className="services-section py-5">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={3} sm={6} xs={12} key={index} className="mb-4">
              <Card className="h-100 border-0 shadow-sm service-card text-center">
                <Card.Img
                  variant="top"
                  src={service.img}
                  alt={service.title}
                  className="service-img"
                />
                <Card.Body>
                  <Card.Title className="fw-semibold">{service.title}</Card.Title>
                  <Card.Text className="text-muted small">{service.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
