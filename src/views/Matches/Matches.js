// Standings.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import MatchScoresPopUp from './MatchScoresPopUP';
import { LoadingStatusContainer, StatusMsg, StandingsContainer, MatchCard, TeamName, MatchDate, Deatils } from './Matches.style';

const Standings = () => {

  const [isDetailsPopUpOpened, toggleDetailsPopUp] = useState(false);
  const [matchDetails, setMatchDetails] = useState(null);

  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch matches data from API
    const fetchMatches = async () => {
      try {
        const response = await axios.get('https://oncolympics-api.onrender.com/api/standings/all-matches');
        const formattedMatches = response.data.data.map(match => ({
          team1: match.team1_name,
          team2: match.team2_name,
          date: new Date(match.date_time).toLocaleString('en-GB', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }),
          team1Score: match.score_team1,
          team2Score: match.score_team2,
          matchStatus: match.match_status,
          matchId: match.match_id,
          team1Logo: match.team1_logo,
          team2Logo: match.team2_logo,
        }));
        setMatches(formattedMatches);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchMatches();

    const interval = setInterval(fetchMatches, 10000);

    return () => clearInterval(interval);
  }, []);

  if (loading && !matches?.length) return <LoadingStatusContainer><StatusMsg>Loading ...</StatusMsg></LoadingStatusContainer>;
  if (error) return <LoadingStatusContainer><StatusMsg>{error}</StatusMsg></LoadingStatusContainer>;


  const handlePopUp = (match) => {
    setMatchDetails(match);
    toggleDetailsPopUp(true);
  }

  return (
    <Layout>
      <StandingsContainer>
          {matches.map((match, index) => (
              <MatchCard key={index}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <TeamName style={{ width: '200px', textAlign: 'center' }}>{match.team1}</TeamName> vs <TeamName style={{ width: '200px', textAlign: 'center' }}>{match.team2}</TeamName>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <TeamName>{match.team1Score}</TeamName> : <TeamName>{match.team2Score}</TeamName>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '5px' }}>
                    <TeamName>
                      {match.matchStatus === 0 && 'Not Started Yet'}
                      {match.matchStatus === 1 && 'Live Now'}
                      {match.matchStatus === 2 && 'Ended'}
                    </TeamName>
                    {match.matchStatus !== 0 && (
                      <Deatils onClick={() => handlePopUp(match)}>
                        <p style={{ margin: '0' }}>Details</p>
                      </Deatils>
                    )}
                    
                  </div>
              </div>
              <MatchDate>{match.date}</MatchDate>
              </MatchCard>
          ))}
        </StandingsContainer>
        <MatchScoresPopUp match={matchDetails} isOpen={isDetailsPopUpOpened} onClose={() => toggleDetailsPopUp(false)} />
    </Layout>
  );
};

export default Standings;
