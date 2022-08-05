import React from "react";

import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import Calendar from "../components/Calendar/index";
import Table from "../components/Table/index";
const CategoryMaster = () => {
  return (
    <Container>
      <Card className="shadow-sm ">
        <Card.Header as="h5">Super Main Category</Card.Header>
        <Card.Body>
          <Row className="g-3">
            <Col sm={12} lg={8}>
              <Row className="g-2">
                <Col lg={2} className="d-flex align-items-center">
                  <p className="mb-3 ">Category ID</p>
                </Col>
                <Col lg={10}>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row className="g-2">
                <Col lg={2} className="d-flex align-items-center">
                  <p className="mb-3 ">Category Name</p>
                </Col>
                <Col lg={10}>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row className="g-2">
                <Col lg={2} className="d-flex align-items-center">
                  <p className="mb-3 ">Time From</p>
                </Col>
                <Col lg={10}>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row className="g-2">
                <Col lg={2} className="d-flex align-items-center">
                  <p className="mb-3 ">Time To</p>
                </Col>
                <Col lg={10}>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row className="g-2">
                <Col lg={2} className="d-flex align-items-center">
                  <p className="mb-3 ">Sector Type</p>
                </Col>
                <Col lg={10}>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row className="g-3">
                <Col sm={6} lg={3}>
                  <Button className="w-100" variant="outline-success">
                    Save
                  </Button>
                </Col>
                <Col sm={6} lg={3}>
                  <Button className="w-100" variant="outline-danger">
                    Delete
                  </Button>
                </Col>
                <Col sm={6} lg={3}>
                  <Button className="w-100" variant="outline-warning">
                    Update
                  </Button>
                </Col>
                <Col sm={6} lg={3}>
                  <Button className="w-100" variant="outline-info">
                    Refresh
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col sm={12} lg={4}>
              <Calendar />
            </Col>
          </Row>
          <br />
          <Table />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CategoryMaster;
