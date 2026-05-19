import { useState } from 'react'

const initialStatus = { type: 'idle', message: '' }

// In production (Vercel), VITE_API_URL points to the Render backend.
// In local dev, it's empty and Vite's proxy forwards /api → localhost:5000.
const API_BASE = import.meta.env.VITE_API_URL || ''

export const useContactForm = (initialService) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService,
  })
  const [status, setStatus] = useState(initialStatus)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: 'loading', message: 'Submitting your request...' })

    try {
      const response = await fetch(`${API_BASE}/api/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorPayload = await response.json()
        throw new Error(errorPayload.message || 'Submission failed')
      }

      setStatus({
        type: 'success',
        message: 'Thanks! Our team will call you within 30 minutes.',
      })
      setFormData({ name: '', phone: '', service: initialService })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    }
  }

  return { formData, status, handleChange, handleSubmit }
}
