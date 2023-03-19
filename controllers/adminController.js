const adminModel = require('./../models/Admins');
const AdminFactory = require('./../factories/adminFactory');

class adminController {

    async addAdmin(req, res) {

        try {
            const admin_name = 'Nishu Dissanayake';
            const organization = 'National Health Bureau';
            const designation = 'Medical Director';
            const phone_number = '0787878789';
            const em = 'nishu2@gmail.com';
            const pwrd = 'adfahjsd45456';

            // use adminFactory to create new instance of the Admin model
            const admin = AdminFactory.addAdmin(admin_name, organization, designation, phone_number, em, pwrd);

            await admin.save();

            res.status(200).send('Admin added!');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }

    }
    /*

    async addGame(req, res) {
        try {
            const { admin_name, organization, designation, phone_number, email, passwrd } = req.body;

            // use gameFactory to create new instance of the Game model
            const game = GameFactory.createGame(title, desc, rating);

            await game.save();

            res.status(201).send('Game added!');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }

    async getGames(req, res) {
        try {
            const games = await Game.find();
            const gameList = games.map(game => GameFactory.createGame(game.title, game.desc, game.rating));
            res.status(200).send(gameList);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    */
}

module.exports = new adminController;