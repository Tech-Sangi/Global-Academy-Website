'use client';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Phone, Mail, MapPin, Facebook, Instagram, Youtube, GraduationCap, ArrowRight, Clock, Menu, X } from 'lucide-react'

const mainNav = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/who-we-are',
    children: [
      { label: 'Who We Are', to: '/who-we-are' },
      { label: 'Board of Directors', to: '/staff/board-of-directors' },
      { label: 'Admin. & Account Staff', to: '/staff/admin-account-staff' },
      {
        label: 'Teaching Faculty',
        to: '/staff/teaching-faculty',
        children: [
          { label: 'Vice-Principal & Incharges', to: '/staff/vice-principal-incharges' },
          { label: 'Head of Department', to: '/staff/head-of-department' },
          { label: 'Teaching Faculty', to: '/staff/teaching-faculty' },
        ]
      },
      { label: 'Non-Teaching Staffs', to: '/staff/non-teaching-staffs' },
      { label: 'Hall of Fame', to: '/hall-of-fame' },
    ]
  },
  { label: 'News and Events', to: '/news-and-updates' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Admission', to: '/admission' },
  { label: 'Contact', to: '/contact-us' },
]

const NavItem = ({ item, onClick, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const hasChildren = item.children && item.children.length > 0;

  // Close sub-menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleToggle = (e) => {
    if (hasChildren && isMobile) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (!hasChildren) {
      onClick();
    }
  };

  // Determine if active route
  const isActive = pathname === item.to || (item.to !== '/' && pathname.startsWith(item.to));

  return (
    <div
      className={`nav-item-wrapper ${hasChildren ? 'has-dropdown' : ''}`}
      onMouseEnter={() => !isMobile && hasChildren && setIsOpen(true)}
      onMouseLeave={() => !isMobile && hasChildren && setIsOpen(false)}
    >
      <Link
        href={item.to}
        className={`nav-link ${isActive ? 'active' : ''}`}
        onClick={handleToggle}
      >
        {item.label}
        {hasChildren && <ChevronDown size={14} className={`chevron ${isOpen ? 'rotate' : ''}`} />}
      </Link>

      {hasChildren && (
        <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
          {item.children.map((child) => (
            <NavItem key={child.to} item={child} onClick={onClick} isMobile={isMobile} />
          ))}
        </div>
      )}
    </div>
  );
};

function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1024)
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="site">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="top-strip">
        <div className="container top-strip-inner" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '2rem' }}>
          <div className="top-strip-social" style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginRight: 'auto' }}>
            <a href="https://www.facebook.com/globalacademy.edu.np" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', display: 'flex' }}><Facebook size={16} className="ga-social-hover" /></a>
            <a href="https://www.instagram.com/globalacademy.edu.np/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', display: 'flex' }}><Instagram size={16} className="ga-social-hover" /></a>
            <a href="https://www.youtube.com/@globalacademymnr" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', display: 'flex' }}><Youtube size={16} className="ga-social-hover" /></a>
          </div>
          <div className="top-strip-contact" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="tel:+97799524838" className="ga-nav-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}><Phone size={14} /> <span>099-524838/524839</span></a>
            <a href="mailto:info@globalacademy.edu.np" className="ga-nav-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}><Mail size={14} /> <span>info@globalacademy.edu.np</span></a>
          </div>
        </div>
      </div>

      <header className={`top-header glass ${isMobileMenuOpen ? 'mobile-open' : ''}`} role="banner">
        <div className="container header-inner">
          <Link href="/" className="branding" onClick={() => setIsMobileMenuOpen(false)} aria-label="Global Academy Secondary School — Home">
            <img src="/assets/logo.png" alt="Global Academy Secondary School Logo" className="header-logo-img" width={48} height={48} />
            <div className="branding-text">
              <div className="branding-title" aria-hidden="true">Global Academy</div>
              <span className="brand-subtitle">Secondary School</span>
            </div>
          </Link>

          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="main-nav"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav id="main-nav" className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`} role="navigation" aria-label="Main navigation">
            <div className="mobile-nav-header">
              <button className="close-menu" onClick={() => setIsMobileMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>
            <div className="nav-items-container">
              {mainNav.map((item) => (
                <NavItem key={item.to} item={item} onClick={() => setIsMobileMenuOpen(false)} isMobile={isMobile} />
              ))}
            </div>
            <Link href="/admission" className="cta-btn mobile-cta" onClick={() => setIsMobileMenuOpen(false)}>
              Admission Open
            </Link>
          </nav>

          <Link href="/admission" className="cta-btn desktop-cta">
            Admission Open
          </Link>
        </div>
      </header>

      <main id="main-content">
        {children}
      </main>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-grid-top">
            {/* Branding Column */}
            <div className="footer-col branding-col">
              <Link href="/" className="branding footer-logo" style={{ marginBottom: '1.5rem' }}>
                <img src="/assets/logo.png" alt="Global Academy Logo" className="footer-logo-img" />
                <h2 className="ga-text-white" style={{ margin: 0, fontSize: '1.8rem', color: 'white' }}>Global Academy</h2>
              </Link>
              <p className="footer-desc" style={{ marginBottom: '2rem' }}>
                Empowering minds and shaping excellence since 2005. A leading institution dedicated to holistic student development.
              </p>
              <div className="social-links">
                <a href="https://www.facebook.com/globalacademy.edu.np" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon"><Facebook size={20} /></a>
                <a href="https://www.instagram.com/globalacademy.edu.np/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon"><Instagram size={20} /></a>
                <a href="https://www.youtube.com/@globalacademymnr" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="social-icon"><Youtube size={20} /></a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {mainNav.map(item => (
                  <li key={item.to}>
                    <Link href={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <MapPin size={18} className="icon-brand" />
                  <span>X56H+7H Bhimdatta, Nepal</span>
                </li>
                <li>
                  <Phone size={18} className="icon-brand" />
                  <span>099-524838 / 524839</span>
                </li>
                <li>
                  <Mail size={18} className="icon-brand" />
                  <span>info@globalacademy.edu.np</span>
                </li>
                <li>
                  <Clock size={18} className="icon-brand" />
                  <span>Sun - Fri: 7:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Important Links Column */}
            <div className="footer-col">
              <h4>Important Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="https://see.ntc.net.np/" target="_blank" rel="noopener noreferrer">SEE Results</a>
                </li>
                <li>
                  <a href="https://student.globalacademy.edu.np" target="_blank" rel="noopener noreferrer">Student Portal</a>
                </li>
                <li>
                  <a href="#">Academic Calendar</a>
                </li>
                <li>
                  <a href="https://jcodebook.com" target="_blank" rel="noopener noreferrer">Learn Programming Free</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p className="footer-copy">
              © 2026 Global Academy Secondary School. All Rights Reserved. <br className="mobile-break" />
              Developed by <a href="https://techsangi.com.np" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 'bold' }}>Tech Sangi</a>
            </p>
            <div className="footer-legal">
              <Link href="/report-error" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }} className="hover-text-white">Report Website Error</Link>
              <Link href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }} className="hover-text-white">Privacy Policy</Link>
              <Link href="/terms-of-service" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }} className="hover-text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
