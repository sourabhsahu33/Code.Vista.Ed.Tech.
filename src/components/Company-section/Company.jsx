import React from "react";
import { Container, Row, Col } from "reactstrap";

const Company = () => {
  const companies = [
    { name: "InspireHub", icon: "ri-lightbulb-fill" },
    { name: "VisionCraft", icon: "ri-eye-fill" },
    { name: "CreativePulse", icon: "ri-paint-brush-fill" },
    { name: "InnovateTech", icon: "ri-leaf-fill" },
    { name: "DiscoverQuest", icon: "ri-compass-fill" },
    { name: "WisdomForge", icon: "ri-book-fill" },
  ];

  return (
    <section>
      <Container>
        <Row>
          {companies.map((company, index) => (
            <Col lg="2" md="3" sm="4" xs="6" key={index}>
              <h3 className="d-flex align-items-center gap-1">
                <i className={`ri ${company.icon}`}></i> {company.name}
              </h3>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Company;
