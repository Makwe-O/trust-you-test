import axios from 'axios';

export const baseUrl =
  'https://front-end-technical-test-api.integration.eu.cloud.trustyou.net';

export const sendRequest = (
  endpoint,
  queryParams,
  contentType = 'application/json'
) => {
  try {
    return axios({
      url: `${baseUrl}${endpoint}`,
      method: 'GET',
      params: queryParams,
      headers: {
        Accept: 'application/json',
        'Content-type': contentType,
        //this below might no longer be needed if the login in processs appends the token to the header already
        // Authorization: localStorage.getItem('access')
        //   ? `Bearer ${localStorage.getItem('access')}`
        //   : '',
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
