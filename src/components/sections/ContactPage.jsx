import React, { useState } from 'react';
import { companyData } from '../../data/companyData';
import './ContactPage.css';

export default function ContactPage({ onNavigate: _onNavigate }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Temple',
    damageType: 'Water Damage',
    urgency: 'Active Emergency (Immediate)',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and contact phone number so dispatch can reach you.');
      return;
    }
    setFormSubmitted(true);
  };

  const serviceCityNames = companyData.serviceAreas.map(a => typeof a === 'string' ? a : a.name);

  return (
    <div className="contact-page-root">
      {/* HERO WITH BACKGROUND */}
      <section className="contact-hero">
        <div className="contact-hero-bg-wrap">
          <img
            src="/images/services/response_night_clean.webp"
            alt="24 Hr FloodMasters emergency dispatch vehicle ready for action"
            className="contact-hero-bg"
          />
          <div className="contact-hero-overlay"></div>
        </div>

        <div className="container contact-hero-content">
          <span className="status-pill">
            <span className="pulse-dot"></span> 24/7 Live Emergency Line · Continuous Central Texas Dispatch
          </span>
          <h1 className="contact-title">Direct contact & emergency property dispatch.</h1>
          <p className="contact-subtitle">
            If you are experiencing active flooding, a ruptured water pipe, sewage backup, or sudden roof infiltration, call our emergency line directly for immediate response. For insurance documentation questions or property inspections, submit the intake form below.
          </p>
          <div className="contact-hero-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              Direct Emergency Line: (254) 482-1151
            </a>
          </div>
        </div>
      </section>

      {/* DISPATCH OVERVIEW BAR */}
      <section className="dispatch-overview-bar">
        <div className="container dispatch-bar-grid">
          <div className="dispatch-bar-item">
            <span className="dispatch-icon">⚡</span>
            <div>
              <strong>Average Dispatch ETA: Under 60 Mins</strong>
              <p>Crews staged in Temple & Pflugerville serving Bell, McLennan & Williamson counties.</p>
            </div>
          </div>
          <div className="dispatch-bar-item">
            <span className="dispatch-icon">🛡️</span>
            <div>
              <strong>Veteran-Owned Accountability</strong>
              <p>Direct communication with Rene Molina, honest damage scopes, and zero sales pressure.</p>
            </div>
          </div>
          <div className="dispatch-bar-item">
            <span className="dispatch-icon">📋</span>
            <div>
              <strong>Direct Insurance Carrier Billing</strong>
              <p>Digital moisture logs, line-item Xactimate documentation, and direct adjuster cooperation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SPLIT */}
      <section className="section-light contact-main-section">
        <div className="container contact-grid">
          {/* Form Column */}
          <div className="contact-form-col">
            <div className="form-card">
              <span className="eyebrow">Property Intake</span>
              <h2>Request On-Site Assessment</h2>
              <p className="form-desc">
                Provide basic details regarding your property and water intrusion. Rene Molina or an on-call mitigation supervisor will contact you immediately.
              </p>

              {formSubmitted ? (
                <div className="form-success-box" role="alert">
                  <div className="success-icon">✓</div>
                  <h3>Intake Submitted Successfully</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Your property information for {formData.city} has been received. Our on-call supervisor will call <strong>{formData.phone}</strong> promptly.
                  </p>
                  <p className="sub-note">
                    For faster emergency dispatch, please call us directly at <strong>{companyData.phone}</strong>.
                  </p>
                  <button onClick={() => setFormSubmitted(false)} className="btn-ghost-dark" style={{ marginTop: '1rem' }}>
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="intake-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="(254) 555-0199"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">Property City / Community *</label>
                      <select id="city" name="city" value={formData.city} onChange={handleChange}>
                        {serviceCityNames.map((c, i) => (
                          <option key={i} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="damageType">Type of Loss</label>
                      <select id="damageType" name="damageType" value={formData.damageType} onChange={handleChange}>
                        <option value="Water Damage">Water Damage / Plumbing Rupture</option>
                        <option value="Flooding">Overland Flood / Storm Runoff</option>
                        <option value="Sewage Backup">Sewage / Category 3 Blackwater</option>
                        <option value="Structural Drying">Subfloor & Cavity Moisture</option>
                        <option value="Mold Mitigation">Mold Growth / Odor</option>
                        <option value="Fire & Smoke">Fire & Smoke Damage</option>
                        <option value="Commercial Loss">Commercial Property Loss</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="urgency">Urgency Level</label>
                      <select id="urgency" name="urgency" value={formData.urgency} onChange={handleChange}>
                        <option value="Active Emergency (Immediate)">Active Emergency (Standing Water)</option>
                        <option value="Same Day Assessment">Same Day Assessment</option>
                        <option value="Schedule Next 24-48 Hours">Schedule Next 24-48 Hours</option>
                        <option value="Insurance Documentation Question">Insurance Documentation Question</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes">Briefly Describe the Damage & Affected Areas</label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows="4"
                      placeholder="e.g. Ruptured water heater flooded hallway and 2 bedrooms; carpet and baseboards are soaked..."
                      value={formData.notes}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-emergency btn-block" style={{ marginTop: '1rem' }}>
                    Submit Property Assessment Request →
                  </button>
                  <span className="privacy-reassurance">
                    We respect your privacy. Your contact details are never shared or sold and are used solely for property restoration dispatch.
                  </span>
                </form>
              )}
            </div>
          </div>

          {/* Direct Details Sidebar */}
          <div className="contact-info-col">
            <div className="info-box emergency-box">
              <span className="eyebrow">Direct 24/7 Dispatch</span>
              <h3>Speak With A Dispatcher</h3>
              <p>For active water extraction or structural stabilization, calling directly ensures immediate technician dispatch.</p>
              <a href={`tel:${companyData.phoneRaw}`} className="emergency-phone-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>{companyData.phone}</span>
              </a>
              <span className="info-sub">Operated 24/7/365 · No Answering Service Delays</span>
            </div>

            <div className="info-box">
              <h4>Verified Company Credentials</h4>
              <div className="detail-line">
                <strong>Business Name:</strong>
                <span>{companyData.name}</span>
              </div>
              <div className="detail-line">
                <strong>Direct Email:</strong>
                <a href={`mailto:${companyData.email}`}>{companyData.email}</a>
              </div>
              <div className="detail-line">
                <strong>Leadership:</strong>
                <span>Rene Molina (USMC Veteran)</span>
              </div>
              <div className="detail-line">
                <strong>Regional Hubs:</strong>
                <span>Temple & Pflugerville, TX</span>
              </div>
              <div className="detail-line">
                <strong>Operational Scope:</strong>
                <span>Emergency Water, Fire, Mold, Storm Mitigation</span>
              </div>
            </div>

            <div className="info-box note-box">
              <h4>Immediate Actions Before Our Crew Arrives</h4>
              <ol className="waiting-steps">
                <li>Shut off the main water valve if safely accessible without standing in water.</li>
                <li>Avoid areas where standing water touches baseboards with live electrical sockets.</li>
                <li>Take timestamped photos and a brief video overview for your insurance file.</li>
                <li>Keep occupants, children, and pets away from contaminated or saturated zones.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* DISPATCH HUB IMAGERY */}
      <section className="section-dark contact-fleet-showcase">
        <div className="container fleet-grid">
          <div className="fleet-img-wrap">
            <img
              src="/images/services/commercial_restoration.jpg"
              alt="24 Hr FloodMasters commercial drying deployment"
              className="fleet-img"
            />
          </div>
          <div className="fleet-text">
            <span className="eyebrow">Local Commitment</span>
            <h2>Prepared to protect your home or business at any hour.</h2>
            <p>
              We maintain fully stocked emergency mitigation trucks loaded with commercial LGR dehumidifiers, weighted subfloor extractors, HEPA air scrubbers, and botanical antimicrobial disinfectants.
            </p>
            <p>
              Whether you are dealing with a saturated bathroom from a broken supply line or commercial water damage across an entire office floor, Rene Molina and our veteran-led crews respond with speed, discipline, and respect.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency">
                Call (254) 482-1151 Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
