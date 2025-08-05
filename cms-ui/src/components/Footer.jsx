import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          {/* Company Information */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-title">Commerce </h5>
              <p className="footer-description">
                Your trusted destination for quality products. We provide the best shopping experience with premium customer goods and service.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-links">
                <li>
                  <Link to="/" className="footer-link">Home</Link>
                </li>
                <li>
                  <Link to="/products" className="footer-link">Productss</Link>
                </li>
                <li>
                  <Link to="/categories" className="footer-link">Categories</Link>
                </li>
                <li>
                  <Link to="/deals" className="footer-link">Deals</Link>
                </li>
                <li>
                  <Link to="/new-arrivals" className="footer-link">New Arrivals</Link>
                </li>
              </ul>
            </div>
          </Col>

          {/* Customer Service */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-title">Customer Service</h5>
              <ul className="footer-links">
                <li>
                  <Link to="/contact" className="footer-link">Contact Us</Link>
                </li>
                <li>
                  <Link to="/shipping" className="footer-link">Shipping Info</Link>
                </li>
                <li>
                  <Link to="/returns" className="footer-link">Returns & Exchanges</Link>
                </li>
                <li>
                  <Link to="/faq" className="footer-link">FAQ</Link>
                </li>
                <li>
                  <Link to="/size-guide" className="footer-link">Size Guide</Link>
                </li>
              </ul>
            </div>
          </Col>

          {/* Contact Information */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <div className="footer-section">
              <h5 className="footer-title">Contact Information</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt contact-icon"></i>
                  <span>123 Commerce St, Business City, BC 123456</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone contact-icon"></i>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope contact-icon"></i>
                  <span>info@mecommerce.com</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-clock contact-icon"></i>
                  <span>Sun-Fri: 9AM-6PM</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Newsletter Subscription */}
        <Row className="newsletter-section">
          <Col lg={6} md={12} className="mb-3">
            <div className="newsletter-content">
              <h6 className="newsletter-title">Subscribe to Our Newsletters</h6>
              <p className="newsletter-description">Get updates about new products, deals and special offers!</p>
            </div>
          </Col>
          <Col lg={6} md={12} className="mb-3">
            <div className="newsletter-form">
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control newsletter-input" 
                  placeholder="Enter your email address"
                  aria-label="Email address for newsletter"
                />
                <button className="btn btn-primary newsletter-btn" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom Footer */}
        <Row className="footer-bottom">
          <Col md={6} sm={12} className="mb-2">
            <p className="copyright">
              © 2024 MERN 3PM. All rights reserved.
            </p>
          </Col>
          <Col md={6} sm={12} className="mb-2">
            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
              <Link to="/sitemap" className="footer-bottom-link">Sitemap</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}; 