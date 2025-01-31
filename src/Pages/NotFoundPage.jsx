import styled from "styled-components";
import { LogoWithLink } from "../Components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100vh;
  flex-direction: column;
`;

export default function NotFoundPage() {
  return (
    <Container>
      <LogoWithLink />
      <h1 style={{ color: "#14a76c" }}>Увы!</h1>
      <p style={{ color: "#14a76c" }}>Здесь ничего нет: ошибка 404!</p>
    </Container>
  );
}
