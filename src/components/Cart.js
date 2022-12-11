import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Orders from "./Orders";
const Cart = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
        variant="light"
        onClick={() => setShow(!show)}
        className="me-2  position-relative"
      >
        <i class="bi bi-cart">
          {" "}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            3<span class="visually-hidden">unread messages</span>
          </span>
        </i>
      </Button>
      <Offcanvas show={show} onHide={() => setShow(!show)} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>cart:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Orders />
          <div className="text-end my-2">
            ,<Button variant="danger">Check out</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
