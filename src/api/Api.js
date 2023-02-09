import axios from 'axios'
import { backendUrl } from '@/config/config'

const Api = axios.create({
    baseURL: backendUrl,
});

Api.defaults.withCredentials = true;
Api.defaults.headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' };


export default Api