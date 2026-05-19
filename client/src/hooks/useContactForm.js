import { useState } from 'react'

const initialStatus = { type: 'idle', message: '' }

// In production (Vercel), VITE_API_URL points to the Render backend.
// In local dev, it is empty and Vite's proxy forwards /api → localhost:5000.
const API_BASE = import.meta.env.VITE_API_URL || ''

// Safely try to parse a JSON body; fall back to null if it fails or is empty.
async function safeJson(response) {
  try {
    const text = await response.text()
    return text ? JSON.parse(text) : null
  } catch {
    return null
  }
}

// Map HTTP status codes to friendly messages the user can understand.
function friendlyError(status, serverMessage) {
  if (status === 400) return serverMessage || 'Please check your details and try again.'
  if (status === 405) return 'Service temporarily unavailable. Please call us directly.'
  if (status === 429) return 'Too many requests. Please wait a moment and try again.'
  if (status >= 500) return 'Our server is having trouble right now. Please try again in a minute.'
  return 'Something went wrong. Please try again or call +91 98765 43210.'
}

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
        const payload = await safeJson(response)
        const message = friendlyError(response.status, payload?.message)
        setStatus({ type: 'error', message })
        return
      }

      setStatus({
        type: 'success',
        message: '✓ Request received! Our team will call you within 30 minutes.',
      })
      setFormData({ name: '', phone: '', service: initialService })
    } catch {
      // Network error, offline, CORS, etc.
      setStatus({
        type: 'error',
        message: 'Unable to reach our servers. Please check your connection or call +91 98765 43210.',
      })
    }
  }

  return { formData, status, handleChange, handleSubmit }
}
