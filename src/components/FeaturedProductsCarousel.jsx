import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getFeaturedProducts } from '../data/products'
import ProductModal from './ProductModal'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export default function FeaturedProductsCarousel() {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const featuredProducts = getFeaturedProducts()

    const handleQuickView = (product) => {
        setSelectedProduct(product)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setTimeout(() => setSelectedProduct(null), 300)
    }

    return (
        <>
            <div className="relative">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                    }}
                    className="featured-products-carousel"
                >
                    {featuredProducts.map((product) => (
                        <SwiperSlide key={product.id}>
                            <motion.div
                                whileHover={{ y: -6, scale: 1.02 }}
                                transition={{ duration: 0.25 }}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden h-full group"
                            >
                                {/* Image Container */}
                                <Link
                                    to={`/products/${product.slug}`}
                                    className="block relative overflow-hidden bg-beige aspect-square"
                                >
                                    <motion.img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain p-6"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    {product.featured && (
                                        <span className="absolute top-3 right-3 bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
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
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gold transition-colors line-clamp-2 min-h-[56px]">
                                            {product.name}
                                        </h3>
                                    </Link>

                                    <p className="text-sm italic text-gray-500 mb-3">
                                        {product.scientificName}
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

                                    {/* Quick View Button */}
                                    <button
                                        onClick={() => handleQuickView(product)}
                                        className="w-full px-4 py-2.5 rounded-lg border-2 border-gold text-gold font-medium hover:bg-gold hover:text-white transition-all duration-300 hover:shadow-lg"
                                    >
                                        Quick View
                                    </button>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <style jsx>{`
          .featured-products-carousel {
            --swiper-navigation-size: 14px;
            --swiper-navigation-color: #666;
            padding: 1rem 0;
          }

          .featured-products-carousel :global(.swiper-button-prev),
          .featured-products-carousel :global(.swiper-button-next) {
            background: transparent;
            width: 34px;
            height: 34px;
            border: none;
            transition: all 0.3s ease;
            opacity: 0;
          }

          .featured-products-carousel:hover :global(.swiper-button-prev),
          .featured-products-carousel:hover :global(.swiper-button-next) {
            opacity: 1;
          }

          .featured-products-carousel :global(.swiper-button-prev:hover),
          .featured-products-carousel :global(.swiper-button-next:hover) {
            --swiper-navigation-color: #D4AF37;
            transform: scale(1.15);
          }

          .featured-products-carousel :global(.swiper-button-prev::after),
          .featured-products-carousel :global(.swiper-button-next::after) {
            font-size: 22px;
            font-weight: bold;
            text-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
          }

          @media (max-width: 640px) {
            .featured-products-carousel :global(.swiper-button-prev),
            .featured-products-carousel :global(.swiper-button-next) {
              width: 30px;
              height: 30px;
            }
            
            .featured-products-carousel :global(.swiper-button-prev::after),
            .featured-products-carousel :global(.swiper-button-next::after) {
              font-size: 18px;
            }
          }
        `}</style>
            </div>

            {/* Product Modal */}
            <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    )
}
