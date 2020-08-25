// DOTENV =================
require('dotenv').config()
// DEPENDANCIES ===========
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const PORT = process.env.PORT || 3000;
const reactViews = require('express-react-views');
const Kick = require('./models/kicks.js');
const session = require('express-session')

const createEngine = reactViews.createEngine

const methodOverride = require('method-override');

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(e => {
    console.error(e.message);
  });
  ;

db.once('open', () => {
    console.log('Mongo is working!');
});
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'jsx');
app.engine('jsx', createEngine());
app.use(methodOverride('_method'));
app.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false
    })
  )

// HOMEPAGE ================
app.get('/', (req, res) => {
    res.render('static/Homepage')
})

// GALLERY ================
app.get('/gallery', (req, res) => {
    res.render('static/Gallery')
})


const kicksController = require('./controllers/kicks.js')
app.use('/collection', kicksController)

// const userController = require('./controllers/users_controller.js')
// app.use('/users', userController)

// const sessionsController = require('./controllers/sessions_controller.js')
// app.use('/sessions', sessionsController)

app.listen(PORT, (req, res) => {
    console.log('Check the kicks!');
    
})