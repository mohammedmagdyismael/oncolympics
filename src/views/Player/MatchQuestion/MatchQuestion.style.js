import styled from "styled-components";

export const Container = styled.div`
    padding: 40px;
`;

export const QuestionContainer = styled.div`
    margin-bottom: 1.5rem;
`;

export const Question = styled.p`
    font-size: 32px;
    text-align: center;
    color: #333;
    font-weight: 700;
`;

export const OptionContainer = styled.div`

  
    ${props => props.isSelected && `
      background-color: lightgray;
    `};

    background-color: ${props => props.isRight && '#4CAF50'};
    background-color: ${props => props.isWrong && 'red'};

    color: ${props => props.isRight ? '#ffffff' : '#333'};

    cursor: pointer;

    border: 1px solid #ccc;
    padding: 0px 30px;
    margin-bottom: 1rem;
    border-radius: 4px;
    text-align: left;
    font-size: 20px;
    font-weight: 700;
`;

export const Option = styled.p`
    
`;

export const AnswerJustification = styled.p`
    padding: 0 40px;
    font-size: 25px;
    color: darkgreen;
    font-weight: 700;
`;

export const QuestionsCounter = styled.div`
  font-size: 32px;
  text-align: center;
  color: #333;
  font-weight: 700;
`;

export const ActionBtn = styled.button`
  width: 280px;
  height: 50px;
  border: unset;
  border-radius: 8px;
  background-color: darkmagenta;
  display: flex;
  margin: 10px auto;
  cursor: pointer;
  :hover > p {
    color: #61dafb;
  }
`;

export const ActionBtnLabel = styled.p`
  margin: auto;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;