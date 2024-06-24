const Sequelize = require("sequelize");

const sequelize = new Sequelize('rxpressdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequelize;