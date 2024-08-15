import styled from "styled-components";


export const LabelContainer = styled.div`
    margin-bottom: 1.5rem;
`;

export const Label = styled.p`
    font-size: 32px;
    text-align: center;
    color: #333;
    font-weight: 700;
`;

export const TeamsContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items: center;
    min-height: 330px;
`;

export const TeamLogo = styled.img`
    width: 120px;
    height: 120px;
    margin: auto;
    display: flex;
`;

export const TeamLabel = styled.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
`;

export const AnswerLabel = styled.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    
    color: ${props => props.isRight && '#4CAF50'};
    color: ${props => props.isWrong && 'red'};
`;

export const AnswerReson = styled(AnswerLabel)`
    font-weight: bold;
    font-size: 22px;
    text-align: center;
    
    color: ${props => props.isRight && '#4CAF50'};
    color: ${props => props.isWrong && 'red'};
`;