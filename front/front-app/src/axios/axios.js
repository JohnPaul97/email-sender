import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:9997',
    headers: {
        'Authorization': localStorage.getItem('token')
    }
});