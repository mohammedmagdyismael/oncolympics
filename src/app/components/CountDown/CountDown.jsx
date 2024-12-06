import { useState, useEffect } from 'react';
import PlayImg from './play-button.png';
import PauseImg from './pause-button.png';
import {
  Container,
  PlayPauseBtn,
  TimerDisplay,
} from './CountDown.style';

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