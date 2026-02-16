import React, { useRef, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Grid, List, Eye, ShoppingBag, Filter, X } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { AnimatePresence, motion } from 'framer-motion';

const Collection = () => {
    const containerRef = useRef(null);
    const sidebarRef = useRef(null);
    const gridRef = useRef(null);
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    useGSAP(() => {
        // Animate Sidebar
        gsap.from(sidebarRef.current, {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2
        });

        // Animate Header Text
        gsap.from(".collection-header", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.4
        });

        // Animate Product Cards with Stagger
        gsap.fromTo(".product-card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                delay: 0.6
            }
        );

    }, { scope: containerRef });

    const products = [
        {
            id: 1,
            name: "Aethelgard Obsidian X",
            price: "$12,400",
            type: "CHRONOGRAPH",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhysZ1mW6ck8ZYMWqPwc8SNyS82ueTr-DCqPHSKg3xkBX7IiLe4V5z0epRVIwNR3rmV7e8L41ljqGl8Erof1-NcgzkUXaXQmqv55oQokPUXYvGVjXpniGu5J41lehhHyKDwjmFM30xn4TcDk6GBGRucSDCmyIqfZKH8g-F8ocyKB5-833Z3h55FczQabH3a1J8qxrIvVtyYA_wC8BxmdmocFK3brUP0Gt51KRT3uq3XtstKrXCmu3pzSwWIBVGWr1_kxFdHF-nB35d",
            tag: "NEW ERA",
            colors: ["bg-slate-800", "bg-primary/20"]
        },
        {
            id: 2,
            name: "Zenith Stellar Blue",
            price: "$24,900",
            type: "TOURBILLON",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5puikYYdmcVkbk8MpwdschfwZk4_vz8c6URNmo20TZxgSjmxyHQU-3NNMXy78iZ_cycvVHVJQQFM9s9SU2faXVj6WEPxWo3swY9X0c-i-Xou-hiuKuZVo-ShLXOtpo5FhU-R9tFrK3uOAXyIjf5HCDsREXI_DdJIKSZLhi0HwQln-2mG5SCu7o-IGyOzJSdet8wa7Tq7Dwd5WGp5Bd_0pCR-60AEtmSanfYqsLOLB8WWHAnIW7rVB1UCJ-FtUQPkdYCBLAs8CUyr5",
            tag: "ONLY 5 LEFT",
            colors: ["bg-blue-600", "bg-slate-800"]
        },
        {
            id: 3,
            name: "Vanguard Rose Gold",
            price: "$18,200",
            type: "AUTOMATIC",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmng-sjmnkdjm2PeZFfqIz-BeJBY8gG6F8QkVszVSBzJpGae2xZhQwledn_cez9j4jClaaZpJPoYaljGAmJl3vj8WjfPu1VjW-yP-4IgymAZ2NOt_pw46GCYi9Nu1Y2sjixybv2DsUyxUPdMUuZqly7UOnQmsvm1g7cKfMeaQvVJHCYKBCsbPFcLXE6923oEeCXKHSCNySER6W-hNhLfIRdgiFJHFBN5-6yoDT73Z29gkd37fQmkyH1mIsUtnYPLdtTulL4ZRhJjh8",
            tag: null,
            colors: ["bg-amber-700"]
        },
        {
            id: 4,
            name: "Celestial Ivory",
            price: "$8,900",
            type: "QUARTZ",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBy2_f_HUGXZ-w0T1CCpZiDsCvwipqTcSAfrdGn7I6l8Yj71f4HOMGgTgQPNkK6660Afue0B2DrwcLw2PZ-cBR6MKh0W5pqdQiD-eFV2puU_izzdQpIIhv8B8Xk0YkESLzj488WdevaqZtxh19P3EhgsE3x_1uxU8a5YhcAQooQJMVetszGgw6WJZA-Dw2yblP7f_59XMDAU0BSEu390HnwnfdTGn-_EvXnOsWldXMniBbri21rGfQVa2qkHO1MXN_HBY-uHfH6Y52-",
            tag: null,
            colors: ["bg-slate-200"]
        },
        {
            id: 5,
            name: "Heritage Gold 1948",
            price: "$42,000",
            type: "MANUAL CALIBRE",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmbqtCWlzTs-JklqgiC_Lc7yMldltvDtrGI_5cYrqkMEq9gGc2mIxsuAGlUgS56axserdqQxZxLj6BRocyL_-dZlPy1y8alzmn9_WzpH9Rfnj4gBwxtWlzEyj9YZGjoHppL7d_GD-cxfCV0m_KYWCsHS7ncFdblkon9tH109gp95s0Zt67GxD1Qz4v5dPhCr4gYrPshpta1BanY5uWJv-3rfWVX3bCWCPgf2fU-6usXbn_YFwSdNEoVdREHGkpSsnvZMaL_2BXRYSr",
            tag: "LIMITÉ",
            colors: ["bg-primary"]
        },
        {
            id: 6,
            name: "Titanium Skeleton",
            price: "$15,750",
            type: "AUTOMATIC",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE1x7v07wS7hiLS1nk8WwHnahbbgxECuFy9Vb0P2Ooh9-RQ7eSmNW4wppE3I1h8EtC1V_OWYT2WpwwNO2TUKygny3LdFYZa9f1Smi1cK1j3zaMBj0G44eJ-nv9h0legPaT5O3LRUwAZJ6cLvYNBChgYPOToVApJjftgWKFB4H7FD_pv9uw_R_KSYH8NnhCqlCwsuG7Op9plFV49soZdpjBAeOFwA20taUcFXl2eAO-AuqEH395XSw9yeoZcaqAlGvWFr-sKjgivlbP",
            tag: null,
            colors: ["bg-slate-400"]
        }
    ];

    const toggleFilters = () => setIsFiltersOpen(!isFiltersOpen);

    const FilterContent = () => (
        <div className="space-y-10">
            <div>
                <h3 className="text-[11px] font-bold tracking-[0.3em] text-slate-500 mb-6 uppercase">View Mode</h3>
                <div className="flex bg-slate-900/50 p-1 rounded-lg">
                    <button className="flex-1 py-2 flex items-center justify-center rounded-md bg-primary text-black">
                        <Grid className="w-4 h-4" />
                    </button>
                    <button className="flex-1 py-2 flex items-center justify-center rounded-md text-slate-400 hover:text-primary">
                        <List className="w-4 h-4" />
                    </button>
                </div>
            </div>
            {/* Filters */}
            <div>
                <h3 className="text-[11px] font-bold tracking-[0.3em] text-slate-500 mb-6 uppercase">Movement</h3>
                <div className="grid grid-cols-2 gap-2">
                    {['Automatic', 'Tourbillon', 'Manual', 'Quartz'].map(m => (
                        <button key={m} className={`px-3 py-2 text-[10px] border rounded-md uppercase transition-colors ${m === 'Tourbillon' ? 'border-primary bg-primary/10 text-primary' : 'border-slate-700 hover:border-primary'}`}>
                            {m}
                        </button>
                    ))}
                </div>
            </div>

            <div className="pt-6 border-t border-slate-800/50">
                <button className="w-full py-4 bg-primary/10 text-primary border border-primary/20 text-xs font-bold tracking-widest hover:bg-primary hover:text-black transition-all rounded-md">
                    RESET FILTERS
                </button>
            </div>
        </div>
    );

    return (
        <div ref={containerRef} className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-display min-h-screen selection:bg-primary selection:text-black">
            <Navbar />

            <main className="max-w-[1600px] mx-auto px-4 md:px-6 py-8 flex gap-8 pt-24 md:pt-32">
                {/* Desktop Sidebar */}
                <aside ref={sidebarRef} className="w-72 flex-shrink-0 sticky top-28 h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar pr-4 hidden lg:block">
                    <FilterContent />
                </aside>

                {/* Mobile Filter Drawer */}
                <AnimatePresence>
                    {isFiltersOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '-100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-0 z-50 bg-background-dark/95 backdrop-blur-xl p-6 lg:hidden"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-xl font-serif">Filters</h2>
                                <button onClick={toggleFilters} className="text-white hover:text-primary">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <FilterContent />
                            <button onClick={toggleFilters} className="w-full mt-8 py-4 bg-primary text-black font-bold uppercase tracking-widest rounded-md">
                                Show Results
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Product Grid */}
                <section className="flex-1">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4 collection-header">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 uppercase">Horizon Series</h1>
                            <p className="text-slate-500 text-sm">24 Timeless pieces curated for the modern explorer.</p>
                        </div>

                        {/* Mobile Filter Button */}
                        <button onClick={toggleFilters} className="lg:hidden flex items-center gap-2 px-4 py-2 border border-primary/30 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all">
                            <Filter className="w-4 h-4" />
                            Filters
                        </button>
                    </div>

                    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {products.map(product => (
                            <div key={product.id} className="glass-card rounded-xl p-6 group relative overflow-hidden product-card">
                                {product.tag && (
                                    <div className="absolute top-6 right-6 z-10">
                                        <span className={`px-2 py-1 text-[10px] font-bold tracking-tighter rounded-sm ${product.tag === 'LIMITÉ' ? 'bg-primary text-black' : product.tag === 'NEW ERA' ? 'bg-primary/90 text-black' : 'bg-slate-800 text-white'}`}>
                                            {product.tag}
                                        </span>
                                    </div>
                                )}

                                <div className="h-64 flex items-center justify-center mb-8 relative">
                                    <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-50 group-hover:scale-100 transition-transform duration-700"></div>
                                    <img src={product.image} alt={product.name} className="h-full w-full object-contain watch-shadow relative z-10" />

                                    <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                        <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary transition-colors">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary transition-colors">
                                            <ShoppingBag className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-primary text-[10px] font-bold tracking-[0.2em] mb-1">{product.type}</p>
                                    <h2 className="text-xl font-bold mb-4">{product.name}</h2>
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-light">{product.price}</span>
                                        <div className="flex gap-1">
                                            {product.colors.map((color, i) => (
                                                <div key={i} className={`w-3 h-3 rounded-full ${color} ring-1 ring-offset-2 ring-offset-black ring-slate-400`}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Collection;
