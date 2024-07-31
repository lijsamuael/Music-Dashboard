// components/Button.tsx
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { theme } from "../styles/theme";

export interface ButtonProps {
  children: React.ReactNode;
}

const ButtonDefault = styled.button`
  padding: 0.85rem 1.3rem;
  border-radius: 0.25rem;
  border: 2px solid transparent;
  font-weight: 500;
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  background-color: transparent;
  color: #000;
  border-color: #000;
  transition: all 0.2s ease-in-out;
`;

const ButtonPrimaryStyled = styled(ButtonDefault)`
  background-color: ${(props) => props.theme.buttons.primary.backgroundColor};
  color: ${(props) => props.theme.buttons.primary.color};
  border-color: ${(props) => props.theme.buttons.primary.borderColor};
  &:hover {
    background-color: ${(props) => props.theme.buttons.primary.borderColor};
    color: white;
  }
`;

const ButtonSecondaryStyled = styled(ButtonDefault)`
  background-color: ${(props) => props.theme.buttons.secondary.backgroundColor};
  color: ${(props) => props.theme.buttons.secondary.color};
  border-color: ${(props) => props.theme.buttons.secondary.borderColor};
`;

export const ButtonPrimary: React.FC<ButtonProps> = ({ children }) => {
  return <ButtonPrimaryStyled>{children}</ButtonPrimaryStyled>;
};

export const ButtonSecondary: React.FC<ButtonProps> = ({ children }) => {
  return <ButtonSecondaryStyled>{children}</ButtonSecondaryStyled>;
};
