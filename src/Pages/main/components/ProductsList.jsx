import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { decreasePage, increasePage } from "../../../features/pageCounter";
import { useContext } from "react";
import { UrlSetContext } from "../MainPage";
import { ProductCardView } from "./ProductCardView";
import { Paginator } from "../../../Components/Paginator";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ProductsCount = styled.p`
  color: var(--green);
  margin-top: 0px;
`;
const StyledLink = styled(Link)`
  margin: 10px;
  text-decoration: none;
  outline: none;

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

  function buttonDecreasedClick() {
    if (pageSlice === 1) {
      return;
    }
    dispatch(decreasePage());
  }

  function buttonIncreasedClick() {
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
    <>
      <ProductsCount>{`Показано ${
        (pageSlice - 1) * 10 + responseSlice[pageSlice].results.length
      } из ${responseSlice[pageSlice].count} товаров`}</ProductsCount>
      {responseSlice[pageSlice].count === 0 ? (
        <ProductsCount style={{ color: "var(--orange)" }}>
          Увы, по данному запросу ничего не найдено.
        </ProductsCount>
      ) : (
        <ListContainer>
          {responseSlice[pageSlice].results.map((value, index) => {
            let link = `${pageSlice}/${value.set_num}`;

            return (
              <StyledLink
                style={{
                  margin: 10,
                  textDecoration: "none",
                  outline: "none",
                }}
                key={value.set_num}
                to={link}
              >
                <ProductCardView data={value} />
              </StyledLink>
            );
          })}
        </ListContainer>
      )}
      <Paginator
        counter={pageSlice}
        leftCircleFunction={buttonDecreasedClick}
        rightCircleFunction={buttonIncreasedClick}
      />
    </>
  );
}
