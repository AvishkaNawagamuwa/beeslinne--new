import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

export default function Partners() {
    return (
        <div className="pt-16">
            <Hero
                title="Partner With Us"
                subtitle="Join our growing network of international distributors"
                bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
            />

            {/* Why Partner Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">Why Partner With Us</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
                        <p className="section-subtitle">
                            Build a profitable business with premium Sri Lankan herbal products
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-beige/30 rounded-xl p-8 hover:shadow-xl transition-shadow"
                            >
                                <div className="text-5xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Process */}
            <section className="py-20 bg-beige/30">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">How to Become a Partner</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
                        <p className="section-subtitle">
                            Simple steps to start your herbal export business
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            {
                                step: '1',
                                title: 'Submit Inquiry',
                                desc: 'Fill out our partnership form or contact us directly'
                            },
                            {
                                step: '2',
                                title: 'Initial Discussion',
                                desc: 'We discuss your market, needs, and business goals'
                            },
                            {
                                step: '3',
                                title: 'Sample & Terms',
                                desc: 'Review product samples and business terms'
                            },
                            {
                                step: '4',
                                title: 'Start Trading',
                                desc: 'Begin your journey with ongoing support'
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-white rounded-xl p-6 text-center shadow-md relative"
                            >
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center font-bold text-xl">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link to="/request-export" className="btn-primary text-lg px-8 py-4">
                            Start Your Partnership
                        </Link>
                    </div>
                </div>
            </section>

            {/* Who We're Looking For */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">Ideal Partner Profile</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-beige/30 rounded-xl p-8"
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">We're Looking For:</h3>
                            <ul className="space-y-4">
                                {[
                                    'Health supplement distributors',
                                    'Wellness product retailers',
                                    'Pharmacy chains',
                                    'E-commerce platforms',
                                    'Natural product stores',
                                    'International importers'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-beige/30 rounded-xl p-8"
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">What We Offer:</h3>
                            <ul className="space-y-4">
                                {[
                                    'Competitive wholesale pricing',
                                    'Flexible order quantities',
                                    'Marketing support materials',
                                    'Product training resources',
                                    'Fast shipping worldwide',
                                    'Responsive customer service'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700 text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-gold/90 to-primary-400/90 text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Grow Your Business?
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
                            Join successful distributors worldwide who trust Bees Line Exports for premium herbal products
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/request-export"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-gold font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                            >
                                Request Partnership
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-gold transition-all"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
