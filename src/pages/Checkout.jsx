import React, { useState } from 'react';
import { ArrowLeft, Check, Lock, Shield, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [step, setStep] = useState(2); // 1: Shipping, 2: Payment, 3: Review

    return (
        <div className="bg-[#f8f8f5] dark:bg-[#1a170e] text-stone-800 dark:text-stone-200 min-h-screen flex flex-col font-sans transition-colors duration-300">
            {/* Header */}
            <header className="w-full py-8 px-6 md:px-12 flex justify-between items-center z-10 border-b border-primary/5">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary rounded-sm text-[#1a170e]">
                        <span className="font-serif font-bold text-xl">A</span>
                    </div>
                    <span className="text-xl font-bold tracking-widest uppercase">AETERNA</span>
                </div>
                <Link to="/collection" className="text-xs uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Shop
                </Link>
            </header>

            <main className="flex-grow flex flex-col items-center justify-start px-6 pb-20 max-w-7xl mx-auto w-full pt-12">
                {/* Progress Stepper */}
                <div className="w-full max-w-3xl mb-16">
                    <div className="flex justify-between items-center relative">
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/20 -z-0"></div>

                        {/* Step 1 */}
                        <div className="z-10 bg-[#f8f8f5] dark:bg-[#1a170e] px-4 flex flex-col items-center group cursor-pointer" onClick={() => setStep(1)}>
                            <div className={`w-8 h-8 rounded-full border flex items-center justify-center mb-2 transition-colors ${step > 1 ? 'bg-primary border-primary text-[#1a170e]' : 'border-primary/40 text-primary'}`}>
                                {step > 1 ? <Check className="w-4 h-4" /> : <span className="text-xs font-bold">01</span>}
                            </div>
                            <span className="text-[10px] uppercase tracking-tighter text-stone-500">Shipping</span>
                        </div>

                        {/* Step 2 */}
                        <div className="z-10 bg-[#f8f8f5] dark:bg-[#1a170e] px-4 flex flex-col items-center group">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 shadow-lg ${step === 2 ? 'bg-primary text-[#1a170e] shadow-primary/20' : 'bg-[#1a170e] border border-stone-600 text-stone-500'}`}>
                                <span className="text-xs font-bold">02</span>
                            </div>
                            <span className={`text-[10px] uppercase tracking-tighter font-bold ${step === 2 ? 'text-primary' : 'text-stone-500'}`}>Payment</span>
                        </div>

                        {/* Step 3 */}
                        <div className="z-10 bg-[#f8f8f5] dark:bg-[#1a170e] px-4 flex flex-col items-center group opacity-40">
                            <div className="w-8 h-8 rounded-full border border-stone-600 flex items-center justify-center mb-2">
                                <span className="text-xs font-bold">03</span>
                            </div>
                            <span className="text-[10px] uppercase tracking-tighter text-stone-500">Review</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 w-full items-start">
                    {/* Order Summary (Left) */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <div className="bg-[#1a170e]/40 backdrop-blur-md rounded-xl p-8 space-y-8 sticky top-8 border border-primary/10">
                            <h2 className="text-lg font-light tracking-widest uppercase border-b border-primary/10 pb-4">Order Summary</h2>
                            <div className="space-y-6">
                                {/* Static Items for Demo */}
                                {[
                                    { name: "Aethelgard Obsidian X", type: "Limited Edition / Black Leather", price: "$12,400", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhysZ1mW6ck8ZYMWqPwc8SNyS82ueTr-DCqPHSKg3xkBX7IiLe4V5z0epRVIwNR3rmV7e8L41ljqGl8Erof1-NcgzkUXaXQmqv55oQokPUXYvGVjXpniGu5J41lehhHyKDwjmFM30xn4TcDk6GBGRucSDCmyIqfZKH8g-F8ocyKB5-833Z3h55FczQabH3a1J8qxrIvVtyYA_wC8BxmdmocFK3brUP0Gt51KRT3uq3XtstKrXCmu3pzSwWIBVGWr1_kxFdHF-nB35d" },
                                    { name: "Celestial Ivory", type: "Quartz / 40mm", price: "$8,900", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBy2_f_HUGXZ-w0T1CCpZiDsCvwipqTcSAfrdGn7I6l8Yj71f4HOMGgTgQPNkK6660Afue0B2DrwcLw2PZ-cBR6MKh0W5pqdQiD-eFV2puU_izzdQpIIhv8B8Xk0YkESLzj488WdevaqZtxh19P3EhgsE3x_1uxU8a5YhcAQooQJMVetszGgw6WJZA-Dw2yblP7f_59XMDAU0BSEu390HnwnfdTGn-_EvXnOsWldXMniBbri21rGfQVa2qkHO1MXN_HBY-uHfH6Y52-" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-20 h-24 bg-[#2a261a] rounded overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                                            <img src={item.img} alt={item.name} className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-700" />
                                        </div>
                                        <div className="flex-grow flex flex-col justify-between py-1">
                                            <div>
                                                <h3 className="text-sm font-medium tracking-wide">{item.name}</h3>
                                                <p className="text-[11px] text-stone-500 uppercase tracking-widest mt-1">{item.type}</p>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <span className="text-xs text-stone-400">Qty: 01</span>
                                                <span className="text-sm font-semibold tracking-wider">{item.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-primary/10 space-y-3">
                                <div className="flex justify-between text-xs tracking-wide text-stone-400 uppercase">
                                    <span>Subtotal</span>
                                    <span>$21,300.00</span>
                                </div>
                                <div className="flex justify-between text-xs tracking-wide text-stone-400 uppercase">
                                    <span>Shipping</span>
                                    <span className="text-primary">Complimentary</span>
                                </div>
                                <div className="flex justify-between text-xs tracking-wide text-stone-400 uppercase">
                                    <span>Insurance</span>
                                    <span>$450.00</span>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-primary/20 flex justify-between items-baseline">
                                <span className="text-sm uppercase tracking-widest font-medium">Total</span>
                                <span className="text-2xl font-bold tracking-tighter text-primary">$21,750.00</span>
                            </div>

                            <div className="bg-primary/5 rounded-lg p-4 flex items-start gap-3 border border-primary/10">
                                <Shield className="text-primary w-5 h-5 flex-shrink-0" />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Luxe Security Guarantee</p>
                                    <p className="text-[10px] text-stone-400 mt-1 leading-relaxed">Your purchase includes a 2-year international warranty and certified authenticity documentation.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Form (Right) */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <div className="max-w-xl mx-auto lg:ml-0 space-y-12">
                            <section>
                                <h2 className="text-sm uppercase tracking-[0.3em] font-light mb-10 flex items-center gap-4">
                                    Payment Details
                                    <span className="h-[1px] flex-grow bg-primary/10"></span>
                                </h2>

                                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                    {/* Card Number */}
                                    <div className="relative group">
                                        <input
                                            className="w-full bg-transparent border-0 border-b border-primary/20 py-3 px-0 focus:ring-0 focus:border-primary text-lg tracking-[0.2em] placeholder-stone-700 transition-colors peer"
                                            id="card_number" type="text" placeholder=" "
                                        />
                                        <label className="absolute left-0 top-3 text-stone-500 text-xs uppercase tracking-widest pointer-events-none transition-all duration-300 origin-left peer-focus:-translate-y-6 peer-focus:text-primary peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-90" htmlFor="card_number">Card Number</label>
                                        <div className="absolute right-0 top-3">
                                            <CreditCard className="text-stone-500" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-8">
                                        {/* Expiry */}
                                        <div className="relative group">
                                            <input
                                                className="w-full bg-transparent border-0 border-b border-primary/20 py-3 px-0 focus:ring-0 focus:border-primary text-lg tracking-widest placeholder-stone-700 transition-colors peer"
                                                id="expiry" type="text" placeholder=" "
                                            />
                                            <label className="absolute left-0 top-3 text-stone-500 text-xs uppercase tracking-widest pointer-events-none transition-all duration-300 origin-left peer-focus:-translate-y-6 peer-focus:text-primary peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-90" htmlFor="expiry">MM / YY</label>
                                        </div>
                                        {/* CVV */}
                                        <div className="relative group">
                                            <input
                                                className="w-full bg-transparent border-0 border-b border-primary/20 py-3 px-0 focus:ring-0 focus:border-primary text-lg tracking-widest placeholder-stone-700 transition-colors peer"
                                                id="cvv" type="password" placeholder=" "
                                            />
                                            <label className="absolute left-0 top-3 text-stone-500 text-xs uppercase tracking-widest pointer-events-none transition-all duration-300 origin-left peer-focus:-translate-y-6 peer-focus:text-primary peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-90" htmlFor="cvv">CVC</label>
                                        </div>
                                    </div>

                                    <div className="relative group pt-4">
                                        <input
                                            className="w-full bg-transparent border-0 border-b border-primary/20 py-3 px-0 focus:ring-0 focus:border-primary text-lg uppercase tracking-widest placeholder-stone-700 transition-colors peer"
                                            id="card_name" type="text" placeholder=" "
                                        />
                                        <label className="absolute left-0 top-7 text-stone-500 text-xs uppercase tracking-widest pointer-events-none transition-all duration-300 origin-left peer-focus:-translate-y-6 peer-focus:text-primary peer-focus:scale-90 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-90" htmlFor="card_name">Name on Card</label>
                                    </div>

                                    <label className="flex items-center gap-3 cursor-pointer group pt-4">
                                        <div className="relative flex items-center">
                                            <input className="peer appearance-none w-5 h-5 border border-primary/40 rounded checked:bg-primary transition-all cursor-pointer" type="checkbox" defaultChecked />
                                            <Check className="absolute text-[#1a170e] w-3 h-3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                                        </div>
                                        <span className="text-xs uppercase tracking-widest text-stone-400 group-hover:text-stone-200 transition-colors">Billing address same as shipping</span>
                                    </label>

                                    <div className="pt-6">
                                        <button className="w-full bg-primary hover:bg-[#e0af20] text-[#1a170e] font-bold py-5 rounded-lg uppercase tracking-[0.25em] text-sm transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 overflow-hidden relative group">
                                            <span className="relative z-10 flex items-center gap-3">Complete Purchase <Lock className="w-4 h-4" /></span>
                                            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 transform skew-x-12"></div>
                                        </button>
                                        <p className="text-center text-[10px] text-stone-500 mt-6 uppercase tracking-widest">
                                            By clicking 'Complete Purchase', you agree to our <a href="#" className="underline hover:text-primary transition-colors">Terms of Service</a>
                                        </p>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            {/* Checkout Footer */}
            <footer className="w-full py-10 px-12 border-t border-primary/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] text-stone-500 uppercase tracking-widest">© 2024 AETERNA. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="text-[10px] text-stone-500 uppercase tracking-widest hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="text-[10px] text-stone-500 uppercase tracking-widest hover:text-primary transition-colors">Terms & Conditions</a>
                        <a href="#" className="text-[10px] text-stone-500 uppercase tracking-widest hover:text-primary transition-colors">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Checkout;
