// Standings.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import { LoadingStatusContainer, StatusMsg, StandingsContainer, MatchCard, TeamName, MatchDate } from './Standings.style';

const Standings = () => {

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
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })
        }));
        setMatches(formattedMatches);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) return <LoadingStatusContainer><StatusMsg>Loading ...</StatusMsg></LoadingStatusContainer>;
  if (error) return <LoadingStatusContainer><StatusMsg>{error}</StatusMsg></LoadingStatusContainer>;


  return (
    <Layout>
      <StandingsContainer>
          {matches.map((match, index) => (
              <MatchCard key={index}>
              <div>
                  <TeamName>{match.team1}</TeamName> vs <TeamName>{match.team2}</TeamName>
              </div>
              <MatchDate>{match.date}</MatchDate>
              </MatchCard>
          ))}
        </StandingsContainer>
    </Layout>
  );
};

export default Standings;
