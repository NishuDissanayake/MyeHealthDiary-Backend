const userModel = require('./../models/Users');

class userFactory {
    static addUser(nic, first_name, last_name, birth_day, address, phone_number, emergency_contact_person, emergency_contact, health_insurance_provider, blood_group, chronic_diseases, email, passwrd) {

        // Perform data validation checks
        if (typeof nic !== 'string' || nic.length === 0) {
            throw new Error('NIC is required!');
        }
        if (typeof first_name !== 'string' || first_name.length === 0) {
            throw new Error('User first name is required!');
        }
        if (typeof last_name !== 'string' || last_name.length === 0) {
            throw new Error('User last name is required!');
        }
        if (typeof birth_day.length === 0) {
            throw new Error('Birthday is required!');
        }
        if (typeof address !== 'string' || address.length === 0) {
            throw new Error('Address is required!');
        }
        if (phone_number.length !== 10) {
            throw new Error('Phone number is required!');
        }
        const num = parseInt(phone_number);
        if (typeof num !== 'number') {
            throw new Error('Phone number should be a number!');
        }
        if (typeof emergency_contact_person !== 'string' || emergency_contact_person.length === 0) {
            throw new Error('An emergency contact person is required!');
        }
        if (emergency_contact.length !== 10) {
            throw new Error('Emergency contact number is required!');
        }
        const num2 = parseInt(emergency_contact);
        if (typeof num2 !== 'number') {
            throw new Error('Emergency contact should be a number!');
        }
        if (typeof health_insurance_provider !== 'string' || health_insurance_provider.length === 0) {
            throw new Error('Health insurance provider is required!');
        }
        if (typeof blood_group !== 'string' || blood_group.length === 0) {
            throw new Error('Blood group is required!');
        }
        if (typeof chronic_diseases !== 'string' || chronic_diseases.length === 0) {
            throw new Error('Selecting disease conditions is required!');
        }
        if (typeof email !== 'string' || email.length === 0) {
            throw new Error('Email is required!');
        }
        if (typeof passwrd !== 'string' || passwrd.length === 0) {
            throw new Error('Password is required!');
        }

        const user = new userModel({
            nic: nic,
            first_name: first_name,
            last_name: last_name,
            birth_day: birth_day,
            address: address,
            phone_number: phone_number,
            emergency_contact_person: emergency_contact_person,
            emergency_contact: emergency_contact,
            health_insurance_provider: health_insurance_provider,
            blood_group: blood_group,
            chronic_diseases: chronic_diseases,
            email: email,
            passwrd: passwrd
        })

        return user;
    }
}

module.exports = userFactory;