import React, { useState } from 'react';

const Fleet = () => {
    const [vehicles, setVehicles] = useState([
        { id: 1, name: 'Truck #04', type: 'Truck', model: 'Volvo FH16', plate: 'BG-1234', operator: 'John Doe', status: 'Active' },
        { id: 2, name: 'Excavator #01', type: 'Excavator', model: 'CAT 320D', plate: 'EX-9901', operator: 'Mike Ross', status: 'Maintenance' },
        { id: 3, name: 'Truck #08', type: 'Truck', model: 'Scania R500', plate: 'BG-5678', operator: 'Sarah King', status: 'Active' },
    ]);

    return (
        <div className="space-y-8 animate-fade-in-up">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Fleet Management</h1>
                    <p className="text-white/50">Manage your trucks, excavators, and other machinery.</p>
                </div>
                <button className="btn btn-primary gap-2">
                    <span>➕</span> Add New Vehicle
                </button>
            </div>

            {/* Filter Chips */}
            <div className="flex gap-4">
                <button className="px-4 py-2 rounded-xl bg-indigo-500 text-white font-medium text-sm">All Vehicles</button>
                <button className="px-4 py-2 rounded-xl bg-white/5 text-white/60 hover:text-white transition-colors text-sm">Trucks</button>
                <button className="px-4 py-2 rounded-xl bg-white/5 text-white/60 hover:text-white transition-colors text-sm">Excavators</button>
                <button className="px-4 py-2 rounded-xl bg-white/5 text-white/60 hover:text-white transition-colors text-sm">Maintenance</button>
            </div>

            {/* Vehicles Table */}
            <div className="bg-[#0a0f1e] border border-white/5 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-white/5 text-[0.8125rem] text-white/40 uppercase tracking-widest">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Vehicle</th>
                                <th className="px-6 py-4 font-semibold">Model / Plate</th>
                                <th className="px-6 py-4 font-semibold">Type</th>
                                <th className="px-6 py-4 font-semibold">Assigned Driver</th>
                                <th className="px-6 py-4 font-semibold">Status</th>
                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {vehicles.map((v) => (
                                <tr key={v.id} className="hover:bg-white/[0.02] transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-xl">
                                                {v.type === 'Truck' ? '🚚' : '🚜'}
                                            </div>
                                            <span className="font-bold">{v.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-white font-medium">{v.model}</span>
                                            <span className="text-xs text-white/40">{v.plate}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 text-xs font-semibold">
                                            {v.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-white/70">{v.operator}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${v.status === 'Active' ? 'bg-green-500' : 'bg-amber-500'}`}></div>
                                            <span className="text-sm">{v.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 hover:bg-white/5 rounded-lg text-white/40 hover:text-white transition-colors">
                                                ✏️
                                            </button>
                                            <button className="p-2 hover:bg-white/5 rounded-lg text-white/40 hover:text-red-400 transition-colors">
                                                🗑️
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Fleet;
