import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: "How does multi-owner tracking work?",
            answer: "Our system allows you to define ownership percentages for each vehicle. Costs and profits are then automatically distributed and tracked according to these shares."
        },
        {
            question: "Is there a mobile app available?",
            answer: "FleetLedger is a fully responsive web application that works perfectly on all mobile browsers. Dedicated iOS and Android apps are currently in development."
        },
        {
            question: "Can I export my data for tax purposes?",
            answer: "Yes, you can export all your expense and income reports in CSV or PDF format at any time, categorized for easy tax filing."
        },
        {
            question: "How secure is my financial data?",
            answer: "We use industry-standard encryption and security protocols to ensure your data is safe and protected. We do not store any sensitive credit card details."
        }
    ];

    return (
        <section className="py-24 px-8 bg-gradient-to-t from-[#0a0a1a] to-[#0f1629]">
            <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                    <p className="text-white/60">
                        Everything you need to know about FleetLedger. Can't find the answer? Contact our support.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="collapse collapse-plus bg-white/5 border border-white/10 rounded-2xl">
                            <input type="radio" name="my-accordion-3" defaultChecked={i === 0} />
                            <div className="collapse-title text-xl font-medium text-white">
                                {faq.question}
                            </div>
                            <div className="collapse-content text-white/60">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
