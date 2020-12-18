import axios from 'axios';

export default axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
    }
});