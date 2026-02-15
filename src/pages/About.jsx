import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Animation variants matching Home page
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

export default function About() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section - Matching HeroCarousel style */}
            <section className="relative h-screen overflow-hidden pt-20 md:pt-24">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 w-full h-full scale-110"
                        style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1920&q=80)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                </div>

                {/* Multi-layer Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/60 via-teal-900/50 to-emerald-900/60" />

                {/* Animated Gradient Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px]"
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
                                className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 rounded-full text-emerald-100 text-sm font-medium mb-8"
                            >
                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                Our Story
                            </motion.div>

                            {/* Title */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Bridging Sri Lankan
                                <span className="block text-emerald-300">Herbal Heritage</span>
                                <span className="block text-teal-300">with Global Wellness</span>
                            </h1>

                            {/* Decorative Line */}
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <div className="w-16 h-1 bg-gradient-to-r from-transparent to-emerald-400 rounded-full" />
                                <div className="w-3 h-3 bg-amber-400 rounded-full" />
                                <div className="w-16 h-1 bg-gradient-to-l from-transparent to-emerald-400 rounded-full" />
                            </div>

                            {/* Subtitle */}
                            <p className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-3xl mx-auto">
                                A trusted name in Sri Lankan herbal exports, bringing authentic Ayurvedic excellence to the world
                            </p>

                            {/* Feature Pills */}
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    { icon: '🌿', text: 'Since 2020' },
                                    { icon: '🏆', text: 'GMP Certified' },
                                    { icon: '🌍', text: '50+ Countries' }
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
                            className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
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

            {/* Our Story Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-amber-200/20 to-yellow-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

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
                            <span className="text-lg">📖</span>
                            Our Journey
                        </motion.span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                                Our Story
                            </span>
                        </h2>

                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-emerald-400 rounded-full" />
                            <div className="w-3 h-3 bg-amber-400 rounded-full" />
                            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-emerald-400 rounded-full" />
                        </div>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Story Content */}
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
                                    <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                                        <p>
                                            <span className="font-semibold text-emerald-700">Bees Line Exports (Pvt) Ltd</span> was founded with a clear purpose: to bring the finest Sri Lankan herbal and Ayurvedic products to the global market.
                                        </p>
                                        <p>
                                            Drawing from a rich tradition of natural wellness spanning thousands of years, we've built a company that honors <span className="text-teal-600 font-medium">ancient wisdom</span> while embracing <span className="text-amber-600 font-medium">modern quality standards</span>.
                                        </p>
                                        <p>
                                            Sri Lanka has been known for centuries as a treasure trove of medicinal herbs and spices. Our founders recognized the untapped potential of these natural remedies in serving global wellness needs.
                                        </p>
                                        <p>
                                            Today, we work with GMP-certified manufacturers, maintain strict quality controls, and ensure every product we export meets international standards. Our commitment remains unchanged: deliver nature's best with integrity, consistency, and excellence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right - Image Card */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-100px' }}
                            variants={fadeInRight}
                        >
                            <div className="relative">
                                {/* Card Glow */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-amber-400/20 rounded-3xl blur-2xl" />

                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="relative bg-white rounded-3xl shadow-xl border border-emerald-100 overflow-hidden p-8"
                                >
                                    <div className="aspect-square bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl overflow-hidden">
                                        <img
                                            src="/assets/images/products/garcinia.png"
                                            alt="Sri Lankan Herbs"
                                            className="w-full h-full object-contain p-8"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
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
                            <span className="text-lg">🎯</span>
                            Our Purpose
                        </motion.span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                                Mission & Vision
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
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-100px' }}
                            variants={scaleIn}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Card Glow */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                            <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg"
                                >
                                    <span className="text-4xl">🎯</span>
                                </motion.div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    To export premium Sri Lankan herbal and Ayurvedic products to global markets while maintaining the highest standards of quality, authenticity, and ethical business practices.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We aim to be the most trusted partner for international distributors seeking genuine, GMP-certified herbal products from Sri Lanka.
                                </p>

                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-100px' }}
                            variants={scaleIn}
                            transition={{ delay: 0.15 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Card Glow */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                            <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg border border-amber-100 overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500 to-yellow-500 opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mb-6 shadow-lg"
                                >
                                    <span className="text-4xl">🌟</span>
                                </motion.div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    To establish Sri Lankan herbal products as a globally recognized category of premium wellness solutions, making authentic Ayurvedic remedies accessible to people worldwide.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We envision a future where natural wellness is the first choice for health-conscious consumers across continents.
                                </p>

                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
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
                            Our Principles
                        </motion.span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                Core Values
                            </span>
                        </h2>

                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full" />
                        </div>

                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    {/* Values Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {[
                            {
                                icon: '⭐',
                                title: 'Quality First',
                                desc: 'We never compromise on product quality. Every item is sourced from GMP-certified manufacturers and undergoes rigorous testing before export.',
                                color: 'emerald'
                            },
                            {
                                icon: '🤝',
                                title: 'Trust & Transparency',
                                desc: 'Honesty in all dealings, clear communication, and building long-term relationships based on mutual respect and reliability.',
                                color: 'teal'
                            },
                            {
                                icon: '🌿',
                                title: 'Authenticity',
                                desc: 'Preserving traditional formulations while ensuring products meet modern safety and efficacy standards. No shortcuts, no substitutes.',
                                color: 'emerald'
                            },
                            {
                                icon: '🌍',
                                title: 'Global Responsibility',
                                desc: 'Ethical sourcing, sustainable practices, and contributing to the wellness of communities worldwide.',
                                color: 'blue'
                            },
                            {
                                icon: '💡',
                                title: 'Innovation',
                                desc: 'Continuously improving our processes, packaging, and service to meet evolving market needs while respecting tradition.',
                                color: 'amber'
                            },
                            {
                                icon: '🎓',
                                title: 'Customer Success',
                                desc: 'Your success is our success. We provide the support, quality, and consistency you need to grow your business.',
                                color: 'teal'
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

            {/* Why Work With Us */}
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
                            <span className="text-lg">📊</span>
                            Our Track Record
                        </motion.span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                                Why Work With Us
                            </span>
                        </h2>

                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-8 h-1 bg-emerald-300 rounded-full" />
                            <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
                            <div className="w-8 h-1 bg-emerald-300 rounded-full" />
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            { number: '100%', label: 'GMP Certified Products', color: 'emerald', gradient: 'from-emerald-500 to-teal-500' },
                            { number: '50+', label: 'Countries Served', color: 'teal', gradient: 'from-teal-500 to-cyan-500' },
                            { number: '500+', label: 'Premium Products', color: 'amber', gradient: 'from-amber-500 to-yellow-500' },
                            { number: '24/7', label: 'Partner Support', color: 'emerald', gradient: 'from-emerald-500 to-teal-500' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={scaleIn}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="group relative"
                            >
                                {/* Card Glow */}
                                <div className={`absolute -inset-2 bg-gradient-to-r ${stat.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                                <div className={`relative h-full bg-white rounded-2xl p-8 text-center shadow-lg border border-${stat.color}-100 overflow-hidden transition-all duration-300 group-hover:shadow-2xl`}>
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-[0.03]">
                                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                            <pattern id={`pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                                <circle cx="10" cy="10" r="1" fill="#10B981" />
                                            </pattern>
                                            <rect width="100" height="100" fill={`url(#pattern-${index})`} />
                                        </svg>
                                    </div>

                                    <div className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                                        {stat.number}
                                    </div>
                                    <p className="text-gray-700 font-medium">{stat.label}</p>

                                    {/* Bottom Accent */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section - Matching Home page style */}
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
                            Start Your Partnership
                        </motion.span>

                        {/* Title */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Ready to Bring Premium
                            <span className="block text-amber-300">Herbal Products</span>
                            <span className="block">to Your Market?</span>
                        </h2>

                        {/* Decorative Line */}
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-white/50 rounded-full" />
                            <div className="w-3 h-3 bg-amber-400 rounded-full" />
                            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-white/50 rounded-full" />
                        </div>

                        {/* Description */}
                        <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join our growing network of international distributors and experience the quality and support that makes Bees Line Exports a trusted partner worldwide.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/partners">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-700 font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                                >
                                    <span>Become a Partner</span>
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        🤝
                                    </motion.span>
                                </motion.button>
                            </Link>

                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-amber-400 text-amber-900 font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:bg-amber-300 transition-all duration-300"
                                >
                                    <span>Contact Us</span>
                                    <motion.span
                                        animate={{ y: [0, -3, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        💬
                                    </motion.span>
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
