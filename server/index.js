const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const contactRoutes = require('./routes/contacts')

dotenv.config()

const app = express()

// ── CORS ──────────────────────────────────────────────────────────────────────
// In production, ALLOWED_ORIGIN is your Vercel domain (e.g. https://steelmove.vercel.app)
// You can also pass a comma-separated list for multiple origins.
const rawOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:5173'
const allowedOrigins = rawOrigin.split(',').map((o) => o.trim())

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, Postman)
      if (!origin) return callback(null, true)
      if (allowedOrigins.includes(origin)) return callback(null, true)
      // Allow any Vercel preview deployment for this project
      if (/\.vercel\.app$/.test(origin)) return callback(null, true)
      callback(new Error(`CORS: origin ${origin} not allowed`))
    },
    methods: ['GET', 'POST'],
    credentials: false,
  })
)

app.use(express.json({ limit: '10kb' }))

// ── Routes ────────────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', env: process.env.NODE_ENV })
})

app.use('/api/contacts', contactRoutes)

// ── 404 ───────────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

// ── Global error handler ──────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ message: 'Server error' })
})

// ── Start ─────────────────────────────────────────────────────────────────────
const port = process.env.PORT || 5000

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port} [${process.env.NODE_ENV || 'development'}]`)
    })
  })
  .catch((error) => {
    console.error('Failed to start server:', error)
    process.exit(1)
  })
