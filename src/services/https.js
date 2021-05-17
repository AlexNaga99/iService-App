import axios from 'axios';
import config from '../../config.json';

const request = (token) => {
  let headers = token ? {'Authorization': 'Bearer ' + token} : { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

  return axios.create({
    baseURL: config['API_URL'],   
    withCredentials: false,
    headers
  });
} 

export { request }