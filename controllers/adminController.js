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

    async updateAdminOrg(req, res) {
        try {

            const { _id, n_organization } = req.body;

            const result = await adminModel.findOneAndUpdate(
                { _id: _id },
                { organization: n_organization },
                { maxTimeMS: 30000 }
            ) 

            res.status(200).json({ message: 'Your organization updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async updateAdminPosition(req, res) {
        try {

            const { _id, n_designation } = req.body;

            const result = await adminModel.findOneAndUpdate(
                { _id: _id },
                { designation: n_designation },
                { maxTimeMS: 30000 }
            ) 

            res.status(200).json({ message: 'Your designation updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async updateAdminPhone(req, res) {
        try {

            const { _id, n_phone } = req.body;

            const result = await adminModel.findOneAndUpdate(
                { _id: _id },
                { phone_number: n_phone },
                { maxTimeMS: 30000 }
            ) 

            res.status(200).json({ message: 'Your phone number updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async updateAdminPassword(req, res) {
        try {

            const { _id, n_pass} = req.body;

            const result = await adminModel.findOneAndUpdate(
                { _id: _id },
                { passwrd: n_pass },
                { maxTimeMS: 30000 }
            ) 

            res.status(200).json({ message: 'Your password updated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async deactivateAdminAccount(req, res) {
        try {

            const { _id, status} = req.body;

            const result = await adminModel.findOneAndUpdate(
                { _id: _id },
                { status: status },
                { maxTimeMS: 30000 }
            ) 

            res.status(200).json({ message: 'Account deactivated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

}

module.exports = new adminController;