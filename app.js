const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./Routes/adminRoutes');
const hospitalRoutes = require('./Routes/hospitalRoutes');
const doctorRoutes = require('./Routes/doctorRoutes');
const emtRoutes = require('./Routes/emtRoutes');
const userRoutes = require('./Routes/userRoutes');

mongoose.connect('mongodb+srv://myehealthdiary:PfOzTV9QpdjCoUzi@myehealthdiary.ailvy0k.mongodb.net/MyeHealthDiary?retryWrites=true&w=majority', {
    useNewUrlparser: true,
});


app.use(express.json());

app.use(bodyParser.json());

app.use(adminRoutes);
app.use(hospitalRoutes);
app.use(doctorRoutes);
app.use(emtRoutes);
app.use(userRoutes);

app.listen(5000, ()=> {
    console.log('Server running on port 5000');
});
