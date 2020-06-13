module.exports = {
    GOOGLE:{
        clientID:"481275058042-uuttcp9rmncvm91ip13quk3r4lq39o5d.apps.googleusercontent.com",
        clientSecret:"PYLuoGv4-FzjdICXMx1TNFaB",
        callback_url:`https://social-login-test-api.herokuapp.com/auth/google/callback`
    },
    FACEBOOK: {
        clientID: "259491592059614",
        clientSecret: "f15e2de090e2ec48bbbbe81edbac3608",
        callback_url: `https://social-login-test-api.herokuapp.com/auth/facebook/callback`,
        profileFields: ['id', 'displayName', 'photos', 'email']
    }
}