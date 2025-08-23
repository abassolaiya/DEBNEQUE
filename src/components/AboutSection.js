import { Link } from "react-router-dom";

// Enhanced About Section
const AboutSection = () => {
  return (
    <section className="about">
      <div className="container about-container">
        <div className="about-content">
          <div className="section-header">
            <h2 className="section-title">About DEBNEQUE</h2>
            <p className="about-text">
              DEBNEQUE blends timeless elegance with modern style, offering
              ready-to-wear collections and bespoke designs tailored to your
              vision. Our creations are crafted with meticulous attention to
              detail and the finest materials.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
            <Link to="/about" className="button primary-button">
              Our Story
            </Link>
          </div>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 16L8 12L4 8M12 16L16 12L12 8"
                stroke="#FFD700"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
