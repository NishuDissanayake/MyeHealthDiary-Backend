const mongoose = require('mongoose')

const HospitalSchema = new mongoose.Schema ({

    hospital_regno: {
        type: String,
        require: true,
        unique: true
    },

    hospital_name: {
        type: String,
        require: true
    },

    address: {
        type: String,
        require: true
    },

    phone_number: {
        type: String,
        required: true
    },

    added_by: {
        type: String,
        require: true
    },

    status: {
        type: String,
        reuire: true,
        default: 'active'
    }
});

const Hospitals = mongoose.model('hospital', HospitalSchema);
module.exports = Hospitals;