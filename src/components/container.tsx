// src/components/Container.tsx
import styled from "@emotion/styled";
import { theme } from "../styles/theme";

const BodyContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 30px;

  @media (min-width: ${theme.breakpoints.md}) {
    pdding: 10px 5px;
  }
`;

export default BodyContainer;
