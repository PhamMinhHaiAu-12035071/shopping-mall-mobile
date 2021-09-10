import styled, { css } from "styled-components";

const CSSIcon = css`
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
`;
const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
const LeftIcon = styled.div`
  ${CSSIcon};
`;

const Title = styled.div`
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightIcon = styled.div`
  ${CSSIcon};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export { Container, LeftIcon, RightIcon, Title };
