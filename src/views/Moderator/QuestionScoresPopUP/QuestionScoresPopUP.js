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
} from './QuestionScoresPopUP.style';
 

const QuestionScoresPopUP = ({ isOpen, onClose, match }) => {
    const { question_file, team1_name, team2_name, team1_logo, team2_logo, current_question, id } = match;
    
    const [team1Answer, setTeam1Answer] = useState(null);
    const [team2Answer, setTeam2Answer] = useState(null);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const fetchScores = async () => {
                try {
                    const questionnareresponse = await fetch(`/assets/matchesquestions/${question_file}`);
                    const questionnaire = await questionnareresponse.json();
                    const currentQuestionObject = questionnaire?.questions?.[current_question];
                    const questionDetailsresponse = await questionDetailsAPI(id, current_question);
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
        }
    }, [current_question, id, isOpen, match, question_file]);


    return (
        <PopUp isOpen={isOpen} onClose={onClose}>
             <div>
                <LabelContainer><Label>Teams answers</Label></LabelContainer>
                
                <TeamsContainer>
                    <div>
                        <div>
                            <TeamLogo src={`/assets/image/${team1_logo}`} alt='team1_logo' />
                            <TeamLabel>{team1_name}</TeamLabel>
                            {isLoaded ? (
                                <div>
                                    <AnswerLabel isRight={team1Answer?.correct} isWrong={team1Answer?.correct === false}>{team1Answer?.answer || '---'}</AnswerLabel>
                                    <AnswerReson isRight={team1Answer?.correct} isWrong={team1Answer?.correct === false}>{team1Answer?.reason}</AnswerReson>
                                </div>
                            ) : ''}
                        </div>
                    </div>
                    <div>
                        <div>
                            <TeamLogo src={`/assets/image/${team2_logo}`} alt='team2_logo' />
                            <TeamLabel>{team2_name}</TeamLabel>
                            {isLoaded ? (
                                <div>
                                    <AnswerLabel isRight={team2Answer?.correct} isWrong={team2Answer?.correct === false}>{team2Answer?.answer || '---'}</AnswerLabel>
                                    <AnswerReson isRight={team2Answer?.correct} isWrong={team2Answer?.correct === false}>{team2Answer?.reason}</AnswerReson>
                                </div>
                            ) : ''}
                        </div>
                    </div>
                </TeamsContainer>
                
                
            </div>
        </PopUp>
     );
};

export default QuestionScoresPopUP;
