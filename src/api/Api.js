import axios from 'axios'
import { backendUrl } from '@/config/app'

const Api = axios.create({
    baseURL: backendUrl,
});

Api.defaults.withCredentials = true;
Api.defaults.headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' };


export default Api