import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../features/loginState";

export function LogInForm({ changeForm }) {
  const [formValidation, setFormValidation] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onFinish = (values) => {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users[values.username] !== values.password) {
      setFormValidation(true);
    } else {
      dispatch(logIn({ loggedIn: true, user: values.username }));
      navigate("/");
    }
  };

  return (
    <Form
      name="login"
      style={{
        maxWidth: 360,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите имя пользователя!",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите пароль!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      {formValidation ? (
        <p>Имя пользователя или пароль указаны неверно!</p>
      ) : (
        <></>
      )}
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Войти
        </Button>
        или{" "}
        <button
          onClick={() => {
            changeForm(true);
          }}
        >
          Зарегистрироваться!
        </button>
      </Form.Item>
    </Form>
  );
}
