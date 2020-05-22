const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000; /***** I'M DIFFERENT *****/
const db = mongoose.connection;
const methodOverride = require('method-override');

/***** IMPORT DATA *****/
const Spring = require('./models/springs.js')

/***** MIDDLEWARE *****/
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride.apply('_method'));
app.set('view engine', 'jsx'):
app.engine('jsx', require('express-react-views').createEngine());

/***** MONGO DB *****/
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project2'; /***** I'M DIFFERENT *****/

mongoose.connect(MONGO_URI, {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true}); /***** I'M DIFFERENT *****/

db.on('open', () => {console.log('Mongo works')})


// ROUTES

app.get('/', (req, res) => {
    res.send('Hello world')
})

/***** INDEX *****/
app.get('/springs', (req, res) => {
    res.render('Index')
})

app.listen(PORT, (req, res)=> {
    console.log('Connected')
}) /***** I'M DIFFERENT: Make sure this doesn't say 3000. YOU HAVE TO USE PORT *****/