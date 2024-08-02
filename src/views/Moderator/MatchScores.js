import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; // Make sure you have js-cookie installed

const MatchScores = () => {
    const [scores, setScores] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                const response = await axios.get('https://oncolympics-api.onrender.com/api/match/matchscores', {
                    headers: {
                        'token': Cookies.get('token')
                    }
                });
                setScores(response.data.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchScores();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>Match Scores</h2>
            <div>
                <span>{scores.team1_totalScore}</span> - <span>{scores.team2_totalScore}</span>
            </div>
            <ul>
                {scores.scores.map((score, index) => (
                    <li key={index}>
                        <div>Question {score.questionId + 1}</div>
                        <div>{score.team1_name}: {score.score_team1}</div>
                        <div>{score.team2_name}: {score.score_team2}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MatchScores;
