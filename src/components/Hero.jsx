import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero({ 
    title, 
    subtitle, 
    children, 
    className = '', 
    bgImage = null,
    badge = null,
    showScrollIndicator = true,
    variant = 'default' // 'default', 'centered', 'left-aligned'
}) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            })
        }

        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight - 100,
            behavior: 'smooth'
        })
    }

    // Split title for animated words
    const titleWords = title ? title.split(' ') : []

    return (
        <section className={`relative w-full min-h-[100vh] md:min-h-[100vh] overflow-hidden ${className}`}>
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />
            
            {/* Background Image with Parallax */}
            {bgImage && (
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        y: scrollY * 0.5,
                        scale: 1 + scrollY * 0.0005
                    }}
                >
                    <div
                        className="absolute inset-0 w-full h-full scale-110"
                        style={{
                            backgroundImage: `url('${bgImage}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                        }}
                    />
                </motion.div>
            )}

            {/* Multi-layer Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
            
            {/* Animated Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-yellow-500/15 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[150px]"
                />
            </div>

            {/* Decorative Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
                        }}
                        animate={{
                            y: [null, -20, 20],
                            opacity: [0.2, 0.8, 0.2]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none">
                <svg viewBox="0 0 200 200" className="w-full h-full opacity-20">
                    <path
                        d="M 0 100 Q 50 50 100 0"
                        fill="none"
                        stroke="url(#goldGradient)"
                        strokeWidth="1"
                    />
                    <path
                        d="M 0 150 Q 75 75 150 0"
                        fill="none"
                        stroke="url(#goldGradient)"
                        strokeWidth="0.5"
                    />
                    <defs>
                        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#F59E0B" />
                            <stop offset="100%" stopColor="#FCD34D" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            
            <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none rotate-180">
                <svg viewBox="0 0 200 200" className="w-full h-full opacity-20">
                    <path
                        d="M 0 100 Q 50 50 100 0"
                        fill="none"
                        stroke="url(#goldGradient2)"
                        strokeWidth="1"
                    />
                    <path
                        d="M 0 150 Q 75 75 150 0"
                        fill="none"
                        stroke="url(#goldGradient2)"
                        strokeWidth="0.5"
                    />
                    <defs>
                        <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#F59E0B" />
                            <stop offset="100%" stopColor="#FCD34D" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full min-h-[100vh] flex items-center justify-center px-4 py-32">
                <div className={`container mx-auto max-w-6xl ${variant === 'left-aligned' ? 'text-left' : 'text-center'}`}>
                    
                    {/* Badge */}
                    {badge && (
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className={`mb-8 ${variant === 'left-aligned' ? '' : 'flex justify-center'}`}
                        >
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-xl border border-amber-400/30 rounded-full text-amber-300 text-sm font-medium">
                                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                                {badge}
                            </span>
                        </motion.div>
                    )}

                    {/* Animated Title */}
                    {title && (
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
                        >
                            {titleWords.map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.2 + index * 0.1,
                                        ease: [0.215, 0.61, 0.355, 1]
                                    }}
                                    className="inline-block mr-[0.25em]"
                                >
                                    <span className="inline-block bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent drop-shadow-2xl">
                                        {word}
                                    </span>
                                </motion.span>
                            ))}
                            
                            {/* Decorative Line under title */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                                className={`h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-6 ${variant === 'left-aligned' ? 'w-32 origin-left' : 'w-48 mx-auto origin-center'}`}
                            />
                        </motion.h1>
                    )}

                    {/* Subtitle */}
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className={`text-lg sm:text-xl md:text-2xl text-gray-300/90 mb-10 leading-relaxed font-light ${variant === 'left-aligned' ? 'max-w-2xl' : 'max-w-3xl mx-auto'}`}
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {/* Children (CTA Buttons, etc.) */}
                    {children && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className={`flex flex-wrap gap-4 ${variant === 'left-aligned' ? '' : 'justify-center'}`}
                        >
                            {children}
                        </motion.div>
                    )}

                    {/* Stats or Features Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-16 pt-10 border-t border-white/10"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { value: '15+', label: 'Years Experience' },
                                { value: '50+', label: 'Countries Served' },
                                { value: '100%', label: 'Organic Products' },
                                { value: '24/7', label: 'Global Support' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2 + index * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-400 font-medium tracking-wide">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            {showScrollIndicator && (
                <motion.button
                    onClick={scrollToContent}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 group cursor-pointer"
                >
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-sm text-gray-400 font-medium tracking-widest uppercase group-hover:text-amber-400 transition-colors">
                            Explore
                        </span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-8 h-14 rounded-full border-2 border-white/20 flex items-start justify-center p-2 group-hover:border-amber-400/50 transition-colors"
                        >
                            <motion.div
                                animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-1.5 h-3 bg-gradient-to-b from-amber-400 to-yellow-400 rounded-full"
                            />
                        </motion.div>
                    </div>
                </motion.button>
            )}

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            
            {/* Side Vignette */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/50 to-transparent pointer-events-none" />
        </section>
    )
}