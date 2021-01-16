const express = require('express');
const app = express();
const connectDB = require('./config/db');
const user = require('./routes/user');
const auth = require('./routes/auth');
const cors= require('cors');
const contact= require('./routes/contact');

//conection to db
connectDB();

// Init middleware
app.use(express.json({extended : false}));

//routes
app.use('/api/users', user);
app.use('/api/auth',auth);
app.use('/api/contacts',contact);

//
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server is Listening at ${PORT}`);
});