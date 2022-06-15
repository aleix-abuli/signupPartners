const router = require('express').Router();

router.get('/', (req, res) => {res.json('Welcome to Partners Server.')});

router.post('/signup', (req, res) => {
    
})

module.exports = router;