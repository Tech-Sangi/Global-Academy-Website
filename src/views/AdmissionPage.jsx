import React from 'react'
import Link from 'next/link'
import { FileText, ClipboardCheck, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'

function AdmissionPage() {
    const steps = [
        {
            icon: FileText,
            title: '1. Registration',
            description: 'Obtain the admission form from the school office. Submit the correctly filled form before the deadline.'
        },
        {
            icon: ClipboardCheck,
            title: '2. Entrance Evaluation',
            description: 'Students appearing for certain grades will undergo a basic entrance examination or an interactive session to understand their academic level.'
        },
        {
            icon: GraduationCap,
            title: '3. Enrollment',
            description: 'Upon successful evaluation, complete the admission by submitting required documents and paying the initial enrollment fees.'
        }
    ]

    const documents = [
        "Photocopy of previous year's Mark Sheet",
        "Transfer Certificate (TC) from the previous school",
        "Two recent passport-sized photographs",
        "Photocopy of Birth Certificate"
    ]

    return (
        <div className="page-transition">
            <SEO
                title="Admission"
                description="Join Global Academy Secondary School. Find information about our admission process, requirements, and secure your child's future today."
            />
            <section className="ga-page-header">
                <div className="container">
                    <div className="section-header center pt-20">
                        <span className="ga-section-subtitle">Join Our Family</span>
                        <h1 className="text-gradient ga-mobile-h1">
                            Admission Process
                        </h1>
                        <p className="lead-text" style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
                            We keep our admission procedure simple, transparent, and student-friendly. Start your journey with Global Academy today.
                        </p>
                    </div>
                </div>
            </section>

            <section className="ga-section ga-bg-light">
                <div className="container" style={{ maxWidth: '1000px' }}>

                    {/* Admission Steps */}
                    <div style={{ marginBottom: '5rem' }}>
                        <div className="section-header center ga-mb-12">
                            <h2 className="ga-section-title">How to Apply</h2>
                            <div className="ga-brand-divider"></div>
                        </div>

                        <div className="ga-grid-auto">
                            {steps.map((step, idx) => (
                                <div key={idx} className="glass hover-lift" style={{ padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', background: 'white', border: '1px solid var(--line)', textAlign: 'center' }}>
                                    <div style={{
                                        width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'var(--bg-subtle)',
                                        color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        margin: '0 auto 1.5rem auto'
                                    }}>
                                        <step.icon size={32} />
                                    </div>
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-heavy)' }}>{step.title}</h3>
                                    <p style={{ color: 'var(--text-soft)', lineHeight: '1.6' }}>{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="ga-grid-2">

                        {/* Required Documents */}
                        <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', background: 'white', border: '1px solid var(--line)' }}>
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-heavy)', marginBottom: '1.5rem' }}>Required Documents</h3>
                            <p style={{ color: 'var(--text-soft)', marginBottom: '2rem' }}>Please ensure you have the following documents ready during the enrollment process:</p>

                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                {documents.map((doc, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <CheckCircle size={20} color="var(--brand)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                                        <span style={{ fontSize: '1.05rem', color: 'var(--text-heavy)' }}>{doc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA / Contact Box */}
                        <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', background: 'linear-gradient(135deg, var(--brand-dark), var(--brand))', color: 'white', border: 'none', boxShadow: 'var(--shadow-lg)' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'white' }}>Have Questions?</h3>
                            <p style={{ opacity: 0.9, lineHeight: '1.6', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                                Our admissions team is here to help you with any inquiries regarding the admission process, forms, and fees structure.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontWeight: '600' }}>Admissions Desk:</span>
                                    <span style={{ fontSize: '1.1rem' }}>099-524838</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontWeight: '600' }}>Email Us:</span>
                                    <span>info@globalacademy.edu.np</span>
                                </div>
                            </div>

                            <Link
                                href="/contact-us"
                                className="hover-lift"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                                    backgroundColor: 'white', color: 'var(--brand-dark)',
                                    padding: '1rem 2rem', borderRadius: 'var(--radius-md)',
                                    textDecoration: 'none', fontWeight: '700', fontSize: '1.05rem'
                                }}
                            >
                                Contact Admissions <ArrowRight size={20} />
                            </Link>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default AdmissionPage
