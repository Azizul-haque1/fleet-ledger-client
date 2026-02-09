import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const SocialSignIn = () => {
    const { signInWithGoogle, setUser } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const handleSignIn = async () => {
        try {
            console.log('signIn');
            const res = await signInWithGoogle();
            console.log('google sign in auth', res);
            setUser(res.user)
            navigate(location.state ? location.state : '/')
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button
            onClick={handleSignIn}
            type="button"
            className="flex items-center justify-center gap-2.5 py-3.5 px-5 text-[0.9375rem] font-medium text-white bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5"
        >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
                <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.13 18.63 6.72 16.69 5.84 14.09H2.18V16.94C3.99 20.53 7.7 23 12 23Z" fill="#34A853" />
                <path d="M5.84 14.09C5.62 13.43 5.49 12.73 5.49 12C5.49 11.27 5.62 10.57 5.84 9.91V7.06H2.18C1.43 8.55 1 10.22 1 12C1 13.78 1.43 15.45 2.18 16.94L5.84 14.09Z" fill="#FBBC05" />
                <path d="M12 5.37C13.62 5.37 15.06 5.92 16.21 6.98L19.36 3.83C17.45 2.09 14.97 1 12 1C7.7 1 3.99 3.47 2.18 7.06L5.84 9.91C6.72 7.31 9.13 5.37 12 5.37Z" fill="#EA4335" />
            </svg>
            <span>Google</span>
        </button>
    );
};

export default SocialSignIn;