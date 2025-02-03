import { useEffect } from "react";
import { LogoWithLinkView } from "../../Components";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { LogInForm } from "./components";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100vh;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormWithOutLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 20px;
  border: 2px solid var(--green);

  h1 {
    margin-top: 0px;
    padding-top: 20px;
  }
`;
const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--green);
  border-radius: 15px 15px 0px 0px;
`;

export default function AuthorizationPage() {
  let navigate = useNavigate();
  let logSlice = useSelector((state) => state.log.loginState);

  useEffect(() => {
    if (logSlice.loggedIn) {
      navigate("/");
    }
  }, [logSlice.loggedIn, navigate]);

  return (
    <FormContainer>
      <div>
        <LogoContainer>
          <LogoWithLinkView />
        </LogoContainer>

        <FormWithOutLogo>
          <TitleContainer>
            <h1>Вход</h1>
          </TitleContainer>
          <LogInForm />
        </FormWithOutLogo>
      </div>
    </FormContainer>
  );
}
