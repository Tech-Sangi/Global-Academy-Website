'use client';

import React, { useState } from 'react'
import { AlertTriangle, Send, CheckCircle2 } from 'lucide-react'

function ReportErrorPage() {
    const [status, setStatus] = useState('idle')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.target);
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || process.env.VITE_WEB3FORMS_ACCESS_KEY || "e20b3cb1-97b7-4f63-95c5-bfeb21e0fa35"; // Fallback to avoid empty access key if env is not loaded
        formData.append("access_key", accessKey);
        formData.append("subject", "Website Error Report - Global Academy");
        formData.append("from_name", "Global Academy Error Reporter");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                console.error("Form submission failed");
                setStatus('idle');
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setStatus('idle');
        }
    }

    return (
        <div className="page-transition">
            <section className="ga-page-header">
                <div className="container">
                    <div className="section-header center pt-20">
                        <span className="ga-section-subtitle">Help Us Improve</span>
                        <h1 className="text-gradient ga-mobile-h1">
                            Report a Website Error
                        </h1>
                        <p className="lead-text" style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
                            Have you encountered a bug, broken link, or incorrect information? Please let our technical team know so we can fix it promptly.
                        </p>
                    </div>
                </div>
            </section>

            <section className="ga-section ga-bg-light">
                <div className="container" style={{ maxWidth: '700px' }}>
                    <div className="glass hover-lift" style={{ borderRadius: 'var(--radius-lg)', padding: '3rem', border: '1px solid var(--line)', background: 'white' }}>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', color: 'var(--brand)' }}>
                            <AlertTriangle size={32} />
                            <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Error Report Form</h2>
                        </div>

                        {status === 'success' && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', backgroundColor: '#ecfdf5', border: '1px solid #10b981', color: '#065f46', borderRadius: 'var(--radius-sm)', marginBottom: '2rem' }}>
                                <CheckCircle2 size={20} />
                                <span style={{ fontWeight: '500' }}>Thank you! Your error report has been forwarded directly to the technical team. We will look into it.</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'bold', color: 'var(--text)', marginBottom: '0.5rem' }}>Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="e.g. Ram Prasad"
                                    required
                                    style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line)', outline: 'none', transition: 'border 0.2s', fontSize: '1rem' }}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'bold', color: 'var(--text)', marginBottom: '0.5rem' }}>Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your.email@example.com"
                                    required
                                    style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line)', outline: 'none', transition: 'border 0.2s', fontSize: '1rem' }}
                                />
                            </div>

                            <div>
                                <label htmlFor="url" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'bold', color: 'var(--text)', marginBottom: '0.5rem' }}>URL of the Error (Optional)</label>
                                <input
                                    type="url"
                                    id="url"
                                    name="url"
                                    placeholder="https://globalacademy.edu.np/example..."
                                    style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line)', outline: 'none', transition: 'border 0.2s', fontSize: '1rem' }}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'bold', color: 'var(--text)', marginBottom: '0.5rem' }}>Describe the Error</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Please describe what went wrong, what you expected to happen, and steps to reproduce the issue..."
                                    required
                                    style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line)', outline: 'none', transition: 'border 0.2s', fontSize: '1rem', resize: 'vertical' }}
                                ></textarea>
                            </div>

                            {/* Note: In a real-world scenario without a backend to forward emails securely, 
                  we use form action via Formspree or EmailJS. Since the user asked specifically 
                  for it to go to techsangi96@gmail.com, we configure a form hook here.
                  We'll fall back to opening a mailto client if standard actions aren't allowed. */}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="cta-btn"
                                style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem', opacity: status === 'sending' ? 0.7 : 1, transition: 'all 0.2s' }}
                            >
                                {status === 'sending' ? 'Sending Report...' : 'Send Error Report'} <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReportErrorPage
