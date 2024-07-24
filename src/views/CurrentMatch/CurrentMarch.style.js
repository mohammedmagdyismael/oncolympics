// Match.style.js
import styled from 'styled-components';

export const MatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f0f2f5;
  height: 100vh;
`;

export const Score = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`;

export const Timer = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #ff0000;
`;

export const Question = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
`;

export const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 600px;
`;

export const AnswerButton = styled.button`
  background-color: ${props => props.selected ? '#4CAF50' : '#ffffff'};
  color: ${props => props.selected ? '#ffffff' : '#333'};
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
  font-size: 1rem;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #0056b3;
  }
`;
