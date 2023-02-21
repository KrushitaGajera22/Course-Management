const db = require('../models');
const { Course } = require('../models');

module.exports = function (app) {

    app.get('', (req, res) => {
        res.render('index');
    });


    app.get('/select', (req, res) => {
        Course.findAll({ where: { courseName: "Java" } })
            .then((courses) => {
                res.send(courses)
            }).catch((err) => {
                console.log(err);
            })
    });

    app.get('/insert', (req, res) => {
        Course.create({
            courseName: "Express",
            courseDuration: "25 days",
            courseFees: 2500,
        }).catch((err) => {
            if (err) {
                console.log(err);
            }
        });

        res.send("insert");
    });

    app.get('/delete', (req, res) => {
        Course.destroy({ where: { id: 6 } });
        res.send('Delete');
    });
}