const router = require('express').Router();
const authRoutes = require('./auth.routes');

router.get('/', (req, res) => {res.json('Welcome to Partners Server.')});

router.use('/auth', authRoutes);

module.exports = router;