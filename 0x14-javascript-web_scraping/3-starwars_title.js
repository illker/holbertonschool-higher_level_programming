#!/usr/bin/node

const request = require('request');
const myArgs = process.argv.slice(2);
const url = 'https://swapi-api.hbtn.io/api/films/' + myArgs[0];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(JSON.parse(body).title);
  }
});
