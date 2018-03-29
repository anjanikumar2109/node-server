const models = require('./model');
const seed = require('./seed');

const source = models.source;
source
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        source.sync({ force: false }).then(() => {
           console.log('Models synced successfully');
           seed();
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });