// Layout.js
import React, { useEffect, useState } from 'react';
import { getTabs } from '../../routes';
import { userInfoAPI } from '../../api/User';
import Cookies from 'js-cookie';
import BurgerMenu from '../BurgerMenu';
import { AuthPathes } from './helper';
import { LogoutContainer,LayoutContainer, Tab, TabContainer, UserInfoContainr, UserLogo, UserName, UserInfoInnerContainr } from './Layout.style';

const Layout = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const role = Cookies.get('role');

  if (!role && AuthPathes.includes(String(window.location.pathname.split('/')[1]).toLowerCase())) {
    window.location.href = '/login';
  }

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await userInfoAPI();
        setUserInfo(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserInfo();
  }, []);

  

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

  const tabs = getTabs(role);

  return (
    <LayoutContainer>
      <BurgerMenu items={tabs} title={`Hi! ${userInfo?.name}`} isLogged={!!role} handleLogin={handleLogin} handleLogout={handleLogout} />
      <TabContainer>
        {tabs?.map(tab => (
          <Tab exact to={tab.route} activeClassName="active">
            {tab.label}
          </Tab>
        ))}
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

        <UserInfoContainr>
          {userInfo && (
            <UserInfoInnerContainr>
              <UserName>{`Hi! ${userInfo?.name}`}</UserName>
              {!!userInfo.logo && (<UserLogo src={`/assets/image/${userInfo?.logo}`} alt='user_logo' />)}
            </UserInfoInnerContainr>
          )}
        </UserInfoContainr>
      
      </TabContainer>
      

      <div style={{ background: '#f0f2f5', paddingTop: '20px' }}>
        {children}
      </div>
    </LayoutContainer>
  );
};

export default Layout;
