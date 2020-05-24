const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000; /***** I'M DIFFERENT *****/
const db = mongoose.connection;
const methodOverride = require('method-override');
const springController = require('./controllers/springs.js')
const userController = require('./controllers/users_controllers.js')
const session = require('express-session')
const User = require('./models/users.js')
const bcrypt = require('bcrypt')

/***** IMPORT DATA *****/
const Spring = require('./models/springs.js');

/***** MIDDLEWARE *****/
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride.apply('_method'));
// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false
// }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


/***** CONTROLLERS *****/
// app.use('/springs', springController)
// app.use('/users', userController)

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

// ROUTES

app.get('/', (req, res) => {
    res.send('Hello world');
});

/***** SEED *****/

// app.get('/springs/seed', (req, res) => {
//     Spring.create([
//         {
//             name: "Ginnie Springs",
//             map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5362.80680039381!2d-82.70464614986234!3d29.834315134860265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e8ce44cc5b59a3%3A0xce7dbc98f988825f!2sGinnie%20Springs%20Outdoors%2C%20LLC!5e1!3m2!1sen!2sus!4v1590265524271!5m2!1sen!2sus",
//             img: "ginnie-springs-1.jpg",
//             visited: false,
//             temp: 67,
//             weather: "sunny",
//             activities: ["Swim", "Snorkel", "Tube", "Kayak", "Canoe", "Paddleboard"],
//             info: ["72 year-round water temp"],
//         }
//     ])
// })


/***** INDEX *****/
app.get('/springs', (req, res) => {
    res.render('Index', { springs });
});

/***** SHOW *****/
app.get('/springs/:id', (req, res) => {
    res.render('Show')
})

/***** DELETE *****/
// app.delete()

/***** LISTEN *****/
app.listen(PORT, (req, res)=> {
    console.log('Connected');
}); /***** I'M DIFFERENT: Make sure this doesn't say 3000. YOU HAVE TO USE PORT *****/