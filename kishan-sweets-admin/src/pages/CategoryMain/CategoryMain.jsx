import React from "react";
import { Card, Form, Row, Col, Dropdown, Button } from "react-bootstrap";
const CategoryMain = () => {
  return (
    <div className="category__container w-100">
      <div className="glassBackground p-5">
        <Row className="g-3">
          <h3>Super Sub Category</h3>
          <Col sm={12} lg={6}>
            <Card className="glassBackground">
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Sector Type</Form.Label>
                    <Dropdown className="mb-3">
                      <Dropdown.Toggle
                        className="glassBackground w-100"
                        id="dropdown-basic"
                      >
                        Dropdown Button
                      </Dropdown.Toggle>

                      <Dropdown.Menu className=" w-100">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Main Category</Form.Label>
                    <Form.Control
                      className="glassBackground"
                      type="text"
                      placeholder="Main Category"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Sub Category ID</Form.Label>
                    <Form.Control
                      className="glassBackground"
                      type="text"
                      placeholder="Sub Category ID"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Sub Category Name</Form.Label>
                    <Form.Control
                      className="glassBackground"
                      type="text"
                      placeholder="Sub Category Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Sub Category Name (in Hindi)</Form.Label>
                    <Form.Control
                      className="glassBackground"
                      type="text"
                      placeholder="Sub Category Name (in Hindi)"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Time From</Form.Label>
                    <Form.Control
                      className="glassBackground"
                      type="text"
                      placeholder="Time From"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Time To</Form.Label>
                    <Form.Control
                      className="glassBackground"
                      type="text"
                      placeholder="Time To"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CategoryMain;
