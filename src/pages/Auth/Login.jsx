import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import './Auth.css';
import SocialSignIn from '../../components/shared/SocialSignIn';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUser, setUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [showPassword, setShowPassword] = useState(false);
    const [authError, setAuthError] = useState('');

    // React Hook Form setup
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        }
    });

    // Get the redirect path from location state or default to home
    const from = location.state?.from?.pathname || location.state || '/';

    // Form submission handler
    const onSubmit = async (data) => {
        setAuthError('');

        try {
            const result = await signInUser(data.email, data.password);
            console.log('Login successful:', result.user);
            setUser(result.user);
            navigate(from, { replace: true });
        } catch (err) {
            console.error('Login error:', err);
            // Handle Firebase auth errors with user-friendly messages
            switch (err.code) {
                case 'auth/invalid-email':
                    setAuthError('Invalid email address format');
                    break;
                case 'auth/user-disabled':
                    setAuthError('This account has been disabled');
                    break;
                case 'auth/user-not-found':
                    setAuthError('No account found with this email');
                    break;
                case 'auth/wrong-password':
                    setAuthError('Incorrect password');
                    break;
                case 'auth/invalid-credential':
                    setAuthError('Invalid email or password');
                    break;
                case 'auth/too-many-requests':
                    setAuthError('Too many failed attempts. Please try again later');
                    break;
                default:
                    setAuthError('Failed to sign in. Please try again');
            }
        }
    };

    return (
        <div className="auth-container">
            {/* Animated Background */}
            <div className="auth-bg">
                <div className="auth-bg-gradient"></div>
                <div className="auth-bg-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                </div>
            </div>

            <div className="auth-card">
                {/* Logo Section */}
                <div className="auth-logo">
                    <div className="logo-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h1 className="logo-text">Fleet<span>Ledger</span></h1>
                </div>

                {/* Header */}
                <div className="auth-header">
                    <h2>Welcome Back</h2>
                    <p>Sign in to continue managing your fleet</p>
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

                {/* Form */}
                <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Field */}
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <div className={`input-wrapper ${errors.email ? 'input-error' : ''}`}>
                            <span className="input-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

                    {/* Password Field */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className={`input-wrapper ${errors.password ? 'input-error' : ''}`}>
                            <span className="input-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Enter your password"
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
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C7 20 2.73 16.11 1 12C1.74 10.18 2.96 8.59 4.47 7.34M9.9 4.24A9.45 9.45 0 0 1 12 4C17 4 21.27 7.89 23 12C22.43 13.39 21.61 14.65 20.59 15.72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1 1L23 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <span className="field-error">{errors.password.message}</span>
                        )}
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="form-options">
                        <label className="checkbox-wrapper">
                            <input
                                type="checkbox"
                                {...register('rememberMe')}
                            />
                            <span className="checkbox-custom"></span>
                            <span className="checkbox-label">Remember me</span>
                        </label>
                        <Link to="/forgot-password" className="forgot-link">
                            Forgot Password?
                        </Link>
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
                                <span>Signing In...</span>
                            </>
                        ) : (
                            <>
                                <span>Sign In</span>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </>
                        )}
                    </button>

                    {/* Divider */}
                    <div className="auth-divider">
                        <span>or continue with</span>
                    </div>

                    {/* Social Login */}
                    <div className="social-login">
                        {/* google sign in  */}
                        <SocialSignIn />
                        <button type="button" className="social-btn github">
                            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" />
                            </svg>
                            <span>GitHub</span>
                        </button>
                    </div>
                </form>

                {/* Footer */}
                <div className="auth-footer">
                    <p>Don't have an account? <Link to="/register">Create Account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
