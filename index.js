const Joi = require('joi'); // input validation
const express = require('express');
const app = express();

app.use(express.json());

// Mobile Videos
const genres = [
    {id: 1, name:'Commentary'},
    {id: 2, name:'Tutorials'},
    {id: 3, name:'Comedy'},
    {id: 4, name:'Reactions'},
    {id: 5, name:'Educational'},
    {id: 6, name:'Sports'}
];