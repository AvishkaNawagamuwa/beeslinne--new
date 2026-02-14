import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import FeaturedProductsCarousel from '../components/FeaturedProductsCarousel'
import CertificationCarousel from '../components/CertificationCarousel'
import ScrollToTopButton from '../components/ScrollToTopButton'

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: 'easeOut' }
    }
}

const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: 'easeOut' }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1
        }
    }
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
}

export default function Home() {
    return (
        <div className="overflow-hidden">
            {/* Hero Carousel */}
            <HeroCarousel />

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

            {/* Who We Are Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
                
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-amber-200/20 to-yellow-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
                
                {/* Botanical Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 Q45 25 40 40 Q35 25 40 10' fill='%2310B981' /%3E%3Cpath d='M40 40 Q45 55 40 70 Q35 55 40 40' fill='%2310B981' /%3E%3Ccircle cx='40' cy='40' r='5' fill='none' stroke='%2310B981' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '80px 80px'
                }} />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="text-center mb-20"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-100 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6"
                        >
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            Trusted Since 2020
                        </motion.span>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                                Who We Are
                            </span>
                        </h2>
                        
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-emerald-400 rounded-full" />
                            <div className="w-3 h-3 bg-amber-400 rounded-full" />
                            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-emerald-400 rounded-full" />
                        </div>
                        
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            A trusted name in Sri Lankan herbal exports, bringing nature's finest wellness solutions to the world
                        </p>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        {/* Left - Company Story */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-100px' }}
                            variants={fadeInLeft}
                            className="space-y-8"
                        >
                            <div className="relative">
                                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-teal-400 to-amber-400 rounded-full" />
                                
                                <div className="pl-8">
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                        Building Trust Through
                                        <span className="block text-emerald-600">Herbal Excellence</span>
                                    </h3>
                                    
                                    <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                                        <p>
                                            <span className="font-semibold text-emerald-700">Bees Line Exports (Pvt) Ltd</span> is a registered and professionally managed herbal export company rooted in Sri Lanka's rich Ayurvedic tradition.
                                        </p>
                                        <p>
                                            We combine <span className="text-teal-600 font-medium">ancient wellness wisdom</span> with <span className="text-amber-600 font-medium">modern manufacturing standards</span> to deliver premium herbal products to the global market.
                                        </p>
                                        <p>
                                            Every product we export is manufactured under GMP-certified facilities and meets rigorous international standards.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4 pt-6">
                                {[
                                    { value: '500+', label: 'Products', color: 'emerald' },
                                    { value: '50+', label: 'Countries', color: 'teal' },
                                    { value: '100%', label: 'Natural', color: 'amber' }
                                ].map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className={`text-center p-4 rounded-2xl bg-gradient-to-br ${
                                            stat.color === 'emerald' ? 'from-emerald-50 to-emerald-100/50 border-emerald-200' :
                                            stat.color === 'teal' ? 'from-teal-50 to-teal-100/50 border-teal-200' :
                                            'from-amber-50 to-amber-100/50 border-amber-200'
                                        } border`}
                                    >
                                        <div className={`text-2xl md:text-3xl font-bold ${
                                            stat.color === 'emerald' ? 'text-emerald-600' :
                                            stat.color === 'teal' ? 'text-teal-600' :
                                            'text-amber-600'
                                        }`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right - Registration Card */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-100px' }}
                            variants={fadeInRight}
                        >
                            <div className="relative">
                                {/* Card Glow */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-amber-400/20 rounded-3xl blur-2xl" />
                                
                                {/* Main Card */}
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="relative bg-white rounded-3xl shadow-xl border border-emerald-100 overflow-hidden"
                                >
                                    {/* Card Header */}
                                    <div className="relative px-8 py-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 overflow-hidden">
                                        {/* Pattern */}
                                        <div className="absolute inset-0 opacity-10">
                                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                <pattern id="leafPattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                                                    <path d="M12.5 2 Q15 10 12.5 18 Q10 10 12.5 2" fill="white" />
                                                </pattern>
                                                <rect width="100" height="100" fill="url(#leafPattern)" />
                                            </svg>
                                        </div>
                                        
                                        <div className="relative flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">Verified Company</h3>
                                                <p className="text-emerald-100 text-sm">Registered in Sri Lanka</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-8">
                                        <div className="space-y-6">
                                            {[
                                                { label: 'Company Name', value: 'BEES LINE EXPORTS (PVT) LTD', highlight: false },
                                                { label: 'Registration Number', value: 'PV 002310335', highlight: true },
                                                { label: 'Incorporated', value: '30 November 2020', highlight: false },
                                                { label: 'Company Type', value: 'Private Limited Company', highlight: false }
                                            ].map((item, idx) => (
                                                <div key={idx} className="group">
                                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                                                        {item.label}
                                                    </p>
                                                    <p className={`text-lg font-semibold ${
                                                        item.highlight ? 'text-emerald-600' : 'text-gray-900'
                                                    }`}>
                                                        {item.value}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Download Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full mt-8 px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-3"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            View Registration Certificate
                                        </motion.button>
                                    </div>

                                    {/* Trust Badge */}
                                    <div className="px-8 pb-6">
                                        <div className="flex items-center justify-center gap-2 py-3 bg-emerald-50 rounded-xl border border-emerald-100">
                                            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-emerald-700 font-medium text-sm">Government Verified Entity</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Value Proposition Cards */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                icon: '🌿',
                                title: 'Herbal Expertise',
                                desc: "Rooted in Sri Lanka's centuries-old Ayurvedic tradition, combining ancient wellness knowledge with cutting-edge manufacturing.",
                                color: 'emerald',
                                gradient: 'from-emerald-500 to-teal-500'
                            },
                            {
                                icon: '🏆',
                                title: 'Certified Quality',
                                desc: 'GMP-certified manufacturing and international compliance standards ensure every product meets global safety requirements.',
                                color: 'amber',
                                gradient: 'from-amber-500 to-yellow-500'
                            },
                            {
                                icon: '🌍',
                                title: 'Global Partnerships',
                                desc: 'Building lasting relationships with international distributors, offering competitive pricing and reliable supply chains.',
                                color: 'teal',
                                gradient: 'from-teal-500 to-cyan-500'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={scaleIn}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative"
                            >
                                {/* Card Glow */}
                                <div className={`absolute -inset-2 bg-gradient-to-r ${item.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                                
                                <div className={`relative h-full bg-white rounded-2xl p-8 shadow-lg border border-${item.color}-100 overflow-hidden transition-all duration-300 group-hover:shadow-2xl`}>
                                    {/* Decorative Corner */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />
                                    
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, 0] }}
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} bg-opacity-10 flex items-center justify-center mb-6 shadow-lg`}
                                    >
                                        <span className="text-4xl">{item.icon}</span>
                                    </motion.div>
                                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                    
                                    {/* Bottom Accent */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50/50 to-white" />
                
                {/* Decorative Blobs */}
                <div className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-br from-amber-200/40 to-yellow-200/40 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-5 py-2 bg-amber-100 border border-amber-200 rounded-full text-amber-700 text-sm font-medium mb-6"
                        >
                            <span className="text-lg">✨</span>
                            Premium Selection
                        </motion.span>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                                Featured Products
                            </span>
                        </h2>
                        
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-amber-400 rounded-full" />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="w-4 h-4 border-2 border-amber-400 rounded-full border-t-transparent"
                            />
                            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-amber-400 rounded-full" />
                        </div>
                        
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Experience the best of Sri Lankan herbal wellness, crafted with nature's purest ingredients
                        </p>
                    </motion.div>

                    {/* Products Carousel */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="mb-12"
                    >
                        <FeaturedProductsCarousel />
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="text-center"
                    >
                        <Link to="/products">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.98 }}
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold rounded-2xl shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300"
                            >
                                <span>View All Products</span>
                                <motion.svg
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </motion.svg>
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-teal-50/30 to-emerald-50/50" />
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(to right, #10B981 1px, transparent 1px), linear-gradient(to bottom, #10B981 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }} />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-5 py-2 bg-teal-100 border border-teal-200 rounded-full text-teal-700 text-sm font-medium mb-6"
                        >
                            <span className="text-lg">💎</span>
                            Our Advantages
                        </motion.span>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                Why Choose Us
                            </span>
                        </h2>
                        
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full" />
                        </div>
                    </motion.div>

                    {/* Features Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {[
                            { 
                                icon: '🎯', 
                                title: 'Authentic Products', 
                                desc: 'Sourced directly from Sri Lankan farms, ensuring genuine quality and traditional formulations.',
                                color: 'emerald'
                            },
                            { 
                                icon: '📦', 
                                title: 'Reliable Supply', 
                                desc: 'Consistent product availability with efficient logistics and timely international delivery.',
                                color: 'teal'
                            },
                            { 
                                icon: '💰', 
                                title: 'Competitive Pricing', 
                                desc: 'Direct export prices that give you strong margins while maintaining premium quality.',
                                color: 'amber'
                            },
                            { 
                                icon: '📜', 
                                title: 'Full Documentation', 
                                desc: 'All necessary export papers, certificates, and compliance documents provided.',
                                color: 'blue'
                            },
                            { 
                                icon: '🔬', 
                                title: 'Lab Tested', 
                                desc: 'Every batch undergoes rigorous quality testing to ensure safety and effectiveness.',
                                color: 'purple'
                            },
                            { 
                                icon: '🌟', 
                                title: 'Dedicated Support', 
                                desc: 'Account management and technical support for all our distribution partners.',
                                color: 'rose'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={scaleIn}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative"
                            >
                                <div className={`h-full bg-white rounded-2xl p-6 shadow-lg border border-${item.color}-100 hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                                    {/* Gradient Overlay on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                    
                                    {/* Content */}
                                    <div className="relative z-10">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                                            className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${item.color}-100 to-${item.color}-50 flex items-center justify-center mb-5 shadow-md`}
                                        >
                                            <span className="text-3xl">{item.icon}</span>
                                        </motion.div>
                                        
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                    
                                    {/* Corner Decoration */}
                                    <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-${item.color}-100 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500`} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Quality & Certifications Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-200/30 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-200/20 to-transparent rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-100 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6"
                        >
                            <span className="text-lg">🏅</span>
                            Internationally Certified
                        </motion.span>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                                Quality & Certifications
                            </span>
                        </h2>
                        
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-8 h-1 bg-emerald-300 rounded-full" />
                            <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
                            <div className="w-8 h-1 bg-emerald-300 rounded-full" />
                        </div>
                        
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            International standards ensuring premium quality and safety in every product
                        </p>
                    </motion.div>

                    {/* Certifications Carousel */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="mb-12"
                    >
                        <CertificationCarousel />
                    </motion.div>

                    {/* View All Button */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <Link to="/quality">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-emerald-200 text-emerald-700 font-semibold rounded-2xl shadow-lg hover:border-emerald-400 hover:shadow-xl transition-all duration-300"
                            >
                                <span>View All Certifications</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Quality Commitment Card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                    >
                        <div className="relative">
                            {/* Card Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-amber-400/20 rounded-3xl blur-2xl" />
                            
                            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-emerald-100 overflow-hidden">
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-[0.02]">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <pattern id="qualityPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <circle cx="10" cy="10" r="1" fill="#10B981" />
                                        </pattern>
                                        <rect width="100" height="100" fill="url(#qualityPattern)" />
                                    </svg>
                                </div>
                                
                                {/* Header */}
                                <div className="text-center mb-10">
                                    <motion.div
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl mb-4 shadow-lg"
                                    >
                                        <span className="text-3xl">🛡️</span>
                                    </motion.div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Quality Commitment</h3>
                                </div>
                                
                                {/* Quality Points Grid */}
                                <motion.div
                                    variants={staggerContainer}
                                    className="grid md:grid-cols-2 gap-6"
                                >
                                    {[
                                        { 
                                            title: 'GMP-Aligned Processes', 
                                            desc: 'All manufacturing follows Good Manufacturing Practice standards for consistent quality.',
                                            icon: '⚙️',
                                            color: 'emerald'
                                        },
                                        { 
                                            title: 'HACCP Food Safety', 
                                            desc: 'Hazard Analysis and Critical Control Points system ensures safety at every stage.',
                                            icon: '🔒',
                                            color: 'teal'
                                        },
                                        { 
                                            title: 'Laboratory Testing', 
                                            desc: 'Rigorous testing for purity, potency, and quality before export.',
                                            icon: '🔬',
                                            color: 'blue'
                                        },
                                        { 
                                            title: 'Traceable Sourcing', 
                                            desc: 'Complete supply chain transparency with export-ready packaging.',
                                            icon: '📍',
                                            color: 'amber'
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            variants={scaleIn}
                                            whileHover={{ x: 5 }}
                                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-50/50 transition-colors duration-300"
                                        >
                                            <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-${item.color}-100 to-${item.color}-50 flex items-center justify-center shadow-md`}>
                                                <span className="text-2xl">{item.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Partnership CTA Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700" />
                
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-white/10 text-4xl"
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.05, 0.15, 0.05],
                                rotate: [0, 10, 0]
                            }}
                            transition={{
                                duration: 5 + Math.random() * 5,
                                repeat: Infinity,
                                delay: Math.random() * 5
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }}
                        >
                            🌿
                        </motion.div>
                    ))}
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 via-transparent to-emerald-900/30" />
                
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 Q35 15 30 25 Q25 15 30 5' fill='white' /%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }} />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUp}
                        className="max-w-4xl mx-auto text-center"
                    >
                        {/* Badge */}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-white text-sm font-medium mb-8"
                        >
                            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                            Join Our Global Network
                        </motion.span>
                        
                        {/* Title */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Become a Distribution
                            <span className="block text-amber-300">Partner Today</span>
                        </h2>
                        
                        {/* Decorative Line */}
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-white/50 rounded-full" />
                            <div className="w-3 h-3 bg-amber-400 rounded-full" />
                            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-white/50 rounded-full" />
                        </div>
                        
                        {/* Description */}
                        <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join our growing network of international distributors and bring premium Sri Lankan herbal products to your market with full support and competitive pricing.
                        </p>
                        
                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/partners">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-700 font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                                >
                                    <span>Learn About Partnership</span>
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        🤝
                                    </motion.span>
                                </motion.button>
                            </Link>
                            
                            <Link to="/request-export">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-amber-400 text-amber-900 font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:bg-amber-300 transition-all duration-300"
                                >
                                    <span>Request Export Quote</span>
                                    <motion.span
                                        animate={{ y: [0, -3, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        📦
                                    </motion.span>
                                </motion.button>
                            </Link>
                        </div>
                        
                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 pt-10 border-t border-white/20"
                        >
                            <p className="text-emerald-200 text-sm mb-6">Trusted by distributors worldwide</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {['🇬🇧 UK', '🇺🇸 USA', '🇩🇪 Germany', '🇯🇵 Japan', '🇦🇺 Australia', '🇨🇦 Canada'].map((country, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{ scale: 1.1 }}
                                        className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-sm"
                                    >
                                        {country}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Scroll to Top Button */}
            <ScrollToTopButton />
        </div>
    )
}
