//required library
const mongoose = require('mongoose');

//connect to database
//  mongoose.connect('mongodb://localhost/codeial_db', {useNewUrlParser: true});
mongoose.connect('mongodb://localhost/codeial_db');
//mongodb://localhost:27017/
//acquire the connection(to check if it is successful)
const db = mongoose.connection;

//error handling
db.on('error', console.error.bind(console, 'error connecting to the DataBase'));
//u there??
//up and running
db.once('open', function(){
    console.log('Successfully connected to the DataBase');
});
module.exports=db;