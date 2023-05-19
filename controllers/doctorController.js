const doctorModel = require('./../models/Doctors');
const DoctorFactory = require('./../factories/doctorFactory');
const bcrypt = require('bcryptjs');

class doctorController {

    async addDoctor(req, res) {

        try {

            const { doctor_id, doctor_name, hospital, specialization, qualifications, phone_number, email, pass, added_by } = req.query;
            const passwrd = await bcrypt.hash(pass, 10);
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
            const data = await doctorModel.find({email: req.query.email});
            res.status(200).json(data);
        }
        catch(error){
            res.status(400).json({ message: error.message });
        }
    }

    async getDoctorsbySpec(req, res) {
        try{
            const status = "active";
            const data = await doctorModel.find({specialization : req.query.specialization, status: status});
            res.status(200).json(data);
        }
        catch(error){
            res.status(400).json({ message: error.message });
        }
    }
    
    async getDoctorsbyHospital(req, res) {
        try{
            const status = "active";
            const data = await doctorModel.find({hospital : req.query.hospital, status: status});
            res.status(200).json(data);
        }
        catch(error){
            res.status(400).json({ message: error.message });
        }
    }

    async updateDoctorHospital(req, res) {
        try {

            const { email, n_hospital } = req.query;

            const result = await doctorModel.findOneAndUpdate(
                { email: email },
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

            const { email, n_qualifications } = req.query;

            const result = await doctorModel.findOneAndUpdate(
                { email: email },
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

            const { email, n_phone } = req.query;

            const result = await doctorModel.findOneAndUpdate(
                { email: email },
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

            const { email, n_pass } = req.query;
            const hashedPassword = await bcrypt.hash(n_[pass], 10);
            const result = await doctorModel.findOneAndUpdate(
                { email: email },
                { passwrd: hashedPassword },
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

            const { email } = req.query;

            const status = "Deactivated";

            const result = await doctorModel.findOneAndUpdate(
                { email: email },
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
