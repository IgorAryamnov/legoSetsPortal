import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export function StructurePage() {
  let { page, id } = useParams();
  let navigate = useNavigate();
  const structuresSlice = useSelector(
    (state) => state.response.responses[page]?.data[id]
  );
  console.log(structuresSlice);
  useEffect(() => {
    if (!structuresSlice) {
      navigate("*");
    }
  }, []);

  if (!structuresSlice) {
    return null;
  }
  return <>{structuresSlice.name}</>;
}
