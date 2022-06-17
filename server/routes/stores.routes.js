const router = require('express').Router();
const mongoose = require('mongoose');
const Partner = require('../models/Partner.model');
const Store = require('../models/Store.model');

const { isAuthenticated } = require('../middleware/jwt.middleware');

router.post('/', isAuthenticated, (req, res) => {

    const { name, address, imageUrl } = req.body;

    const partnerId = req.payload._id;

    Store
    .create({ name, address, imageUrl })
    .then((newStore) => {
        Partner
        .findByIdAndUpdate(partnerId, { $push: { locals: newStore._id }})
        .then((updatedPartner) => res.status(201).json(updatedPartner))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));

});

module.exports = router;