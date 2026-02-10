import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = async () => {
        try {
            await logOut();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a1a]/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-105">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">Fleet<span className="text-gradient">Ledger</span></span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link to="/features" className="text-white/70 hover:text-white transition-colors">Features</Link>
                    <Link to="/pricing" className="text-white/70 hover:text-white transition-colors">Pricing</Link>
                    <Link to="/demo" className="text-white/70 hover:text-white transition-colors">Demo</Link>

                    {user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img
                                        alt="User Avatar"
                                        src={user?.photoURL || "https://i.pravatar.cc/150?u=guest"} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0f1629] border border-white/10 rounded-box w-52 text-white">
                                <li className="px-4 py-2 opacity-50 text-xs uppercase font-bold">Account</li>
                                <li>
                                    <Link to="/profile" className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li><Link to="/settings">Settings</Link></li>
                                <div className="divider my-0 opacity-10"></div>
                                <li><button onClick={handleLogout} className="text-red-400 hover:text-red-300">Logout</button></li>
                            </ul>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Link to="/login" className="text-white font-medium hover:text-primary transition-colors">Login</Link>
                            <Link to="/register" className="btn btn-primary btn-sm px-6 rounded-lg font-semibold">Get Started</Link>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

