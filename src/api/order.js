import axios from 'axios';
import { BASE_URL } from 'data/GlobalVariables';

export default axios.create({
    baseURL: `${BASE_URL}/order`,
    headers: { 'Content-Type': 'application/json' },
});
