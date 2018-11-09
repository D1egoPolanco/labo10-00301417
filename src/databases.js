const mongoose = require ('mongoose');
const {mongodb} = require ('./keys');

mongoose.connect(mongodb.URI,{
    userNewUrlParser:true,
    userCreateIndex: true
})
.then (db=>console.log('Connection Success'))
.catch(err =>console.log(err));