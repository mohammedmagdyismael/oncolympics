import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PopUp from '../../../components/PopUp';
import {
    LoadingStatusContainer,
    StatusMsg,
    LabelContainer,
    Label,
    QContainer,
    Qlabel,
    ScoreContainer,
    TeamScoreContainer,
    TeamLabel,
    ScoreLabel,
    ScoresContainer,
} from './MatchScores.style';
import MatchDetails from './MatchDetails';
 

const MatchScores = ({ isOpen, onClose, match }) => {
    const [scores, setScores] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isOpen) {
            const fetchScores = async () => {
                setLoading(true);
                try {
                    const response = await axios.get(`https://oncolympics-api.onrender.com/api/standings/matchdetails?matchid=${match?.matchId}`);
                    setScores(response?.data?.data);
                    setLoading(false);
                } catch (err) {
                    setError(err);
                    setLoading(false);
                }
            };
            fetchScores();
        } else {
            setScores(null);
        }
    }, [isOpen, match]);

    if (loading) return <LoadingStatusContainer><StatusMsg>Loading...</StatusMsg></LoadingStatusContainer>;
    if (error) return <LoadingStatusContainer><StatusMsg>Error: {error.message}</StatusMsg></LoadingStatusContainer>;

    return (
        <PopUp isOpen={isOpen} onClose={onClose}>
             <div>
                <LabelContainer><Label>Match Details</Label></LabelContainer>
                <div style={{ display: 'flex' }}>
                    <MatchDetails match={match} />
                    <ScoresContainer>
                        {scores?.map((score, index) => (
                            <QContainer key={index}>
                                <Qlabel>Question {score.questionId + 1}</Qlabel>
                                <ScoreContainer>
                                    <TeamScoreContainer><TeamLabel>{score.team1_name}:</TeamLabel> <ScoreLabel>{score.score_team1}</ScoreLabel></TeamScoreContainer>
                                    <TeamScoreContainer><ScoreLabel>{score.score_team2}</ScoreLabel> <TeamLabel>:{score.team2_name}</TeamLabel></TeamScoreContainer>
                                </ScoreContainer>
                            </QContainer>
                        ))}
                    </ScoresContainer>
                </div>
                
            </div>
        </PopUp>
     );
};

export default MatchScores;
