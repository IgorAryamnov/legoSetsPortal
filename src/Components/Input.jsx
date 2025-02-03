import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  outline: none;
  border-radius: 6px 0px 0px 6px;
  height: 32px;
  padding: 0px;
  border: 0px;
  box-sizing: border-box;
  border: 1px solid white;
  font-size: 20px;

  &:hover,
  &:focus-visible {
    border: 1px solid var(--green);
  }
`;

export function Input({ value, onChangeValue }) {
  function handleChange(e) {
    onChangeValue(e.target.value);
  }

  return <StyledInput value={value.value} onChange={handleChange} />;
}

Input.propTypes = {
  value: PropTypes.string,
  onChangeValue: PropTypes.func.isRequired,
};
