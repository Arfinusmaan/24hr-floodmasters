import React from 'react';
import { companyData } from '../../data/companyData';

export default function LegalPage({ pageType, onNavigate: _onNavigate }) {
  const isPrivacy = pageType === 'privacy';

  return (
    <div className="legal-page-root" style={{ backgroundColor: 'var(--surface-charcoal)', minHeight: '80vh' }}>
      <section style={{ padding: '6rem 0 3rem', borderBottom: '1px solid var(--border-dark)' }}>
        <div className="container-narrow">
          <span className="status-pill">Official Documentation</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', color: '#FFFFFF', margin: '1rem 0' }}>
            {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
          </h1>
          <p style={{ color: 'var(--text-light-secondary)', fontSize: '1rem' }}>
            Effective Date: October 2026 · {companyData.legalName}
          </p>
        </div>
      </section>

      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container-narrow" style={{ color: '#333333', fontSize: '1.05rem', lineHeight: '1.75' }}>
          {isPrivacy ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h2 style={{ fontSize: '1.8rem', color: '#111111', marginBottom: '0.8rem' }}>1. Information We Collect</h2>
                <p>
                  24 Hr FloodMasters LLC collects information necessary to evaluate emergency property losses, coordinate mitigation personnel dispatch, and provide insurance-ready documentation. This includes property contact names, physical site addresses, phone numbers, email addresses, and photographic documentation of affected building assemblies.
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: '1.8rem', color: '#111111', marginBottom: '0.8rem' }}>2. Use of Information</h2>
                <p>
                  We use your personal and property data strictly to:
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                  <li>Dispatch emergency water extraction and drying technicians to your site.</li>
                  <li>Compile empirical psychrometric dry-down logs and thermal moisture maps.</li>
                  <li>Facilitate direct communication between property owners, managers, and insurance adjusters upon request.</li>
                </ul>
              </div>
              <div>
                <h2 style={{ fontSize: '1.8rem', color: '#111111', marginBottom: '0.8rem' }}>3. No Sale of Personal Data</h2>
                <p>
                  We never sell, rent, or lease customer contact lists or loss documentation to third-party marketing brokers or lead generation aggregators. Your information remains strictly confidential within our mitigation dispatch operations.
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: '1.8rem', color: '#111111', marginBottom: '0.8rem' }}>4. Contact Concerning Privacy</h2>
                <p>
                  For inquiries regarding personal data privacy, email our administrative desk directly at <strong>{companyData.email}</strong> or call <strong>{companyData.phone}</strong>.
                </p>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h2 style={{ fontSize: '1.8rem', color: '#111111', marginBottom: '0.8rem' }}>1. Scope of Emergency Mitigation Services</h2>
                <p>
                  24 Hr FloodMasters LLC specializes in emergency property stabilization, water extraction, structural dehumidification, antimicrobial sanitization, and microbial containment. We explicitly distinguish emergency mitigation from permanent reconstruction, architectural finish repairs, or capital rebuilding.
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: '1.8rem', color: '#111111', marginBottom: '0.8rem' }}>2. Insurance Carrier Documentation</h2>
                <p>
                  We document affected areas, relative humidity, and moisture content according to recognized industry psychrometric guidelines. While our documentation is structured to support carrier claims, policy coverage decisions and indemnification remain solely between the policyholder and their respective insurance carrier.
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: '1.8rem', color: '#111111', marginBottom: '0.8rem' }}>3. Safety & Property Access</h2>
                <p>
                  Property owners and managers agree to provide safe access to the loss site, including electrical access for commercial drying equipment where available. Technicians reserve the right to suspend operations if active structural collapse or dangerous unmitigated electrical hazards exist.
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: '1.8rem', color: '#111111', marginBottom: '0.8rem' }}>4. Governing Law</h2>
                <p>
                  These terms are governed by the laws of the State of Texas. For any contractual or service inquiries, contact 24 Hr FloodMasters LLC at <strong>{companyData.email}</strong>.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
