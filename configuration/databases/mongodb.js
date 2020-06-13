let databaseName = 'socialLogin';
let password = 'oxd4q6oq7nQrOg2x'
// let localLink = `mongodb://localhost/${databaseName}`;
let onlineDb = `mongodb+srv://ahmedehab:${password}@quiz-hvhc1.gcp.mongodb.net/${databaseName}?retryWrites=true&w=majority`

const mongoose = require('mongoose');

module.exports = (logger) => mongoose.connect(
    onlineDb,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    },
    ()=>{
        logger.info(`connect to database ${databaseName}`);
    }
)