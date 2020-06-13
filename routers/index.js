module.exports = (router, passport, logger) => {
    router.get(
        '/',
        (req, res, next) => {
            logger.info('info render home page from / route');
            const { user } = req;
            res.render('index', { user });
        }
    );
}