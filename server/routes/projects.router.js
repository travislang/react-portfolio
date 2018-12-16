const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool');

// get route to retrieve projects from db
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

router.post('/', ( req, res ) => {
    const project = req.body;

    let sqlText = `INSERT INTO "projects" ("name", "description", "website", "github", "date_completed", "tag_id")
    VALUES($1, $2, $3, $4, $5, $6);`
    pool.query(sqlText, [project.name, project.description, project.website, project.github, project.date, project.tag_id])
    .then( result => {
        res.sendStatus(201);
    }).catch( err => {
        console.log('error in project post query:', err);
        res.sendStatus(500);
    })
})

//delete project from db
router.delete('/:id', ( req, res ) => {
    let sqlText = `DELETE FROM "projects"
                    WHERE "id" = $1;`
    pool.query(sqlText, [req.params.id])
    .then( result => {
        res.sendStatus(200);
    }).catch( err => {
        console.log('error in project delete route:', err);
        res.sendStatus(500);
    })
})

module.exports = router;