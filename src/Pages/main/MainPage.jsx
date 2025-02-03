import { createContext, useState } from "react";
import { Filter, ProductsSearch } from "./components";
import { url } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { resetPage } from "../../features/pageCounter";
import { Input } from "../../Components";
import { resetResponse } from "../../features/serverResponse";
import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1120px;
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
  const [checkFetch, setCheckFetch] = useState(false);

  const dispatch = useDispatch();

  const filterSlice = useSelector((state) => state.filterStore.filterState);

  function handleClick() {
    const newUrl = new URL(url);
    if (mainInput !== "") {
      newUrl.searchParams.set("search", mainInput);
    }
    if (filterSlice.ordering) {
      newUrl.searchParams.set("ordering", filterSlice.ordering);
    }

    const newUrlString = newUrl.toString();
    if (newUrlString !== currentURL) {
      setCurrentURL(newUrlString);
      dispatch(resetPage());
      dispatch(resetResponse());
    }
  }

  return (
    <UrlSetContext.Provider value={setCurrentURL}>
      <StyledMain>
        <InputContainer>
          <Input value={mainInput} onChangeValue={setMainInput} />
          <StyledButton onClick={handleClick} disabled={checkFetch}>
            Поиск
          </StyledButton>
        </InputContainer>
        <Filter disabled={checkFetch} onClick={handleClick} />
        <ProductsSearch
          url={currentURL}
          setUrl={setCurrentURL}
          setFetch={setCheckFetch}
        />
      </StyledMain>
    </UrlSetContext.Provider>
  );
}
