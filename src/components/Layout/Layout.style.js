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
  padding: 1rem;
`;

export const Tab = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &.active {
    font-weight: bold;
    border-bottom: 2px solid #61dafb;
  }

  &:hover {
    color: #61dafb;
  }
`;
