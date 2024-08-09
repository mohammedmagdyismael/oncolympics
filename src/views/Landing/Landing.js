import React from 'react';
import { getTabs } from '../../app/routes';
import { Container, MenuContainer, WebTitle, Tab } from './Landing.style';
 
const Landing = () => {
  const tabs = getTabs();

  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <MenuContainer>
        <WebTitle>
          Oncolympics
        </WebTitle>
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
