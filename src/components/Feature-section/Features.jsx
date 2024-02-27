import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Rapid Skill Enhancement",
    desc: "Elevate your expertise swiftly with our accelerated learning programs. Experience dynamic content and master new skills efficiently.",
    icon: "ri-draft-line",
  },

  {
    title: "24/7 Assistance",
    desc: "Our dedicated support team is always here for you. Receive prompt and reliable assistance whenever you need guidance or have questions.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification Achievement",
    desc: "Celebrate your accomplishments with our industry-recognized certifications. Validate your skills and stand out in your chosen field.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
