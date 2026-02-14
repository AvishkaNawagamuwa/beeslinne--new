import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeHover, setActiveHover] = useState(null)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const navLinks = [
        { path: '/', label: 'Home', icon: '🏠' },
        { path: '/about', label: 'About Us', icon: '✨' },
        { path: '/products', label: 'Products', icon: '🍯' },
        { path: '/quality', label: 'Quality & Certifications', icon: '🏆' },
        { path: '/partners', label: 'Partners', icon: '🤝' },
        { path: '/contact', label: 'Contact', icon: '📧' }
    ]

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled 
                        ? 'py-2' 
                        : 'py-4'
                }`}
            >
                {/* Glassmorphism Background */}
                <div 
                    className={`absolute inset-0 transition-all duration-500 ${
                        scrolled 
                            ? 'bg-white  shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-b border-white/20' 
                            : 'bg-white'
                    }`}
                />
                
                {/* Gradient Line Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

                <nav className="container mx-auto px-4 lg:px-8 relative">
                    <div className="flex items-center justify-between">
                        {/* Logo with Premium Styling */}
                        <Link to="/" className="flex items-center group relative">
                            {/* Logo Glow Effect */}
                            <div className="absolute -inset-3 bg-gradient-to-r from-amber-200/20 via-yellow-200/20 to-amber-200/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative"
                            >
                                <img
                                    src="/assets/images/logo1.png"
                                    alt="Bees Line Exports Logo"
                                    className={`w-auto object-contain transition-all duration-300 ${
                                        scrolled ? 'h-12' : 'h-16'
                                    }`}
                                    style={{ mixBlendMode: 'multiply' }}
                                />
                            </motion.div>
                            
                            {/* Brand Text - Visible on larger screens */}
                            <div className="hidden xl:flex flex-col ml-3 border-l-2 border-amber-300/30 pl-3">
                                <span className="text-lg font-bold bg-gradient-to-r from-amber-700 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                                    Bees Line
                                </span>
                                <span className="text-xs text-amber-600/70 font-medium tracking-widest uppercase">
                                    Premium Exports
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <ul className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link, index) => (
                                <motion.li 
                                    key={link.path}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onMouseEnter={() => setActiveHover(link.path)}
                                    onMouseLeave={() => setActiveHover(null)}
                                >
                                    <Link
                                        to={link.path}
                                        className="relative px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 block group"
                                    >
                                        {/* Background Glow */}
                                        <span className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                                            location.pathname === link.path
                                                ? 'bg-gradient-to-r from-amber-100 to-yellow-50 shadow-[0_2px_12px_rgba(245,158,11,0.15)]'
                                                : activeHover === link.path
                                                    ? 'bg-amber-50/80'
                                                    : 'bg-transparent'
                                        }`} />
                                        
                                        {/* Active Indicator */}
                                        {location.pathname === link.path && (
                                            <motion.span
                                                layoutId="activeIndicator"
                                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        
                                        {/* Text */}
                                        <span className={`relative z-10 transition-all duration-300 ${
                                            location.pathname === link.path
                                                ? 'text-amber-700 font-semibold'
                                                : 'text-gray-600 group-hover:text-amber-600'
                                        }`}>
                                            {link.label}
                                        </span>
                                    </Link>
                                </motion.li>
                            ))}
                            
                            {/* CTA Button */}
                            <motion.li
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 }}
                                className="ml-4"
                            >
                                <Link
                                    to="/request-export"
                                    className="relative group"
                                >
                                    {/* Button Glow */}
                                    <span className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition-all duration-300 group-hover:scale-105" />
                                    
                                    {/* Button */}
                                    <span className="relative flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-white font-semibold text-sm rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 hover:scale-[1.02]">
                                        <span>Request Export</span>
                                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </Link>
                            </motion.li>
                        </ul>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200/50 shadow-lg shadow-amber-500/10"
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between items-center">
                                <motion.span
                                    animate={{
                                        rotate: isOpen ? 45 : 0,
                                        y: isOpen ? 8 : 0,
                                        width: isOpen ? 24 : 24
                                    }}
                                    className="w-6 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full origin-center"
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    animate={{
                                        opacity: isOpen ? 0 : 1,
                                        scale: isOpen ? 0 : 1
                                    }}
                                    className="w-4 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
                                    transition={{ duration: 0.2 }}
                                />
                                <motion.span
                                    animate={{
                                        rotate: isOpen ? -45 : 0,
                                        y: isOpen ? -8 : 0,
                                        width: isOpen ? 24 : 20
                                    }}
                                    className="w-5 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full origin-center"
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.button>
                    </div>
                </nav>
            </header>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        
                        {/* Mobile Menu Panel */}
                        <motion.div
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '100%', opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-br from-white via-amber-50/30 to-yellow-50/50 z-50 lg:hidden shadow-2xl shadow-black/20"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-yellow-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-200/20 to-yellow-200/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
                            
                            <div className="relative h-full flex flex-col p-6 pt-24">
                                {/* Close Button */}
                                <motion.button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg border border-amber-100"
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </motion.button>

                                {/* Logo in Mobile Menu */}
                                <div className="mb-8 pb-6 border-b border-amber-200/50">
                                    <img
                                        src="/assets/images/logo1.png"
                                        alt="Bees Line Exports"
                                        className="h-14 w-auto object-contain"
                                        style={{ mixBlendMode: 'multiply' }}
                                    />
                                </div>

                                {/* Navigation Links */}
                                <ul className="flex-1 space-y-2 overflow-y-auto">
                                    {navLinks.map((link, index) => (
                                        <motion.li
                                            key={link.path}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.08 }}
                                        >
                                            <Link
                                                to={link.path}
                                                className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl font-medium transition-all duration-300 group ${
                                                    location.pathname === link.path
                                                        ? 'bg-gradient-to-r from-amber-100 to-yellow-50 text-amber-700 shadow-lg shadow-amber-500/10'
                                                        : 'text-gray-600 hover:bg-amber-50/80 hover:text-amber-600'
                                                }`}
                                            >
                                                <span className={`w-10 h-10 flex items-center justify-center rounded-xl text-lg ${
                                                    location.pathname === link.path
                                                        ? 'bg-gradient-to-br from-amber-400 to-yellow-400 shadow-lg'
                                                        : 'bg-white shadow-md group-hover:shadow-lg'
                                                }`}>
                                                    {link.icon}
                                                </span>
                                                <span className="flex-1">{link.label}</span>
                                                {location.pathname === link.path && (
                                                    <span className="w-2 h-2 bg-amber-400 rounded-full" />
                                                )}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* CTA Button in Mobile */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-6 pt-6 border-t border-amber-200/50"
                                >
                                    <Link
                                        to="/request-export"
                                        className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-white font-semibold rounded-2xl shadow-xl shadow-amber-500/30"
                                    >
                                        <span>Request Export</span>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                    
                                    {/* Contact Info */}
                                    <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
                                        <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                                            <span className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow">📞</span>
                                        </a>
                                        <a href="mailto:info@beesline.com" className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                                            <span className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow">✉️</span>
                                        </a>
                                        <a href="#" className="flex items-center gap-2 hover:text-amber-600 transition-colors">
                                            <span className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow">💬</span>
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}