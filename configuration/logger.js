const expressPino = require('express-pino-logger');
const pino = require('pino');

const logger = pino({
    level: process.env.LOG_LEVEL || 'info',
});
const expressLogger = expressPino({
    logger
})

module.exports = (app)=>{
    app.use(expressLogger);
    return logger
}