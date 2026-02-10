import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-[#0a0a1a] flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;