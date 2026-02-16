import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 md:py-6">
            <nav className="max-w-7xl mx-auto flex items-center justify-between glass-header px-6 md:px-8 py-4 rounded-xl border border-primary/10 transition-all duration-300">
                <div className="flex items-center gap-4 md:gap-12">
                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className="md:hidden text-white hover:text-primary transition-colors">
                        <Menu className="w-6 h-6" />
                    </button>

                    <Link to="/" className="text-xl md:text-2xl font-serif tracking-widest text-primary font-bold">
                        AETERNA
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-white/70">
                        <Link to="/collection" className="hover:text-primary transition-colors">Collections</Link>
                        <Link to="/story" className="hover:text-primary transition-colors">Heritage</Link>
                        <Link to="/contact" className="hover:text-primary transition-colors">Boutique</Link>
                        <Link to="/lookbook" className="hover:text-primary transition-colors">Lookbook</Link>
                    </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6">
                    <button className="text-white/70 hover:text-primary transition-colors">
                        <Search className="w-5 h-5" />
                    </button>
                    <button className="text-white/70 hover:text-primary transition-colors relative">
                        <ShoppingBag className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 bg-primary text-[10px] text-black font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
                    </button>
                    <div className="hidden md:block h-4 w-[1px] bg-white/20 mx-2"></div>
                    <Link to="/contact" className="hidden lg:block text-[10px] uppercase tracking-[0.2em] font-bold border border-primary/30 hover:bg-primary hover:text-black transition-all px-4 py-2 rounded">
                        Book Appointment
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-50 bg-background-dark/95 backdrop-blur-xl flex flex-col p-8 md:hidden"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <Link to="/" className="text-2xl font-serif tracking-widest text-primary font-bold" onClick={toggleMenu}>
                                AETERNA
                            </Link>
                            <button onClick={toggleMenu} className="text-white hover:text-primary transition-colors">
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-8 text-center">
                            <Link to="/collection" onClick={toggleMenu} className="text-2xl font-serif text-white hover:text-primary transition-colors">Collections</Link>
                            <Link to="/story" onClick={toggleMenu} className="text-2xl font-serif text-white hover:text-primary transition-colors">Heritage</Link>
                            <Link to="/contact" onClick={toggleMenu} className="text-2xl font-serif text-white hover:text-primary transition-colors">Boutique</Link>
                            <Link to="/lookbook" onClick={toggleMenu} className="text-2xl font-serif text-white hover:text-primary transition-colors">Lookbook</Link>

                            <div className="w-12 h-[1px] bg-white/10 mx-auto my-4"></div>

                            <Link to="/contact" onClick={toggleMenu} className="text-sm uppercase tracking-[0.2em] font-bold text-primary border border-primary/30 py-4 px-8 rounded hover:bg-primary hover:text-black transition-all mx-auto inline-block">
                                Book Appointment
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
