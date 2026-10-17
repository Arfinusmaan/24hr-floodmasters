import React, { useState } from 'react';
import { companyData } from '../../data/companyData';
import SEOHead from '../SEOHead';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../../utils/schemaGenerators';
import './GalleryPage.css';

export default function GalleryPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleNav = (path, e) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = ['All', 'Water & Extraction', 'Equipment & Drying', 'Fire & Soot', 'Mold Containment', 'Diagnostics'];

  // Clean, realistic photography only: no multi-hand AI glitches
  const galleryItems = [
    {
      title: "Commercial Water Extraction & Air Mover Staging",
      category: "Water & Extraction",
      filterCat: "Water & Extraction",
      image: "/images/services/water_tech_clean.webp",
      caption: "Certified mitigation technician placing high-velocity axial air movers along wet baseboard perimeters following a pressurized supply line rupture.",
      location: "Temple, TX",
      techSpecs: "3,200 CFM airflow · 45-degree angle impingement"
    },
    {
      title: "Commercial LGR Dehumidifier Grid Setup",
      category: "Equipment & Drying",
      filterCat: "Equipment & Drying",
      image: "/images/equipment/structural_drying_setup.webp",
      caption: "Heavy-duty commercial Low Grain Refrigerant dehumidifiers and layflat ducting arranged to pull moisture from gypsum wall cavities and concrete subfloor.",
      location: "Belton, TX",
      techSpecs: "130 PPD @ AHAM · Sealed drying chamber"
    },
    {
      title: "Negative-Air Microbial Containment Chamber",
      category: "Mold Containment",
      filterCat: "Mold Containment",
      image: "/images/services/mold_tech_clean.webp",
      caption: "Technician inside full poly isolation chamber with HEPA negative air filtration preventing fungal spore migration to unaffected building spaces.",
      location: "Killeen, TX",
      techSpecs: "0.02 in. w.g. differential · True HEPA 99.97% @ 0.3μm"
    },
    {
      title: "Controlled Soot & Smoke Surface Stabilization",
      category: "Fire & Soot",
      filterCat: "Fire & Soot",
      image: "/images/services/fire_tech_clean.webp",
      caption: "Technician using dry chemical sponges and targeted air scrubbers to neutralize acidic soot residues from wood framing and drywall after electrical fire.",
      location: "Waco, TX",
      techSpecs: "Non-smearing dry sponge · Thermal odor neutralization"
    },
    {
      title: "Digital Moisture Assessment & psychrometric Logging",
      category: "Diagnostics",
      filterCat: "Diagnostics",
      image: "/images/process/documentation_clean.webp",
      caption: "Meticulous logging of moisture content across wall framing, floor joists, and concrete slab comparing empirical readings against regional dry standards.",
      location: "Salado, TX",
      techSpecs: "Digital electrical resistance · Pinless capacitance tracking"
    },
    {
      title: "Rapid Emergency Response Crew Arrival",
      category: "Equipment & Drying",
      filterCat: "Equipment & Drying",
      image: "/images/services/response_night_clean.webp",
      caption: "24 Hr FloodMasters dedicated emergency mitigation vehicle arriving on scene during severe thunderstorm water intrusion event.",
      location: "Temple, TX",
      techSpecs: "Pre-loaded truckmount & rapid extraction staging"
    },
    {
      title: "Kitchen Subfloor Water Loss Stabilization",
      category: "Water & Extraction",
      filterCat: "Water & Extraction",
      image: "/images/editorial/burst_pipe_kitchen_flood.webp",
      caption: "Immediate mitigation after an under-sink reverse osmosis line failure threatened to delaminate hardwood flooring and swell custom cabinetry.",
      location: "Harker Heights, TX",
      techSpecs: "Subfloor mat vacuum system · Moisture barrier preservation"
    },
    {
      title: "Non-Destructive Thermal Diagnostic Inspection",
      category: "Diagnostics",
      filterCat: "Diagnostics",
      image: "/images/hero/hero_tech_clean.webp",
      caption: "Restoration specialist using high-sensitivity electronic sensors to trace migration pathways behind painted sheetrock without cutting unnecessary holes.",
      location: "Georgetown, TX",
      techSpecs: "Non-invasive impedance testing · Sub-surface mapping"
    },
    {
      title: "Large-Scale Commercial Facility Dehumidification",
      category: "Equipment & Drying",
      filterCat: "Equipment & Drying",
      image: "/images/services/commercial_restoration.webp",
      caption: "Industrial desiccant and LGR units maintaining safe relative humidity levels across open commercial office floors to prevent business interruption.",
      location: "Round Rock, TX",
      techSpecs: "Continuous psychrometric monitoring · GPP reduction"
    },
    {
      title: "Certified Dry Interior Living Space",
      category: "Water & Extraction",
      filterCat: "Water & Extraction",
      image: "/images/illustrative/restored_clean_interior.webp",
      caption: "Residential living room verified at dry standard with zero elevated moisture readings, certified safe for family reoccupancy.",
      location: "Hewitt, TX",
      techSpecs: "Certified dry standard reached · Antimicrobial safe seal"
    }
  ];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.filterCat === activeCategory);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Equipment & Field Gallery", url: "/gallery" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      getLocalBusinessSchema(),
      getBreadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <div className="gallery-page-root">
      <SEOHead
        title="Restoration Equipment & Gallery | FloodMasters"
        description="View 24 Hr FloodMasters field restoration equipment, thermal imaging diagnostics, and structural drying setups in Temple and Central Texas."
        canonicalPath="/gallery"
        ogType="website"
        ogImage="/images/services/water_tech_clean.webp"
        schema={schema}
      />

      {/* HERO WITH BACKGROUND */}
      <section className="gallery-hero">
        <div className="gallery-hero-bg-wrap">
          <img
            src="/images/services/water_tech_clean.webp"
            alt="Field technician staging water extraction equipment in Central Texas"
            className="gallery-hero-bg"
            width="1536"
            height="1024"
            fetchpriority="high"
          />
          <div className="gallery-hero-overlay"></div>
        </div>

        <div className="container gallery-hero-content">
          <span className="status-pill">
            <span className="pulse-dot"></span> Field Equipment & Empirical Methodology
          </span>
          <h1 className="gallery-title">Field equipment, diagnostics, and structural drying in action.</h1>
          <p className="gallery-subtitle">
            Restoration is an empirical engineering discipline. Explore authentic field photography of our commercial equipment setups, thermal imaging diagnostics, and containment chambers deployed across Central Texas properties.
          </p>
          <div className="gallery-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              Emergency Dispatch: (254) 482-1151
            </a>
            <a href="/contact-us" onClick={(e) => handleNav('/contact-us', e)} className="btn-secondary-outline">
              Request On-Site Inspection
            </a>
          </div>
        </div>
      </section>

      {/* FILTER TABS & GALLERY GRID */}
      <section className="section-dark gallery-grid-section">
        <div className="container">
          <div className="gallery-header-row">
            <div>
              <span className="eyebrow">Visual Case Portfolio</span>
              <h2>Authentic Central Texas Field Deployments</h2>
            </div>
            {/* Filter Buttons */}
            <div className="gallery-filter-nav">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item, idx) => (
              <div key={idx} className="gallery-card">
                <div className="gallery-img-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-img"
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                  <span className="gallery-category-pill">{item.category}</span>
                  <span className="gallery-loc-pill">{item.location}</span>
                </div>
                <div className="gallery-info">
                  <h3>{item.title}</h3>
                  <p className="gallery-caption">{item.caption}</p>
                  <div className="gallery-specs">
                    <strong>Tech Specs:</strong> {item.techSpecs}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPMENT STANDARDS STRIP */}
      <section className="section-light gallery-equip-standards">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
            <span className="eyebrow">Industrial Grade Tools</span>
            <h2>Why Professional Equipment Matters for Property Recovery</h2>
            <p>Consumer shop vacs and household box fans cannot pull bound moisture out of structural subfloors or regulate vapor pressure differentials.</p>
          </div>

          <div className="standards-grid">
            <div className="std-item">
              <span className="std-num">01</span>
              <h4>Low Grain Refrigerant (LGR)</h4>
              <p>Continues condensing atmospheric water even in deep low-humidity environments where standard refrigerant dehumidifiers freeze up or stall.</p>
            </div>
            <div className="std-item">
              <span className="std-num">02</span>
              <h4>Laminar Axial Air Movers</h4>
              <p>Produces directional, aerodynamic laminar airflow along floorboards and walls to shear off the high-moisture boundary air layer.</p>
            </div>
            <div className="std-item">
              <span className="std-num">03</span>
              <h4>True HEPA 500 Air Scrubbers</h4>
              <p>Filters 99.97% of particulates down to 0.3 microns, capturing mold spores, soot particulate, and building dust during containment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hp-final-cta">
        <div className="container final-cta-container">
          <span className="eyebrow">Professional Dispatch</span>
          <h2 className="final-title">Need commercial restoration equipment at your property?</h2>
          <p className="final-sub">
            Our crews arrive fully equipped with truck-mounted extractors, commercial air movers, and LGR dehumidifiers across Temple, Belton, and Waco.
          </p>
          <div className="final-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              Call (254) 482-1151
            </a>
            <a href="/contact-us" onClick={(e) => handleNav('/contact-us', e)} className="btn-ghost-light">
              Submit Job Information
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
