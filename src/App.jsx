import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Quality from './pages/Quality'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import RequestExport from './pages/RequestExport'
import PageWrapper from './components/PageWrapper'

function App() {
    const location = useLocation()

    return (
        <>
            <LoadingScreen />
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                            <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
                            <Route path="/products/:slug" element={<PageWrapper><ProductDetails /></PageWrapper>} />
                            <Route path="/quality" element={<PageWrapper><Quality /></PageWrapper>} />
                            <Route path="/partners" element={<PageWrapper><Partners /></PageWrapper>} />
                            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                            <Route path="/request-export" element={<PageWrapper><RequestExport /></PageWrapper>} />
                        </Routes>
                    </AnimatePresence>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default App
