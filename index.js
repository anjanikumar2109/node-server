const models = require('./model');
const seed = require('./seed');

const source = models.source;
source
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        source.sync({ force: true }).then(async () => {
           console.log('Models synced successfully');
           await seed();
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });