/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = styled.nav`
  display: flex;
  width: 100vw;
  max-width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  background-color: #6200ea;
  padding: 1rem 2rem;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: white;
  }
`;

const NavLinkContainer = styled.div`
  display: flex;

  @media (max-width: 500px) {
    display: none;
  }
`;

const abebe = css`
  padding-top: 10px;
`;

const slideIn = keyframes`
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
`;

const slideOut = keyframes`
  from {
    right: 0;
  }
  to {
    right: -100%;
  }
`;

const HamburgerMenuIcon = styled.img`
  display: none;
  cursor: pointer;

  @media (max-width: 500px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: #6200ea;
  position: fixed;
  top: 60px;
  right: 0;
  height: 100vh;
  width: 80%;
  max-width: 150px;
  padding: 2rem 1rem;
  box-sizing: border-box;
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s forwards;

  @media (min-width: 501px) {
    display: none;
  }
`;

const NavbarComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Navbar>
      <div css={abebe}>Music App</div>
      <NavLinkContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/songs">Songs</NavLink>
        <NavLink to="/statistics">Statistics</NavLink>
      </NavLinkContainer>
      <HamburgerMenuIcon
        src={
          isMobileMenuOpen
            ? "/public/icons/close-dark.png"
            : "/public/icons/filter-dark.png"
        }
        alt="Menu"
        width={30}
        onClick={toggleMobileMenu}
      />
      <MobileMenu isOpen={isMobileMenuOpen}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/songs">Songs</NavLink>
        <NavLink to="/statistics">Statistics</NavLink>
      </MobileMenu>
    </Navbar>
  );
};

export default NavbarComponent;
