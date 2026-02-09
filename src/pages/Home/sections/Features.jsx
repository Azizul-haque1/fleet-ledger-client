import React from 'react';

const Features = () => {
    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <rect x="1" y="3" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 8H20L23 11V16H16V8Z" stroke="currentColor" strokeWidth="2" />
                    <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
                    <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2" />
                </svg>
            ),
            title: 'Vehicle Tracking',
            description: 'Monitor your entire fleet in real-time. Track location, status, and utilization of every truck and equipment.',
            color: '#3b82f6',
            bgColor: 'bg-blue-500/15',
            textColor: 'text-blue-400'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" />
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                    <path d="M23 21V19C22.9986 18.1137 22.7045 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" />
                </svg>
            ),
            title: 'Shared Ownership',
            description: 'Manage multi-owner scenarios easily. Split costs, income, and responsibilities with transparent partner management.',
            color: '#8b5cf6',
            bgColor: 'bg-violet-500/15',
            textColor: 'text-violet-400'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="M12 2V22M17 5H9.5C8.57 5 7.68 5.37 7.02 6.03C6.37 6.68 6 7.57 6 8.5C6 9.43 6.37 10.32 7.02 10.97C7.68 11.63 8.57 12 9.5 12H14.5C15.43 12 16.32 12.37 16.97 13.03C17.63 13.68 18 14.57 18 15.5C18 16.43 17.63 17.32 16.97 17.97C16.32 18.63 15.43 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: 'Income Tracking',
            description: 'Record all revenue streams effortlessly. Track payments, invoices, and earnings per vehicle or project.',
            color: '#22c55e',
            bgColor: 'bg-green-500/15',
            textColor: 'text-green-400'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" />
                    <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" />
                    <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
                </svg>
            ),
            title: 'Expense Management',
            description: 'Log fuel, maintenance, repairs, and operating costs. Categorize expenses and generate detailed reports.',
            color: '#f59e0b',
            bgColor: 'bg-amber-500/15',
            textColor: 'text-amber-400'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" />
                </svg>
            ),
            title: 'Equipment Registry',
            description: 'Maintain a complete inventory of excavators, machinery, and tools. Track service history and depreciation.',
            color: '#ec4899',
            bgColor: 'bg-pink-500/15',
            textColor: 'text-pink-400'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" stroke="currentColor" strokeWidth="2" />
                    <path d="M22 12A10 10 0 0 0 12 2V12H22Z" stroke="currentColor" strokeWidth="2" />
                </svg>
            ),
            title: 'Analytics & Reports',
            description: 'Gain actionable insights with powerful analytics. Visualize profitability, utilization rates, and trends.',
            color: '#06b6d4',
            bgColor: 'bg-cyan-500/15',
            textColor: 'text-cyan-400'
        }
    ];

    return (
        <section className="relative py-24 px-8 font-sans bg-gradient-to-b from-[#0f1629] to-[#0a0a1a]">
            <div className="max-w-[1200px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 text-sm font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4">
                        Features
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                        Everything You Need to
                        <span className="text-gradient block sm:inline"> Manage Your Fleet</span>
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                        Powerful tools designed specifically for fleet owners and equipment managers.
                        Streamline operations and maximize profitability.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Glow effect on hover */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at 50% 0%, ${feature.color}15 0%, transparent 60%)`
                                }}
                            ></div>

                            <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${feature.bgColor} ${feature.textColor} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-white/60 leading-relaxed mb-5 text-[0.9375rem]">
                                {feature.description}
                            </p>

                            <div className={`inline-flex items-center gap-2 text-sm font-medium ${feature.textColor} opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0`}>
                                <span>Learn more</span>
                                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
