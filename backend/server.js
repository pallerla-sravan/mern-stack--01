const express = require('express');
const mongoose = require('mongoose');
const signupRoute = require('./routes/signup');
const signinRoute = require('./routes/signin');
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())

// Connect to MongoDB
mongoose.connect('mongodb+srv://sravanpallerla1234:ZJAu0K4bx0Pdb5Mw@cluster0.zcq4up8.mongodb.net/email')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


// Routes
app.use('/api/auth/signup', signupRoute);
app.use('/api/auth/signin', signinRoute);

// Start the server

app.listen(5000);
