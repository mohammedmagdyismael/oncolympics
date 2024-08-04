// Layout.js
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { AuthPathes } from './helper';
import { LogoutContainer,LayoutContainer, Tab, TabContainer, UserInfoContainr, UserLogo, UserName, UserInfoInnerContainr } from './Layout.style';

const Layout = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const role = Cookies.get('role');

  if (!role && AuthPathes.includes(String(window.location.pathname.split('/')[1]).toLowerCase())) {
    window.location.href = '/login';
  }

  useEffect(() => {
    // Fetch groups data from API
    const fetchUserInfo = async () => {
      try {
        if (Cookies.get('token')) {
          const response = await axios.get('https://oncolympics-api.onrender.com/api/users/userInfo', {
            headers: {
                'token': Cookies.get('token'),
            }
          });
          console.log(response?.data?.data);
          setUserInfo(response?.data?.data);
        }
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

  return (
    <LayoutContainer>
      <TabContainer>
        <Tab exact to="/groups" activeClassName="active">
          Groups
        </Tab>
        <Tab exact to="/knockouts" activeClassName="active">
          Knockouts
        </Tab>
        <Tab exact to="/matches" activeClassName="active">
          Matches
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
