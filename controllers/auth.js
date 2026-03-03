const User = require('../models/user')

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
    pageTitle: 'Login',
    path: '/login',
    isAuthenticated: req.session.isLoggedIn
    });
};

exports.postLogin = (req, res, next) => {
    User.findById('69a23d3629baa43c8f081cb4')
    .then(user => {
        req.session.isLoggedIn = true
        req.session.user = user 
        res.redirect('/');
    }).catch( err =>{
        console.log(err)
    })
};

