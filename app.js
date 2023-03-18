const express = require('express');
const mongoose = require('mongoose');
const app = express();

const UserModel = require('./models/Users');

app.use(express.json());

mongoose.connect('mongodb+srv://myehealthdiary:PfOzTV9QpdjCoUzi@myehealthdiary.ailvy0k.mongodb.net/MyeHealthDiary?retryWrites=true&w=majority', {
    useNewUrlparser: true,
});

app.post('/', async (req, res) => {

    const user = new UserModel({ userName: "Nishu", userId: 2 });

    try {
        await user.save();
        res.status(200).json({ message: 'user added successful!' });

    } 
    catch(err) {
        console.log(err);
    }
});

app.listen(5000, ()=> {
    console.log('Server running on port 5000');
});