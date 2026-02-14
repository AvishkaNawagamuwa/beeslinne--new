import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProductModal({ product, isOpen, onClose }) {
    if (!product) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: 'spring', duration: 0.5 }}
                                className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-gold transition-colors shadow-lg"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div className="grid md:grid-cols-2 gap-8 p-8">
                                    {/* Image Section */}
                                    <div className="relative">
                                        <div className="bg-beige rounded-xl p-8 aspect-square flex items-center justify-center">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        {product.featured && (
                                            <span className="absolute top-4 right-4 bg-gold text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                                                Featured
                                            </span>
                                        )}
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex flex-col">
                                        <div className="flex-1">
                                            <span className="inline-block text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                                                {product.category}
                                            </span>

                                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                                {product.name}
                                            </h2>

                                            <p className="text-sm italic text-gray-500 mb-4">
                                                {product.scientificName}
                                            </p>

                                            {/* Product Info */}
                                            <div className="flex items-center gap-3 mb-6">
                                                <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-beige text-gray-700">
                                                    {product.mg}mg
                                                </span>
                                                <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-beige text-gray-700">
                                                    {product.capsules} Capsules
                                                </span>
                                            </div>

                                            <p className="text-gray-700 leading-relaxed mb-6">
                                                {product.tagline}
                                            </p>

                                            {/* Key Benefits */}
                                            <div className="mb-6">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h3>
                                                <ul className="space-y-2">
                                                    {product.benefits.slice(0, 5).map((benefit, index) => (
                                                        <li key={index} className="flex items-start text-sm text-gray-700">
                                                            <svg className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                            </svg>
                                                            <span>{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="space-y-3 pt-4 border-t">
                                            <Link
                                                to={`/products/${product.slug}`}
                                                onClick={onClose}
                                                className="block btn-primary text-center w-full"
                                            >
                                                View Full Details
                                            </Link>
                                            <Link
                                                to="/request-export"
                                                onClick={onClose}
                                                className="block btn-secondary text-center w-full"
                                            >
                                                Send Inquiry
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
