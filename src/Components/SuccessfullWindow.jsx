import { Link } from "react-router-dom";

export function SuccessFullWindow() {
  return (
    <>
      Поздравляем, Вы успешно зарегестрировались! Нажмите{" "}
      <Link to="/">сюда</Link>, чтобы вернуться на главную страницу
    </>
  );
}
