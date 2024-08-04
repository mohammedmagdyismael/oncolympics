import React, { useState, useEffect } from 'react';
import {
    QuestionContainer,
    Question,
    OptionContainer,
    Option,
    Container,
    QuestionsCounter,
    AnswerJustification,
} from './MatchQuestion.style';


const MatchQuestion = ({ questionFile, currentQuestion, answerQuestion, match }) => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedOption, setSelectedOption] = useState();

    console.log('Player', questionFile, currentQuestion);

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
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchQuestions();
    }, [questionFile]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const question = questions[currentQuestion];

    const onSelectOption = (answer, index) => {
        if (canAnswer) {
            answerQuestion(answer);
            setSelectedOption(index)
        }
    }


    return (
        <Container>
            <QuestionsCounter>{`${currentQuestion + 1} / ${questions?.length}`}</QuestionsCounter>

            <QuestionContainer><Question>{question.question}</Question></QuestionContainer>
            <ul>
                {question.answers.map((answer, index) => (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <OptionContainer
                            onClick={() => onSelectOption(answer.correct, index)}
                            isSelected={index === selectedOption}
                            isRight={answer.correct && !canAnswer}
                            isWrong={!answer.correct && !canAnswer && index === selectedOption}
                            key={index}>
                                <Option>{answer.answer}</Option>
                        </OptionContainer>
                        {(!canAnswer && answer?.reason) && (
                            <AnswerJustification>
                                {answer?.reason}
                            </AnswerJustification>
                        )}
                    </div>
                    
                ))}
            </ul>
        </Container>
    );
};

export default MatchQuestion;
