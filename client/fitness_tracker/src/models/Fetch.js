const axios = require('axios');
const root = 'http://localhost:3001/users'

export async function api (method, path, data) {
    if (method === 'get') {
        const response = await axios.get(root + path);
        return response.data;
    }
 }