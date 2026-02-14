import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from '../components/Hero'

export default function RequestExport() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        businessType: 'Distributor',
        interestedProducts: [],
        estimatedOrderQuantity: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    const products = [
        'Ashwagandha Capsules',
        'Garcinia Capsules',
        'Green Coffee Capsules',
        'Moringa Capsules',
        'Margosa (Neem) Capsules',
        'Papaya Leaves Capsules',
        'Heenbovitiya Capsules'
    ]

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleProductChange = (product) => {
        const updatedProducts = formData.interestedProducts.includes(product)
            ? formData.interestedProducts.filter(p => p !== product)
            : [...formData.interestedProducts, product]

        setFormData({
            ...formData,
            interestedProducts: updatedProducts
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)
        setErrorMessage('')

        try {
            const submitData = {
                ...formData,
                subject: 'Export Inquiry',
                message: `
Business Type: ${formData.businessType}
Interested Products: ${formData.interestedProducts.join(', ') || 'All Products'}
Estimated Order Quantity: ${formData.estimatedOrderQuantity}

Message:
${formData.message}
        `.trim()
            }

            const response = await fetch('/php/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submitData)
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
                    businessType: 'Distributor',
                    interestedProducts: [],
                    estimatedOrderQuantity: '',
                    message: ''
                })
            } else {
                setSubmitStatus('error')
                setErrorMessage(data.message || 'Something went wrong. Please try again.')
            }
        } catch (error) {
            setSubmitStatus('error')
            setErrorMessage('Failed to send inquiry. Please try again later.')
            console.error('Form submission error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="pt-16">
            <Hero
                title="Request Export Quotation"
                subtitle="Partner with us to bring premium Sri Lankan herbal products to your market"
            />

            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Export Inquiry Form</h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below with your requirements and we'll send you a detailed quotation within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name / Contact Person *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Company */}
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                        Company Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Country */}
                                <div>
                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                                        Country *
                                    </label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Business Type */}
                                <div>
                                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                                        Business Type *
                                    </label>
                                    <select
                                        id="businessType"
                                        name="businessType"
                                        value={formData.businessType}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                                    >
                                        <option value="Distributor">Distributor</option>
                                        <option value="Retailer">Retailer</option>
                                        <option value="Wholesaler">Wholesaler</option>
                                        <option value="E-commerce">E-commerce</option>
                                        <option value="Pharmacy Chain">Pharmacy Chain</option>
                                        <option value="Health Store">Health Store</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {/* Interested Products */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Interested Products (Select multiple)
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {products.map((product) => (
                                            <label
                                                key={product}
                                                className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-beige/30 transition-colors"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={formData.interestedProducts.includes(product)}
                                                    onChange={() => handleProductChange(product)}
                                                    className="w-4 h-4 text-gold focus:ring-gold border-gray-300 rounded"
                                                />
                                                <span className="ml-3 text-sm text-gray-700">{product}</span>
                                            </label>
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">Leave unchecked if interested in all products</p>
                                </div>

                                {/* Order Quantity */}
                                <div>
                                    <label htmlFor="estimatedOrderQuantity" className="block text-sm font-medium text-gray-700 mb-2">
                                        Estimated Order Quantity (bottles/month)
                                    </label>
                                    <input
                                        type="text"
                                        id="estimatedOrderQuantity"
                                        name="estimatedOrderQuantity"
                                        value={formData.estimatedOrderQuantity}
                                        onChange={handleChange}
                                        placeholder="e.g., 1000 bottles/month"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Additional Information / Requirements
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        placeholder="Tell us about your business, target market, or any specific requirements..."
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending Request...
                                        </span>
                                    ) : (
                                        'Request Export Quotation'
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
                                                <h3 className="text-sm font-semibold text-green-900">Request submitted successfully!</h3>
                                                <p className="text-sm text-green-700 mt-1">Thank you for your interest. Our team will review your request and send you a detailed quotation within 24 hours.</p>
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
                                                <h3 className="text-sm font-semibold text-red-900">Failed to submit request</h3>
                                                <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
                                <div className="space-y-4">
                                    {[
                                        {
                                            step: '1',
                                            title: 'Review',
                                            desc: 'Our team reviews your inquiry and business requirements'
                                        },
                                        {
                                            step: '2',
                                            title: 'Quotation',
                                            desc: 'We prepare a detailed quotation with pricing and terms'
                                        },
                                        {
                                            step: '3',
                                            title: 'Discussion',
                                            desc: 'We schedule a call to discuss your needs in detail'
                                        },
                                        {
                                            step: '4',
                                            title: 'Partnership',
                                            desc: 'Finalize terms and begin your successful partnership'
                                        }
                                    ].map((step) => (
                                        <div key={step.step} className="flex items-start bg-beige/30 rounded-lg p-4">
                                            <div className="w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                                {step.step}
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                                                <p className="text-sm text-gray-600">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="bg-gradient-to-br from-gold/10 to-primary-100/10 rounded-xl p-6 border-2 border-gold/20">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">What You Get</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Competitive export pricing',
                                        'Flexible MOQ options',
                                        'Complete quality documentation',
                                        'Reliable shipping worldwide',
                                        'Dedicated account support',
                                        'Marketing support materials'
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
                                <p className="text-gray-600 mb-4">
                                    Have questions before submitting? Our team is ready to assist you.
                                </p>
                                <div className="space-y-3">
                                    <a href="mailto:info@beeslineexports.com" className="flex items-center text-gold hover:underline">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        info@beeslineexports.com
                                    </a>
                                    <a href="/contact" className="flex items-center text-gold hover:underline">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                        Contact Form
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
