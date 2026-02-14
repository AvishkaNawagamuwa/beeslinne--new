import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from 'swiper/modules'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/parallax'

export default function HeroCarousel() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const slides = [
        {
            id: 1,
            badge: '🌿 Ancient Wisdom, Modern Wellness',
            title: 'Pure Ayurvedic Herbal Excellence',
            subtitle: "From Sri Lanka's Sacred Healing Traditions",
            description: 'Discover 5,000 years of natural healing wisdom, crafted into premium herbal formulations for global wellness seekers.',
            buttons: [
                { text: 'Explore Herbal Range', link: '/products', primary: true, icon: '🌱' },
                { text: 'Partner With Us', link: '/partners', primary: false, icon: '🤝' }
            ],
            bgImage: 'https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=1920&q=80',
            features: [
                { icon: '🌿', text: '100% Natural' },
                { icon: '🧪', text: 'Lab Tested' },
                { icon: '♻️', text: 'Sustainable' }
            ],
            accentColor: 'from-emerald-600 to-green-500',
            overlayColor: 'from-emerald-900/80 via-green-900/60 to-emerald-900/80'
        },
        {
            id: 2,
            badge: '🏆 Certified Quality Assurance',
            title: 'GMP & ISO Certified Production',
            subtitle: 'International Standards, Traditional Methods',
            description: 'Our state-of-the-art facilities blend ancient Ayurvedic knowledge with modern pharmaceutical standards.',
            buttons: [
                { text: 'View Certifications', link: '/quality', primary: true, icon: '📋' },
                { text: 'Factory Tour', link: '/about', primary: false, icon: '🏭' }
            ],
            bgImage: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=1920&q=80',
            features: [
                { icon: '✅', text: 'ISO 22000' },
                { icon: '🏅', text: 'GMP Certified' },
                { icon: '📜', text: 'HACCP' }
            ],
            accentColor: 'from-amber-600 to-yellow-500',
            overlayColor: 'from-amber-900/80 via-yellow-900/60 to-amber-900/80'
        },
        {
            id: 3,
            badge: '🌍 Trusted Global Export Partner',
            title: 'Premium Herbal Exports Worldwide',
            subtitle: 'Connecting Ancient Remedies to Modern Markets',
            description: 'Seamless B2B partnerships with reliable supply chains, competitive pricing, and complete export documentation.',
            buttons: [
                { text: 'Request Quote', link: '/request-export', primary: true, icon: '📦' },
                { text: 'Contact Us', link: '/contact', primary: false, icon: '💬' }
            ],
            bgImage: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1920&q=80',
            features: [
                { icon: '🚢', text: '50+ Countries' },
                { icon: '⚡', text: 'Fast Delivery' },
                { icon: '📄', text: 'Full Documentation' }
            ],
            accentColor: 'from-teal-600 to-cyan-500',
            overlayColor: 'from-teal-900/80 via-cyan-900/60 to-teal-900/80'
        },
        {
            id: 4,
            badge: '🧴 Custom Formulations',
            title: 'Private Label & OEM Solutions',
            subtitle: 'Your Brand, Our Herbal Expertise',
            description: 'Create your unique herbal product line with our custom formulation services, from concept to market-ready products.',
            buttons: [
                { text: 'Start Your Brand', link: '/partners', primary: true, icon: '✨' },
                { text: 'View Catalog', link: '/products', primary: false, icon: '📖' }
            ],
            bgImage: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1920&q=80',
            features: [
                { icon: '🎨', text: 'Custom Branding' },
                { icon: '🧪', text: 'R&D Support' },
                { icon: '📦', text: 'Low MOQ' }
            ],
            accentColor: 'from-purple-600 to-violet-500',
            overlayColor: 'from-purple-900/80 via-violet-900/60 to-purple-900/80'
        }
    ]

    // Herbal/Botanical floating elements
    const floatingElements = ['🌿', '🍃', '🌱', '🍀', '🌾', '💧', '✨']

    useEffect(() => {
        if (isHovered) return
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) return 0
                return prev + 1.5
            })
        }, 75)
        return () => clearInterval(interval)
    }, [activeIndex, isHovered])

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex)
        setProgress(0)
    }

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
                effect="fade"
                parallax={true}
                speed={1500}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                pagination={false}
                navigation={{
                    prevEl: '.hero-prev',
                    nextEl: '.hero-next'
                }}
                loop={true}
                onSlideChange={handleSlideChange}
                className="hero-carousel h-screen"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        {({ isActive }) => (
                            <div className="relative h-full flex items-center justify-center overflow-hidden">
                                {/* Animated Background with Ken Burns */}
                                <motion.div
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: isActive ? 1 : 1.1 }}
                                    transition={{ duration: 10, ease: "linear" }}
                                    className="absolute inset-0"
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                        style={{ backgroundImage: `url('${slide.bgImage}')` }}
                                    />
                                </motion.div>

                                {/* Natural Gradient Overlays */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${slide.overlayColor}`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

                                {/* Botanical Pattern Overlay */}
                                <div
                                    className="absolute inset-0 opacity-5"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 Q35 15 30 25 Q25 15 30 5' fill='none' stroke='white' stroke-width='0.5'/%3E%3Cpath d='M30 35 Q35 45 30 55 Q25 45 30 35' fill='none' stroke='white' stroke-width='0.5'/%3E%3Ccircle cx='30' cy='30' r='3' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
                                        backgroundSize: '60px 60px'
                                    }}
                                />

                                {/* Animated Herbal Orbs */}
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <motion.div
                                        animate={{
                                            x: [0, 50, 0],
                                            y: [0, -30, 0],
                                            opacity: [0.3, 0.5, 0.3]
                                        }}
                                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                                        className={`absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r ${slide.accentColor} rounded-full blur-[120px] opacity-40`}
                                    />
                                    <motion.div
                                        animate={{
                                            x: [0, -40, 0],
                                            y: [0, 40, 0],
                                            opacity: [0.2, 0.4, 0.2]
                                        }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-green-500/30 rounded-full blur-[150px]"
                                    />
                                    {/* Central glow */}
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-[180px]"
                                    />
                                </div>

                                {/* Floating Botanical Elements */}
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    {[...Array(15)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute text-2xl"
                                            initial={{
                                                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                                                y: typeof window !== 'undefined' ? window.innerHeight + 50 : 800,
                                                rotate: 0,
                                                opacity: 0
                                            }}
                                            animate={{
                                                y: -100,
                                                rotate: 360,
                                                opacity: [0, 0.6, 0]
                                            }}
                                            transition={{
                                                duration: 10 + Math.random() * 10,
                                                repeat: Infinity,
                                                delay: Math.random() * 10,
                                                ease: "linear"
                                            }}
                                            style={{ left: `${Math.random() * 100}%` }}
                                        >
                                            {floatingElements[Math.floor(Math.random() * floatingElements.length)]}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Decorative Leaf Corner Elements */}
                                <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none opacity-20">
                                    <svg viewBox="0 0 200 200" className="w-full h-full">
                                        <path
                                            d="M 0 100 Q 30 70 60 50 Q 80 35 100 0"
                                            fill="none"
                                            stroke="url(#leafGradient1)"
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="M 0 150 Q 50 100 100 70 Q 130 50 150 0"
                                            fill="none"
                                            stroke="url(#leafGradient1)"
                                            strokeWidth="1"
                                        />
                                        <defs>
                                            <linearGradient id="leafGradient1" x1="0%" y1="100%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#10B981" />
                                                <stop offset="100%" stopColor="#34D399" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none opacity-20 rotate-180">
                                    <svg viewBox="0 0 200 200" className="w-full h-full">
                                        <path
                                            d="M 0 100 Q 30 70 60 50 Q 80 35 100 0"
                                            fill="none"
                                            stroke="url(#leafGradient2)"
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="M 0 150 Q 50 100 100 70 Q 130 50 150 0"
                                            fill="none"
                                            stroke="url(#leafGradient2)"
                                            strokeWidth="1"
                                        />
                                        <defs>
                                            <linearGradient id="leafGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#10B981" />
                                                <stop offset="100%" stopColor="#34D399" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>

                                {/* Main Content */}
                                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                                    <div className="max-w-7xl mx-auto">
                                        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                                            {/* Content - Left Side */}
                                            <div className="lg:col-span-3 text-center lg:text-left">
                                                <AnimatePresence mode="wait">
                                                    {isActive && (
                                                        <>
                                                            {/* Badge */}
                                                            <motion.div
                                                                key={`badge-${slide.id}`}
                                                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                exit={{ opacity: 0, y: -20 }}
                                                                transition={{ duration: 0.6, delay: 0.1 }}
                                                                className="mb-6"
                                                            >
                                                                <span className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-sm font-medium shadow-xl">
                                                                    <motion.span
                                                                        animate={{ rotate: [0, 10, -10, 0] }}
                                                                        transition={{ duration: 2, repeat: Infinity }}
                                                                        className="text-lg"
                                                                    >
                                                                        🌿
                                                                    </motion.span>
                                                                    {slide.badge}
                                                                </span>
                                                            </motion.div>

                                                            {/* Title */}
                                                            <motion.h1
                                                                key={`title-${slide.id}`}
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                exit={{ opacity: 0, y: -30 }}
                                                                transition={{ duration: 0.8, delay: 0.2 }}
                                                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
                                                            >
                                                                {slide.title.split(' ').map((word, i) => (
                                                                    <motion.span
                                                                        key={i}
                                                                        initial={{ opacity: 0, y: 50, rotateX: -40 }}
                                                                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                                                        transition={{
                                                                            delay: 0.3 + i * 0.08,
                                                                            duration: 0.6,
                                                                            ease: [0.215, 0.61, 0.355, 1]
                                                                        }}
                                                                        className="inline-block mr-[0.25em]"
                                                                    >
                                                                        <span className="bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent drop-shadow-2xl">
                                                                            {word}
                                                                        </span>
                                                                    </motion.span>
                                                                ))}
                                                            </motion.h1>

                                                            {/* Decorative Line */}
                                                            <motion.div
                                                                initial={{ scaleX: 0, opacity: 0 }}
                                                                animate={{ scaleX: 1, opacity: 1 }}
                                                                transition={{ duration: 0.8, delay: 0.6 }}
                                                                className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
                                                            >
                                                                <div className={`h-1 w-16 bg-gradient-to-r ${slide.accentColor} rounded-full`} />
                                                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                                                <div className={`h-1 w-8 bg-gradient-to-r ${slide.accentColor} rounded-full opacity-60`} />
                                                            </motion.div>

                                                            {/* Subtitle */}
                                                            <motion.p
                                                                key={`subtitle-${slide.id}`}
                                                                initial={{ opacity: 0, y: 30 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0 }}
                                                                transition={{ duration: 0.7, delay: 0.5 }}
                                                                className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r ${slide.accentColor} bg-clip-text text-transparent`}
                                                            >
                                                                {slide.subtitle}
                                                            </motion.p>

                                                            {/* Description */}
                                                            <motion.p
                                                                key={`desc-${slide.id}`}
                                                                initial={{ opacity: 0, y: 20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0 }}
                                                                transition={{ duration: 0.6, delay: 0.6 }}
                                                                className="text-lg sm:text-xl text-gray-200/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                                                            >
                                                                {slide.description}
                                                            </motion.p>

                                                            {/* Feature Pills */}
                                                            <motion.div
                                                                key={`features-${slide.id}`}
                                                                initial={{ opacity: 0, y: 20 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ duration: 0.6, delay: 0.7 }}
                                                                className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start"
                                                            >
                                                                {slide.features.map((feature, idx) => (
                                                                    <motion.span
                                                                        key={idx}
                                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                                        animate={{ opacity: 1, scale: 1 }}
                                                                        transition={{ delay: 0.8 + idx * 0.1 }}
                                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium"
                                                                    >
                                                                        <span>{feature.icon}</span>
                                                                        <span>{feature.text}</span>
                                                                    </motion.span>
                                                                ))}
                                                            </motion.div>

                                                            {/* Buttons */}
                                                            <motion.div
                                                                key={`buttons-${slide.id}`}
                                                                initial={{ opacity: 0, y: 30 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0 }}
                                                                transition={{ duration: 0.6, delay: 0.9 }}
                                                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                                            >
                                                                {slide.buttons.map((button, idx) => (
                                                                    <motion.div
                                                                        key={idx}
                                                                        whileHover={{ scale: 1.03, y: -3 }}
                                                                        whileTap={{ scale: 0.98 }}
                                                                    >
                                                                        <Link
                                                                            to={button.link}
                                                                            className={`group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 overflow-hidden ${button.primary
                                                                                    ? `bg-gradient-to-r ${slide.accentColor} text-white shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50`
                                                                                    : 'bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white hover:bg-white hover:text-emerald-800'
                                                                                }`}
                                                                        >
                                                                            {/* Shimmer Effect */}
                                                                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                                                            {/* Leaf decoration for primary button */}
                                                                            {button.primary && (
                                                                                <span className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                                                                            )}

                                                                            <span className="relative z-10 text-xl">{button.icon}</span>
                                                                            <span className="relative z-10">{button.text}</span>
                                                                            <motion.span
                                                                                className="relative z-10"
                                                                                animate={{ x: [0, 5, 0] }}
                                                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                                            >
                                                                                →
                                                                            </motion.span>
                                                                        </Link>
                                                                    </motion.div>
                                                                ))}
                                                            </motion.div>
                                                        </>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {/* Herbal Product Showcase Card - Right Side */}
                                            <AnimatePresence mode="wait">
                                                {isActive && (
                                                    <motion.div
                                                        key={`card-${slide.id}`}
                                                        initial={{ opacity: 0, x: 100, rotateY: -20 }}
                                                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                                                        exit={{ opacity: 0, x: 50 }}
                                                        transition={{ duration: 0.8, delay: 0.5 }}
                                                        className="hidden lg:block lg:col-span-2"
                                                    >
                                                        <div className="relative">
                                                            {/* Card Glow */}
                                                            <div className={`absolute -inset-4 bg-gradient-to-r ${slide.accentColor} rounded-3xl blur-2xl opacity-30`} />

                                                            {/* Main Card */}
                                                            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                                                                {/* Card Header with Plant Pattern */}
                                                                <div className={`relative px-8 py-6 bg-gradient-to-r ${slide.accentColor} overflow-hidden`}>
                                                                    {/* Botanical pattern */}
                                                                    <div className="absolute inset-0 opacity-20">
                                                                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                                            <pattern id="leaves" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                                                                <path d="M10 2 Q12 8 10 14 Q8 8 10 2" fill="white" />
                                                                            </pattern>
                                                                            <rect width="100" height="100" fill="url(#leaves)" />
                                                                        </svg>
                                                                    </div>

                                                                    <div className="relative flex items-center gap-4">
                                                                        <motion.div
                                                                            animate={{ rotate: [0, 5, -5, 0] }}
                                                                            transition={{ duration: 4, repeat: Infinity }}
                                                                            className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl"
                                                                        >
                                                                            🌿
                                                                        </motion.div>
                                                                        <div>
                                                                            <h3 className="text-white font-bold text-lg">Herbal Excellence</h3>
                                                                            <p className="text-white/80 text-sm">Sri Lankan Ayurveda</p>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Card Body */}
                                                                <div className="p-8">
                                                                    {/* Product Categories */}
                                                                    <div className="space-y-4 mb-8">
                                                                        {[
                                                                            { name: 'Herbal Supplements', count: '150+', icon: '💊' },
                                                                            { name: 'Essential Oils', count: '80+', icon: '🧴' },
                                                                            { name: 'Herbal Teas', count: '45+', icon: '🍵' },
                                                                            { name: 'Skincare Range', count: '60+', icon: '✨' }
                                                                        ].map((item, idx) => (
                                                                            <motion.div
                                                                                key={idx}
                                                                                initial={{ opacity: 0, x: 30 }}
                                                                                animate={{ opacity: 1, x: 0 }}
                                                                                transition={{ delay: 0.8 + idx * 0.1 }}
                                                                                className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                                                                            >
                                                                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                                                                                    {item.icon}
                                                                                </div>
                                                                                <div className="flex-1">
                                                                                    <p className="text-white font-medium">{item.name}</p>
                                                                                    <div className="flex items-center gap-2 mt-1">
                                                                                        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                                                            <motion.div
                                                                                                initial={{ width: 0 }}
                                                                                                animate={{ width: '100%' }}
                                                                                                transition={{ delay: 1 + idx * 0.2, duration: 1.5 }}
                                                                                                className={`h-full bg-gradient-to-r ${slide.accentColor} rounded-full`}
                                                                                            />
                                                                                        </div>
                                                                                        <span className="text-emerald-400 text-sm font-semibold">{item.count}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </motion.div>
                                                                        ))}
                                                                    </div>

                                                                    {/* Trust Badges */}
                                                                    <motion.div
                                                                        initial={{ opacity: 0 }}
                                                                        animate={{ opacity: 1 }}
                                                                        transition={{ delay: 1.5 }}
                                                                        className="pt-6 border-t border-white/10"
                                                                    >
                                                                        <div className="flex items-center justify-between">
                                                                            <div className="flex -space-x-2">
                                                                                {['🇬🇧', '🇺🇸', '🇩🇪', '🇯🇵', '🇦🇺'].map((flag, idx) => (
                                                                                    <motion.div
                                                                                        key={idx}
                                                                                        initial={{ scale: 0 }}
                                                                                        animate={{ scale: 1 }}
                                                                                        transition={{ delay: 1.6 + idx * 0.1 }}
                                                                                        className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm border-2 border-white/30"
                                                                                    >
                                                                                        {flag}
                                                                                    </motion.div>
                                                                                ))}
                                                                            </div>
                                                                            <div className="text-right">
                                                                                <p className="text-emerald-400 font-bold">50+</p>
                                                                                <p className="text-white/60 text-xs">Countries</p>
                                                                            </div>
                                                                        </div>
                                                                    </motion.div>
                                                                </div>
                                                            </div>

                                                            {/* Floating Decorative Elements */}
                                                            <motion.div
                                                                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                                                                transition={{ duration: 4, repeat: Infinity }}
                                                                className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-400/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-xl border border-white/20"
                                                            >
                                                                🌱
                                                            </motion.div>
                                                            <motion.div
                                                                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                                                                transition={{ duration: 5, repeat: Infinity }}
                                                                className="absolute -bottom-4 -left-4 w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center text-xl backdrop-blur-xl border border-white/20"
                                                            >
                                                                🍃
                                                            </motion.div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Bottom Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                <div className="flex items-center gap-4 px-6 py-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full shadow-2xl">
                    {/* Previous Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="hero-prev w-12 h-12 rounded-full bg-white/10 hover:bg-emerald-500 flex items-center justify-center text-white transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </motion.button>

                    {/* Progress Indicators */}
                    <div className="flex items-center gap-3">
                        {slides.map((slide, index) => (
                            <div key={index} className="relative group">
                                {/* Slide Thumbnail Preview on Hover */}
                                <div className={`absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-40 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 pointer-events-none ${index === activeIndex ? '' : ''}`}>
                                    <div className="relative">
                                        <img
                                            src={slide.bgImage}
                                            alt={slide.title}
                                            className="w-full h-24 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/50" />
                                        <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium truncate">
                                            {slide.title}
                                        </p>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div
                                    className={`w-12 h-1.5 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${index === activeIndex ? 'bg-white/30' : 'bg-white/10 hover:bg-white/20'
                                        }`}
                                >
                                    {index === activeIndex && (
                                        <motion.div
                                            className={`h-full bg-gradient-to-r ${slides[activeIndex].accentColor} rounded-full`}
                                            initial={{ width: '0%' }}
                                            animate={{ width: `${progress}%` }}
                                            transition={{ duration: 0.1 }}
                                        />
                                    )}
                                </div>

                                {/* Slide Number */}
                                <span className={`absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold transition-all duration-300 ${index === activeIndex ? 'text-white' : 'text-white/40'
                                    }`}>
                                    0{index + 1}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="hero-next w-12 h-12 rounded-full bg-white/10 hover:bg-emerald-500 flex items-center justify-center text-white transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col items-center gap-3"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center"
                >
                    <span className="text-white/50 text-xs font-medium tracking-widest uppercase mb-2">Scroll</span>
                    <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
                        <motion.div
                            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-3 bg-emerald-400 rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div>

            {/* Slide Counter - Top Right */}
            <div className="absolute top-32 right-8 z-20 hidden lg:block">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-right"
                >
                    <div className="flex items-baseline gap-2">
                        <motion.span
                            key={`counter-${activeIndex}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`text-6xl font-bold bg-gradient-to-r ${slides[activeIndex].accentColor} bg-clip-text text-transparent`}
                        >
                            0{activeIndex + 1}
                        </motion.span>
                        <span className="text-2xl text-white/30">/</span>
                        <span className="text-2xl text-white/30">0{slides.length}</span>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/50 text-sm mt-1"
                    >
                        {slides[activeIndex].badge.replace(/[^\w\s,]/g, '').trim()}
                    </motion.p>
                </motion.div>
            </div>

            {/* Social/Contact Sidebar - Left */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4">
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent" />

                {[
                    { icon: '📧', label: 'Email', href: 'mailto:info@example.com' },
                    { icon: '📞', label: 'Call', href: 'tel:+1234567890' },
                    { icon: '💬', label: 'Chat', href: '#chat' }
                ].map((item, idx) => (
                    <motion.a
                        key={idx}
                        href={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 + idx * 0.1 }}
                        whileHover={{ scale: 1.1, x: 5 }}
                        className="group relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                        title={item.label}
                    >
                        <span className="text-lg">{item.icon}</span>

                        {/* Tooltip */}
                        <span className="absolute left-full ml-3 px-3 py-1.5 bg-white/20 backdrop-blur-xl rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.label}
                        </span>
                    </motion.a>
                ))}

                <div className="w-px h-16 bg-gradient-to-b from-white/30 via-transparent to-transparent" />
            </div>

            {/* Herbal Certification Badges - Bottom Left */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-8 z-20 hidden lg:flex items-center gap-3"
            >
                {['🏆 GMP', '✅ ISO', '🌿 Organic', '📋 HACCP'].map((cert, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-sm font-medium"
                    >
                        {cert}
                    </motion.div>
                ))}
            </motion.div>

            <style jsx>{`
                .hero-carousel {
                    --swiper-navigation-size: 20px;
                }
                .hero-carousel .swiper-slide {
                    opacity: 0 !important;
                }
                .hero-carousel .swiper-slide-active {
                    opacity: 1 !important;
                }
            `}</style>
        </div>
    )
}