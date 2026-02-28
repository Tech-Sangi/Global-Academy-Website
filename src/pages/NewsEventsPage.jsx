import React, { useEffect } from 'react'
import SEO from '../components/SEO'

function NewsEventsPage() {
    useEffect(() => {
        // This script ensures the Facebook SDK parses the XFBML elements
        // when the component mounts, so the page plugin renders correctly
        // even during client-side navigation.
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }, []);

    return (
        <div className="page-transition">
            <SEO
                title="News and Events"
                description="Stay updated with the latest news, events, and announcements from Global Academy Secondary School. Never miss an important school update."
            />
            <section className="ga-page-header">
                <div className="container">
                    <div className="section-header center pt-20">
                        <span className="ga-section-subtitle">Stay Connected</span>
                        <h1 className="text-gradient ga-mobile-h1">
                            News & Events
                        </h1>
                        <p className="lead-text" style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
                            Catch up on the latest happenings, school announcements, and events directly from our official newsfeed.
                        </p>
                    </div>
                </div>
            </section>

            <section className="ga-section ga-bg-light">
                <div className="container">
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <iframe
                                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fglobalacademy.edu.np%2F&tabs=timeline&width=600&height=1200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                width="600"
                                height="1200"
                                style={{ border: 'none', overflow: 'hidden', maxWidth: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                title="Global Academy News Feed"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewsEventsPage
