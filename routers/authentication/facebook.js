const facebookController = require('../../controllers/authenticationController');

module.exports = (router, passport, logger) => {

    router.get(
        '/auth/facebook',
        passport.authenticate(
            'facebook',
            {
                scope: 'email'
            }
        )
    );


    router.get(
        '/auth/facebook/callback',
        passport.authenticate(
            'facebook',
            {
                successRedirect: '/facebook/account',
                failureRedirect: '/login'
            }
        ),
    );

    router.get(
        '/facebook/logout',
        (req, res) => {
            logger.debug('log out')
            req.logout();
            res.redirect('/');
        }
    )

    router.get(
        '/facebook/account',
        facebookController.isAuthenticated,
        (req, res, next)=>{
            res.render('account', { user: req.user });
        }
    )
}