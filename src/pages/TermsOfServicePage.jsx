import React from 'react'

function TermsOfServicePage() {
    return (
        <div className="page-transition">
            <section className="ga-page-header">
                <div className="container">
                    <div className="section-header center pt-20">
                        <span className="ga-section-subtitle">Legal</span>
                        <h1 className="text-gradient ga-mobile-h1">
                            Terms of Service
                        </h1>
                    </div>
                </div>
            </section>

            <section className="ga-section ga-bg-light">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', background: 'white', border: '1px solid var(--line)' }}>
                        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-heavy)', marginBottom: '1.5rem' }}>1. Acceptance of Terms</h2>
                        <p style={{ color: 'var(--text-soft)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            By accessing or using the Global Academy Secondary School website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-heavy)', marginBottom: '1.5rem' }}>2. Changes to Terms</h2>
                        <p style={{ color: 'var(--text-soft)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            We reserve the right to modify these Terms of Service at any time. We will provide notice of any significant changes by posting the new Terms on our website. Your continued use of the website following the posting of changes constitutes your acceptance of such changes.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-heavy)', marginBottom: '1.5rem' }}>3. Use of the Website</h2>
                        <p style={{ color: 'var(--text-soft)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content or disrupting the normal flow of dialogue within our website.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-heavy)', marginBottom: '1.5rem' }}>4. Intellectual Property</h2>
                        <p style={{ color: 'var(--text-soft)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            All content included on the website, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is the property of Global Academy Secondary School or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-heavy)', marginBottom: '1.5rem' }}>5. Limitation of Liability</h2>
                        <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                            In no event shall Global Academy Secondary School, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TermsOfServicePage
