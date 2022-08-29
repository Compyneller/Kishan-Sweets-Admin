import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import AccordionComp from "../AccordionComp/AccordionComp";

const TopBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className="w-100 glassBackground d-flex align-items-center px-5"
      style={{ height: "8vh" }}
    >
      <img
        src="https://img.icons8.com/ios-glyphs/344/menu--v1.png"
        style={{ filter: "invert(1)", height: "5vh" }}
        onClick={handleShow}
      />

      <Offcanvas
        className="glassBackground text-light"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <AccordionComp />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default TopBar;
