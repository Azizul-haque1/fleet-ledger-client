import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';

const AdminLayout = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleLogout = async () => {
        await logOut();
        navigate('/login');
    };

    const sidebarItems = [
        { name: 'Dashboard', path: '/admin', icon: '📊' },
        { name: 'Fleet', path: '/admin/fleet', icon: '🚚' },
        { name: 'Records', path: '/admin/records', icon: '🧾' },
        { name: 'Workforce', path: '/admin/workforce', icon: '👥' },
        { name: 'Finance', path: '/admin/finance', icon: '💰' },
        { name: 'Users', path: '/admin/users', icon: '🔐' },
        { name: 'Settings', path: '/admin/settings', icon: '⚙️' },
    ];

    return (
        <div className="min-h-screen bg-[#060b18] text-white flex">
            {/* Sidebar */}
            <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-[#0a0f1e] border-r border-white/5 transition-all duration-300 flex flex-col fixed h-full z-50`}>
                {/* Sidebar Header */}
                <div className="p-6 flex items-center gap-3 border-b border-white/5">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">FL</span>
                    </div>
                    {isSidebarOpen && <span className="font-bold text-lg tracking-tight">Fleet<span className="text-indigo-400">Ledger</span></span>}
                </div>

                {/* Sidebar Navigation */}
                <nav className="flex-grow p-4 space-y-2 mt-4">
                    {sidebarItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/admin'}
                            className={({ isActive }) =>
                                `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                    ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                                    : 'text-white/50 hover:bg-white/5 hover:text-white'
                                }`
                            }
                        >
                            <span className="text-xl">{item.icon}</span>
                            {isSidebarOpen && <span className="font-medium">{item.name}</span>}
                        </NavLink>
                    ))}
                </nav>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-white/5">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-4 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all duration-200 w-full"
                    >
                        <span className="text-xl">🚪</span>
                        {isSidebarOpen && <span className="font-medium">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
                {/* Topbar */}
                <header className="h-16 bg-[#0a0f1e]/50 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-8 sticky top-0 z-40">
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white/70">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="flex flex-col items-end mr-2">
                            <span className="text-sm font-semibold">{user?.displayName || 'Admin'}</span>
                            <span className="text-xs text-white/40">{user?.email}</span>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden ring-2 ring-indigo-500/20">
                            <img src={user?.photoURL || 'https://i.pravatar.cc/150'} alt="Profile" />
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
