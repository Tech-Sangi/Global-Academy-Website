import React from 'react'
import SEO from '../components/SEO'

function PrivacyPolicyPage() {
    return (
        <div className="page-transition">
            <SEO
                title="Privacy Policy"
                description="Global Academy Secondary School Privacy Policy. Information on how we collect, use, and protect your personal data."
            />
            <section className="ga-page-header">
                <div className="container">
                    <div className="section-header center pt-20">
                        <span className="ga-section-subtitle">Legal</span>
                        <h1 className="text-gradient ga-mobile-h1">
                            Privacy Policy
                        </h1>
                    </div>
                </div>
            </section>

            <section className="ga-section ga-bg-light">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', background: 'white', border: '1px solid var(--line)' }}>
                        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-heavy)', marginBottom: '1.5rem' }}>1. Introduction</h2>
                        <p style={{ color: 'var(--text-soft)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            Welcome to Global Academy Secondary School. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-heavy)', marginBottom: '1.5rem' }}>2. Data We Collect</h2>
                        <p style={{ color: 'var(--text-soft)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                            <br /><br />
                            <strong>Identity Data:</strong> includes first name, last name, username or similar identifier, marital status, title, date of birth and gender.
                            <br />
                            <strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.
                            <br />
                            <strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-heavy)', marginBottom: '1.5rem' }}>3. How We Use Your Data</h2>
                        <p style={{ color: 'var(--text-soft)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            <br /><br />
                            - Where we need to perform the contract we are about to enter into or have entered into with you.
                            <br />
                            - Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
                            <br />
                            - Where we need to comply with a legal obligation.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-heavy)', marginBottom: '1.5rem' }}>4. Data Security</h2>
                        <p style={{ color: 'var(--text-soft)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-heavy)', marginBottom: '1.5rem' }}>5. Contact Us</h2>
                        <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at info@globalacademy.edu.np.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PrivacyPolicyPage
