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
} from './MatchQuestion.style';
import CountdownStopwatch from '../../../components/CountDown/CountDown';


const MatchQuestion = ({ questionFile, currentQuestion, setNumberOfQuestions }) => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showRightAns, toggleRightAns] = useState(false);

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
            <div style={{ marginBottom: '20px' }}>
                <CountdownStopwatch />
            </div>
            <QuestionsCounter>{`${currentQuestion + 1} / ${questions?.length}`}</QuestionsCounter>
            <QuestionContainer><Question>{question.question}</Question></QuestionContainer>
            <ul>
                {question.answers.map((answer, index) => (
                    <div>
                        <OptionContainer isRight={answer.correct && showRightAns} key={index}><Option>{answer.answer}</Option></OptionContainer>
                        {showRightAns && (
                            <AnswerJustification>
                                {answer?.reason}
                            </AnswerJustification>
                        )}
                    </div>
                ))}
            </ul>
            {!showRightAns && (
                <ActionBtn onClick={() => toggleRightAns(!showRightAns)}><ActionBtnLabel>Show Right Answer</ActionBtnLabel></ActionBtn>
            )}

        </Container>
    );
};

export default MatchQuestion;
