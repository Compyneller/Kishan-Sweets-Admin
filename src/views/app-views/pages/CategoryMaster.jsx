import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Category.css";
import Table from "../components/Table/index";
import { Card, Col, Row, Button } from "antd";
import UploadImage from "../components/UploadImage/index";
import { useDispatch, useSelector } from "react-redux";
import { SuperMainCatTableAction } from "redux/actions/SuperMainCatTableAction";
const CategoryMaster = () => {
  const dispatch = useDispatch();

  const [sectorType, setSectorType] = useState([]);
  const [sector, setSector] = useState("");

  const [catName, setCatName] = useState("");
  const [catNameHindi, setCatNameHindi] = useState("");

  useEffect(() => {
    dispatch(SuperMainCatTableAction());
    const fetchSectorType = async () => {
      const api_key = new FormData();
      api_key.append("api", "sdgfwp49f4923d3287slhgw");
      const { data } = await axios.post(
        "https://sadmin.kishansweets.com/adminapi/ven_sectorlist.aspx",
        api_key
      );

      setSectorType(data?.sname);
    };
    fetchSectorType();
  }, []);
  const superTableData = useSelector((state) => state.superMainCatTable);
  const { loading, tableDate } = superTableData;
  // =====================handlesave==========================================================

  const handleSave = async () => {
    const body = new FormData();
    body.append("api", "sdgfwp49f4923d3287slhgw");
    body.append("mcat_name", catName);
    body.append("mcat_hname", catNameHindi);
    body.append("sector", sector);
    body.append("user", "admin");
    body.append("ctype", "VEG");

    const { data } = await axios.post(
      "https://sadmin.kishansweets.com/adminapi/super_mcat_save.aspx",
      body,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    console.log(data);
  };
  return (
    <>
      <h1>Super Main Category</h1>
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
                          onChange={(e) => setSector(e.target.value)}
                        >
                          {sectorType?.map((items, index) => {
                            return (
                              <option value={items.sname} key={index}>
                                {items.sname}
                              </option>
                            );
                          })}
                        </select>
                        {/* <label className="formLabel">Sector Type</label> */}
                      </div>
                    </Col>
                  </Row>
                  <br />

                  <Row gutter={10}>
                    <Col sm={5} lg={5} className="d-flex align-items-center">
                      <h5 className="my-auto" style={{ fontWeight: "bold" }}>
                        Category Name :
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
                          value={catName}
                          onChange={(e) => setCatName(e.target.value)}
                        />
                        <label className="formLabel">Category Name</label>
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row gutter={10}>
                    <Col sm={5} lg={5} className="d-flex align-items-center">
                      <h5 className="my-auto" style={{ fontWeight: "bold" }}>
                        Category Name : <br /> (in Hindi)
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
                          value={catNameHindi}
                          onChange={(e) => setCatNameHindi(e.target.value)}
                        />
                        <label className="formLabel">
                          Category Name (in Hindi)
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <br />
                </Card>
                <Card className="shadow">
                  <Row gutter={10}>
                    <Col sm={12} lg={6}>
                      <Button
                        className="w-100 shadow-lg"
                        style={{ background: "#66BB6A", color: "black" }}
                        onClick={() => handleSave()}
                      >
                        Save
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
            <Table superTableData={tableDate} loading={loading} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CategoryMaster;
