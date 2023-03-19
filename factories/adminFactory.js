const adminModel = require('./../models/Admins');

class adminFactory {
    static addAdmin (admin_name, organization, designation, phone_number, em, pwrd) {

    // Perform data validation checks
    if (typeof admin_name !== 'string' || admin_name.length === 0) {
        throw new Error('Admin name is required!');
      }
      if (typeof organization !== 'string' || organization.length === 0) {
        throw new Error('Organization is required!');
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
      if (typeof em !== 'string' || em.length === 0) {
        throw new Error('Email is required!');
      }
      if (typeof pwrd !== 'string' || pwrd.length === 0) {
        throw new Error('Password is required!');
      }

      
      const admin = new adminModel({
        admin_name: admin_name,
        organization: organization,
        designation: designation,
        phone_number: phone_number,
        email: em,
        passwrd: pwrd
    })

      return admin;
    }
}

module.exports = adminFactory;