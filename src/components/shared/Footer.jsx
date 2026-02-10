import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="pt-24 pb-12 px-8 bg-[#0a0a1a] border-t border-white/5">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-white uppercase tracking-wider">FleetLedger</span>
                        </Link>
                        <p className="text-white/40 text-[0.9375rem] leading-relaxed">
                            Smart solution for managing your modern fleet. Track operations, ownership, and profitability in one place.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><Link to="/features" className="text-white/40 hover:text-primary transition-colors">Features</Link></li>
                            <li><Link to="/pricing" className="text-white/40 hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link to="/demo" className="text-white/40 hover:text-primary transition-colors">Demo</Link></li>
                            <li><Link to="/api" className="text-white/40 hover:text-primary transition-colors">API</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-white/40 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/blog" className="text-white/40 hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link to="/careers" className="text-white/40 hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="text-white/40 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-white/40 text-sm mb-4">Get the latest updates and industry news.</p>
                        <div className="join w-full">
                            <input className="input input-bordered join-item bg-white/5 border-white/10 text-white w-full focus:outline-none" placeholder="email@example.com" />
                            <button className="btn btn-primary join-item px-4">Join</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-white/30 text-sm">
                    <p>© {new Date().getFullYear()} FleetLedger Inc. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
