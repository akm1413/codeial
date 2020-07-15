// //required library
// const mongoose = require('mongoose');

// //connect to database
// //  mongoose.connect('mongodb://localhost/codeial_db', {useNewUrlParser: true});
// mongoose.connect('mongodb://localhost/codeial_development');

// //acquire the connection(to check if it is successful)
// const db = mongoose.connection;

// //error handling
// db.on('error', console.error.bind(console, 'error connecting to the DataBase'));

// //up and running
// db.once('open', function(){
//     console.log('Successfully connected to the DataBase :: MongoDB');
// });

// module.exports = db;







//try





const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;