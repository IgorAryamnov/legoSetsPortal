import styled from "styled-components";
import { LogoWithLinkView } from "../../Components";

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
      <LogoWithLinkView />
      <h1 style={{ color: "var(--green)" }}>Увы!</h1>
      <p style={{ color: "var(--green)" }}>Здесь ничего нет: ошибка 404!</p>
    </Container>
  );
}
