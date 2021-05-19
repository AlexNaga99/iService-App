import { request } from './https';

const credentials_service = {
  singIn: (body) => {
    return request().post('/auth/login', body);
  },
  singUp: (body) => {
    return request().post('/user', body);
  },
}

export {
    credentials_service
}