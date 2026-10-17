import React, { useState } from 'react';
import { companyData } from '../../data/companyData';
import SEOHead from '../SEOHead';
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '../../utils/schemaGenerators';
import './ServicePage.css';

export default function ServicePage({ serviceSlug, onNavigate }) {
  const [openFaq, setOpenFaq] = useState(0);

  const handleNav = (path, e) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const service = companyData.services.find(s => s.slug === serviceSlug) || companyData.services[0];

  const serviceKnowledge = {
    "emergency-water-mitigation": {
      tagline: "IICRC S500 Standard Mitigation Protocol",
      headline: "Rapid commercial water extraction and stabilization in Central Texas.",
      subtext: "When water infiltrates building cavities, structural materials reach saturation within hours. We deploy industrial weighted subfloor extractors, calibrated pinless moisture sensors, and commercial LGR drying systems to protect residential and commercial properties.",
      heroBg: "/images/hero/hero_tech_clean.webp",
      heroBadge: "Bell & McLennan Counties · Open 24/7/365",
      introTitle: "Why the first 24 hours determine total property survival.",
      introParagraph1: "Water damage follows progressive stages governed by psychrometrics. In Central Texas homes and business structures—built largely on monolithic post-tension concrete slabs with wood framing and gypsum drywall—unmitigated liquid immediately begins wicking upward through capillary action. Within 24 hours, baseboards swell, laminate layers delaminate, and subfloor adhesives begin emulsifying.",
      introParagraph2: "By 48 hours, microbial amplification initiates. Ambient humidity spikes above 65% RH (relative humidity), allowing dormant fungal spores to germinate along baseboard perimeters and behind damp insulation. 24 Hr FloodMasters eliminates this risk by immediately executing bulk water extraction, establishing negative-air containment, and applying EPA-registered botanical antimicrobials before deep structural drying.",
      visual1: "/images/services/water_tech_clean.webp",
      visual1Caption: "Certified technician placing high-velocity axial air movers along water-stained drywall perimeters in Temple, TX.",
      visual2: "/images/equipment/structural_drying_setup.webp",
      visual2Caption: "Heavy-duty commercial dehumidifiers and drying ductwork arranged in a residential living space.",
      visual3: "/images/editorial/burst_pipe_kitchen_flood.webp",
      visual3Caption: "Ruptured supply line water loss spreading across kitchen cabinetry and hardwood flooring.",
      visual4: "/images/process/documentation_clean.webp",
      visual4Caption: "Digital psychrometric assessment comparing room moisture to dry standards.",
      equipmentHighlights: [
        { name: "Low Grain Refrigerant (LGR) Dehumidifiers", desc: "Extracting up to 130+ pints of water per day even in deep low-humidity drying phases." },
        { name: "Centrifugal & Axial Air Movers", desc: "Blowing continuous 3,000+ CFM laminar airflow at 45-degree angles to break surface vapor boundary layers." },
        { name: "Hydro-Sensor & Deep Pin Tracers", desc: "Non-destructive digital testing of wall cavities, subfloors, and framing without puncturing finished walls." },
        { name: "Weighted Ride-On & Stand-On Extractors", desc: "Pulling 90%+ of bound water directly out of carpet pile and underlying padding." }
      ],
      scenarios: [
        {
          title: "Slab Leaks & Under-Foundation Plumbing",
          desc: "Central Texas expansive clay soils shift dramatically between wet winters and searing summers, stressing copper supply lines under foundation slabs until pinhole ruptures emerge.",
          solution: "We trace subterranean hot spots with infrared thermal cameras and establish targeted subfloor drying chambers."
        },
        {
          title: "AC Condensate Drain Overflows",
          desc: "With Texas heat indexes exceeding 105°F, air handlers produce 15-20 gallons of condensate daily. Clogged drip lines quickly saturate ceilings and interior walls.",
          solution: "Immediate water vacuuming, wet ceiling insulation removal, and structural cavity drying to stop ceiling collapse."
        },
        {
          title: "Burst PEX & Copper Plumbing Lines",
          desc: "Sudden joint ruptures or freezing winter line splits delivering 500+ gallons per hour across finished second stories and lower-level living areas.",
          solution: "Rapid emergency shutoff verification, high-capacity water evacuation, and dehumidifier grid placement."
        },
        {
          title: "Water Heater & Washing Machine Hose Ruptures",
          desc: "High-pressure braided steel hose failures in laundry utility rooms and mechanical closets flooding adjoining carpeted hallways.",
          solution: "Subfloor extraction mats, antimicrobial wash, and floor drying systems."
        }
      ],
      processPhases: [
        {
          phase: "01",
          name: "Arrival & Hazard Triage",
          detail: "Inspect main water supply shutoff, verify electrical safety near water pools, check ceiling structural sag, and categorize water contamination level (Category 1, 2, or 3)."
        },
        {
          phase: "02",
          name: "Deep Bulk Extraction",
          detail: "Commercial truck-mount and portable high-cfm vacuum systems pull bulk standing liquid off hardwoods, tile, carpets, and concrete subsurfaces."
        },
        {
          phase: "03",
          name: "Evaporative Airflow & Moisture Pull",
          detail: "Deploy high-velocity air movers and LGR dehumidifiers to create rapid vapor pressure differentials, drawing moisture out of deep timber framing."
        },
        {
          phase: "04",
          name: "Daily Psychrometric Audits",
          detail: "Track temperature, relative humidity, and grains per pound (GPP) every 24 hours until building materials reach verifiable dry standard."
        }
      ],
      localCaseStudy: {
        location: "Temple, TX (Western Hills Residence)",
        situation: "A burst washing machine supply hose flooded 1,400 sq ft of engineered hardwood and hallway drywall while the homeowner was at work.",
        action: "24 Hr FloodMasters arrived in 25 minutes, extracted 320 gallons of water, installed negative-pressure floor drying mats, and dried the hardwood subfloor in 4 days without requiring floor teardown.",
        result: "100% of the hardwood was preserved, saving the homeowner an estimated $14,000 in replacement flooring."
      },
      faqs: [
        {
          q: "Can water damage dry out naturally with household fans and open windows?",
          a: "No. In Central Texas, outdoor relative humidity frequently exceeds 70-85%. Opening windows actually introduces more airborne moisture into damaged walls. Household fans only circulate moist air without removing water vapor. Professional LGR dehumidification is required to condense and pump the water out of the building."
        },
        {
          q: "How does 24 Hr FloodMasters protect my insurance claim?",
          a: "We generate complete electronic documentation: initial photographic records, thermal boundary scans, moisture mapping percentages, and daily psychrometric dry-down logs. We upload these directly for your adjuster so claim decisions are supported by empirical data."
        },
        {
          q: "What is the difference between water mitigation and reconstruction?",
          a: "Mitigation is the immediate emergency work: water removal, structural drying, antimicrobial treatment, and stabilizing the property to prevent mold. Reconstruction is the later phase of painting, installing new trim, and rebuilding cabinets. Focusing strictly on mitigation prevents inflated contractor scopes and gets your home dry faster."
        },
        {
          q: "What should I avoid doing before your crew arrives?",
          a: "Never use a household vacuum on standing water due to fatal electrocution risks. Do not enter rooms where drywall ceilings are sagging with water weight. Turn off the main water valve if safely accessible."
        }
      ]
    },
    "structural-drying-services": {
      tagline: "Psychrometric Science & Cavity Dehumidification",
      headline: "Scientific structural drying and moisture monitoring across Central Texas.",
      subtext: "Surfaces may appear dry while wall studs, floor joists, and concrete slabs hold critical moisture. We apply psychrometric science to pull vapor pressure out of bound building assemblies.",
      heroBg: "/images/equipment/structural_drying_setup.webp",
      heroBadge: "Scientific Psychrometric Monitoring",
      introTitle: "Understanding bound moisture and deep vapor pressure.",
      introParagraph1: "Moisture inside building materials exists in two states: free water (surface liquid easily vacuumed) and bound water (absorbed into the microscopic cellular structures of wood framing, subfloor plywood, and concrete). Standard air drying cannot dislodge bound water because surface evaporation cools the material, causing moisture migration to stall.",
      introParagraph2: "Our structural drying protocol utilizes psychrometrics: the thermodynamic physics of moist air. By manipulating ambient temperature and lowering the air's grains per pound (GPP) with commercial LGR dehumidifiers, we generate an intense vapor pressure gradient. Moisture deep within timber framing is forced to migrate to the surface, where high-velocity axial air movers evaporate it instantly into the dehumidifier's collection chamber.",
      visual1: "/images/equipment/structural_drying_setup.webp",
      visual1Caption: "LGR dehumidifier and axial air movers maintaining continuous negative vapor pressure.",
      visual2: "/images/process/documentation_clean.webp",
      visual2Caption: "Technician logging digital moisture content percentages against dry standards.",
      visual3: "/images/hero/hero_tech_clean.webp",
      visual3Caption: "Inspecting framing moisture behind opened baseboards in residential living space.",
      visual4: "/images/editorial/blog_floors.webp",
      visual4Caption: "Subfloor moisture testing to prevent long-term hardwood cupping and crowning.",
      equipmentHighlights: [
        { name: "Desiccant & LGR Dehumidifiers", desc: "Producing super-dry air with low vapor pressure to penetrate dense timber and brick." },
        { name: "Injectidry Cavity Drying Systems", desc: "Pumping dry heated air directly into wall studs and cabinet kicks through micro-ports." },
        { name: "Thermo-Hygrometers", desc: "Calibrated instruments calculating dew points, relative humidity, and GPP in real time." },
        { name: "Thermal Imaging Cameras", desc: "Visualizing cold evaporation zones behind intact sheetrock to trace hidden moisture perimeters." }
      ],
      scenarios: [
        {
          title: "Hardwood Floor Cupping & Subfloor Saturation",
          desc: "Water trapped between hardwood planks and concrete slabs causes board edges to curl upward under intense compressive pressure.",
          solution: "Drying mats sealed over hardwoods pull moisture directly up through the grain before permanent board deformation sets in."
        },
        {
          title: "Insulated Wall Cavity Dampness",
          desc: "Fiberglass and mineral wool insulation retain water like sponges, keeping 2x4 framing continuously damp out of sight.",
          solution: "Targeted baseboard removal and forced-air cavity drying to save the sheetrock without full demolition."
        },
        {
          title: "Concrete Foundation Slab Moisture Retention",
          desc: "Porous concrete slabs absorb thousands of pounds of water that will later ruin luxury vinyl tile adhesives if covered prematurely.",
          solution: "Deep-penetrating dehumidification until relative humidity probes confirm slab equilibrium."
        },
        {
          title: "Multi-Level Ceiling Joist Saturation",
          desc: "Upper-story water leaks draining down into floor joists and ceiling drywall between residential levels.",
          solution: "Carefully positioned axial fans creating horizontal airflow vortices across ceiling joist bays."
        }
      ],
      processPhases: [
        { phase: "01", name: "Psychrometric Baseline", detail: "Measure temperature, RH, and GPP of affected rooms, unaffected control rooms, and outdoor air." },
        { phase: "02", name: "Airflow Vortices Setup", detail: "Arrange high-velocity air movers at 45-degree angles to break laminar air boundaries." },
        { phase: "03", name: "Dehumidification Grid", detail: "Install commercial LGR dehumidifiers to continuously draw moisture vapor from the air." },
        { phase: "04", name: "Certified Dry Standard", detail: "Daily audits verify that all framing materials match the unaffected control baseline." }
      ],
      localCaseStudy: {
        location: "Belton, TX (UMHB Area Historic Property)",
        situation: "Concealed radiator leak soaked antique heart-pine subflooring and lath-and-plaster walls.",
        action: "Deployed non-invasive injected drying and desiccant units for 5 days, monitoring wood moisture content daily.",
        result: "Restored wood moisture from 34% back down to 10% dry standard with zero structural warping or demolition."
      },
      faqs: [
        {
          q: "How many days does structural drying usually take?",
          a: "Most residential properties in Temple and Central Texas dry within 3 to 5 days under continuous commercial equipment operation. Dense hardwoods or saturated concrete slabs may require 5 to 7 days."
        },
        {
          q: "Can I turn the drying fans off at night so I can sleep?",
          a: "No. Turning equipment off allows relative humidity to rebound rapidly, stalling drying and creating ideal conditions for mold spores to germinate. If equipment noise is disruptive, we coordinate alternate room isolation or recommend temporary relocation."
        },
        {
          q: "How do you know when a wall is truly dry?",
          a: "We take baseline readings from unaffected drywall and wood framing in dry rooms. We do not stop drying until affected materials reach the exact moisture content of that dry baseline."
        },
        {
          q: "Will structural drying damage my home furnishings?",
          a: "No. Professional mitigation manages temperature and relative humidity in controlled ranges. Sensitive items like fine artwork or musical instruments are carefully relocated to safe, unaffected rooms."
        }
      ]
    },
    "commercial-water-damage-restoration": {
      tagline: "Large-Loss Commercial & Institutional Mitigation",
      headline: "Commercial water damage mitigation engineered for business continuity.",
      subtext: "Every hour of corporate, medical, or retail downtime incurs severe revenue loss. We execute structured containment, high-capacity water removal, and discreet evening drying across Central Texas.",
      heroBg: "/images/services/commercial_restoration.webp",
      heroBadge: "Corporate, Medical & Retail Response",
      introTitle: "Minimizing business interruption with disciplined containment.",
      introParagraph1: "Commercial properties in Temple, Killeen, Waco, and Round Rock face complex challenges during water losses: open floorplans, suspended acoustical ceilings, commercial power grids, sensitive IT server rooms, and strict OSHA/ADA regulatory standards. A water pipe break on the top floor of an office complex can disrupt dozens of tenant businesses simultaneously.",
      introParagraph2: "24 Hr FloodMasters deploys large-loss commercial mitigation teams with industrial desiccant dehumidifiers, high-capacity generator support, and zippered poly containment walls. We isolate wet zones from active client areas, allowing corporate offices, medical clinics, and retail storefronts to maintain daily operations while mitigation progresses safely behind containment barriers.",
      visual1: "/images/services/commercial_restoration.webp",
      visual1Caption: "Commercial corridor water mitigation with safety hazard cones and industrial desiccant air movers.",
      visual2: "/images/services/response_night_clean.webp",
      visual2Caption: "Emergency commercial response fleet dispatched on site in Central Texas.",
      visual3: "/images/process/documentation_clean.webp",
      visual3Caption: "Compiling daily commercial loss documentation and floorplan moisture maps for facility managers.",
      visual4: "/images/hero/hero_tech_clean.webp",
      visual4Caption: "Technician inspecting commercial drywall baseboards and electrical runs for water intrusion.",
      equipmentHighlights: [
        { name: "Trailer-Mounted Desiccant Units", desc: "Supplying massive volumes of dry, low-dew-point air for large commercial multi-story losses." },
        { name: "Auxiliary Power Distribution", desc: "Portable commercial power panels ensuring drying equipment runs without tripping tenant breakers." },
        { name: "Commercial HEPA Air Scrubbers", desc: "Capturing 99.97% of airborne particulates down to 0.3 microns to maintain indoor air quality." },
        { name: "Infrared Multi-Zone Diagnostics", desc: "Rapidly scanning thousands of square feet of ceiling tiles and modular carpeting." }
      ],
      scenarios: [
        {
          title: "Medical & Nursing Home Water Losses",
          desc: "Strict clinical standards demand sterile containment, zero airborne dust, and rapid water extraction around patient rooms.",
          solution: "Negative-air HEPA scrubbing and quiet drying units maintaining cleanroom standards."
        },
        {
          title: "Corporate Suites & IT Server Rooms",
          desc: "Water intrusion near raised access computer floors and electrical chases threatening critical digital infrastructure.",
          solution: "Targeted desiccant dehumidification and moisture barrier isolation protecting servers and networking hubs."
        },
        {
          title: "Educational Facilities & Classrooms",
          desc: "Plumbing failures in school restrooms or science labs requiring immediate weekend dryout to prevent weekday school closures.",
          solution: "High-capacity extraction fleets working around the clock to ensure classrooms reopen on schedule."
        },
        {
          title: "Multi-Family & Apartment Complexes",
          desc: "Upper-story water line breaks channeling down through multiple vertical tenant units.",
          solution: "Multi-crew simultaneous extraction and coordinated communication with property management teams."
        }
      ],
      processPhases: [
        { phase: "01", name: "Facility Assessment & Safety", detail: "Meet with facility director, check elevator shafts and electrical vaults, and establish work corridors." },
        { phase: "02", name: "Containment & Traffic Isolation", detail: "Erect heavy poly barriers separating wet zones from client and tenant pedestrian paths." },
        { phase: "03", name: "Continuous Commercial Extraction", detail: "Deploy high-volume extraction trucks to evacuate thousands of gallons of liquid." },
        { phase: "04", name: "Executive Claims Reporting", detail: "Provide daily digital psychrometric dashboards and itemized work logs directly to corporate adjusters." }
      ],
      localCaseStudy: {
        location: "Temple, TX (Baylor Scott & White Medical Corridor Suite)",
        situation: "Ruptured supply line flooded 4,200 sq ft of administrative offices and conference facilities on Friday evening.",
        action: "24 Hr FloodMasters mobilized 14 technicians, extracted water within 3 hours, and ran silent desiccant drying all weekend.",
        result: "All offices reached dry standard by Monday 6:00 AM, avoiding any canceled appointments or business interruption."
      },
      faqs: [
        {
          q: "Can our commercial facility remain open while drying takes place?",
          a: "Yes. In the majority of commercial losses, we erect zippered containment walls and route ducting overhead so tenants, staff, and visitors can continue working in unaffected areas safely."
        },
        {
          q: "Do you coordinate directly with commercial property managers and risk directors?",
          a: "Yes. We designate a dedicated project supervisor who delivers daily morning email briefings, moisture mapping updates, and equipment run logs to building management and insurance representatives."
        },
        {
          q: "What capacity of equipment can you deploy for large-loss floods?",
          a: "Through our Temple and Pflugerville facilities, we deploy trailer-mounted desiccants, portable commercial generators, dozens of LGR units, and over 150 axial air movers."
        },
        {
          q: "How do you handle commercial carpet tiles with glued adhesive?",
          a: "We test subfloor moisture beneath modular carpet tiles. In clean water events, specialized high-vacuum extraction mats can dry carpet tiles in place without destroying adhesive backing."
        }
      ]
    },
    "flood-cleanup-services": {
      tagline: "Category 3 Blackwater & Storm Sanitation",
      headline: "Sanitary decontamination and floodwater removal across Central Texas.",
      subtext: "Overland floodwater and sanitary sewer backups carry harmful bacteria, chemical runoff, and biological pathogens. We provide rigorous biocidal decontamination, safe waste extraction, and certified structural sanitization.",
      heroBg: "/images/services/response_night_clean.webp",
      heroBadge: "Category 3 Hazardous Water Protocol",
      introTitle: "The critical danger of Category 3 contaminated water.",
      introParagraph1: "The restoration industry categorizes water into three severity classes. Category 1 is clean water from supply pipes. Category 2 is gray water from appliances. Category 3 is grossly unsanitary blackwater containing raw sewage, river silt, agricultural pesticides, and pathogenic microorganisms like E. coli and Salmonella. Floodwater entering a home from outdoors is automatically classified as Category 3.",
      introParagraph2: "Handling Category 3 water requires certified hazmat precautions: personal protective equipment (PPE), heavy-duty rubber gloves, P100/organic vapor respirators, and clinical-grade antimicrobials. Porous materials like carpet padding, saturated drywall insulation, and upholstered furniture that absorb blackwater cannot be salvaged and must be removed in sealed disposal bags to protect property occupants.",
      visual1: "/images/services/response_night_clean.webp",
      visual1Caption: "Emergency response team arriving on site with extraction and sanitation equipment.",
      visual2: "/images/services/water_tech_clean.webp",
      visual2Caption: "Sanitizing affected subflooring with hospital-grade antimicrobial solutions.",
      visual3: "/images/process/documentation_clean.webp",
      visual3Caption: "Documenting affected porous materials and contaminated boundaries for claims records.",
      visual4: "/images/editorial/burst_pipe_kitchen_flood.webp",
      visual4Caption: "Interior floodwater containment preventing cross-contamination to adjoining dry spaces.",
      equipmentHighlights: [
        { name: "Heavy Blackwater Suction Extractors", desc: "Sealed vacuum systems designed to pump biohazardous liquids directly into containment tanks." },
        { name: "EPA-Registered Broad-Spectrum Biocides", desc: "Hospital-grade virucidal, fungicidal, and bactericidal sanitizing agents." },
        { name: "Full Hazmat PPE & Respirators", desc: "Ensuring technicians and occupants are shielded from biological pathogens and aerosolized spores." },
        { name: "Commercial HEPA Air Scrubbers", desc: "Operating in negative-air mode to exhaust contaminated air outside while scrubbing indoor spaces." }
      ],
      scenarios: [
        {
          title: "Municipal Main Sewer Backups",
          desc: "Heavy Texas storms overloading city sewage mains, forcing blackwater up through residential ground-floor toilets and tubs.",
          solution: "Immediate extraction, controlled removal of contaminated porous flooring, and biocidal wall washdown."
        },
        {
          title: "Hill Country Flash Flood Intrusion",
          desc: "Rapid stormwater surges overflowing creeks and drainage basins, pushing mud and runoff through home doors.",
          solution: "Sediment clearance, high-volume extraction, power washing of concrete subflooring, and structural dryout."
        },
        {
          title: "Septic System Drainage Failures",
          desc: "Saturated drain fields pushing septic effluent into residential yards and ground-floor utility spaces.",
          solution: "Complete biohazard perimeter isolation, extraction, and antimicrobial decontamination."
        },
        {
          title: "Basement & Below-Grade Foundation Infiltration",
          desc: "Groundwater hydrostatic pressure forcing soil-contaminated water through masonry foundation walls.",
          solution: "Water evacuation, structural drying, and sanitizing exposed foundation concrete."
        }
      ],
      processPhases: [
        { phase: "01", name: "Hazard Quarantine", detail: "Isolate affected rooms with biohazard tape and poly barriers to stop occupant exposure." },
        { phase: "02", name: "Blackwater Evacuation", detail: "Extract contaminated liquid using dedicated sealed waste extraction equipment." },
        { phase: "03", name: "Contaminated Porous Tear-Out", detail: "Carefully remove soaked carpet padding, wet baseboards, and saturated insulation." },
        { phase: "04", name: "Hospital-Grade Antimicrobial", detail: "Wash framing and concrete with EPA-registered disinfectants and begin drying." }
      ],
      localCaseStudy: {
        location: "Killeen, TX (Clear Creek Neighborhood)",
        situation: "A torrential thunderstorm caused a city sewer surcharge, backing up raw blackwater into 3 ground-floor bathrooms and bedrooms.",
        action: "24 Hr FloodMasters arrived within 30 minutes in full PPE, evacuated 450 gallons of sewage, removed contaminated carpet, and disinfected all framing.",
        result: "Property certified 100% microbiologically sanitized and structurally dry in 72 hours, with zero lingering odors."
      },
      faqs: [
        {
          q: "Why can't I just clean sewage backup with household bleach?",
          a: "Household bleach reacts with organic matter, generating noxious chloramine gases while failing to penetrate deep timber pores. It leaves bacteria alive inside wood framing. Professional mitigation requires EPA-registered hospital-grade disinfectants."
        },
        {
          q: "Can my carpets be saved after a sewage backup or river flood?",
          a: "Under industry standards (IICRC S500), carpet padding and contaminated carpeting that absorb Category 3 blackwater must be discarded because porous fibers trap dangerous pathogens that cannot be reliably disinfected."
        },
        {
          q: "How do you eliminate the foul odor caused by sewage backups?",
          a: "Odors stem from volatile organic compounds produced by active bacteria. Once the contaminated materials are removed, surfaces disinfected, and HEPA carbon air filtration applied, odors are eradicated at the molecular level."
        },
        {
          q: "Is flood damage covered under standard homeowner insurance?",
          a: "Standard homeowner policies typically cover internal plumbing pipe bursts, but require separate flood insurance (NFIP) for external rising floodwater. We provide itemized loss documentation regardless of insurance type to support your claim."
        }
      ]
    },
    "fire-mitigation": {
      tagline: "Fire Stabilization, Soot & Suppression Water",
      headline: "Emergency mitigation for properties affected by fire, smoke, and suppression water.",
      subtext: "Structural fires trigger two immediate crises: corrosive acidic soot etching interior surfaces, and thousands of gallons of firefighting water soaking timber framing. We stabilize both before rebuild work starts.",
      heroBg: "/images/services/fire_tech_clean.webp",
      heroBadge: "Fire, Soot & Water Suppression Stabilization",
      introTitle: "Preventing secondary soot etching and rot.",
      introParagraph1: "When combustion occurs, synthetic plastics, treated lumber, and textiles release acidic smoke particles. Within hours of cooling, this oily soot chemically bonds with porcelain, chrome fixtures, glass windows, and painted walls, permanently etching surfaces if not chemically neutralized.",
      introParagraph2: "Simultaneously, municipal fire crews must inject thousands of gallons of high-pressure water to extinguish flames. This water collects in basements, lower-level ceilings, and crawl spaces, creating severe rot hazards. 24 Hr FloodMasters stabilizes fire losses by immediately extracting suppression water, sponging soot with specialized chemical dry sponges, and eliminating smoke odors.",
      visual1: "/images/services/fire_tech_clean.webp",
      visual1Caption: "Technician inspecting charred framing and soot deposition in residential interior.",
      visual2: "/images/services/original_fire_service.jpg",
      visual2Caption: "Forensic inspection of fire and smoke damage boundaries with professional safety gear.",
      visual3: "/images/process/documentation_clean.webp",
      visual3Caption: "Cataloging fire and water damage scope for carrier adjusters.",
      visual4: "/images/hero/hero_tech_clean.webp",
      visual4Caption: "Deploying air scrubbers and dehumidification following fire-suppression water extraction.",
      equipmentHighlights: [
        { name: "Chemical Latex Dry Soot Sponges", desc: "Porous vulcanized rubber sponges that lift carbon soot without smearing oily residue onto walls." },
        { name: "Thermal Fogging & Hydroxyl Generators", desc: "Generating microscopic neutralizing vapor that follows the exact path of smoke molecules into framing." },
        { name: "Heavy Suppression Water Extractors", desc: "Rapidly pulling thousands of gallons of firefighting water off floors and subfloor framing." },
        { name: "HEPA Activated-Carbon Air Scrubbers", desc: "Absorbing hazardous VOCs, smoke odors, and toxic combustion byproducts." }
      ],
      scenarios: [
        {
          title: "Kitchen Grease & Appliance Fires",
          desc: "High-temperature protein soot spreading throughout upper ceilings, kitchen cabinetry, and HVAC returns.",
          solution: "Solvent-based degreasing, chemical sponging, and ductwork sealing."
        },
        {
          title: "Firefighter Suppression Water Flooding",
          desc: "Fire hose water accumulating several inches deep across hardwood and subfloor framing.",
          solution: "Immediate water evacuation, moisture tracing, and heavy dehumidification."
        },
        {
          title: "HVAC Smoke Distribution",
          desc: "Air conditioning systems pulling smoke throughout all rooms, depositing fine soot on all horizontal surfaces.",
          solution: "Filter replacement, plenum cleaning, and whole-house hydroxyl air purification."
        },
        {
          title: "Structural Weather Vulnerability",
          desc: "Firefighters breaching windows and roofs to ventilate heat, leaving the home exposed to rain.",
          solution: "Emergency board-up and weather-tight tarping to stop secondary water intrusion."
        }
      ],
      processPhases: [
        { phase: "01", name: "Emergency Suppression Water Removal", detail: "Evacuate standing firefighting water immediately to prevent secondary rot and mold." },
        { phase: "02", name: "Soot & Corrosion Stabilization", detail: "Sponge acidic soot off metals, glass, marble, and appliances to stop permanent chemical etching." },
        { phase: "03", name: "Molecular Odor Neutralization", detail: "Deploy hydroxyl generators and ozone treatments to neutralize smoke scents in timber." },
        { phase: "04", name: "Contractor Rebuild Preparation", detail: "Deliver an organized, dried, deodorized structure ready for reconstruction carpenters." }
      ],
      localCaseStudy: {
        location: "Waco, TX (Downtown Residential Loft)",
        situation: "An electrical fire was extinguished by building sprinklers, soaking 2 floors with water and spreading heavy soot.",
        action: "Extracted 600 gallons of sprinkler water, dry-sponged 3,000 sq ft of brick and drywall, and ran hydroxyl odor scrubbers for 72 hours.",
        result: "Eliminated all smoke odors and prevented water damage from spreading to lower-level retail shops."
      },
      faqs: [
        {
          q: "Why shouldn't I clean soot with household soap and water?",
          a: "Smoke soot contains acidic carbon oils. Applying water-based household detergents smears the soot into drywall pores, creating permanent black stains that require complete sheetrock replacement."
        },
        {
          q: "Do you repair the burned roof and rebuild drywall?",
          a: "No. 24 Hr FloodMasters specializes in emergency stabilization: water extraction, soot cleanup, odor removal, and board-up. Leaving reconstruction to specialized builders avoids conflicts of interest."
        },
        {
          q: "How do you remove stubborn smoke odor that soaked into wood?",
          a: "We deploy industrial hydroxyl and thermal fogging equipment. These units break down smoke odor molecules at the chemical level rather than simply masking them with perfumes."
        },
        {
          q: "What should I do with food in the kitchen after a fire?",
          a: "Any unsealed food or food exposed to heat, smoke gases, or firefighting water should be documented for your insurance claim and safely discarded due to chemical toxicity."
        }
      ]
    },
    "mold-mitigation": {
      tagline: "Microbial Containment, HEPA Scrubbing & Source Control",
      headline: "Microbial containment and moisture control for Central Texas properties.",
      subtext: "Texas heat and humidity create optimal conditions for fungal growth when water leaks go unnoticed. We establish negative-air poly isolation, remove colonized drywall, and eradicate the underlying moisture source.",
      heroBg: "/images/services/mold_tech_clean.webp",
      heroBadge: "Negative Pressure Air Containment",
      introTitle: "Stopping airborne spore cross-contamination.",
      introParagraph1: "Mold spores exist naturally in outdoor air in microscopic concentrations. However, when indoor building materials remain damp for longer than 48 hours in warm Texas climates, spores germinate into active hyphal colonies. As mold feeds on the organic cellulose in drywall paper and framing wood, it releases millions of microscopic spores and mycotoxins.",
      introParagraph2: "Improper mold remediation—such as scrubbing without containment or spraying bleach—disturbs colonies, scattering millions of spores through the HVAC system into clean living areas. 24 Hr FloodMasters prevents cross-contamination by sealing the work area under airtight poly containment, maintaining negative air pressure with HEPA filtration, and cutting out colonized materials under sealed vacuum conditions.",
      visual1: "/images/services/mold_tech_clean.webp",
      visual1Caption: "Zippered poly containment barrier under continuous negative air pressure in residential hallway.",
      visual2: "/images/services/original_mold_service.jpg",
      visual2Caption: "Technician sealing containment perimeter and inspecting structural framing in protective PPE.",
      visual3: "/images/equipment/structural_drying_setup.webp",
      visual3Caption: "Running commercial dehumidification to drop ambient RH below 50% to prevent fungal regrowth.",
      visual4: "/images/process/documentation_clean.webp",
      visual4Caption: "Recording moisture mapping logs to ensure framing is fully dry before containment takedown.",
      equipmentHighlights: [
        { name: "Negative-Air HEPA Machines", desc: "Continuously exhausting filtered air outside so no spores can escape into clean rooms." },
        { name: "Heavy 6-Mil Poly Containment Walls", desc: "Airtight plastic walls with magnetic and zippered access doors isolating the work zone." },
        { name: "EPA-Registered Antimicrobial Foggers", desc: "Penetrating timber framing to kill microscopic fungal roots." },
        { name: "Digital Non-Invasive Moisture Probes", desc: "Locating the exact plumbing or roof leak feeding the fungal colony." }
      ],
      scenarios: [
        {
          title: "Hidden Shower Pan & Tile Wall Leaks",
          desc: "Slow plumbing leaks behind bathroom tiles saturating drywall backing and creating large hidden mold colonies.",
          solution: "Airtight poly barrier containment, controlled tile removal, and frame sanitization."
        },
        {
          title: "Attic & Roof Sheathing Condensation",
          desc: "Poor attic airflow combined with hot humid summer temperatures creating black mold on roof rafters.",
          solution: "HEPA vacuuming, antimicrobial wood treatment, and ventilation recommendations."
        },
        {
          title: "AC Plenum & Air Handler Mold",
          desc: "Condensate pan clogs creating high-humidity zones around indoor AC coils, distributing mold spores through vents.",
          solution: "Plenum decontamination and microbial air scrubbing."
        },
        {
          title: "Post-Flooding Wall Cavity Growth",
          desc: "Unmitigated floodwater remaining inside lower drywall bays following severe storm runoff.",
          solution: "Precision flood cuts, stud HEPA brushing, and structural dehumidification."
        }
      ],
      processPhases: [
        { phase: "01", name: "Containment Chamber Setup", detail: "Seal off doorways, HVAC vents, and perimeters with 6-mil poly and heavy zipper doors." },
        { phase: "02", name: "Negative Pressure Filtration", detail: "Vent HEPA air scrubbers outdoors to pull continuous inward negative pressure." },
        { phase: "03", name: "Controlled Material Remediation", detail: "Cut out colonized drywall and insulation, bagging waste securely inside containment." },
        { phase: "04", name: "Framing Sanitization & Dryout", detail: "Treat studs with EPA biocides and run dehumidifiers until timber moisture is below 12%." }
      ],
      localCaseStudy: {
        location: "Salado, TX (Historic Limestone Home)",
        situation: "A concealed toilet supply leak caused extensive mold behind master bathroom walls and subfloor tongue-and-groove planks.",
        action: "Constructed airtight containment, removed 60 sq ft of sheetrock, treated framing with botanical antimicrobial, and dried the cavity.",
        result: "100% containment maintained with zero spore migration into the rest of the historic home; indoor air quality fully restored."
      },
      faqs: [
        {
          q: "Why shouldn't I spray bleach on mold on drywall?",
          a: "Bleach consists primarily of water. On porous surfaces like drywall and wood, chlorine dissipates on the surface while water soaks deeper, feeding the mold roots and accelerating regrowth within days."
        },
        {
          q: "Do you provide independent air testing and clearance certificates?",
          a: "To eliminate conflicts of interest, ethical mitigation companies do not test their own work. We perform the physical containment, remediation, and drying, and welcome independent licensed Texas third-party assessors for clearance testing."
        },
        {
          q: "How do you guarantee mold will not return after remediation?",
          a: "Mold requires moisture to grow. Our primary mission is locating and thoroughly drying the underlying water source. Once timber is dried below 12% moisture and the leak repaired, mold cannot survive."
        },
        {
          q: "Is it safe to stay in my home during mold mitigation?",
          a: "Yes, in most cases. Because our work zone is sealed under continuous negative air pressure, airborne spores and dust cannot escape into your living quarters."
        }
      ]
    },
    "insurance-and-claims-support": {
      tagline: "Carrier-Ready Psychrometric & Thermal Claims Data",
      headline: "Comprehensive insurance documentation and moisture logs in Central Texas.",
      subtext: "Navigating a property insurance claim requires verified empirical evidence. We track thermal infrared scans, daily moisture percentage logs, and itemized scopes so your adjuster has complete facts.",
      heroBg: "/images/process/documentation_clean.webp",
      heroBadge: "Empirical Carrier Documentation",
      introTitle: "Why documented data accelerates insurance claims.",
      introParagraph1: "Insurance adjusters are bound by strict underwriting standards. When property owners submit vague claims without proof of when water was extracted or how deep moisture traveled, adjusters often delay approvals or question scope. Having calibrated moisture readings and thermal imaging records prevents disputes over what was affected.",
      introParagraph2: "24 Hr FloodMasters uses industry-standard Xactimate estimating guidelines and digital psychrometric logging. We record daily atmospheric conditions (temperature, relative humidity, GPP) and material moisture content (drywall, wood framing, subfloors). We deliver a complete digital claims packet directly to you to keep your carrier conversation organized and transparent.",
      visual1: "/images/process/documentation_clean.webp",
      visual1Caption: "Technician compiling digital moisture logs and psychrometric dry-down charts on site.",
      visual2: "/images/process/original_documentation.jpg",
      visual2Caption: "Recording moisture percentages and documenting water damage perimeters with camera records.",
      visual3: "/images/hero/hero_tech_clean.webp",
      visual3Caption: "Marking moisture boundaries along baseboards to provide visual proof for adjusters.",
      visual4: "/images/equipment/structural_drying_setup.webp",
      visual4Caption: "Documenting industrial equipment deployment hours for transparent mitigation billing.",
      equipmentHighlights: [
        { name: "FLIR Thermal Imaging Cameras", desc: "Providing infrared visual documentation of hidden moisture boundaries behind finished walls." },
        { name: "Digital Pinless & Penetrating Moisture Probes", desc: "Generating exact percentage readings calibrated specifically to wood and drywall densities." },
        { name: "Psychrometric GPP Data Recorders", desc: "Verifying daily dehumidification performance to satisfy insurance carrier protocols." },
        { name: "Itemized Scope Management Software", desc: "Structuring invoices according to universally recognized insurance industry billing codes." }
      ],
      scenarios: [
        {
          title: "Sudden Pipe Rupture vs Gradual Seepage Clarification",
          desc: "Adjusters need clear evidence confirming damage arose from a covered sudden failure rather than long-term neglect.",
          solution: "Photographic and thermal documentation proving fresh moisture intrusion."
        },
        {
          title: "Proof of Subfloor Saturation",
          desc: "Carriers often question whether hardwood or tile subfloors require drying when surface water is gone.",
          solution: "Deep pin probe logs demonstrating high moisture content underneath flooring."
        },
        {
          title: "Equipment Justification Logs",
          desc: "Insurance guidelines require daily evidence showing why each dehumidifier and air mover was required on site.",
          solution: "Timestamped psychrometric dry-down charts showing active drying progress every 24 hours."
        },
        {
          title: "Multi-Room Scope Mapping",
          desc: "Water migrating through partition walls into multiple rooms without visible standing water.",
          solution: "Floorplan diagrams clearly marking the exact wet perimeter across all affected rooms."
        }
      ],
      processPhases: [
        { phase: "01", name: "Initial Intake Photolog", detail: "Capture 30-50 high-resolution photos of standing water and water source before moving items." },
        { phase: "02", name: "Thermal Moisture Diagram", detail: "Draw floorplans mapping exact moisture percentages and thermal cold zones in each room." },
        { phase: "03", name: "Daily Psychrometric Logs", detail: "Record temperature, humidity, and GPP every 24 hours to document active structural dry-down." },
        { phase: "04", name: "Final Claims Packet Delivery", detail: "Deliver a consolidated digital folder with all photos, logs, and itemized scopes for your adjuster." }
      ],
      localCaseStudy: {
        location: "Harker Heights, TX (Stillhouse Hollow Area)",
        situation: "Second-story water softener rupture flooded 3 bedrooms and leaked through living room ceiling.",
        action: "24 Hr FloodMasters documented all readings electronically, generating a 22-page psychrometric report with thermal photos.",
        result: "Insurance carrier approved 100% of the emergency mitigation scope within 48 hours without requesting re-inspection."
      },
      faqs: [
        {
          q: "Does 24 Hr FloodMasters guarantee my insurance claim will be approved?",
          a: "No contractor can legally guarantee claim approval. Coverage depends entirely on your specific policy terms and cause of loss. What we do guarantee is providing accurate, comprehensive empirical documentation to support your claim."
        },
        {
          q: "Do you bill my insurance company directly?",
          a: "We work directly with major insurance carriers, submitting complete documentation packages and invoices directly to adjusters when authorized by the property owner."
        },
        {
          q: "What if an adjuster asks why drying equipment ran for 4 or 5 days?",
          a: "Our daily psychrometric dry-down charts provide indisputable scientific proof: showing daily drops in grains per pound (GPP) and wood moisture content until dry standards were met."
        },
        {
          q: "Can I choose my own mitigation company, or must I use the insurance carrier's preferred vendor?",
          a: "In the State of Texas, property owners have the legal right to hire any qualified restoration contractor of their choice. You are never obligated to use your insurance carrier's preferred vendor list."
        }
      ]
    }
  };

  const currentKnowledge = serviceKnowledge[serviceSlug] || serviceKnowledge["emergency-water-mitigation"];

  const serviceBreadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/#featured-services" },
    { name: service.title, url: `/${service.slug}` }
  ];

  const combinedServiceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      getServiceSchema(service, service.slug),
      getBreadcrumbSchema(serviceBreadcrumbs),
      getFAQSchema(currentKnowledge.faqs)
    ]
  };

  const pageTitle = `${service.title} | 24 Hr FloodMasters`;
  const metaDesc = (service.summary.length >= 140 && service.summary.length <= 160)
    ? service.summary
    : `${service.summary} Available 24/7 in Temple, Waco, Belton & Central Texas. Call (254) 482-1151.`;

  return (
    <div className="service-page-root">
      <SEOHead
        title={pageTitle}
        description={metaDesc}
        canonicalPath={`/${service.slug}`}
        ogType="article"
        ogImage={currentKnowledge.heroBg}
        schema={combinedServiceSchema}
      />

      {/* SERVICE HERO WITH PHOTOGRAPHIC BACKGROUND */}
      <section className="svc-hero">
        <div className="svc-hero-bg-wrap">
          <img
            src={currentKnowledge.heroBg}
            alt={service.title}
            className="svc-hero-bg"
            width="1536"
            height="1024"
            fetchpriority="high"
          />
          <div className="svc-hero-overlay"></div>
        </div>
        <div className="container svc-hero-content">
          <div className="svc-hero-badge-row">
            <span className="status-pill">
              <span className="pulse-dot"></span> {currentKnowledge.heroBadge}
            </span>
            <span className="svc-hub-tag">Dispatch Bases in Temple & Pflugerville</span>
          </div>
          <span className="svc-eyebrow-sub">{currentKnowledge.tagline}</span>
          <h1 className="svc-hero-title">{currentKnowledge.headline}</h1>
          <p className="svc-hero-subtext">{currentKnowledge.subtext}</p>
          <div className="svc-hero-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Emergency Call: (254) 482-1151</span>
            </a>
            <a href="/contact-us" onClick={(e) => handleNav('/contact-us', e)} className="btn-ghost-light">
              Request On-Site Triage
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: Deep Technical & Local Context */}
      <section className="section-light svc-deep-intro">
        <div className="container svc-intro-grid">
          <div className="svc-intro-text">
            <span className="eyebrow">Technical Protocol</span>
            <h2>{currentKnowledge.introTitle}</h2>
            <p className="intro-lead">{currentKnowledge.introParagraph1}</p>
            <p className="intro-body">{currentKnowledge.introParagraph2}</p>
            
            <div className="svc-equipment-box">
              <h3>Commercial Deployment Technology</h3>
              <div className="equip-list">
                {currentKnowledge.equipmentHighlights.map((eq, i) => (
                  <div key={i} className="equip-item">
                    <strong>{eq.name}</strong>
                    <span>{eq.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="svc-intro-visuals">
            <div className="visual-card">
              <img src={currentKnowledge.visual1} alt={currentKnowledge.visual1Caption} className="visual-img" width="1536" height="1024" loading="lazy" />
              <p className="visual-caption">{currentKnowledge.visual1Caption}</p>
            </div>
            <div className="visual-card secondary-visual">
              <img src={currentKnowledge.visual2} alt={currentKnowledge.visual2Caption} className="visual-img" width="1376" height="768" loading="lazy" />
              <p className="visual-caption">{currentKnowledge.visual2Caption}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Common Local Scenarios Grid */}
      <section className="section-dark svc-scenarios-section">
        <div className="container">
          <div className="svc-scenarios-header">
            <span className="eyebrow">Central Texas Conditions</span>
            <h2>Common Scenarios Resolved Across Bell & McLennan Counties</h2>
            <p>From slab shifts along the I-35 corridor to intense summer heat indexes, we understand regional loss dynamics.</p>
          </div>

          <div className="svc-scenarios-grid">
            {currentKnowledge.scenarios.map((sc, idx) => (
              <div key={idx} className="svc-scenario-card">
                <span className="scenario-num">SCENARIO 0{idx + 1}</span>
                <h3>{sc.title}</h3>
                <p className="sc-desc">{sc.desc}</p>
                <div className="sc-solution">
                  <strong>Mitigation Solution:</strong> {sc.solution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Dual Visual Proof Split */}
      <section className="section-light svc-dual-proof">
        <div className="container dual-proof-grid">
          <div className="dual-img-col">
            <img src={currentKnowledge.visual3} alt="Field loss inspection" className="dual-img" width="1376" height="768" loading="lazy" />
            <span className="dual-caption">{currentKnowledge.visual3Caption}</span>
          </div>
          <div className="dual-img-col">
            <img src={currentKnowledge.visual4} alt="Active drying progress" className="dual-img" width="1536" height="1024" loading="lazy" />
            <span className="dual-caption">{currentKnowledge.visual4Caption}</span>
          </div>
        </div>
      </section>

      {/* SECTION 5: Step-By-Step Mitigation Phases */}
      <section className="section-dark svc-phases-section">
        <div className="container">
          <div className="phases-header text-center">
            <span className="eyebrow">Disciplined Execution</span>
            <h2>The 4-Phase Mitigation Progression</h2>
            <p>Every assignment follows a structured operational workflow to ensure verifiable results.</p>
          </div>

          <div className="phases-grid">
            {currentKnowledge.processPhases.map((phase, idx) => (
              <div key={idx} className="phase-card">
                <div className="phase-top">
                  <span className="phase-badge">Phase {phase.phase}</span>
                </div>
                <h3>{phase.name}</h3>
                <p>{phase.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Local Case Study Spotlight */}
      <section className="section-light svc-case-study">
        <div className="container">
          <div className="case-study-box">
            <span className="eyebrow">Regional Field Case Study</span>
            <h3>{currentKnowledge.localCaseStudy.location}</h3>
            <div className="case-study-columns">
              <div className="case-col">
                <strong>The Situation:</strong>
                <p>{currentKnowledge.localCaseStudy.situation}</p>
              </div>
              <div className="case-col">
                <strong>Mitigation Response:</strong>
                <p>{currentKnowledge.localCaseStudy.action}</p>
              </div>
              <div className="case-col highlight">
                <strong>Verifiable Outcome:</strong>
                <p>{currentKnowledge.localCaseStudy.result}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Rich Visual Local Dispatch Hub */}
      <section className="section-dark svc-local-strip">
        <div className="container">
          <div className="strip-content text-center" style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Local Regional Footprint</span>
            <h2>Immediate Emergency {service.shortTitle} Across Central Texas</h2>
            <p>
              When water breaches walls or slabs, distance equals damage. Our dual equipment facilities in Temple and Pflugerville maintain dedicated rapid-response corridors along I-35, US-190, and SH-130.
            </p>
          </div>

          <div className="svc-regional-tri-grid">
            <div className="regional-tri-card">
              <div className="tri-img-wrap">
                <img src="/images/services/response_night_clean.webp" alt="Bell County emergency dispatch" className="tri-img" width="1536" height="1024" loading="lazy" />
                <span className="tri-badge">Bell County Hub</span>
              </div>
              <div className="tri-info">
                <h4>Temple, Belton, Salado & Killeen</h4>
                <p>Immediate 24/7 technician roll-out for AC line backups, foundation slab leaks, and sudden water heater splits.</p>
                <div className="tri-meta">Typical On-Site Arrival: Under 45 Mins</div>
              </div>
            </div>

            <div className="regional-tri-card">
              <div className="tri-img-wrap">
                <img src="/images/services/commercial_restoration.webp" alt="McLennan County commercial mitigation" className="tri-img" width="1376" height="768" loading="lazy" />
                <span className="tri-badge">McLennan County Hub</span>
              </div>
              <div className="tri-info">
                <h4>Waco, Hewitt, Woodway & Robinson</h4>
                <p>Commercial extraction trailers and industrial dehumidification fleets stationed for institutional and residential dryouts.</p>
                <div className="tri-meta">Typical On-Site Arrival: 35-50 Mins</div>
              </div>
            </div>

            <div className="regional-tri-card">
              <div className="tri-img-wrap">
                <img src="/images/equipment/structural_drying_setup.webp" alt="Williamson County large loss drying" className="tri-img" width="1376" height="768" loading="lazy" />
                <span className="tri-badge">Williamson County Depot</span>
              </div>
              <div className="tri-info">
                <h4>Georgetown, Round Rock & Pflugerville</h4>
                <p>High-volume desiccant units and specialized subfloor drying mat fleets deployed from our southern operational depot.</p>
                <div className="tri-meta">Typical On-Site Arrival: 30-45 Mins</div>
              </div>
            </div>
          </div>

          <div className="strip-buttons text-center" style={{ marginTop: '2.5rem' }}>
            <a href="/service-areas" onClick={(e) => handleNav('/service-areas', e)} className="btn-ghost-light">
              Explore All 15+ Central Texas Cities Served →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ Accordion */}
      <section className="section-light svc-faq-section">
        <div className="container-narrow">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Empirical Answers</span>
            <h2>Frequently Asked Questions About {service.title}</h2>
          </div>
          <div className="faq-accordion light-accordion">
            {currentKnowledge.faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item-light ${openFaq === index ? 'active' : ''}`}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <button className="faq-question-light" aria-expanded={openFaq === index}>
                  <span>{faq.q}</span>
                  <span className="faq-icon-light">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="faq-answer-light">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Immediate Emergency Conversion */}
      <section className="hp-final-cta">
        <div className="container final-cta-container">
          <span className="eyebrow">Direct 24/7 Dispatch</span>
          <h2 className="final-title">Speak with a Central Texas restoration specialist now.</h2>
          <p className="final-sub">
            Standing water compromises structural framing every minute it sits. Contact Rene Molina and the 24 Hr FloodMasters response line immediately.
          </p>
          <div className="final-actions">
            <a href={`tel:${companyData.phoneRaw}`} className="btn-emergency btn-large">
              Call (254) 482-1151
            </a>
            <a href="/contact-us" onClick={(e) => handleNav('/contact-us', e)} className="btn-ghost-light">
              Submit Property Address
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
