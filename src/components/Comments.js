import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
const Comments = () => {
  return (
    <>
      <section id="contact" className="bg-light py-3">
        <div className="text-center py-5 my-2">
          <h3 className="text-danger ">
            <i class="bi bi-chat-left-heart "></i> Comments
          </h3>
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <i class="bi bi-envelope"></i>
                  </InputGroup.Text>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <i class="bi bi-person-fill"></i>
                  </InputGroup.Text>
                  <FloatingLabel controlId="floatingInput" label="Name">
                    <Form.Control type="text" placeholder="Name" />
                  </FloatingLabel>
                </InputGroup>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Comments"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                  />
                </FloatingLabel>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Comments;
