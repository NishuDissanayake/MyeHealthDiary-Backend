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

    static addcurrentMed(nic, date_issued, med_name, type, dosage, meals, morning, noon, night, comments, state) {

        // Perform data validation checks
        if (typeof nic !== 'string' || nic.length === 0) {
            throw new Error('NIC is required!');
        }
        if (date_issued.length === 0) {
            throw new Error('Starting date is required!');
        }
        if (typeof med_name !== 'string' || med_name.length === 0) {
            throw new Error('Medicine name is required!');
        }
        if (typeof type !== 'string' || type.length === 0) {
            throw new Error('Medicine type is required!');
        }
        if (typeof meals !== 'string' || meals.length === 0) {
            throw new Error('Meal relevance is required!');
        }
        if (typeof morning !== 'string' || morning.length === 0) {
            throw new Error('Morning status is required!');
        }
        if (typeof noon !== 'string' || noon.length === 0) {
            throw new Error('Noon status is required!');
        }
        if (typeof night !== 'string' || night.length === 0) {
            throw new Error('Night status is required!');
        }
        if (typeof comments !== 'string' || comments.length === 0) {
            throw new Error('Comment is required!');
        }
        if (typeof state !== 'string' || state.length === 0) {
            throw new Error('State is required!');
        }

        const currentmed = {
            date_issued: date_issued,
            med_name: med_name,
            type: type,
            dosage: dosage,
            meals: meals,
            morning: morning,
            noon: noon,
            night: night,
            comments: comments,
            state: state
        }

        return currentmed;
    }

    static addRecords(nic, type, date, primary_diagnosis, doctor_in_charge, admitted_date, date_of_discharge, next_clinic_date) {

        // Perform data validation checks
        if (typeof nic !== 'string' || nic.length === 0) {
            throw new Error('NIC is required!');
        }
        if (typeof type !== 'string' || type.length === 0) {
            throw new Error('Medical record type is required!');
        }
        if (date.length === 0) {
            throw new Error('Date is required!');
        }
        if (typeof primary_diagnosis !== 'string' || primary_diagnosis.length === 0) {
            throw new Error('Primary diagnosis is required!');
        }
        if (typeof doctor_in_charge !== 'string' || doctor_in_charge.length === 0) {
            throw new Error('Doctor in charge is required!');
        }
        if (admitted_date.length === 0) {
            throw new Error('Admitted date is required!');
        }
        if (date_of_discharge.length === 0) {
            throw new Error('Date of discharge is required!');
        }
        if (next_clinic_date.length === 0) {
            throw new Error('Next clinic date is required!');
        }

        const report = {
            type: type,
            date: date,
            primary_diagnosis: primary_diagnosis,
            doctor_in_charge: doctor_in_charge,
            admitted_date: admitted_date,
            date_of_discharge: date_of_discharge,
            next_clinic_date: next_clinic_date
        }

        return report;
    }

    static addTreatment(nic, _id, date, treatment, added_by) {

        // Perform data validation checks

        if (typeof nic !== 'string' || nic.length === 0) {
            throw new Error('NIC is required!');
        }
        if (typeof _id !== 'string' || _id.length === 0) {
            throw new Error('ID is required!');
        }
        if (date.length === 0) {
            throw new Error('Date is required!');
        }
        if (typeof treatment !== 'string' || treatment.length === 0) {
            throw new Error('Treatment is required!');
        }
        if (typeof added_by !== 'string' || added_by.length === 0) {
            throw new Error('Added person is required!');
        }

        const treatments = {
            date: date,
            treatment: treatment,
            added_by: added_by
        }

        return treatments;
    }

    static addBandBFunc(nic, _id, date, bladder_bowel_function, added_by) {
        
        // Perform data validation checks

        if (typeof nic !== 'string' || nic.length === 0) {
            throw new Error('NIC is required!');
        }
        if (typeof _id !== 'string' || _id.length === 0) {
            throw new Error('ID is required!');
        }
        if (date.length === 0) {
            throw new Error('Date is required!');
        }
        if (typeof bladder_bowel_function !== 'string' || bladder_bowel_function.length === 0) {
            throw new Error('Bladder and bowel functions are required!');
        }
        if (typeof added_by !== 'string' || added_by.length === 0) {
            throw new Error('Added person is required!');
        }

        const bandb = {
            date: date,
            bladder_bowel_function: bladder_bowel_function,
            added_by: added_by
        }

        return bandb;
    }

    static addLabTest(nic, _id, date, test_name, test_comments, added_by) {
        
        // Perform data validation checks

        if (typeof nic !== 'string' || nic.length === 0) {
            throw new Error('NIC is required!');
        }
        if (typeof _id !== 'string' || _id.length === 0) {
            throw new Error('ID is required!');
        }
        if (date.length === 0) {
            throw new Error('Date is required!');
        }
        if (typeof test_name !== 'string' || test_name.length === 0) {
            throw new Error('Test name is required!');
        }
        if (typeof test_comments !== 'string' || test_comments.length === 0) {
            throw new Error('Test comments are required!');
        }
        if (typeof added_by !== 'string' || added_by.length === 0) {
            throw new Error('Added person is required!');
        }

        const labs = {
            date: date,
            test_name: test_comments,
            test_comments: test_comments,
            added_by: added_by
        }

        return labs;
    }

    static addTemperatures(nic, _id, date, temperature, added_by) {
        
        // Perform data validation checks

        if (typeof nic !== 'string' || nic.length === 0) {
            throw new Error('NIC is required!');
        }
        if (typeof _id !== 'string' || _id.length === 0) {
            throw new Error('ID is required!');
        }
        if (date.length === 0) {
            throw new Error('Date is required!');
        }
        if (typeof temperature !== 'string' || temperature.length === 0) {
            throw new Error('Temperature is required!');
        }
        if (typeof added_by !== 'string' || added_by.length === 0) {
            throw new Error('Added person is required!');
        }

        const temp = {
            date: date,
            temperature: temperature,
            added_by: added_by
        }

        return temp;
    }

    static addBPressures(nic, _id, date, blood_pressure, added_by) {
        
        // Perform data validation checks

        if (typeof nic !== 'string' || nic.length === 0) {
            throw new Error('NIC is required!');
        }
        if (typeof _id !== 'string' || _id.length === 0) {
            throw new Error('ID is required!');
        }
        if (date.length === 0) {
            throw new Error('Date is required!');
        }
        if (typeof blood_pressure !== 'string' || blood_pressure.length === 0) {
            throw new Error('Blood pressure is required!');
        }
        if (typeof added_by !== 'string' || added_by.length === 0) {
            throw new Error('Added person is required!');
        }

        const bp = {
            date: date,
            blood_pressure: blood_pressure,
            added_by: added_by
        }

        return bp;
    }

    static addComments(nic, _id, date, comment, added_by) {
        
        // Perform data validation checks

        if (typeof nic !== 'string' || nic.length === 0) {
            throw new Error('NIC is required!');
        }
        if (typeof _id !== 'string' || _id.length === 0) {
            throw new Error('ID is required!');
        }
        if (date.length === 0) {
            throw new Error('Date is required!');
        }
        if (typeof comment !== 'string' || comment.length === 0) {
            throw new Error('Comment is required!');
        }
        if (typeof added_by !== 'string' || added_by.length === 0) {
            throw new Error('Added person is required!');
        }

        const comments = {
            date: date,
            comment: comment,
            added_by: added_by
        }

        return comments;
    }

    static addReports(nic, _id, date, report_name, report_type, report_link, added_by) {
        
        // Perform data validation checks

        if (typeof nic !== 'string' || nic.length === 0) {
            throw new Error('NIC is required!');
        }
        if (typeof _id !== 'string' || _id.length === 0) {
            throw new Error('ID is required!');
        }
        if (date.length === 0) {
            throw new Error('Date is required!');
        }
        if (typeof report_name !== 'string' || report_name.length === 0) {
            throw new Error('Report name is required!');
        }
        if (typeof report_type !== 'string' || report_type.length === 0) {
            throw new Error('Report type is required!');
        }
        if (typeof report_link !== 'string' || report_link.length === 0) {
            throw new Error('Report link is required!');
        }
        if (typeof added_by !== 'string' || added_by.length === 0) {
            throw new Error('Added person is required!');
        }

        const report = {
            date: date,
            report_name: report_name,
            report_type: report_type,
            report_link: report_link,
            added_by: added_by
        }

        return report;
    }

}

module.exports = userFactory;

