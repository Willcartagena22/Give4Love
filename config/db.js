const mongoose = require('mongoose');
const dbURL = require('./properties').DB;

module.exports = () => {
    mongoose.connect(dbURL, {
        useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        .then(() => console.log(`Mongo connectes on ${dbURL}`))
        .catch(err => console.log(`Connection has error ${err}`))

    process.on('SIGNIN', () => {

        mongoose.connection.close(() => {
            console.log(`Mongo is disconnect`);
            process.exit(0)

        });
    });

}