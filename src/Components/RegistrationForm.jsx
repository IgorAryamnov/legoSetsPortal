import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

const StyledForm = styled(Form)`
  width: 350px;
  padding: 20px;

  .submit-button {
    align-items: center;
    display: flex;
    justify-content: center;
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
  outline: none;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    border: 1px solid #14a76c;
  }
`;

export function RegistrationForm({ succ }) {
  const [usernameInput, setUsernameInput] = useState("");
  const debouncedInput = useDebounce(usernameInput, 500);
  const [validator, setValidator] = useState(false);

  const [form] = Form.useForm();

  useEffect(() => {
    if (debouncedInput) {
      let users = JSON.parse(localStorage.getItem("users"));
      if (users[debouncedInput]) {
        setValidator(true);
      } else {
        setValidator(false);
      }
    } else {
      setValidator(false);
    }
  }, [debouncedInput]);

  useEffect(() => {
    if (debouncedInput) {
      form.validateFields(["username"]);
    }
  }, [validator]);

  const onFinish = (values) => {
    let users = JSON.parse(localStorage.getItem("users"));
    users[values.username] = values.password;
    localStorage.setItem("users", JSON.stringify(users));

    succ(true);
  };

  return (
    <StyledForm name="login" onFinish={onFinish} form={form}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите логин",
          },
          () => ({
            validator(_, value) {
              if (!value || value.length > 4) {
                if (validator) {
                  return Promise.reject(
                    new Error("Данное имя пользователя уже используется!")
                  );
                }
                return Promise.resolve();
              } else {
                return Promise.reject(
                  new Error("Имя пользователя слишком короткое!")
                );
              }
            },
          }),
        ]}
      >
        <StyledInput
          prefix={<UserOutlined />}
          placeholder="Логин"
          onChange={(e) => setUsernameInput(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите пароль!",
          },
          () => ({
            validator(_, value) {
              if (!value || value.length > 4) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Пароль слишком короткий!"));
            },
          }),
        ]}
      >
        <StyledInput
          prefix={<LockOutlined />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>

      <Form.Item
        name="submit-password"
        rules={[
          {
            required: true,
            message: "Пожалуйста, подтвердите пароль!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Пароли не совпадают!"));
            },
          }),
        ]}
      >
        <StyledInput
          prefix={<LockOutlined />}
          type="password"
          placeholder="Повторите пароль"
        />
      </Form.Item>

      <Form.Item className="submit-button">
        <StyledButton htmlType="submit">Зарегистрироваться</StyledButton>
      </Form.Item>
    </StyledForm>
  );
}

RegistrationForm.propTypes = {
  succ: PropTypes.func,
};
