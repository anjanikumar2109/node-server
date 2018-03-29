const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'postgres', 'admin@1234', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;