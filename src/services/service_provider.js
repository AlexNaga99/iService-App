import { request } from './https';

const service_provider = {
  getEstablishment: (token) => {
    return request(token).get('/establishment/');
  },
  getEstablishmentById: (id, token) => {
    return request(token).get('/establishment/'+ id);
  },
}

export {
  service_provider
}