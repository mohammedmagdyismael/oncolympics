// Layout.js
import React from 'react';
import { LayoutContainer, Tab, TabContainer } from './Layout.style';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <TabContainer>
      <Tab exact to="/groups" activeClassName="active">
          Groups
        </Tab>
        <Tab exact to="/standings" activeClassName="active">
          Standards
        </Tab>
        <Tab exact to="/matchmoderator" activeClassName="active">
          Match Moderator
        </Tab>
        <Tab exact to="/currentmatch" activeClassName="active">
          Current Match
        </Tab>
      </TabContainer>
      <div>
        {children}
      </div>
    </LayoutContainer>
  );
};

export default Layout;
