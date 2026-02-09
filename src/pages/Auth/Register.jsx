import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import SocialSignIn from '../../components/shared/SocialSignIn';

const Register = () => {
    const { registerUser, updateUserProfile, setUser } = useAuth();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [authError, setAuthError] = useState('');

    // React Hook Form setup
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            company: '',
            password: '',
            confirmPassword: '',
            agreeTerms: false
        }
    });

    // Watch password for strength indicator and confirmation matching
    const watchPassword = watch('password', '');
    const watchConfirmPassword = watch('confirmPassword', '');

    // Password strength calculator
    const getPasswordStrength = (password) => {
        if (!password) return { level: 0, text: '', color: '' };
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        const levels = [
            { level: 0, text: '', color: '' },
            { level: 1, text: 'Very Weak', color: '#ef4444' },
            { level: 2, text: 'Weak', color: '#f97316' },
            { level: 3, text: 'Fair', color: '#eab308' },
            { level: 4, text: 'Strong', color: '#22c55e' },
            { level: 5, text: 'Very Strong', color: '#10b981' }
        ];
        return levels[strength];
    };

    const passwordStrength = getPasswordStrength(watchPassword);

    // Form submission handler
    const onSubmit = async (data) => {
        setAuthError('');

        try {
            // Register user with Firebase
            const result = await registerUser(data.email, data.password);
            console.log('Registration successful:', result.user);

            // Update user profile with display name
            await updateUserProfile({
                displayName: data.fullName,
            });

            // Update the user state with the updated profile
            setUser({
                ...result.user,
                displayName: data.fullName
            });

            // Navigate to home or dashboard after successful registration
            navigate('/');
        } catch (err) {
            console.error('Registration error:', err);
            // Handle Firebase auth errors with user-friendly messages
            switch (err.code) {
                case 'auth/email-already-in-use':
                    setAuthError('An account with this email already exists');
                    break;
                case 'auth/invalid-email':
                    setAuthError('Invalid email address format');
                    break;
                case 'auth/operation-not-allowed':
                    setAuthError('Email/password accounts are not enabled');
                    break;
                case 'auth/weak-password':
                    setAuthError('Password is too weak. Please use a stronger password');
                    break;
                default:
                    setAuthError('Failed to create account. Please try again');
            }
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-8 relative overflow-hidden font-sans">
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-register"></div>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-40 bg-gradient-to-br from-indigo-500 to-violet-500 -top-[250px] -left-[150px] animate-float-shape"></div>
                    <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-40 bg-gradient-to-br from-cyan-400 to-blue-500 -bottom-[200px] -right-[100px] animate-float-shape [animation-delay:-5s]"></div>
                    <div className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-40 bg-gradient-to-br from-pink-500 to-rose-500 top-1/2 right-[10%] animate-float-shape [animation-delay:-10s]"></div>
                    <div className="absolute w-[350px] h-[350px] rounded-full blur-[80px] opacity-40 bg-gradient-to-br from-emerald-500 to-teal-400 bottom-[20%] left-[5%] animate-float-shape [animation-delay:-15s]"></div>
                </div>
            </div>

            <div className="relative z-10 w-full max-w-[720px] glass-card rounded-3xl p-10 animate-card-slide-in">
                {/* Logo Section */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-primary rounded-xl text-white shadow-[0_8px_32px_rgba(99,102,241,0.3)]">
                        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h1 className="text-[1.75rem] font-bold text-white tracking-tight">
                        Fleet<span className="text-gradient">Ledger</span>
                    </h1>
                </div>

                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Create Account</h2>
                    <p className="text-[0.9375rem] text-white/60">Join FleetLedger to streamline your fleet management</p>
                </div>

                {/* Auth Error Message */}
                {authError && (
                    <div className="flex items-center gap-3 px-5 py-4 bg-red-500/10 border border-red-500/30 rounded-xl mb-2 animate-fade-in-up">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400 flex-shrink-0">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                            <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="12" cy="16" r="1" fill="currentColor" />
                        </svg>
                        <span className="text-sm text-red-300 font-medium">{authError}</span>
                    </div>
                )}

                <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                    {/* Row 1: Full Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Full Name Field */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="fullName" className="text-sm font-medium text-white/85">Full Name</label>
                            <div className="relative flex items-center">
                                <span className="absolute left-4 w-5 h-5 text-white/40 pointer-events-none">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    id="fullName"
                                    placeholder="Enter your full name"
                                    className={`w-full py-3.5 px-4 pl-12 text-[0.9375rem] text-white input-glass rounded-xl outline-none transition-all duration-300 placeholder:text-white/35 focus:bg-white/[0.08] focus:border-indigo-500/60 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.15),0_0_20px_rgba(99,102,241,0.1)] ${errors.fullName ? 'border-red-500/60 bg-red-500/5' : ''}`}
                                    {...register('fullName', {
                                        required: 'Full name is required',
                                        minLength: {
                                            value: 2,
                                            message: 'Name must be at least 2 characters'
                                        }
                                    })}
                                />
                            </div>
                            {errors.fullName && (
                                <span className="text-xs text-red-300 font-medium animate-fade-in-up">{errors.fullName.message}</span>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-white/85">Email Address</label>
                            <div className="relative flex items-center">
                                <span className="absolute left-4 w-5 h-5 text-white/40 pointer-events-none">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" />
                                        <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className={`w-full py-3.5 px-4 pl-12 text-[0.9375rem] text-white input-glass rounded-xl outline-none transition-all duration-300 placeholder:text-white/35 focus:bg-white/[0.08] focus:border-indigo-500/60 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.15),0_0_20px_rgba(99,102,241,0.1)] ${errors.email ? 'border-red-500/60 bg-red-500/5' : ''}`}
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                />
                            </div>
                            {errors.email && (
                                <span className="text-xs text-red-300 font-medium animate-fade-in-up">{errors.email.message}</span>
                            )}
                        </div>
                    </div>

                    {/* Row 2: Phone & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Phone Field */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="text-sm font-medium text-white/85">Phone Number</label>
                            <div className="relative flex items-center">
                                <span className="absolute left-4 w-5 h-5 text-white/40 pointer-events-none">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                        <path d="M22 16.92V19.92C22 20.48 21.75 21 21.32 21.37C20.88 21.73 20.32 21.91 19.76 21.86C16.74 21.53 13.83 20.49 11.26 18.84C8.89 17.33 6.87 15.31 5.36 12.94C3.7 10.35 2.66 7.41 2.34 4.36C2.29 3.81 2.46 3.26 2.82 2.83C3.17 2.39 3.68 2.15 4.23 2.14H7.23C8.15 2.13 8.94 2.79 9.1 3.7C9.23 4.66 9.47 5.6 9.81 6.5C10.08 7.12 9.95 7.83 9.49 8.32L8.22 9.59C9.62 12.06 11.65 14.09 14.12 15.49L15.39 14.22C15.88 13.76 16.59 13.63 17.21 13.9C18.11 14.24 19.05 14.48 20.01 14.61C20.93 14.77 21.6 15.58 21.58 16.51L22 16.92Z" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    className={`w-full py-3.5 px-4 pl-12 text-[0.9375rem] text-white input-glass rounded-xl outline-none transition-all duration-300 placeholder:text-white/35 focus:bg-white/[0.08] focus:border-indigo-500/60 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.15),0_0_20px_rgba(99,102,241,0.1)] ${errors.phone ? 'border-red-500/60 bg-red-500/5' : ''}`}
                                    {...register('phone', {
                                        pattern: {
                                            value: /^[\d\s\-+()]*$/,
                                            message: 'Invalid phone number'
                                        }
                                    })}
                                />
                            </div>
                            {errors.phone && (
                                <span className="text-xs text-red-300 font-medium animate-fade-in-up">{errors.phone.message}</span>
                            )}
                        </div>

                        {/* Company Field */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="company" className="text-sm font-medium text-white/85">
                                Company <span className="font-normal text-white/40 text-xs">(Optional)</span>
                            </label>
                            <div className="relative flex items-center">
                                <span className="absolute left-4 w-5 h-5 text-white/40 pointer-events-none">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                        <path d="M3 21H21" stroke="currentColor" strokeWidth="2" />
                                        <path d="M5 21V7L13 3V21" stroke="currentColor" strokeWidth="2" />
                                        <path d="M19 21V11L13 7" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    id="company"
                                    placeholder="Enter company name"
                                    className="w-full py-3.5 px-4 pl-12 text-[0.9375rem] text-white input-glass rounded-xl outline-none transition-all duration-300 placeholder:text-white/35 focus:bg-white/[0.08] focus:border-indigo-500/60 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.15),0_0_20px_rgba(99,102,241,0.1)]"
                                    {...register('company')}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Password & Confirm Password */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Password Field */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-sm font-medium text-white/85">Password</label>
                            <div className="relative flex items-center">
                                <span className="absolute left-4 w-5 h-5 text-white/40 pointer-events-none">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
                                        <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Create a password"
                                    className={`w-full py-3.5 px-4 pl-12 pr-12 text-[0.9375rem] text-white input-glass rounded-xl outline-none transition-all duration-300 placeholder:text-white/35 focus:bg-white/[0.08] focus:border-indigo-500/60 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.15),0_0_20px_rgba(99,102,241,0.1)] ${errors.password ? 'border-red-500/60 bg-red-500/5' : ''}`}
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters'
                                        }
                                    })}
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 w-6 h-6 p-0 bg-transparent border-none text-white/40 cursor-pointer transition-colors duration-200 hover:text-white/80"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C7 20 2.73 16.11 1 12C1.74 10.18 2.96 8.59 4.47 7.34M9.9 4.24A9.45 9.45 0 0 1 12 4C17 4 21.27 7.89 23 12C22.43 13.39 21.61 14.65 20.59 15.72" stroke="currentColor" strokeWidth="2" />
                                            <path d="M1 1L23 23" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <span className="text-xs text-red-300 font-medium animate-fade-in-up">{errors.password.message}</span>
                            )}
                            {watchPassword && !errors.password && (
                                <div className="flex items-center gap-3 mt-1">
                                    <div className="flex gap-1 flex-1">
                                        {[1, 2, 3, 4, 5].map((level) => (
                                            <div
                                                key={level}
                                                className={`h-1 flex-1 rounded transition-colors duration-300 ${level <= passwordStrength.level ? '' : 'bg-white/10'}`}
                                                style={{ backgroundColor: level <= passwordStrength.level ? passwordStrength.color : '' }}
                                            ></div>
                                        ))}
                                    </div>
                                    <span className="text-xs font-medium min-w-[70px] text-right" style={{ color: passwordStrength.color }}>
                                        {passwordStrength.text}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Confirm Password Field */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="confirmPassword" className="text-sm font-medium text-white/85">Confirm Password</label>
                            <div className="relative flex items-center">
                                <span className="absolute left-4 w-5 h-5 text-white/40 pointer-events-none">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    id="confirmPassword"
                                    placeholder="Confirm your password"
                                    className={`w-full py-3.5 px-4 pl-12 pr-12 text-[0.9375rem] text-white input-glass rounded-xl outline-none transition-all duration-300 placeholder:text-white/35 focus:bg-white/[0.08] focus:border-indigo-500/60 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.15),0_0_20px_rgba(99,102,241,0.1)] ${errors.confirmPassword ? 'border-red-500/60 bg-red-500/5' : ''}`}
                                    {...register('confirmPassword', {
                                        required: 'Please confirm your password',
                                        validate: (value) =>
                                            value === watchPassword || 'Passwords do not match'
                                    })}
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 w-6 h-6 p-0 bg-transparent border-none text-white/40 cursor-pointer transition-colors duration-200 hover:text-white/80"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? (
                                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C7 20 2.73 16.11 1 12C1.74 10.18 2.96 8.59 4.47 7.34M9.9 4.24A9.45 9.45 0 0 1 12 4C17 4 21.27 7.89 23 12C22.43 13.39 21.61 14.65 20.59 15.72" stroke="currentColor" strokeWidth="2" />
                                            <path d="M1 1L23 23" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <span className="text-xs text-red-300 font-medium animate-fade-in-up">{errors.confirmPassword.message}</span>
                            )}
                            {watchConfirmPassword && !errors.confirmPassword && watchPassword === watchConfirmPassword && (
                                <div className="mt-1">
                                    <span className="flex items-center gap-1.5 text-xs font-medium text-green-500">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
                                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Passwords match
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex flex-col gap-2 pt-2">
                        <label className={`flex items-center gap-3 cursor-pointer select-none group ${errors.agreeTerms ? 'text-red-300' : ''}`}>
                            <input
                                type="checkbox"
                                className="hidden peer"
                                {...register('agreeTerms', {
                                    required: 'You must agree to the terms'
                                })}
                            />
                            <span className={`w-5 h-5 border-2 rounded-md relative transition-all duration-200 flex-shrink-0 peer-checked:bg-gradient-to-br peer-checked:from-indigo-500 peer-checked:to-violet-500 peer-checked:border-transparent after:content-[''] after:absolute after:left-[6px] after:top-[2px] after:w-[5px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:transform after:rotate-45 after:opacity-0 peer-checked:after:opacity-100 ${errors.agreeTerms ? 'border-red-500/60' : 'border-white/20'}`}></span>
                            <span className="text-sm text-white/70">
                                I agree to the <Link to="/terms" className="text-indigo-400 font-medium hover:text-indigo-300">Terms of Service</Link> and <Link to="/privacy" className="text-indigo-400 font-medium hover:text-indigo-300">Privacy Policy</Link>
                            </span>
                        </label>
                        {errors.agreeTerms && (
                            <span className="text-xs text-red-300 font-medium mt-2 animate-fade-in-up">
                                {errors.agreeTerms.message}
                            </span>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`flex items-center justify-center gap-2 w-full py-4 px-6 text-base font-semibold text-white btn-primary rounded-xl cursor-pointer transition-all duration-300 mt-2 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed group ${isSubmitting ? 'opacity-85 pointer-events-none' : ''}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                <span>Creating Account...</span>
                            </>
                        ) : (
                            <>
                                <span>Create Account</span>
                                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                                    <path d="M16 21V19C16 16.79 14.21 15 12 15H5C2.79 15 1 16.79 1 19V21" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                                    <path d="M20 8V14M23 11H17" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </>
                        )}
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-2">
                        <span className="flex-1 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></span>
                        <span className="text-[0.8125rem] text-white/40 whitespace-nowrap">or sign up with</span>
                        <span className="flex-1 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></span>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <SocialSignIn />
                        <button type="button" className="flex items-center justify-center gap-2.5 py-3.5 px-5 text-[0.9375rem] font-medium text-white bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" />
                            </svg>
                            <span>GitHub</span>
                        </button>
                    </div>
                </form>

                {/* Footer */}
                <div className="text-center mt-6 pt-6 border-t border-white/[0.08]">
                    <p className="text-[0.9375rem] text-white/60">
                        Already have an account? <Link to="/login" className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors duration-200">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
