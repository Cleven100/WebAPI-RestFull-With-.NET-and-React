import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_URL_BASE;


axios.interceptors.request.use( (config) => {
 
    const token_security = window.localStorage.getItem('token');

    if(token_security) {
        config.headers.Authorization = 'Bearer ' + token_security;
        return config;
    }
 


}, error => {
    return Promise.reject(error);
})


const requestGeneric = {
    get: (url) => axios.get(url),
    post: (url, body) => axios.post(url,body),
    put: (url, body) => axios.put(url,body),
    delete: (url) => axios.gelete(url)
}

export default requestGeneric

