const User = require('../models/user')

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
    pageTitle: 'Login',
    path: '/login',
    isAuthenticated: req.session.isLoggedIn
    });
};

exports.postLogin = (req, res, next) => {
    User.findById('69a76da70a7c347648574a70')
    .then(user => {
        req.session.isLoggedIn = true
        req.session.user = user 
        res.redirect('/');
    }).catch( err =>{
        console.log(err)
    })
};

exports.postLogout = (req, res, next) => {
    req.session.destroy((err) =>{
        console.log(err)
        res.redirect('/');
    })
};

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    isAuthenticated: false
  });
};

exports.postSignup = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    User.findOne({email:email})
    .then(userDoc =>{
        if(userDoc){
            return res.redirect('/signup')
        }
        const user = new User({
            email:email,
            password:password,
            cart: { items:[]}
        })
        return user.save()
    })
    .then(result =>{
        res.redirect('/login')
    })
    .catch(err =>{
        console.log(err);
    })
};

