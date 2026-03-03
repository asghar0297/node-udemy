const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const session = require('express-session');
const MongoStore = require('connect-mongo').default;

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI = 'mongodb+srv://root:1234@cluster0.ura1y.mongodb.net/shop_v1?appName=Cluster0'

const app = express();

const store = MongoStore.create({
        mongoUrl: MONGODB_URI
})

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));




app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
}));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);



mongoose.connect(MONGODB_URI)
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
