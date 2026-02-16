import React, { useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowDown, ArrowRight, ArrowLeft } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const watchRef = useRef(null);
    const scrollTriggerRef = useRef(null);

    useGSAP(() => {
        // Hero Animations
        gsap.from(textRef.current.children, {
            y: 50,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.5
        });

        gsap.from(watchRef.current, {
            y: 100,
            opacity: 0,
            duration: 2,
            ease: "power2.out",
            delay: 0.2
        });

        // Scroll Trigger Animation for Voices Section
        gsap.from(".trust-logo", {
            scrollTrigger: {
                trigger: scrollTriggerRef.current,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out"
        });

        gsap.from(".voice-content", {
            scrollTrigger: {
                trigger: scrollTriggerRef.current,
                start: "top 70%",
            },
            y: 50,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out"
        });

    }, { scope: heroRef });

    return (
        <div ref={heroRef} className="bg-background-dark font-display text-white selection:bg-primary selection:text-black overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-background-dark"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rim-light"></div>
                    <div className="absolute inset-0 opacity-40 mix-blend-screen smoke-overlay"></div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden z-10">
                    <h2 className="font-serif text-[12vw] leading-none text-white/[0.03] italic translate-y-[-10%] whitespace-nowrap">
                        HOROLOGICAL EXCELLENCE
                    </h2>
                </div>

                <div className="relative z-20 w-full max-w-4xl aspect-square flex items-center justify-center">
                    <div ref={watchRef} className="relative z-20 animate-float watch-shadow">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDojfs4qyp5DxeFyojL5e4pQqukyF1HOLsDv_vWDUJUitQP_ujqpXa4bgiAPQKd_vKuwu1-aG-mKNZqCwMnN7wbS6J4kakyjwWrsLdn9qkOJg184ZlrQXOURAX2B9q36EqV7yS14QBi6tnqbPChoYuu-8g4pMm6u8UciUwAMcR3ba3lCyKPcSjaZ8ZBUp_BiZ1Q3qkxEG6XYtXIsz2E7CsRnxt-hhYdFLQEIgiCrqJsoE4lQN-cBr9pXqsa7XNDyvz2W4JeRBH9Q-vG"
                            alt="Luxury skeleton watch"
                            className="w-[300px] md:w-[450px] h-auto object-contain drop-shadow-[0_35px_35px_rgba(242,204,13,0.15)]"
                        />
                    </div>

                    <div ref={textRef} className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center">
                        <h1 className="font-serif text-6xl md:text-8xl tracking-tight text-primary text-glow leading-none mb-4">
                            TIMELESS PRECISION
                        </h1>
                        <p className="font-display text-lg md:text-2xl tracking-[0.5em] text-white/80 font-light uppercase">
                            REDEFINED
                        </p>
                        <div className="mt-12">
                            <button className="group relative px-10 py-4 overflow-hidden rounded-full border border-primary bg-transparent text-primary hover:text-black transition-colors duration-500">
                                <span className="absolute inset-0 w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full"></span>
                                <span className="relative z-10 font-bold uppercase tracking-widest text-xs">Explore the Collection</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary/60 font-medium">Scroll to Discover</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-primary/60 via-primary/20 to-transparent"></div>
                </div>
            </section>

            {/* Voices of Excellence Section */}
            <section ref={scrollTriggerRef} className="relative py-32 bg-background-dark overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDznmx4ZiKix4olWjyo-DsT3JGuwANsDz0hJcfC8595RY9tSJ3hgD2FnPg1m_d9E57R0odBhVGeP-oyZeUH2R6zFZG_0ujtttdLWuzBQkI-f5DPLsn0ly3gCc7MtPGDCCzUumHIi3YnvnCPll-brERPo0gRcvRzCUqGzl3Nrw__Iu7s2VR38c5vu1ZJV4e-Vdcz-B2pjlgE0CYgmjJP4JNowWOF-4SodphyP6gEHwK-nlB3v68qUBxcRCtxKUeqZ_bD3vcPrC1EgzPX"
                        alt="Mechanical Watch Movement"
                        className="w-full max-w-5xl blurred-movement-bg animate-pulse"
                        style={{ animationDuration: '10s' }}
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-8">
                    {/* Trust Logos */}
                    <div className="flex flex-wrap items-center justify-between gap-12 border-b border-white/10 pb-20 opacity-80">
                        {[
                            { icon: "verified", title: "Swiss Watch", subtitle: "Federation Accredited" },
                            { icon: "diamond", title: "GIA Certified", subtitle: "Gemstone Excellence" },
                            { icon: "workspace_premium", title: "Grand Prix d'Horlogerie", subtitle: "Laureate 2023" },
                            { icon: "architecture", title: "Haute Horlogerie", subtitle: "Foundation Partner" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 trust-logo">
                                <span className="material-icons text-4xl">{item.icon}</span>
                                <div className="flex flex-col">
                                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold">{item.title}</span>
                                    <span className="text-[8px] tracking-[0.1em] uppercase font-light">{item.subtitle}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Testimonial */}
                    <div className="pt-32 text-center max-w-4xl mx-auto voice-content">
                        <h3 className="text-[10px] tracking-[0.4em] uppercase text-primary/60 font-medium mb-16">Voices of Excellence</h3>
                        <div className="relative">
                            <span className="absolute -top-12 -left-8 text-primary/10 text-9xl font-serif">“</span>
                            <p className="font-serif text-3xl md:text-5xl italic text-primary/90 leading-tight mb-12">
                                "The artisan's dedication to every microscopic gear is palpable. This isn't just a timepiece; it's the rhythm of a legacy worn on the wrist."
                            </p>
                            <div className="flex flex-col items-center gap-2">
                                <div className="h-[1px] w-12 bg-primary/40 mb-4"></div>
                                <span className="text-sm tracking-[0.3em] font-light uppercase text-white/90">Julian Vance</span>
                                <span className="text-[10px] tracking-[0.15em] text-white/40 uppercase">Senior Curator, Heritage Foundation</span>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center gap-8 mt-16">
                            <button className="text-white/30 hover:text-primary transition-colors">
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                            </div>
                            <button className="text-white/30 hover:text-primary transition-colors">
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Side Navigation Dots */}
            <div className="fixed right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 items-center z-50 hidden lg:flex">
                {[
                    { label: "Experience", active: true },
                    { label: "Heritage", active: false },
                    { label: "Testimonials", active: false }
                ].map((item, i) => (
                    <div key={i} className="group cursor-pointer flex items-center gap-4">
                        <span className={`text-[10px] uppercase tracking-widest transition-opacity ${item.active ? 'text-primary opacity-100' : 'text-white/40 opacity-0 group-hover:opacity-100'}`}>
                            {item.label}
                        </span>
                        <div className={`w-1.5 h-1.5 rounded-full ${item.active ? 'bg-primary ring-4 ring-primary/20' : 'bg-white/20'}`}></div>
                    </div>
                ))}
            </div>

            <div className="fixed inset-0 pointer-events-none z-40 border-[20px] md:border-[40px] border-black/10 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]"></div>

        </div>
    );
};

export default Home;
