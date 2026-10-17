import React, { useState, useEffect } from 'react';
import Header from './components/navigation/Header';
import Footer from './components/footer/Footer';
import MobileBottomBar from './components/navigation/MobileBottomBar';
import HomePage from './components/sections/HomePage';
import ServicePage from './components/sections/ServicePage';
import AboutPage from './components/sections/AboutPage';
import ServiceAreasPage from './components/sections/ServiceAreasPage';
import GalleryPage from './components/sections/GalleryPage';
import BlogPage from './components/sections/BlogPage';
import ContactPage from './components/sections/ContactPage';
import LegalPage from './components/sections/LegalPage';
import SEOHead from './components/SEOHead';
import { companyData } from './data/companyData';

export default function App({ initialPath }) {
  const [currentPath, setCurrentPath] = useState(
    initialPath || (typeof window !== 'undefined' ? window.location.pathname : '/') || '/'
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Routing Logic
  const renderContent = () => {
    // Normalizing route
    const cleanPath = currentPath.replace(/\/$/, '') || '/';

    if (cleanPath === '/') {
      return <HomePage onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/about-us') {
      return <AboutPage onNavigate={handleNavigate} />;
    }

    // Check if it matches any service slug first
    const matchingService = companyData.services.find(s => cleanPath === `/${s.slug}`);
    if (matchingService) {
      return <ServicePage serviceSlug={matchingService.slug} onNavigate={handleNavigate} />;
    }

    // Fallback service routes for preserved existing sitemap URLs
    if (cleanPath === '/water-damage-restoration') {
      return <ServicePage serviceSlug="emergency-water-mitigation" onNavigate={handleNavigate} />;
    }
    if (cleanPath === '/category-3-water-cleanup') {
      return <ServicePage serviceSlug="flood-cleanup-services" onNavigate={handleNavigate} />;
    }
    if (cleanPath === '/storm-damage-cleanup') {
      return <ServicePage serviceSlug="flood-cleanup-services" onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/service-areas' || cleanPath.endsWith('-water-mitigation') || cleanPath.endsWith('-water-damage-restoration') || cleanPath === '/water-damage-restoration-temple') {
      return <ServiceAreasPage onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/gallery') {
      return <GalleryPage onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/contact-us') {
      return <ContactPage onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/privacy-policy') {
      return <LegalPage pageType="privacy" onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/terms') {
      return <LegalPage pageType="terms" onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/blog') {
      return <BlogPage articleSlug={null} onNavigate={handleNavigate} />;
    }

    if (cleanPath.startsWith('/blog/')) {
      const parts = cleanPath.split('/');
      const articleSlug = parts.length > 2 ? parts[parts.length - 1] : null;
      return <BlogPage articleSlug={articleSlug} onNavigate={handleNavigate} />;
    }

    // 404 Not Found fallback
    return (
      <div style={{ backgroundColor: 'var(--surface-charcoal)', minHeight: '60vh', padding: '8rem 0', textAlign: 'center' }}>
        <SEOHead
          title="404 Page Not Found | 24 Hr FloodMasters"
          description="The requested water damage or emergency mitigation page was not found. Contact 24 Hr FloodMasters 24/7 emergency dispatch directly at (254) 482-1151."
          canonicalPath="/404"
          noindex={true}
        />
        <div className="container-narrow">
          <span className="status-pill">404 Loss Record</span>
          <h1 style={{ fontSize: '2.8rem', color: '#FFFFFF', margin: '1rem 0' }}>That page is not located.</h1>
          <p style={{ color: 'var(--text-light-secondary)', marginBottom: '2rem' }}>
            The requested emergency resource may have moved. Return to our homepage or call dispatch directly.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button onClick={() => handleNavigate('/')} className="btn-emergency">
              Return to Homepage
            </button>
            <a href={`tel:${companyData.phoneRaw}`} className="btn-ghost-light">
              Call (254) 482-1151
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main id="main-content" role="main">
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} />

      {/* Viewport-fixed Mobile Bottom Bar (Hidden for now) */}
      {/* <MobileBottomBar
        onOpenQuote={() => handleNavigate('/contact-us')}
        phoneNumber={companyData.phone}
        phoneRaw={companyData.phoneRaw}
        isNavOpen={mobileMenuOpen}
      /> */}
    </div>
  );
}

