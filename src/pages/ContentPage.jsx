const ContentPage = ({ page }) => {
  const renderContent = () => {
    switch (page.layout) {
      case 'staff':
        return (
          <div className="staff-grid">
            {page.blocks.map((staff, idx) => (
              <article key={idx} className="staff-card hover-lift">
                <div className="staff-avatar-placeholder">
                  <img
                    src={staff.image || (idx % 2 === 0
                      ? '/assets/staff-female.png'
                      : '/assets/staff-male.png')
                    }
                    alt={staff.name}
                    className="staff-img"
                  />
                </div>
                <div className="staff-info">
                  <h3>{staff.name}</h3>
                  <span className="staff-role">{staff.role}</span>
                  {staff.bio && <p className="staff-bio">{staff.bio}</p>}
                </div>
              </article>
            ))}
          </div>
        );
      case 'editorial':
        return (
          <div className="editorial-layout">
            <div className="editorial-text">
              {page.content.split('\n\n').map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
            </div>
            <div className="editorial-visual">
              <div className="editorial-img-box glass">
                <img src={page.image} alt="Global Academy School" className="editorial-img" />
                <div className="editorial-img-overlay">
                  <span>Visionary Education Since 2005</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="ga-grid-3">
            {page.blocks.map((block) => (
              <article key={block.title} className="card hover-lift">
                <div className="card-icon-box">
                  {block.icon}
                </div>
                <h3>{block.title}</h3>
                <p>{block.text}</p>
              </article>
            ))}
          </div>
        );
    }
  };

  return (
    <main className="ga-content-page">
      <section className="ga-page-header">
        <div className="container">
          <div className="section-header center pt-20">
            <span className="ga-section-subtitle">{page.category}</span>
            <h1 className="text-gradient ga-mobile-h1">
              {page.title}
            </h1>
            <p className="lead-text" style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
              {page.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="content-layout">
        <div className="container">
          {renderContent()}
        </div>
      </section>
    </main>
  );
};

export default ContentPage;
