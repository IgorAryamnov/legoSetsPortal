import { Skeleton } from "antd";

export function ProductSkeletonView({ style }) {
  return (
    <div style={style}>
      <Skeleton.Avatar
        style={{
          height: 200,
          width: 200,
          borderBottom: "1px solid var(--green)",
        }}
      />
      <Skeleton active />
    </div>
  );
}
