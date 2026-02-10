import React from 'react';

const Finance = () => {
    return (
        <div className="space-y-8 animate-fade-in-up">
            <div>
                <h1 className="text-3xl font-bold mb-2">Financial Reports</h1>
                <p className="text-white/50">Comprehensive overview of income, expenses, and profitability.</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#0a0f1e] border border-white/5 p-8 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl group-hover:scale-110 transition-transform">📈</div>
                    <div className="text-white/50 text-sm font-medium mb-2">Total Revenue</div>
                    <div className="text-4xl font-black text-green-400">$124,500.00</div>
                    <div className="mt-4 text-xs font-semibold text-green-500/80">↑ 15.4% from last month</div>
                </div>
                <div className="bg-[#0a0f1e] border border-white/5 p-8 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl group-hover:scale-110 transition-transform">📉</div>
                    <div className="text-white/50 text-sm font-medium mb-2">Total Expenses</div>
                    <div className="text-4xl font-black text-red-400">$78,200.00</div>
                    <div className="mt-4 text-xs font-semibold text-red-500/80">↓ 2.1% from last month</div>
                </div>
                <div className="bg-[#0a0f1e] border-2 border-indigo-500/20 p-8 rounded-3xl relative overflow-hidden group bg-gradient-to-br from-indigo-500/5 to-transparent">
                    <div className="absolute top-0 right-0 p-4 opacity-20 text-6xl group-hover:scale-110 transition-transform">💎</div>
                    <div className="text-indigo-300 text-sm font-medium mb-2">Net Profit</div>
                    <div className="text-4xl font-black text-white">$46,300.00</div>
                    <div className="mt-4 text-xs font-semibold text-indigo-400">Target: $50,000 for Feb</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Expense Breakdown */}
                <div className="bg-[#0a0f1e] border border-white/5 rounded-3xl p-8">
                    <h3 className="font-bold text-xl mb-8">Expense Breakdown</h3>
                    <div className="space-y-6">
                        {[
                            { category: 'Fuel', amount: '$32,400', percent: 62, color: 'bg-amber-400' },
                            { category: 'Maintenance', amount: '$12,800', percent: 24, color: 'bg-blue-400' },
                            { category: 'Salaries', amount: '$18,500', percent: 35, color: 'bg-indigo-400' },
                            { category: 'Insurance', amount: '$4,200', percent: 8, color: 'bg-emerald-400' },
                        ].map((item) => (
                            <div key={item.category}>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium">{item.category}</span>
                                    <span className="font-bold">{item.amount}</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className={`h-full ${item.color}`} style={{ width: `${(item.percent / 62) * 100}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Monthly Comparison */}
                <div className="bg-[#0a0f1e] border border-white/5 rounded-3xl p-8">
                    <h3 className="font-bold text-xl mb-8">Monthly Growth</h3>
                    <div className="flex items-end justify-between h-48 gap-2">
                        {[35, 45, 30, 60, 80, 55, 95].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-4">
                                <div className="w-full bg-gradient-to-t from-indigo-500 to-violet-500 rounded-lg group relative" style={{ height: `${h}%` }}>
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        ${h}k
                                    </div>
                                </div>
                                <span className="text-[10px] uppercase font-bold text-white/20">Month {i + 1}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Finance;
