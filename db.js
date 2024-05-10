// Code to conect express app with mongodb

const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
        await mongoose.connect('mongodb://root:example@db:27017',  //'mongodb://<username>:<password>@<container-name>:27017'
        {useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    console.log("MongoDB connected.")

    }
    catch(error){
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;