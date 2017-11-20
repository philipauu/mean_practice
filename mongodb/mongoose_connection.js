var mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27500/mean_users', {
    useMongoClient: true
});

var schema = new mongoose.Schema({
    user: String
});

var USERCLASS = mongoose.model('users', schema);

module.exports = USERCLASS;