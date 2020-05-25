const express = require('express');
const app = express();
const methodOverride = require('method-override');

const springs = require('./models/springs.js');

const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000; /***** I'M DIFFERENT *****/

const db = mongoose.connection;

const springController = require('./controllers/springs.js')
const userController = require('./controllers/users_controllers.js')
const session = require('express-session')
const User = require('./models/users.js')
const bcrypt = require('bcrypt')

/***** IMPORT DATA *****/


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
    res.send('<a href="/springs"><h1>Jump In</h1></a>');
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

/***** NEW *****/
app.get('/springs/new', (req, res) => {
    res.render('New');
});

/***** CREATE *****/
app.post('/springs', (req, res) => {
    springs.push(req.body);
    res.redirect('/springs');
})



/***** DELETE *****/
app.delete('/springs/:id', (req, res) => {
    console.log(req.query);
    const { id } = req.params;
    springs.splice(id, 1);
    res.redirect('/springs');
})

/***** EDIT *****/
app.get('/springs/:id/edit', (req, res) => {
    res.render('Edit', {
        spring: springs[req.params.id],
        id: req.params.id
    })
})

/***** UPDATE *****/
app.put('/springs/:id', (req, res) => {
    const { id } = req.params;
    console.log(body);
    springs[id] = req.body;
    res.redirect('/springs');
});

/***** SHOW *****/
app.get('/springs/:id', (req, res) => {
    console.log(springs[req.params.id])
    res.render('Show', { spring: springs[req.params.id] }); 
});

/***** LISTEN *****/
app.listen(PORT, (req, res)=> {
    console.log('Connected');
}); /***** I'M DIFFERENT: Make sure this doesn't say 3000. YOU HAVE TO USE PORT *****/