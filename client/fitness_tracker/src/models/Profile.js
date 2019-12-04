const axios = require('axios');
const root = 'http://localhost:3001/users';

export const Profile = {
    async getFirstName (username) {
        const url = root + '/' + username + '/profile/firstname';
        const response = await axios.get(url);
        return response.data;
    }
}