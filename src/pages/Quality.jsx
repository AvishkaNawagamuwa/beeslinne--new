import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import CertificateCard from '../components/CertificateCard'
import CertificateModal from '../components/CertificateModal'
import { certificates, qualityCommitments } from '../data/certificates'

export default function Quality() {
    const [selectedCertificate, setSelectedCertificate] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCertificateClick = (certificate) => {
        setSelectedCertificate(certificate)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setTimeout(() => setSelectedCertificate(null), 300)
    }

    return (
        <div className="pt-16">
            <Hero
                title="Quality & Certifications"
                subtitle="Internationally aligned manufacturing and safety standards for export markets"
                bgImage="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&q=80"
            />

            {/* Certifications Grid Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">Our Certifications</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
                        <p className="section-subtitle">
                            Click any certificate to view full details
                        </p>
                    </motion.div>

                    {/* Certificates Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {certificates.map((certificate, index) => (
                            <motion.div
                                key={certificate.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <CertificateCard
                                    certificate={certificate}
                                    onClick={handleCertificateClick}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Commitment Section */}
            <section className="py-20 bg-beige/30">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">Our Quality Commitment</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
                        <p className="section-subtitle">
                            Comprehensive quality controls ensuring safe, effective products
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {qualityCommitments.map((commitment, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-5xl flex-shrink-0">{commitment.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {commitment.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {commitment.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Process */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">Our Quality Process</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
                        <p className="section-subtitle">
                            From sourcing to shipping, quality is our priority at every step
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                step: '01',
                                title: 'Sourcing',
                                desc: 'Carefully selected herbs from certified suppliers and ethical farms',
                                icon: '🌱'
                            },
                            {
                                step: '02',
                                title: 'Manufacturing',
                                desc: 'GMP-certified facilities with strict quality controls',
                                icon: '🏭'
                            },
                            {
                                step: '03',
                                title: 'Testing',
                                desc: 'Comprehensive lab testing for purity, potency, and safety',
                                icon: '🔬'
                            },
                            {
                                step: '04',
                                title: 'Packaging',
                                desc: 'Sealed and labeled according to international standards',
                                icon: '📦'
                            }
                        ].map((process, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-beige/30 rounded-xl p-6 text-center relative overflow-hidden group hover:shadow-lg transition-shadow"
                            >
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                                    {process.step}
                                </div>
                                <div className="text-4xl mb-4 mt-6 transform group-hover:scale-110 transition-transform">
                                    {process.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                                <p className="text-gray-600 text-sm">{process.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Quality Matters */}
            <section className="py-20 bg-gradient-to-br from-beige/50 to-cream">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Why Quality Matters to Us
                            </h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    In the herbal supplement industry, quality isn't just a buzzword – it's a matter of trust, safety, and efficacy. When customers choose natural remedies, they're placing their health and well-being in our hands.
                                </p>
                                <p>
                                    That's why we've built our entire business around uncompromising quality standards. Every product that leaves our facility has been tested, verified, and certified to meet international standards.
                                </p>
                                <p>
                                    We don't just meet regulations – we exceed them. Because we know that your reputation depends on the quality of the products you distribute.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {[
                                { value: '100%', label: 'Lab Tested' },
                                { value: '0', label: 'Compromises' },
                                { value: 'GMP', label: 'Certified' },
                                { value: 'ISO', label: 'Standards' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-xl p-6 text-center shadow-lg"
                                >
                                    <div className="text-4xl font-bold text-gold mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Certificate Modal */}
            <CertificateModal
                certificate={selectedCertificate}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    )
}
