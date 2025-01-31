import { useDispatch, useSelector } from "react-redux";
import { useGetFavoriteProductQuery } from "../features/baseApi";
import { useEffect } from "react";
import { addToFavoriteProducts } from "../features/favoriteFullInformation";
import { FavoriteProduct } from "./FavoriteProduct";
import PropTypes from "prop-types";
import styled from "styled-components";

const Message = styled.p`
  color: var(--green);
`;
export function FavoriteProductSearch({ id, user }) {
  const dispatch = useDispatch();

  let reduxCheck = false;
  let dataFromRedux = undefined;

  const favoriteSlice = useSelector(
    (state) => state.favoriteProducts.favoriteProducts
  );

  if (favoriteSlice[user]) {
    let currentProduct = favoriteSlice[user].find(
      (value) => value.set_num === id
    );

    if (currentProduct) {
      reduxCheck = true;
      dataFromRedux = currentProduct;
    }
  }

  const { data, error, isFetching } = useGetFavoriteProductQuery(
    "https://rebrickable.com/api/v3/lego/sets/" + id,
    { skip: reduxCheck }
  );

  useEffect(() => {
    if (data) {
      dispatch(
        addToFavoriteProducts({ user: user, favoriteInformation: data })
      );
    }
  }, [data]);

  return (
    <>
      {error ? (
        <Message>Oh no, there was an error</Message>
      ) : isFetching ? (
        <Message>Loading...</Message>
      ) : (
        <FavoriteProduct
          data={{ user: user, product: data || dataFromRedux }}
        />
      )}
    </>
  );
}

FavoriteProductSearch.propTypes = {
  id: PropTypes.string,
  user: PropTypes.string,
};
