import React, { useState } from 'react';
import { companyData } from '../../data/companyData';
import './ServiceAreasPage.css';

export default function ServiceAreasPage({ onNavigate }) {
  const [selectedCounty, setSelectedCounty] = useState('All');

  const handleNav = (path, e) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const counties = ['All', 'Bell County', 'McLennan County', 'Coryell County', 'Williamson County', 'Milam County'];

  const filteredAreas = selectedCounty === 'All'
    ? companyData.serviceAreas
    : companyData.serviceAreas.filter(a => a.county === selectedCounty);

  return (
    <div className="service-areas-root">
      {/* HERO WITH RICH BACKGROUND */}
      <section className="areas-hero">
        <div className="areas-hero-bg-wrap">
          <img
            src="/images/services/commercial_restoration.jpg"
            alt="Central Texas commercial property water restoration response"
            className="areas-hero-bg"
          />
          <div className="areas-hero-overlay"></div>
        </div>

        <div className="container areas-hero-content">
          <span className="status-pill">
            <span className="pulse-dot"></span> Central Texas Regional Dispatch · 15+ Cities
          </span>
          <h1 className="areas-title">Emergency water mitigation across Central Texas.</h1>
          <p className="areas-subtitle">
            With operational dispatch hubs in Temple and Pflugerville, 24 Hr FloodMasters deploys emergency extraction vehicles, industrial dehumidifiers, and thermal imaging technicians throughout Bell, McLennan, Coryell, Williamson, and Milam Counties around the clock.
          </p>
          <div className="areas-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              Call Dispatch: (254) 482-1151
            </a>
            <a href="/contact-us" onClick={(e) => handleNav('/contact-us', e)} className="btn-secondary-outline">
              Check Immediate Availability
            </a>
          </div>
        </div>
      </section>

      {/* REGIONAL HUB STRIP */}
      <section className="hubs-bar">
        <div className="container hubs-bar-grid">
          <div className="hub-card">
            <div className="hub-icon">★</div>
            <div>
              <strong>Primary Central Hub: Temple, TX</strong>
              <p>Headquarters, rapid response equipment warehouse & direct 24/7 technician staging.</p>
            </div>
          </div>
          <div className="hub-card">
            <div className="hub-icon">★</div>
            <div>
              <strong>Southern Operations Hub: Pflugerville, TX</strong>
              <p>Fleet depot serving Williamson, Travis & southern corridor large-loss commercial accounts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERABLE LOCAL CITIES SECTION */}
      <section className="section-light areas-grid-section">
        <div className="container">
          <div className="areas-section-header text-center">
            <span className="eyebrow">Local Coverage & Technical Profiles</span>
            <h2>Regional Communities Served by 24 Hr FloodMasters</h2>
            <p>Every Central Texas community has distinct environmental challenges: expansive clay soils causing slab leaks, summer air conditioning condensation line overflows, and seasonal river watershed surges.</p>
          </div>

          {/* Filter Pills */}
          <div className="county-filter-tabs">
            {counties.map((county, idx) => (
              <button
                key={idx}
                className={`county-tab ${selectedCounty === county ? 'active' : ''}`}
                onClick={() => setSelectedCounty(county)}
              >
                {county}
              </button>
            ))}
          </div>

          <div className="areas-cards-grid">
            {filteredAreas.map((area, idx) => {
              // Assign authentic local loss context photo
              const areaImages = [
                "/images/hero/hero_tech_clean.webp",
                "/images/services/water_tech_clean.webp",
                "/images/equipment/structural_drying_setup.jpg",
                "/images/editorial/burst_pipe_kitchen_flood.jpg",
                "/images/services/commercial_restoration.jpg",
                "/images/process/documentation_clean.webp"
              ];
              const cardImg = areaImages[idx % areaImages.length];

              return (
                <div key={idx} className="area-card">
                  <div className="area-card-thumb-wrap">
                    <img src={cardImg} alt={`${area.name} emergency water mitigation crew`} className="area-card-thumb" />
                    <span className="area-card-thumb-tag">{area.county}</span>
                    <span className="area-card-thumb-eta">{area.dispatchTime.split(' ')[0]} ETA</span>
                  </div>

                  <div className="area-card-content">
                    <div className="area-top">
                      <h3>{area.name}</h3>
                      <span className="area-pop">Pop: {area.population}</span>
                    </div>

                    <div className="area-risk">
                      <strong>Environmental Loss Risk:</strong>
                      <p>{area.riskProfile}</p>
                    </div>

                    <div className="area-neighborhoods">
                      <strong>Priority Response Zones:</strong> {area.notableAreas}
                    </div>

                    <div className="area-card-actions">
                      <a
                        href={`tel:${companyData.phoneRaw}`}
                        className="btn-emergency btn-sm"
                      >
                        Dispatch Crew to {area.name.split(',')[0]}
                      </a>
                      <a
                        href="/emergency-water-mitigation"
                        onClick={(e) => handleNav('/emergency-water-mitigation', e)}
                        className="area-link"
                      >
                        Inspect Mitigation Protocols →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCAL CLIMATE & FOUNDATION INSIGHTS SECTION */}
      <section className="section-dark areas-insights-section">
        <div className="container">
          <div className="insights-header text-center">
            <span className="eyebrow">Environmental Diagnostics</span>
            <h2>Why Central Texas Properties Experience Frequent Water Losses</h2>
            <p>Our localized experience equips our technicians to target hidden moisture that generic out-of-town companies overlook.</p>
          </div>

          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-icon">01</div>
              <h3>Blackland Prairie Expansive Clay Soils</h3>
              <p>
                From Temple to Waco and Round Rock, Central Texas sits on heavy expansive clay soils. During summer dry spells, soils shrink and pull away from monolithic concrete foundations. When flash storms arrive, soils violently swell, placing torsional stress on embedded copper and PEX plumbing lines until pressurized slab leaks emerge.
              </p>
            </div>
            <div className="insight-card">
              <div className="insight-icon">02</div>
              <h3>Extreme Summer AC Condensate Volume</h3>
              <p>
                With continuous summer temperatures exceeding 100°F and high relative humidity, Central Texas residential HVAC units extract up to 20 gallons of moisture daily. Primary drain line algae clogs quickly flood attic insulation and collapse drywall ceilings directly into living spaces below.
              </p>
            </div>
            <div className="insight-card">
              <div className="insight-icon">03</div>
              <h3>Sudden Winter Freeze Events</h3>
              <p>
                While Texas winters are typically mild, periodic arctic blasts push temperatures into the single digits. Uninsulated exterior hose bibbs, attic plumbing loops, and crawl space pipes freeze and rupture, discharging hundreds of gallons per hour once thawing begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL FIELD DISPATCH SHOWCASE */}
      <section className="section-light areas-visual-showcase">
        <div className="container showcase-grid">
          <div className="showcase-img-wrap">
            <img
              src="/images/services/response_night_clean.webp"
              alt="24 Hr FloodMasters regional emergency dispatch response"
              className="showcase-img"
            />
            <span className="showcase-caption">24 Hr FloodMasters response unit arriving on scene in Bell County.</span>
          </div>
          <div className="showcase-text">
            <span className="eyebrow">Always On Standby</span>
            <h2>Rapid highway deployment along I-35, US-190 & SH-130.</h2>
            <p>
              When a water emergency strikes, every minute of delay allows water to migrate deeper into gypsum sheetrock, baseboard backing, and subfloor layers. With dual operating bases in Temple and Pflugerville, our trucks avoid bottleneck delays and arrive fully equipped to extract water, establish drying chambers, and protect your building structure.
            </p>
            <p>
              Whether you are in a historic downtown residence, a suburban family home, or a commercial retail center, Rene Molina and our veteran-led crews provide immediate, respectful, and disciplined disaster mitigation.
            </p>
            <div style={{ marginTop: '1.8rem' }}>
              <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
                Call Emergency Dispatch: (254) 482-1151
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hp-final-cta">
        <div className="container final-cta-container">
          <span className="eyebrow">Immediate Dispatch</span>
          <h2 className="final-title">Water damage in Bell, McLennan, or Williamson County?</h2>
          <p className="final-sub">
            Do not let standing water linger in wall cavities or under flooring. Call Rene Molina and our veteran-owned dispatch line 24/7/365.
          </p>
          <div className="final-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              Call (254) 482-1151
            </a>
            <a href="/contact-us" onClick={(e) => handleNav('/contact-us', e)} className="btn-ghost-light">
              Submit Property Address For Immediate Response
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
