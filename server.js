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

// springController.get('', (req, res) => {
//     res.send('<a href="/springs"><h1>Jump In</h1></a>');
// });

/***** SEED *****/

app.get('/springs/seed', (req, res) => {
    Spring.create([
        {
            name: 'Blue Springs',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2868.4560674971935!2d-81.31146923555508!3d28.95051962636978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e71077d14273a7%3A0x60708cbf183bed24!2sBlue%20Springs%2C%20Orange%20City%2C%20FL%2032763!5e1!3m2!1sen!2sus!4v1590346632354!5m2!1sen!2sus',
            img: ['1.jpg', '2.jpg', '3.jpg'],
            visited: false,
            temp: '79º',
            weather: 'thunderstorm',
            activities: [ 'Manatees', 'Swim', 'Snorkel', 'Scuba Dive', 'Fish', 'Camp', 'Horseback Rides', 'Bird Watch', 'Boat Tours' ],
            info: ['102 million gallons of water daily ', '72º year-round water temp' ],
            comments: "",
            newImg: ""
        },
        {
            name: 'Ginnie Springs',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5362.80680039381!2d-82.70464614986234!3d29.834315134860265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e8ce44cc5b59a3%3A0xce7dbc98f988825f!2sGinnie%20Springs%20Outdoors%2C%20LLC!5e1!3m2!1sen!2sus!4v1590265524271!5m2!1sen!2sus',
            img: [ '1.jpg', '2.jpg', '3.jpg' ],
            visited: true,
            temp: '67º',
            weather: 'sunny',
            activities: [ 'Swim', 'Snorkel', 'Tube', 'Kayak', 'Canoe', 'Paddleboard', 'Diving' ],
            info: [ '80 million gallons of water daily', '72º year-round water temp' ],
            comments: "",
            newImg: ""
        },
        {
            name: 'Homosassa Springs',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23042.95116842047!2d-82.59704551181224!3d28.517403827637764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e820349a7e9b51%3A0x3ee81b3447a5426c!2sWeeki%20Wachee%2C%20FL!5e1!3m2!1sen!2sus!4v1590293032913!5m2!1sen!2sus',
            img: [ '1.jpg', '2.jpg', '3.jpg' ],
            visited: false,
            temp: '73º',
            weather: 'overcast',
            activities: [ 'Hike', 'Camp', 'Horseback Rides', 'Bird Watch', 'Boat Tours' ],
            info: ['65 million gallons of water daily ', '77º year-round water temp' ],
            comments: "",
            newImg: ""
        }, 
        {
            name: 'Ichetucknee Springs',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11357.493169741203!2d-82.77054517779476!3d29.983861746479203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88ef2d1607c41031%3A0x20a06fcdb8901d1d!2sIchetucknee%20Springs!5e1!3m2!1sen!2sus!4v1590346976384!5m2!1sen!2sus',
            img: [ '1.jpg', '2.jpg', '3.jpg' ],
            visited: false,
            temp: '76º',
            weather: 'cloudy',
            activities: [ 'Swim', 'Snorkel', 'Scuba Dive', 'Tube', 'Camp', 'Bird Watch' ],
            info: ['200 million gallons of water daily ', '72º year-round water temp' ],
            comments: "",
            newImg: ""
          },
        {
            name: 'Salt Springs',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13910.620389162974!2d-81.74385741109613!3d29.351102166086893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e64581d856535f%3A0x9355f4027308ccf4!2sSalt%20Springs%2C%20FL%2032134!5e0!3m2!1sen!2sus!4v1590354564850!5m2!1sen!2sus',
            img: ['1.jpg', '2.jpg', '3.jpg'],
            visited: false,
            temp: '76º',
            weather: 'cloudy',
            activities: [ 'Swim', 'Snorkel', 'Scuba Dive', 'Tube', 'Camp', 'Bird Watch' ],
            info: ['200 million gallons of water daily ', '72º year-round water temp' ],
            comments: "",
            newImg: ""
          },
          {
            name: 'Silver Glen Springs',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23042.95116842047!2d-82.59704551181224!3d28.517403827637764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e820349a7e9b51%3A0x3ee81b3447a5426c!2sWeeki%20Wachee%2C%20FL!5e1!3m2!1sen!2sus!4v1590293032913!5m2!1sen!2sus',
            img: ['1.jpg', '2.jpg', '3.jpg'],
            visited: false,
            temp: '70º',
            weather: 'clear sky',
            activities: [ 'Swim', 'Snorkel', 'Canoe', 'Scuba Dive', 'Boat Tours' ],
            info: ['65 million gallons of water daily ', '72º year-round water temp' ],
            comments: "",
            newImg: ""
        },
        {
            name: 'Silver Springs',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23042.95116842047!2d-82.59704551181224!3d28.517403827637764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e820349a7e9b51%3A0x3ee81b3447a5426c!2sWeeki%20Wachee%2C%20FL!5e1!3m2!1sen!2sus!4v1590293032913!5m2!1sen!2sus',
            img: ['1.jpg', '2.jpg', '3.jpg'],
            visited: false,
            temp: '77º',
            weather: 'partly cloudy',
            activities: [ 'Hike', 'Camp', 'Horseback Rides', 'Bird Watch', 'Boat Tours' ],
            info: ['117 million gallons of water daily ', '74º year-round water temp' ],
            comments: "",
            newImg: ""
        },
        {
            name: 'Weeki Wachee Springs',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23042.95116842047!2d-82.59704551181224!3d28.517403827637764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e820349a7e9b51%3A0x3ee81b3447a5426c!2sWeeki%20Wachee%2C%20FL!5e1!3m2!1sen!2sus!4v1590293032913!5m2!1sen!2sus',
            img: ['1.jpg', '2.jpg', '3.jpg'],
            visited: false,
            temp: '71º',
            weather: 'sunny',
            activities: [ 'Mermaids', 'Swim', 'Snorkel', 'Water Park', 'Paddleboard', 'Canoe', 'Boat Tours' ],
            info: ['117 million gallons of water daily ', '74º year-round water temp' ],
            comments: "",
            newImg: ""
        }
        ])
        res.redirect('/springs')
})

/***** INDEX *****/
app.get('/springs', (req, res) => {
    const next = (error, allSprings) => {
        if(error) {
            console.log(error)
        } else {
            const props = {
                springs: allSprings
            }
            res.render('Index', props)}
        }
        Spring.find({}, next)
});

/***** NEW *****/
app.get('/springs/new', (req, res) => {
    res.render('New');
});

/***** SHOW *****/
app.get('/springs/:id', (req, res) => {
    Spring.findById(req.params.id, (error, foundSpring) => {
        if(error){
            console.log(error)
        } else {
            res.render('Show', {spring: foundSpring})
        }
    })
});

/***** FUNCTIONAL ROUTES *****/

/***** CREATE *****/
app.post('/springs/', (req, res) => {
    // res.send(req.body)
    console.log(req.body)
    console.log(req.body.visited)
    if (req.body.visited) {
        req.body.visited = true;
    } else {
        req.body.visited = false;
    }
    Spring.create(req.body, (error, createdSpring) => {
        if(error) {
            console.log(error)
        }else{
            res.redirect('/springs')
        }
    })
})

/***** EDIT *****/
app.get('/springs/edit/:id', (req, res) => {
    Spring.findById(req.params.id, (error, foundSpring) => {
        res.render('Edit', {spring: foundSpring})
    })
});

/***** DELETE *****/
app.delete('/springs/:id', (req, res) => {
    Spring.findByIdAndRemove(req.params.id, (error, foundSpring) => {
        res.redirect('/springs');
    })
});

/***** UPDATE *****/
app.put('/springs/:id', (req, res) => {
    // const { id } = req.params;
    // console.log(body);
    if (req.body.visited) {
        req.body.visited = true;
    } else {
        req.body.visited = false;
    }
    Spring.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, foundSpring) => {
        res.redirect('/springs');
    })
});



/***** LISTEN *****/
app.listen(PORT, (req, res)=> {
    console.log('Connected');
}); /***** I'M DIFFERENT: Make sure this doesn't say 3000. YOU HAVE TO USE PORT *****/