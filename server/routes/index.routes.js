const router = require('express').Router();
const authRoutes = require('./auth.routes');
const partnerRoutes = require('./partner.routes');

router.get('/', (req, res) => {res.json('Welcome to Partners Server.')});

router.use('/auth', authRoutes);
router.use('/partners', partnerRoutes)

module.exports = router;