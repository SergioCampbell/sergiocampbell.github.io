const express = require('express');
const router = express.Router();
const Log = require('../models/SignUpModels');
//const bcrypt = require('bcrypt')


router.post('/web', (request, response) => {
    //response.send('send')
    const newProject = new Log({
        Name:request.body.Name,
        Language:request.body.Language,
        Description:request.body.Description,
        ImageURL: request.body.ImageURL
    })

    newProject.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

router.route('/web').get((req, res) =>{
    Log.find()
    .then(foundUser => res.json(foundUser))
})

router.get('/web')
module.exports = router;