const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nic: {
        type: String,
        require: true,
        unique: true
    },

    first_name: {
        type: String,
        require: true
    },

    last_name: {
        type: String,
        require: true
    },

    birth_day: {
        type: Date,
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

    emergency_contact_person: {
        type: String,
        require: true
    },

    emergency_contact: {
        type: String,
        require: true
    },

    health_insurance_provider: {
        type: String,
        require: true
    },

    email: {
        type: String,
        reuire: true,
        unique: true
    },

    passwrd: {
        type: String,
        reuire: true
    },

    allergies: [
        {
            allergy_type: {
                type: String
            },

            allergy_name: {
                type: String
            }
        }
    ],

    moods: [
        {
            date: {
                type: Date
            },

            mood: {
                type: String
            },

            symptoms: {
                type: String
            },

            other_conditions: {
                type: String
            }
        }
    ],

    vaccinations: [
        {
            vaccine_name: {
                type: String,
            },

            date: {
                type: Date
            },

            dosage: {
                type: String
            },

            batch_number: {
                type: String
            },

            location: {
                type: String
            }
        }
    ],

    medical_reports: [
        {
            report_id: {
                type: String,
                unique: true
            },

            type: {
                type: String
            },

            date: {
                type: Date
            },

            diagnosis: {
                type: String
            },

            patient_nic: {
                type: String
            },

            doctor_in_charge: {
                type: String
            },

            admitted_date: {
                type: Date
            },

            date_of_discharge: {
                type: Date
            },

            treatments: [
                {
                    date: {
                        type: Date
                    },

                    treatment: {
                        type: String
                    }
                }
            ],

            bladder_bowel_functions: [
                {
                    date: {
                        type: Date
                    },

                    bladder_bowel_function: {
                        type: String
                    }
                }
            ],

            lab_tests: [
                {
                    date: {
                        type: Date
                    },

                    test_name: {
                        type: String
                    },

                    test_comments: {
                        type: String
                    }
                }
            ],

            temperatures: [
                {
                    date: {
                        type: Date
                    },

                    temperature: {
                        type: String
                    },
                }
            ],

            blood_pressures: [
                {
                    date: {
                        type: Date
                    },

                    blood_pressure: {
                        type: String
                    },
                }
            ],

            comments: {
                type: String
            },

            next_clinic_date: {
                type: Date
            }

        }
    ],

    current_meds: [
        {
            date_issued: {
                type: Date
            },

            med_name: {
                type: String
            },

            type: {
                type: String
            },

            color: {
                type: String
            },

            dosage: {
                type: String
            },

            meals: {
                type: String
            },

            morning: {
                type: String
            },

            noon: {
                type: String
            },

            night: {
                type: String
            },

            state: {
                type: String
            }
        }
    ]
});

const Users = mongoose.model('user', UserSchema);
module.exports = Users;