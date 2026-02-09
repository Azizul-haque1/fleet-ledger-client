import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-[#0a0a1a]">
            <Outlet />
        </div>
    );
};

export default RootLayout;