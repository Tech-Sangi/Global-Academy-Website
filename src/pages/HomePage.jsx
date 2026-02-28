import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  GraduationCap,
  Library,
  MonitorSmartphone,
  Bus,
  Shield,
  Quote,
  Sparkles,
  Star,
  Trophy,
  ChevronRight,
  Award,
  Users,
} from 'lucide-react'

const whyGlobal = [
  {
    icon: Trophy,
    title: 'Excellence in Academics',
    text: 'Consistently ranked as a leading institution with a legacy of high-achieving board results.',
  },
  {
    icon: Sparkles,
    title: 'Holistic Development',
    text: 'Rich extracurricular programs including sports, culture, and arts for a balanced growth.',
  },
  {
    icon: GraduationCap,
    title: 'Expert Faculty',
    text: 'Dedicated team of highly qualified and experienced educators committed to student success.',
  },
]

const schoolFeatures = [
  { icon: BookOpenText, title: 'Modern Classrooms', text: 'Smart, well-ventilated, and digitally equipped learning spaces.' },
  { icon: Library, title: 'Knowledge Center', text: 'Extensive library with digital resources and quiet study areas.' },
  { icon: MonitorSmartphone, title: 'Tech Laboratories', text: 'Advanced science and computer labs with high-speed connectivity.' },
  { icon: Bus, title: 'Safe Transport', text: 'Reliable transportation services across the city with GPS tracking.' },
  { icon: Shield, title: 'Secure School', text: '24/7 CCTV surveillance and dedicated security personnel.' },
  { icon: Users, title: 'Vibrant Community', text: 'A diverse and inclusive environment fostering peer learning.' },
]

function HomePage() {
  return (
    <div className="home-modern">
      <SEO
        title="Best Secondary School in Mahendranagar"
        description="Global Academy Secondary School is the premier educational institution in Mahendranagar, Kanchanpur. Offering Montessori to Grade 10 with a focus on academic excellence, innovation, and holistic student development."
      />
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-tag">
              <Star size={16} fill="var(--brand)" /> <span>Leading Nepal's Education Since 2005</span>
            </div>
            <h1>
              Empowering Minds,<br />
              <span className="text-gradient">Shaping Future Leaders.</span>
            </h1>
            <p>
              Providing world-class education in Mahendranagar, Kanchanpur. We combine academic brilliance with holistic growth to prepare students for a changing world.
            </p>
            <div className="btn-group">
              <Link to="/admission" className="cta-btn hover-lift">
                Apply for Admission <ArrowRight size={18} />
              </Link>
              <Link to="/who-we-are" className="btn-outline hover-lift" style={{
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--line)',
                textDecoration: 'none',
                color: 'var(--text)',
                fontWeight: '600'
              }}>
                Discover Global
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-img-wrap">
              <img src="/assets/hero-school-actual.jpg" alt="Global Academy Modern School" />
            </div>
            <div className="hero-card-float glass">
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                <Award size={20} color="var(--brand)" />
                <strong style={{ fontSize: '0.875rem' }}>Top Rated</strong>
              </div>
              <p style={{ fontSize: '0.75rem', margin: 0 }}>Recognized for academic brilliance in secondary education.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPAL MESSAGE */}
      <section className="principal-section">
        <div className="container principal-grid">
          <div className="principal-visual">
            <div className="principal-img-wrap">
              <img src="/principal-portrait.png" alt="Principal Mr. Surendra Raj Ojha" />
            </div>
            <div className="principal-badge">
              <strong style={{ display: 'block' }}>20+ Years</strong>
              <span style={{ fontSize: '0.875rem' }}>of Educational Leadership</span>
            </div>
          </div>
          <div className="principal-content">
            <Quote size={64} className="quote-icon" />
            <h2>Message from the <span className="text-gradient">Principal's Desk</span></h2>
            <div className="principal-text">
              <p>
                Welcome to Global Academy. Since 2005, we have been committed to providing a transformative educational experience. Our focus is not just on academic results, but on building character and preparing students for the challenges of a modern world.
              </p>
              <p>
                We believe in a partnership between the school, students, and parents to create an environment where every child can excel. Excellence at Global is not a goal—it is our way of life.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <h4 style={{ marginBottom: '0.25rem' }}>Mr. Surendra Raj Ojha</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--brand)', fontWeight: '600' }}>Principal, Global Academy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="ga-section-subtitle" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand)', fontWeight: '700', fontSize: '0.75rem' }}>Our Distinction</span>
            <h2>Why Choose Global Academy?</h2>
          </div>
          <div className="feature-grid">
            {whyGlobal.map((item, idx) => (
              <div key={idx} className="feature-card hover-lift">
                <div className="feature-icon-box">
                  <item.icon size={28} />
                </div>
                <h3>{item.title}</h3>
                <p style={{ color: 'var(--text-soft)', marginTop: '0.75rem', lineHeight: '1.6' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES GRID */}
      <section className="ga-section" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="ga-section-subtitle" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand)', fontWeight: '700', fontSize: '0.75rem' }}>School Life</span>
            <h2>World Class Facilities</h2>
          </div>
          <div className="ga-grid-3">
            {schoolFeatures.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '1.25rem', padding: '1.5rem', borderRadius: 'var(--radius-md)', background: 'white', border: '1px solid var(--line)' }}>
                <div style={{ color: 'var(--brand)', marginTop: '0.25rem' }}>
                  <item.icon size={22} />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-soft)', lineHeight: '1.5' }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS & HALL OF FAME */}
      <section className="ga-section" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="ga-section-subtitle" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--brand)', fontWeight: '700', fontSize: '0.75rem' }}>Hall of Fame</span>
            <h2>Our Proud Achievements</h2>
            <p style={{ color: 'var(--text-soft)', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>Recognized globally and locally for our persistent dedication to excellence in education, infrastructure, and student development.</p>
          </div>
          <div className="ga-grid-auto">
            {/* Achievement 1 */}
            <div className="hover-lift glass" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--line)', background: 'white' }}>
              <div style={{ height: '220px', overflow: 'hidden', backgroundColor: 'var(--bg-subtle)' }}>
                <img src="/assets/award-innovation.png" alt="Innovation in Education Award" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--brand)' }}>
                  <Award size={18} /> <span style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>International Award</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Innovation in Education</h3>
                <p style={{ color: 'var(--text-soft)', fontSize: '0.875rem', lineHeight: '1.5' }}>Global Academy Sec. School was honored with the "Innovation in Education Award" at the Exito International Awards Dubai 2024.</p>
              </div>
            </div>

            {/* Achievement 2 */}
            <div className="hover-lift glass" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--line)', background: 'white' }}>
              <div style={{ height: '220px', overflow: 'hidden', backgroundColor: 'var(--bg-subtle)' }}>
                <img src="/assets/award-see-yogesh.jpg" alt="SEE Topper Yogesh Bokati" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--brand)' }}>
                  <Trophy size={18} /> <span style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Academic Excellence</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Sudurpaschim SEE Topper</h3>
                <p style={{ color: 'var(--text-soft)', fontSize: '0.875rem', lineHeight: '1.5' }}>Proud of our student, Yogesh Bokati, for securing the top position in the Sudurpaschim Province SEE Examinations.</p>
              </div>
            </div>

            {/* Achievement 3 */}
            <div className="hover-lift glass" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--line)', background: 'white' }}>
              <div style={{ height: '220px', overflow: 'hidden', backgroundColor: 'var(--bg-subtle)' }}>
                <img src="/assets/award-principal.png" alt="Most Innovative Principal of the Year" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--brand)' }}>
                  <Sparkles size={18} /> <span style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Leadership</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Innovative Principal Award</h3>
                <p style={{ color: 'var(--text-soft)', fontSize: '0.875rem', lineHeight: '1.5' }}>Our Founder Principal, Mr. Surendra Raj Ojha, was awarded "Most Innovative Principal of the Year" in Dubai 2024.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE IMAGES */}
      <section style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="ga-grid-2">
            <div className="hover-lift" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px', position: 'relative' }}>
              <img src="/school-life-1.png" alt="Library" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="glass" style={{ position: 'absolute', bottom: '2rem', left: '2rem', padding: '1rem 2rem', borderRadius: 'var(--radius-md)', color: 'var(--text)' }}>
                <h4 style={{ margin: 0 }}>Resourceful Library</h4>
              </div>
            </div>
            <div className="hover-lift" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px', position: 'relative' }}>
              <img src="/school-life-2.png" alt="Science Lab" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="glass" style={{ position: 'absolute', bottom: '2rem', left: '2rem', padding: '1rem 2rem', borderRadius: 'var(--radius-md)', color: 'var(--text)' }}>
                <h4 style={{ margin: 0 }}>Modern Laboratories</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '6rem 0', background: 'var(--brand-dark)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ color: 'white', fontSize: '3rem', marginBottom: '1.5rem' }}>Start Your Journey Today</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '3rem' }}>
            Admissions are now open for the upcoming academic session. Join the Global family and give your future the best start.
          </p>
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <Link to="/admission" className="cta-btn hover-lift" style={{ background: 'white', color: 'var(--brand-dark)' }}>
              Explore Admissions
            </Link>
            <Link to="/contact-us" className="btn-outline hover-lift" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white', textDecoration: 'none', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-md)', fontWeight: '600' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
