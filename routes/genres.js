const express = require('express');
const Joi = require('joi');
const router = express.Router();

// Mobile Videos
const genres = [
    {id: 1, name:'Commentary'},
    {id: 2, name:'Tutorials'},
    {id: 3, name:'Comedy'},
    {id: 4, name:'Reactions'},
    {id: 5, name:'Educational'},
    {id: 6, name:'Sports'}
];

// getting genres api
router.get('/',(req,res) => {
    res.send(genres);
});

// posting a new genre
router.post('/', (req,res) => {
    const {error} = validateGenre(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
});

// Modifying a given id
router.put('/:id', (req,res) => {
    const genre = genres.find(c=>c.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send("The genre with this ID was not found.");

    const {error} = validateGenre(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    genre.name = req.body.name;
    res.send(genre);
})

// deleting with given id
router.delete('/:id',(req,res) => {
    const genre = genres.find(c=>c.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send("The genre with this ID was not found.");

    const index = genres.indexOf(genre);
    genres.splice(index, 1);

    res.send(genre);
});

// getting based off of an id
router.get('/:id', (req,res) => {
    const genre = genres.find(c=>c.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send("The genre with this ID was not found.");
    res.send(genre);
});

// validation using Joi
function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(genre,schema); // 13.1.0 needed for validate([args])
}

module.exports = router;