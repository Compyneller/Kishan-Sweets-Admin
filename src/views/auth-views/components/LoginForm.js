import React from "react";
import { connect } from "react-redux";
import { Button, Form, Input, Alert } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import {
  showLoading,
  showAuthMessage,
  hideAuthMessage,
  authenticated,
} from "redux/actions/Auth";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

export const LoginForm = (props) => {
  let history = useHistory();

  const {
    showForgetPassword,
    onForgetPasswordClick,
    showLoading,
    extra,
    loading,
    showMessage,
    message,
  } = props;

  const onLogin = async (values) => {
    showLoading();
    console.log(values);
    const body = new FormData();

    body.append("api", "sdgfwp49f4923d3287slhgw");
    body.append("user", values.user);
    body.append("pass", values.password);
    const { data } = await axios.post(
      "https://sadmin.kishansweets.com/adminapi/login.aspx",
      body
    );
    if (data.status === 200) {
      localStorage.setItem("user", true);
      history.push("/");
    }
    console.log(data);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginBottom: 0 }}
        animate={{
          opacity: showMessage ? 1 : 0,
          marginBottom: showMessage ? 20 : 0,
        }}
      >
        <Alert type="error" showIcon message={message}></Alert>
      </motion.div>
      <Form layout="vertical" name="login-form" onFinish={onLogin}>
        <Form.Item
          name="user"
          label="User"
          rules={[
            {
              required: true,
              message: "Please input your text",
            },
          ]}
        >
          <Input prefix={<MailOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item
          name="password"
          label={
            <div
              className={`${
                showForgetPassword
                  ? "d-flex justify-content-between w-100 align-items-center"
                  : ""
              }`}
            >
              <span>Password</span>
              {showForgetPassword && (
                <span
                  onClick={() => onForgetPasswordClick}
                  className="cursor-pointer font-size-sm font-weight-normal text-muted"
                >
                  Forget Password?
                </span>
              )}
            </div>
          }
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined className="text-primary" />} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Sign In
          </Button>
        </Form.Item>

        {extra}
      </Form>
    </>
  );
};

LoginForm.propTypes = {
  otherSignIn: PropTypes.bool,
  showForgetPassword: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

LoginForm.defaultProps = {
  otherSignIn: true,
  showForgetPassword: false,
};

const mapStateToProps = ({ auth }) => {
  const { loading, message, showMessage, token, redirect } = auth;
  return { loading, message, showMessage, token, redirect };
};

const mapDispatchToProps = {
  showAuthMessage,
  showLoading,
  hideAuthMessage,
  authenticated,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
