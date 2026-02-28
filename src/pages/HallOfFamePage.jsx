import React from 'react'
import { GraduationCap, Award, Stethoscope, HeartPulse } from 'lucide-react'

const alumniData = [
    {
        name: 'Kabita Ojha',
        achievement: 'Medical Professional',
        description: 'A dedicated medical professional trained to provide top-tier healthcare services.',
        image: '/assets/alumni-kabita.jpg',
        icon: HeartPulse
    },
    {
        name: 'Yogesh Bokati',
        achievement: 'MBBS Scholar',
        description: 'Pursuing MBBS. A proud alumnus of Global Academy, demonstrating excellence in the medical field.',
        image: '/assets/alumni-yogesh.jpg',
        icon: Stethoscope,
        specialAchievement: 'Sudurpaschim SEE Topper'
    },
    {
        name: 'Yogana Bokati',
        achievement: 'MBBS Scholar',
        description: 'Currently pursuing MBBS, paving the way for a successful career in healthcare.',
        image: '/assets/alumni-yogana.jpg',
        icon: Stethoscope
    },
    {
        name: 'Priya Ojha',
        achievement: 'Nursing Supervisor (USA)',
        description: 'Taking our global name literally, providing compassionate nursing care and supervision in the United States.',
        image: '/assets/alumni-priya.jpg',
        icon: HeartPulse
    }
]

function HallOfFamePage() {
    return (
        <div className="page-transition">
            {/* HEADER SECTION */}
            <section className="ga-page-header">
                <div className="container">
                    <div className="section-header center pt-20">
                        <span className="ga-section-subtitle">Student Success</span>
                        <h1 className="text-gradient ga-mobile-h1">
                            Hall of Fame
                        </h1>
                        <p className="lead-text" style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
                            Celebrating the outstanding achievements of our alumni who are making a global impact in their respective fields.
                        </p>
                    </div>
                </div>
            </section>


            {/* ALUMNI GRID */}
            <section className="ga-section" style={{ padding: '4rem 0 8rem 0' }}>
                <div className="container">
                    <div className="ga-grid-auto">
                        {alumniData.map((alumni, idx) => (
                            <div key={idx} className="hover-lift glass" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--line)', background: 'white' }}>
                                <div style={{ height: '300px', backgroundColor: 'var(--bg-subtle)' }}>
                                    <img src={alumni.image} alt={alumni.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                                </div>
                                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--brand)', color: 'white', marginBottom: '1rem', marginTop: '-3rem', border: '4px solid white', position: 'relative', zIndex: 2 }}>
                                        <alumni.icon size={20} />
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{alumni.name}</h3>
                                    <p style={{ color: 'var(--brand)', fontWeight: '600', fontSize: '0.875rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
                                        <GraduationCap size={16} /> {alumni.achievement}
                                    </p>

                                    {alumni.specialAchievement && (
                                        <div style={{ display: 'inline-block', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 'bold', color: 'orange', marginBottom: '1rem' }}>
                                            ⭐ {alumni.specialAchievement}
                                        </div>
                                    )}

                                    <p style={{ color: 'var(--text-soft)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                                        {alumni.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HallOfFamePage
