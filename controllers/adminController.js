const adminModel = require('./../models/Admins');
const AdminFactory = require('./../factories/adminFactory');
const bcrypt = require('bcryptjs');

class adminController {

    async addAdmin(req, res) {

        try {

            const { admin_name, organization, designation, phone_number, em, pwrd } = req.query;
            const passwrd = await bcrypt.hash(pwrd, 10);
            // use adminFactory to create new instance of the Admin model
            const admin = AdminFactory.addAdmin(admin_name, organization, designation, phone_number, em, passwrd);

            await admin.save();

            res.status(200).send('A new admin added to the system successfully!');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }

    }

    async updateAdminOrg(req, res) {
        try {

            const { email, n_organization } = req.query;

            const result = await adminModel.findOneAndUpdate(
                { email: email },
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

            const { email, n_designation } = req.query;

            const result = await adminModel.findOneAndUpdate(
                { email: email },
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

            const { email, n_phone } = req.query;

            const result = await adminModel.findOneAndUpdate(
                { email: email },
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

            const { email, n_pass} = req.query;

            const result = await adminModel.findOneAndUpdate(
                { email: email },
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

            const { email } = req.query;

            const status = "deactivated";

            const result = await adminModel.findOneAndUpdate(
                { email: email },
                { status: status },
                { maxTimeMS: 30000 }
            ) 

            res.status(200).json({ message: 'Account deactivated successfully!' });

        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async getAdminByEmail(req, res) {
        try{
            const data = await adminModel.find({email : req.query.email});
            res.status(200).json(data);
        }
        catch(error){
            res.status(400).json({ message: error.message });
        }
    }

}

module.exports = new adminController;