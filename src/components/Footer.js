import { Link } from "react-router-dom";
import { useState } from "react";

// Enhanced Footer
const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3 className="footer-title">
            <span className="logo-text">DEBNEQUE</span>
          </h3>
          <p className="footer-description">
            Elegant ready-to-wear and custom fashion designs crafted for the
            modern individual.
          </p>
          <div className="social-links">
            <a href="https://instagram.com" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 8V6C16 5.46957 16.2107 4.96086 16.5858 4.58579C16.9609 4.21071 17.4696 4 18 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V7C21 7.53043 20.7893 8.03914 20.4142 8.41421C20.0391 8.78929 19.5304 9 19 9H17"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </a>
            <a href="https://twitter.com" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 4.01C21 4.5 20.02 4.75 19 5C19.98 4.42 20.76 3.55 21.15 2.5C20.21 3.03 19.19 3.38 18.12 3.56C17.24 2.62 15.99 2 14.63 2C12.13 2 10.12 4.02 10.12 6.52C10.12 6.9 10.17 7.27 10.26 7.62C6.73 7.42 3.57 5.61 1.46 2.75C1.06 3.44 0.84 4.26 0.84 5.13C0.84 6.78 1.67 8.22 2.93 9.02C2.15 9 1.42 8.77 0.79 8.39V8.45C0.79 10.63 2.26 12.43 4.27 12.85C3.88 12.96 3.47 13.02 3.05 13.02C2.77 13.02 2.5 13 2.24 12.95C2.78 14.72 4.38 16 6.32 16.03C4.85 17.2 2.99 17.89 1 17.89C0.66 17.89 0.33 17.87 0 17.83C1.97 19.08 4.31 19.79 6.81 19.79C14.63 19.79 18.93 13.08 18.93 7.33C18.93 7.15 18.93 6.97 18.92 6.8C19.93 6.08 20.79 5.14 21.46 4.06L22 4.01Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="https://facebook.com" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/shop" className="footer-link">
                ShopDebneque
              </Link>
            </li>
            <li>
              <Link to="/custom-design" className="footer-link">
                DebnequeCustoms
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/size-guide" className="footer-link">
                Size Guide
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Customer Service</h3>
          <ul className="footer-links">
            <li>
              <Link to="/shipping" className="footer-link">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link to="/care" className="footer-link">
                Garment Care
              </Link>
            </li>
            <li>
              <Link to="/faq" className="footer-link">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="footer-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="footer-link">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Stay Updated</h3>
          <p className="newsletter-text">
            Subscribe to our newsletter for exclusive offers and updates
          </p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {submitted && (
              <p className="success-message">Subscribed successfully!</p>
            )}
          </form>
          <div className="contact-info">
            <p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              debnequeofficial@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2025 DEBNEQUE. All rights reserved.</p>
          <div className="payment-methods">
            <span className="payment-icon">Visa</span>
            <span className="payment-icon">Mastercard</span>
            <span className="payment-icon">Amex</span>
            <span className="payment-icon">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
