import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import { products, categories, filterProductsByCategory } from '../data/products'

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
        <div className="pt-16">
            <Hero
                title="Our Premium Product Range"
                subtitle="GMP-certified herbal capsules for stress relief, weight management, and optimal wellness"
                bgImage="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1920&auto=format&fit=crop"
            />

            <section className="py-16">
                <div className="container-custom">
                    {/* Search and Filter Controls */}
                    <div className="mb-12">
                        <div className="flex flex-col lg:flex-row gap-4 mb-8">
                            {/* Search Box */}
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Category Filter - Dropdown for mobile */}
                            <div className="lg:hidden">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
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
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.value)}
                                    className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category.value
                                        ? 'bg-gold text-white shadow-lg transform scale-105'
                                        : 'bg-beige text-gray-700 hover:bg-gold/20 hover:text-gold'
                                        }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results Count */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-8"
                    >
                        <p className="text-gray-600">
                            Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
                        </p>
                    </motion.div>

                    {/* Products Grid */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onQuickView={handleQuickView}
                                />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-16"
                        >
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No products found</h3>
                            <p className="text-gray-600 mb-6">Try adjusting your search or filter to find what you're looking for.</p>
                            <button
                                onClick={() => {
                                    setSearchQuery('')
                                    setSelectedCategory('all')
                                }}
                                className="btn-primary"
                            >
                                Clear Filters
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Quick View Modal */}
            <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            {/* Info Section */}
            <section className="py-16 bg-beige/30">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl p-6 shadow-md"
                        >
                            <div className="text-4xl mb-3">✓</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">GMP Certified</h3>
                            <p className="text-gray-600 text-sm">All products manufactured under strict quality standards</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-xl p-6 shadow-md"
                        >
                            <div className="text-4xl mb-3">📦</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Export Ready</h3>
                            <p className="text-gray-600 text-sm">Available for bulk orders with international shipping</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-xl p-6 shadow-md"
                        >
                            <div className="text-4xl mb-3">🌿</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Natural</h3>
                            <p className="text-gray-600 text-sm">Pure herbal ingredients with no artificial additives</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
