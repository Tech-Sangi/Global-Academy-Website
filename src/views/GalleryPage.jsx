'use client';

import React, { useState } from 'react'
import SEO from '../components/SEO'
import { X, ZoomIn } from 'lucide-react'

const seeBatches = [
    { id: 1, title: '9th SEE Batch 2075', image: '/assets/batch-2075.png' },
    { id: 2, title: '7th SLC Batch 2073', image: '/assets/batch-2073.png' },
    { id: 3, title: '6th SLC Batch 2072', image: '/assets/batch-2072.png' },
    { id: 4, title: '5th SLC Batch 2071', image: '/assets/batch-2071.png' },
    { id: 5, title: '4th SLC Batch 2070', image: '/assets/batch-2070.png' },
    { id: 6, title: '3rd SLC Batch 2069', image: '/assets/batch-2069.png' },
]

function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="page-transition">
            <SEO
                title="Gallery"
                description="Explore the vibrant life at Global Academy Secondary School through our photo and video gallery. See our facilities, events, and student achievements."
            />

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="ga-modal-overlay"
                    onClick={() => setSelectedImage(null)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.92)',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem',
                        backdropFilter: 'blur(8px)',
                        cursor: 'zoom-out'
                    }}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        style={{
                            position: 'absolute',
                            top: '2rem',
                            right: '2rem',
                            background: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '44px',
                            height: '44px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                            zIndex: 1001,
                            transition: 'transform 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <X size={24} color="#1e293b" />
                    </button>

                    <div
                        className="ga-modal-content"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: '95%',
                            maxHeight: '90vh',
                            position: 'relative',
                            animation: 'modalFadeIn 0.3s ease-out'
                        }}
                    >
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '85vh',
                                borderRadius: '12px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                display: 'block'
                            }}
                        />
                        <div style={{
                            marginTop: '1.5rem',
                            textAlign: 'center',
                            color: 'white'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 500, margin: 0 }}>{selectedImage.title}</h3>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes modalFadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .ga-gallery-card:hover .ga-image-overlay {
                    opacity: 1 !important;
                }
                .ga-gallery-card:hover img {
                    transform: scale(1.05);
                }
            `}</style>

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

            <section className="ga-section ga-bg-light" style={{ paddingBottom: '8rem' }}>
                <div className="container">

                    {/* SEE/SLC Batches Section */}
                    <div style={{ marginBottom: '2rem' }}>
                        <div className="section-header center pt-10 ga-mb-12">
                            <h3 className="ga-section-title">SEE / SLC Batches</h3>
                            <div className="ga-brand-divider"></div>
                        </div>

                        <div className="ga-grid-auto" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
                            {seeBatches.map(batch => (
                                <div
                                    key={batch.id}
                                    className="ga-gallery-card glass hover-lift"
                                    onClick={() => setSelectedImage(batch)}
                                    style={{
                                        borderRadius: 'var(--radius-lg)',
                                        overflow: 'hidden',
                                        border: '1px solid var(--line)',
                                        background: 'white',
                                        cursor: 'pointer',
                                        position: 'relative'
                                    }}
                                >
                                    <div style={{
                                        position: 'relative',
                                        aspectRatio: '16 / 9',
                                        backgroundColor: 'var(--bg-subtle)',
                                        overflow: 'hidden'
                                    }}>
                                        <img
                                            src={batch.image}
                                            alt={batch.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)'
                                            }}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "/assets/placeholder-landscape.png"
                                            }}
                                        />
                                        <div
                                            className="ga-image-overlay"
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease',
                                                backdropFilter: 'blur(2px)'
                                            }}
                                        >
                                            <div style={{
                                                background: 'white',
                                                width: '48px',
                                                height: '48px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                                            }}>
                                                <ZoomIn size={20} color="var(--brand)" />
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ padding: '1.25rem', textAlign: 'center', background: 'white' }}>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-heavy)', margin: 0 }}>{batch.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default GalleryPage
