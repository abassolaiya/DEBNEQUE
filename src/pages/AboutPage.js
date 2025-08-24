import { useState, useEffect } from "react";
import "../styles/AboutPage.css";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("story");
  const [animatedValues, setAnimatedValues] = useState({
    clients: 0,
    designs: 0,
    years: 0,
  });

  useEffect(() => {
    // Animate statistics counters
    const interval = setInterval(() => {
      setAnimatedValues((prev) => ({
        clients: prev.clients < 500 ? prev.clients + 5 : 500,
        designs: prev.designs < 1000 ? prev.designs + 10 : 1000,
        years: prev.years < 10 ? prev.years + 0.1 : 10,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Akinwale Debbie",
      role: "Founder & Creative Director",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      bio: "With over 15 years in the fashion industry, Eleanor brings visionary creativity to every design.",
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Head Tailor",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      bio: "Master tailor with expertise in precision cuts and flawless construction techniques.",
    },
    {
      id: 3,
      name: "Isabelle Laurent",
      role: "Textile Specialist",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=776&q=80",
      bio: "Isabelle sources the world's finest fabrics and materials for our collections.",
    },
    {
      id: 4,
      name: "Samuel Wright",
      role: "Fashion Designer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      bio: "Samuel brings innovative design concepts and contemporary aesthetics to our team.",
    },
  ];

  const values = [
    {
      title: "Craftsmanship",
      description:
        "Every piece is meticulously crafted with attention to detail and precision.",
      icon: "✂️",
    },
    {
      title: "Sustainability",
      description:
        "We prioritize ethical sourcing and environmentally responsible practices.",
      icon: "🌿",
    },
    {
      title: "Innovation",
      description:
        "Blending traditional techniques with contemporary design innovation.",
      icon: "💡",
    },
    {
      title: "Personalization",
      description:
        "Every client receives personalized attention and custom solutions.",
      icon: "🎨",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Consultation",
      description:
        "We begin with understanding your vision, needs, and style preferences.",
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    },
    {
      step: 2,
      title: "Design & Planning",
      description:
        "Our designers create sketches and select materials based on our discussion.",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=898&q=80",
    },
    {
      step: 3,
      title: "Creation",
      description:
        "Master artisans bring the design to life with precision and care.",
      image:
        "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    },
    {
      step: 4,
      title: "Fitting & Refinement",
      description: "We ensure perfect fit and make any necessary adjustments.",
      image:
        "https://images.unsplash.com/photo-1605763240000-7e93b172d754?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    },
    {
      step: 5,
      title: "Delivery",
      description:
        "Your finished piece is carefully packaged and delivered to you.",
      image:
        "https://images.unsplash.com/photo-1533090368676-1fd25485db88?ixlib=rb-4.0.3&auto=format&fit=crop&w=869&q=80",
    },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Story</h1>
            <p className="hero-subtitle">
              Where Tradition Meets Innovation in Fashion Design
            </p>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <h2>The DEBNEQUE Journey</h2>
              <p>
                Founded in 2015, DEBNEQUE emerged from a passion for creating
                clothing that celebrates individuality and craftsmanship. Our
                name combines "Debbie" and "Unique" - representing our
                commitment to sophisticated style and one-of-a-kind designs.
              </p>
              <p>
                What began as a small atelier has grown into a respected fashion
                house known for blending timeless elegance with contemporary
                vision. Each piece tells a story of meticulous attention to
                detail, quality materials, and artistic expression.
              </p>
            </div>
            <div className="intro-image">
              <div className="image-placeholder">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
                  alt="DEBNEQUE Atelier"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{animatedValues.clients}+</div>
              <div className="stat-label">Satisfied Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{animatedValues.designs}+</div>
              <div className="stat-label">Custom Designs</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {animatedValues.years.toFixed(1)}+
              </div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Handcrafted Quality</div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we create</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>From concept to creation - how we bring your vision to life</p>
          </div>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <div className="step-image">
                    <img src={step.image} alt={step.title} />
                  </div>
                  <div className="step-info">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The talented individuals behind DEBNEQUE</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-overlay">
                    <p>{member.bio}</p>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-text">
              <h2>Our Philosophy</h2>
              <blockquote>
                "Fashion is not just about clothing; it's about storytelling,
                self-expression, and craftsmanship. At DEBNEQUE, we believe that
                everyone deserves to wear pieces that reflect their unique
                identity and make them feel confident and beautiful."
              </blockquote>
              <p className="quote-author">- Akinwale Debbie, Founder</p>
            </div>
            <div className="philosophy-image">
              <img
                src="https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&auto=format&fit=crop&w=928&q=80"
                alt="DEBNEQUE Philosophy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create Something Extraordinary?</h2>
            <p>Begin your custom design journey with DEBNEQUE today</p>
            <div className="cta-buttons">
              <a href="/custom-design" className="button primary-button">
                Start Your Design
              </a>
              <a href="/contact" className="button secondary-button">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
