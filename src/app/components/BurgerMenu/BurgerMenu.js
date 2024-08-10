// BurgerMenu.js
import React, { useState } from 'react';
import {
  BurgerIcon,
  Container,
  LogoutContainer,
  MenuTitle,
  SideMenu,
  Tab,
  Title,
} from './BurgerMenu.style';

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
