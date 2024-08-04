// Match.js
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Make sure you have js-cookie installed

import Layout from '../../components/Layout/Layout';
import { 
  LoadingStatusContainer,
  StatusMsg,
  MatchQuestionContainer,
  MatchScoreContaint,
} from './Player.style';

import axios from 'axios';
import MatchDetails from './MatchDetails';
import MatchQuestion from './MatchQuestion';
import MatchScores from './MatchScores';

const PlayerView = () => {
    const [matchData, setMatchData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const answerQuestion = async answer => {
        await axios.post('https://oncolympics-api.onrender.com/api/match/answer', {
            answer,
        },{
            headers: {
                'token': Cookies.get('token'),
            }
        });
    }

    

    useEffect(() => {
        const fetchMatchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://oncolympics-api.onrender.com/api/match/playermatch', {
                    headers: {
                        'token': Cookies.get('token'),
                    }
                });
                if (response?.data?.data) {
                    const match = response.data.data?.[0];
                    
                    if (!matchData) {
                        setMatchData(response.data.data);
                    } else if (match?.match_status !== matchData?.[0]?.match_status || match?.canAnswer !== matchData?.[0]?.canAnswer || match?.current_question !== matchData?.[0]?.current_question) {
                        setMatchData(response.data.data);
                    }
                } else {
                    setMatchData(null);
                }
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchMatchData();
        const interval = setInterval(fetchMatchData, 4000);

        return () => clearInterval(interval);
    }, [matchData]);

    if (loading && !matchData?.length === 0) return <Layout><LoadingStatusContainer><StatusMsg>Loading...</StatusMsg></LoadingStatusContainer></Layout>;
    if (error) return <Layout><LoadingStatusContainer><StatusMsg>Error: {error.message}</StatusMsg></LoadingStatusContainer></Layout>;

    if (!matchData || matchData.length === 0) {
        return <Layout><LoadingStatusContainer><StatusMsg>No Matches Yet</StatusMsg></LoadingStatusContainer></Layout>;
    }

    const match = matchData[0];

    if (match.match_status === 0) {
        return (
          <Layout>
            <div>
                <MatchDetails match={match} />
            </div>
          </Layout>
        );
    } else if (match.match_status === 1) {
        return (
          <Layout>
            <MatchQuestionContainer>
                <MatchDetails match={match} />
                <div>
                  <MatchQuestion match={match} answerQuestion={answerQuestion} questionFile={match?.question_file} currentQuestion={match?.current_question} />
                </div>
            </MatchQuestionContainer>
          </Layout>
        );
    } else if (match.match_status === 2) {
        return (
          <Layout>
            <MatchScoreContaint>
                <MatchDetails match={match} />
                <MatchScores />
            </MatchScoreContaint>
          </Layout>
        );
    }
};



export default PlayerView;

