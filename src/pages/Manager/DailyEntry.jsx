import React, { useState } from 'react';

const DailyEntry = () => {
    const [entryType, setEntryType] = useState('trip'); // trip, hour, fuel, assign

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Daily Operations Entry</h1>
                    <p className="text-white/50">Record work details, fuel usage, and manage vehicle assignments.</p>
                </div>
                <div className="join bg-white/5 p-1 rounded-2xl border border-white/10">
                    <button
                        onClick={() => setEntryType('assign')}
                        className={`join-item btn btn-sm border-none ${entryType === 'assign' ? 'bg-indigo-600' : 'bg-transparent text-white/50'}`}
                    >Assign</button>
                    <button
                        onClick={() => setEntryType('trip')}
                        className={`join-item btn btn-sm border-none ${entryType === 'trip' ? 'bg-indigo-600' : 'bg-transparent text-white/50'}`}
                    >Trip</button>
                    <button
                        onClick={() => setEntryType('hour')}
                        className={`join-item btn btn-sm border-none ${entryType === 'hour' ? 'bg-indigo-600' : 'bg-transparent text-white/50'}`}
                    >Hour</button>
                    <button
                        onClick={() => setEntryType('fuel')}
                        className={`join-item btn btn-sm border-none ${entryType === 'fuel' ? 'bg-indigo-600' : 'bg-transparent text-white/50'}`}
                    >Fuel/Exp</button>
                </div>
            </div>

            <div className="bg-[#0a0f1e] border border-white/5 rounded-3xl p-8 max-w-4xl">
                {entryType === 'assign' && (
                    <form className="space-y-6">
                        <h2 className="text-xl font-bold flex items-center gap-2">🚚 Vehicle Assignment</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label"><span className="label-text text-white/60">Select Vehicle</span></label>
                                <select className="select select-bordered bg-white/5 border-white/10 text-white focus:border-indigo-500">
                                    <option disabled selected>Pick a Truck/Excavator</option>
                                    <option>Truck #04 (Volvo)</option>
                                    <option>Truck #08 (Scania)</option>
                                    <option>Excavator #01 (CAT)</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text text-white/60">Select Driver / Operator</span></label>
                                <select className="select select-bordered bg-white/5 border-white/10 text-white focus:border-indigo-500">
                                    <option disabled selected>Pick Staff</option>
                                    <option>John Doe</option>
                                    <option>Mike Ross</option>
                                    <option>Sarah King</option>
                                </select>
                            </div>
                            <div className="form-control md:col-span-2">
                                <label className="label"><span className="label-text text-white/60">Work Location / Site</span></label>
                                <input type="text" placeholder="e.g. Site A, City Project" className="input input-bordered bg-white/5 border-white/10 text-white focus:border-indigo-500" />
                            </div>
                        </div>
                        <button className="btn btn-primary w-full md:w-auto px-12 rounded-xl">Assign Now</button>
                    </form>
                )}

                {entryType === 'trip' && (
                    <form className="space-y-6">
                        <h2 className="text-xl font-bold flex items-center gap-2">🧾 Add Trip Work</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label"><span className="label-text text-white/60">Select Assigned Vehicle</span></label>
                                <select className="select select-bordered bg-white/5 border-white/10 text-white focus:border-indigo-500">
                                    <option>Truck #04 - John Doe</option>
                                    <option>Truck #08 - Sarah King</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text text-white/60">Number of Trips</span></label>
                                <input type="number" placeholder="0" className="input input-bordered bg-white/5 border-white/10 text-white focus:border-indigo-500" />
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text text-white/60">Revenue per Trip</span></label>
                                <input type="text" placeholder="$0.00" className="input input-bordered bg-white/5 border-white/10 text-white focus:border-indigo-500" />
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text text-white/60">Trip Material</span></label>
                                <input type="text" placeholder="Sand, Stone, etc." className="input input-bordered bg-white/5 border-white/10 text-white focus:border-indigo-500" />
                            </div>
                        </div>
                        <button className="btn btn-primary w-full md:w-auto px-12 rounded-xl">Save Trip Log</button>
                    </form>
                )}

                {entryType === 'hour' && (
                    <form className="space-y-6">
                        <h2 className="text-xl font-bold flex items-center gap-2">⏱️ Add Hourly Work</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label"><span className="label-text text-white/60">Select Assigned Machine</span></label>
                                <select className="select select-bordered bg-white/5 border-white/10 text-white focus:border-indigo-500">
                                    <option>Excavator #01 - Mike Ross</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text text-white/60">Hours Worked</span></label>
                                <input type="number" step="0.5" placeholder="0.0" className="input input-bordered bg-white/5 border-white/10 text-white focus:border-indigo-500" />
                            </div>
                            <div className="form-control md:col-span-2">
                                <label className="label"><span className="label-text text-white/60">Work Description</span></label>
                                <textarea className="textarea textarea-bordered bg-white/5 border-white/10 text-white focus:border-indigo-500 h-24" placeholder="Describe the excavation work..."></textarea>
                            </div>
                        </div>
                        <button className="btn btn-primary w-full md:w-auto px-12 rounded-xl">Save Hour Log</button>
                    </form>
                )}

                {entryType === 'fuel' && (
                    <form className="space-y-6">
                        <h2 className="text-xl font-bold flex items-center gap-2">⛽ Fuel & Expense Log</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label"><span className="label-text text-white/60">Vehicle</span></label>
                                <select className="select select-bordered bg-white/5 border-white/10 text-white focus:border-indigo-500">
                                    <option>Truck #04</option>
                                    <option>Excavator #01</option>
                                    <option>Truck #08</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text text-white/60">Expense Type</span></label>
                                <select className="select select-bordered bg-white/5 border-white/10 text-white focus:border-indigo-500">
                                    <option>Fuel Fill-up</option>
                                    <option>Oil Change</option>
                                    <option>Parts Replacement</option>
                                    <option>Operator Allowance</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text text-white/60">Cost Amount</span></label>
                                <input type="text" placeholder="$0.00" className="input input-bordered bg-white/5 border-white/10 text-white focus:border-indigo-500" />
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text text-white/60">Voucher / Slip No</span></label>
                                <input type="text" placeholder="Ref No." className="input input-bordered bg-white/5 border-white/10 text-white focus:border-indigo-500" />
                            </div>
                        </div>
                        <button className="btn btn-primary w-full md:w-auto px-12 rounded-xl">Log Expense</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default DailyEntry;
