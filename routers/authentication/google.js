module.exports = (router, passport, logger) => {
    router.get(
        '/auth/google',
        passport.authenticate(
            'google',
            {
                scope: ['profile', 'email']
            }
        )
    );

    router.get(
        '/google/logout',
        (req, res, next) => {
            req.logout();
            res.redirect('/');
        }
    );

    router.get(
        '/auth/google/callback',
        passport.authenticate(
            'google',
            { 
                failureRedirect: '/' 
            }
        ),
        (req, res, next) => {
            res.redirect('/');
        }
    );
}