import { useState, useEffect } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'
import styled from 'styled-components';

const ContactSection = styled.div`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(165deg, 
    rgba(37, 99, 235, 0.95) 0%, 
    rgba(37, 99, 235, 0.4) 25%, 
    rgba(0, 0, 0, 0) 50%),
    url('src/assets/img/white.jpg');  // Replace with your background image
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 0;
  overflow: hidden;
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })
  const [agreed, setAgreed] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    document.title = "Contact Us | Your Company Name";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contact our team for any questions, support, or business inquiries. We're here to help and will respond as soon as possible."
      );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target
    
    // Special handling for phone numbers
    if (name === 'phone') {
      // Only allow numbers and remove any other characters
      const numbersOnly = value.replace(/[^\d]/g, '')
      setFormData(prev => ({
        ...prev,
        [name]: numbersOnly
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    if (!agreed) newErrors.agreed = 'You must agree to the privacy policy'
    
    // Add phone validation
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        })
        setAgreed(false)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ContactSection>
      <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
        <main>
          <article>
            <header className="mx-auto max-w-2xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">
                Contact Us
              </h1>
              <p className="mt-4 text-lg/8 text-blue-800">
                We'd love to hear from you. Send us a message and we'll respond within 24 hours.
              </p>
            </header>
            
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ContactPage",
                "name": "Contact Us",
                "description": "Contact our team for any questions, support, or business inquiries.",
                "url": window.location.href,
                "mainEntity": {
                  "@type": "Organization",
                  "name": "Your Company Name",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "availableLanguage": "English"
                  }
                }
              })}
            </script>

            <div className="mx-auto mt-16 max-w-7xl lg:flex lg:gap-x-16">
              <div className="lg:flex-1">
                <form 
                  onSubmit={handleSubmit}
                  className="max-w-xl"
                  aria-label="Contact form"
                >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                        First name
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="first-name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`${errors.firstName ? 'ring-red-500' : 'ring-gray-300'} block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 transition-all duration-200 hover:ring-gray-400 sm:text-sm/6`}
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                        Last name
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="last-name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`${errors.lastName ? 'ring-red-500' : 'ring-gray-300'} block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 transition-all duration-200 hover:ring-gray-400 sm:text-sm/6`}
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                        Company
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={`${errors.company ? 'ring-red-500' : 'ring-gray-300'} block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 transition-all duration-200 hover:ring-gray-400 sm:text-sm/6`}
                        />
                        {errors.company && (
                          <p className="mt-1 text-sm text-red-600">{errors.company}</p>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`${errors.email ? 'ring-red-500' : 'ring-gray-300'} block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 transition-all duration-200 hover:ring-gray-400 sm:text-sm/6`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                        Phone number
                      </label>
                      <div className="relative mt-2.5">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                          <label htmlFor="country" className="sr-only">
                            Country
                          </label>
                        </div>
                        <input
                          id="phone-number"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter 10-digit number"
                          maxLength={10}
                          className={`${errors.phone ? 'ring-red-500' : 'ring-gray-300'} block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 transition-all duration-200 hover:ring-gray-400 sm:text-sm/6`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                        Message
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className={`${errors.message ? 'ring-red-500' : 'ring-gray-300'} block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 transition-all duration-200 hover:ring-gray-400 sm:text-sm/6`}
                          defaultValue={''}
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                        )}
                      </div>
                    </div>
                    <Field className="flex gap-x-4 sm:col-span-2">
                      <div className="flex h-6 items-center">
                        <Switch
                          checked={agreed}
                          onChange={setAgreed}
                          className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                        >
                          <span className="sr-only">Agree to policies</span>
                          <span
                            aria-hidden="true"
                            className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                          />
                        </Switch>
                      </div>
                      <Label className="text-sm/6 text-gray-600">
                        By selecting this, you agree to our{' '}
                        <a href="#" className="font-semibold text-indigo-600">
                          privacy&nbsp;policy
                        </a>
                        .
                      </Label>
                    </Field>
                  </div>
                  {submitStatus && (
                    <div className={`mt-4 p-4 rounded-lg ${
                      submitStatus === 'success' 
                        ? 'bg-green-50 text-green-700' 
                        : 'bg-red-50 text-red-700'
                    }`}>
                      {submitStatus === 'success' 
                        ? 'Message sent successfully!' 
                        : 'Failed to send message. Please try again.'}
                    </div>
                  )}
                  <div className="mt-10">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="block w-full rounded-lg bg-gray-900 px-4 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-16 lg:mt-0 lg:flex-1">
                <div className="h-[600px] rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.003880560751!2d77.52908799999996!3d13.0674053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17dfb8390277%3A0x2f5e7605b180ac71!2sMathikere%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1732606316501!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="mt-6 space-y-4 text-sm">
                  <div>
                    <h2 className="font-semibold text-gray-900">Our Office</h2>
                    <p className="mt-2 text-gray-600">
                      123 Business Street<br />
                      City, State 12345<br />
                      United States
                    </p>
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-900">Working Hours</h2>
                    <p className="mt-2 text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </ContactSection>
  )
}
