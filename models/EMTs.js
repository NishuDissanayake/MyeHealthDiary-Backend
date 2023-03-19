const mongoose = require('mongoose')

const EMTSchema = new mongoose.Schema ({

    emt_id: {
        type: String,
        require: true,
        unique: true
    },

    emt_name: {
        type: String,
        require: true
    },

    hospital: {
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
    },

    added_by: {
        type: String,
        require: true
    }
});

const EMTs = mongoose.model('emt', EMTSchema);
module.exports = EMTs;