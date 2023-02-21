const express = require('express');
const controller = require('./controllers/controller');

const app = express();

const db = require('./models');
const { Course } = require('./models');

app.set('view engine', 'ejs');

controller(app);

db.sequelize.sync().then((req) => {
    app.listen(3000, () => {
        console.log('Listening to the port 3000');
    });
});


