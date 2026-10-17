import { companyData } from '../data/companyData';
import { SITE_URL } from '../components/SEOHead';

export function getLocalBusinessSchema() {
  const citiesServed = companyData.serviceAreas.map(a => typeof a === 'string' ? a : a.name);

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#organization`,
    "name": companyData.name,
    "legalName": companyData.legalName,
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/brand/logo.png`,
    "image": `${SITE_URL}/images/hero/hero_tech_clean.webp`,
    "telephone": "+1-254-482-1151",
    "email": companyData.email,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": citiesServed.map(city => ({
      "@type": "AdministrativeArea",
      "name": city
    })),
    "knowsAbout": [
      "Emergency Water Damage Restoration",
      "Structural Drying & Dehumidification",
      "Commercial Water Mitigation",
      "Flood and Category 3 Blackwater Cleanup",
      "Fire and Smoke Damage Mitigation",
      "Mold Containment & Mitigation",
      "Insurance Documentation & Moisture Logs"
    ]
  };
}

export function getServiceSchema(service, slug) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/${slug}#service`,
    "name": service.title,
    "description": service.summary,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${SITE_URL}/#organization`,
      "name": companyData.name,
      "telephone": "+1-254-482-1151"
    },
    "serviceType": service.shortTitle || service.title,
    "areaServed": companyData.serviceAreas.map(a => ({
      "@type": "AdministrativeArea",
      "name": typeof a === 'string' ? a : a.name
    }))
  };
}

export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}

export function getFAQSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}
