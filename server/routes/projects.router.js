const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', ( req, res ) => {
    axios.get('/')
})

module.exports = router;