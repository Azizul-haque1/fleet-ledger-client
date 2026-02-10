import React from 'react';

const Users = () => {
    const users = [
        { id: 1, name: 'Azizul Haque', email: 'admin@fleetledger.com', role: 'Super Admin', lastLogin: '2 mins ago' },
        { id: 2, name: 'Sarah Manager', email: 'sarah@fleetledger.com', role: 'Manager', lastLogin: '1 hour ago' },
        { id: 3, name: 'John Dispatch', email: 'john@fleetledger.com', role: 'Staff', lastLogin: 'Active Now' },
    ];

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold mb-2">User Access Control</h1>
                    <p className="text-white/50">Manage administrative users and their permission levels.</p>
                </div>
                <button className="btn btn-primary">➕ Invite New User</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((u) => (
                    <div key={u.id} className="bg-[#0a0f1e] border border-white/5 rounded-3xl p-6 relative overflow-hidden">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-white/5 flex items-center justify-center text-xl">
                                🛡️
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{u.name}</h3>
                                <p className="text-white/40 text-sm">{u.email}</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                            <div>
                                <div className="text-[10px] uppercase font-bold tracking-widest text-white/30 mb-1">Assigned Role</div>
                                <div className="text-sm font-bold text-indigo-400">{u.role}</div>
                            </div>
                            <button className="text-xs font-bold uppercase tracking-widest hover:text-white text-white/40 transition-colors">Change</button>
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
                            <span className="text-xs text-white/30">Last active: <strong className="text-white/60">{u.lastLogin}</strong></span>
                            <div className="flex gap-2">
                                <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 text-white/40 hover:text-white transition-all">⚙️</button>
                                <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 text-white/40 hover:text-red-400 transition-all">🚫</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Role Permissions Summary */}
            <div className="bg-[#0a0f1e] border border-white/5 rounded-3xl p-8">
                <h3 className="font-bold text-xl mb-6">Role Definitions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h4 className="font-bold text-indigo-400 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                            Super Admin
                        </h4>
                        <p className="text-sm text-white/50">Full system access, including financial settings, user management, and configuration.</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-blue-400 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                            Manager
                        </h4>
                        <p className="text-sm text-white/50">Can manage fleet, workforce, and log records. Limited access to system-wide finance reports.</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-white/40 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-white/40"></span>
                            Staff
                        </h4>
                        <p className="text-sm text-white/50">Restricted to daily log entry and viewing assigned tasks. No management capabilities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
