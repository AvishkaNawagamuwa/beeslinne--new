import { motion } from 'framer-motion'
import Hero from '../components/Hero'

export default function About() {
    return (
        <div className="pt-16">
            <Hero
                title="About Us"
                subtitle="Bridging Sri Lankan Herbal Heritage with Global Wellness Markets"
                bgImage="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1920&q=80"
            />

            {/* Our Story Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">Our Story</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-gray-700 leading-relaxed text-lg"
                        >
                            <p>
                                Bees Line Exports (Pvt) Ltd was founded with a clear purpose: to bring the finest Sri Lankan herbal and Ayurvedic products to the global market. Drawing from a rich tradition of natural wellness spanning thousands of years, we've built a company that honors ancient wisdom while embracing modern quality standards.
                            </p>
                            <p>
                                Sri Lanka has been known for centuries as a treasure trove of medicinal herbs and spices. Our founders recognized the untapped potential of these natural remedies in serving global wellness needs. What began as a passion for authentic Ayurvedic products has evolved into a professional export company trusted by distributors worldwide.
                            </p>
                            <p>
                                Today, we work with GMP-certified manufacturers, maintain strict quality controls, and ensure every product we export meets international standards. Our commitment remains unchanged: deliver nature's best with integrity, consistency, and excellence.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square bg-beige rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="/assets/images/products/garcinia.png"
                                    alt="Sri Lankan Herbs"
                                    className="w-full h-full object-contain p-8"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-beige/30">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                To export premium Sri Lankan herbal and Ayurvedic products to global markets while maintaining the highest standards of quality, authenticity, and ethical business practices.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                We aim to be the most trusted partner for international distributors seeking genuine, GMP-certified herbal products from Sri Lanka.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                        >
                            <div className="text-4xl mb-4">🌟</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                To establish Sri Lankan herbal products as a globally recognized category of premium wellness solutions, making authentic Ayurvedic remedies accessible to people worldwide.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                We envision a future where natural wellness is the first choice for health-conscious consumers across continents.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">Our Core Values</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
                        <p className="section-subtitle">The principles that guide everything we do</p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '⭐',
                                title: 'Quality First',
                                desc: 'We never compromise on product quality. Every item is sourced from GMP-certified manufacturers and undergoes rigorous testing before export.'
                            },
                            {
                                icon: '🤝',
                                title: 'Trust & Transparency',
                                desc: 'Honesty in all dealings, clear communication, and building long-term relationships based on mutual respect and reliability.'
                            },
                            {
                                icon: '🌿',
                                title: 'Authenticity',
                                desc: 'Preserving traditional formulations while ensuring products meet modern safety and efficacy standards. No shortcuts, no substitutes.'
                            },
                            {
                                icon: '🌍',
                                title: 'Global Responsibility',
                                desc: 'Ethical sourcing, sustainable practices, and contributing to the wellness of communities worldwide.'
                            },
                            {
                                icon: '💡',
                                title: 'Innovation',
                                desc: 'Continuously improving our processes, packaging, and service to meet evolving market needs while respecting tradition.'
                            },
                            {
                                icon: '🎓',
                                title: 'Customer Success',
                                desc: 'Your success is our success. We provide the support, quality, and consistency you need to grow your business.'
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-beige/30 rounded-xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-20 bg-beige/30">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">Why Work With Us</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { number: '100%', label: 'GMP Certified Products' },
                            { number: '20+', label: 'Countries Served' },
                            { number: '7+', label: 'Premium Products' },
                            { number: '24/7', label: 'Partner Support' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl p-8 text-center shadow-md"
                            >
                                <div className="text-4xl font-bold text-gold mb-2">{stat.number}</div>
                                <p className="text-gray-700 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
