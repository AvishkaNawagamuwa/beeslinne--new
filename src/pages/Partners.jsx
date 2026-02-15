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

export default function Partners() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section - Matching HeroCarousel style */}
            <section className="relative h-screen overflow-hidden pt-20 md:pt-24">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 w-full h-full scale-110"
                        style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                </div>

                {/* Multi-layer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/60 via-emerald-900/50 to-teal-900/60" />

                {/* Animated Gradient Orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px]"
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
                                className="inline-flex items-center gap-2 px-5 py-2 bg-teal-500/20 backdrop-blur-xl border border-teal-400/30 rounded-full text-teal-100 text-sm font-medium mb-8"
                            >
                                <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                                Global Partnership Opportunities
                            </motion.div>

                            {/* Title */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Partner
                                <span className="block text-teal-300">With Us</span>
                            </h1>

                            {/* Decorative Line */}
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <div className="w-16 h-1 bg-gradient-to-r from-transparent to-teal-400 rounded-full" />
                                <div className="w-3 h-3 bg-amber-400 rounded-full" />
                                <div className="w-16 h-1 bg-gradient-to-l from-transparent to-teal-400 rounded-full" />
                            </div>

                            {/* Subtitle */}
                            <p className="text-xl md:text-2xl text-teal-100 mb-10 max-w-3xl mx-auto">
                                Join our growing network of international distributors
                            </p>

                            {/* Feature Pills */}
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    { icon: '🌍', text: 'Global Reach' },
                                    { icon: '📈', text: 'Growth Potential' },
                                    { icon: '🤝', text: 'Full Support' }
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
                            className="w-1.5 h-1.5 bg-teal-400 rounded-full"
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

            {/* Why Partner Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-emerald-50" />
                
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-emerald-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-amber-200/20 to-yellow-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

                <div className="container mx-auto px-4 relative z-10">
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
                            className="inline-flex items-center gap-2 px-5 py-2 bg-teal-100 border border-teal-200 rounded-full text-teal-700 text-sm font-medium mb-6"
                        >
                            <span className="text-lg">💼</span>
                            Partnership Benefits
                        </motion.span>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-teal-700 via-emerald-600 to-teal-700 bg-clip-text text-transparent">
                                Why Partner With Us
                            </span>
                        </h2>
                        
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-teal-400 rounded-full" />
                            <div className="w-3 h-3 bg-amber-400 rounded-full" />
                            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-teal-400 rounded-full" />
                        </div>
                        
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Build a profitable business with premium Sri Lankan herbal products
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                icon: '💰',
                                title: 'Competitive Margins',
                                desc: 'Direct export pricing gives you strong profit margins while maintaining premium quality products.'
                            },
                            {
                                icon: '📦',
                                title: 'Reliable Supply',
                                desc: 'Consistent product availability and timely delivery to keep your business running smoothly.'
                            },
                            {
                                icon: '🎯',
                                title: 'Exclusive Products',
                                desc: 'Access to authentic Sri Lankan herbal products that stand out in your market.'
                            },
                            {
                                icon: '🤝',
                                title: 'Dedicated Support',
                                desc: 'Personal account manager and ongoing support to help grow your business.'
                            },
                            {
                                icon: '📋',
                                title: 'Complete Documentation',
                                desc: 'All export papers, certificates, and compliance documents handled professionally.'
                            },
                            {
                                icon: '🌟',
                                title: 'Quality Assurance',
                                desc: 'GMP-certified products that meet international standards and customer expectations.'
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-100 relative overflow-hidden"
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                
                                <div className="relative z-10">
                                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Partnership Process */}
            <section className="relative py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50/50 to-white" />
                
                {/* Decorative Blobs */}
                <div className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-br from-amber-200/40 to-yellow-200/40 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-tl from-teal-200/30 to-emerald-200/30 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
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
                            <span className="text-lg">🚀</span>
                            Getting Started
                        </motion.span>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                                How to Become a Partner
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
                            Simple steps to start your herbal export business
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            {
                                step: '01',
                                title: 'Submit Inquiry',
                                desc: 'Fill out our partnership form or contact us directly',
                                icon: '📝'
                            },
                            {
                                step: '02',
                                title: 'Initial Discussion',
                                desc: 'We discuss your market, needs, and business goals',
                                icon: '💬'
                            },
                            {
                                step: '03',
                                title: 'Sample & Terms',
                                desc: 'Review product samples and business terms',
                                icon: '📋'
                            },
                            {
                                step: '04',
                                title: 'Start Trading',
                                desc: 'Begin your journey with ongoing support',
                                icon: '✅'
                            }
                        ].map((process, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="bg-white rounded-2xl p-6 text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-300 shadow-lg border border-amber-100"
                            >
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                                    {process.step}
                                </div>
                                
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                
                                <div className="text-4xl mb-4 mt-8 transform group-hover:scale-110 transition-transform">
                                    {process.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                                <p className="text-gray-600 text-sm">{process.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <Link
                            to="/request-export"
                            className="inline-block px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Start Your Partnership
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Who We're Looking For */}
            <section className="relative py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-200/30 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-teal-200/20 to-transparent rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-100 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6"
                            >
                                <span className="text-lg">🔍</span>
                                Ideal Partners
                            </motion.span>
                            
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                                    Who We're Looking For
                                </span>
                            </h2>
                            
                            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                                <p>
                                    We're seeking committed partners who are passionate about natural health and wellness. Whether you're an established distributor or starting a new venture, we want to hear from you.
                                </p>
                                <p>
                                    Ideal partners have knowledge of their local market, existing distribution channels, and a genuine interest in promoting premium herbal products.
                                </p>
                            </div>

                            <ul className="space-y-3">
                                {[
                                    'Herbal product distributors',
                                    'Health & wellness retailers',
                                    'E-commerce businesses',
                                    'Pharmacy & supplement chains',
                                    'Import/export companies'
                                ].map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-3 text-gray-700"
                                    >
                                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {[
                                { icon: '🌍', title: 'Global', subtitle: 'Reach' },
                                { icon: '📊', title: 'Proven', subtitle: 'Track Record' },
                                { icon: '💎', title: 'Premium', subtitle: 'Quality' },
                                { icon: '🔒', title: 'Certified', subtitle: 'Products' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                    className="bg-white rounded-2xl p-6 text-center shadow-xl border border-emerald-100 group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    
                                    <div className="relative z-10">
                                        <div className="text-4xl mb-3">{stat.icon}</div>
                                        <div className="text-xl font-bold text-emerald-700">{stat.title}</div>
                                        <div className="text-sm text-gray-600">{stat.subtitle}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700" />
                
                {/* Animated Orbs */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
                        transition={{ duration: 18, repeat: Infinity }}
                        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Start?
                        </h2>
                        <p className="text-xl text-emerald-100 mb-10">
                            Request a quotation today and discover the potential of partnering with a trusted herbal export company
                        </p>
                        <Link
                            to="/request-export"
                            className="inline-block px-10 py-4 bg-white text-emerald-700 font-semibold rounded-full hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Request Export Quotation
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
