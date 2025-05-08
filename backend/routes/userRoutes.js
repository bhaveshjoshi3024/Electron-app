const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const User = require('../models/User');

// Multer Setup
const uploadPathImages = path.join(__dirname, '../uploads/images');
const uploadPathVideos = path.join(__dirname, '../uploads/videos');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith('image')) cb(null, uploadPathImages);
    else cb(null, uploadPathVideos);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.post('/add', upload.fields([
  { name: 'images', maxCount: 10 },
  { name: 'video', maxCount: 1 }
]), async (req, res) => {
  try {
    const { name, age, date, time, city, address } = req.body;
    const imagePaths = req.files.images?.map(file => `/uploads/images/${file.filename}`) || [];
    const videoPath = req.files.video?.[0]?.path.replace("backend", "") || "";

    const user = new User({ name, age, date, time, city, address, images: imagePaths, video: videoPath });
    console.log("Saving user:", user);

    await user.save();
    res.json({ message: 'User added successfully' });
  } catch (err) {
    console.error('Error saving user:', err);
    res.status(500).json({ message: 'Failed to add user' });
  }
});

router.get('/search', async (req, res) => {
    try {
      const { city, date } = req.query;
  
      const filter = {};
      if (date) filter.date = date;
      if (city) filter.city = { $regex: new RegExp(`^${city}$`, 'i') };
  
      const users = await User.find(filter);
      res.json(users);
    } catch (err) {
      console.error('Search error:', err);
      res.status(500).json({ message: 'Search failed' });
    }
  });
  

module.exports = router;
