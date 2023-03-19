const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const UserModel = require('./models/Users');


const adminRoutes = require('./Routes/adminRoutes');

mongoose.connect('mongodb+srv://myehealthdiary:PfOzTV9QpdjCoUzi@myehealthdiary.ailvy0k.mongodb.net/MyeHealthDiary?retryWrites=true&w=majority', {
    useNewUrlparser: true,
});


app.use(express.json());

app.use(bodyParser.json());

app.use(adminRoutes);

app.listen(5000, ()=> {
    console.log('Server running on port 5000');
});

/* app.post('/', async (req, res) => {

    const user = new UserModel({ userName: "Nishu", userId: 2 });

    try {
        await user.save();
        res.status(200).json({ message: 'user added successful!' });

    } 
    catch(err) {
        console.log(err);
    }
});

*/

