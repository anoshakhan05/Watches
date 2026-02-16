import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Camera } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="mt-20 border-t border-slate-900 bg-background-dark py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
                <div className="flex items-center gap-2 opacity-50">
                    <span className="material-icons-outlined text-sm">precision_manufacturing</span>
                    <span className="text-sm font-bold tracking-widest text-center md:text-left">AETERNA MANUFACTURE</span>
                </div>
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] font-bold tracking-[0.3em] text-slate-500 text-center">
                    <a href="#" className="hover:text-primary transition-colors">PRIVACY POLICY</a>
                    <a href="#" className="hover:text-primary transition-colors">TERMS</a>
                    <Link to="/contact" className="hover:text-primary transition-colors">CONTACT</Link>
                </div>
                <div className="flex gap-6">
                    <a href="#" className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                        <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                        <Camera className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
