import { Mosaic } from "react-loading-indicators";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export function SuspenseFallback() {
  return (
    <Container>
      <Mosaic color="var(--green)" size="medium" text="" textColor="" />
    </Container>
  );
}
