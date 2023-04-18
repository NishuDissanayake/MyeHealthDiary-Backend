const emtModel = require('./../models/EMTs');
const EmtFactory = require('./../factories/emtFactory');

class emtController {

    async addEmt(req, res) {

        try {

            const { emt_id, emt_name, hospital, designation, phone_number, email, passwrd, added_by } = req.body;

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
    
}

module.exports = new emtController;