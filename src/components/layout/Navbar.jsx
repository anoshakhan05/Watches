import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-8 py-6">
            <nav className="max-w-7xl mx-auto flex items-center justify-between glass-header px-8 py-4 rounded-xl border border-primary/10 transition-all duration-300">
                <div className="flex items-center gap-12">
                    <Link to="/" className="text-2xl font-serif tracking-widest text-primary font-bold">
                        AETERNA
                    </Link>
                    <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-white/70">
                        <Link to="/collection" className="hover:text-primary transition-colors">Collections</Link>
                        <Link to="/story" className="hover:text-primary transition-colors">Heritage</Link>
                        <Link to="/contact" className="hover:text-primary transition-colors">Boutique</Link>
                        <Link to="/lookbook" className="hover:text-primary transition-colors">Lookbook</Link>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <button className="text-white/70 hover:text-primary transition-colors">
                        <Search className="w-5 h-5" />
                    </button>
                    <button className="text-white/70 hover:text-primary transition-colors relative">
                        <ShoppingBag className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 bg-primary text-[10px] text-black font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
                    </button>
                    <div className="h-4 w-[1px] bg-white/20 mx-2"></div>
                    <Link to="/contact" className="hidden lg:block text-[10px] uppercase tracking-[0.2em] font-bold border border-primary/30 hover:bg-primary hover:text-black transition-all px-4 py-2 rounded">
                        Book Appointment
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
