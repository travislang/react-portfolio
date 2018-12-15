const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool');

router.get('/', ( req, res ) => {
    pool.query('SELECT * FROM "tags";')
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
            console.log('error in tags DB GET:', err);
            res.sendStatus(500);
        });
})

module.exports = router;