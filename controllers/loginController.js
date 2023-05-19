const User = require("./../models/Users");
const Doctor = require("./../models/Doctors");
const EMT = require("./../models/EMTs");
const Admin = require("./../models/Admins");

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Method for Doctor login
exports.doctorLogin = async (req, res) => {
  const { email, pass } = req.query;

  try {
    // Find the doctor by email
    const doctor = await Doctor.findOne({ email });

    // If doctor not found, return error
    if (!doctor) {
      return res.status(401).json({ message: 'Invalid email address!' });
    }

    // Compare password with the stored hashed password
    const isPasswordMatch = await bcrypt.compare(pass, doctor.passwrd);

    // If passwords don't match, return error
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: doctor._id, role: 'doctor', name: doctor.doctor_name, email: doctor.email },
      'your-secret-key',
      { expiresIn: '1h' }
    );

    // Return token as response
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.adminLogin = async (req, res) => {
    const { email, pass } = req.query;

    try {
      // Find the doctor by email
      const admin = await Admin.findOne({ email });
  
      // If doctor not found, return error
      if (!admin) {
        return res.status(401).json({ message: 'Invalid email address!' });
      }
  
      // Compare password with the stored hashed password
      const isPasswordMatch = await bcrypt.compare(pass, admin.passwrd);
  
      // If passwords don't match, return error
      if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign(
        { userId: admin.id, role: 'admin', name: admin.admin_name, email: admin.email },
        'your-secret-key',
        { expiresIn: '1h' }
      );
  
      // Return token as response
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
};

exports.emtLogin = async (req, res) => {
    const { email, pass } = req.query;

    try {
      // Find the doctor by email
      const emt = await EMT.findOne({ email });
  
      // If doctor not found, return error
      if (!emt) {
        return res.status(401).json({ message: 'Invalid email address!' });
      }
  
      // Compare password with the stored hashed password
      const isPasswordMatch = await bcrypt.compare(pass, emt.passwrd);
  
      // If passwords don't match, return error
      if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign(
        { userId: emt._id, role: 'emt', name: emt.emt_name, email: emt.email },
        'your-secret-key',
        { expiresIn: '1h' }
      );
  
      // Return token as response
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
};

exports.userLogin = async (req, res) => {
    const { email, pass } = req.query;

    try {
      // Find the doctor by email
      const user = await User.findOne({ email });
  
      // If doctor not found, return error
      if (!user) {
        return res.status(401).json({ message: 'Invalid email address!' });
      }
  
      // Compare password with the stored hashed password
      const isPasswordMatch = await bcrypt.compare(pass, user.passwrd);
  
      // If passwords don't match, return error
      if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, role: 'user', email: user.email, nic: user.nic, fname: user.first_name, lname: user.last_name },
        'your-secret-key',
        { expiresIn: '1h' }
      );
  
      // Return token as response
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
};
