import React from 'react';

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "49",
            features: ["Up to 5 Vehicles", "Expense Tracking", "Basic Analytics", "Email Support"],
            recommended: false
        },
        {
            name: "Professional",
            price: "99",
            features: ["Up to 20 Vehicles", "Shared Ownership Tools", "Advanced Reports", "Priority Support", "Real-time Tracking"],
            recommended: true
        },
        {
            name: "Enterprise",
            price: "249",
            features: ["Unlimited Vehicles", "Custom Integrations", "Dedicated Manager", "24/7 Phone Support", "White-label Options"],
            recommended: false
        }
    ];

    return (
        <section className="py-24 px-8 bg-[#0a0a1a]">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Choose the plan that's right for your fleet. No hidden fees, ever.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <div key={i} className={`card bg-white/5 border ${plan.recommended ? 'border-primary ring-2 ring-primary/20 scale-105' : 'border-white/10'} transition-all duration-300`}>
                            <div className="card-body">
                                {plan.recommended && (
                                    <div className="badge badge-primary mx-auto mb-4">Most Popular</div>
                                )}
                                <h3 className="text-xl font-bold text-white text-center">{plan.name}</h3>
                                <div className="flex items-baseline justify-center gap-1 my-6">
                                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                                    <span className="text-white/50">/month</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-2 text-white/70">
                                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="card-actions mt-auto">
                                    <button className={`btn w-full ${plan.recommended ? 'btn-primary' : 'btn-outline border-white/20 text-white hover:bg-white/10'}`}>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
