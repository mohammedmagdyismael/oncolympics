import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled-component for the timer display
const TimerDisplay = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: red;
  width: fit-content;
  margin: auto;
`;

const CountdownStopwatch = ({ isChanged }) => {
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
    setSeconds(60);
  }, [isChanged])

  return <TimerDisplay>{`${seconds === 0 ? 'Timeout!' : `${seconds} sec`}`}</TimerDisplay>;
};

export default CountdownStopwatch;