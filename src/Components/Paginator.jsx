import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import styled from "styled-components";

const PaginatorContainer = styled.div`
  display: flex;
  align-items: center;
`;
const PageCounter = styled.p`
  margin: 0px;
  font-size: 20px;
  margin-bottom: 4px;
  color: var(--orange);
`;
const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0px;
  margin: 10px 10px 10px 10px;
  outline: none;

  .anticon {
    color: var(--green);
    &.anticon svg {
      width: 20px;
      height: 20px;
    }
  }

  &:hover,
  &:focus-visible {
    cursor: pointer;

    .anticon {
      color: var(--grey);
    }
  }
`;

export function Paginator({
  counter,
  leftCircleFunction,
  rightCircleFunction,
}) {
  return (
    <PaginatorContainer>
      <StyledButton
        onClick={() => {
          leftCircleFunction();
        }}
      >
        <LeftCircleOutlined />
      </StyledButton>
      <PageCounter>{counter}</PageCounter>
      <StyledButton
        onClick={() => {
          rightCircleFunction();
        }}
      >
        <RightCircleOutlined />
      </StyledButton>
    </PaginatorContainer>
  );
}

Paginator.propTypes = {
  counter: PropTypes.number,
  leftCircleFunction: PropTypes.func,
  rightCircleFunction: PropTypes.func,
};
