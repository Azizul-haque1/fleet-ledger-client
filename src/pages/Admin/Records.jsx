import React from 'react';

const Records = () => {
    const records = [
        { id: 1, date: '2026-02-10', vehicle: 'Truck #04', staff: 'John Doe', type: 'Trip', detail: '3 trips (Site A to B)', income: '$450', fuel: '$120' },
        { id: 2, date: '2026-02-10', vehicle: 'Excavator #01', staff: 'Mike Ross', type: 'Hour', detail: '6.5 hours', income: '$650', fuel: '$180' },
        { id: 3, date: '2026-02-09', vehicle: 'Truck #08', staff: 'Sarah King', type: 'Trip', detail: '5 trips (Quarry to City)', income: '$800', fuel: '$240' },
    ];

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Work Records</h1>
                    <p className="text-white/50">Detailed logs for trips and machine operating hours.</p>
                </div>
                <div className="flex gap-4">
                    <button className="btn btn-outline border-white/10 text-white">📅 Feb 10, 2026</button>
                    <button className="btn btn-primary">➕ Log Work</button>
                </div>
            </div>

            <div className="bg-[#0a0f1e] border border-white/5 rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-white/5 text-[0.8125rem] text-white/40 uppercase tracking-widest">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-xs tracking-tighter">Date</th>
                            <th className="px-6 py-4 font-semibold text-xs tracking-tighter">Vehicle</th>
                            <th className="px-6 py-4 font-semibold text-xs tracking-tighter">Staff</th>
                            <th className="px-6 py-4 font-semibold text-xs tracking-tighter">Type</th>
                            <th className="px-6 py-4 font-semibold text-xs tracking-tighter">Work Detail</th>
                            <th className="px-6 py-4 font-semibold text-xs tracking-tighter">Rev. / Exp.</th>
                            <th className="px-6 py-4 font-semibold text-xs tracking-tighter text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {records.map((r) => (
                            <tr key={r.id} className="hover:bg-white/[0.02] transition-colors">
                                <td className="px-6 py-4 text-sm text-white/50">{r.date}</td>
                                <td className="px-6 py-4 font-bold">{r.vehicle}</td>
                                <td className="px-6 py-4 text-white/70">{r.staff}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest ${r.type === 'Trip' ? 'bg-blue-500/10 text-blue-400' : 'bg-amber-500/10 text-amber-400'}`}>
                                        {r.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-white/60">{r.detail}</td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="text-green-400 font-bold">{r.income}</span>
                                        <span className="text-xs text-red-400/60">-{r.fuel}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-white/30 hover:text-white">✏️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Records;
