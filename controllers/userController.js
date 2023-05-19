const userModel = require('./../models/Users');
const UserFactory = require('./../factories/userFactory');
const bcrypt = require('bcryptjs');

class userController {

    async addUser(req, res) {

        try {

            const { nic, first_name, last_name, birth_day, address, phone_number, gender, emergency_contact_person, emergency_contact, health_insurance_provider, blood_group, chronic_disease, email, pass } = req.query;
            const passwrd = await bcrypt.hash(pass, 10);
            // use userFactory to create new instance of the Use model
            const user = UserFactory.addUser(nic, first_name, last_name, birth_day, address, phone_number, gender, emergency_contact_person, emergency_contact, health_insurance_provider, blood_group, chronic_disease, email, passwrd);

            await user.save();

            res.status(200).send('User registration successfull!');
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }

    }

    async addAllergy(req, res) {
        try {
            const { nic, allergy_type, allergy_name } = req.query;

            const allergy = UserFactory.addAllergy(nic, allergy_type, allergy_name);

            const result = await userModel.findOneAndUpdate(
                { nic: nic },
                { $addToSet: { allergies: allergy } },
                { upsert: true, new: true, maxTimeMS: 30000 }
            )

            res.status(200).json({ message: 'Allergy added successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async addMood(req, res) {
        try {
            const { nic, date, mood, symptoms, other_conditions } = req.query;

            const moods = UserFactory.addMood(nic, date, mood, symptoms, other_conditions);

            const result = await userModel.findOneAndUpdate(
                { nic: nic },
                { $addToSet: { moods: moods } },
                { upsert: true, new: true, maxTimeMS: 30000 }
            );

            res.status(200).json({ message: 'Mood added successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async addVaccine(req, res) {
        try {
            const { nic, vaccine_name, date, dosage, batch_number, location } = req.query;

            const vaccine = UserFactory.addVaccination(nic, vaccine_name, date, dosage, batch_number, location);

            const result = await userModel.findOneAndUpdate(
                { nic: nic },
                { $addToSet: { vaccinations: vaccine } },
                { upsert: true, new: true, maxTimeMS: 30000 }
            );

            res.status(200).json({ message: 'Vaccination added successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async addCurrentMed(req, res) {
        try {
            const { nic, date_issued, med_name, type, dosage, meals, morning, noon, night, comments, state } = req.query;

            const meds = UserFactory.addcurrentMed(nic, date_issued, med_name, type, dosage, meals, morning, noon, night, comments, state);

            const result = await userModel.findOneAndUpdate(
                { nic: nic },
                { $addToSet: { current_meds: meds } },
                { upsert: true, new: true, maxTimeMS: 30000 }
            );

            res.status(200).json({ message: 'Medication added successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async addRecord(req, res) {
        try {
            const { nic, type, date, primary_diagnosis, doctor_in_charge, admitted_date, date_of_discharge, next_clinic_date } = req.query;

            const record = UserFactory.addRecords(nic, type, date, primary_diagnosis, doctor_in_charge, admitted_date, date_of_discharge, next_clinic_date);

            const result = await userModel.findOneAndUpdate(
                { nic: nic },
                { $addToSet: { medical_reports: record } },
                { upsert: true, new: true, maxTimeMS: 30000 }
            );

            res.status(200).json({ message: 'Medical record added successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async addTreatment(req, res) {
        try {
            const { nic, _id, date, treatment, added_by } = req.query;

            const user = await userModel.findOne({ nic: nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const medicalRecord = user.medical_reports.id(_id);

            if (!medicalRecord) {
                console.log("Medical record not found!");
                return res.status(404).json({ message: 'Medical record not found' });
            }

            const treatments = UserFactory.addTreatment(nic, _id, date, treatment, added_by);

            medicalRecord.treatments.push(treatments);
            await user.save();

            res.status(200).json({ message: 'Treatment added successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async addBandBFunc(req, res) {
        try {
            const { nic, _id, date, bladder_bowel_function, added_by } = req.query;

            const user = await userModel.findOne({ nic: nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const medicalRecord = user.medical_reports.id(_id);

            if (!medicalRecord) {
                console.log("Medical record not found!");
                return res.status(404).json({ message: 'Medical record not found' });
            }

            const bandb = UserFactory.addBandBFunc(nic, _id, date, bladder_bowel_function, added_by);

            medicalRecord.bladder_bowel_functions.push(bandb);
            await user.save();

            res.status(200).json({ message: 'Bladder and bowel functions added successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async addLabTest(req, res) {
        try {
            const { nic, _id, date, test_name, test_comments, added_by } = req.query;

            const user = await userModel.findOne({ nic: nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const medicalRecord = user.medical_reports.id(_id);

            if (!medicalRecord) {
                console.log("Medical record not found!");
                return res.status(404).json({ message: 'Medical record not found' });
            }

            const labs = UserFactory.addLabTest(nic, _id, date, test_name, test_comments, added_by);

            medicalRecord.lab_tests.push(labs);
            await user.save();

            res.status(200).json({ message: 'Lab test added successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async addTemperature(req, res) {
        try {
            const { nic, _id, date, temperature, added_by } = req.query;

            const user = await userModel.findOne({ nic: nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const medicalRecord = user.medical_reports.id(_id);

            if (!medicalRecord) {
                console.log("Medical record not found!");
                return res.status(404).json({ message: 'Medical record not found' });
            }

            const temp = UserFactory.addTemperatures(nic, _id, date, temperature, added_by);

            medicalRecord.temperatures.push(temp);
            await user.save();

            res.status(200).json({ message: 'Temperature added successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async addBPressure(req, res) {
        try {
            const { nic, _id, date, blood_pressure, added_by } = req.query;

            const user = await userModel.findOne({ nic: nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const medicalRecord = user.medical_reports.id(_id);

            if (!medicalRecord) {
                console.log("Medical record not found!");
                return res.status(404).json({ message: 'Medical record not found' });
            }

            const press = UserFactory.addBPressures(nic, _id, date, blood_pressure, added_by);

            medicalRecord.blood_pressures.push(press);
            await user.save();

            res.status(200).json({ message: 'Blood Pressure added successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async addComments(req, res) {
        try {
            const { nic, _id, date, comment, added_by } = req.query;

            const user = await userModel.findOne({ nic: nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const medicalRecord = user.medical_reports.id(_id);

            if (!medicalRecord) {
                console.log("Medical record not found!");
                return res.status(404).json({ message: 'Medical record not found' });
            }

            const com = UserFactory.addComments(nic, _id, date, comment, added_by);

            medicalRecord.comments.push(com);
            await user.save();

            res.status(200).json({ message: 'Comment added successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async addReports(req, res) {
        try {
            const { nic, _id, date, report_name, report_type, report_link, added_by } = req.query;

            const user = await userModel.findOne({ nic: nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const medicalRecord = user.medical_reports.id(_id);

            if (!medicalRecord) {
                console.log("Medical record not found!");
                return res.status(404).json({ message: 'Medical record not found' });
            }

            const report = UserFactory.addReports(nic, _id, date, report_name, report_type, report_link, added_by);

            medicalRecord.reports.push(report);
            await user.save();

            res.status(200).json({ message: 'Report added successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async getUserData(req, res) {
        try {
            const data = await userModel.find({ nic: req.query.nic });
            res.status(200).json(data);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getUsers(req, res) {
        try {
            const data = await userModel.find();
            res.status(200).json(data);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getUserCount(req, res) {
        try {
            const data = await userModel.find();
            console.log(data.length);
            res.status(200).json(data);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getActiveMeds(req, res) {
        try {
            const state = "Active";
            const { nic } = req.query;
            const user = await userModel.findOne({ nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const currentMeds = user.current_meds.filter(med => med.state === state);

            if (!currentMeds) {
                console.log("Medicine not found!");
                return res.status(404).json({ message: 'Medicine not found' });
            }

            res.status(200).json({ currentMeds });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }


    async getAllergies(req, res) {
        try {
            const { nic } = req.query;
            const user = await userModel.findOne({ nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const allergies = user.allergies;

            if (!allergies) {
                console.log("Allergies not found!");
                return res.status(404).json({ message: 'Allergies not found' });
            }

            res.status(200).json({ allergies });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getVaccines(req, res) {
        try {
            const { nic } = req.query;
            const user = await userModel.findOne({ nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const vaccinations = user.vaccinations;

            if (!vaccinations) {
                console.log("Vaccinations not found!");
                return res.status(404).json({ message: 'Vaccinations not found' });
            }

            res.status(200).json({ vaccinations });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getTreatments(req, res) {
        try {
            const { nic, _id } = req.query;

            const user = await userModel.findOne({ nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const medicalRecord = user.medical_reports.id(_id);

            if (!medicalRecord) {
                console.log("Medical record not found!");
                return res.status(404).json({ message: 'Medical record not found' });
            }

            const treatments = medicalRecord.treatments;
            res.status(200).json({ treatments });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async getMedicalRecords(req, res) {
        try {
            const { nic, _id } = req.query;

            const user = await userModel.findOne({ nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const medicalRecord = user.medical_reports.id(_id);

            if (!medicalRecord) {
                console.log("Medical record not found!");
                return res.status(404).json({ message: 'Medical record not found' });
            }

            res.status(200).json({ medicalRecord });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async getBandBFunstions(req, res) {
        try {
            const { nic, _id } = req.query;

            const user = await userModel.findOne({ nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const medicalRecord = user.medical_reports.id(_id);

            if (!medicalRecord) {
                console.log("Medical record not found!");
                return res.status(404).json({ message: 'Medical record not found' });
            }

            const bandb = medicalRecord.bladder_bowel_functions;
            res.status(200).json({ bandb });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async getLabTests(req, res) {
        try {
            const { nic, _id } = req.query;

            const user = await userModel.findOne({ nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const medicalRecord = user.medical_reports.id(_id);

            if (!medicalRecord) {
                console.log("Medical record not found!");
                return res.status(404).json({ message: 'Medical record not found' });
            }

            const labs = medicalRecord.lab_tests;
            res.status(200).json({ labs });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async getTemperatures(req, res) {
        try {
            const { nic, _id } = req.query;

            const user = await userModel.findOne({ nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const medicalRecord = user.medical_reports.id(_id);

            if (!medicalRecord) {
                console.log("Medical record not found!");
                return res.status(404).json({ message: 'Medical record not found' });
            }

            const temps = medicalRecord.temperatures;
            res.status(200).json({ temps });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async getBPressures(req, res) {
        try {
            const { nic, _id } = req.query;

            const user = await userModel.findOne({ nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const medicalRecord = user.medical_reports.id(_id);

            if (!medicalRecord) {
                console.log("Medical record not found!");
                return res.status(404).json({ message: 'Medical record not found' });
            }

            const bp = medicalRecord.blood_pressures;
            res.status(200).json({ bp });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async getComments(req, res) {
        try {
            const { nic, _id } = req.query;

            const user = await userModel.findOne({ nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const medicalRecord = user.medical_reports.id(_id);

            if (!medicalRecord) {
                console.log("Medical record not found!");
                return res.status(404).json({ message: 'Medical record not found' });
            }

            const com = medicalRecord.comments;
            res.status(200).json({ com });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async getReports(req, res) {
        try {
            const { nic, _id } = req.query;

            const user = await userModel.findOne({ nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const medicalRecord = user.medical_reports.id(_id);

            if (!medicalRecord) {
                console.log("Medical record not found!");
                return res.status(404).json({ message: 'Medical record not found' });
            }

            const report = medicalRecord.reports;
            res.status(200).json({ report });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async updateUserAddress(req, res) {
        try {

            const { nic, n_address } = req.query;

            const result = await userModel.findOneAndUpdate(
                { nic: nic },
                { address: n_address },
                { maxTimeMS: 30000 }
            )

            res.status(200).json({ message: 'Your adress is updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async updateUserContact(req, res) {
        try {

            const { nic, n_phone } = req.query;

            const result = await userModel.findOneAndUpdate(
                { nic: nic },
                { phone_number: n_phone },
                { maxTimeMS: 30000 }
            )

            res.status(200).json({ message: 'Your phone number is updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async updateMedState(req, res) {
        try {
            const { nic, _id } = req.query;

            const user = await userModel.findOne({ nic: nic });

            if (!user) {
                console.log("User not found!");
                return res.status(404).json({ message: 'User not found' });
            }

            const medRecord = user.current_meds.id(_id);

            if (!medRecord) {
                console.log("Medicine record not found!");
                return res.status(404).json({ message: 'Medicine record not found' });
            }

            const result = await medRecord.findOneAndUpdate(
                { _id: _id },
                { state: state },
                { maxTimeMS: 30000 }
            )

            res.status(200).json({ message: 'Your medication is successfully marked as completed!' });

        }
        catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async updateEmContactName(req, res) {
        try {

            const { nic, n_emergency_contact_person } = req.query;

            const result = await userModel.findOneAndUpdate(
                { nic: nic },
                { emergency_contact_person: n_emergency_contact_person },
                { maxTimeMS: 30000 }
            )

            res.status(200).json({ message: 'Your emergency contact person is updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async updateEmContact(req, res) {
        try {

            const { nic, n_emergency_contact } = req.query;

            const result = await userModel.findOneAndUpdate(
                { nic: nic },
                { emergency_contact: n_emergency_contact },
                { maxTimeMS: 30000 }
            )

            res.status(200).json({ message: 'Your emergency contact person phone number is updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async updateBloodGroup(req, res) {
        try {

            const { nic, n_blood_group } = req.query;

            const result = await userModel.findOneAndUpdate(
                { nic: nic },
                { blood_group: n_blood_group },
                { maxTimeMS: 30000 }
            )

            res.status(200).json({ message: 'Your blood group is updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async updateChronicDiseases(req, res) {
        try {

            const { nic, n_chronic_disease } = req.query;

            const result = await userModel.findOneAndUpdate(
                { nic: nic },
                { chronic_disease: n_chronic_disease },
                { maxTimeMS: 30000 }
            )

            res.status(200).json({ message: 'Your chronic diseases are updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async updateHealthInsurance(req, res) {
        try {

            const { nic, n_health_insurance_provider } = req.query;

            const result = await userModel.findOneAndUpdate(
                { nic: nic },
                { health_insurance_provider: n_health_insurance_provider },
                { maxTimeMS: 30000 }
            )

            res.status(200).json({ message: 'Your health insurance provider is updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async deleteUser(req, res) {
        try {
            const { nic, n_pass } = req.query;
            const hashedPassword = await bcrypt.hash(n_pass, 10);
            const userData = await userModel.findOne({ nic });

            if (!userData) {
                console.log("User record not found!");
                return res.status(404).json({ message: 'User record not found' });
            } else {
                const pass = userData.passwrd;

                if (hashedPassword !== pass) {
                    console.log(hashedPassword);
                    console.log(pass);
                    console.log("Password Mismatch!");
                    return res.status(401).json({ message: 'Password Mismatch!' });
                } else {
                    const status = "Deactivated";

                    const result = await userModel.findOneAndUpdate(
                        { nic: nic },
                        { status: status },
                        { maxTimeMS: 30000 }
                    )

                    res.status(200).json({ message: 'Your account is deactivated successfully!' });
                }
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }


}

module.exports = new userController;
