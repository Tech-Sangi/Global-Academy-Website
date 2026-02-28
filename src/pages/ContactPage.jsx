import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import SEO from '../components/SEO'

function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })

    const [status, setStatus] = useState('idle') // idle, submitting, success

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('submitting')

        const formDataToSubmit = new FormData(e.target);
        formDataToSubmit.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
        formDataToSubmit.append("subject", "New Contact Form Submission - Global Academy");
        formDataToSubmit.append("from_name", "Global Academy Contact Form");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSubmit
            });

            if (response.ok) {
                setStatus('success')
                setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
                e.target.reset(); // clear standard inputs
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                console.error("Form submission failed");
                setStatus('idle');
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setStatus('idle');
        }
    }

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div className="page-transition">
            <SEO
                title="Contact Us"
                description="Get in touch with Global Academy Secondary School. Find our address, phone numbers, email, and location on the map. We are here to help."
            />
            <section className="ga-page-header">
                <div className="container">
                    <div className="section-header center pt-20">
                        <span className="ga-section-subtitle">Get In Touch</span>
                        <h1 className="text-gradient ga-mobile-h1">
                            Contact Us
                        </h1>
                        <p className="lead-text" style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
                            We would love to hear from you. Reach out with any questions, admission inquiries, or feedback.
                        </p>
                    </div>
                </div>
            </section>

            <section className="ga-section ga-bg-light">
                <div className="container" style={{ maxWidth: '1100px' }}>

                    <div className="ga-grid-2">

                        {/* Contact Information & Map Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="glass hover-lift" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', background: 'white', border: '1px solid var(--line)' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-heavy)' }}>Contact Information</h3>

                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-md)', color: 'var(--brand)' }}>
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Phone</strong>
                                            <span style={{ color: 'var(--text-soft)' }}>099-524838 / 524839</span>
                                        </div>
                                    </li>

                                    <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-md)', color: 'var(--brand)' }}>
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email</strong>
                                            <a href="mailto:info@globalacademy.edu.np" style={{ color: 'var(--brand)', textDecoration: 'none' }}>info@globalacademy.edu.np</a>
                                        </div>
                                    </li>

                                    <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-md)', color: 'var(--brand)' }}>
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Location</strong>
                                            <span style={{ color: 'var(--text-soft)', lineHeight: '1.5', display: 'block' }}>
                                                X56H+7H Bhimdatta, Nepal<br />
                                                Global Academy Secondary School
                                            </span>
                                        </div>
                                    </li>

                                    <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-md)', color: 'var(--brand)' }}>
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Office Hours</strong>
                                            <span style={{ color: 'var(--text-soft)' }}>Sunday - Friday: 8:00 AM - 5:00 PM<br />Saturday: Closed</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Embedded Google Map */}
                            <div className="glass hover-lift" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--line)', background: 'white', height: '350px' }}>
                                <iframe
                                    src="https://maps.google.com/maps?q=28.96071451691866,80.1789945&hl=en&z=17&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Global Academy Location Map"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form Column */}
                        <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', background: 'white', border: '1px solid var(--line)', boxShadow: 'var(--shadow-lg)' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text-heavy)' }}>Connect With Us</h3>
                            <p style={{ color: 'var(--text-soft)', marginBottom: '2.5rem' }}>Fill out the form below and we'll get back to you shortly.</p>

                            {status === 'success' ? (
                                <div style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #bbf7d0', textAlign: 'center' }}>
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Message Sent Successfully!</h4>
                                    <p style={{ fontSize: '0.95rem' }}>Thank you for reaching out. Our team will contact you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div className="ga-grid-2">
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label htmlFor="firstName" style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-heavy)' }}>First Name</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                style={{ padding: '0.8rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', outline: 'none', fontSize: '1rem', background: 'var(--bg)' }}
                                            />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label htmlFor="lastName" style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-heavy)' }}>Last Name</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                                style={{ padding: '0.8rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', outline: 'none', fontSize: '1rem', background: 'var(--bg)' }}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-heavy)' }}>Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            style={{ padding: '0.8rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', outline: 'none', fontSize: '1rem', background: 'var(--bg)' }}
                                        />
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label htmlFor="phone" style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-heavy)' }}>Phone no.</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            style={{ padding: '0.8rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', outline: 'none', fontSize: '1rem', background: 'var(--bg)' }}
                                        />
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-heavy)' }}>Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', outline: 'none', fontSize: '1rem', background: 'var(--bg)', resize: 'vertical' }}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        style={{
                                            padding: '1rem',
                                            borderRadius: 'var(--radius-md)',
                                            border: 'none',
                                            background: 'var(--brand)',
                                            color: 'white',
                                            fontWeight: '600',
                                            fontSize: '1.05rem',
                                            cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            transition: 'all 0.2s',
                                            opacity: status === 'submitting' ? 0.7 : 1,
                                            marginTop: '1rem',
                                            boxShadow: '0 4px 14px rgba(150, 17, 98, 0.3)'
                                        }}
                                        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)' }}
                                        onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
                                    >
                                        {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={20} />
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage
