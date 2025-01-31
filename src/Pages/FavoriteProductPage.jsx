import { useNavigate, useParams } from "react-router-dom";
import { ProductPageData } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useLayoutEffect } from "react";
import { useGetFavoriteProductQuery } from "../features/baseApi";
import { addToSingleStore } from "../features/singleProductStore";

export default function FavoriteProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favoriteSlice = useSelector(
    (state) => state.favoriteProducts.favoriteProducts
  );
  const globalFavoriteSlice = useSelector((state) => state.favorite.favorite);
  const loginSlice = useSelector((state) => state.log.loginState);
  const singleStoreSlice = useSelector(
    (state) => state.singleStore.singleProductStore[id]
  );

  const dataFromStore = favoriteSlice[loginSlice.user]?.find(
    (value) => value.set_num === id
  );

  const { data, error, isFetching } = useGetFavoriteProductQuery(
    "https://rebrickable.com/api/v3/lego/sets/" + id,
    { skip: !!dataFromStore || !!singleStoreSlice }
  );

  const favoriteCheck = globalFavoriteSlice[loginSlice.user]?.find(
    (value) => value === id
  );

  useEffect(() => {
    if (data) {
      dispatch(addToSingleStore(data));
    }
  }, [data]);
  useLayoutEffect(() => {
    if (!loginSlice.user) {
      navigate("/authorization");
    }
  }, [loginSlice]);

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
          data={dataFromStore || singleStoreSlice || data}
          inFavorite={!!favoriteCheck}
          loginSlice={loginSlice}
        />
      )}
    </>
  );
}
