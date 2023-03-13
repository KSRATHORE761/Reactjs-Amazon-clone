import axios from 'axios';

const instance = axios.create({
    baseURL:'https://us-central1-clone-37fef.cloudfunctions.net/api' // The cloud function URL
});

export default instance;