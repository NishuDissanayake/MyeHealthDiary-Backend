const adminModel = require('./../models/Admins');
const AdminFactory = require('./../factories/adminFactory');

class adminController {

    async addAdmin(req, res) {

        try {

            const { admin_name, organization, designation, phone_number, em, pwrd } = req.body;

            // use adminFactory to create new instance of the Admin model
            const admin = AdminFactory.addAdmin(admin_name, organization, designation, phone_number, em, pwrd);

            await admin.save();

            res.status(200).send('A new admin added to the system successfully!');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }

    }
    
}

module.exports = new adminController;