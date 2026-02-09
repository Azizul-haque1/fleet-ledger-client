import React from 'react';
import Hero from './sections/Hero';
import Features from './sections/Features';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#0a0a1a]">
            <Hero />
            <Features />
        </div>
    );
};

export default Home;