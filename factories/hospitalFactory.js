const hospitalModel = require('./../models/Hospitals');

class hospitalFactory {
    static addHospital (hospital_regno, hospital_name, address, phone_number, added_by) {

    // Perform data validation checks
    if (typeof hospital_regno !== 'string' || hospital_regno.length === 0) {
        throw new Error('Hospital registration number is required!');
      }
      if (typeof hospital_name !== 'string' || hospital_name.length === 0) {
        throw new Error('Hospital name is required!');
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
      if (typeof added_by !== 'string' || added_by.length === 0) {
        throw new Error('The person who added this record is required!');
      }
      
      const hospital = new hospitalModel({
        hospital_regno: hospital_regno,
        hospital_name: hospital_name,
        address: address,
        phone_number: phone_number,
        added_by: added_by
    })

      return hospital;
    }
}

module.exports = hospitalFactory;