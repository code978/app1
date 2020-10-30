const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const time1 = new Schema({
    response : Date,
})

module.exports = mongoose.model('time',time1);