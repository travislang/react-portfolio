const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool');


router.get('/', ( req, res ) => {
    pool.query('SELECT * FROM "projects";')
    .then( result => {
        res.send( result.rows );
    }).catch( err => {
        console.log( 'error in DB GET:', err );
        res.sendStatus( 500 );
    });
});

// router.post('/', ( req, res ) => {

// })

module.exports = router;