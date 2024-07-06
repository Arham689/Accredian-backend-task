const express = require('express');
const router = express.Router();
const { createRefer } = require('../controllers/createRefer')
// Define a route
router.get('/', (req, res) => {
    res.send(' the main route! is woiking');
});

router.post('/referAF' ,createRefer ) 
// Define another route

router.get('/about', (req, res) => {
    res.send('This is the About page. is working ');
});


// Export the router
module.exports = router;