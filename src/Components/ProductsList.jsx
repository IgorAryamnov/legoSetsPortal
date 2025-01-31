import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { decreasePage, increasePage } from "../features/pageCounter";
import { useContext } from "react";
import { UrlSetContext } from "../Pages/MainPage";
import { ProductCard } from "./ProductCard";
import { Paginator } from "./Paginator";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProductsCount = styled.p`
  color: #14a76c;
  margin-top: 0px;
`;
const StyledLink = styled(Link)`
  &:hover,
  &:focus-visible {
    cursor: pointer;
    transform: perspective(100px) translateZ(10px);
  }
`;

export function ProductsList() {
  const pageSlice = useSelector((state) => state.page.page);
  const responseSlice = useSelector((state) => state.response.responses);
  const setNewUrl = useContext(UrlSetContext);
  const dispatch = useDispatch();

  function ButtonDecreasedClick() {
    if (pageSlice === 1) {
      return;
    }
    dispatch(decreasePage());
  }

  function ButtonIncreasedClick() {
    let newUrl = responseSlice[pageSlice].next;
    if (newUrl === null) {
      return;
    }
    setNewUrl(newUrl);
    dispatch(increasePage());
  }

  if (!responseSlice[pageSlice]) {
    return null;
  }

  return (
    <Container>
      <ProductsCount>{`Показано ${pageSlice * 10} из ${
        responseSlice[pageSlice].count
      } товаров`}</ProductsCount>
      <ListContainer>
        {responseSlice[pageSlice].results.map((value, index) => {
          let link = `${pageSlice}/${value.set_num}`;

          return (
            <StyledLink
              style={{ margin: 10, textDecoration: "none", outline: "none" }}
              key={value.set_num}
              to={link}
            >
              <ProductCard data={value} />
            </StyledLink>
          );
        })}
      </ListContainer>
      <Paginator
        counter={pageSlice}
        leftCircleFunction={ButtonDecreasedClick}
        rightCircleFunction={ButtonIncreasedClick}
      />
    </Container>
  );
}
