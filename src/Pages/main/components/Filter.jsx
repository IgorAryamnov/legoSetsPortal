import { Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeFilter } from "../../../features/filterStore";
import { useEffect, useMemo } from "react";

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 10px 0px 10px;
`;
const SwitchTitle = styled.p`
  color: var(--orange);
  margin-right: 10px;
`;
const Container = styled.div`
  display: flex;
`;
const StyledSwitch = styled(Switch)`
  &.ant-switch-checked {
    background: var(--green);
  }
`;

export function Filter({ disabled, onClick }) {
  const dispatch = useDispatch();
  const filterSlice = useSelector((state) => state.filterStore.filterState);

  function filter(state) {
    if (filterSlice === state) {
      dispatch(changeFilter(undefined));
    } else {
      dispatch(changeFilter(state));
    }

    onClick(filterSlice === state ? undefined : state);
  }

  return (
    <Container>
      <SwitchContainer>
        <SwitchTitle>Сначала старые:</SwitchTitle>
        <StyledSwitch
          checked={!!(filterSlice === "year")}
          onChange={() => filter("year")}
          disabled={disabled}
        />
      </SwitchContainer>
      <SwitchContainer>
        <SwitchTitle>Сначала новые:</SwitchTitle>
        <StyledSwitch
          checked={!!(filterSlice === "-year")}
          onChange={() => filter("-year")}
          disabled={disabled}
        />
      </SwitchContainer>
    </Container>
  );
}
