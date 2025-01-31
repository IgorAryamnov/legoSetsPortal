import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 200px;
  background: #272727;
  border: 2px solid #14a76c;
  box-sizing: content-box;

  .ant-card-meta-detail {
    display: flex;
    justify-content: center;
  }
  .ant-card-body {
    border-top: 2px solid #14a76c;
  }
  .ant-card-meta-title {
    color: #ff652f;
  }
`;

export function ProductCard({ data }) {
  return (
    <StyledCard
      cover={
        <img
          width={200}
          height={200}
          alt="product_image"
          src={data.set_img_url}
        />
      }
    >
      <Meta title={data.name} />
    </StyledCard>
  );
}

ProductCard.propTypes = {
  data: PropTypes.object,
};
