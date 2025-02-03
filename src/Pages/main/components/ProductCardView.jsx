import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 200px;
  background: var(--black);
  border: 2px solid var(--green);
  box-sizing: content-box;

  .ant-card-meta-detail {
    display: flex;
    justify-content: center;
  }

  .ant-card-body {
    border-top: 2px solid var(--green);
  }

  .ant-card-meta-title {
    color: var(--orange);
  }
`;

export function ProductCardView({ data }) {
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

ProductCardView.propTypes = {
  data: PropTypes.object,
};
