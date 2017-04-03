const models = require('../models');

const Account = models.Account;

const loginpage = (req, res) => {
    res.render('login');
};

const signuppage = (req, res) => {
    res.render('signup');
};

const logout = (req, res) => {
    res.redirect('/');
};

const login = (req, res) => {
    
};

const signup = (req, res) => {
    
};

module.exports.loginPage = loginPage;
module.exports.login = login;
module.exports.signuppage = signuppage;
module.exports.signup = signup;
module.exports.logout = logout;