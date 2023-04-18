const userModel = require('./../models/Users');
const UserFactory = require('./../factories/userFactory');

class userController {

    async addUser(req, res) {

        try {

            const { nic, first_name, last_name, birth_day, address, phone_number, emergency_contact_person, emergency_contact, health_insurance_provider, blood_group, chronic_diseases, email, passwrd } = req.body;

            const user = UserFactory.addUser(nic, first_name, last_name, birth_day, address, phone_number, emergency_contact_person, emergency_contact, health_insurance_provider, blood_group, chronic_diseases, email, passwrd);

            await user.save();

            res.status(200).send('Registration successful!');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }

    }

    async addAllergy(req, res) {
        try {
            const { nic, allergy_type, allergy_name } = req.body;
    
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
            const { nic, date, mood, symptoms, other_conditions } = req.body;
    
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
            const { nic, vaccine_name, date, dosage, batch_number, location } = req.body;
    
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
    
}

module.exports = new userController;