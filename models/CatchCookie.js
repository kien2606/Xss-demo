const mongoose = require('mongoose');

const CatchSchema = mongoose.Schema({
    content : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Catchs',CatchSchema);
