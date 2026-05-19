const mongoose = require('mongoose')

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || process.env.MONGO_URL

  if (!uri) {
    throw new Error('MONGODB_URI is not set in environment variables')
  }

  try {
    await mongoose.connect(uri, {
      autoIndex: true,
      serverSelectionTimeoutMS: 10000, // Fail fast if Atlas is unreachable
      socketTimeoutMS: 45000,
    })
    console.log('MongoDB connected successfully')
  } catch (err) {
    console.error('MongoDB connection error:', err.message)
    throw err
  }
}

module.exports = connectDB
