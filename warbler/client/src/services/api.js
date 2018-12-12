import axios from 'axios';

export function setTokenHeader(token) {
   if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
   }
   else {
      delete axios.defaults.headers.common.Authorization;
   }
}

/**
 * A wrapper around axios API call that formats errors, etc
 * @param {string} method the Http verb you want to use
 * @param {string} path the route path / endpoint
 * @param {object} data (optional) data in JSON from for POST requests
 */
export default function apiCall(method, path, data) {
   return new Promise((resolve, reject) =>
      axios[method](path, data)
         .then(res => resolve(res.data))
         .catch(err => reject(err.response.data.error)));
}
