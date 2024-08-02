import React from 'react';
import {
    MatchDate,
    NextLabel,
    TeamLabel,
    TeamLogo,
    Container,
    InnerContainer,
    TeamContainer,
    TeamsContainer,
} from './MatchDetails.style';

const MatchDetails = ({ match }) => {

    const matchStarted = match.match_status === 1;

    return (
        <Container>
            <InnerContainer>
                <div>
                    {match.match_status === 0 && (<NextLabel>Next</NextLabel>)}
                    {match.match_status === 1 && (<NextLabel>In Progress ...</NextLabel>)}
                </div>
                <TeamsContainer>
                    <TeamContainer>
                        <TeamLogo src={`/assets/image/${match.team1_logo}`} alt={`${match.team1_name} logo`} />
                        <TeamLabel>{match.team1_name}</TeamLabel>
                        {match.match_status === 1 && (<TeamLabel>{match.score_team1}</TeamLabel>)}
                    </TeamContainer>
                    <TeamContainer>
                        <TeamLogo src={`/assets/image/${match.team2_logo}`} alt={`${match.team2_name} logo`} />
                        <TeamLabel>{match.team2_name}</TeamLabel>
                        {match.match_status === 1 && (<TeamLabel>{match.score_team2}</TeamLabel>)}
                    </TeamContainer>
                </TeamsContainer>
                
                {!matchStarted && (
                    <div>
                        <MatchDate>{new Date(match.date_time).toLocaleDateString('en-Eg', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}</MatchDate>
                    </div>
                )}
            </InnerContainer>
        </Container>
    );
};

export default MatchDetails;
