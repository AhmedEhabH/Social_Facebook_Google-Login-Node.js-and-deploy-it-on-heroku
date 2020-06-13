module.exports = {
    GOOGLE:{
        clientID:"481275058042-v8ifll5f9bg2qa562hvm0qheqa6s90h7.apps.googleusercontent.com",
        clientSecret:"lGGNy4R3Nkk-Hg0N6a0JQKIE",
        callback_url:`https://social-login-test-api.herokuapp.com/auth/google/callback`
    },
    FACEBOOK: {
        clientID: "259491592059614",
        clientSecret: "f15e2de090e2ec48bbbbe81edbac3608",
        callback_url: `https://social-login-test-api.herokuapp.com/auth/facebook/callback`,
        profileFields: ['id', 'displayName', 'photos', 'email']
    }
}