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

    async getDoctors(req, res) {
        try{
            const data = await doctorModel.find();
            res.status(200).json(data);
        }
        catch(error){
            res.status(400).json({ message: error.message });
        }
    }

    async getDoctorsbySpec(req, res) {
        try{
            const data = await doctorModel.find({specialization : req.body.specialization});
            const datalength = data.length;
            res.render(datalength);
        }
        catch(error){
            res.status(400).json({ message: error.message });
        }
    }
    
}

module.exports = new doctorController;