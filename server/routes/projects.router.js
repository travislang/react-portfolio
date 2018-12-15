const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool');


router.get('/', ( req, res ) => {
    let sqlText = `SELECT "projects".id, "projects".name, "projects".description, "projects".thumbnail, "projects".date_completed, "projects".github, "projects".website, "projects".tag_id, "tags".tag_name from "projects"
    LEFT OUTER JOIN "tags" ON "projects".tag_id = "tags".id;`;

    pool.query(sqlText)
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