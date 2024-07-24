// Standings.js
import React from 'react';
import Layout from '../../components/Layout/Layout';
import { StandingsContainer, MatchCard, TeamName, MatchDate } from './Standings.style';

const matches = [
  { team1: 'Team 1', team2: 'Team 2', date: 'Sunday 20 July 08:00 PM' },
  { team1: 'Team 3', team2: 'Team 4', date: 'Monday 21 July 06:00 PM' },
  { team1: 'Team 5', team2: 'Team 6', date: 'Tuesday 22 July 04:00 PM' },
  { team1: 'Team 7', team2: 'Team 8', date: 'Wednesday 23 July 10:00 AM' },
  { team1: 'Team 9', team2: 'Team 10', date: 'Thursday 24 July 02:00 PM' },
  { team1: 'Team 11', team2: 'Team 12', date: 'Friday 25 July 12:00 PM' },
];

const Standings = () => {
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
