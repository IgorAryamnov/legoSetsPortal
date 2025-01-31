import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100vh;
  flex-direction: column;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 2px solid var(--green);
`;
const MessageTitle = styled.h1`
  margin: 0;
  width: 100%;
  text-align: center;
  background: var(--green);
  border-radius: 16px 16px 0px 0px;
`;
const StyledLink = styled(Link)`
  width: 100%;
  text-align: center;
  text-decoration: none;
  outline: none;
  padding: 5px 0px 10px 0px;
  border-radius: 0px 0px 16px 16px;
  background: var(--orange);
  color: black;

  &:hover,
  &:focus-visible {
    color: var(--grey);
    cursor: pointer;
  }
`;

export function SuccessFullWindow() {
  return (
    <Container>
      <Link to="/">Логотип</Link>
      <MessageContainer>
        <MessageTitle>Поздравляем!</MessageTitle>
        <p
          style={{
            margin: "10px 10px 15px 10px",
            fontSize: 20,
            color: "#ffe400",
          }}
        >
          Вы успешно зарегестрировались!
        </p>
        <StyledLink to="/authorization">Войти</StyledLink>
      </MessageContainer>
    </Container>
  );
}
