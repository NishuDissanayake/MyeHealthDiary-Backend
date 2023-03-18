const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema ({
    userName: {
        type: String,
        required: true,
    },
    userId: {
        type: Number,
        required: true,
    },
});

const Users = mongoose.model('user', UserSchema);
module.exports = Users;