import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Animation variants matching Home page
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        subject: 'General Inquiry',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)
        setErrorMessage('')

        try {
            // In production, update this URL to your actual domain
            // For development, you might need a proxy or CORS setup
            const response = await fetch('/php/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (data.success) {
                setSubmitStatus('success')
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    country: '',
                    subject: 'General Inquiry',
                    message: ''
                })
            } else {
                setSubmitStatus('error')
                setErrorMessage(data.message || 'Something went wrong. Please try again.')
            }
        } catch (error) {
            setSubmitStatus('error')
            setErrorMessage('Failed to send message. Please try again later.')
            console.error('Form submission error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="overflow-hidden">
            {/* Hero Section - Matching HeroCarousel style */}
            <section className="relative h-screen overflow-hidden pt-20 md:pt-24">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 w-full h-full scale-110"
                        style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1920&auto=format&fit=crop)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                </div>

                {/* Multi-layer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/60 via-emerald-900/50 to-amber-900/60" />

                {/* Animated Gradient Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px]"
                    />
                </div>

                {/* Hero Content */}
                <div className="relative h-full flex items-center">
                    <div className="container mx-auto px-4 z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500/20 backdrop-blur-xl border border-amber-400/30 rounded-full text-amber-100 text-sm font-medium mb-8"
                            >
                                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                                We're Here to Help
                            </motion.div>

                            {/* Title */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Contact
                                <span className="block text-amber-300">Us</span>
                            </h1>

                            {/* Decorative Line */}
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <div className="w-16 h-1 bg-gradient-to-r from-transparent to-amber-400 rounded-full" />
                                <div className="w-3 h-3 bg-emerald-400 rounded-full" />
                                <div className="w-16 h-1 bg-gradient-to-l from-transparent to-amber-400 rounded-full" />
                            </div>

                            {/* Subtitle */}
                            <p className="text-xl md:text-2xl text-amber-100 mb-10 max-w-3xl mx-auto">
                                We're here to answer your questions and support your business
                            </p>

                            {/* Feature Pills */}
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    { icon: '📧', text: '24h Response' },
                                    { icon: '🌍', text: 'Global Support' },
                                    { icon: '💬', text: 'Expert Team' }
                                ].map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + idx * 0.1 }}
                                        className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white"
                                    >
                                        <span className="mr-2">{feature.icon}</span>
                                        {feature.text}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-amber-400 rounded-full"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Floating Botanical Decorations */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-10 text-6xl opacity-10"
                >
                    🌿
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 right-10 text-5xl opacity-10"
                >
                    🍃
                </motion.div>
            </div>

            {/* Contact Form Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-emerald-50" />

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-emerald-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-emerald-200/20 to-amber-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-amber-600 to-emerald-600 bg-clip-text text-transparent">
                                    Send Us a Message
                                </span>
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and our team will get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Company */}
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Country */}
                                <div>
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                    >
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Export Inquiry">Export Inquiry</option>
                                        <option value="Product Information">Product Information</option>
                                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                                        <option value="Quality & Certification">Quality & Certification</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>

                            {/* Success/Error Messages */}
                            <AnimatePresence>
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                                    >
                                        <div className="flex items-start">
                                            <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <div>
                                                <h3 className="text-sm font-semibold text-green-900">Message sent successfully!</h3>
                                                <p className="text-sm text-green-700 mt-1">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                                    >
                                        <div className="flex items-start">
                                            <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                            <div>
                                                <h3 className="text-sm font-semibold text-red-900">Failed to send message</h3>
                                                <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                        Get in Touch
                                    </span>
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Whether you're interested in our products, partnership opportunities, or have questions, we're here to help.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                                    <div className="flex items-start relative z-10">
                                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                                            <address className="not-italic text-gray-700 text-sm">
                                                BEES LINE EXPORTS (Pvt) Ltd<br />
                                                No. 10, Horton Place,<br />
                                                Colombo 07, Sri Lanka
                                            </address>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="flex items-start relative z-10">
                                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                                            <div className="flex flex-col text-sm">
                                                <a href="mailto:info@beeslineexport.com" className="text-emerald-600 hover:underline">info@beeslineexport.com</a>
                                                <a href="mailto:beeslineexport@gmail.com" className="text-emerald-600 hover:underline">beeslineexport@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="flex items-start relative z-10">
                                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.6a2 2 0 011.8 1.2L11 6h2l1.6-1.8A2 2 0 0116.2 3H19a2 2 0 012 2v14a2 2 0 01-2 2h-2.6a2 2 0 01-1.8-1.2L13 18h-2l-1.6 1.8A2 2 0 016.8 21H4a2 2 0 01-2-2V5z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                                            <div className="flex flex-col text-sm text-gray-700">
                                                <a href="tel:+94777182110" className="hover:text-emerald-600">+94 777 182 110</a>
                                                <a href="tel:+94777667576" className="hover:text-emerald-600">+94 777 667 576</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-6">
                                <div className="rounded-xl overflow-hidden border border-gray-100">
                                    <iframe
                                        title="Bees Line Exports Location"
                                        src="https://www.google.com/maps?q=No+10+Horton+Place+Colombo+07+Sri+Lanka&output=embed"
                                        className="w-full h-56 sm:h-72 md:h-64 lg:h-80 border-0"
                                        allowFullScreen=""
                                        loading="lazy"
                                    />
                                </div>

                                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-200">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
                                    <div className="space-y-3">
                                        <a href="/request-export" className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Request Export Quotation
                                        </a>
                                        <a href="/partners" className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Become a Partner
                                        </a>
                                        <a href="/products" className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                            View Products
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
