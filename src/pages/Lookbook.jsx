import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Lookbook = () => {
    // Reusing images for the lookbook grid
    const images = [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDhysZ1mW6ck8ZYMWqPwc8SNyS82ueTr-DCqPHSKg3xkBX7IiLe4V5z0epRVIwNR3rmV7e8L41ljqGl8Erof1-NcgzkUXaXQmqv55oQokPUXYvGVjXpniGu5J41lehhHyKDwjmFM30xn4TcDk6GBGRucSDCmyIqfZKH8g-F8ocyKB5-833Z3h55FczQabH3a1J8qxrIvVtyYA_wC8BxmdmocFK3brUP0Gt51KRT3uq3XtstKrXCmu3pzSwWIBVGWr1_kxFdHF-nB35d",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA5puikYYdmcVkbk8MpwdschfwZk4_vz8c6URNmo20TZxgSjmxyHQU-3NNMXy78iZ_cycvVHVJQQFM9s9SU2faXVj6WEPxWo3swY9X0c-i-Xou-hiuKuZVo-ShLXOtpo5FhU-R9tFrK3uOAXyIjf5HCDsREXI_DdJIKSZLhi0HwQln-2mG5SCu7o-IGyOzJSdet8wa7Tq7Dwd5WGp5Bd_0pCR-60AEtmSanfYqsLOLB8WWHAnIW7rVB1UCJ-FtUQPkdYCBLAs8CUyr5",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCmng-sjmnkdjm2PeZFfqIz-BeJBY8gG6F8QkVszVSBzJpGae2xZhQwledn_cez9j4jClaaZpJPoYaljGAmJl3vj8WjfPu1VjW-yP-4IgymAZ2NOt_pw46GCYi9Nu1Y2sjixybv2DsUyxUPdMUuZqly7UOnQmsvm1g7cKfMeaQvVJHCYKBCsbPFcLXE6923oEeCXKHSCNySER6W-hNhLfIRdgiFJHFBN5-6yoDT73Z29gkd37fQmkyH1mIsUtnYPLdtTulL4ZRhJjh8",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBy2_f_HUGXZ-w0T1CCpZiDsCvwipqTcSAfrdGn7I6l8Yj71f4HOMGgTgQPNkK6660Afue0B2DrwcLw2PZ-cBR6MKh0W5pqdQiD-eFV2puU_izzdQpIIhv8B8Xk0YkESLzj488WdevaqZtxh19P3EhgsE3x_1uxU8a5YhcAQooQJMVetszGgw6WJZA-Dw2yblP7f_59XMDAU0BSEu390HnwnfdTGn-_EvXnOsWldXMniBbri21rGfQVa2qkHO1MXN_HBY-uHfH6Y52-",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCmbqtCWlzTs-JklqgiC_Lc7yMldltvDtrGI_5cYrqkMEq9gGc2mIxsuAGlUgS56axserdqQxZxLj6BRocyL_-dZlPy1y8alzmn9_WzpH9Rfnj4gBwxtWlzEyj9YZGjoHppL7d_GD-cxfCV0m_KYWCsHS7ncFdblkon9tH109gp95s0Zt67GxD1Qz4v5dPhCr4gYrPshpta1BanY5uWJv-3rfWVX3bCWCPgf2fU-6usXbn_YFwSdNEoVdREHGkpSsnvZMaL_2BXRYSr",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCE1x7v07wS7hiLS1nk8WwHnahbbgxECuFy9Vb0P2Ooh9-RQ7eSmNW4wppE3I1h8EtC1V_OWYT2WpwwNO2TUKygny3LdFYZa9f1Smi1cK1j3zaMBj0G44eJ-nv9h0legPaT5O3LRUwAZJ6cLvYNBChgYPOToVApJjftgWKFB4H7FD_pv9uw_R_KSYH8NnhCqlCwsuG7Op9plFV49soZdpjBAeOFwA20taUcFXl2eAO-AuqEH395XSw9yeoZcaqAlGvWFr-sKjgivlbP",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCajWbnXrQxmdEZo6sa584G-Ygm6FDVYEokWmhzm1wBTk18PX8NQNz9DyTVs5swwB8scNIIfoxNuki4j5z28YBHfsMOW7YyspoV-XqrTftRi7u0d9Ji2Rucdkpqk6t5PrA8Zb0ptVUt-ZiVQAqHiJlmbSy8Ug7e0as-FKz4o-yhFDgg060vyKb-PlFEazp0cqsm0uT1LNxWh-RA8Z5k03E6wnV37muIDX2jzmdD_uhyiSCdYTH6MhLUzj-6ZyTRmFiIS1JCS5xd4cxz"
    ];

    return (
        <div className="bg-[#f8f8f5] dark:bg-[#0a0a08] text-stone-800 dark:text-stone-200 font-display min-h-screen">
            <Navbar />

            <main className="pt-32 pb-20 px-4 md:px-8 max-w-[1800px] mx-auto">
                <div className="text-center mb-24 max-w-2xl mx-auto animate-fadeIn">
                    <h1 className="text-5xl md:text-7xl font-light mb-6 font-serif italic">Lookbook</h1>
                    <p className="text-stone-400 text-lg font-light leading-relaxed">
                        A visual journey through our latest campaign. Where timeless design meets modern living.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {images.map((src, i) => (
                        <div key={i} className={`group relative overflow-hidden rounded-xl bg-gray-900 ${i % 3 === 0 ? 'md:col-span-2 md:row-span-2 aspect-[4/3]' : 'aspect-[3/4]'} hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-500`}>
                            <img src={src} alt={`Lookbook ${i + 1}`} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-primary text-xs tracking-widest uppercase mb-2 block">Campaign 2024</span>
                                <h3 className="text-2xl font-serif italic text-white">The Art of Time</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Lookbook;
