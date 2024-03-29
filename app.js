const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const adminRoutes = require('./Routes/adminRoutes');
const hospitalRoutes = require('./Routes/hospitalRoutes');
const doctorRoutes = require('./Routes/doctorRoutes');
const emtRoutes = require('./Routes/emtRoutes');
const userRoutes = require('./Routes/userRoutes');
const loginRoutes = require('./Routes/loginRoutes');

app.use(
    cors({
      origin: ["http://localhost:3000","https://myehealthdiary.me"]
    })
  );

require("dotenv").config();

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
app.use(loginRoutes);

app.listen(process.env.PORT || 5000, ()=> {
    console.log('Server running on port 5000');
});

