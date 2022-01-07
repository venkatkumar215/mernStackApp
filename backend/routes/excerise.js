const router = require('express').Router();
let Exercise = require('../models/execise.model');


router.route('/').get((req, res) => {
    Exercise.find()
        .then(Exercise => res.json(Exercise))
        .catch(err => res.status(400).json('Error:' + err));
    
        
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const newUser = new Exercise({
        username,
        description,
    duration,date});
    newUser.find()
        .then(users => res.json('User Added!'))
        .catch(err => res.status(400).json('Error:' + err));
    
        
});

module.exports = router;