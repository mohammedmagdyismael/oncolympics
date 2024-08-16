import React from 'react';
import { getTabs } from '../../app/routes';
import { Container, MenuContainer, Tab, AstraLogo, OncoLogo } from './Landing.style';
 
const Landing = () => {
  const tabs = getTabs();

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <MenuContainer>
        <OncoLogo src={`/assets/image/Oncolympics Logo.png`} alt='Oncolympics_Logo' />

        {tabs?.map((tab, index) => (
          <Tab exact to={tab.route} activeClassName="active">
            {tab.label}
          </Tab>
        ))}
      </MenuContainer>
    </div>
    </Container>
  );
};

export default Landing;
