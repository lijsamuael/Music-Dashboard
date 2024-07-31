import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import { ButtonPrimary, ButtonSecondary } from "../components/button";
import { Link } from "react-router-dom";

const AppTitleText = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1.3;
  color: white;
  span {
    color: ${theme.colors.primary};
  }
`;

const CoverContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: start;
  align-items: center;
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const AppCoverContainerText = styled.div`
  p {
    width: auto;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    ${theme.breakpoints.sm} {
      max-width: 80%;
    }
  }
  button:last-child {
    margin-left: 1rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: start;

  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const Paragraph = styled.p`
  padding-top: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const HomePage = () => {
  return (
    <CoverContent>
      <AppCoverContainerText>
        <AppTitleText>Enjoy now</AppTitleText>
        <AppTitleText>
          My <span>Musics</span>
        </AppTitleText>
        <AppTitleText>The Ease Access</AppTitleText>
        <Paragraph>
          This is a mini music app which enables you to add, update and delete
          your lists of products. In addition to that it allows you to capture
          the basic statisticall info.
        </Paragraph>
        <ButtonsContainer>
          <StyledLink to="/songs">
            <ButtonPrimary>ADD SONG</ButtonPrimary>
          </StyledLink>
          <StyledLink to="/statistics">
            <ButtonSecondary>STATISTICS</ButtonSecondary>
          </StyledLink>
        </ButtonsContainer>
      </AppCoverContainerText>
      <img width={500} src="/images/image.png" />
    </CoverContent>
  );
};

export default HomePage;
