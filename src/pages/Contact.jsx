import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Menu, Headset, ChevronDown } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-[#f8f8f5] dark:bg-[#0a0a0a] font-display text-white overflow-hidden selection:bg-primary/30 min-h-screen flex flex-col">
            <Navbar />

            <main className="relative flex-grow w-full flex items-center pt-24 min-h-screen">
                {/* Background Map Layer */}
                <div className="absolute inset-0 z-0">
                    <div className="relative w-full h-full grayscale brightness-[0.2] contrast-[1.2]">
                        <img
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0EDCqEPCFaKNAVRYegTVQl6tJawzKLLGMMKVaLMV2uKKWTcidtxMBcocwCD0Q5aEARHK_y4DoPRrouPoTp1DUI6JiM4Byl0QBfucuyQuKLG3Scz-5j5BaSRxIwYTvEFsyM7s_WClw4AbpEfFKK0sBj94llUZ1r1rWo2SUrzJAHGDczXyM31PGalwk5WRz0xDPsITaCcjd3qaUiHLcNio08oDti1j_78eN0OVrS-k6rD3fAeu10ByUnYswwURrrtuKH420tcgbDs72"
                            alt="World Map"
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)]"></div>
                    </div>

                    {/* Map Markers */}
                    {[{ top: '30%', left: '48%', name: 'Geneva Flagship', main: true }, { top: '40%', left: '20%', name: 'New York Atelier', main: false }, { top: '45%', left: '82%', name: 'Tokyo Ginza', main: false }].map((marker, i) => (
                        <div key={i} className="absolute group cursor-pointer" style={{ top: marker.top, left: marker.left }}>
                            <div className={`rounded-full ${marker.main ? 'w-3 h-3 bg-primary animate-pulse shadow-[0_0_0_0_rgba(244,192,37,0.7)]' : 'w-2 h-2 bg-primary/60'}`}></div>
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-4 py-2 rounded-full border border-primary/20 text-[10px] tracking-widest uppercase">
                                {marker.name}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row justify-between items-end gap-12 md:gap-20 w-full mb-12">
                    {/* Left Side: Information */}
                    <div className="w-full md:w-1/3 mb-12 md:mb-0">
                        <h1 className="text-4xl md:text-6xl font-light mb-6 md:mb-8 tracking-tighter leading-none">
                            Liaise with <br /> <span className="text-primary font-bold italic font-serif">Excellence.</span>
                        </h1>
                        <p className="text-primary/60 text-sm leading-relaxed mb-8 md:mb-12 max-w-sm tracking-wide">
                            Our master horologists and concierge team are at your disposal for private viewings and bespoke commissions.
                        </p>
                        <div className="space-y-8">
                            <div className="group cursor-pointer">
                                <p className="text-[10px] uppercase tracking-[0.4em] text-primary/40 mb-2">Global Headquarters</p>
                                <p className="text-lg font-light group-hover:text-primary transition-colors">Rue du Rhône 42, <br />1204 Genève, Switzerland</p>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-[10px] uppercase tracking-[0.4em] text-primary/40 mb-2">Client Services</p>
                                <p className="text-lg font-light group-hover:text-primary transition-colors">+41 22 310 00 00</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="w-full md:w-1/2 lg:w-1/3">
                        <div className="glass-card p-6 md:p-14 rounded-xl shadow-2xl bg-black/60 backdrop-blur-md border border-primary/10">
                            <h2 className="text-xl md:text-2xl font-light mb-6 md:mb-10 tracking-widest uppercase">Send Inquiry</h2>
                            <form className="space-y-6 md:space-y-10">
                                <div className="relative">
                                    <input className="w-full bg-transparent border-0 border-b border-primary/30 py-2 text-white placeholder-white/20 focus:ring-0 focus:border-primary transition-colors" placeholder="Full Name" type="text" />
                                </div>
                                <div className="relative">
                                    <input className="w-full bg-transparent border-0 border-b border-primary/30 py-2 text-white placeholder-white/20 focus:ring-0 focus:border-primary transition-colors" placeholder="Email Address" type="email" />
                                </div>
                                <div className="relative">
                                    <select className="w-full bg-transparent border-0 border-b border-primary/30 py-2 text-white/80 focus:ring-0 focus:border-primary appearance-none cursor-pointer">
                                        <option className="bg-[#0a0a0a]" value="">Interest / Collection</option>
                                        <option className="bg-[#0a0a0a]" value="legacy">Legacy Series</option>
                                        <option className="bg-[#0a0a0a]" value="astronomy">Celestial Edition</option>
                                        <option className="bg-[#0a0a0a]" value="bespoke">Bespoke Commission</option>
                                    </select>
                                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-primary/40 pointer-events-none w-4 h-4" />
                                </div>
                                <div className="relative">
                                    <textarea className="w-full bg-transparent border-0 border-b border-primary/30 py-2 text-white placeholder-white/20 focus:ring-0 focus:border-primary resize-none h-20" placeholder="Your Message"></textarea>
                                </div>
                                <button className="w-full bg-primary hover:bg-primary/90 text-[#0a0a0a] font-bold py-5 rounded-full uppercase tracking-[0.2em] text-xs transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/20">
                                    Send Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Floating Chat */}
                <div className="fixed bottom-10 right-10 z-50 flex items-center gap-4">
                    <div className="hidden lg:block bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-primary/20">
                        <p className="text-[10px] uppercase tracking-widest text-primary/80">Specialist Online</p>
                    </div>
                    <button className="w-16 h-16 bg-primary/10 backdrop-blur-xl border border-primary/30 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all group shadow-2xl">
                        <Headset className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
