import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="hero">
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo">
              <h1>Marcela Jacon Academy</h1>
            </div>
            <div className="nav-links">
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#safety">Trust & Safety</a>
              <button className="btn btn-outline">Sign In</button>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <h2>Find Your Trusted Mentor</h2>
            <p className="hero-subtitle">
              A secure and trustworthy platform connecting you with verified mentors
              who care about your growth.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary btn-large">
                Find a Mentor
              </button>
              <button className="btn btn-outline btn-large">
                Become a Mentor
              </button>
            </div>
            <div className="trust-badges">
              <div className="badge">
                <span className="badge-icon">✓</span>
                <span>Verified Mentors</span>
              </div>
              <div className="badge">
                <span className="badge-icon">🔒</span>
                <span>Secure Platform</span>
              </div>
              <div className="badge">
                <span className="badge-icon">⭐</span>
                <span>Transparent Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trust & Safety Section */}
      <section id="safety" className="trust-section">
        <div className="container">
          <h2>Your Safety is Our Priority</h2>
          <p className="section-subtitle">
            We've built trust and safety into every aspect of our platform
          </p>
          <div className="trust-features">
            <div className="trust-card">
              <div className="trust-icon">🛡️</div>
              <h3>Verified Mentors</h3>
              <p>
                Every mentor undergoes identity verification and credential validation.
                Only qualified professionals join our community.
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">🔐</div>
              <h3>Secure Communication</h3>
              <p>
                All conversations are encrypted. Your data is protected with
                industry-leading security standards.
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">⭐</div>
              <h3>Transparent Reviews</h3>
              <p>
                Read authentic reviews from real mentees. No fake reviews,
                no manipulation - just honest feedback.
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">🚨</div>
              <h3>24/7 Safety Support</h3>
              <p>
                Report any concerns instantly. Our safety team responds quickly
                to protect our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <h2>Why Choose Marcela Jacon Academy?</h2>
          <div className="features-grid">
            <div className="feature">
              <h4>Professional Verification</h4>
              <p>Multi-step verification ensures mentor credentials are legitimate</p>
            </div>
            <div className="feature">
              <h4>Secure Payments</h4>
              <p>PCI-compliant payment processing protects your financial data</p>
            </div>
            <div className="feature">
              <h4>Privacy Controls</h4>
              <p>You control who sees your information and how it's shared</p>
            </div>
            <div className="feature">
              <h4>Quality Assurance</h4>
              <p>Regular monitoring ensures mentors maintain high standards</p>
            </div>
            <div className="feature">
              <h4>Clear Policies</h4>
              <p>Transparent terms, privacy policy, and code of conduct</p>
            </div>
            <div className="feature">
              <h4>Community Standards</h4>
              <p>Zero tolerance for harassment, fraud, or unprofessional behavior</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create Your Profile</h3>
              <p>Tell us about your goals and what you're looking for in a mentor</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Find Your Mentor</h3>
              <p>Browse verified mentors, read reviews, and check credentials</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Connect Safely</h3>
              <p>Start with a free consultation in our secure platform</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Grow Together</h3>
              <p>Build a trusted relationship and achieve your goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of mentees who trust us with their growth</p>
          <button className="btn btn-primary btn-large">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Marcela Jacon Academy</h4>
              <p>Building trust in mentorship</p>
            </div>
            <div className="footer-section">
              <h4>For Mentees</h4>
              <ul>
                <li><a href="/docs/mentee-guide">Mentee Guide</a></li>
                <li><a href="/find-mentor">Find a Mentor</a></li>
                <li><a href="/safety">Safety Guidelines</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>For Mentors</h4>
              <ul>
                <li><a href="/docs/mentor-guide">Mentor Guide</a></li>
                <li><a href="/become-mentor">Become a Mentor</a></li>
                <li><a href="/verification">Verification Process</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Trust & Legal</h4>
              <ul>
                <li><a href="/security">Security</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/code-of-conduct">Code of Conduct</a></li>
                <li><a href="/terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Marcela Jacon Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
