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

    static addAllergy(nic, allergy_type, allergy_name) {

        // Perform data validation checks

        if (typeof nic !== 'string' || nic.length === 0) {
            throw new Error('NIC is required!');
        }
        if (typeof allergy_type !== 'string' || allergy_type.length === 0) {
            throw new Error('Allergy type is required!');
        }
        if (typeof allergy_name !== 'string' || allergy_name.length === 0) {
            throw new Error('Allergy name is required!');
        }

        const allergy = {
            allergy_type: allergy_type,
            allergy_name: allergy_name
        }

        return allergy;
    }

    static addMood(nic, date, mood, symptoms, other_conditions) {

        // Perform data validation checks
        if (typeof nic !== 'string' || nic.length === 0) {
            throw new Error('NIC is required!');
        }
        if (date.length === 0) {
            throw new Error('Date is required!');
        }
        if (typeof mood !== 'string' || mood.length === 0) {
            throw new Error('Moods are required!');
        }
        if (typeof symptoms !== 'string' || symptoms.length === 0) {
            throw new Error('Symptoms are required!');
        }
        if (typeof other_conditions !== 'string' || other_conditions.length === 0) {
            throw new Error('Other conditions are required!');
        }

        const moods = {
            date: date,
            mood: mood,
            symptoms: symptoms,
            other_conditions: other_conditions
        }

        return moods;
    }

    static addVaccination(nic, vaccine_name, date, dosage, batch_number, location) {

        // Perform data validation checks
        if (typeof nic !== 'string' || nic.length === 0) {
            throw new Error('NIC is required!');
        }
        if (typeof vaccine_name !== 'string' || vaccine_name.length === 0) {
            throw new Error('Vaccine name is required!');
        }
        if (date.length === 0) {
            throw new Error('Date is required!');
        }
        if (typeof dosage !== 'string' || dosage.length === 0) {
            throw new Error('dosage is required!');
        }
        if (typeof batch_number !== 'string' || batch_number.length === 0) {
            throw new Error('Batch number is required!');
        }
        if (typeof location !== 'string' || location.length === 0) {
            throw new Error('Location is required!');
        }

        const vaccine = {
            vaccine_name: vaccine_name,
            date: date,
            dosage: dosage,
            batch_number: batch_number,
            location: location
        }

        return vaccine;
    }

}

module.exports = userFactory;