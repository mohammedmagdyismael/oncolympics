import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 40px;
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const TeamsContainer = styled.div`
    display: flex;
    gap: 100px;
`;


export const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: flex-start;
`;

export const NextLabel = styled.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
`;

export const TeamLabel = styled.p`
    font-weight: bold;
    font-size: 22px;
    text-align: center;
    margin: auto 0;
    width: 165px;
`;

export const TeamScore = styled(TeamLabel)`
    margin: 5px 0;
`;

export const TeamLogo = styled.img`
    width: 90px;
    margin: 0 auto;
`;

export const MatchDate = styled.p`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`;
