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
}

module.exports = new hospitalController;