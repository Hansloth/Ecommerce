const mongoose = require('mongoose');

function connectDB(url) {
    return mongoose.connect(url,{useNewUrlParser:true, useCreateIndex:true, useFindAndModify:false, useUnifiedTopology:true});
}

module.exports = connectDB;