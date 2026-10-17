import React from 'react';
import { companyData } from '../../data/companyData';
import SEOHead from '../SEOHead';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../../utils/schemaGenerators';
import './AboutPage.css';

export default function AboutPage({ onNavigate }) {
  const handleNav = (path, e) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const milestones = [
    {
      year: "2018-2024",
      title: "Active Duty Service & Operational Rigor",
      desc: "Rene Molina served six dedicated years in the United States Marine Corps. Military service instilled an unwavering commitment to operational readiness, disciplined logistical execution, and personal accountability."
    },
    {
      year: "2024",
      title: "Advanced IICRC Psychrometric Certification",
      desc: "Mastery of IICRC S500 (Water Damage Restoration) and S520 (Mold Remediation) standards. Training focused on structural thermodynamics, psychrometric dew-point calculations, and non-destructive moisture diagnostics."
    },
    {
      year: "2025",
      title: "Founding 24 Hr FloodMasters LLC",
      desc: "Established with headquarters in Temple, TX and a secondary operational facility in Pflugerville, creating rapid response corridors along I-35, US-190, and SH-130."
    },
    {
      year: "Today",
      title: "Central Texas's Direct Mitigation Authority",
      desc: "Equipped with fleet extraction vehicles, LGR commercial dehumidifiers, and thermal imaging cameras serving Bell, McLennan, Travis, and Williamson counties around the clock."
    }
  ];

  const standards = [
    {
      metric: "100%",
      label: "Veteran Owned & Operated",
      sub: "Founded by Marine Corps veteran Rene Molina"
    },
    {
      metric: "60 Min",
      label: "Average Emergency Arrival",
      sub: "Direct field response across Temple, Waco & Belton"
    },
    {
      metric: "IICRC S500",
      label: "Standard Compliant",
      sub: "Empirical psychrometric structural drying protocols"
    },
    {
      metric: "Direct Billing",
      label: "Insurance Friendly",
      sub: "Itemized line-item documentation for claims adjusters"
    }
  ];

  const teamValues = [
    {
      num: "01",
      title: "Uncompromising Integrity & Direct Counsel",
      desc: "We never invent or exaggerate property damage. If a building cavity is safely at baseline dry standard, we document it and leave it alone. Property owners receive transparent, unvarnished facts."
    },
    {
      num: "02",
      title: "Mitigation-Focused Specialty",
      desc: "Our mission is emergency stabilization, high-capacity water extraction, antimicrobial sanitization, and structural dehumidification. We do not use emergencies as leverage for expensive cosmetic rebuild contracts."
    },
    {
      num: "03",
      title: "Rigorous Scientific Documentation",
      desc: "Every moisture meter reading, ambient relative humidity record, and FLIR thermal image is compiled into an indisputable digital loss dossier that protects your property and supports your insurance claim."
    },
    {
      num: "04",
      title: "24/7/365 On-Call Readiness",
      desc: "Disaster does not wait for convenient business hours. Rene Molina and our emergency dispatch team remain fully operational holidays, weekends, and middle of the night."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      getLocalBusinessSchema(),
      getBreadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <div className="about-page-root">
      <SEOHead
        title="About 24 Hr FloodMasters | Veteran-Owned Restoration"
        description="Learn about 24 Hr FloodMasters, founded by U.S. Marine Corps veteran Rene Molina. 24/7 emergency water damage mitigation in Temple, Waco, and Central Texas."
        canonicalPath="/about-us"
        ogType="website"
        ogImage="/images/editorial/about_owner_rene_molina.webp"
        schema={schema}
      />

      {/* HERO WITH RICH BACKGROUND IMAGE */}
      <section className="about-hero">
        <div className="about-hero-bg-wrap">
          <img
            src="/images/services/response_night_clean.webp"
            alt="24 Hr FloodMasters emergency fleet response at night in Central Texas"
            className="about-hero-bg"
            width="1536"
            height="1024"
            fetchpriority="high"
          />
          <div className="about-hero-overlay"></div>
        </div>

        <div className="container about-hero-container">
          <span className="status-pill">
            <span className="pulse-dot"></span> Veteran-Owned & Operated · Central Texas
          </span>
          <h1 className="about-title">Built on military discipline, integrity, and genuine community care.</h1>
          <p className="about-subtitle">
            Founded by U.S. Marine Corps veteran Rene Molina, 24 Hr FloodMasters brings a dedicated service-first mission to homeowners, businesses, and municipal facilities facing water, mold, and sewage crises across Bell and McLennan counties.
          </p>
          <div className="about-hero-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              Call Rene Molina: (254) 482-1151
            </a>
            <a href="/service-areas" onClick={(e) => handleNav('/service-areas', e)} className="btn-secondary-outline">
              Explore Our Service Areas
            </a>
          </div>
        </div>
      </section>

      {/* KEY STATS BAR */}
      <section className="about-stats-bar">
        <div className="container stats-bar-grid">
          {standards.map((std, i) => (
            <div key={i} className="stat-card">
              <span className="stat-metric">{std.metric}</span>
              <strong className="stat-label">{std.label}</strong>
              <span className="stat-sub">{std.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER & STORY SPLIT */}
      <section className="section-light about-story-section">
        <div className="container about-story-grid">
          <div className="about-story-media">
            <div className="founder-frame">
              <img
                src="/images/editorial/about_owner_rene_molina.webp"
                alt="Rene Molina, Owner of 24 Hr FloodMasters and U.S. Marine Corps Veteran"
                className="about-owner-photo"
                width="1376"
                height="768"
                loading="lazy"
              />
              <div className="founder-badge">
                <span className="badge-title">Rene Molina</span>
                <span className="badge-role">U.S. Marine Corps Veteran · Founder & Operator</span>
              </div>
            </div>
            <div className="founder-secondary-img">
              <img
                src="/images/hero/hero_tech_clean.webp"
                alt="Rene Molina inspecting water saturation with moisture detector"
                className="founder-field-img"
                width="1536"
                height="1024"
                loading="lazy"
              />
              <span className="founder-field-caption">Certified moisture inspection using non-penetrating thermal & impedance meters.</span>
            </div>
          </div>

          <div className="about-story-text">
            <span className="eyebrow">Our Proven Foundation</span>
            <h2>Straight answers and disciplined execution when disaster strikes.</h2>
            <p className="lead-text">
              Rene Molina served six honorable years in the United States Marine Corps before dedicating his career to structural mitigation and environmental restoration. Operating in demanding military environments forged a standard of relentless preparedness, total accountability, and calm leadership under pressure.
            </p>
            <p>
              In 2025, Rene founded 24 Hr FloodMasters to establish an emergency restoration company where integrity is not merely a slogan. After witnessing how vulnerable homeowners and commercial property owners are subjected to high-pressure scare tactics, exaggerated structural damage estimates, and slow response times, Rene created a company centered on scientific facts, honest scopes, and transparent communication.
            </p>
            <blockquote className="about-quote">
              “Our promise to Central Texas is simple: treat families and business owners with deep respect, present empirical data without exaggeration, and arrive prepared to resolve the emergency immediately.”
            </blockquote>
            <p>
              Today, with strategic operational facilities positioned in Temple and Pflugerville, our crews maintain ready response vehicles stocked with commercial LGR dehumidifiers, high-velocity axial air movers, subfloor drying mats, and EPA-registered botanical antimicrobials.
            </p>
            <div className="founder-signatures">
              <div className="sig-item">
                <strong>Rene Molina</strong>
                <span>Owner & Lead Restoration Director</span>
              </div>
              <div className="sig-item">
                <strong>(254) 482-1151</strong>
                <span>Direct Dispatch & Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE / JOURNEY SECTION */}
      <section className="section-dark about-milestones-section">
        <div className="container">
          <div className="text-center milestones-header">
            <span className="eyebrow">The Journey</span>
            <h2>From Military Service to Central Texas Mitigation Leaders</h2>
            <p>The core milestones that built 24 Hr FloodMasters into the trusted regional disaster response authority.</p>
          </div>

          <div className="milestones-grid">
            {milestones.map((item, idx) => (
              <div key={idx} className="milestone-card">
                <span className="milestone-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE OPERATIONAL VALUES */}
      <section className="section-light about-values-section">
        <div className="container">
          <div className="values-header text-center">
            <span className="eyebrow">Core Standards</span>
            <h2>How we conduct every restoration assignment.</h2>
            <p>We believe property owners deserve clear, honest, and verifiable disaster recovery services.</p>
          </div>

          <div className="values-grid">
            {teamValues.map((val, idx) => (
              <div key={idx} className="value-box">
                <span className="value-num">{val.num}</span>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITY & EQUIPMENT INTERLUDE */}
      <section className="section-dark about-equipment-section">
        <div className="container about-equip-grid">
          <div className="about-equip-text">
            <span className="eyebrow">Technical Capability</span>
            <h2>Commercial-grade drying and containment infrastructure.</h2>
            <p>
              Professional property restoration cannot rely on household fans or consumer shop vacuums. Our Temple and Pflugerville response stations house truck-mounted extraction machinery, commercial desiccant systems, high-amperage axial blowers, HEPA 500 negative air scrubbers, and calibrated FLIR thermal diagnostic cameras.
            </p>
            <p>
              When a water heater ruptures, sewage backs up into living spaces, or flash flooding breaches exterior weep screeds, our vehicles are loaded, inspected, and rolling within minutes.
            </p>
            <div className="equip-badges">
              <span className="tech-badge">FLIR E8 Infrared Imaging</span>
              <span className="tech-badge">Phoenix DryMAX LGR Units</span>
              <span className="tech-badge">Dri-Eaz Stealth Air Movers</span>
              <span className="tech-badge">DefendAir HEPA 500 Scrubbers</span>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <a href="/gallery" onClick={(e) => handleNav('/gallery', e)} className="btn-ghost-light">
                View Our Field Gallery & Case Studies →
              </a>
            </div>
          </div>
          <div className="about-equip-media">
            <img
              src="/images/equipment/structural_drying_setup.webp"
              alt="24 Hr FloodMasters commercial drying setup with dehumidifiers and air movers"
              className="about-equip-img"
              width="1376"
              height="768"
              loading="lazy"
            />
            <span className="equip-caption">Staged commercial drying installation maintaining controlled vapor pressure differentials.</span>
          </div>
        </div>
      </section>

      {/* LOCAL COMMUNITY COMMITMENT */}
      <section className="section-light about-community-section">
        <div className="container community-grid">
          <div className="community-img-wrap">
            <img
              src="/images/services/response_night_clean.webp"
              alt="Emergency response vehicle dispatched in Temple TX"
              className="community-img"
              width="1536"
              height="1024"
              loading="lazy"
            />
          </div>
          <div className="community-text">
            <span className="eyebrow">Serving Our Neighbors</span>
            <h2>Deep roots across Temple, Belton, Waco, and Central Texas.</h2>
            <p>
              We are not an out-of-state franchise or an anonymous call dispatch center. Rene Molina and our technicians live and work in the communities we serve. When severe storms strike the I-35 corridor or winter temperatures plunge below freezing, we stand shoulder-to-shoulder with our neighbors to protect local homes, churches, schools, and local businesses.
            </p>
            <p>
              We take pride in building lasting relationships with Central Texas property owners, commercial facility managers, and insurance adjusters through consistent, honorable performance.
            </p>
            <div className="community-links">
              <a href="/service-areas" onClick={(e) => handleNav('/service-areas', e)} className="btn-ghost-dark">
                View All 15+ Central Texas Cities Served →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING EMERGENCY ACTION */}
      <section className="hp-final-cta">
        <div className="container final-cta-container">
          <span className="eyebrow">Direct 24/7 Dispatch</span>
          <h2 className="final-title">Speak directly with Rene Molina and our emergency team.</h2>
          <p className="final-sub">
            Whether you are facing active midnight flooding, an overflowing sewer line, or suspect hidden mold behind drywall, call the 24 Hr FloodMasters dispatch line immediately.
          </p>
          <div className="final-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              Call (254) 482-1151
            </a>
            <a href="/contact-us" onClick={(e) => handleNav('/contact-us', e)} className="btn-ghost-light">
              Send Property Details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
