import axios  from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:5001/fir-91b95/us-central1/api' // THE API (cloud function)  url
});

export default instance;