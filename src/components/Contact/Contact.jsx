import React, { useState } from 'react'
import { motion } from 'motion/react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdSend } from 'react-icons/md'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(function(prev) {
      return { ...prev, [name]: value }
    })
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(function(prev) {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  function validateForm() {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(function() {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
      // Hide success message after 5 seconds
      setTimeout(function() {
        setSubmitSuccess(false)
      }, 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Our Address',
      details: 'Medical Plaza, Health District',
      details2: 'Cairo, Egypt',
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      details: '0127295817',
      details2: 'Kareem Shalan',
      color: 'text-green-500',
      bg: 'bg-green-50'
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: 'kareemmohamedali330@gmail.com',
      details2: 'Contact us anytime',
      color: 'text-red-500',
      bg: 'bg-red-50'
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      details2: 'Sat - Sun: 10:00 AM - 4:00 PM',
      color: 'text-purple-500',
      bg: 'bg-purple-50'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#503217] mb-4">
            Get in Touch
          </h1>
          <div className="h-1 w-32 bg-[#D3744A] rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map(function(info, index) {
            const Icon = info.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`${info.bg} ${info.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <Icon className="text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-[#503217] mb-2 text-center">
                  {info.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">{info.details}</p>
                <p className="text-gray-600 text-sm text-center">{info.details2}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Main Content - Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-[#503217] mb-6">
              Send us a Message
            </h2>
            
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-2"
              >
                <span className="text-xl">✓</span>
                <span className="font-semibold">Message sent successfully! We'll get back to you soon.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 ${
                    errors.name ? 'border-red-400' : 'border-gray-200'
                  } rounded-lg focus:border-[#D3744A] focus:outline-none transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 ${
                      errors.email ? 'border-red-400' : 'border-gray-200'
                    } rounded-lg focus:border-[#D3744A] focus:outline-none transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 ${
                      errors.phone ? 'border-red-400' : 'border-gray-200'
                    } rounded-lg focus:border-[#D3744A] focus:outline-none transition-colors`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 ${
                    errors.subject ? 'border-red-400' : 'border-gray-200'
                  } rounded-lg focus:border-[#D3744A] focus:outline-none transition-colors`}
                  placeholder="How can we help you?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 border-2 ${
                    errors.message ? 'border-red-400' : 'border-gray-200'
                  } rounded-lg focus:border-[#D3744A] focus:outline-none transition-colors resize-none`}
                  placeholder="Tell us more about your inquiry..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-3 ${
                  isSubmitting ? 'bg-gray-400' : 'bg-[#D3744A] hover:bg-[#B86539]'
                } text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <MdSend className="text-xl" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[400px]">
              <iframe
                title="Medifit Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442583.29587667465!2d31.02354024999999!3d30.044420249999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Egypt!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-[#503217] mb-4">
                Follow Us
              </h3>
              <p className="text-gray-600 mb-6">
                Stay connected with us on social media for updates, health tips, and exclusive offers.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/share/1UhMwTgRfS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 text-blue-600 p-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <FaFacebook className="text-2xl" />
                </a>
                <a
                  href="https://www.instagram.com/kemo_shalan?igsh=czU4c2Q2cDQ0dmg1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-100 text-pink-600 p-4 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <FaInstagram className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kareem-shalan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 text-blue-700 p-4 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Emergency Support
              </h3>
              <p className="mb-4 opacity-90">
                For urgent medical inquiries, please call our helpline:
              </p>
              <a
                href="tel:0127295817"
                className="text-3xl font-bold hover:underline"
              >
                0127295817
              </a>
              <p className="mt-2 text-sm opacity-80">Kareem Shalan</p>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-[#503217] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'What are your delivery times?',
                a: 'We typically deliver within 2-5 business days depending on your location.'
              },
              {
                q: 'Do you offer prescription services?',
                a: 'Yes, we can process prescriptions. Please contact us for more information.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers.'
              },
              {
                q: 'Can I return a product?',
                a: 'Yes, we have a 30-day return policy for unopened products.'
              }
            ].map(function(faq, index) {
              return (
                <div key={index} className="border-l-4 border-[#D3744A] pl-4">
                  <h4 className="font-bold text-[#503217] mb-2">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
