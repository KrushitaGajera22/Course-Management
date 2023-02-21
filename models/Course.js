module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define("Course", {
        courseName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        courseDuration: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        courseFees: {
            type: DataTypes.NUMERIC,
            allowNull: false,
        },
    });

    return Course;
};