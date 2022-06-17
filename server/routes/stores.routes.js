const router = require('express').Router();
const mongoose = require('mongoose');
const Partner = require('../models/Partner.model');
const Store = require('../models/Store.model');

const { isAuthenticated } = require('../middleware/jwt.middleware');

router.post('/', /* isAuthenticated, */ (req, res) => {

    const { name, address, imageUrl } = req.body;

    // When isAuthenticated works I have to access the payload to find partner by id and pushing the new store

    Store
    .create({ name, address, imageUrl })
    .then((newStore) => {
        console.log('Created this store: ', newStore);
        res.status(201).json(newStore);
    })
    .catch((err) => console.log(err));

});

module.exports = router;