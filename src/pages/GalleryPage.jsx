import React from 'react'
import SEO from '../components/SEO'

const seeBatches = [
    { id: 1, title: '9th SEE Batch 2075', image: '/assets/batch-2075.png' },
    { id: 2, title: '6th SLC Batch 2072', image: '/assets/batch-2072.jpg' },
    { id: 3, title: '5th SLC Batch 2071', image: '/assets/batch-2071.jpg' },
    { id: 4, title: '3rd SLC Batch 2069', image: '/assets/batch-2069.jpg' },
]

function GalleryPage() {
    return (
        <div className="page-transition">
            <SEO
                title="Gallery"
                description="Explore the vibrant life at Global Academy Secondary School through our photo and video gallery. See our facilities, events, and student achievements."
            />
            <section className="ga-page-header">
                <div className="container">
                    <div className="section-header center pt-20">
                        <span className="ga-section-subtitle">School Life</span>
                        <h1 className="text-gradient ga-mobile-h1">
                            Photo Gallery
                        </h1>
                        <p className="lead-text" style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
                            Take a visual journey through our school events, milestones, and student life.
                        </p>
                    </div>
                </div>
            </section>

            <section className="ga-section ga-bg-light">
                <div className="container">

                    {/* SEE/SLC Batches Section */}
                    <div style={{ marginBottom: '5rem' }}>
                        <div className="section-header center pt-10 ga-mb-12">
                            <h3 className="ga-section-title">SEE / SLC Batches</h3>
                            <div className="ga-brand-divider"></div>
                        </div>

                        <div className="ga-grid-auto">
                            {seeBatches.map(batch => (
                                <div key={batch.id} className="glass hover-lift" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--line)', background: 'white' }}>
                                    <div style={{ height: '260px', backgroundColor: 'var(--bg-subtle)' }}>
                                        {/* Fallback styling in case image is missing */}
                                        <img
                                            src={batch.image}
                                            alt={batch.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='16' fill='%2394a3b8' text-anchor='middle' dy='.3em'%3EImage coming soon%3C/text%3E%3C/svg%3E"
                                            }}
                                        />
                                    </div>
                                    <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                                        <h4 style={{ fontSize: '1.25rem', color: 'var(--text-heavy)', margin: 0 }}>{batch.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Events Section (Ready for manual upload) */}
                    <div>
                        <div className="section-header center" style={{ marginBottom: '3rem' }}>
                            <h3 style={{ fontSize: '2.5rem', color: 'var(--text-heavy)', marginBottom: '1rem' }}>School Events</h3>
                            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--brand)', margin: '0 auto', borderRadius: '2px' }}></div>
                            <p style={{ color: 'var(--text-soft)', marginTop: '1.5rem', fontSize: '1.1rem' }}>More event photos coming soon...</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default GalleryPage
