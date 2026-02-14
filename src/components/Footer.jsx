import { Link } from 'react-router-dom'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer */}
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <img
                                src="/assets/images/logo1.png"
                                alt="Bees Line Exports Logo"
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                            <span className="text-lg font-semibold text-white">
                                Bees Line Exports
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Premium Sri Lankan herbal and Ayurvedic products for global export and distribution. GMP certified, quality assured.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-sm hover:text-gold transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-sm hover:text-gold transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-sm hover:text-gold transition-colors">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/quality" className="text-sm hover:text-gold transition-colors">
                                    Quality & Certifications
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Our Products</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/products/ashwagandha" className="text-sm hover:text-gold transition-colors">
                                    Ashwagandha Capsules
                                </Link>
                            </li>
                            <li>
                                <Link to="/products/garcinia" className="text-sm hover:text-gold transition-colors">
                                    Garcinia Capsules
                                </Link>
                            </li>
                            <li>
                                <Link to="/products/moringa" className="text-sm hover:text-gold transition-colors">
                                    Moringa Capsules
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-sm hover:text-gold transition-colors">
                                    View All Products →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <p className="text-gray-400">BEES LINE EXPORTS (Pvt) Ltd</p>
                                <address className="not-italic text-gray-400 text-sm">No. 10, Horton Place, Colombo 07, Sri Lanka</address>
                            </li>
                            <li>
                                <p className="text-gray-400">Phone</p>
                                <div className="flex flex-col">
                                    <a href="tel:+94777182110" className="text-gold hover:underline">+94 777 182 110</a>
                                    <a href="tel:+94777667576" className="text-gold hover:underline">+94 777 667 576</a>
                                </div>
                            </li>
                            <li>
                                <p className="text-gray-400">Email</p>
                                <div className="flex flex-col">
                                    <a href="mailto:info@beeslineexport.com" className="text-gold hover:underline">info@beeslineexport.com</a>
                                    <a href="mailto:beeslineexport@gmail.com" className="text-gold hover:underline">beeslineexport@gmail.com</a>
                                </div>
                            </li>
                            <li>
                                <Link to="/contact" className="inline-block mt-2 btn-primary text-sm">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-400">
                            © {currentYear} Bees Line Exports. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6 text-sm">
                            <Link to="/partners" className="text-gray-400 hover:text-gold transition-colors">
                                Partners
                            </Link>
                            <Link to="/request-export" className="text-gray-400 hover:text-gold transition-colors">
                                Become a Distributor
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
