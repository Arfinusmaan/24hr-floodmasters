import React, { useState } from 'react';
import { companyData } from '../../data/companyData';
import './HomePage.css';

export default function HomePage({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(0);

  const handleNav = (path, e) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const faqs = [
    {
      q: "What should I do immediately after noticing water damage?",
      a: "Prioritize safety first: if safely accessible, shut off the primary water supply line and avoid standing water near outlets or submerged electrical fixtures. Avoid walking on heavily soaked subfloors, take brief photo records for your insurer, and call 24 Hr FloodMasters immediately for emergency extraction."
    },
    {
      q: "Does 24 Hr FloodMasters help with insurance carrier documentation?",
      a: "Yes. We generate comprehensive moisture-mapping documentation, thermal anomaly logs, itemized damage records, and daily psychrometric dry-down charts. We provide these directly to property owners to help keep insurance claim discussions transparent and organized."
    },
    {
      q: "Do you handle fire, mold, sewage, and storm damage as well?",
      a: "Yes. Our team provides specialized containment and emergency mitigation for Category 3 sewage backups, structural drying after stormwater floods, microbial mold containment under negative pressure, and emergency soot stabilization following fire incidents."
    },
    {
      q: "How fast can your team dispatch to my property?",
      a: "Our dispatchers operate 24 hours a day, 7 days a week, 365 days a year. Response time depends on active road conditions, weather events, and your exact Central Texas location. Call us directly at (254) 482-1151 for an immediate arrival estimate."
    },
    {
      q: "Do you perform permanent reconstruction or structural rebuilds?",
      a: "No. 24 Hr FloodMasters specializes strictly in emergency mitigation, water extraction, antimicrobials, and structural drying. Distinguishing rapid mitigation from later construction ensures your property is fully dried and certified safe before finish contractors begin reconstruction."
    },
    {
      q: "Which communities in Central Texas do you serve?",
      a: "We serve Temple, Waco, Belton, Killeen, Salado, Harker Heights, Hewitt, Nolanville, Troy, Gatesville, Woodway, Georgetown, Round Rock, and surrounding Central Texas regions."
    }
  ];

  const damageTypes = [
    {
      title: "Burst Pipes & Plumbing Failures",
      desc: "High-pressure supply lines rupture inside ceilings and wall cavities, sending gallons of water across subfloors in minutes.",
      image: "/images/editorial/burst_pipe_kitchen_flood.jpg"
    },
    {
      title: "AC Condensate & Slab Leaks",
      desc: "During prolonged Texas cooling seasons, drain line backups and concealed foundation plumbing seep under flooring undetected.",
      image: "/images/editorial/blog_floors.jpg"
    },
    {
      title: "Storm Intrusion & Heavy Rain",
      desc: "Severe weather compromises roof eaves and thresholds, saturating drywall framing and insulation with exterior runoff.",
      image: "/images/services/storm_water_intrusion.jpg"
    },
    {
      title: "Category 3 Sewage & Blackwater",
      desc: "Sanitary sewer line backflows introduce biohazardous pathogens requiring rigorous biocidal treatment and containment.",
      image: "/images/services/sewage_backup_containment.jpg"
    }
  ];

  return (
    <div className="homepage-root">
      {/* SECTION 1: Cinematic Emergency Hero */}
      <section className="hp-hero" aria-label="Emergency Mitigation Hero">
        <div className="hp-hero-image-wrap">
          <img
            src="/images/hero/hero_water_mitigation.jpg"
            alt="24 Hr FloodMasters emergency water extraction technician on site"
            className="hp-hero-bg-img"
          />
          <div className="hp-hero-overlay"></div>
        </div>

        <div className="container hp-hero-content">
          <div className="hp-hero-badge">
            <span className="status-pill">
              <span className="pulse-dot"></span> Central Texas Emergency Response
            </span>
            <span className="hero-hub-tag">Dispatch Hubs in Temple & Pflugerville</span>
          </div>

          <h1 className="hp-hero-headline">
            Damage does not wait.<br />
            <span className="hp-headline-highlight">Neither do we.</span>
          </h1>

          <p className="hp-hero-subtext">
            Veteran-owned emergency water damage mitigation, high-capacity extraction, structural drying, and carrier-ready documentation across Central Texas. On call 24 hours a day, 365 days a year.
          </p>

          <div className="hp-hero-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Call (254) 482-1151</span>
            </a>
            <a href="#featured-services" className="btn-ghost-light">
              Explore Our Services
            </a>
          </div>

          {/* Emergency Live Status HUD */}
          <div className="hp-status-hud" aria-label="Mitigation Workflow Status">
            <div className="hud-step">
              <span className="hud-num">01</span>
              <div className="hud-info">
                <strong>24/7 Dispatch</strong>
                <span>Direct specialist phone triage</span>
              </div>
            </div>
            <div className="hud-divider"></div>
            <div className="hud-step">
              <span className="hud-num">02</span>
              <div className="hud-info">
                <strong>Rapid Extraction</strong>
                <span>Commercial water evacuation</span>
              </div>
            </div>
            <div className="hud-divider"></div>
            <div className="hud-step">
              <span className="hud-num">03</span>
              <div className="hud-info">
                <strong>Targeted Drying</strong>
                <span>LGR dehumidification & air movement</span>
              </div>
            </div>
            <div className="hud-divider"></div>
            <div className="hud-step">
              <span className="hud-num">04</span>
              <div className="hud-info">
                <strong>Clear Handoff</strong>
                <span>Moisture records & claim logs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Verified Trust & Veteran Foundation */}
      <section className="section-dark hp-proof-strip">
        <div className="container proof-grid">
          <div className="proof-card">
            <span className="proof-icon">★</span>
            <div className="proof-text">
              <h3>Veteran-Owned Discipline</h3>
              <p>Founded by U.S. Marine Corps veteran Rene Molina. Straight answers, honest scope, and service-first commitment.</p>
            </div>
          </div>
          <div className="proof-card">
            <span className="proof-icon">⏱</span>
            <div className="proof-text">
              <h3>24/7 Continuous Readiness</h3>
              <p>Property disasters strike without warning. Our dispatch and mitigation specialists are staffed 365 days a year.</p>
            </div>
          </div>
          <div className="proof-card">
            <span className="proof-icon">📋</span>
            <div className="proof-text">
              <h3>Carrier-Ready Documentation</h3>
              <p>Accurate thermal camera scans, moisture logs, and drying progression maps to support your property claim.</p>
            </div>
          </div>
          <div className="proof-card">
            <span className="proof-icon">📍</span>
            <div className="proof-text">
              <h3>Central Texas Local</h3>
              <p>Serving Temple, Waco, Belton, Salado, Killeen, and neighboring counties with dedicated regional hubs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Featured Water Damage Showcase (Asymmetric Split) */}
      <section className="section-light hp-featured-split" id="featured-services">
        <div className="container split-container">
          <div className="split-visual">
            <img
              src="/images/equipment/structural_drying_setup.jpg"
              alt="High-capacity commercial structural drying air movers in residential property"
              className="split-img"
            />
            <div className="split-badge-overlay">
              <strong>Subsurface Drying Science</strong>
              <span>Targeting concealed moisture in framing & subfloors</span>
            </div>
          </div>

          <div className="split-content">
            <span className="eyebrow">Core Emergency Service</span>
            <h2 className="split-title">Water damage does not stop at the surface.</h2>
            <p className="split-lead">
              When standing water is removed, the most critical mitigation phase begins. Moisture rapidly migrates behind baseboards, into insulation cavities, and deep into subfloors.
            </p>
            <p className="split-body">
              Without rapid, calibrated structural drying, trapped moisture initiates structural warping, sheetrock degradation, and hazardous microbial propagation within 48 to 72 hours. We deploy industrial LGR (Low Grain Refrigerant) dehumidifiers, commercial desiccant systems, and high-velocity axial air movers to extract bound moisture at the molecular level.
            </p>
            <div className="split-features">
              <div className="feature-item">
                <strong>High-Velocity Extraction:</strong> Evacuating standing water before saturation worsens.
              </div>
              <div className="feature-item">
                <strong>Deep Thermal Tracing:</strong> Identifying concealed moisture boundaries with FLIR thermal imaging.
              </div>
              <div className="feature-item">
                <strong>Daily Psychrometric Audits:</strong> Continuous monitoring until structural materials reach dry standards.
              </div>
            </div>
            <div className="split-cta-row">
              <a
                href="/emergency-water-mitigation"
                onClick={(e) => handleNav('/emergency-water-mitigation', e)}
                className="btn-emergency"
              >
                Water Damage Details →
              </a>
              <a href={`tel:${companyData.phoneRaw}`} className="btn-ghost-dark">
                Call (254) 482-1151
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Editorial Service Architecture (Varied Non-Card Layout) */}
      <section className="section-dark hp-services-matrix">
        <div className="container">
          <div className="matrix-header">
            <div>
              <span className="eyebrow">Specialized Mitigation Scope</span>
              <h2 className="matrix-title">Engineered emergency response for every type of loss.</h2>
            </div>
            <p className="matrix-desc">
              Every loss demands distinct protocol. We distinguish emergency mitigation from permanent reconstruction, ensuring immediate property stabilization without unnecessary delays.
            </p>
          </div>

          <div className="matrix-grid">
            {/* Service 1: Structural Drying */}
            <div className="matrix-row">
              <div className="matrix-image-box">
                <img
                  src="/images/process/moisture_detection_thermal.jpg"
                  alt="Technician measuring drywall moisture with thermal imager and pinless sensor"
                />
              </div>
              <div className="matrix-details">
                <span className="matrix-tag">Structural Science</span>
                <h3>Structural Drying & Moisture Monitoring</h3>
                <p>
                  Targeted dehumidification and high-velocity airflow engineered for building framing, hardwood floor joists, and drywall cavities. We track daily relative humidity (RH) and moisture content until dry standards are verified.
                </p>
                <a
                  href="/structural-drying-services"
                  onClick={(e) => handleNav('/structural-drying-services', e)}
                  className="matrix-link"
                >
                  Explore Structural Drying Protocol →
                </a>
              </div>
            </div>

            {/* Service 2: Commercial Restoration */}
            <div className="matrix-row reverse">
              <div className="matrix-image-box">
                <img
                  src="/images/services/commercial_restoration.jpg"
                  alt="Commercial corridor water damage mitigation with desiccant drying and safety markers"
                />
              </div>
              <div className="matrix-details">
                <span className="matrix-tag">Operational Continuity</span>
                <h3>Commercial Water Mitigation</h3>
                <p>
                  Built for corporate suites, medical clinics, schools, and commercial facilities. Our structured containment zones and rapid extraction protocols prioritize business continuity, inventory protection, and staff safety.
                </p>
                <a
                  href="/commercial-water-damage-restoration"
                  onClick={(e) => handleNav('/commercial-water-damage-restoration', e)}
                  className="matrix-link"
                >
                  Commercial Mitigation Capabilities →
                </a>
              </div>
            </div>

            {/* Service 3: Fire & Smoke */}
            <div className="matrix-row">
              <div className="matrix-image-box">
                <img
                  src="/images/services/fire_smoke_mitigation.jpg"
                  alt="Restoration technician sponging soot and stabilizing fire damage in residence"
                />
              </div>
              <div className="matrix-details">
                <span className="matrix-tag">Hazard Containment</span>
                <h3>Fire & Smoke Damage Mitigation</h3>
                <p>
                  Stabilization following structural fires. Corrosive soot and chemical extinguisher residues etch metal and glass if left untreated. We neutralize odors, sponge soot, and extract fire-suppression water before permanent rebuild phases.
                </p>
                <a
                  href="/fire-mitigation"
                  onClick={(e) => handleNav('/fire-mitigation', e)}
                  className="matrix-link"
                >
                  Fire & Smoke Stabilization Protocol →
                </a>
              </div>
            </div>

            {/* Service 4: Mold Containment */}
            <div className="matrix-row reverse">
              <div className="matrix-image-box">
                <img
                  src="/images/services/mold_containment.jpg"
                  alt="Containment barrier and HEPA air scrubber in residence under negative air pressure"
                />
              </div>
              <div className="matrix-details">
                <span className="matrix-tag">Microbial Defense</span>
                <h3>Mold Containment & Mitigation</h3>
                <p>
                  Preventing microbial cross-contamination with zippered poly isolation barriers and negative-pressure HEPA filtration. We isolate affected building materials, remediate moisture sources, and restore clean indoor air quality.
                </p>
                <a
                  href="/mold-mitigation"
                  onClick={(e) => handleNav('/mold-mitigation', e)}
                  className="matrix-link"
                >
                  Mold Mitigation Scope →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Common Central Texas Scenarios (Visual Matrix) */}
      <section className="section-light hp-scenarios">
        <div className="container">
          <div className="scenarios-header">
            <span className="eyebrow">Central Texas Regional Profile</span>
            <h2 className="scenarios-title">Common property losses we resolve in Bell & McLennan Counties.</h2>
            <p className="scenarios-subtitle">
              From intense summer heat creating AC condensation overflows to severe Hill Country thunderstorms and plumbing freeze cycles, our mitigation teams know regional structural vulnerability.
            </p>
          </div>

          <div className="scenarios-grid">
            {damageTypes.map((item, index) => (
              <div key={index} className="scenario-item">
                <div className="scenario-img-wrap">
                  <img src={item.image} alt={item.title} className="scenario-img" />
                </div>
                <div className="scenario-meta">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: The 4-Step Mitigation Process */}
      <section className="section-dark hp-process-timeline">
        <div className="container">
          <div className="timeline-header">
            <span className="eyebrow">Systematic Protocol</span>
            <h2 className="timeline-title">One call. Four focused milestones.</h2>
            <p className="timeline-desc">
              When disaster occurs, property owners need clarity rather than confusion. We execute a disciplined, documented four-stage workflow.
            </p>
          </div>

          <div className="timeline-steps">
            <div className="timeline-card">
              <span className="step-badge">Phase 01</span>
              <h3>Emergency Call & Triage</h3>
              <p>You speak directly with an emergency mitigation specialist. We gather loss details, evaluate immediate safety hazards, and initiate immediate field dispatch.</p>
            </div>
            <div className="timeline-card">
              <span className="step-badge">Phase 02</span>
              <h3>On-Site Forensic Assessment</h3>
              <p>Technicians arrive equipped with calibrated moisture meters and thermal imaging to map every boundary of water migration behind walls and underneath flooring.</p>
            </div>
            <div className="timeline-card">
              <span className="step-badge">Phase 03</span>
              <h3>Active Extraction & Drying</h3>
              <p>Commercial extraction evacuates standing liquid. Heavy-duty LGR dehumidifiers and high-velocity air movers run continuously to dry building framing down to dry standards.</p>
            </div>
            <div className="timeline-card">
              <span className="step-badge">Phase 04</span>
              <h3>Documentation Handoff</h3>
              <p>We deliver an organized moisture-reading portfolio, psychrometric records, and photographic proof to keep your insurance claim organized and transparent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Large-Format Editorial Interlude */}
      <section className="hp-interlude" aria-label="Mitigation Philosophy Interlude">
        <div className="hp-interlude-bg-wrap">
          <img
            src="/images/illustrative/restored_clean_interior.jpg"
            alt="Pristine, dry modern residential home interior restored after mitigation"
            className="hp-interlude-bg"
          />
          <div className="hp-interlude-overlay"></div>
        </div>
        <div className="container hp-interlude-content">
          <span className="eyebrow light">The Desired Outcome</span>
          <h2 className="interlude-quote">
            “In an emergency, the right mitigation partner brings discipline, transparency, and calm.”
          </h2>
          <p className="interlude-author">
            Rene Molina — Founder, 24 Hr FloodMasters · U.S. Marine Corps Veteran
          </p>
        </div>
      </section>

      {/* SECTION 8: Insurance Documentation & Claims Support */}
      <section className="section-light hp-insurance-focus">
        <div className="container insurance-split">
          <div className="insurance-text">
            <span className="eyebrow">Claims Integrity</span>
            <h2>Documented facts make carrier discussions straightforward.</h2>
            <p>
              Navigating a property insurance claim can feel overwhelming when managing unexpected damage. We do not make unsupported promises of claim approvals, but we supply the precise empirical evidence adjusters need:
            </p>
            <ul className="insurance-checklist">
              <li>
                <strong>Infrared Thermal Mapping:</strong> Photo records demonstrating exact moisture migration paths before drying.
              </li>
              <li>
                <strong>Daily Moisture Reading Logs:</strong> Quantifiable pin and pinless moisture percentages recorded daily.
              </li>
              <li>
                <strong>Psychrometric Data Sheets:</strong> GPP (grains per pound) and relative humidity records tracking structural drying.
              </li>
              <li>
                <strong>Itemized Mitigation Scope:</strong> Clear distinction of emergency stabilization work performed on site.
              </li>
            </ul>
            <a
              href="/insurance-and-claims-support"
              onClick={(e) => handleNav('/insurance-and-claims-support', e)}
              className="btn-emergency"
            >
              Read About Insurance Support →
            </a>
          </div>

          <div className="insurance-media">
            <img
              src="/images/process/insurance_documentation.jpg"
              alt="Inspector recording moisture readings on electronic tablet in Texas residence"
              className="insurance-img"
            />
          </div>
        </div>
      </section>

      {/* SECTION 9: Service Area Coverage */}
      <section className="section-dark hp-locations">
        <div className="container">
          <div className="locations-header">
            <span className="eyebrow">Regional Footprint</span>
            <h2 className="locations-title">Direct dispatch throughout Central Texas communities.</h2>
            <p className="locations-desc">
              With operational hubs in Temple and Pflugerville, our mitigation teams provide responsive coverage across Bell, McLennan, Coryell, and Williamson counties.
            </p>
          </div>

          <div className="locations-pills">
            {companyData.serviceAreas.map((city, idx) => (
              <span key={idx} className="city-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {typeof city === 'string' ? city : city.name}
              </span>
            ))}
          </div>

          <div className="locations-action">
            <a
              href="/service-areas"
              onClick={(e) => handleNav('/service-areas', e)}
              className="btn-ghost-light"
            >
              Explore Detailed Service Area Hubs →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 10: Educational Guides Preview */}
      <section className="section-light hp-guides">
        <div className="container">
          <div className="guides-top">
            <div>
              <span className="eyebrow">Property Knowledge</span>
              <h2 className="guides-title">Practical guides when water appears.</h2>
            </div>
            <a
              href="/blog"
              onClick={(e) => handleNav('/blog', e)}
              className="btn-ghost-dark"
            >
              View All Guides →
            </a>
          </div>

          <div className="guides-grid">
            <div className="guide-card" onClick={(e) => handleNav('/blog/water-damage-behind-walls', e)}>
              <div className="guide-img-wrap">
                <img src="/images/editorial/blog_walls.jpg" alt="Water damage staining along wall baseboard" />
              </div>
              <div className="guide-body">
                <span className="guide-category">Moisture Diagnostics</span>
                <h3>Water Damage Behind Walls: What to Do Next</h3>
                <p>How moisture moves upward through drywall cavities via capillary action, and why surface drying alone leaves hidden mold risks.</p>
                <span className="guide-read-link">Read Full Guide →</span>
              </div>
            </div>

            <div className="guide-card" onClick={(e) => handleNav('/blog/signs-water-damage-under-floor', e)}>
              <div className="guide-img-wrap">
                <img src="/images/editorial/blog_floors.jpg" alt="Warped wood flooring showing subfloor moisture" />
              </div>
              <div className="guide-body">
                <span className="guide-category">Flooring Science</span>
                <h3>Signs of Water Damage Under Floors: What to Check</h3>
                <p>Recognizing cupping, buckling, and musty odors in hardwood and tile subflooring before irreversible floor ruin occurs.</p>
                <span className="guide-read-link">Read Full Guide →</span>
              </div>
            </div>

            <div className="guide-card" onClick={(e) => handleNav('/blog/new-vs-old-water-damage', e)}>
              <div className="guide-img-wrap">
                <img src="/images/editorial/blog_ceiling.jpg" alt="Ceiling water stains comparing old and new leaks" />
              </div>
              <div className="guide-body">
                <span className="guide-category">Claims Assessment</span>
                <h3>How to Tell If Water Damage Is New or Old</h3>
                <p>Identifying discoloration rings, structural softness, and drywall texture indicators crucial for insurance conversations.</p>
                <span className="guide-read-link">Read Full Guide →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Frequently Asked Questions Accordion */}
      <section className="section-dark hp-faq">
        <div className="container-narrow">
          <div className="faq-header text-center">
            <span className="eyebrow">Clear Information</span>
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">
              Straightforward answers to the most common questions property owners face during water damage emergencies.
            </p>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <button
                  className="faq-question"
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: Final Emergency Conversion Hero */}
      <section className="hp-final-cta" aria-label="Final Emergency CTA">
        <div className="container final-cta-container">
          <span className="eyebrow">Immediate Dispatch Ready</span>
          <h2 className="final-title">Speak with a Central Texas restoration specialist now.</h2>
          <p className="final-sub">
            Standing water compromises property integrity every minute it sits. We are ready 24/7/365 to assess your damage and begin mitigation.
          </p>
          <div className="final-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              Call (254) 482-1151
            </a>
            <a
              href="/contact-us"
              onClick={(e) => handleNav('/contact-us', e)}
              className="btn-ghost-light"
            >
              Submit Property Details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
