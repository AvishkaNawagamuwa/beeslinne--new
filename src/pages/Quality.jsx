import { useState } from 'react'
import { motion } from 'framer-motion'
import CertificateCard from '../components/CertificateCard'
import CertificateModal from '../components/CertificateModal'
import { certificates, qualityCommitments } from '../data/certificates'

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

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
}

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
        <div className="overflow-hidden">
            {/* Hero Section - Matching HeroCarousel style */}
            <section className="relative h-screen overflow-hidden pt-20 md:pt-24">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 w-full h-full scale-110"
                        style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&q=80)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                </div>

                {/* Multi-layer Overlay */}
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
                                Internationally Certified
                            </motion.div>

                            {/* Title */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Quality &
                                <span className="block text-emerald-300">Certifications</span>
                            </h1>

                            {/* Decorative Line */}
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <div className="w-16 h-1 bg-gradient-to-r from-transparent to-emerald-400 rounded-full" />
                                <div className="w-3 h-3 bg-amber-400 rounded-full" />
                                <div className="w-16 h-1 bg-gradient-to-l from-transparent to-emerald-400 rounded-full" />
                            </div>

                            {/* Subtitle */}
                            <p className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-3xl mx-auto">
                                Internationally aligned manufacturing and safety standards for export markets
                            </p>

                            {/* Feature Pills */}
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    { icon: '🏅', text: 'GMP Certified' },
                                    { icon: '🔬', text: 'Lab Tested' },
                                    { icon: '📜', text: 'ISO Standards' }
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

            {/* Certifications Grid Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
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
                            className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-100 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6"
                        >
                            <span className="text-lg">🏅</span>
                            Our Certifications
                        </motion.span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                                Quality Standards
                            </span>
                        </h2>

                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-emerald-400 rounded-full" />
                            <div className="w-3 h-3 bg-amber-400 rounded-full" />
                            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-emerald-400 rounded-full" />
                        </div>

                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Click any certificate to view full details
                        </p>
                    </motion.div>

                    {/* Certificates Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {certificates.map((certificate, index) => (
                            <motion.div
                                key={certificate.id}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, type: 'spring', stiffness: 80, delay: index * 0.08 }}
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
            <section className="relative py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50/50 to-white" />

                {/* Decorative Blobs */}
                <div className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-br from-amber-200/40 to-yellow-200/40 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl" />
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
                            <span className="text-lg">🛡️</span>
                            Our Commitment
                        </motion.span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                                Quality Commitment
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
                            Comprehensive quality controls ensuring safe, effective products
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {qualityCommitments.map((commitment, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, type: 'spring', stiffness: 80, delay: index * 0.1 }}
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
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
            <section className="relative py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-teal-50/30 to-emerald-50/50" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(to right, #10B981 1px, transparent 1px), linear-gradient(to bottom, #10B981 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }} />
                <div className="container mx-auto px-4 relative z-10">
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
                            <span className="text-lg">⚙️</span>
                            Our Process
                        </motion.span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                Quality Process
                            </span>
                        </h2>

                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full" />
                        </div>

                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                                className="bg-white rounded-2xl p-6 text-center relative overflow-hidden group hover:shadow-2xl transition-shadow shadow-lg border border-emerald-100"
                            >
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
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
            <section className="relative py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-emerald-200/30 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-200/20 to-transparent rounded-full blur-3xl" />
                <div className="container mx-auto px-4 relative z-10">
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
                                    className="bg-white rounded-2xl p-6 text-center shadow-xl border border-emerald-100 group relative overflow-hidden"
                                >
                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative z-10 text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">{stat.value}</div>
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
