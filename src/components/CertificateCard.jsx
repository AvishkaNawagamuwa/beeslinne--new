import { motion } from 'framer-motion'

export default function CertificateCard({ certificate, onClick }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            onClick={() => onClick(certificate)}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group card-hover"
        >
            {/* Image Container */}
            <div className="relative bg-gradient-to-br from-beige/50 to-white p-8 aspect-square flex items-center justify-center">
                <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23f5f1e8" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="16" text-anchor="middle" dy=".3em" fill="%23999"%3ECertificate%3C/text%3E%3C/svg%3E'
                    }}
                />
                {certificate.badge && (
                    <span className="absolute top-3 right-3 bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                        {certificate.badge}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gold transition-colors">
                    {certificate.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {certificate.shortDescription}
                </p>

                {/* View Certificate Button */}
                <button className="w-full btn-outline text-sm py-2 group-hover:border-gold group-hover:text-gold">
                    <span className="flex items-center justify-center gap-2">
                        View Certificate
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </button>
            </div>
        </motion.div>
    )
}
