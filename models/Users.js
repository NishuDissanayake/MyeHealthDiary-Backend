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

    gender: {
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

    blood_group: {
        type: String,
        reuire: true
    },

    chronic_disease: {
        type: String,
        reuire: true
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
            type: {
                type: String
            },

            date: {
                type: Date
            },

            primary_diagnosis: {
                type: String
            },

            patient_name: {
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
                    },
                    added_by: {
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
                    },
                    added_by: {
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
                    },
                    added_by: {
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
                    added_by: {
                        type: String
                    }
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
                    added_by: {
                        type: String
                    }
                }
            ],

            comments: [
                {
                    date: {
                        type: Date
                    },
                    comment: {
                        type: String
                    },
                    added_by: {
                        type: String
                    }
                }
            ],

            reports: [
                {
                    date: {
                        type: Date
                    },

                    report_name: {
                        type: String
                    },

                    report_type: {
                        type: String
                    },

                    report_link: {
                        type: String
                    },
                    added_by: {
                        type: String
                    }
                }
            ],

            next_clinic_date: {
                type: String
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

            comments: {
                type: String
            },

            state: {
                type: String
            }
        }
    ],

    status: {
        type: String,
        reuire: true,
        default: 'active'
    }
});

const Users = mongoose.model('user', UserSchema);
module.exports = Users;