import React from 'react';

const ManagerDashboard = () => {
    const todayStats = [
        { label: "Today's Work", value: "24 Trips / 18 Hours", icon: "📈", color: "text-blue-400" },
        { label: "Fuel Logged", value: "$1,240.00", icon: "⛽", color: "text-amber-400" },
        { label: "Active Drivers", value: "12 / 18", icon: "👥", color: "text-indigo-400" },
        { label: "Pending Approvals", value: "5 Items", icon: "⏳", color: "text-red-400" },
    ];

    const activeAssignments = [
        { id: 1, driver: "John Doe", vehicle: "Truck #04", work: "Stone Transport", started: "08:00 AM" },
        { id: 2, driver: "Mike Ross", vehicle: "Excavator #01", work: "Site Prep", started: "07:30 AM" },
        { id: 3, driver: "Sarah King", vehicle: "Truck #08", work: "Sand Delivery", started: "09:15 AM" },
    ];

    return (
        <div className="space-y-8 animate-fade-in-up">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Manager Control Hub</h1>
                    <p className="text-white/50">Oversee daily operations and approve field entries.</p>
                </div>
                <div className="flex gap-4">
                    <button className="btn btn-primary bg-indigo-600 border-none hover:bg-indigo-700">
                        ⚡ Quick Assign
                    </button>
                </div>
            </div>

            {/* Today's Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {todayStats.map((stat, i) => (
                    <div key={i} className="bg-[#0a0f1e] border border-white/5 p-6 rounded-2xl hover:border-indigo-500/30 transition-all duration-300 group">
                        <div className="flex items-center gap-4">
                            <div className="text-3xl bg-white/5 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                                {stat.icon}
                            </div>
                            <div>
                                <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest">{stat.label}</h3>
                                <p className={`text-lg font-bold mt-1 ${stat.color}`}>{stat.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Active Assignments */}
                <div className="lg:col-span-2 bg-[#0a0f1e] border border-white/5 rounded-2xl overflow-hidden">
                    <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
                        <h3 className="font-bold">Active On-Site Staff</h3>
                        <span className="badge badge-success badge-sm">Live</span>
                    </div>
                    <div className="p-0">
                        <table className="table w-full text-white/80">
                            <thead>
                                <tr className="border-white/5 text-white/40">
                                    <th>Driver / Op</th>
                                    <th>Vehicle</th>
                                    <th>Work Type</th>
                                    <th>Start Time</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activeAssignments.map(item => (
                                    <tr key={item.id} className="border-white/5 hover:bg-white/[0.02]">
                                        <td className="font-semibold text-white">{item.driver}</td>
                                        <td>{item.vehicle}</td>
                                        <td>{item.work}</td>
                                        <td className="text-white/50">{item.started}</td>
                                        <td>
                                            <button className="btn btn-ghost btn-xs text-indigo-400">Manage</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Operations Menu */}
                <div className="space-y-4">
                    <h3 className="font-bold px-2">Quick Operations</h3>
                    <div className="grid grid-cols-1 gap-3">
                        <button className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all group text-left">
                            <span className="text-2xl group-hover:scale-110 transition-transform">📂</span>
                            <div>
                                <div className="font-bold">Add Trip Record</div>
                                <div className="text-xs text-white/40">Log truck transport data</div>
                            </div>
                        </button>
                        <button className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all group text-left">
                            <span className="text-2xl group-hover:scale-110 transition-transform">⏱️</span>
                            <div>
                                <div className="font-bold">Add Machine Hours</div>
                                <div className="text-xs text-white/40">Log excavator working time</div>
                            </div>
                        </button>
                        <button className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all group text-left">
                            <span className="text-2xl group-hover:scale-110 transition-transform">⛽</span>
                            <div>
                                <div className="font-bold">Fuel & Expense</div>
                                <div className="text-xs text-white/40">Cost entry for maintenance</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerDashboard;
