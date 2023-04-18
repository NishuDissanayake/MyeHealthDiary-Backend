const doctorModel = require('./../models/Doctors');
const DoctorFactory = require('./../factories/doctorFactory');

class doctorController {

    async addDoctor(req, res) {

        try {

            const { doctor_id, doctor_name, hospital, specialization, qualifications, phone_number, email, passwrd, added_by } = req.body;

            const doctor = DoctorFactory.addDoctor(doctor_id, doctor_name, hospital, specialization, qualifications, phone_number, email, passwrd, added_by);

            await doctor.save();

            res.status(200).send('A new doctor added to the system successfully!');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }

    }
    
}

module.exports = new doctorController;