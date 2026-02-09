import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-8 py-24 pb-16 overflow-hidden font-sans">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-hero"></div>
                <div className="absolute inset-0 hero-grid-pattern"></div>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-50 bg-gradient-to-br from-indigo-500 to-violet-500 -top-[200px] -left-[200px] animate-hero-float"></div>
                    <div className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-50 bg-gradient-to-br from-cyan-400 to-blue-500 -bottom-[150px] -right-[100px] animate-hero-float [animation-delay:-5s]"></div>
                    <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-50 bg-gradient-to-br from-emerald-500 to-teal-400 top-[60%] left-[20%] animate-hero-float [animation-delay:-10s]"></div>
                    <div className="absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-30 bg-gradient-to-br from-amber-500 to-red-500 top-[20%] right-[20%] animate-hero-float [animation-delay:-15s]"></div>
                </div>
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="absolute rounded-full bg-indigo-500/60 animate-[particle-rise_var(--duration)_var(--delay)_linear_infinite] bottom-[-10px]" style={{
                            '--delay': `${Math.random() * 5}s`,
                            '--duration': `${15 + Math.random() * 10}s`,
                            left: `${Math.random() * 100}%`,
                            width: `${2 + Math.random() * 4}px`,
                            height: `${2 + Math.random() * 4}px`
                        }}></div>
                    ))}
                </div>
            </div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Hero Content */}
                <div className="animate-fade-in-up text-center lg:text-left">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 px-4 py-2 pl-3 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-6 cursor-pointer transition-all duration-300 hover:bg-indigo-500/15 hover:border-indigo-500/50 hover:-translate-y-0.5 animate-fade-in-up [animation-delay:0.1s]">
                        <span className="flex items-center justify-center w-6 h-6 bg-gradient-primary rounded-full text-white">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
                                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span className="text-sm font-medium text-white/90">New: Multi-owner tracking now available</span>
                        <span className="text-indigo-400 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-[-0.03em] mb-6 animate-fade-in-up [animation-delay:0.2s]">
                        <span className="block text-white">Smart Fleet & Equipment</span>
                        <span className="block text-gradient">Management, Simplified.</span>
                    </h1>

                    {/* Sub-text */}
                    <p className="text-lg sm:text-xl leading-[1.7] text-white/65 mb-10 max-w-[540px] mx-auto lg:mx-0 animate-fade-in-up [animation-delay:0.3s]">
                        Track trucks, excavators, shared ownership, income, and expenses — all in one powerful system.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 mb-12 justify-center lg:justify-start flex-col sm:flex-row animate-fade-in-up [animation-delay:0.4s]">
                        <Link to="/register" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-white btn-primary rounded-xl transition-all duration-300 hover:-translate-y-0.5 group">
                            <span>Get Started Free</span>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link to="/demo" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-white/5 border border-white/10 backdrop-blur-[10px] rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                <polygon points="10,8 16,12 10,16" fill="currentColor" />
                            </svg>
                            <span>Watch Demo</span>
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-in-up [animation-delay:0.5s]">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-[3px] border-[#0f1629] overflow-hidden bg-gradient-to-br from-indigo-400 to-violet-500 -ml-2 first:ml-0" style={{
                                    background: `linear-gradient(135deg, hsl(${i * 30 + 200}, 70%, 60%), hsl(${i * 30 + 230}, 70%, 50%))`
                                }}>
                                    <div className="w-full h-full flex items-center justify-center text-xs font-semibold text-white">{i}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-400">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-sm text-white/60">Trusted by <strong className="text-white font-semibold">2,500+</strong> fleet managers</span>
                        </div>
                    </div>
                </div>

                {/* Hero Visual */}
                <div className="relative animate-fade-in-up [animation-delay:0.3s] hidden lg:block">
                    <div className="bg-[rgba(15,22,41,0.8)] backdrop-blur-xl border border-white/10 rounded-[20px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)_inset]">
                        <div className="flex items-center gap-4 px-6 py-4 bg-white/[0.03] border-b border-white/[0.08]">
                            <div className="flex gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                            </div>
                            <span className="text-sm font-medium text-white/60">Fleet Dashboard</span>
                        </div>
                        <div className="p-6 flex flex-col gap-6">
                            {/* Stats Cards */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10 hover:-translate-y-0.5">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                            <rect x="1" y="3" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
                                            <path d="M16 8H20L23 11V16H16V8Z" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xl font-bold text-white">24</span>
                                        <span className="text-xs text-white/50">Active Vehicles</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10 hover:-translate-y-0.5">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/15 text-green-400">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                            <path d="M12 2V22M17 5H9.5C8.57 5 7.68 5.37 7.02 6.03C6.37 6.68 6 7.57 6 8.5C6 9.43 6.37 10.32 7.02 10.97C7.68 11.63 8.57 12 9.5 12H14.5C15.43 12 16.32 12.37 16.97 13.03C17.63 13.68 18 14.57 18 15.5C18 16.43 17.63 17.32 16.97 17.97C16.32 18.63 15.43 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xl font-bold text-white">$48.2K</span>
                                        <span className="text-xs text-white/50">Monthly Revenue</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10 hover:-translate-y-0.5">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xl font-bold text-white">12</span>
                                        <span className="text-xs text-white/50">Equipment Units</span>
                                    </div>
                                </div>
                            </div>

                            {/* Mini Chart */}
                            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm font-medium text-white/70">Revenue Overview</span>
                                    <span className="text-xs font-semibold px-2 py-1 rounded-md bg-green-500/15 text-green-400">+12.5%</span>
                                </div>
                                <div className="flex items-end gap-2 h-20">
                                    {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                                        <div key={i} className="flex-1 bg-gradient-to-t from-indigo-500 to-violet-500 rounded-t animate-[chart-grow_1s_ease-out_forwards]" style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-[10%] -right-5 flex items-center gap-2 px-4 py-3 bg-[rgba(15,22,41,0.9)] backdrop-blur-[10px] border border-white/10 rounded-xl text-[0.8125rem] font-medium text-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] animate-float-bounce max-lg:hidden">
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green-400">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <polyline points="22,4 12,14.01 9,11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Real-time Sync</span>
                    </div>
                    <div className="absolute bottom-[20%] -left-5 flex items-center gap-2 px-4 py-3 bg-[rgba(15,22,41,0.9)] backdrop-blur-[10px] border border-white/10 rounded-xl text-[0.8125rem] font-medium text-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] animate-float-bounce [animation-delay:-2s] max-lg:hidden">
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-blue-400">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <span>Secure Data</span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 animate-fade-in-up [animation-delay:0.6s] max-md:hidden">
                <div className="w-6 h-10 border-2 border-white/30 rounded-xl flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white rounded animate-[scroll-bounce_1.5s_ease-in-out_infinite]"></div>
                </div>
                <span className="text-xs text-white/40 uppercase tracking-widest">Scroll to explore</span>
            </div>
        </section>
    );
};

export default Hero;
