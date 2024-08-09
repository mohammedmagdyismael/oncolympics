import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 40px;
    ${props => props.isMini && `
        padding: 0 40px;
    `};
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