/*

npm init --yes
npm i nodemon
npm i express
npm i joi@13.1.0
postman

*/
const Joi = require('joi'); // input validation
const genres = require('./routes/genres');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/genres',genres);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}!`));