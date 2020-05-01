const router = require('express').Router();
let User = require('../models/user_schema.model');

router.route('/').get((req,res)=>{
    User.find()
    .then( users => {
        res.json(users);
    })
    .catch(err => res.status(400).json('Error :' + err));
})

router.route('/add').post((req,res) => {
    let name = req.body.name;
    let lastname = req.body.lastname;
    let fathername = req.body.fathername;

    const newUser = new User({name, lastname, fathername});

    newUser.save()
    .then((result) => {
        res.send(result);
    })
    .catch(err => res.status(400).json('Error :' + err));
})

router.route('/delete/:id').delete((req,res) => {
    let id = req.params.id;

    User.findByIdAndDelete(id)
    .then( result => {
        User.find()
        .then((author) => {
            res.send(author);
        })
        .catch(err => res.status(400).json('Error :' + err));
    })
    .catch(err => res.status(400).json('Error :' + err));
})

module.exports = router