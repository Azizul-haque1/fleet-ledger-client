import React from 'react';

const Stats = () => {
    const stats = [
        { label: 'Vehicles Managed', value: '1,200+', icon: '🚛' },
        { label: 'Happy Partners', value: '450+', icon: '🤝' },
        { label: 'Revenue Tracked', value: '$25M+', icon: '💰' },
        { label: 'Countries', value: '12+', icon: '🌍' },
    ];

    return (
        <section className="py-20 px-8 bg-[#0a0a1a] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110 duration-300">
                                {stat.icon}
                            </div>
                            <div className="text-4xl font-bold text-white mb-2 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-white/50 font-medium uppercase tracking-wider text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
