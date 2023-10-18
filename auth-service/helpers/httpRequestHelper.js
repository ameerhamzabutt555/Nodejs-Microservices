const axios = require('axios');

// Utility function to make Axios calls
const axiosCall = async (url, method = 'get', data = null, options = {}) => {
  try {
    let response;

    if (method === 'post') {
      response = await axios.post(url, data, options);
    } else if (method === 'get') {
      response = await axios.get(url, data, options);
    } else if (method === 'put') {
      response = await axios.put(url, data, options);
    } else if (method === 'delete') {
      response = await axios.delete(url, options);
    }
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

module.exports = { axiosCall };
