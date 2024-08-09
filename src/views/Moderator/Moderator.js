// match?.js
import React, { useState, useEffect } from 'react';
import {
    moderatorMatchDetailsAPI,
    startMatchAPI,
    nextQuestionAPI,
    endMatchAPI,
    resetMatchAPI,
    stopAnswerAPI,
    penaltyPlayerAPI,
    rewardPlayerAPI,
} from '../../app/api/Moderator';
import Layout from '../../app/components/Layout/Layout';
import { 
  ActionBtn,
  ActionBtnLabel,
  LoadingStatusContainer,
  StatusMsg,
  MatchQuestionContainer,
} from './Moderator.style';
import MatchDetails from '../../app/common/MatchDetails';
import MatchQuestion from './MatchQuestion';

const MatchModeratorView = () => {
    const [matchData, setMatchData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);
    const [isStopping, setStopAnswer] = useState(undefined);
    const [isRestting, setRestting] = useState(undefined);
    const [isProceeding, setProceeding] = useState(undefined);


    const fetchMatchData = async () => {
        setLoading(true);
        try {
            const response = await moderatorMatchDetailsAPI();
            setMatchData(response);
            setLoading(false);
            setStopAnswer(undefined);
            setRestting(undefined);
            setProceeding(undefined);
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
          await startMatchAPI();
          fetchMatchData();
      } catch (err) {
          console.error(err);
      }
    };
    
    const nextQuestion = async () => {
        setProceeding(true);
        try {
            await nextQuestionAPI();
            fetchMatchData();
        } catch (err) {
            console.error(err);
        }
    };

    const stopAnswer = async () => {
        setStopAnswer(true);
        try {
            await stopAnswerAPI().then(() => {
                fetchMatchData();
            });
        } catch (err) {
            console.error(err);
        }
    };
    
    const endMatch = async () => {
        try {
            await endMatchAPI();
            fetchMatchData();
        } catch (err) {
            console.error(err);
        }
    };

    const resetMatch = async () => {
        setRestting(true);
        try {
            await resetMatchAPI()
            .then(() => {
                fetchMatchData();
            });
        } catch (err) {
            console.error(err);
        }
    };

    const rewardTeam = async teamId => {
        try {
            await rewardPlayerAPI(teamId).then(() => fetchMatchData());
        } catch (err) {
            console.error(err);
        }
    };

    const penaltyTeam = async teamId => {
        try {
            await penaltyPlayerAPI(teamId).then(() => fetchMatchData());
        } catch (err) {
            console.error(err);
        }
    };

    // if (loading && matchData === null) return <Layout><LoadingStatusContainer><StatusMsg>Loading...</StatusMsg></LoadingStatusContainer></Layout>;
    if (error) return <Layout><LoadingStatusContainer><StatusMsg>Error: {error.message}</StatusMsg></LoadingStatusContainer></Layout>;

    if (matchData?.length === 0) {
        return <Layout><LoadingStatusContainer><StatusMsg>No Matches Yet</StatusMsg></LoadingStatusContainer></Layout>;
    }

    const match = matchData?.[0];

    console.log(match);

    const teamCanAnswer = match?.canAnswer === 1

    if (match?.match_status === 0) {
        return (
          <Layout>
            <div>
                <MatchDetails isAdmin match={match} />
                <div id='panel' style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <ActionBtn onClick={startMatch}><ActionBtnLabel>{loading ? 'Loading' : 'Start Match'}</ActionBtnLabel></ActionBtn>
                </div>
            </div>
          </Layout>
        );
    } else if (match?.match_status === 1) {
        return (
          <Layout>
            <MatchQuestionContainer>
                <div>
                    <MatchQuestion
                        setNumberOfQuestions={setNumberOfQuestions}
                        questionFile={match?.question_file}
                        currentQuestion={match?.current_question}
                        matchDetails={<MatchDetails isAdmin match={match} rewardTeam={rewardTeam} penaltyTeam={penaltyTeam}  />}
                    />
                  
                  <div id='panel' style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    {teamCanAnswer && (
                        <ActionBtn onClick={stopAnswer}>
                            {isStopping === undefined && (
                                <ActionBtnLabel>Stop Answer</ActionBtnLabel>
                            )}
                            {isStopping === true && (
                                <ActionBtnLabel>Loading ...</ActionBtnLabel>
                            )}
                            {isStopping === false && (
                                <ActionBtnLabel>Stopped</ActionBtnLabel>
                            )}
                        </ActionBtn>
                    )}

                    {numberOfQuestions === match?.current_question + 1 ? (
                        <div>
                            {!teamCanAnswer && (
                                <ActionBtn onClick={endMatch}><ActionBtnLabel>End Match</ActionBtnLabel></ActionBtn>
                            )}
                        </div>
                    ) : (
                        <div>
                            {!teamCanAnswer && (
                                <ActionBtn onClick={nextQuestion}><ActionBtnLabel>{isProceeding ? 'Loading ...' : 'Next'}</ActionBtnLabel></ActionBtn>
                            )}
                        </div>
                    )}
                    <ActionBtn onClick={resetMatch}><ActionBtnLabel>{isRestting ? 'Resetting ...' : 'Reset'}</ActionBtnLabel></ActionBtn>
                  </div>
                 
                </div>
            </MatchQuestionContainer>
          </Layout>
        );
    } else if (match?.match_status === 2) {
        return (
          <Layout>
            <div>
                <MatchDetails isAdmin match={match} />
                <div id='panel' style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <ActionBtn onClick={resetMatch}><ActionBtnLabel>{isRestting ? 'Resetting ...' : 'Reset Match'}</ActionBtnLabel></ActionBtn>
                </div>
            </div>
          </Layout>
        );
    }
};



export default MatchModeratorView;

