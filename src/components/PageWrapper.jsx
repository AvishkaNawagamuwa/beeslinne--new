import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '../lib/animationVariants'

export default function PageWrapper({ children }) {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="min-h-full"
        >
            {children}
        </motion.div>
    )
}
