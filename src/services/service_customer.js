import { request } from './https';

const service_customer = {
  getCustomer: (token) => {
    return request(token).get('/customer/');
  },
  updateCustomer: (token) => {
    return request(token).get('/customer/');
  },
}

export {
  service_customer
}