import React, { useState, useEffect } from 'react';
import { questionDetailsAPI } from '../../../app/api/Moderator';
import PopUp from '../../../app/components/PopUp';
import {
    LabelContainer,
    Label,
    TeamsContainer,
    TeamLogo,
    TeamLabel,
    AnswerLabel,
    AnswerReson,
    TeamContainer,
    RightAnsContainer,
} from './QuestionScoresPopUP.style';
 

const QuestionScoresPopUP = ({ isOpen, onClose, match }) => {
    const { question_file, team1_name, team2_name, team1_logo, team2_logo, current_question, id } = match;
    
    const [team1Answer, setTeam1Answer] = useState(null);
    const [team2Answer, setTeam2Answer] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const [rightAnswer, setRightAnswer] = useState(null);

    useEffect(() => {
        if (isOpen) {
            const fetchScores = async () => {
                try {
                    const questionnareresponse = await fetch(`/assets/matchesquestions/${question_file}`);
                    const questionnaire = await questionnareresponse.json();
                    const currentQuestionObject = questionnaire?.questions?.[current_question];
                    const questionDetailsresponse = await questionDetailsAPI(id, current_question);
                    const rightAnswerObj = currentQuestionObject?.answers?.find(a => a.correct);
                    setRightAnswer(rightAnswerObj)
                    setTeam1Answer(currentQuestionObject?.answers?.[questionDetailsresponse?.team1answerid])
                    setTeam2Answer(currentQuestionObject?.answers?.[questionDetailsresponse?.team2answerid])
                    setLoaded(true);
                } catch (err) {
                    console.log(err);
                }
            };
            fetchScores();
        } else {
            setTeam1Answer(null);
            setTeam2Answer(null);
            setLoaded(false);
            setRightAnswer(null);
        }
    }, [current_question, id, isOpen, match, question_file]);


    return (
        <PopUp isOpen={isOpen} onClose={onClose}>
             <div>
                <LabelContainer><Label>Teams answers</Label></LabelContainer>
                
                <TeamsContainer>
                    <TeamContainer>
                        <div>
                            <TeamLogo src={`/assets/teamslogos/${team1_logo}`} alt='team1_logo' />
                            <TeamLabel>{team1_name}</TeamLabel>
                            {isLoaded ? (
                                <div>
                                    <AnswerLabel isRight={team1Answer?.correct} isWrong={team1Answer?.correct === false}>{team1Answer?.answer || '---'}</AnswerLabel>
                                </div>
                            ) : ''}
                        </div>
                    </TeamContainer>
                    <TeamContainer>
                        <div>
                            <TeamLogo src={`/assets/teamslogos/${team2_logo}`} alt='team2_logo' />
                            <TeamLabel>{team2_name}</TeamLabel>
                            {isLoaded ? (
                                <div>
                                    <AnswerLabel isRight={team2Answer?.correct} isWrong={team2Answer?.correct === false}>{team2Answer?.answer || '---'}</AnswerLabel>
                                </div>
                            ) : ''}
                        </div>
                    </TeamContainer>
                </TeamsContainer>

                {rightAnswer && (
                    <RightAnsContainer>
                        <AnswerReson style={{ margin: '15px 0' }} isRight>Right Answer</AnswerReson>
                        <AnswerReson style={{ margin: '0' }} isRight>{rightAnswer.answer}</AnswerReson>
                        <AnswerReson style={{ margin: '0' }} isRight>{rightAnswer.reason}</AnswerReson>
                    </RightAnsContainer>
                )}
                
                
            </div>
        </PopUp>
     );
};

export default QuestionScoresPopUP;
