import React from 'react';

const Workforce = () => {
    const staff = [
        { id: 1, name: 'John Doe', role: 'Driver', status: 'On Trip', vehicle: 'Truck #04', joined: 'Jan 2024' },
        { id: 2, name: 'Mike Ross', role: 'Operator', status: 'Available', vehicle: 'Excavator #01', joined: 'Mar 2024' },
        { id: 3, name: 'Sarah King', role: 'Driver', status: 'On Trip', vehicle: 'Truck #08', joined: 'Feb 2024' },
        { id: 4, name: 'Robert Fox', role: 'Driver', status: 'Off Duty', vehicle: 'None', joined: 'Apr 2024' },
    ];

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Staff & Operators</h1>
                    <p className="text-white/50">Manage your workforce of drivers and machinery operators.</p>
                </div>
                <button className="btn btn-primary">➕ New Staff Member</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {staff.map((s) => (
                    <div key={s.id} className="bg-[#0a0f1e] border border-white/5 p-6 rounded-2xl relative group hover:border-indigo-500/30 transition-all duration-300">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full border-2 border-indigo-500/20 p-1 mb-4">
                                <img src={`https://i.pravatar.cc/150?u=${s.id}`} alt={s.name} className="w-full h-full rounded-full object-cover" />
                            </div>
                            <h3 className="font-bold text-lg mb-1">{s.name}</h3>
                            <span className="text-white/40 text-sm mb-4">{s.role}</span>

                            <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-white/5">
                                <div className="text-left">
                                    <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Status</div>
                                    <div className={`text-xs font-bold ${s.status === 'On Trip' ? 'text-blue-400' : s.status === 'Available' ? 'text-green-400' : 'text-white/40'}`}>
                                        {s.status}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Vehicle</div>
                                    <div className="text-xs font-bold text-white/70">{s.vehicle}</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="text-white/40 hover:text-white transition-colors text-xl">⋮</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Workforce;
