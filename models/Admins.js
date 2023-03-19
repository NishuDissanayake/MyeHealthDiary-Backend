const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema ({

    admin_name: {
        type: String,
        require: true
    },

    organization: {
        type: String,
        require: true
    },

    designation: {
        type: String,
        require: true
    },

    phone_number: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    passwrd: {
        type: String,
        reuire: true
    }
});

const Admins = mongoose.model('admin', AdminSchema);
module.exports = Admins;