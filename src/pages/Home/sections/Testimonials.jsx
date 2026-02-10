import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Carter",
            role: "Fleet Owner",
            content: "FleetLedger has completely transformed how we manage our truck expenses. The shared ownership tracking is a game-changer for our partnership.",
            avatar: "https://i.pravatar.cc/150?u=john"
        },
        {
            name: "Sarah Chen",
            role: "Logistics Manager",
            content: "The real-time tracking and detailed analytics help us optimize routes and save thousands on fuel every month. Highly recommended!",
            avatar: "https://i.pravatar.cc/150?u=sarah"
        },
        {
            name: "Marcus Rodriguez",
            role: "Operations Director",
            content: "Easy to use, powerful features, and excellent support. It's the only tool you need to run a modern fleet efficiently.",
            avatar: "https://i.pravatar.cc/150?u=marcus"
        }
    ];

    return (
        <section className="py-24 px-8 bg-gradient-to-b from-[#0a0a1a] to-[#0f1629]">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        See how FleetLedger is helping businesses across the globe streamline their operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="card bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300">
                            <div className="card-body">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-white/80 italic mb-6">"{t.content}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={t.avatar} alt={t.name} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">{t.name}</div>
                                        <div className="text-xs text-white/50">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
