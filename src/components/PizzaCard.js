import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

const PizzaCard = () => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            welcomee!!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Tastyyy</h4>
          <p>
            Pizza is a dish of Italian origin consisting of a usually round,
            flat base of leavened wheat-based dough topped with tomatoes,
            cheese, and often various other ingredients, which is then baked at
            a high temperature, traditionally in a wood-fired oven
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
      <Card className="m-3">
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
        />
        <Card.Body>
          <Card.Title>Tastyyyy Pizzzaa</Card.Title>
          <Card.Text>
            No need to get delivery when you've got a recipe this good! Such an
            incredibly delicious pepperoni
          </Card.Text>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Try it!
          </Button>
        </Card.Body>
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default PizzaCard;
