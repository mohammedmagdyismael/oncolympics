// Match.js
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Make sure you have js-cookie installed

import Layout from '../../components/Layout/Layout';
import { 
  ActionBtn,
  ActionBtnLabel,
  LoadingStatusContainer,
  StatusMsg,
  MatchQuestionContainer,
  MatchScoreContaint,
} from './Moderator.style';

import axios from 'axios';
import MatchDetails from './MatchDetails';
import MatchQuestion from './MatchQuestion';
import MatchScores from './MatchScores';

const MatchModeratorView = () => {
    const [matchData, setMatchData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);

    const fetchMatchData = async () => {
        try {
            const response = await axios.get('https://oncolympics-api.onrender.com/api/match/moderatormatch', {
                headers: {
                    'token': Cookies.get('token'),
                }
            });
            setMatchData(response.data.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMatchData();
    }, []);

    const startMatch = async () => {
      setLoading(true);
      try {
          await axios.get('https://oncolympics-api.onrender.com/api/match/startmatch',  {
              headers: {
                  'token': Cookies.get('token'),
              }
          });
          fetchMatchData();
      } catch (err) {
          console.error(err);
      }
  };
  
  const nextQuestion = async () => {
      setLoading(true);
      try {
          await axios.get('https://oncolympics-api.onrender.com/api/match/nextquestion', {
              headers: {
                  'token': Cookies.get('token'),
              }
          });
          fetchMatchData();
      } catch (err) {
          console.error(err);
      }
  };
  
  const endMatch = async () => {
      setLoading(true);
      try {
          await axios.get('https://oncolympics-api.onrender.com/api/match/endmatch', {
              headers: {
                  'token': Cookies.get('token'),
              }
          });
          fetchMatchData();
      } catch (err) {
          console.error(err);
      }
  };

    if (loading) return <Layout><LoadingStatusContainer><StatusMsg>Loading...</StatusMsg></LoadingStatusContainer></Layout>;
    if (error) return <Layout><LoadingStatusContainer><StatusMsg>Error: {error.message}</StatusMsg></LoadingStatusContainer></Layout>;

    if (!matchData || matchData.length === 0) {
        return <div>No Matches Yet</div>;
    }

    const match = matchData[0];

    if (match.match_status === 0) {
        return (
          <Layout>
            <div>
                <MatchDetails match={match} />
                <ActionBtn onClick={startMatch}><ActionBtnLabel>{loading ? 'Loading' : 'Start Match'}</ActionBtnLabel></ActionBtn>
            </div>
          </Layout>
        );
    } else if (match.match_status === 1) {
        return (
          <Layout>
            <MatchQuestionContainer>
                <MatchDetails match={match} />
                <div>
                  <MatchQuestion setNumberOfQuestions={setNumberOfQuestions} questionFile={match.question_file} currentQuestion={match.current_question} />
                  
                  {numberOfQuestions === match.current_question + 1 ? (
                    <ActionBtn onClick={endMatch}><ActionBtnLabel>{loading ? 'Loading' : 'End Match'}</ActionBtnLabel></ActionBtn>
                  ) : (
                    <ActionBtn onClick={nextQuestion}><ActionBtnLabel>{loading ? 'Loading' : 'Next Question'}</ActionBtnLabel></ActionBtn>

                  )}
                  
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



export default MatchModeratorView;

