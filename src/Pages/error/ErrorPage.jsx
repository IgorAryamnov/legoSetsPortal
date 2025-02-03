import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100vh;
  flex-direction: column;
`;

export function ErrorPage() {
  return (
    <Container>
      <h1 style={{ color: "var(--green)" }}>Ой!</h1>
      <p style={{ color: "var(--green)" }}>Что-то пошло не так...</p>
    </Container>
  );
}
