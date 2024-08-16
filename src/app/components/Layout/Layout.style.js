// Layout.style.js
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  background-image: linear-gradient(to right, white, transparent 125%), url(/assets/image/landing.png);
  width: 100%;
  height: 100vh;
  background-size: cover;

  background-position: center;
  background-attachment: fixed;
  overflow: hidden; 
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 855px) {
    display: none;
  }
`;

export const Tab = styled(NavLink)`
  height: 87px;

  color: #282c34;

  text-decoration: none;
  font-size: 1.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-weight: bold;

  &.active {
    font-weight: bold;
    border-bottom: 5px solid #282c34;
  }

  &:hover {
    color: #61dafb;
  }
`;

export const LogoutContainer = styled.div`
    color: #282c34;
    font-size: 1.2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
`;

export const UserInfoContainr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 48px;
`;

export const UserInfoInnerContainr = styled.div`
  display: flex;
  flex-direction: row;  
  justify-content: center;
`;

export const UserLogo = styled.img`
  width: 40px;
  height: 40px;
  background: #ffff;
  border-radius: 50%;
  padding: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

`;

export const UserName = styled.p`
  font-weight: 700;
  margin: auto 16px;
  font-size: 18px;
  height: fit-content;
`;

export const OncoLogo = styled.img`
    width: 140px;
    display: flex;
    margin-top: 10px;
    cursor: pointer;
`;

export const ChildrenContainer = styled.div`
  padding-top: 20px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #9c9c9c;
    border-radius: 15px;
  }
`;