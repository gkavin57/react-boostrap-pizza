import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Container fluid className="mt-5">
      <Row className="justify-content-center align-items-center">
        <Col lg={8}>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100 image-size"
                src="https://www.acouplecooks.com/wp-content/uploads/2022/03/Goat-Cheese-Pizza-013.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>macronni pizza</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100  image-size"
                src="https://www.cookingclassy.com/wp-content/uploads/2014/07/pepperoni-pizza6+srgb..jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Cheese pizza</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100  image-size"
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Pepparoni pizza</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div>
        <h2 className="text-center mt-3">PIZZAS FOR EVERY OCCASIONAL</h2>
        <p className=" lead text-center ">welcome to all</p>
      </div>
    </Container>
  );
};

export default Banner;
