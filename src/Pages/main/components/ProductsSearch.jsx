import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../../features/baseApi";
import { addPageWithStructures } from "../../../features/serverResponse";
import { useEffect } from "react";
import { ProductsList } from "./ProductsList";
import PropTypes from "prop-types";
import styled from "styled-components";
import { LoadingSkeletonView } from "./LoadingSkeletonView";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function ProductsSearch({ url, setFetch }) {
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
  useEffect(() => {
    setFetch(isFetching);
  }, [isFetching]);

  return (
    <Container>
      {error ? (
        <p style={{ color: "var(--green)" }}>Oh no, there was an error</p>
      ) : isFetching ? (
        <LoadingSkeletonView />
      ) : (
        <ProductsList />
      )}
    </Container>
  );
}

ProductsSearch.propTypes = {
  url: PropTypes.string,
  setFetch: PropTypes.func,
};
