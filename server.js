const express = require('express');
const app = express();
const methodOverride = require('method-override');

const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000; /***** I'M DIFFERENT *****/

const db = mongoose.connection;

/***** MODELS *****/
const Spring = require('./models/springs.js');
const springSeed = require('./models/springs.js');

const springController = require('./controllers/springs.js')
const userController = require('./controllers/users_controllers.js')
const session = require('express-session')
const User = require('./models/users.js')
const bcrypt = require('bcrypt')

/***** IMPORT DATA *****/

/***** MIDDLEWARE *****/
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

/***** CONTROLLERS *****/
app.use('/springs', springController)
app.use('/users', userController)

/***** MONGO DB *****/
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project2'; /***** I'M DIFFERENT *****/

mongoose.connect(MONGO_URI, {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true}); /***** I'M DIFFERENT *****/

db.on('open', () => {console.log('Mongo works')});

/***** AUTHENTICATION *****/
const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

/***** ROUTE TO LOGIN PAGE *****/
app.get('/sessions/new', (req, res) => {
    res.render('sessions/New', {
        currentUser: req.session.currentUser
    })
})

/***** AUTHENTICATION ROUTE TO LOGIN *****/
app.post('/sessions/', (req, res) => {
    User.findOne({username: req.body.username}, (error, foundUser) => {
        if(error) {
            console.log(error)
            res.send('DB had a problem!' + error)
        } else if(!foundUser) {
            res.redirect('/users/new')
        } else {
            if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser.username
                res.redirect('/springs')
            } else {
                res.send('wrong password')
            }
        }
    })
})

app.delete('/sessions', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/sessions/new');
    })
})

/***** LISTEN *****/
app.listen(PORT, (req, res)=> {
    console.log('Connected');
}); /***** I'M DIFFERENT: Make sure this doesn't say 3000. YOU HAVE TO USE PORT *****/