// BurgerMenu.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


// Styled components for burger icon and menu
const BurgerIcon = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  cursor: pointer;
  
  div {
    width: 30px;
    height: 3px;
    background-color: ${({ isOpen }) => isOpen ? '#fff' : '#1A4870'};
    margin: 5px 0;
    transition: 0.3s;
    
    &:nth-child(1) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translateY(12px)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    }
    
    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translateY(-11px)' : 'rotate(0)'};
    }
  }
`;

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => isOpen ? '0' : '-100%'};
  width: 250px;
  height: 100%;
  background-color: #1A4870;
  color: white;
  transition: 0.3s;
  padding: 75px 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin: 20px 0;
    }
  }
`;

const Container = styled.div`
    display: none;
    @media only screen and (max-width: 855px) {
        display: block;
        background-color: #fff;
        height: 73px;
        width: 100%;
        position: sticky;
        top: 0;
    }
`;


export const Tab = styled(NavLink)`
  height: 60px;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &.active {
    font-weight: bold;
    color: #61dafb;
    font-size: 1.4rem;
  }
`;

const MenuTitle = styled.p`
    font-size: 22px;
    font-weight: bold;
`;

const LogoutContainer = styled.div`
    color: white;
    font-size: 1.2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
`;

const Title = styled.p`
    font-size: 28px;
    font-weight: 700;
    margin: 14px 0;
    width: 100%;
    text-align: center;
    color: #1A4870;
`;

const BurgerMenu = ({ items, title, isLogged, handleLogout, handleLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Container>
      <BurgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </BurgerIcon>
      <Title>
        Oncolympics
      </Title>

      <SideMenu isOpen={isOpen}>
            <MenuTitle>{title}</MenuTitle>
            {items?.map(tab => (
                <Tab exact to={tab.route} activeClassName="active">
                    {tab.label}
                </Tab>
            ))}
            {isLogged && (
                <LogoutContainer onClick={handleLogout}>
                    Logout
                </LogoutContainer>
                )}
                {!isLogged && (
                <LogoutContainer onClick={handleLogin}>
                    Login
                </LogoutContainer>
                )}
      </SideMenu>
    </Container>
  );
};

export default BurgerMenu;
