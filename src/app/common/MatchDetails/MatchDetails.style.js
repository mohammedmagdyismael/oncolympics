import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 40px;
    ${props => props.isMini && `
        padding: 20px 40px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 0 25px rgb(0 0 0 / 25%);
    `};

    @media only screen and (max-width: 855px) {
        padding: 0 20px;
    }
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const TeamsContainer = styled.div`
    display: flex;
    gap: 100px;
    ${props => props.isMini && `
        gap: 55px;
    `};
`;


export const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    ${props => props.isRtL && `
        direction: rtl;
    `};

    ${props => props.isMini && `
        flex-direction: row;
        gap: 15px;
    `};
`;

export const NextLabel = styled.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    ${props => props.isMini && `
        font-size: 18px;
        margin: 10px;
    `};
`;

export const TeamLabelLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    ${props => props.isRtL && `
        direction: rtl;
    `};

    ${props => props.isLTR && `
        direction: ltr;
    `};
    ${props => props.isMini && `
        flex-direction: row;
        gap: 15px;
    `};
`

export const TeamLabel = styled.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    ${props => props.isMini && `
        font-size: 18px;
        margin: 13px 0;
    `};
`;

export const TeamScore = styled(TeamLabel)`
    ${props => props.isMini && `
        font-size: 18px
    `};
`;

export const TeamLogo = styled.img`
    width: 120px;
    height: 120px;
    margin: auto;
    ${props => props.isMini && `
        width: 50px
        height: 50px;
    `};
`;

export const MatchDate = styled.p`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`;

export const extendRewardBtn = css`
    font-size: 16px;
    font-weight: 700;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    background-color: lightgreen;
`;

export const extendPenatlyBtn = css`
    font-size: 16px;
    font-weight: 700;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    background-color: red;
    color: #fff;
`;

export const RewardsPanelContainer = styled.div`
    display: flex;
    gap: 5px;
    justify-content: center;
    margin-top: 10px;
`;

export const ScoreBoardContainer = styled.div`
    position: relative;
`;

export const ScoreBoardTemp = styled.img`
    width: 600px;
`;

///

export const MatchStatus = styled.p``;


// Logos
export const TeamsLogo = styled.img`
    width: 120px;
    height: 120px;
    position: absolute;
    top: 52px;
`;

export const Team1Logo = styled(TeamsLogo)`
    left: 35px;    
`;

export const Team2Logo = styled(TeamsLogo)`
    right: 35px;
`;

// Teams Names
export const TeamsNames = styled.p`
    width: fit-content;
    margin: 0;
    font-weight: 900;
    color: #843891;
    position: absolute;
    top: 189px;
`;

export const Team1Name = styled(TeamsNames)`
    left: 155px;
`;

export const Team2Name = styled(TeamsNames)`
    right: 155px;
`;

export const MatchStatusLabel = styled.p`
    width: 80px;
    text-align: center;
    margin: 0;
    font-weight: 900;
    color: #843891;
    position: absolute;
    top: 189px;
    left: 50%;
    transform: translate(-50%, 0%);
    background-color: white;
`;

// Award
export const AwardAction = styled.div`
    width: 20px;
    height: 33px;
    position: absolute;
    bottom: 18px;
    cursor: pointer;
`;

export const Award1Action = styled(AwardAction)`
    left: 49px;
`;

export const Award2Action = styled(AwardAction)`
    right: 49px;
`;


// Penalty
export const PenaltyAction = styled.div`
    width: 20px;
    height: 45px;
    position: absolute;
    bottom: 4px;
    cursor: pointer;
`;

export const Penalty1Action = styled(PenaltyAction)`
    left: 73px;
`;

export const Penalty2Action = styled(PenaltyAction)`
    right: 73px;
`;

// Scores
export const ScoreContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: fit-content;
    min-width: 100px;
    position: absolute;
    top: 96px;
    left: 249px;
`;

export const ScoreItem = styled.p`
    font-weight: 900;
    color: #843891;
    max-width: 10px;
    margin: 0;
    font-size: 24px;
`;