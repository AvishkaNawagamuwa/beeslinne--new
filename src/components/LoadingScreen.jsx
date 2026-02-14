import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                    >
                        <img
                            src="/assets/images/logo1.png"
                            alt="Bees Line Exports Logo"
                            className="w-32 h-32 md:w-40 md:h-40 object-contain"
                            style={{ mixBlendMode: 'multiply' }}
                        />
                    </motion.div>

                    <div className="relative w-16 h-16">
                        <motion.div
                            className="absolute inset-0 border-4 border-beige rounded-full"
                            style={{ borderTopColor: '#D4AF37' }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 text-gray-600 font-medium"
                    >
                        Loading...
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
