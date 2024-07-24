// Match.js
import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import { 
  MatchContainer, 
  Score, 
  Timer, 
  Question, 
  AnswersContainer, 
  AnswerButton, 
  SubmitButton 
} from './Moderator.style';

const Moderator = () => {
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // Timer set to 60 seconds
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleSubmit = () => {
    // Handle the submit action here
    console.log('Selected Answer:', selectedAnswer);
  };

  const question = "What is the capital of France?";
  const answers = ["Berlin", "Madrid", "Paris", "Rome"];

  return (
    <Layout>
    <MatchContainer>
      <Score>Team 1: {team1Score} - Team 2: {team2Score}</Score>
      <Timer>{timeLeft} seconds</Timer>
      <Question>{question}</Question>
      <AnswersContainer>
        {answers.map((answer, index) => (
          <AnswerButton 
            key={index} 
            onClick={() => setSelectedAnswer(answer)} 
            selected={selectedAnswer === answer}
          >
            {answer}
          </AnswerButton>
        ))}
      </AnswersContainer>
      <SubmitButton onClick={handleSubmit}>Next</SubmitButton>
    </MatchContainer>
    </Layout>
  );
};

export default Moderator;
