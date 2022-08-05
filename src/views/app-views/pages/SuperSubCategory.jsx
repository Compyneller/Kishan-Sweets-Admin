import { Card } from "antd";
import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Upload from "../components/UploadImage/index";
import Table from "../components/Table/index";
const SuperSubCategory = () => {
  return (
    <Container>
      <Card>
        <h5>Super Sub Category</h5>
        <br />
        <Row className="g-3">
          <Col sm={12} lg={8}>
            <Card className="shadow-sm" style={{ height: "100%" }}>
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
            </Card>
          </Col>
          <Col sm={12} lg={4}>
            <Card
              className="shadow-sm d-flex align-items-center"
              style={{ height: "100%" }}
            >
              <Upload />
            </Card>
          </Col>
        </Row>
        <br />
        <Card className="shadow-sm">
          <h5>Category List</h5>
          <br />
          <Table />
        </Card>
      </Card>
    </Container>
  );
};

export default SuperSubCategory;
