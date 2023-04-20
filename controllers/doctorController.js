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

    async getDoctorByEmail(req, res) {
        try{
            const data = await doctorModel.find({email: req.body.email});
            res.status(200).json(data);
        }
        catch(error){
            res.status(400).json({ message: error.message });
        }
    }

    async getDoctorsbySpec(req, res) {
        try{
            const status = "active";
            const data = await doctorModel.find({specialization : req.body.specialization, status: status});
            res.status(200).json(data);
        }
        catch(error){
            res.status(400).json({ message: error.message });
        }
    }

    async updateDoctorHospital(req, res) {
        try {

            const { _id, n_hospital } = req.body;

            const result = await doctorModel.findOneAndUpdate(
                { _id: _id },
                { hospital: n_hospital },
                { maxTimeMS: 30000 }
            ) 

            res.status(200).json({ message: 'Hospital updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async updateDoctorQualifications(req, res) {
        try {

            const { _id, n_qualifications } = req.body;

            const result = await doctorModel.findOneAndUpdate(
                { _id: _id },
                { qualifications: n_qualifications },
                { maxTimeMS: 30000 }
            ) 

            res.status(200).json({ message: 'Qualifications updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async updateDoctorContact(req, res) {
        try {

            const { _id, n_phone } = req.body;

            const result = await doctorModel.findOneAndUpdate(
                { _id: _id },
                { phone_number: n_phone },
                { maxTimeMS: 30000 }
            ) 

            res.status(200).json({ message: 'Phone number updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async updateDoctorPassword(req, res) {
        try {

            const { _id, n_pass } = req.body;

            const result = await doctorModel.findOneAndUpdate(
                { _id: _id },
                { passwrd: n_pass },
                { maxTimeMS: 30000 }
            ) 

            res.status(200).json({ message: 'Password updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async deleteDoctor(req, res) {
        try {

            const { _id } = req.body;

            const status = "Deactivated";

            const result = await doctorModel.findOneAndUpdate(
                { _id: _id },
                { status: status },
                { maxTimeMS: 30000 }
            ) 

            res.status(200).json({ message: 'Account deleted successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    
}

module.exports = new doctorController;