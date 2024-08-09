import axios from 'axios';
import { urls } from './urls';

export const allMatchesAPI = async () => {
    try {
        const response = await axios.get(urls.allmatches);
        const formattedMatches = response?.data?.data.map(match => {
            let localTimeString = match?.date_time.replace('Z', '');
            let localDate = new Date(localTimeString);
            return ({
            team1: match.team1_name,
            team2: match.team2_name,
            date: localDate.toLocaleString('en-EG', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            }),
            team1Score: match.score_team1,
            team2Score: match.score_team2,
            matchStatus: match.match_status,
            matchId: match.match_id,
            team1Logo: match.team1_logo,
            team2Logo: match.team2_logo,
          })});
        return formattedMatches;
    } catch (e) {
        console.log(e);
        return '';
    }
};

export const matchDetailsAPI = async matchId => {
    try {
        const response = await axios.get(`${urls.matchdetails}?matchid=${matchId}`);
        return response?.data?.data;
    } catch (e) {
        console.log(e);
        return '';
    }
}