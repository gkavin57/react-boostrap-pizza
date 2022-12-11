import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PizzaCard from "./PizzaCard";
const Menu = () => {
  const [menu] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <section id="menu" className="bg-light">
      <div className="text-center">
        <h3 className="text-danger m-3 py-5">
          Treat Yourself Everyday With Our Menu <i class="bi bi-tiktok"></i>
        </h3>
        <Container>
          <Row>
            {menu.map((item) => {
              return (
                <Col md={6} lg={4} key={item}>
                  <PizzaCard />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Menu;
