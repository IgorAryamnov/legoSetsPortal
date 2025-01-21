import { useState } from "react";
import { LogInForm, RegistrationForm } from "../Components";
import { SuccessFullWindow } from "../Components/SuccessfullWindow";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

export function AuthorizationPage() {
  const [formState, setFromState] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <>
      {success ? (
        <SuccessFullWindow />
      ) : (
        <FormContainer>
          <div>
            <LogoContainer>
              <Link to="/">Логотип</Link>
            </LogoContainer>
            <h1 style={{ color: "#747474" }}>Вход и регистрация</h1>
            {formState ? (
              <RegistrationForm changeForm={setFromState} succ={setSuccess} />
            ) : (
              <LogInForm changeForm={setFromState} />
            )}
          </div>
        </FormContainer>
      )}
    </>
  );
}
