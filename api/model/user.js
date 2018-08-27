/**
 * Created by adebayooluwadamilola on 7/5/18.
 */
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        minlength: 5,
    },
});

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');