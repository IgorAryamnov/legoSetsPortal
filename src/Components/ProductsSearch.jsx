import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../features/baseApi";
import { addPageWithStructures } from "../features/serverResponse";
import { useEffect } from "react";
import { ProductsList } from "./ProductsList";
import PropTypes from "prop-types";

export function ProductsSearch({ url }) {
  const dispatch = useDispatch();

  const pageSlice = useSelector((state) => state.page.page);
  const responseSlice = useSelector((state) => state.response.responses);

  const { data, error, isFetching } = useGetProductsQuery(url, {
    skip: !!(!url || responseSlice[pageSlice]),
  });

  useEffect(() => {
    if (data) {
      dispatch(addPageWithStructures({ page: pageSlice, data: data }));
    }
  }, [data]);

  return (
    <div>
      {error ? (
        <p style={{ color: "#14a76c" }}>Oh no, there was an error</p>
      ) : isFetching ? (
        <p style={{ color: "#14a76c" }}>Loading...</p>
      ) : (
        <>
          <ProductsList />
        </>
      )}
    </div>
  );
}

ProductsSearch.propTypes = {
  url: PropTypes.string,
};
