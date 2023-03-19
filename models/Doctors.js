const mongoose = require('mongoose')

const DoctorSchema = new mongoose.Schema ({

    doctor_id: {
        type: String,
        require: true,
        unique: true
    },

    doctor_name: {
        type: String,
        require: true
    },

    hospital: {
        type: String,
        require: true
    },

    specialization: {
        type: String,
        require: true
    },

    qualifications: {
        type: String,
        require: true
    },

    phone_number: {
        type: String,
        required: true
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

const Doctors = mongoose.model('docotr', DoctorSchema);
module.exports = Docotrs;