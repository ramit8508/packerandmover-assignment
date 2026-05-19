const express = require('express')
const Contact = require('../models/Contact')

const router = express.Router()

const phonePattern = /^[0-9+\-()\s]{7,18}$/

// GET all contacts (newest first) — useful for admin/testing
router.get('/', async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).lean()
    return res.status(200).json({ contacts })
  } catch (error) {
    return next(error)
  }
})

// POST — save a new contact/callback request
router.post('/', async (req, res, next) => {
  try {
    const { name, phone, service } = req.body

    if (!name || !phone || !service) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    if (!phonePattern.test(phone)) {
      return res.status(400).json({ message: 'Invalid phone number' })
    }

    const contact = await Contact.create({ name, phone, service })

    return res.status(201).json({
      message: 'Request received',
      id: contact._id,
    })
  } catch (error) {
    return next(error)
  }
})

module.exports = router
