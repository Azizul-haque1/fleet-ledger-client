import React from 'react';

const Dashboard = () => {
    const stats = [
        { label: 'Total Trucks', value: '12', icon: '🚚', trend: '+2 this month', color: 'blue' },
        { label: 'Excavators', value: '5', icon: '🚜', trend: 'Stable', color: 'amber' },
        { label: 'Total Drivers', value: '18', icon: '👥', trend: '+4 new', color: 'indigo' },
        { label: 'Monthly Earnings', value: '$45,200', icon: '💰', trend: '+12%', color: 'green' },
    ];

    const recentWork = [
        { id: 1, vehicle: 'Truck #04', work: 'Stone Transport', duration: 'Today', status: 'In Progress' },
        { id: 2, vehicle: 'Excavator #01', work: 'Site Preparation', duration: 'Today', status: 'Completed' },
        { id: 3, vehicle: 'Truck #08', work: 'Sand Delivery', duration: 'Yesterday', status: 'Completed' },
        { id: 4, vehicle: 'Truck #02', work: 'Earth Moving', duration: 'Today', status: 'In Progress' },
    ];

    return (
        <div className="space-y-8 animate-fade-in-up">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
                <p className="text-white/50">Welcome back, here's what's happening with your fleet today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-[#0a0f1e] border border-white/5 p-6 rounded-2xl hover:border-indigo-500/30 transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <div className="text-3xl">{stat.icon}</div>
                            <span className="text-xs font-medium px-2 py-1 rounded-lg bg-white/5 text-white/60">{stat.trend}</span>
                        </div>
                        <h3 className="text-white/50 text-sm font-medium mb-1">{stat.label}</h3>
                        <div className="text-2xl font-bold">{stat.value}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Work Summary Table */}
                <div className="lg:col-span-2 bg-[#0a0f1e] border border-white/5 rounded-2xl overflow-hidden">
                    <div className="p-6 border-b border-white/5 flex justify-between items-center">
                        <h3 className="font-bold">Recent Work Activity</h3>
                        <button className="text-xs text-indigo-400 font-medium hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-white/5 text-[0.8125rem] text-white/40 uppercase tracking-widest">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Vehicle</th>
                                    <th className="px-6 py-4 font-semibold">Activity</th>
                                    <th className="px-6 py-4 font-semibold">Time</th>
                                    <th className="px-6 py-4 font-semibold">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {recentWork.map((item) => (
                                    <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                                        <td className="px-6 py-4 font-medium">{item.vehicle}</td>
                                        <td className="px-6 py-4 text-white/70">{item.work}</td>
                                        <td className="px-6 py-4 text-white/50 text-sm">{item.duration}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${item.status === 'Completed' ? 'bg-green-500/10 text-green-400' : 'bg-blue-500/10 text-blue-400'
                                                }`}>
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Performance Chart Placeholder */}
                <div className="bg-[#0a0f1e] border border-white/5 rounded-2xl p-6">
                    <h3 className="font-bold mb-6">Weekly Profit</h3>
                    <div className="space-y-4">
                        {[
                            { day: 'Mon', val: 75 },
                            { day: 'Tue', val: 60 },
                            { day: 'Wed', val: 90 },
                            { day: 'Thu', val: 85 },
                            { day: 'Fri', val: 70 },
                            { day: 'Sat', val: 50 },
                            { day: 'Sun', val: 30 },
                        ].map((d) => (
                            <div key={d.day} className="flex items-center gap-4">
                                <span className="text-xs text-white/40 w-8">{d.day}</span>
                                <div className="flex-grow h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" style={{ width: `${d.val}%` }}></div>
                                </div>
                                <span className="text-xs font-medium w-8 text-right">{d.val}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
