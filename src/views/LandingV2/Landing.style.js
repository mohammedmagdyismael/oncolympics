import styled, { keyframes, css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const extendChildContainer = css`
  position: absolute;
  margin-top: unset;
  width: 100%;
`;

export const Container = styled.div`
    background-image: linear-gradient(to right, white, transparent 125%), url(/assets/image/landing.png);
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
`;

export const slideIn = keyframes`
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Video = styled.video`
  width: 100%;
`;

export const Source = styled.source`
  z-index: 10;
`;

// Styled components
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  margin: 50px 0;
`;

export const MenuItem = styled.div`
  opacity: 0;
  transform: translateX(-100%);
  animation: ${slideIn} 0.5s forwards;
  animation-delay: ${(props) => props.delay};
`;

export const WebTitle = styled.p`
  height: 100px;
  font-size: 68px;
  font-weight: bolder;
  color: #DE7FAE;
  padding: 0px 70px;

  @media only screen and (max-width: 855px) {
    font-size: 38px;
    padding: 0 30px;
    margin: 40px 0px 0 0;
  }
`;

export const Tab = styled(NavLink)`
  height: 80px;
  color: black;
  text-decoration: none;

  font-size: 48px;
  font-weight: bolder;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 6px 70px;

  opacity: 0;
  transform: translateX(-100%);
  animation: ${slideIn} 1s forwards;
  animation-delay: ${(props) => props.delay};

  &.active {
    font-weight: bold;
    border-bottom: 5px solid #61dafb;
  }

  &:hover {
    color: #61dafb;
  }

  @media only screen and (max-width: 855px) {
    padding: 3px 30px;
    font-size: 38px;
  }
`;

export const OncoLogo = styled.img`
      width: 527px;
      padding: 0 40px;

      @media only screen and (max-width: 855px) {
        width: 200px;
      padding: 0 15px;
      }
`;

export const AstraLogo = styled.img`
      width: 630px;
      height: 632px;
      padding: 0 40px;

      @media only screen and (max-width: 855px) {
        width: 200px;
      padding: 0 15px;
      }
`;