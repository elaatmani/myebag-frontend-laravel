import axios from 'axios'
import { backendUrl } from '@/config/app'

const Api = axios.create({
    baseURL: backendUrl,
});

const ApiForm = axios.create({
    baseURL: backendUrl,
});

ApiForm.defaults.withCredentials = true;
ApiForm.defaults.headers = { 'content-type': 'multipart/form-data', 'Accept': 'application/json' };

Api.defaults.withCredentials = true;
Api.defaults.headers = { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' };

export { ApiForm };
export default Api