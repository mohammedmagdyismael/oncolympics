import axios from 'axios';
import { urls } from 'app/configs/urls';

export const groupsAPI = async () => {
    try {
        const response = await axios.get(urls.groups);
        return response.data;
    } catch (e) {
        console.error(e);
        return '';
    }
};