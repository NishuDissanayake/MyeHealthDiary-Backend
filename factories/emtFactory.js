const emtModel = require('./../models/EMTs');

class emtFactory {
    static addEmt (emt_id, emt_name, hospital, designation, phone_number, email, passwrd, added_by) {

    // Perform data validation checks
    if (typeof emt_id !== 'string' || emt_id.length === 0) {
        throw new Error('Emergency Medical Team member registration ID number is required!');
      }
      if (typeof emt_name !== 'string' || emt_name.length === 0) {
        throw new Error('Emergency Medical Team member name is required!');
      }
      if (typeof hospital !== 'string' || hospital.length === 0) {
        throw new Error('Hospital name is required!');
      }
      if (typeof designation !== 'string' || designation.length === 0) {
        throw new Error('Designation is required!');
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
      if (typeof passwrd !== 'string' || passwrd.length === 0) {
        throw new Error('Password is required!');
      }
      if (typeof added_by !== 'string' || added_by.length === 0) {
        throw new Error('The person who added this record is required!');
      }
      
      const emt = new emtModel({
        emt_id: emt_id,
        emt_name: emt_name,
        hospital: hospital,
        designation: designation,
        phone_number: phone_number,
        email: email,
        passwrd: passwrd,
        added_by: added_by
    })

      return emt;
    }
}

module.exports = emtFactory;