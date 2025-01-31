import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { ProductPageData } from "../Components";
import { useGetFavoriteProductQuery } from "../features/baseApi";
import { addToSingleStore } from "../features/singleProductStore";

export default function ProductPage() {
  let { page, id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productSlice = useSelector((state) =>
    state.response.responses[page]?.results.find(
      (value) => value.set_num === id
    )
  );
  const loginSlice = useSelector((state) => state.log.loginState);
  const favoriteSlice = useSelector((state) => state.favorite.favorite);
  const singleStoreSlice = useSelector(
    (state) => state.singleStore.singleProductStore[id]
  );

  let inFavorite = false;

  if (favoriteSlice[loginSlice.user]) {
    if (favoriteSlice[loginSlice.user].indexOf(productSlice?.set_num) !== -1) {
      inFavorite = true;
    }
    if (singleStoreSlice) {
      if (
        favoriteSlice[loginSlice.user].indexOf(singleStoreSlice?.set_num) !== -1
      ) {
        inFavorite = true;
      }
    }
  }

  const { data, error, isFetching } = useGetFavoriteProductQuery(
    "https://rebrickable.com/api/v3/lego/sets/" + id,
    { skip: !!productSlice || !!singleStoreSlice }
  );

  useEffect(() => {
    if (data) {
      dispatch(addToSingleStore(data));
    }
  }, [data]);
  useEffect(() => {
    if (error) {
      navigate("*");
    }
  }, [error]);

  return (
    <>
      {error ? (
        <p style={{ color: "#14a76c", textAlign: "center", marginTop: 20 }}>
          Oh no, there was an error
        </p>
      ) : isFetching ? (
        <p style={{ color: "#14a76c", textAlign: "center", marginTop: 20 }}>
          Loading...
        </p>
      ) : (
        <ProductPageData
          data={productSlice || data || singleStoreSlice}
          inFavorite={inFavorite}
          loginSlice={loginSlice}
        />
      )}
    </>
  );
}
