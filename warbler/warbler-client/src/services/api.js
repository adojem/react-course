import axios from 'axios';

const apiCall = (method, path, data) =>
   new Promise((resolve, reject) =>
      axios[method](path, data)
         .then(res => resolve(res.data))
         .catch(err => reject(err.response.data.error)));

export default apiCall;
