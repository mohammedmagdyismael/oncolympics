// Layout.style.js
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #282c34;

  @media only screen and (max-width: 855px) {
    display: none;
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
    border-bottom: 5px solid #61dafb;
  }

  &:hover {
    color: #61dafb;
  }
`;

export const LogoutContainer = styled.div`
    color: white;
    font-size: 1.2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
`;

export const UserInfoContainr = styled.div`
  display: flex;
  justify-content: flex-end;
  background: #fff0;
  position: absolute;
  right: 0;
  top: 65px;
  min-height: 48px;
`;

export const UserInfoInnerContainr = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 40px 0;
`;

export const UserLogo = styled.img`
  width: 28px;
`;

export const UserName = styled.p`
  margin: 0;
  font-weight: 700;
  margin: 0px 16px;
  line-height: 26px;
  font-size: 16px;
`;