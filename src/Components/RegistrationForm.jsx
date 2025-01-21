import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

export function RegistrationForm({ changeForm, succ }) {
  const onFinish = (values) => {
    let users = JSON.parse(localStorage.getItem("users"));
    users[values.username] = values.password;
    localStorage.setItem("users", JSON.stringify(users));
    console.log(values);
    succ(true);
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
            message: "Пожалуйста, введите логин",
          },
          () => ({
            validator(_, value) {
              if (!value || value.length > 4) {
                let users = JSON.parse(localStorage.getItem("users"));
                console.log(users);
                if (!users[value]) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Данное имя пользователя уже используется!")
                );
              } else {
                return Promise.reject(
                  new Error("Имя пользователя слишком короткое!")
                );
              }
            },
          }),
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Логин" />
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
        <Input prefix={<LockOutlined />} type="password" placeholder="Пароль" />
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
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Повторите пароль"
        />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Зарегистрироваться
        </Button>
        или{" "}
        <button
          onClick={() => {
            changeForm(false);
          }}
        >
          Вернуться к окну входа
        </button>
      </Form.Item>
    </Form>
  );
}
