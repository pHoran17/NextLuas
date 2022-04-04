import axios from 'axios';

export default axios.create({
    baseURL: 'https://luasforecasts.rpa.ie/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 1000
})