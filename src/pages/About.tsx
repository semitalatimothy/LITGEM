import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/About.scss";
import about from "/images/about.jpg";

export const About: React.FC = () => {
  return (
    <section className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <Image src={about} alt="Our Team" fluid rounded className="about-img shadow-sm" />
          </Col>
          <Col md={6}>
            <h2 className="about-heading mb-4">About Our Clinic</h2>
            <p className="about-text">
              At LitGem Clinic, we’re committed to providing patient-centered care. Our multidisciplinary team ensures that every patient receives a personalized plan for diabetes management and prevention.
            </p>
            <p className="about-text">
              We focus on education, empowerment, and holistic wellness — combining modern medical practices with compassionate support.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
