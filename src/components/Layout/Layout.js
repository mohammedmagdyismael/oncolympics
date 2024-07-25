// Layout.js
import React from 'react';
import Cookies from 'js-cookie';
import { AuthPathes } from './helper';
import { LogoutContainer,LayoutContainer, Tab, TabContainer } from './Layout.style';

const Layout = ({ children }) => {
  const role = Cookies.get('role');

  if (!role && AuthPathes.includes(String(window.location.pathname.split('/')[1]).toLowerCase())) {
    window.location.href = '/login';
  }

  const handleLogout = () => {
    // Remove all cookies
    Cookies.remove('username');
    Cookies.remove('token');
    Cookies.remove('role');

    window.location.href = '/';
  };

  const handleLogin = () => {
    window.location.href = '/login';
  };

  return (
    <LayoutContainer>
      <TabContainer>
      <Tab exact to="/groups" activeClassName="active">
          Groups
        </Tab>
        <Tab exact to="/standings" activeClassName="active">
          Standings
        </Tab>
        {role === 'Admin' && (
          <Tab exact to="/matchmoderator" activeClassName="active">
            Match Moderator
          </Tab>
        )}
        {role === 'Team' && (
          <Tab exact to="/currentmatch" activeClassName="active">
            Current Match
          </Tab>
        )}
        {!!role && (
          <LogoutContainer onClick={handleLogout}>
            Logout
          </LogoutContainer>
        )}
        {!role && (
          <LogoutContainer onClick={handleLogin}>
            Login
          </LogoutContainer>
        )}
      </TabContainer>
      <div>
        {children}
      </div>
    </LayoutContainer>
  );
};

export default Layout;
