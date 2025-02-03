import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LogoWithLinkView } from "../../Components";
import { SuccessFulWindowView } from "./components";
import { RegistrationForm } from "./components";

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

export default function RegistrationPage() {
  const [success, setSuccess] = useState(false);

  let navigate = useNavigate();
  let logSlice = useSelector((state) => state.log.loginState);

  useEffect(() => {
    if (logSlice.loggedIn) {
      navigate("/");
    }
  }, [logSlice.loggedIn, navigate]);

  return (
    <>
      {success ? (
        <SuccessFulWindowView />
      ) : (
        <FormContainer>
          <div>
            <LogoContainer>
              <LogoWithLinkView />
            </LogoContainer>
            <FormWithOutLogo>
              <TitleContainer>
                <h1>Регистрация</h1>
              </TitleContainer>
              <RegistrationForm succ={setSuccess} />
            </FormWithOutLogo>
          </div>
        </FormContainer>
      )}
    </>
  );
}
