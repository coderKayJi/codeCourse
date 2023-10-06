import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import {
  UserOutlined,
  LockOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Request from "../request";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [signup, setSignUp] = useState(false);

  const onFinish = async (values) => {
    const { msg,success } = await Request.signup(values);
    if (success) {
      notification.success({
        message:msg || "success",
      });
    }else{
      notification.error({
        message: msg || "Failed",
      });
    }
  };
  const onFinish1 = async (values) => {
    const {  msg, success,token} = await Request.login(values);
    if (success) {
      dispatch({
        type: "SET_AUTH_TOKEN",
        payload: token,
      });
      Request.getProfile().then(({ error, data: profileData, msg }) => {
        if (!error && profileData) {
          dispatch({
            type: "SET_CURRENT_USER",
            payload: { ...profileData },
          });
          notification.success({
            message: msg,
          });
        } else {
          notification.error({
            message: msg || "Failed",
            description: JSON.stringify(profileData)
              ?.replace("[", "")
              ?.replace("{", "")
              ?.replace("]", "")
              ?.replace("}", ""),
          });
        }
      });
    }else{
      notification.error({
        message: msg || "Failed",
      });
    }
  };

  const containerStyle = {
    maxWidth: "300px",
    margin: "auto",
    marginTop: "50vh",
    transform: "translateY(-50%)",
    padding: "20px",
    backgroundColor: "#76c893",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  };

  const buttonStyle = {
    width: "100%",
  };

  const Signup = () => {
    if (signup === true) {
      setSignUp(false);
    } else {
      setSignUp(true);
    }
  };

  return (
    <div style={containerStyle}>
      {signup ? (
        <>
          <h2>Signup and Start your journey</h2>
          <Form name="signup-form" onFinish={onFinish}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Name"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="number"
              rules={[
                {
                  required: true,
                  message: "Please enter your number!",
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined className="site-form-item-icon" />}
                placeholder="Mobile"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ ...buttonStyle, backgroundColor: "rgb(24, 78, 119)" }}
              >
                Get started
              </Button>
            </Form.Item>
          </Form>
          <p>
            Already registered!
            <Button
              style={{
                backgroundColor: "#76c893",
                color: "white",
                border: "none",
              }}
              onClick={Signup}
            >
              Login
            </Button>
          </p>{" "}
        </>
      ) : (
        <>
          <h3> Login and Buy your first course towards your journey!</h3>
          <h3>Login</h3>
          <Form name="login-form" onFinish={onFinish1}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ ...buttonStyle, backgroundColor: "rgb(24, 78, 119)" }}
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
          <p>
            Not Registered?{" "}
            <Button
              style={{
                backgroundColor: "#76c893",
                color: "white",
                border: "none",
              }}
              onClick={Signup}
            >
              Signup
            </Button>
          </p>
        </>
      )}
    </div>
  );
};

export default LoginPage;
