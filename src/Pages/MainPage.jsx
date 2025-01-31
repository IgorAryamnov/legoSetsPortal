import { createContext, useState } from "react";
import { ProductsSearch } from "../Components/ProductsSearch";
import { url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { resetPage } from "../features/pageCounter";
import { Input } from "../Components";
import { resetResponse } from "../features/serverResponse";
import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;
const InputContainer = styled.div`
  display: flex;
  margin: 30px 0px 20px 0px;
`;
const StyledButton = styled.button`
  outline: none;
  border: 1px solid var(--orange);
  background: var(--orange);
  height: 32px;
  box-sizing: border-box;
  border-radius: 0px 6px 6px 0px;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    border: 1px solid var(--green);
    box-shadow: none;
  }
`;

export const UrlSetContext = createContext();

export default function MainPage() {
  const [currentURL, setCurrentURL] = useState("");
  const [mainInput, setMainInput] = useState("");

  const dispatch = useDispatch();

  function HandleClick() {
    if (mainInput !== "") {
      let newUrl = new URL(url);
      newUrl.searchParams.set("search", mainInput);

      setCurrentURL(newUrl.toString());
      dispatch(resetPage());
      dispatch(resetResponse());
    } else {
      setCurrentURL(url);
      dispatch(resetPage());
      dispatch(resetResponse());
    }
  }

  return (
    <UrlSetContext.Provider value={setCurrentURL}>
      <StyledMain>
        <InputContainer>
          <Input value={mainInput} changeValue={setMainInput} />
          <StyledButton onClick={HandleClick}>Поиск</StyledButton>
        </InputContainer>
        <ProductsSearch url={currentURL} setUrl={setCurrentURL} />
      </StyledMain>
    </UrlSetContext.Provider>
  );
}
