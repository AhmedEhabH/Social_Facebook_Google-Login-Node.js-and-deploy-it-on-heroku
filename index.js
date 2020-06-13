const bodyParser = require('body-parser');
const express = require('express');
const expressSession = require('express-session');
const passport = require('passport');

const user = require('./models/users/index');

const PORT = process.env.PORT || 2007;

const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
const logger = require("./configuration/logger")(app);
require('./configuration/databases/mongodb')(logger); // Connect to mongodb

const FacebookStrategy = require('./configuration/authentication/facebook.js')(logger);
const GoogleStrategy = require('./configuration/authentication/google')(logger);

passport.use(FacebookStrategy);
passport.use(GoogleStrategy);

app.use(expressSession({
    secret: "SESSION_SECRET",
    key: 'AE',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

require('./routers/index')(app, passport, logger);
require('./routers/authentication/google')(app, passport, logger);
require('./routers/authentication/facebook')(app, passport, logger);

app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
})