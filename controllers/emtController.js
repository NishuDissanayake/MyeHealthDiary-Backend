const emtModel = require('./../models/EMTs');
const EmtFactory = require('./../factories/emtFactory');
const bcrypt = require('bcryptjs');

class emtController {

    async addEmt(req, res) {

        try {

            const { emt_id, emt_name, hospital, designation, phone_number, email, pass, added_by } = req.query;
            const passwrd = await bcrypt.hash(pass, 10);
            const emt = EmtFactory.addEmt(emt_id, emt_name, hospital, designation, phone_number, email, passwrd, added_by);

            await emt.save();

            res.status(200).send('A new Emergency Team Member added to the system successfully!');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }

    }

    async getEmts(req, res) {
        try{
            const data = await emtModel.find();
            res.status(200).json(data);
        }
        catch(error){
            res.status(400).json({ message: error.message });
        }
    }

    async getEmtByEmail(req, res) {
        try{
            const data = await emtModel.find({email : req.query.email});
            res.status(200).json(data);
        }
        catch(error){
            res.status(400).json({ message: error.message });
        }
    }

    async updateEmtHospital(req, res) {
        try {

            const { email, n_hospital } = req.query;

            const result = await emtModel.findOneAndUpdate(
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

    async updateEmtDesignation(req, res) {
        try {

            const { email, n_designation } = req.query;

            const result = await emtModel.findOneAndUpdate(
                { email: email },
                { designation: n_designation },
                { maxTimeMS: 30000 }
            ) 

            res.status(200).json({ message: 'Designation updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async updateEmtPhone(req, res) {
        try {

            const { email, n_phone } = req.query;

            const result = await emtModel.findOneAndUpdate(
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

    async updateEmtPassword(req, res) {
        try {

            const { email, n_pass } = req.query;

            const result = await emtModel.findOneAndUpdate(
                { email: email },
                { passwrd: n_pass },
                { maxTimeMS: 30000 }
            ) 

            res.status(200).json({ message: 'Password updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async deleteEmt(req, res) {
        try {

            const { email } = req.query;

            const status = "deactivated";

            const result = await emtModel.findOneAndUpdate(
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

module.exports = new emtController;
