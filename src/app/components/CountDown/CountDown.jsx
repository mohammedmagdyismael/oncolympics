import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled-component for the timer display
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

const CountdownStopwatch = ({ isChanged, stopCounter }) => {
  const [seconds, setSeconds] = useState(60);
  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [seconds]);

  useEffect(() => {
    
    if (stopCounter) {
      setSeconds(0);
    } else {
      setSeconds(60);
    }
  }, [isChanged, stopCounter])

  return <TimerDisplay>{`${seconds === 0 ? 'Timeout!' : `${seconds} sec`}`}</TimerDisplay>;
};

export default CountdownStopwatch;