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

    console.log(match);

    const showDate = match.matchStatus === 0;

    return (
        <Container>
            <InnerContainer>
                <div>
                    {match.matchStatus === 0 && (<NextLabel>Next</NextLabel>)}
                    {match.matchStatus === 1 && (<NextLabel>In Progress ...</NextLabel>)}
                    {match.matchStatus === 2 && (<NextLabel>Ended</NextLabel>)}
                </div>
                <TeamsContainer>
                    <TeamContainer>
                        <TeamLogo src={`/assets/image/${match.team1Logo}`} alt={`${match.team1} logo`} />
                        <TeamLabel>{match.team1}</TeamLabel>
                        {(match.matchStatus === 1 || match.matchStatus === 2) && (<TeamLabel>{match.team1Score}</TeamLabel>)}
                    </TeamContainer>
                    <TeamContainer>
                        <TeamLogo src={`/assets/image/${match.team2Logo}`} alt={`${match.team2} logo`} />
                        <TeamLabel>{match.team2}</TeamLabel>
                        {(match.matchStatus === 1 || match.matchStatus === 2) && (<TeamLabel>{match.team2Score}</TeamLabel>)}
                    </TeamContainer>
                </TeamsContainer>
                
                {showDate && (
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
