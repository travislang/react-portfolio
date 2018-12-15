const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const projectsRouter = require('./routes/projects.router');
const tagRouter = require('./routes/tags.router');
/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/projects', projectsRouter);
app.use('/tags', tagRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});