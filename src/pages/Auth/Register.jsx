import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import './Auth.css';
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
                // You can also add photoURL if you have image upload functionality
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
        <div className="auth-container">
            <div className="auth-bg">
                <div className="auth-bg-gradient register-gradient"></div>
                <div className="auth-bg-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                </div>
            </div>

            <div className="auth-card register-card">
                <div className="auth-logo">
                    <div className="logo-icon">
                        <svg viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h1 className="logo-text">Fleet<span>Ledger</span></h1>
                </div>

                <div className="auth-header">
                    <h2>Create Account</h2>
                    <p>Join FleetLedger to streamline your fleet management</p>
                </div>

                {/* Auth Error Message */}
                {authError && (
                    <div className="auth-error">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                            <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="12" cy="16" r="1" fill="currentColor" />
                        </svg>
                        <span>{authError}</span>
                    </div>
                )}

                <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        {/* Full Name Field */}
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <div className={`input-wrapper ${errors.fullName ? 'input-error' : ''}`}>
                                <span className="input-icon">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    id="fullName"
                                    placeholder="Enter your full name"
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
                                <span className="field-error">{errors.fullName.message}</span>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <div className={`input-wrapper ${errors.email ? 'input-error' : ''}`}>
                                <span className="input-icon">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" />
                                        <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
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
                                <span className="field-error">{errors.email.message}</span>
                            )}
                        </div>
                    </div>

                    <div className="form-row">
                        {/* Phone Field */}
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <div className={`input-wrapper ${errors.phone ? 'input-error' : ''}`}>
                                <span className="input-icon">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M22 16.92V19.92C22 20.48 21.75 21 21.32 21.37C20.88 21.73 20.32 21.91 19.76 21.86C16.74 21.53 13.83 20.49 11.26 18.84C8.89 17.33 6.87 15.31 5.36 12.94C3.7 10.35 2.66 7.41 2.34 4.36C2.29 3.81 2.46 3.26 2.82 2.83C3.17 2.39 3.68 2.15 4.23 2.14H7.23C8.15 2.13 8.94 2.79 9.1 3.7C9.23 4.66 9.47 5.6 9.81 6.5C10.08 7.12 9.95 7.83 9.49 8.32L8.22 9.59C9.62 12.06 11.65 14.09 14.12 15.49L15.39 14.22C15.88 13.76 16.59 13.63 17.21 13.9C18.11 14.24 19.05 14.48 20.01 14.61C20.93 14.77 21.6 15.58 21.58 16.51L22 16.92Z" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    {...register('phone', {
                                        pattern: {
                                            value: /^[\d\s\-+()]*$/,
                                            message: 'Invalid phone number'
                                        }
                                    })}
                                />
                            </div>
                            {errors.phone && (
                                <span className="field-error">{errors.phone.message}</span>
                            )}
                        </div>

                        {/* Company Field */}
                        <div className="form-group">
                            <label htmlFor="company">Company <span className="optional">(Optional)</span></label>
                            <div className="input-wrapper">
                                <span className="input-icon">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M3 21H21" stroke="currentColor" strokeWidth="2" />
                                        <path d="M5 21V7L13 3V21" stroke="currentColor" strokeWidth="2" />
                                        <path d="M19 21V11L13 7" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    id="company"
                                    placeholder="Enter company name"
                                    {...register('company')}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        {/* Password Field */}
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className={`input-wrapper ${errors.password ? 'input-error' : ''}`}>
                                <span className="input-icon">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
                                        <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Create a password"
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
                                    className="password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C7 20 2.73 16.11 1 12C1.74 10.18 2.96 8.59 4.47 7.34M9.9 4.24A9.45 9.45 0 0 1 12 4C17 4 21.27 7.89 23 12C22.43 13.39 21.61 14.65 20.59 15.72" stroke="currentColor" strokeWidth="2" />
                                            <path d="M1 1L23 23" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <span className="field-error">{errors.password.message}</span>
                            )}
                            {watchPassword && !errors.password && (
                                <div className="password-strength">
                                    <div className="strength-bar">
                                        {[1, 2, 3, 4, 5].map((level) => (
                                            <div
                                                key={level}
                                                className={`strength-segment ${level <= passwordStrength.level ? 'active' : ''}`}
                                                style={{ backgroundColor: level <= passwordStrength.level ? passwordStrength.color : '' }}
                                            ></div>
                                        ))}
                                    </div>
                                    <span className="strength-text" style={{ color: passwordStrength.color }}>
                                        {passwordStrength.text}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Confirm Password Field */}
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <div className={`input-wrapper ${errors.confirmPassword ? 'input-error' : ''}`}>
                                <span className="input-icon">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    id="confirmPassword"
                                    placeholder="Confirm your password"
                                    {...register('confirmPassword', {
                                        required: 'Please confirm your password',
                                        validate: (value) =>
                                            value === watchPassword || 'Passwords do not match'
                                    })}
                                />
                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? (
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C7 20 2.73 16.11 1 12C1.74 10.18 2.96 8.59 4.47 7.34M9.9 4.24A9.45 9.45 0 0 1 12 4C17 4 21.27 7.89 23 12C22.43 13.39 21.61 14.65 20.59 15.72" stroke="currentColor" strokeWidth="2" />
                                            <path d="M1 1L23 23" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <span className="field-error">{errors.confirmPassword.message}</span>
                            )}
                            {watchConfirmPassword && !errors.confirmPassword && watchPassword === watchConfirmPassword && (
                                <div className="password-match">
                                    <span className="match-success">
                                        <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Passwords match
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Terms Checkbox */}
                    <div className="form-group terms-group">
                        <label className={`checkbox-wrapper ${errors.agreeTerms ? 'checkbox-error' : ''}`}>
                            <input
                                type="checkbox"
                                {...register('agreeTerms', {
                                    required: 'You must agree to the terms'
                                })}
                            />
                            <span className="checkbox-custom"></span>
                            <span className="checkbox-label">
                                I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
                            </span>
                        </label>
                        {errors.agreeTerms && (
                            <span className="field-error" style={{ marginTop: '0.5rem' }}>
                                {errors.agreeTerms.message}
                            </span>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`auth-btn primary ${isSubmitting ? 'loading' : ''}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="spinner"></span>
                                <span>Creating Account...</span>
                            </>
                        ) : (
                            <>
                                <span>Create Account</span>
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M16 21V19C16 16.79 14.21 15 12 15H5C2.79 15 1 16.79 1 19V21" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                                    <path d="M20 8V14M23 11H17" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </>
                        )}
                    </button>

                    <div className="auth-divider"><span>or sign up with</span></div>

                    {/* Social Login */}
                    <div className="social-login">
                        <SocialSignIn />
                        <button type="button" className="social-btn github">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" />
                            </svg>
                            <span>GitHub</span>
                        </button>
                    </div>
                </form>

                <div className="auth-footer">
                    <p>Already have an account? <Link to="/login">Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
