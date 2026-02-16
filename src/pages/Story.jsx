import React, { useEffect, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowDown, Camera, Film, Globe } from 'lucide-react';

const Story = () => {
    return (
        <div className="bg-[#f8f8f5] dark:bg-[#221e10] text-stone-800 dark:text-stone-200 font-display min-h-screen selection:bg-primary selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <header className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Master watchmaker working"
                        className="w-full h-full object-cover opacity-40 scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCajWbnXrQxmdEZo6sa584G-Ygm6FDVYEokWmhzm1wBTk18PX8NQNz9DyTVs5swwB8scNIIfoxNuki4j5z28YBHfsMOW7YyspoV-XqrTftRi7u0d9Ji2Rucdkpqk6t5PrA8Zb0ptVUt-ZiVQAqHiJlmbSy8Ug7e0as-FKz4o-yhFDgg060vyKb-PlFEazp0cqsm0uT1LNxWh-RA8Z5k03E6wnV37muIDX2jzmdD_uhyiSCdYTH6MhLUzj-6ZyTRmFiIS1JCS5xd4cxz"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#221e10]/20 via-[#221e10]/60 to-[#221e10]"></div>
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <span className="text-primary uppercase tracking-[0.4em] text-sm mb-6 block animate-fadeIn">A Legacy of Precision</span>
                    <h1 className="text-6xl md:text-8xl font-light mb-8 italic leading-tight font-serif">The Hands of <br />Time</h1>
                    <p className="text-lg md:text-xl text-stone-400 font-light max-w-2xl mx-auto leading-relaxed">
                        Tracing two centuries of horological mastery, from the first spark of inspiration in the Swiss Alps to the pinnacle of modern mechanical art.
                    </p>
                    <div className="mt-12 animate-bounce flex justify-center">
                        <ArrowDown className="text-primary/50" />
                    </div>
                </div>
            </header>

            {/* Main Timeline Section */}
            <main className="relative py-32 overflow-hidden">
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-primary to-transparent opacity-30 hidden md:block"></div>

                {/* 1892 Milestone */}
                <section className="relative mb-64 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary absolute left-1/2 -translate-x-1/2 z-10 top-0 shadow-[0_0_0_4px_#221e10,0_0_0_6px_rgba(244,192,37,0.4)] hidden md:block"></div>
                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-20">
                        <div className="order-2 md:order-1 flex justify-end">
                            <div className="max-w-md text-right">
                                <span className="text-primary text-6xl md:text-8xl font-thin block mb-4 italic font-serif">1892</span>
                                <h3 className="text-3xl font-light mb-6 font-serif">The Founding Hearth</h3>
                                <p className="text-stone-400 leading-relaxed text-lg">
                                    In a small workshop nestled in the Jura Mountains, Elias Sterling assembled his first complication. It was not just a tool for time, but a statement of enduring human ingenuity.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-2xl group-hover:bg-primary/10 transition-all"></div>
                                <img
                                    alt="Vintage watch parts"
                                    className="rounded-lg shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZygL3a0LtoWQg6TZUXZZTtZ9jwSke7J5qNupxl87gC0xg84gHvXRP3WfQfvkD63iw-gkUGIS1XAEcvecuBMjXhKBA99RRUrzCoXnyxKHNwV9R8D_BDAT5F-LgSKEac-2P5pJriPMb7meRBbs13ikDyOZwzmJEowLJlaxS4Wp2bbeWOXekj7lU5MBIORnZKJJlxB5UYlWW8AUdJTDXdFn6NWUe4xEFL2JK937PIT_CV-NHP85L3ohccSdzZJR2ruz_wU-r2aFBVmc9"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Parallax Break */}
                <section className="h-[60vh] my-32 relative overflow-hidden flex items-center justify-center bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWnVxqEyzxZEQE7XOaxpmAT-EM2kUX1ampnS0AidxCfxcP_cqBPzMHtW5kph9uzMiFduyGzUyoZKS_ikKiPX6J4eA33i9Vx8ilH8TVt0PJiCkkUwOhwPHXwIZRmK2vwFrMAUU2yVLd3JjT--iIv5LKHENWFNtfUzB0vN88DhvFFplqgAQspwOEynW4m1c3xVJhV4SeeWno9CLSRv6Zm1hrpOWvtpBN15UJyOaOCrJvGO86ypHCllXbXQZUjwcV2WCwpkN40c4F-2YR')" }}>
                    <div className="absolute inset-0 bg-[#221e10]/50"></div>
                    <div className="relative z-10 text-center px-4">
                        <blockquote className="text-3xl md:text-5xl font-extralight italic max-w-4xl mx-auto leading-tight text-stone-200 font-serif">
                            "Precision is not an achievement, but a continuous pursuit of the impossible."
                        </blockquote>
                    </div>
                </section>

                {/* 1945 Milestone */}
                <section className="relative mb-64 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary absolute left-1/2 -translate-x-1/2 z-10 top-0 shadow-[0_0_0_4px_#221e10,0_0_0_6px_rgba(244,192,37,0.4)] hidden md:block"></div>
                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-20">
                        <div>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-primary/5 rounded-xl blur-2xl group-hover:bg-primary/10 transition-all"></div>
                                <img
                                    alt="Post-war era watch design"
                                    className="rounded-lg shadow-2xl relative z-10"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPl8pkS6S-OY_q-ytGo5MYEwbZ0HdKygTbG5fU6VF6PT1cYiBuZGc9V8863n_zCt0bStYn1azY63K0_a41BT-viMTIShFR4UtGYxuMYUWLYMfr7Jg6i47bZr3b47L7eVWazBnf74WyNFf_m1D578Hch-Mtoehq4nt908riFJrIIHMwWghVJ5Ut9msrKS_Ox4ib1Gr3iMrH2FzBZKOJgv072FgV1CZFYkHVWQ5NCkRJSS5qAEhdmuoA2h5kMPGLSD7ofkInBycZS0v2"
                                />
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <div className="max-w-md">
                                <span className="text-primary text-6xl md:text-8xl font-thin block mb-4 italic font-serif">1945</span>
                                <h3 className="text-3xl font-light mb-6 font-serif">The Golden Standard</h3>
                                <p className="text-stone-400 leading-relaxed text-lg">
                                    The introduction of the 'Aeterna' movement set a new global benchmark for accuracy. Adopted by aviators and explorers, it survived the harshest conditions known to man.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2008 Milestone */}
                <section className="relative mb-64 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary absolute left-1/2 -translate-x-1/2 z-10 top-0 shadow-[0_0_0_4px_#221e10,0_0_0_6px_rgba(244,192,37,0.4)] hidden md:block"></div>
                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-20">
                        <div className="order-2 md:order-1 flex justify-end">
                            <div className="max-w-md text-right">
                                <span className="text-primary text-6xl md:text-8xl font-thin block mb-4 italic font-serif">2008</span>
                                <h3 className="text-3xl font-light mb-6 font-serif">Silicon & Soul</h3>
                                <p className="text-stone-400 leading-relaxed text-lg">
                                    Integrating high-tech materials with traditional finishing. The first escapement crafted from monocrystalline silicon, virtually eliminating friction.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="bg-[#221e10] p-2 border border-primary/20 rounded-xl relative overflow-hidden group">
                                <img
                                    alt="Modern watch movement"
                                    className="rounded-lg shadow-inner group-hover:scale-105 transition-transform duration-1000"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3DttJbepQinXMgmDsWp3ZSzVdHygtOarEn8zcy2TA6WjgmQcvvmqoq-MGXobFpz-m9GamY-RZ1MkckrxWY_7F1CUrI3EMZTpISVvNKxB9RSePCI1C9uZdsiqEoSdHmZdJ8gXW7ihdmrlPsdy9PnF8Ktrx4aESxftSTm4udgM3qNDPGseJCShrNyX76P1OSKvPJwWer5Fq6khMR5rBX3ddqJEWa3PYDgodhCM0KGqLWfJz5UjS1sSPGU_ee64U4q-_Tui6xgOhg5uu"
                                />
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Modern Era Hero */}
            <section className="relative py-40 overflow-hidden bg-[#221e10]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-24">
                        <span className="text-primary uppercase tracking-widest text-sm mb-4 block">The Present Day</span>
                        <h2 className="text-5xl md:text-7xl font-light italic font-serif">The New Classic</h2>
                    </div>
                    <div className="relative max-w-6xl mx-auto h-[400px] md:h-[600px]">
                        <div className="absolute inset-0 bg-primary/5 rounded-full blur-[120px]"></div>
                        <img
                            alt="Modern luxury watch"
                            className="w-full h-full object-contain relative z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG8z0spJzSDGqDCh9G2csnaPazX3AoV38Gqmx-tPejwbBIvgN0QFKdtiZb5Ho91abnkmMWLJv6cIIZ7XUDdZ_foQjyi_wYzW2ZOOy2J6b2K4utb3hAiEVg25BhzgveYFre05Py8zd-8u3AVdNHT6Hhc_uNB4p4fINdH002Y8SWi_wVmFSJzJjkwbm5NMYbs_qfh5HkQgKZLL5rk0GI_MfXjqjWD5wyeOUEfarUaOayP3Uq0Qi6Fw_I__XqFRQDpi-Oh84uAgiDrk7u"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Story;
