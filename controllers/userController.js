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
    
}

module.exports = new userController;