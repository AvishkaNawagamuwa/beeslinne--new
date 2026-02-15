import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import { products, categories, filterProductsByCategory } from '../data/products'

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

export default function Products() {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleQuickView = (product) => {
        setSelectedProduct(product)
        setIsModalOpen(true)
    }

    const filteredProducts = filterProductsByCategory(selectedCategory).filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.scientificName.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="overflow-hidden">
            {/* Hero Section - Matching HeroCarousel style */}
            <section className="relative h-screen overflow-hidden pt-20 md:pt-24">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 w-full h-full scale-110"
                        style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1920&auto=format&fit=crop)',
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
                                Premium Selection
                            </motion.div>

                            {/* Title */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Our Premium
                                <span className="block text-emerald-300">Product Range</span>
                            </h1>

                            {/* Decorative Line */}
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <div className="w-16 h-1 bg-gradient-to-r from-transparent to-emerald-400 rounded-full" />
                                <div className="w-3 h-3 bg-amber-400 rounded-full" />
                                <div className="w-16 h-1 bg-gradient-to-l from-transparent to-emerald-400 rounded-full" />
                            </div>

                            {/* Subtitle */}
                            <p className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-3xl mx-auto">
                                GMP-certified herbal capsules for stress relief, weight management, and optimal wellness
                            </p>

                            {/* Feature Pills */}
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    { icon: '✓', text: 'GMP Certified' },
                                    { icon: '📦', text: 'Export Ready' },
                                    { icon: '🌿', text: '100% Natural' }
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

            {/* Products Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-amber-200/20 to-yellow-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

                <div className="container mx-auto px-4 relative z-10">
                    {/* Search and Filter Controls */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-12"
                    >
                        <div className="flex flex-col lg:flex-row gap-4 mb-8">
                            {/* Search Box */}
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-5 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-md"
                                />
                            </div>

                            {/* Category Filter - Dropdown for mobile */}
                            <div className="lg:hidden">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-5 py-3 border-2 border-emerald-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-md"
                                >
                                    {categories.map(category => (
                                        <option key={category.id} value={category.value}>
                                            {category.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Category Filter Pills - Desktop */}
                        <div className="hidden lg:flex flex-wrap gap-3">
                            {categories.map(category => (
                                <motion.button
                                    key={category.id}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setSelectedCategory(category.value)}
                                    className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 shadow-md ${selectedCategory === category.value
                                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                                        : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 border-2 border-emerald-100'
                                        }`}
                                >
                                    {category.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Results Count */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                        className="mb-8"
                    >
                        <p className="text-gray-600">
                            Showing <span className="font-semibold text-emerald-700">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
                        </p>
                    </motion.div>

                    {/* Products Grid */}
                    {filteredProducts.length > 0 ? (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onQuickView={handleQuickView}
                                />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-16 bg-white rounded-3xl shadow-lg border border-emerald-100"
                        >
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No products found</h3>
                            <p className="text-gray-600 mb-6">Try adjusting your search or filter to find what you're looking for.</p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    setSearchQuery('')
                                    setSelectedCategory('all')
                                }}
                                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Clear Filters
                            </motion.button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Info Section */}
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
                            Quality Assurance
                        </motion.span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                                Why Choose Our Products
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

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-8 text-center"
                    >
                        {[
                            {
                                icon: '✓',
                                title: 'GMP Certified',
                                desc: 'All products manufactured under strict quality standards',
                                color: 'emerald',
                                gradient: 'from-emerald-500 to-teal-500'
                            },
                            {
                                icon: '📦',
                                title: 'Export Ready',
                                desc: 'Available for bulk orders with international shipping',
                                color: 'teal',
                                gradient: 'from-teal-500 to-cyan-500'
                            },
                            {
                                icon: '🌿',
                                title: '100% Natural',
                                desc: 'Pure herbal ingredients with no artificial additives',
                                color: 'amber',
                                gradient: 'from-amber-500 to-yellow-500'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative"
                            >
                                {/* Card Glow */}
                                <div className={`absolute -inset-2 bg-gradient-to-r ${item.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                                <div className={`relative h-full bg-white rounded-2xl p-8 shadow-lg border border-${item.color}-100 overflow-hidden transition-all duration-300 group-hover:shadow-2xl`}>
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg mx-auto`}
                                    >
                                        <span className="text-4xl text-white">{item.icon}</span>
                                    </motion.div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>

                                    {/* Bottom Accent */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Quick View Modal */}
            <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    )
}
