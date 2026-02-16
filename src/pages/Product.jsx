import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Settings, Clock, Droplets, Diamond, ArrowRight, Rotate3d, ZoomIn, Box, PlayCircle } from 'lucide-react';

const Product = () => {
    const { id } = useParams();

    return (
        <div className="bg-[#f8f8f5] dark:bg-[#221e10] text-stone-800 dark:text-stone-100 font-display min-h-screen">
            <Navbar />

            <main className="relative grid grid-cols-1 lg:grid-cols-12 min-h-screen pt-20">
                {/* Left Section: 3D Interactive Stage */}
                <section className="lg:col-span-7 relative flex items-center justify-center overflow-hidden bg-stone-900/20">
                    <div className="relative w-full h-[60vh] lg:h-[80vh] flex items-center justify-center p-8">
                        <img
                            alt="Luxury gold watch detailed view"
                            className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(244,192,37,0.15)]"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJHIs8_ftH5uI0BzD92zylsExXEqHziQwVwO8nGYZ3I5OO1WUMUHCoq_KO_mUx_YsbfblSbvuuN99nthRhsigninR4gV5c0RJ0Em4o1LPsoY93jbkYnRXX1OrWwQp3VqBO4YryaIvlVzrq5CQtLeIOVmRoZffmXPoh5n4CxDSDST39nhr_O2NiE2UJi90SehIs83P7GH7cBMijKY7fo4WGO5U-kYrl2OsK22j7YL6qHCQn0nKdWZ1KYnVALt3DquWb_zAFb7xZwSYt"
                        />

                        {/* Interaction HUD */}
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                            <div className="flex items-center gap-4 bg-[#221e10]/80 px-6 py-3 rounded-full border border-primary/20 backdrop-blur-md">
                                <Rotate3d className="text-primary animate-pulse" />
                                <span className="text-xs tracking-[0.2em] uppercase font-medium">Click and drag to rotate</span>
                            </div>
                        </div>

                        {/* Hotspots */}
                        <div className="absolute top-[30%] left-[40%] group cursor-help">
                            <div className="w-3 h-3 bg-primary rounded-full animate-ping absolute opacity-75"></div>
                            <div className="w-3 h-3 bg-primary rounded-full relative"></div>
                            <div className="absolute left-6 top-0 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="bg-[#221e10]/60 backdrop-blur-md border border-primary/10 p-3 rounded-lg">
                                    <p className="text-[10px] uppercase text-primary font-bold mb-1">Casing</p>
                                    <p className="text-xs opacity-70">Hand-polished 18k yellow gold with satin finishes.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Side Controls */}
                    <div className="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                        <button className="w-12 h-12 bg-[#221e10]/60 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-primary/20 transition-all border border-primary/20">
                            <ZoomIn className="w-4 h-4" />
                        </button>
                        <button className="w-12 h-12 bg-[#221e10]/60 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-primary/20 transition-all border border-primary/20">
                            <Box className="w-4 h-4" />
                        </button>
                        <button className="w-12 h-12 bg-[#221e10]/60 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-primary/20 transition-all border border-primary/20">
                            <PlayCircle className="w-4 h-4" />
                        </button>
                    </div>
                </section>

                {/* Right Section: Product Details */}
                <section className="lg:col-span-5 px-8 lg:px-16 flex flex-col justify-center py-20 lg:py-0 bg-[#221e10] relative z-10">
                    <div className="max-w-md mx-auto lg:mx-0">
                        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] opacity-40 mb-8">
                            <span>Home</span>
                            <span>/</span>
                            <span>Chronos Series</span>
                            <span>/</span>
                            <span className="text-primary">G1 Zenith</span>
                        </nav>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight">
                            AURELIUS G1 <br />
                            <span className="text-primary/90">ZENITH</span>
                        </h1>

                        <div className="flex items-baseline gap-4 mb-8">
                            <span className="text-3xl font-light text-primary tracking-tight">$24,500</span>
                            <span className="text-xs uppercase tracking-widest opacity-40">Inc. VAT & Shipping</span>
                        </div>

                        <p className="text-stone-400 leading-relaxed mb-10 text-sm font-light">
                            The Aurelius G1 Zenith represents the pinnacle of horological engineering. Featuring a skeletonized movement and a handcrafted 18k yellow gold case, it is a testament to timeless craftsmanship and modern innovation.
                        </p>

                        {/* Technical Specs Grid */}
                        <div className="grid grid-cols-2 gap-px bg-primary/10 rounded-xl overflow-hidden mb-12 border border-primary/10">
                            {[
                                { icon: Settings, label: "Caliber", value: "Cal. 9901 Automatic" },
                                { icon: Clock, label: "Power Reserve", value: "72 Hours" },
                                { icon: Droplets, label: "Resistance", value: "100 Meters" },
                                { icon: Diamond, label: "Case Material", value: "18k Yellow Gold" },
                            ].map((spec, index) => (
                                <div key={index} className="bg-[#221e10] p-6 group hover:bg-[#2a2615] transition-colors">
                                    <spec.icon className="text-primary/60 w-5 h-5 mb-3 group-hover:text-primary transition-colors" />
                                    <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">{spec.label}</p>
                                    <p className="text-sm font-medium">{spec.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Actions */}
                        <div className="flex flex-col gap-4">
                            <button className="group bg-primary text-[#221e10] py-5 px-8 rounded-full font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 w-full hover:shadow-[0_0_20px_rgba(244,192,37,0.4)] transition-all duration-500">
                                Add to Collection
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                            <button className="border border-white/10 hover:border-primary/50 transition-all text-white/80 py-5 px-8 rounded-full font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 w-full">
                                Enquire for Bespoke Options
                            </button>
                        </div>

                        {/* Limited Edition Badge */}
                        <div className="mt-12 flex items-center gap-8 border-t border-white/5 pt-12">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#221e10] bg-gray-600"></div>
                                ))}
                            </div>
                            <div className="text-[10px] uppercase tracking-widest">
                                <p className="font-bold text-primary">Limited Edition</p>
                                <p className="opacity-50">Only 50 pieces available globally</p>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5">
                <div className="h-full bg-primary w-1/3 shadow-[0_0_10px_#f4c025]"></div>
            </div>
        </div>
    );
};

export default Product;
