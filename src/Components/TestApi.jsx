import { useDispatch, useSelector } from "react-redux";
import { useGetStructuresQuery } from "../features/baseApi";
import { addPageWithStructures } from "../features/serverResponse";
import { useEffect } from "react";

import { StructuresList } from "./StructuresList";

export function TestApi({ url }) {
  const pageSlice = useSelector((state) => state.page.page);
  const responseSlice = useSelector((state) => state.response.responses);
  console.log("page", pageSlice);
  const { data, error, isLoading } = useGetStructuresQuery(url, {
    skip: !!(!url || responseSlice[pageSlice]),
  });
  const dispatch = useDispatch();
  console.log("data", data);
  console.log("isLoading", isLoading);
  console.log("error", error);

  useEffect(() => {
    if (data) {
      dispatch(addPageWithStructures({ page: pageSlice, data: data }));
    }
  }, [data, dispatch]);

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : (
        <StructuresList />
      )}
    </div>
  );
}
