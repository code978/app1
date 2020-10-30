const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://user:user@cluster0.tolqg.mongodb.net/app1?retryWrites=true&w=majority';

const connectDB = async () =>{
    try{
        await mongoose.connect(DB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('database successfully connected..');
    }catch(err){
        console.log('error '+error);
    }
}

module.exports = connectDB;