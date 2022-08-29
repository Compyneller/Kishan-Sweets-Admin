import React from "react";
import "./Category.css";
import Table from "../components/Table/index";
import { Button, Card, Col, Row } from "antd";
import UploadImage from "../components/UploadImage/index";
const SuperSubCategory = () => {
  return (
    <>
      <h1>Super Sub Category</h1>
      <Row gutter={15}>
        <Col xs={24} sm={24} lg={18}>
          <Card className="shadow customBackground">
            <Row gutter={15}>
              <Col xs={24} sm={24} lg={18}>
                <Card className="shadow">
                  <Row gutter={10}>
                    <Col sm={5} lg={5} className="d-flex align-items-center">
                      <h5 className="my-auto" style={{ fontWeight: "bold" }}>
                        Sector Type :
                      </h5>
                    </Col>
                    <Col sm={19} lg={19}>
                      <div
                        className="customForm w-100 my-auto"
                        // style={{ marginBottom: 16 }}
                      >
                        <select
                          name=""
                          id=""
                          className="formInput"
                          placeholder="Select One"
                        >
                          <option value="">Option 1</option>
                          <option value="">Option 1</option>
                          <option value="">Option 1</option>
                          <option value="">Option 1</option>
                          <option value="">Option 1</option>
                          <option value="">Option 1</option>
                          <option value="">Option 1</option>
                        </select>
                        {/* <label className="formLabel">Sector Type</label> */}
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row gutter={10}>
                    <Col sm={5} lg={5} className="d-flex align-items-center">
                      <h5 className="my-auto" style={{ fontWeight: "bold" }}>
                        Main Category :
                      </h5>
                    </Col>
                    <Col sm={19} lg={19}>
                      <div
                        className="customForm w-100 my-auto"
                        // style={{ marginBottom: 16 }}
                      >
                        <select
                          name=""
                          id=""
                          className="formInput"
                          placeholder="Select One"
                        >
                          <option value="">Option 1</option>
                          <option value="">Option 1</option>
                          <option value="">Option 1</option>
                          <option value="">Option 1</option>
                          <option value="">Option 1</option>
                          <option value="">Option 1</option>
                          <option value="">Option 1</option>
                        </select>
                        {/* <label className="formLabel">Sector Type</label> */}
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row gutter={10}>
                    <Col sm={5} lg={5} className="d-flex align-items-center">
                      <h5 className="my-auto" style={{ fontWeight: "bold" }}>
                        Sub Category ID :
                      </h5>
                    </Col>
                    <Col sm={19} lg={19}>
                      <div
                        className="customForm w-100 my-auto"
                        // style={{ marginBottom: 16 }}
                      >
                        <input
                          type="text"
                          className="formInput"
                          autoComplete="on"
                          placeholder=" "
                        />
                        <label className="formLabel">Sector Type</label>
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row gutter={10}>
                    <Col sm={5} lg={5} className="d-flex align-items-center">
                      <h5 className="my-auto" style={{ fontWeight: "bold" }}>
                        Sub Category Name :
                      </h5>
                    </Col>
                    <Col sm={19} lg={19}>
                      <div
                        className="customForm w-100 my-auto"
                        // style={{ marginBottom: 16 }}
                      >
                        <input
                          type="text"
                          className="formInput"
                          autoComplete="on"
                          placeholder=" "
                        />
                        <label className="formLabel">Sector Type</label>
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row gutter={10}>
                    <Col sm={5} lg={5} className="d-flex align-items-center">
                      <h5 className="my-auto" style={{ fontWeight: "bold" }}>
                        Sub Category Name : <br /> (in Hindi)
                      </h5>
                    </Col>
                    <Col sm={19} lg={19}>
                      <div
                        className="customForm w-100 my-auto"
                        // style={{ marginBottom: 16 }}
                      >
                        <input
                          type="text"
                          className="formInput"
                          autoComplete="on"
                          placeholder=" "
                        />
                        <label className="formLabel">Sector Type</label>
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row gutter={10}>
                    <Col sm={5} lg={5} className="d-flex align-items-center">
                      <h5 className="my-auto" style={{ fontWeight: "bold" }}>
                        Time From :
                      </h5>
                    </Col>
                    <Col sm={19} lg={19}>
                      <div
                        className="customForm w-100 my-auto"
                        // style={{ marginBottom: 16 }}
                      >
                        <input
                          type="text"
                          className="formInput"
                          autoComplete="on"
                          placeholder=" "
                        />
                        <label className="formLabel">Sector Type</label>
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row gutter={10}>
                    <Col sm={5} lg={5} className="d-flex align-items-center">
                      <h5 className="my-auto" style={{ fontWeight: "bold" }}>
                        Time To :
                      </h5>
                    </Col>
                    <Col sm={19} lg={19}>
                      <div
                        className="customForm w-100 my-auto"
                        // style={{ marginBottom: 16 }}
                      >
                        <input
                          type="text"
                          className="formInput"
                          autoComplete="on"
                          placeholder=" "
                        />
                        <label className="formLabel">Sector Type</label>
                      </div>
                    </Col>
                  </Row>
                </Card>
                <Card className="shadow">
                  <Row gutter={10}>
                    <Col sm={12} lg={6}>
                      <Button
                        className="w-100 shadow-lg"
                        style={{ background: "#66BB6A", color: "black" }}
                      >
                        Save
                      </Button>
                    </Col>
                    <Col sm={12} lg={6}>
                      <Button className="w-100 shadow-lg" type="danger">
                        Delete
                      </Button>
                    </Col>
                    <Col sm={12} lg={6}>
                      <Button className="w-100 shadow-lg" type="primary">
                        Update
                      </Button>
                    </Col>
                    <Col sm={12} lg={6}>
                      <Button
                        className="w-100 shadow-lg"
                        style={{ background: "#FFB74D", color: "black" }}
                      >
                        Refresh
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Col>

              <Col xs={24} sm={24} lg={6}>
                <Card className="shadow">
                  <UploadImage />
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={24} lg={6}>
          {/* <Card className="shadow"><Calendar /></Card> */}
        </Col>
        <Col xs={24} sm={24} lg={24}>
          <Card className="shadow">
            <Table />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SuperSubCategory;
