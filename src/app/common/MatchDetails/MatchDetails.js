import React from 'react';
import Button from '../../../app/components/Button';
import {
    MatchDate,
    NextLabel,
    TeamLabel,
    TeamLogo,
    Container,
    InnerContainer,
    TeamContainer,
    TeamsContainer,
    extendRewardBtn,
    extendPenatlyBtn,
    RewardsPanelContainer,
    TeamScore,
    TeamLabelLogoContainer,
} from './MatchDetails.style';
import { displayDateTime } from './helper';

const MatchDetails = ({ match, penaltyTeam, rewardTeam, isAdmin }) => {
    const showDate = match.match_status === 0;
    const showScores = (match.match_status === 1 || match.match_status === 2);
    const showRewardBtns = match.match_status === 1 && isAdmin;

    const team1Name = match?.match_status === 1 ? (match.team1_abbrev || match.team1_name) : match.team1_name;
    const team1Score = match?.score_team1;
    const team1Logo = `/assets/image/${match.team1_logo}`;
    const team2Name = match?.match_status === 1 ? (match.team2_abbrev || match.team2_name) : match.team2_name;
    const team2Score = match?.score_team2;
    const team2Logo = `/assets/image/${match.team2_logo}`;


    const onRewardHandler = teamId => {
        if (rewardTeam) {
            rewardTeam(teamId)
        }
    }

    const onPenaltyHandler = teamId => {
        if (penaltyTeam) {
            penaltyTeam(teamId)
        }
    }

    return (
        <Container isMini={match.match_status === 1}>
            <InnerContainer>
                <div>
                    {match.match_status === 0 && (<NextLabel>Next</NextLabel>)}
                    {match.match_status === 1 && (<NextLabel isMini={match.match_status === 1}>In Progress ...</NextLabel>)}
                    {match.match_status === 2 && (<NextLabel>Ended</NextLabel>)}
                </div>
                <TeamsContainer isMini={match.match_status === 1}>
                    <TeamContainer>
                        <TeamContainer isMini={match.match_status === 1}>
                            <TeamLabelLogoContainer isRtL={match.match_status === 1} isMini={match.match_status === 1}>
                                <TeamLogo isMini={match.match_status === 1} src={team1Logo} alt={`${team1Name} logo`} />
                                <TeamLabel isMini={match.match_status === 1}>{team1Name}</TeamLabel>
                            </TeamLabelLogoContainer>
                            {showScores && (<TeamScore isMini={match.match_status === 1}>{team1Score}</TeamScore>)}
                        </TeamContainer>
                        
                        {showRewardBtns && (
                            <RewardsPanelContainer>
                                <Button label="+ 1" onClick={() => onRewardHandler(match.team1_id)} extendStyles={extendRewardBtn} />
                                <Button label="- 1" onClick={() => onPenaltyHandler(match.team1_id)} extendStyles={extendPenatlyBtn} />
                            </RewardsPanelContainer>
                        )}
                    </TeamContainer>

                    <TeamContainer>
                        <TeamContainer isRtL={match.match_status === 1} isMini={match.match_status === 1}>
                            <TeamLabelLogoContainer isLTR={match.match_status === 1} isMini={match.match_status === 1}>
                                <TeamLogo isMini={match.match_status === 1} src={team2Logo} alt={`${team2Name} logo`} />
                                <TeamLabel isMini={match.match_status === 1}>{team2Name}</TeamLabel>
                            </TeamLabelLogoContainer>
                            {showScores && (<TeamScore isMini={match.match_status === 1}>{team2Score}</TeamScore>)}
                        </TeamContainer>
                        
                        {showRewardBtns && (
                            <RewardsPanelContainer>
                                <Button label="+ 1" onClick={() => onRewardHandler(match.team2_id)} extendStyles={extendRewardBtn} />
                                <Button label="- 1" onClick={() => onPenaltyHandler(match.team2_id)} extendStyles={extendPenatlyBtn} />
                            </RewardsPanelContainer>
                        )}
                        
                    </TeamContainer>
                </TeamsContainer>
                
                {showDate && (
                    <div>
                        <MatchDate>{displayDateTime(match?.date_time)}</MatchDate>
                    </div>
                )}
            </InnerContainer>
        </Container>
    );
};

export default MatchDetails;
