const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express()

app.use(bodyParser.json());


app.post('/events', (req,res) => {
  const event = req.body;

  // I am assuming all these requests are going to be successful,
  //  and that explains why I dont have any serious implementation
  axios.post('http://localhost:4000/events', event ); // for posts
  axios.post('http://localhost:4001/events', event ); // for comments
  axios.post('http://localhost:4002/events', event ); // for query-service

  res.send({status : 'OK'});
})

app.listen(40005, () => {
  console.log('Listening on 4005')
})