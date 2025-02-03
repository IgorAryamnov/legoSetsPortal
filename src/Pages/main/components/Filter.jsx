import { Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeFilter } from "../../../features/filterStore";
import { useEffect } from "react";

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

  const onChangeNew = () => {
    if (filterSlice.ordering === "-year") {
      dispatch(changeFilter(undefined));
    } else {
      dispatch(changeFilter("-year"));
    }
  };
  const onChangeOld = () => {
    if (filterSlice.ordering === "year") {
      dispatch(changeFilter(undefined));
    } else {
      dispatch(changeFilter("year"));
    }
  };

  useEffect(() => {
    onClick();
  }, [filterSlice.ordering]);

  return (
    <Container>
      <SwitchContainer>
        <SwitchTitle>Сначала старые:</SwitchTitle>
        <StyledSwitch
          checked={!!(filterSlice.ordering === "year")}
          onChange={onChangeOld}
          disabled={disabled}
        />
      </SwitchContainer>
      <SwitchContainer>
        <SwitchTitle>Сначала новые:</SwitchTitle>
        <StyledSwitch
          checked={!!(filterSlice.ordering === "-year")}
          onChange={onChangeNew}
          disabled={disabled}
        />
      </SwitchContainer>
    </Container>
  );
}
