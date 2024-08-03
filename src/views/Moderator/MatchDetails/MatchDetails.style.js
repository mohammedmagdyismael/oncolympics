import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 40px;
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
`;

export const NextLabel = styled.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
`;

export const TeamLabel = styled.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
`;

export const TeamLogo = styled.img`
    width: 120px;
`;

export const MatchDate = styled.p`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`;
