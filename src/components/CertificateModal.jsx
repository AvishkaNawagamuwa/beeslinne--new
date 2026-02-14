import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

export default function CertificateModal({ certificate, isOpen, onClose }) {
    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) {
            document.addEventListener('keydown', handleEsc)
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.removeEventListener('keydown', handleEsc)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    if (!certificate) return null

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
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: 'spring', duration: 0.5 }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-gold transition-colors shadow-lg"
                                    aria-label="Close modal"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                <div className="p-8">
                                    {/* Badge */}
                                    {certificate.badge && (
                                        <span className="inline-block bg-gold text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                                            {certificate.badge}
                                        </span>
                                    )}

                                    {/* Title */}
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                        {certificate.title}
                                    </h2>

                                    {/* Image Container */}
                                    <div className="bg-gradient-to-br from-beige/50 to-white rounded-xl p-8 mb-6 flex items-center justify-center">
                                        <img
                                            src={certificate.image}
                                            alt={certificate.title}
                                            className="max-w-full max-h-96 object-contain"
                                            onError={(e) => {
                                                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f5f1e8" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" dy=".3em" fill="%23999"%3ECertificate Image%3C/text%3E%3C/svg%3E'
                                            }}
                                        />
                                    </div>

                                    {/* Full Description */}
                                    <div className="prose max-w-none">
                                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                            {certificate.fullDescription}
                                        </p>
                                    </div>

                                    {/* Optional Features */}
                                    {certificate.features && (
                                        <div className="bg-beige/30 rounded-lg p-6 mb-6">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                                            <ul className="space-y-2">
                                                {certificate.features.map((feature, index) => (
                                                    <li key={index} className="flex items-start text-gray-700">
                                                        <svg className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 pt-4 border-t">
                                        <button
                                            onClick={onClose}
                                            className="flex-1 btn-secondary"
                                        >
                                            Close
                                        </button>
                                        {certificate.downloadUrl && (
                                            <a
                                                href={certificate.downloadUrl}
                                                download
                                                className="flex-1 btn-primary text-center"
                                            >
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                    Download
                                                </span>
                                            </a>
                                        )}
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
