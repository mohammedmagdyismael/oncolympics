import React, { useState, useEffect } from 'react';
import { AnswersLabel } from '../../../helper';
import {
    QuestionContainer,
    Question,
    OptionContainer,
    Option,
    Container,
    QuestionsCounter,
    AnswerJustification,
    OptionsContainer,
    TeamQuestionContainer,
    TeamsDetailsContainer,
} from './MatchQuestion.style';

const MatchQuestion = ({ questionFile, currentQuestion, answerQuestion, match, matchDetails }) => {
    const [questions, setQuestions] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedOption, setSelectedOption] = useState();

    const canAnswer = match?.canAnswer; 

    useEffect(() => {
        setSelectedOption(null);
    }, [currentQuestion])

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`/assets/matchesquestions/${questionFile}`);
                const data = await response.json();
                setQuestions(data.questions);
                // setLoading(false);
            } catch (err) {
                setError(err);
                // setLoading(false);
            }
        };
        fetchQuestions();
    }, [questionFile]);

    // if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const question = questions[currentQuestion];

    const onSelectOption = (answer, index) => {
        if (canAnswer) {
            answerQuestion(answer, index);
            setSelectedOption(index)
        }
    }


    return (
        <Container>
            <TeamQuestionContainer>
                
                <div style={{ width: '100%' }}>
                    <QuestionsCounter>{`${currentQuestion + 1} / ${questions?.length}`}</QuestionsCounter>
                    <QuestionContainer><Question>{question?.question}</Question></QuestionContainer>
                </div>
                <TeamsDetailsContainer>
                    {matchDetails}
                </TeamsDetailsContainer>
            </TeamQuestionContainer>
            
            <OptionsContainer>
                {question?.answers.map((answer, index) => (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <OptionContainer
                            onClick={() => onSelectOption(answer.correct, index)}
                            isSelected={index === selectedOption}
                            isRight={answer.correct && !canAnswer}
                            isWrong={!answer.correct && !canAnswer && index === selectedOption}
                            key={index}>
                                <Option>{`${AnswersLabel[index]}${answer.answer}`}</Option>
                        </OptionContainer>
                    </div>
                ))}
            </OptionsContainer>
            {(!canAnswer) && (
                <AnswerJustification>
                    {`${AnswersLabel[question?.answers.findIndex(answer => answer?.correct)]}${question?.answers.find(answer => answer?.correct)?.reason}`}
                </AnswerJustification>
            )}
        </Container>
    );
};

export default MatchQuestion;
