import React, { useState, useEffect } from 'react';
import {
    QuestionContainer,
    Question,
    OptionContainer,
    Option,
    Container,
    QuestionsCounter,
    ActionBtn,
    ActionBtnLabel,
    AnswerJustification,
    OptionsContainer,
    TeamQuestionContainer,
    TeamsDetailsContainer,
    Stopwatch,
} from './MatchQuestion.style';
import CountdownStopwatch from '../../../app/components/CountDown/CountDown';


const MatchQuestion = ({ toggleDetailsPopUp, teamCanAnswer, stopAnswer, matchDetails, questionFile, currentQuestion, setNumberOfQuestions }) => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showRightAns, toggleRightAns] = useState(false);

    useEffect(() => {
        toggleRightAns(false);
    }, [currentQuestion])

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`/assets/matchesquestions/${questionFile}`);
                const data = await response.json();
                setQuestions(data.questions);
                setNumberOfQuestions(data?.questions?.length)
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchQuestions();
    }, [questionFile, setNumberOfQuestions]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const question = questions[currentQuestion];

    return (
        <Container>
            <TeamQuestionContainer>
                <TeamsDetailsContainer>
                    {matchDetails}
                </TeamsDetailsContainer>
                <div style={{ width: '100%' }}>
                    <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                        <div style={{     width: '110px' }}>
                            <CountdownStopwatch />
                        </div>
                        {teamCanAnswer && (
                            <Stopwatch onClick={stopAnswer} src='/assets/image/stopwatch.png' alt='stopwatch' />
                        )}
                    </div>
                    <QuestionsCounter>{`${currentQuestion + 1} / ${questions?.length}`}</QuestionsCounter>
                    <QuestionContainer><Question>{question?.question}</Question></QuestionContainer>
                </div>
            </TeamQuestionContainer>
            
            
            <OptionsContainer>
                {question?.answers.map((answer, index) => (
                    <div>
                        <OptionContainer isRight={answer.correct && showRightAns} key={index}><Option>{answer.answer}</Option></OptionContainer>
                    </div>
                ))}
            </OptionsContainer>
            {showRightAns && (
                <AnswerJustification>
                    {question?.answers.find(answer => answer?.correct)?.reason}
                </AnswerJustification>
            )}
            
            <ActionBtn onClick={() => {
                    toggleRightAns(true);
                    toggleDetailsPopUp(true)
            }}><ActionBtnLabel>Show Right Answer</ActionBtnLabel></ActionBtn>

        </Container>
    );
};

export default MatchQuestion;
