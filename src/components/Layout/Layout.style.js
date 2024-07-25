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
