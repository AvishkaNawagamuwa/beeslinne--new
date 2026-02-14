import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProductCard({ product, onQuickView }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-md overflow-hidden group card-hover"
        >
            {/* Image Container */}
            <Link to={`/products/${product.slug}`} className="block relative overflow-hidden bg-beige aspect-square">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-6 transform group-hover:scale-110 transition-transform duration-300"
                />
                {product.featured && (
                    <span className="absolute top-3 right-3 bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Featured
                    </span>
                )}
            </Link>

            {/* Content */}
            <div className="p-6">
                <span className="inline-block text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                    {product.category}
                </span>

                <Link to={`/products/${product.slug}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gold transition-colors">
                        {product.name}
                    </h3>
                </Link>

                <p className="text-sm italic text-gray-500 mb-3">
                    {product.scientificName}
                </p>

                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {product.tagline}
                </p>

                {/* Product Info Pills */}
                <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-beige text-gray-700">
                        {product.mg}mg
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-beige text-gray-700">
                        {product.capsules} Capsules
                    </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                    <button
                        onClick={() => onQuickView(product)}
                        className="flex-1 btn-outline text-sm py-2"
                    >
                        Quick View
                    </button>
                    <Link
                        to={`/products/${product.slug}`}
                        className="flex-1 btn-primary text-sm py-2 text-center"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}
