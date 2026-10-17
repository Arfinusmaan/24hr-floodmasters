import React from 'react';
import { companyData } from '../../data/companyData';
import SEOHead, { SITE_URL } from '../SEOHead';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../../utils/schemaGenerators';
import './BlogPage.css';

export default function BlogPage({ articleSlug, onNavigate }) {
  const handleNav = (path, e) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const articles = [
    {
      slug: "water-damage-behind-walls",
      category: "Moisture Diagnostics",
      title: "Water Damage Behind Drywall: How Moisture Migrates and What to Do Next",
      readTime: "6 min read",
      date: "Updated October 2026",
      image: "/images/editorial/blog_walls.webp",
      summary: "How water wicks upward through gypsum sheets via capillary action, why surface touch testing fails, and how cavity injectidry systems save walls.",
      author: "Rene Molina · USMC Veteran & Certified Restoration Lead",
      content: [
        "When an upstairs bathroom supply line ruptures or an air conditioner condensate line overflows, homeowners naturally focus on the standing water visible across the floor. However, standard building materials such as gypsum sheetrock are porous composite sponges. Through capillary action, moisture is drawn upward through the paper backing and gypsum core, often migrating three to four feet above floor level within 12 to 24 hours.",
        "Trapped behind closed drywall and fiberglass batting, this liquid cannot evaporate into room air. Ambient humidity inside the wall cavity spikes to near 100% relative humidity. In Central Texas temperatures, dormant fungal spores (including Aspergillus and Penicillium) germinate within 24 to 48 hours, leading to concealed structural mold.",
        "Traditional contractors often take a destructive approach, sledgehammering wide 4-foot flood cuts into finished rooms. At 24 Hr FloodMasters, our empirical protocol first maps the true boundary of moisture using non-destructive FLIR thermal imaging and impedance sensors. If structural framing has not sustained microbial decay, we execute targeted 'Injectidry' airflow through minimal baseboard weep holes, drying wall cavities from the inside out while saving homeowners thousands in repair costs."
      ],
      keyTakeaways: [
        "Drywall draws moisture upward 3-4 feet within hours through capillary action.",
        "Surface walls may feel dry to touch while insulation inside remains 100% saturated.",
        "Non-destructive thermal mapping prevents unnecessary demolition of salvageable walls."
      ]
    },
    {
      slug: "signs-water-damage-under-floor",
      category: "Flooring Science",
      title: "Signs of Water Damage Under Floors: How to Protect Wood & Vinyl Planks",
      readTime: "7 min read",
      date: "Updated October 2026",
      image: "/images/editorial/blog_floors.webp",
      summary: "How to identify cupping, crowning, subfloor adhesive breakdown, and moisture trapped beneath impermeable luxury vinyl planks before rot sets in.",
      author: "Rene Molina · USMC Veteran & Certified Restoration Lead",
      content: [
        "Solid hardwood, engineered wood, and luxury vinyl tile (LVT) react completely differently to water intrusion. Solid hardwood absorbs moisture through its unfinished underside much faster than its sealed urethane top surface can release it. This moisture imbalance causes compressive expansion called 'cupping,' where board edges curl upward while centers dip.",
        "With modern luxury vinyl plank (LVP) and laminate floors, a different danger emerges. While vinyl plank tops are waterproof, water effortlessly infiltrates perimeter seams and under-cabinet thresholds. Trapped beneath the vinyl vapor barrier and concrete slab, water emulsifies flooring adhesives, causing foul odors, hollow crunching sounds when stepped on, and black mold colonies underneath.",
        "Rescuing flooring requires immediate action before wood fibers stretch past their cellular elastic limit. 24 Hr FloodMasters deploys high-vacuum subfloor floor mat systems that seal tightly against hardwood planks, pulling bound moisture straight through the wood grain without ripping out the floor. Combined with commercial LGR dehumidifiers, we regularly save hardwood installations that other companies condemn."
      ],
      keyTakeaways: [
        "Cupping indicates the underside of floorboards is wetter than the top surface.",
        "Waterproof vinyl planks trap stagnant liquid against the slab, breeding hidden mold.",
        "High-vacuum extraction mats can extract moisture out of hardwood without demolition."
      ]
    },
    {
      slug: "new-vs-old-water-damage",
      category: "Insurance Documentation",
      title: "How to Tell If Water Damage Is New or Old: A Guide for Insurance Claims",
      readTime: "5 min read",
      date: "Updated October 2026",
      image: "/images/editorial/blog_ceiling.webp",
      summary: "Understanding the empirical physical differences between sudden plumbing pipe bursts and gradual long-term seepage to protect your insurance claim rights.",
      author: "Rene Molina · USMC Veteran & Certified Restoration Lead",
      content: [
        "During insurance claim investigations, property adjusters make a critical distinction between sudden, accidental water losses (such as an immediate copper pipe failure or water heater blowout) and gradual, neglected seepage over months. Understanding physical forensic markers helps Central Texas homeowners communicate accurately and avoid wrongful claim denials.",
        "Fresh water damage typically exhibits cool surface temperatures, soft but structurally cohesive drywall, and pliable paint blisters holding clear liquid. Staining edges are usually faint, single-line borders without crystalline mineral buildup.",
        "In contrast, older recurring water intrusion displays distinct concentric rings of dark yellow, amber, or brown mineral salts, resembling tree rings. These rings prove that the drywall experienced multiple cycles of wetting and slow drying over weeks or months. Furthermore, older damage often exhibits rusted drywall fasteners, degraded cellulose rot, and active microbial colonies.",
        "24 Hr FloodMasters provides detailed digital psychrometric logs and moisture perimeter mapping from day one, giving property owners unbiased empirical evidence that supports legitimate claims."
      ],
      keyTakeaways: [
        "Sudden losses present clean single-ring water marks with structurally intact gypsum.",
        "Concentric multi-colored rings indicate repeated historical wetting cycles.",
        "Immediate certified moisture logs protect policyholders from improper claim denials."
      ]
    },
    {
      slug: "understanding-water-extraction-vs-drying",
      category: "Mitigation Science",
      title: "Water Extraction vs. Structural Drying: Why Pumping Water Is Only 10% of the Job",
      readTime: "6 min read",
      date: "Updated October 2026",
      image: "/images/equipment/structural_drying_setup.webp",
      summary: "Why vacuuming standing water leaves 90% of moisture trapped in building materials, and how psychrometric thermodynamics removes bound water.",
      author: "Rene Molina · USMC Veteran & Certified Restoration Lead",
      content: [
        "A common mistake made by property owners is believing that once standing water is vacuumed out with a shop vac, the emergency has ended. In reality, bulk liquid extraction removes only 'free' surface water. The vast majority of liquid has already wicked into the cellular pores of concrete slabs, floor joists, and structural wall framing as 'bound water.'",
        "Bound water cannot simply be evaporated by opening windows or running ordinary box fans. In fact, running standard household fans in humid Central Texas weather often blows moisture-laden air into dry bedrooms, accelerating mold proliferation across unaffected rooms.",
        "True structural drying relies on the science of psychrometry: controlling the thermodynamic relationship between temperature, relative humidity, and vapor pressure. We use commercial Low Grain Refrigerant (LGR) dehumidifiers that drop atmospheric dew points below 40°F, creating a powerful vapor pressure gradient that actively pulls bound moisture out of structural lumber and concrete into the room air, where it is extracted and discharged."
      ],
      keyTakeaways: [
        "Bulk extraction removes only free liquid; structural materials remain waterlogged.",
        "Household box fans spread humid air and fungal spores into unaffected rooms.",
        "Industrial LGR systems create vapor pressure differentials that pull out deep moisture."
      ]
    }
  ];

  // If viewing single article
  if (articleSlug) {
    const article = articles.find(a => a.slug === articleSlug) || articles[0];

    const breadcrumbs = [
      { name: "Home", url: "/" },
      { name: "Guides", url: "/blog" },
      { name: article.title, url: `/blog/${article.slug}` }
    ];

    const articleSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `${SITE_URL}/blog/${article.slug}#article`,
          "headline": article.title,
          "description": article.summary,
          "image": `${SITE_URL}${article.image}`,
          "author": {
            "@type": "Person",
            "name": "Rene Molina",
            "jobTitle": "Founder & Certified Restoration Lead"
          },
          "publisher": {
            "@type": "Organization",
            "name": companyData.name,
            "logo": {
              "@type": "ImageObject",
              "url": `${SITE_URL}/images/brand/logo.png`
            }
          },
          "mainEntityOfPage": `${SITE_URL}/blog/${article.slug}`
        },
        getBreadcrumbSchema(breadcrumbs)
      ]
    };

    return (
      <div className="blog-article-root">
        <SEOHead
          title={`${article.title} | FloodMasters`}
          description={article.summary.slice(0, 155)}
          canonicalPath={`/blog/${article.slug}`}
          ogType="article"
          ogImage={article.image}
          schema={articleSchema}
        />

        {/* ARTICLE HERO WITH BACKGROUND */}
        <section className="article-hero">
          <div className="article-hero-bg-wrap">
            <img
              src={article.image}
              alt={article.title}
              className="article-hero-bg"
              width="1536"
              height="1024"
              fetchpriority="high"
            />
            <div className="article-hero-overlay"></div>
          </div>

          <div className="container-narrow article-hero-content">
            <a href="/blog" onClick={(e) => handleNav('/blog', e)} className="back-link">
              ← Back to All Restoration Guides
            </a>
            <span className="eyebrow">{article.category}</span>
            <h1 className="article-title">{article.title}</h1>
            <div className="article-meta">
              <span>{article.date}</span> · <span>{article.readTime}</span> · <span>By {article.author}</span>
            </div>
          </div>
        </section>

        {/* ARTICLE BODY */}
        <section className="section-light article-body-section">
          <div className="container-narrow">
            <div className="article-featured-img-wrap">
              <img
                src={article.image}
                alt={article.title}
                className="article-featured-img"
                width="1536"
                height="1024"
                loading="lazy"
              />
              <span className="article-img-caption">Field documentation and structural diagnostic inspection in Central Texas.</span>
            </div>

            {/* Key takeaways callout */}
            <div className="article-takeaways-box">
              <h3>Key Restoration Takeaways</h3>
              <ul>
                {article.keyTakeaways.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="article-content">
              {article.content.map((paragraph, idx) => (
                <p key={idx} className="article-paragraph">{paragraph}</p>
              ))}
            </div>

            <div className="article-author-card">
              <img
                src="/images/editorial/about_owner_rene_molina.webp"
                alt="Rene Molina, Owner of 24 Hr FloodMasters"
                className="author-avatar"
                width="80"
                height="80"
                loading="lazy"
              />
              <div className="author-info">
                <strong>Rene Molina</strong>
                <span className="author-role">Founder & Operator · U.S. Marine Corps Veteran</span>
                <p>Leading certified emergency water, fire, mold, and storm mitigation across Temple, Belton, Waco, and Central Texas.</p>
              </div>
            </div>

            <div className="article-cta-box">
              <h3>Facing Active Moisture or Water Loss at Your Property?</h3>
              <p>Do not wait for structural rot or mold to set in. 24 Hr FloodMasters provides immediate emergency extraction, diagnostic thermal mapping, and psychrometric drying across Central Texas.</p>
              <div className="article-cta-buttons">
                <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
                  Call (254) 482-1151
                </a>
                <a href="/contact-us" onClick={(e) => handleNav('/contact-us', e)} className="btn-ghost-dark">
                  Request Property Inspection →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const indexBreadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Guides", url: "/blog" }
  ];

  const indexSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getLocalBusinessSchema(),
      getBreadcrumbSchema(indexBreadcrumbs)
    ]
  };

  // Blog Index
  return (
    <div className="blog-page-root">
      <SEOHead
        title="Restoration Guides & Diagnostics | FloodMasters"
        description="Practical water damage restoration, moisture diagnostics, subfloor drying, and insurance claims guides for Central Texas homeowners and businesses."
        canonicalPath="/blog"
        ogType="website"
        ogImage="/images/process/documentation_clean.webp"
        schema={indexSchema}
      />

      {/* HERO WITH BACKGROUND */}
      <section className="blog-hero">
        <div className="blog-hero-bg-wrap">
          <img
            src="/images/process/documentation_clean.webp"
            alt="Restoration technician logging psychrometric moisture records"
            className="blog-hero-bg"
            width="1536"
            height="1024"
            fetchpriority="high"
          />
          <div className="blog-hero-overlay"></div>
        </div>

        <div className="container blog-hero-content">
          <span className="status-pill">
            <span className="pulse-dot"></span> Property Knowledge & Diagnostics Base
          </span>
          <h1 className="blog-title">Practical restoration guides for Texas property owners.</h1>
          <p className="blog-subtitle">
            Empirical insights into moisture migration, subfloor drying, thermal diagnostics, and insurance claims written by veteran restoration professionals.
          </p>
          <div className="blog-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              Emergency Dispatch: (254) 482-1151
            </a>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="section-light blog-grid-section">
        <div className="container">
          <div className="blog-section-header text-center">
            <span className="eyebrow">Technical Articles</span>
            <h2>Empirical Knowledge for Central Texas Disasters</h2>
            <p>Learn how to detect hidden water damage, avoid common DIY pitfalls, and navigate insurance claims with confidence.</p>
          </div>

          <div className="blog-grid">
            {articles.map((art) => (
              <article
                key={art.slug}
                className="blog-card"
                onClick={(e) => handleNav(`/blog/${art.slug}`, e)}
              >
                <div className="blog-img-wrap">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="blog-img"
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                  <span className="blog-category-badge">{art.category}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-read-time">{art.readTime}</span>
                    <span>·</span>
                    <span className="blog-date">{art.date}</span>
                  </div>
                  <h3>{art.title}</h3>
                  <p>{art.summary}</p>
                  <div className="blog-card-footer">
                    <span className="blog-read-more">Read Technical Guide →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hp-final-cta">
        <div className="container final-cta-container">
          <span className="eyebrow">24/7 Professional Help</span>
          <h2 className="final-title">Have questions about water damage at your home or business?</h2>
          <p className="final-sub">
            Speak directly with Rene Molina and our veteran-owned dispatch team. We answer calls 24 hours a day, 365 days a year across Bell and McLennan counties.
          </p>
          <div className="final-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              Call (254) 482-1151
            </a>
            <a href="/contact-us" onClick={(e) => handleNav('/contact-us', e)} className="btn-ghost-light">
              Submit Property Details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
