import React from "react";
import { Button, Form, Input, notification } from "antd";
import Request from "../request";
import { useSelector } from "react-redux";

const BookList = () => {

  const { currentUser } = useSelector((state) => ({
    currentUser: state.global.currentUser,
  }));

  const onFinish = async (values) => {
    if (currentUser == null) {
      const { message, error } = await Request.addBooks(values);
      if (error === "OK") {
        window.location.href ='./bookList'
        notification.success({
          message: message || "success",
        });
      } else {
        notification.error({
          message: message || "Failed",
        })
      }
    } else {
      const { message,error } = await Request.updateBooks(currentUser?.id, values);
      if (error === "OK") {
        window.location.href ='./bookList'
        notification.success({
          message: message || "success",
        });
      } else {
        notification.error({
          message: message || "Failed",
        })
      }
    }
  };

  return (
    <>
      <div style={{ overflowX: "auto", padding: "0 1rem 0 4rem" }}>
        {currentUser ? <h2>Update Book</h2> : <h2>Add Book</h2>}
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={currentUser}
          onFinish={onFinish}
        >
          <Form.Item
            label="Title"
            name="title"
            defaultValue="title"
            rules={[
              {
                required: true,
                message: "Please input Book Name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Author"
            name="author"
            rules={[
              {
                required: true,
                message: "Please input Author Name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Country" name="country">
            <Input />
          </Form.Item>
          <Form.Item label="Language" name="language">
            <Input />
          </Form.Item>
          <Form.Item label="Link" name="link">
            <Input />
          </Form.Item>
          <Form.Item label="Pages" name="pages">
            <Input />
          </Form.Item>
          <Form.Item label="Year" name="year">
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default BookList;
