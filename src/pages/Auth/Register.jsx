import React, { useState } from 'react';
import { Link } from 'react-router';
import './Auth.css';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Register form submitted:', formData);
    };

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

    const passwordStrength = getPasswordStrength(formData.password);

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

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <div className="input-wrapper">
                                <span className="input-icon">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <div className="input-wrapper">
                                <span className="input-icon">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" />
                                        <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <div className="input-wrapper">
                                <span className="input-icon">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M22 16.92V19.92C22 20.48 21.75 21 21.32 21.37C20.88 21.73 20.32 21.91 19.76 21.86C16.74 21.53 13.83 20.49 11.26 18.84C8.89 17.33 6.87 15.31 5.36 12.94C3.7 10.35 2.66 7.41 2.34 4.36C2.29 3.81 2.46 3.26 2.82 2.83C3.17 2.39 3.68 2.15 4.23 2.14H7.23C8.15 2.13 8.94 2.79 9.1 3.7C9.23 4.66 9.47 5.6 9.81 6.5C10.08 7.12 9.95 7.83 9.49 8.32L8.22 9.59C9.62 12.06 11.65 14.09 14.12 15.49L15.39 14.22C15.88 13.76 16.59 13.63 17.21 13.9C18.11 14.24 19.05 14.48 20.01 14.61C20.93 14.77 21.6 15.58 21.58 16.51L22 16.92Z" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
                            </div>
                        </div>

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
                                <input type="text" id="company" name="company" placeholder="Enter company name" value={formData.company} onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="input-wrapper">
                                <span className="input-icon">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
                                        <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder="Create a password" value={formData.password} onChange={handleChange} required />
                                <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" />
                                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </button>
                            </div>
                            {formData.password && (
                                <div className="password-strength">
                                    <div className="strength-bar">
                                        {[1, 2, 3, 4, 5].map((level) => (
                                            <div key={level} className={`strength-segment ${level <= passwordStrength.level ? 'active' : ''}`} style={{ backgroundColor: level <= passwordStrength.level ? passwordStrength.color : '' }}></div>
                                        ))}
                                    </div>
                                    <span className="strength-text" style={{ color: passwordStrength.color }}>{passwordStrength.text}</span>
                                </div>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <div className="input-wrapper">
                                <span className="input-icon">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </span>
                                <input type={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required />
                                <button type="button" className="password-toggle" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" />
                                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </button>
                            </div>
                            {formData.confirmPassword && (
                                <div className="password-match">
                                    {formData.password === formData.confirmPassword ? (
                                        <span className="match-success">✓ Passwords match</span>
                                    ) : (
                                        <span className="match-error">✗ Passwords don't match</span>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="form-group terms-group">
                        <label className="checkbox-wrapper">
                            <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required />
                            <span className="checkbox-custom"></span>
                            <span className="checkbox-label">I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link></span>
                        </label>
                    </div>

                    <button type="submit" className="auth-btn primary">
                        <span>Create Account</span>
                        <svg viewBox="0 0 24 24" fill="none">
                            <path d="M16 21V19C16 16.79 14.21 15 12 15H5C2.79 15 1 16.79 1 19V21" stroke="currentColor" strokeWidth="2" />
                            <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                            <path d="M20 8V14M23 11H17" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </button>

                    <div className="auth-divider"><span>or sign up with</span></div>

                    <div className="social-login">
                        <button type="button" className="social-btn google">
                            <svg viewBox="0 0 24 24"><path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" /><path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.13 18.63 6.72 16.69 5.84 14.09H2.18V16.94C3.99 20.53 7.7 23 12 23Z" fill="#34A853" /><path d="M5.84 14.09C5.62 13.43 5.49 12.73 5.49 12C5.49 11.27 5.62 10.57 5.84 9.91V7.06H2.18C1.43 8.55 1 10.22 1 12C1 13.78 1.43 15.45 2.18 16.94L5.84 14.09Z" fill="#FBBC05" /><path d="M12 5.37C13.62 5.37 15.06 5.92 16.21 6.98L19.36 3.83C17.45 2.09 14.97 1 12 1C7.7 1 3.99 3.47 2.18 7.06L5.84 9.91C6.72 7.31 9.13 5.37 12 5.37Z" fill="#EA4335" /></svg>
                            <span>Google</span>
                        </button>
                        <button type="button" className="social-btn github">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" /></svg>
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
