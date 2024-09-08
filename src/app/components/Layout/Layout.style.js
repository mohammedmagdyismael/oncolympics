// Layout.style.js
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  ${props => !props.hidebackground && `
      background-image: linear-gradient(to right, white, transparent 125%), url(/assets/image/landing.png);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-size: 100vw 100vh;
      background-position: center top;
      background-repeat: no-repeat;

  `}
  width: 100%;
  height: 100vh;
  
  overflow: hidden; 
`;

export const TabContainer = styled.div`
  display: flex;
  position: relative;
  @media only screen and (max-width: 855px) {
    display: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 26px auto;
`;

export const Tab = styled(NavLink)`
  box-shadow: 0 0 25px rgb(0 0 0 / 25%);
  border-radius: 8px;
  text-align: center;
  width: 150px;
  text-decoration: none;
  flex-direction: column;
  margin: auto 0;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border: none;
  border-radius: 3.625rem;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-weight: 700;
  height: 2.5rem;
  justify-content: center;
  padding: 0px 1rem;
  text-transform: uppercase;
  white-space: nowrap;
  z-index: 1;
  color: rgb(0, 0, 0);
  font-family: "Source Sans Pro Paris2024", "Olympic Sans", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  font-weight: bold;
  color: #369DA0;
  &.active {
    color: #ffff;
    background: #369DA0;
  }
`;

export const LoginContainer = styled.div`
  margin: auto 0;
  align-items: center;
  border: none;
  border-radius: 3.625rem;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-weight: 700;
  height: 2.5rem;
  justify-content: center;
  padding: 0px 1rem;
  text-transform: uppercase;
  white-space: nowrap;
  z-index: 1;
  color: rgb(0, 0, 0);
  font-family: "Source Sans Pro Paris2024", "Olympic Sans", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  font-weight: bold;
  background: #890053;
  color: #fff;
  text-align: center;
  width: 150px;
`;

export const LogoutContainer = styled.div`
    color: #282c34;
    flex-direction: column;
    margin: auto 0;
    align-items: center;
    background-color: rgb(255, 255, 255);
    border: none;
    border-radius: 3.625rem;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    height: 2.5rem;
    justify-content: center;
    padding: 0px 1rem;
    text-transform: uppercase;
    white-space: nowrap;
    z-index: 1;
    color: rgb(0, 0, 0);
    font-family: "Source Sans Pro Paris2024", "Olympic Sans", Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    font-weight: bold;
    background: black;
    color: #fff;
    position: absolute;
    right: 0;
    top: 5px;
    transition: top 0.7s;
`;

export const UserInfoContainr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 48px;

  color: #ffff;
  font-family: "Source Sans Pro Paris2024", "Olympic Sans", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  font-weight: bold;
  border-radius: 3.625rem;
  box-sizing: border-box;
  height: 2.5rem;
  margin: auto 0;
  min-width: 48px;
  background: #890053;
  cursor: pointer;
  position: relative;

  &:hover > #logout {
    top: 3.3rem;
  }
`;

export const UserInfoInnerContainr = styled.div`
  display: flex;
  flex-direction: row;  
  justify-content: center;

  border-radius: 3.625rem;
  box-sizing: border-box;
  margin: auto 0;
  background: #890053;
  position: relative;
  z-index: 5;

  min-height: 45px;
  min-width: 190px;
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
    margin: 10px 0px 0px 100px;
    cursor: pointer;
    position: absolute;
    z-index: 20;
`;

export const ChildrenContainer = styled.div`
  // padding-top: 20px;
  overflow: auto;
  margin-top: 20px;
  ${props => props.extendChildContainer || ''};
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #9c9c9c;
    border-radius: 15px;
  }
`;