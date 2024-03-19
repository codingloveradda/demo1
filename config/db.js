const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  const db_url = process.env.DB_URL || 'mongodb://localhost:27017/test'
    try {
      const conn = await mongoose.connect(db_url);
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

module.exports = connectDB