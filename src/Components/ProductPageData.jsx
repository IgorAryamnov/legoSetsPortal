import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addToFavorite, deleteFromFavorite } from "../features/favoriteStore";
import { useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  margin-top: 30px;
`;
const ProductDescriptionContainer = styled.div`
  .product-name,
  &.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
  &.container {
    border: 2px solid var(--green);
    border-radius: 30px;
    margin: 0px 20px 0px 20px;
  }
`;
const Divider = styled.div`
  width: 90%;
  height: 2px;
  background-color: var(--green);
  border-radius: 2px;
`;
const StyledButton = styled.button`
  font-size: 30px;
  border: 1px solid var(--orange);
  outline: none;
  background-color: var(--orange);
  margin-top: 20px;
  padding: 10px;
  border-radius: 20px;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    border: 1px solid var(--green);
    color: var(--grey);
  }
`;
const StyledDescription = styled.p`
  color: var(--orange);
`;
const DescriptionTitle = styled.p`
  color: var(--green);
  margin-bottom: 0px;
`;

export function ProductPageData({ data, inFavorite, loginSlice }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checkFavorite, setCheckFavorite] = useState(inFavorite);

  useLayoutEffect(() => {
    setCheckFavorite(inFavorite);
  }, [inFavorite]);

  return (
    <Container>
      <img
        height="700px"
        width="700px"
        src={data.set_img_url}
        alt="product-img"
      />
      <ProductDescriptionContainer className="container">
        <h1 style={{ color: "#ffe400" }}>Информация о наборе</h1>
        <div className="product-name">
          <Divider />
          <DescriptionTitle>Артикул:</DescriptionTitle>
          <StyledDescription>{data.set_num}</StyledDescription>
        </div>
        <div className="product-name">
          <Divider />
          <DescriptionTitle>Название набора:</DescriptionTitle>
          <StyledDescription>{data.name}</StyledDescription>
        </div>
        <div className="product-name">
          <Divider />
          <DescriptionTitle>Количество деталей в наборе:</DescriptionTitle>
          <StyledDescription>{data.num_parts}</StyledDescription>
        </div>
        <div className="product-name">
          <Divider />
          <DescriptionTitle>Год выпуска:</DescriptionTitle>
          <StyledDescription>{data.year}</StyledDescription>
          <Divider />
        </div>
        {loginSlice.loggedIn ? (
          checkFavorite ? (
            <StyledButton
              onClick={() => {
                dispatch(
                  deleteFromFavorite({
                    user: loginSlice.user,
                    favoriteId: data.set_num,
                  })
                );
                setCheckFavorite(false);
              }}
            >
              Удалить из избранного
            </StyledButton>
          ) : (
            <StyledButton
              onClick={() => {
                dispatch(
                  addToFavorite({
                    user: loginSlice.user,
                    favoriteId: data.set_num,
                  })
                );
                setCheckFavorite(true);
              }}
            >
              Добавить в избранное
            </StyledButton>
          )
        ) : (
          <StyledButton
            onClick={() => {
              navigate("/authorization");
            }}
          >
            Добавить в избранное
          </StyledButton>
        )}
      </ProductDescriptionContainer>
    </Container>
  );
}

ProductPageData.propTypes = {
  data: PropTypes.object,
  inFavorite: PropTypes.bool,
  loginSlice: PropTypes.object,
};
