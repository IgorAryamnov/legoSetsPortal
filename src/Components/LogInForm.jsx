import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../features/loginState";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledForm = styled(Form)`
  width: 350px;
  padding: 20px;

  .ant-form-item-control-input-content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .login-button {
    margin: 0px;
  }
`;
const StyledInput = styled(Input)`
  outline: none;

  &:hover,
  &:focus-visible,
  &:focus-within {
    border: 1px solid #14a76c;
    box-shadow: none;
  }
`;
const StyledButton = styled.button`
  width: 200px;
  background-color: #ff652f;
  font-size: 14px;
  height: 32px;
  border-radius: 6px;
  padding: 0px;
  border: none;
  margin-bottom: 10px;
  outline: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    border: 1px solid #14a76c;
  }
`;
const SwitchForm = styled(Link)`
  padding: 0px;
  border: none;
  background: none;
  color: #ffe400;
  outline: none;

  &:hover,
  &:focus-visible {
    color: #747474;
    cursor: pointer;
  }
`;

export function LogInForm() {
  const [formValidation, setFormValidation] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onFinish = (values) => {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users[values.username] !== values.password) {
      setFormValidation(true);
    } else {
      dispatch(logIn({ loggedIn: true, user: values.username }));
      navigate(-1);
    }
  };

  return (
    <StyledForm name="login" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите имя пользователя!",
          },
        ]}
      >
        <StyledInput prefix={<UserOutlined />} placeholder="Логин" />
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
        <StyledInput
          prefix={<LockOutlined />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>
      {formValidation ? (
        <p style={{ color: "red", textAlign: "center", marginTop: 0 }}>
          Имя пользователя или пароль указаны неверно!
        </p>
      ) : (
        <></>
      )}
      <Form.Item className="login-button">
        <StyledButton type="submit">Войти</StyledButton>
        <SwitchForm to="/authorization/registration">Нет аккаунта?</SwitchForm>
      </Form.Item>
    </StyledForm>
  );
}

LogInForm.propTypes = {
  changeForm: PropTypes.func,
};
