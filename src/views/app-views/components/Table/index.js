import { Button, Space, Table, Tag } from "antd";
import Loading from "components/shared-components/Loading";
import React from "react";
import { useDispatch } from "react-redux";
import { DeleteSuperMainAction } from "redux/actions/DeleteSuperMainAction";

const App = ({ superTableData, loading }) => {
  const data = superTableData?.mcatlist;
  const dispatch = useDispatch();

  const columns = [
    {
      title: "S.No.",
      dataIndex: "cat_id",
      key: "id",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Category Name",
      dataIndex: "cat_name",
      key: "cat_name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">Update</Button>
          <Button
            danger
            onClick={() => {
              dispatch(DeleteSuperMainAction(record.cat_id));
              window.location.reload();
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <>{loading ? <Loading /> : <Table columns={columns} dataSource={data} />}</>
  );
};

export default App;
