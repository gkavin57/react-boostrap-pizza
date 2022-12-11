import React from "react";
import { Badge, ListGroup } from "react-bootstrap";

const Orders = () => {
  return (
    <>
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">epparoni Pizza</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            3
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Cheese Pizza</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            1
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Fajita Pizza</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            2
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Orders;
