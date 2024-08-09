// Match.js
import React, { useState, useEffect } from 'react';
import { answerAPI, playerMatchDetails } from '../../app/api/Player';
import Layout from '../../app/components/Layout/Layout';
import { 
  LoadingStatusContainer,
  StatusMsg,
  MatchQuestionContainer,
} from './Player.style';
import MatchDetails from '../../app/common/MatchDetails';
import MatchQuestion from './MatchQuestion';

const PlayerView = () => {
    const [matchData, setMatchData] = useState(null);
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const answerQuestion = async answer => {
        await answerAPI(answer)
    }

    useEffect(() => {
        const fetchMatchData = async () => {
            // setLoading(true);
            try {
                const matchDetails = await playerMatchDetails();
                if (matchDetails) {
                    const match = matchDetails;
                    setMatchData([match]);
                    /* if (!matchData) {
                        setMatchData([matchDetails]);
                    } else if (match?.match_status !== matchData?.[0]?.match_status || match?.canAnswer !== matchData?.[0]?.canAnswer || match?.current_question !== matchData?.[0]?.current_question) {
                        setMatchData([matchDetails]);
                    } */
                } else {
                    setMatchData(null);
                }
                // setLoading(false);
            } catch (err) {
                setError(err);
                // setLoading(false);
            }
        };

        fetchMatchData();
        const interval = setInterval(fetchMatchData, 4000);

        return () => clearInterval(interval);
    }, [matchData]);

    // if (loading && !matchData?.length === 0) return <Layout><LoadingStatusContainer><StatusMsg>Loading...</StatusMsg></LoadingStatusContainer></Layout>;
    if (error) return <Layout><LoadingStatusContainer><StatusMsg>Error: {error.message}</StatusMsg></LoadingStatusContainer></Layout>;

    if (matchData?.length === 0 ||  matchData === null) {
        return <Layout><LoadingStatusContainer><StatusMsg>No Matches Yet</StatusMsg></LoadingStatusContainer></Layout>;
    }

    const match = matchData?.[0];

    if (match?.match_status === 0) {
        return (
          <Layout>
            <div>
                <MatchDetails match={match} />
            </div>
          </Layout>
        );
    } else if (match?.match_status === 1) {
        return (
          <Layout>
            <MatchQuestionContainer>
                <div>
                  <MatchQuestion
                    match={match}
                    answerQuestion={answerQuestion}
                    questionFile={match?.question_file}
                    currentQuestion={match?.current_question} 
                    matchDetails={<MatchDetails match={match} />}    
                />
                </div>
            </MatchQuestionContainer>
          </Layout>
        );
    } else if (match?.match_status === 2) {
        return (
          <Layout>
            <div>
                <MatchDetails match={match} />
            </div>
          </Layout>
        );
    }
};



export default PlayerView;

