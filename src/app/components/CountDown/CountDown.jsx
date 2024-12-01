import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlayImg from './play-button.png';
import PauseImg from './pause-button.png';

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const TimerDisplay = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: red;
  width: fit-content;
  margin: auto;

  @media only screen and (max-width: 855px) {
      font-size: 18px;
  }
`;

const PlayPauseBtn = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
`;

const CountdownStopwatch = ({ isChanged, stopCounter }) => {
  const [seconds, setSeconds] = useState(60);
  const [isPause, setPause] = useState(false);

  useEffect(() => {
    if (seconds > 0 && isPause) {
      const intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [seconds, isPause]);

  useEffect(() => {
    
    if (stopCounter) {
      setSeconds(0);
    } else {
      setSeconds(60);
    }
  }, [isChanged, stopCounter]);

  return (
    <Container>
      <TimerDisplay>{`${seconds === 0 ? 'Timeout!' : `${seconds} sec`}`}</TimerDisplay>
      {isPause ? (
        <PlayPauseBtn onClick={() => setPause(!isPause)} src={PauseImg} alt="PauseImg"/>
      ) : (
        <PlayPauseBtn onClick={() => setPause(!isPause)} src={PlayImg} alt="PlayImg"/>
      )}
    </Container>);
};

export default CountdownStopwatch;