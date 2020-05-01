const router = require('express').Router();
let Author = require('../models/author_schema.model');

router.route('/').get((req,res)=>{
    Author.find()
    .then( result => {
        res.json(result);
    })
    .catch(err => res.status(400).json('Error :' + err));
})

router.route('/add').post((req,res) => {
    let name = req.body.name;
    let lastname = req.body.lastname;
    let fathername = req.body.fathername;

    const newAuthor = new Author({name, lastname, fathername});

    newAuthor.save()
    .then((result) => {
        res.send(result);
    })
    .catch(err => res.status(400).json('Error :' + err));
})

router.route('/delete/:id').delete((req,res) => {
    let id = req.params.id;

    Author.findByIdAndDelete(id)
    .then( result => {
        Author.find()
        .then((author) => {
            res.send(author);
        })
        .catch(err => res.status(400).json('Error :' + err));
    })
    .catch(err => res.status(400).json('Error :' + err));
})

module.exports = router