const hospitalModel = require('./../models/Hospitals');
const HospitalFactory = require('./../factories/hospitalFactory');

class hospitalController {

    async addHospital(req, res) {

        try {

            const { hospital_regno, hospital_name, address, phone_number, added_by } = req.body;

            const hospital = HospitalFactory.addHospital(hospital_regno, hospital_name, address, phone_number, added_by);

            await hospital.save();

            res.status(200).send('A new hospital added to the system successfully!');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }

    }
    
    async getHospitals(req, res) {
        try{
            const data = await hospitalModel.find();
            res.status(200).json(data);
        }
        catch(error){
            res.status(400).json({ message: error.message });
        }
    }

    async updateHospitalAddress(req, res) {
        try {

            const { reg_no, n_address } = req.body;

            const result = await hospitalModel.findOneAndUpdate(
                { hospital_regno: reg_no },
                { address: n_address },
                { maxTimeMS: 30000 }
            ) 

            res.status(200).json({ message: 'Address updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async updateHospitalContact(req, res) {
        try {

            const { reg_no, n_phone } = req.body;

            const result = await hospitalModel.findOneAndUpdate(
                { hospital_regno: reg_no },
                { phone_number: n_phone },
                { maxTimeMS: 30000 }
            ) 

            res.status(200).json({ message: 'Phone number updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async deleteHospital(req, res) {
        try {

            const { reg_no } = req.body;

            const status = "defected";

            const result = await hospitalModel.findOneAndUpdate(
                { hospital_regno: reg_no },
                { status: status },
                { maxTimeMS: 30000 }
            ) 

            res.status(200).json({ message: 'Hospital deleted successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

}

module.exports = new hospitalController;