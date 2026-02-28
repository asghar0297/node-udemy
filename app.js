const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('69a23d3629baa43c8f081cb4')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);



mongoose.connect(
  'mongodb+srv://root:1234@cluster0.ura1y.mongodb.net/shop_v1?appName=Cluster0')
.then(result => {
    User.findOne().then(user =>{
      if(!user){
          const user = new User
          user.name = 'Asghar Ali'
          user.email = 'asgharali0297@gmail.com'
          user.cart = { items:[]}
          user.save()
      }
    })
    console.log('connected');
    app.listen(3000)
}).catch(err =>{
  console.log(err);
  
})
