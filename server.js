// DOTENV =================
require('dotenv').config()
// DEPENDANCIES ===========
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const PORT = process.env.PORT || 3000;
const reactViews = require('express-react-views');
const Kick = require('./models/kicks.js');

const createEngine = reactViews.createEngine

const methodOverride = require('method-override');

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db.once('open', () => {
    console.log('Mongo is working!');
});
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'jsx');
app.engine('jsx', createEngine());
app.use(methodOverride('_method'));

// HOMEPAGE ================
app.get('/', (req, res) => {
    res.render('Homepage')
})

const kicksController = require('./controllers/kicks.js')
app.use('/collection', kicksController)


app.listen(PORT, (req, res) => {
    console.log('Check the kicks!');
    
})