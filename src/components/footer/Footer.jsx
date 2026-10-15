import React from 'react';
import { companyData } from '../../data/companyData';
import './Footer.css';

export default function Footer({ onNavigate }) {
  const handleNav = (path, e) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      {/* Top Banner / Emergency Hook */}
      <div className="footer-emergency-hook">
        <div className="container hook-container">
          <div className="hook-content">
            <span className="eyebrow">Emergency Mitigation Across Central Texas</span>
            <h2 className="hook-title">Property emergencies require direct answers.</h2>
            <p className="hook-subtitle">
              Veteran-owned emergency response ready 24 hours a day, 7 days a week. Speak directly with a mitigation specialist now.
            </p>
          </div>
          <div className="hook-action">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              Call {companyData.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Col 1: Brand & Credibility */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <img
                src="/images/brand/logo.png"
                alt="24 Hr FloodMasters Logo"
                className="footer-logo"
                width="64"
                height="64"
              />
              <span className="footer-brand-title">24 HR FLOOD MASTERS</span>
            </div>
            <p className="footer-mission">
              Veteran-owned emergency property mitigation founded by U.S. Marine Corps veteran Rene Molina. Providing honest, rapid stabilization and moisture monitoring throughout Central Texas.
            </p>
            <div className="footer-meta-pill">
              <span className="pulse-dot"></span> 24/7/365 Central Texas Dispatch
            </div>
          </div>

          {/* Col 2: Primary Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Emergency Services</h4>
            <ul className="footer-links">
              {companyData.services.map((svc) => (
                <li key={svc.slug}>
                  <a href={`/${svc.slug}`} onClick={(e) => handleNav(`/${svc.slug}`, e)}>
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div className="footer-col">
            <h4 className="footer-heading">Service Locations</h4>
            <ul className="footer-links">
              <li><a href="/water-damage-restoration-temple" onClick={(e) => handleNav('/water-damage-restoration-temple', e)}>Temple Water Damage</a></li>
              <li><a href="/belton-water-mitigation" onClick={(e) => handleNav('/belton-water-mitigation', e)}>Belton Water Mitigation</a></li>
              <li><a href="/killeen-water-mitigation" onClick={(e) => handleNav('/killeen-water-mitigation', e)}>Killeen Water Mitigation</a></li>
              <li><a href="/salado-water-mitigation" onClick={(e) => handleNav('/salado-water-mitigation', e)}>Salado Water Mitigation</a></li>
              <li><a href="/waco-water-mitigation" onClick={(e) => handleNav('/waco-water-mitigation', e)}>Waco Water Damage</a></li>
              <li><a href="/service-areas" onClick={(e) => handleNav('/service-areas', e)}>All Central Texas Coverage →</a></li>
            </ul>
          </div>

          {/* Col 4: Verified Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Direct Contact</h4>
            <div className="footer-contact-block">
              <div className="contact-item">
                <span className="contact-label">24/7 Emergency Line</span>
                <a href={`tel:${companyData.phoneRaw}`} className="contact-value highlight">
                  {companyData.phone}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email Inquiries</span>
                <a href={`mailto:${companyData.email}`} className="contact-value">
                  {companyData.email}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Regional Dispatch Hubs</span>
                <span className="contact-plain">Temple & Pflugerville, TX</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Service Scope</span>
                <span className="contact-plain">Mitigation & Stabilization (Non-Reconstruction)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Compliance */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p className="copyright-text">
            © {new Date().getFullYear()} 24 Hr FloodMasters LLC. All rights reserved. Veteran-Owned Emergency Property Restoration.
          </p>
          <div className="bottom-links">
            <a href="/about-us" onClick={(e) => handleNav('/about-us', e)}>About Us</a>
            <a href="/gallery" onClick={(e) => handleNav('/gallery', e)}>Equipment & Field Gallery</a>
            <a href="/blog" onClick={(e) => handleNav('/blog', e)}>Knowledge Guides</a>
            <a href="/privacy-policy" onClick={(e) => handleNav('/privacy-policy', e)}>Privacy Policy</a>
            <a href="/terms" onClick={(e) => handleNav('/terms', e)}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
