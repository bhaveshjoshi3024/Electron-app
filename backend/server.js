const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/users', userRoutes);

mongoose.connect('mongodb+srv://mongouser:mongopassword@ecommerce-full-stack.8pf1x.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-full-stack')
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  });
