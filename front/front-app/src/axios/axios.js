import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:9997',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});