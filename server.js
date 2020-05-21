const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000; /***** I'M DIFFERENT *****/
const db = mongoose.connection;

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project2'; /***** I'M DIFFERENT *****/

mongoose.connect(MONGO_URI, {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true}); /***** I'M DIFFERENT *****/

db.on('open', () => {console.log('Mongo works')})

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(PORT, ()=> {
    console.log('I am connected')
}) /***** I'M DIFFERENT: Make sure this doesn't say 3000. YOU HAVE TO USE PORT *****/