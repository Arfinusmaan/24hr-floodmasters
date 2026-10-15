import React, { useState } from 'react';
import { companyData } from '../../data/companyData';
import './Header.css';

export default function Header({ currentPath, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNavClick = (path, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header" role="banner">
      {/* Top Emergency Ticker - Desktop Only */}
      <div className="header-emergency-ticker desktop-only-ticker">
        <div className="container ticker-container">
          <div className="ticker-left">
            <span className="status-pill">
              <span className="pulse-dot"></span> 24/7 Live Emergency Dispatch
            </span>
            <span className="ticker-location">Serving Temple, Waco, Belton, Salado & Central Texas</span>
          </div>
          <div className="ticker-right">
            <span className="ticker-badge">Veteran-Owned & Operated</span>
            <a href={`tel:${companyData.phoneRaw}`} className="ticker-phone">
              Emergency: <strong>{companyData.phone}</strong>
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="header-main-bar">
        <div className="container header-container">
          <a
            href="/"
            onClick={(e) => handleNavClick('/', e)}
            className="header-brand"
            aria-label="24 Hr FloodMasters Home"
          >
            <img
              src="/images/brand/logo.png"
              alt="24 Hr FloodMasters Logo"
              className="brand-logo-img"
              width="64"
              height="64"
            />
            <div className="brand-text">
              <span className="brand-name">24 HR FLOOD MASTERS</span>
              <span className="brand-sub">WATER · FIRE · MOLD · STORM</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <a
              href="/"
              onClick={(e) => handleNavClick('/', e)}
              className={`nav-link ${currentPath === '/' ? 'active' : ''}`}
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div
              className="nav-item-dropdown"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`nav-link dropdown-toggle ${currentPath.includes('mitigation') || currentPath.includes('services') ? 'active' : ''}`}
                aria-expanded={servicesDropdownOpen}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="dropdown-chevron">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {servicesDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-grid">
                    {companyData.services.map((svc) => (
                      <a
                        key={svc.slug}
                        href={`/${svc.slug}`}
                        onClick={(e) => handleNavClick(`/${svc.slug}`, e)}
                        className={`dropdown-item ${currentPath === `/${svc.slug}` ? 'active' : ''}`}
                      >
                        <span className="item-title">{svc.title}</span>
                        <span className="item-desc">{svc.summary}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="/about-us"
              onClick={(e) => handleNavClick('/about-us', e)}
              className={`nav-link ${currentPath === '/about-us' ? 'active' : ''}`}
            >
              About
            </a>

            <a
              href="/service-areas"
              onClick={(e) => handleNavClick('/service-areas', e)}
              className={`nav-link ${currentPath === '/service-areas' ? 'active' : ''}`}
            >
              Service Areas
            </a>

            <a
              href="/gallery"
              onClick={(e) => handleNavClick('/gallery', e)}
              className={`nav-link ${currentPath === '/gallery' ? 'active' : ''}`}
            >
              Equipment & Gallery
            </a>

            <a
              href="/blog"
              onClick={(e) => handleNavClick('/blog', e)}
              className={`nav-link ${currentPath.startsWith('/blog') ? 'active' : ''}`}
            >
              Guides
            </a>

            <a
              href="/contact-us"
              onClick={(e) => handleNavClick('/contact-us', e)}
              className={`nav-link ${currentPath === '/contact-us' ? 'active' : ''}`}
            >
              Contact
            </a>
          </nav>

          {/* Action CTA */}
          <div className="header-actions">
            <a
              href={`tel:${companyData.phoneRaw}`}
              className="btn-emergency header-cta"
              aria-label={`Call ${companyData.phone}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="cta-phone-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="header-cta-text">{companyData.phone}</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              className="mobile-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="container mobile-nav-content">
            <a href="/" onClick={(e) => handleNavClick('/', e)} className="mobile-nav-link">Home</a>
            <div className="mobile-services-group">
              <span className="mobile-group-title">Services</span>
              {companyData.services.map((svc) => (
                <a
                  key={svc.slug}
                  href={`/${svc.slug}`}
                  onClick={(e) => handleNavClick(`/${svc.slug}`, e)}
                  className="mobile-sub-link"
                >
                  {svc.title}
                </a>
              ))}
            </div>
            <a href="/about-us" onClick={(e) => handleNavClick('/about-us', e)} className="mobile-nav-link">About</a>
            <a href="/service-areas" onClick={(e) => handleNavClick('/service-areas', e)} className="mobile-nav-link">Service Areas</a>
            <a href="/gallery" onClick={(e) => handleNavClick('/gallery', e)} className="mobile-nav-link">Equipment & Gallery</a>
            <a href="/blog" onClick={(e) => handleNavClick('/blog', e)} className="mobile-nav-link">Guides</a>
            <a href="/contact-us" onClick={(e) => handleNavClick('/contact-us', e)} className="mobile-nav-link">Contact</a>
            
            <div className="mobile-drawer-cta">
              <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-block">
                Call {companyData.phone} (24/7)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
