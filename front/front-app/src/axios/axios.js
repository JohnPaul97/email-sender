import axios from 'axios';

console.log("in axios")
console.log(localStorage.getItem('token'))

const instance = axios.create({
    baseURL: 'http://localhost:9997',
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});

instance.interceptors.response.use((response) => response, (error) => {
    if (error.response.status === 401) {
        // await localStorage.removeItem('token');
        localStorage.clear();
        window.location = '/';
    }
});

export default instance;