import React from 'react';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Stats from './sections/Stats';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#0a0a1a]">
            <Hero />
            <Stats />
            <Features />
            <Testimonials />
            <FAQ />
            <Pricing />
        </div>
    );
};

export default Home;