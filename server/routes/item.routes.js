const router = require('express').Router();
const mongoose = require('mongoose');
const Store = require('../models/Store.model');
const Item = require('../models/Item.model');

const { isAuthenticated } = require('../middleware/jwt.middleware');

router.delete('/:itemId', isAuthenticated, (req, res) => {

    const { itemId } = req.params;

    Item
    .findByIdAndDelete(itemId)
    .then((__) => console.log('deleted item'))
    .catch((err) => console.log(err));

});


module.exports = router;