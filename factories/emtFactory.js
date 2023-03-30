const doctorModel = require('./../models/Doctors');

class doctorFactory {
    static addDoctor (doctor_id, doctor_name, hospital, specialization, qualifications, phone_number, email, passwrd, added_by) {

    // Perform data validation checks
    if (typeof doctor_id !== 'string' || doctor_id.length === 0) {
        throw new Error('Doctor registration ID number is required!');
      }
      if (typeof doctor_name !== 'string' || doctor_name.length === 0) {
        throw new Error('Doctor name is required!');
      }
      if (typeof hospital !== 'string' || hospital.length === 0) {
        throw new Error('Hospital name is required!');
      }
      if (typeof specialization !== 'string' || specialization.length === 0) {
        throw new Error('Specialization is required!');
      }
      if (typeof qualifications !== 'string' || qualifications.length === 0) {
        throw new Error('Qualifications are required!');
      }
      if (phone_number.length !== 10) {
        throw new Error('Phone number is required!');
      }
      const num = parseInt(phone_number);
      if (typeof num !== 'number') {
        throw new Error('Phone number should be a number!');
      }
      if (typeof email !== 'string' || email.length === 0) {
        throw new Error('Email is required!');
      }
      if (typeof added_by !== 'string' || added_by.length === 0) {
        throw new Error('The person who added this record is required!');
      }
      
      const doctor = new doctorModel({
        doctor_id: doctor_id,
        doctor_name: doctor_name,
        hospital: hospital,
        specialization: specialization,
        qualifications: qualifications,
        phone_number: phone_number,
        email: email,
        added_by: added_by
    })

      return doctor;
    }
}

module.exports = doctorFactory;