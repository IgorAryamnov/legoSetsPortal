import styled from "styled-components";
import { ProductSkeletonView } from "../../../Components/ProductSkeletonView";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const style = {
  width: "200px",
  height: "260px",
  border: "2px solid var(--green)",
  borderRadius: "8px",
  margin: "10px",
  overflow: "hidden",
};

export function LoadingSkeletonView() {
  return (
    <ListContainer>
      <ProductSkeletonView style={style} />
      <ProductSkeletonView style={style} />
      <ProductSkeletonView style={style} />
      <ProductSkeletonView style={style} />
      <ProductSkeletonView style={style} />
      <ProductSkeletonView style={style} />
      <ProductSkeletonView style={style} />
      <ProductSkeletonView style={style} />
      <ProductSkeletonView style={style} />
      <ProductSkeletonView style={style} />
    </ListContainer>
  );
}
