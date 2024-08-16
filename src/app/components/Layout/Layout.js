// Layout.js
import React, { useEffect, useState } from 'react';
import { getTabs } from '../../routes';
import { userInfoAPI } from '../../api/User';
import Cookies from 'js-cookie';
import BurgerMenu from '../BurgerMenu';
import { AuthPathes } from './helper';
import { 
  LoginContainer, 
  ChildrenContainer,
  OncoLogo,
  LogoutContainer,
  LayoutContainer,
  Tab,
  TabContainer,
  UserInfoContainr,
  UserLogo,
  UserName,
  UserInfoInnerContainr, 
} from './Layout.style';

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
      <BurgerMenu items={tabs} title={`Hi! ${userInfo?.name || ''}`} isLogged={!!role} handleLogin={handleLogin} handleLogout={handleLogout} />
      <TabContainer>
        <OncoLogo onClick={() => {
          window.location.href = '/';
        }} src={`/assets/image/Oncolympics Logo.png`} alt='Oncolympics_Logo' />
        {tabs?.map(tab => (
          <Tab exact to={tab.route} activeClassName="active">
            {tab.label}
          </Tab>
        ))}
        {!role && (
          <LoginContainer onClick={handleLogin}>
            Login
          </LoginContainer>
        )}

        {!!role && (
          <UserInfoContainr>
            {userInfo ? (
              <UserInfoInnerContainr>
                <UserName>{`Hi! ${userInfo?.name}`}</UserName>
                {!!userInfo.logo && (<UserLogo src={`/assets/teamslogos/${userInfo?.logo}`} alt='user_logo' />)}
              </UserInfoInnerContainr>
            ): (
              <UserInfoInnerContainr>
                <UserName>{`. . .`}</UserName>
              </UserInfoInnerContainr>
            )}
            {userInfo && (
            <LogoutContainer id='logout' onClick={handleLogout}>
              Logout
            </LogoutContainer>
          )}
          </UserInfoContainr>
        )}
      
      </TabContainer>
      

      <ChildrenContainer>
        {children}
      </ChildrenContainer>
    </LayoutContainer>
  );
};

export default Layout;
