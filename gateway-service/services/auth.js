const express = require('express');
const router = express.Router();
const { axiosCall } = require('../helper/httpRequestHelper');

router.post('/', async (req, res) => {
  const response = await axiosCall(
    process.env.AUTH_SERVICE_URL,
    'post',
    req.body
  );
  res.send(response);
});

router.get('/', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1] || '';
  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axiosCall(
    process.env.AUTH_SERVICE_URL,
    'get',
    '',
    options
  );
  res.send(response);
});

module.exports = router;
