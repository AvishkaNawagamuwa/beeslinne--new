import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProductBySlug } from '../data/products'

export default function ProductDetails() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const product = getProductBySlug(slug)

    if (!product) {
        return (
            <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">🔍</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
                    <Link to="/products" className="btn-primary">
                        Back to Products
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="pt-20">
            {/* Breadcrumb */}
            <div className="bg-beige/30 py-4">
                <div className="container-custom">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Link to="/" className="hover:text-gold transition-colors">Home</Link>
                        <span>/</span>
                        <Link to="/products" className="hover:text-gold transition-colors">Products</Link>
                        <span>/</span>
                        <span className="text-gold font-medium">{product.name}</span>
                    </div>
                </div>
            </div>

            {/* Product Hero */}
            <section className="py-12">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="sticky top-24 bg-beige rounded-2xl p-8 aspect-square flex items-center justify-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            {product.featured && (
                                <span className="absolute top-6 right-6 bg-gold text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                                    Featured Product
                                </span>
                            )}
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="inline-block text-sm font-semibold text-gold uppercase tracking-wider mb-2">
                                {product.category}
                            </span>

                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                {product.name}
                            </h1>

                            <p className="text-lg italic text-gray-500 mb-6">
                                {product.scientificName}
                            </p>

                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                {product.tagline}
                            </p>

                            {/* Product Specs */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-beige rounded-lg px-6 py-3">
                                    <p className="text-sm text-gray-600">Strength</p>
                                    <p className="text-2xl font-bold text-gray-900">{product.mg}mg</p>
                                </div>
                                <div className="bg-beige rounded-lg px-6 py-3">
                                    <p className="text-sm text-gray-600">Capsules</p>
                                    <p className="text-2xl font-bold text-gray-900">{product.capsules}</p>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Link to="/request-export" className="btn-primary flex-1 text-center">
                                    Request Export Quotation
                                </Link>
                                <Link to="/partners" className="btn-secondary flex-1 text-center">
                                    Become a Distributor
                                </Link>
                            </div>

                            {/* Quick Info Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                    <div className="text-green-600 text-2xl mb-2">✓</div>
                                    <h4 className="font-semibold text-gray-900 mb-1">GMP Certified</h4>
                                    <p className="text-sm text-gray-600">Quality assured</p>
                                </div>
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <div className="text-blue-600 text-2xl mb-2">🌿</div>
                                    <h4 className="font-semibold text-gray-900 mb-1">100% Natural</h4>
                                    <p className="text-sm text-gray-600">Pure ingredients</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Product Details Sections */}
            <section className="py-16 bg-beige/20">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Overview */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl p-8 shadow-md md:col-span-2"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Overview</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {product.description}
                            </p>
                        </motion.div>

                        {/* Key Benefits */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl p-8 shadow-md"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                            <ul className="space-y-3">
                                {product.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Product Specifications */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-xl p-8 shadow-md"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Specifications</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                                    <p className="text-gray-700">{product.ingredients}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Packaging:</h4>
                                    <p className="text-gray-700">{product.capsules} capsules per bottle | {product.mg}mg per capsule</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Dosage:</h4>
                                    <p className="text-gray-700">{product.dosage}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quality & Certifications */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Quality & Certifications</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
                        <p className="section-subtitle">Internationally recognized standards ensuring premium quality</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: '✓', title: 'GMP Certified', desc: 'Good Manufacturing Practice compliance' },
                            { icon: '✓', title: 'ISO 22000', desc: 'Food safety management certified' },
                            { icon: '✓', title: 'Export Quality', desc: 'Meets international standards' }
                        ].map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-beige/30 rounded-xl p-6 text-center"
                            >
                                <div className="text-4xl text-gold mb-3">{cert.icon}</div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h4>
                                <p className="text-gray-600">{cert.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-gold/90 to-primary-400/90 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold mb-6">Interested in This Product?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
                        Contact us for export pricing, bulk orders, and distribution opportunities
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/request-export" className="btn-primary bg-white text-gold hover:bg-gray-100">
                            Request Export Quote
                        </Link>
                        <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-gold">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
