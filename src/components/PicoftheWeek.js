import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const PicoftheWeek = () => {
  const [show, setShow] = useState(false);
  return (
    <section id="musttry" className="my-3">
      <div className="text-center py-5 my-2">
        <h2 className="text-danger display-5">
          <i class="bi bi-search-heart"></i> Pick of The Week!
        </h2>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <Image
              src="https://c4.wallpaperflare.com/wallpaper/161/113/135/pizza-fast-food-vegetables-food-wallpaper-preview.jpg"
              alt="pizza"
              fluid="true"
              className="my-3"
              rounded
            ></Image>
          </Col>
          <Col>
            <div className="text-center p-2">
              <h2 className="h1">Double Cheese Fajita</h2>
              <p className="lead text-muted">
                Pizza is a dish of Italian origin consisting of a usually round,
                flat base of leavened wheat-based dough topped with tomatoes,
                cheese, and often various ...
              </p>
              <Button
                className="bg-danger text-black"
                onClick={() => setShow(true)}
              >
                <i class="bi bi-basket"></i> Buy Now
              </Button>
            </div>
          </Col>
        </Row>
        <ToastContainer
          className="p-3 position-fixed bottom-0 end-0 "
          position="bottom-end"
        >
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Your Food Added To Cart</Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </section>
  );
};

export default PicoftheWeek;
