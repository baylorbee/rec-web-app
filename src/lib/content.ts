/**
 * Single source of truth for editable site copy.
 * Facts marked with source: "pptx" are drawn from BAS_Business_Overview_v3.pptx.
 * Placeholders are explicitly labeled.
 */

export const site = {
  name: "Refine Energy Consulting",
  shortName: "REC",
  tagline: "Building energy optimization for small commercial properties.",
} as const;

export const nav = {
  links: [
    { label: "Services", href: "/#services" },
    { label: "How it Works", href: "/#how-it-works" },
    { label: "Savings Calculator", href: "/#roi-calculator" },
    { label: "About us", href: "/about" },
  ],
  cta: { label: "Get Free Assessment", href: "/#contact" },
} as const;

export const hero = {
  headline: "Reclaim Your Energy.",
  supporting:
    "Most commercial buildings waste 30% of their energy. We fix the controls, optimize the schedules, and monitor the systems—so you keep the savings, month after month.",
  primaryCta: { label: "Get a Free Energy Assessment", href: "/#contact" },
  secondaryCta: { label: "See How It Works", href: "/#how-it-works" },
  badges: [
    { label: "Up to 30% savings", note: "DOE commercial waste estimate" },
    { label: "24/7 monitoring", note: "pptx" },
    { label: "No equipment swap", note: "pptx" },
    { label: "1-day install", note: "pptx — smart thermostat path" },
  ],
} as const;

/** Stats backed by PPTX / DOE citation — keep conservative wording */
export const stats = [
  {
    value: "30%",
    label: "of commercial energy is typically wasted",
    source: "U.S. Department of Energy (via PPTX)",
  },
  {
    value: "$95/mo",
    label: "ongoing monitoring & optimization",
    source: "pptx pricing",
  },
  {
    value: "< 1 day",
    label: "typical smart-controls install",
    source: "pptx",
  },
  {
    value: "1.3 yrs",
    label: "illustrative net payback (conservative)",
    source: "pptx — Rosemont Plaza analysis",
  },
] as const;

export const industries = {
  label: "Built for SMB commercial property",
  items: [
    "Retail",
    "Restaurants",
    "Medical Offices",
    "Churches",
    "Warehouses",
    "Professional Offices",
  ],
} as const;

export const problem = {
  eyebrow: "The Problem",
  headline: "Small buildings are flying blind on energy",
  intro:
    "Most owners never hear the term “building automation.” Systems keep running on schedules set a decade ago — and the waste shows up on the bill.",
  cards: [
    {
      title: "Outdated schedules",
      body: "Many buildings still run the exact schedule someone set 10+ years ago — empty suites, full-blast HVAC. Heating and cooling can fight each other with no one watching.",
      icon: "schedule" as const,
    },
    {
      title: "Unnecessary runtime",
      body: "About 40–50% of a commercial energy bill is heating and cooling alone. Without occupancy sensing or setback logic, equipment runs when nobody is there.",
      icon: "runtime" as const,
    },
    {
      title: "Hidden HVAC faults",
      body: "Most small property owners have no alerts and no data. Problems stay invisible until the bill spikes — or a compressor fails into an emergency call.",
      icon: "fault" as const,
    },
  ],
} as const;

export const services = {
  eyebrow: "Services",
  headline: "The right controls for your building",
  intro:
    "We audit first — then recommend the path that fits your equipment. Commercial smart thermostats for independent rooftop units. Full building automation optimization for shared mechanical systems.",
  cards: [
    {
      id: "smart-controls",
      title: "Commercial Smart Controls",
      subtitle: "Buildings with independent rooftop units",
      body: "Commercial smart thermostats with scheduling, setback logic, remote access, and fault alerts. Ideal for strip malls and small offices with package RTUs per suite — where a full BAS is overkill.",
      highlights: [
        "Illustrative project range ~$1,780 for a 3-zone retrofit",
        "Occupancy-aware setback & business-hours schedules",
        "Remote access without calling a contractor",
      ],
      widget: "thermostat" as const,
    },
    {
      id: "bas-optimization",
      title: "Building Automation Optimization",
      subtitle: "Buildings with shared mechanical systems",
      body: "Full BAS programming and sequence optimization for multi-zone systems — supply-air reset, demand-controlled ventilation, optimal start, and coordinated scheduling across VAV zones.",
      highlights: [
        "For central AHUs / shared zones (not single-suite RTUs)",
        "Controls logic, commissioning, and ongoing tuning",
        "Licensed C-7 contractor handles physical install",
      ],
      widget: "alerts" as const,
    },
  ],
} as const;

export const howItWorks = {
  eyebrow: "How It Works",
  headline: "Assess → Optimize → Monitor",
  intro: "A clear path from first call to ongoing savings — no equipment rip-and-replace.",
  steps: [
    {
      number: "01",
      title: "Assess",
      body: "We review utility bills, lease structure, and on-site HVAC type. You understand the savings opportunity — and which controls path fits — before any big project is proposed.",
    },
    {
      number: "02",
      title: "Optimize",
      body: "We install and program the right solution: smart controls for RTU buildings, or BAS optimization for shared mechanical systems. A licensed C-7 contractor handles wiring; we own the controls logic.",
    },
    {
      number: "03",
      title: "Monitor",
      body: "Ongoing remote monitoring, fault detection, schedule updates, and a plain-English monthly report — typically $95/mo — so savings compound instead of drifting away.",
    },
  ],
} as const;

/** Clearly illustrative — PPTX analysis, not a completed client engagement */
export const caseStudy = {
  eyebrow: "Illustrative Analysis",
  headline: "Rosemont Plaza building analysis",
  badge: "Illustrative — not a completed client project",
  disclaimer:
    "Figures below are from an internal analysis of a publicly identifiable Sacramento property used to validate pricing and payback assumptions. REC has not completed a paid engagement at this address.",
  building: {
    name: "Rosemont Plaza",
    address: "9113 Kiefer Blvd, Sacramento, CA",
    profile: "12,876 sq ft — multi-tenant inline retail, built 1978",
    lease: "Full-service lease structure (landlord pays utilities) — verified via public listing research",
    hvacPath:
      "Independent package RTUs per suite → commercial smart thermostat path (not full BAS)",
  },
  findings: [
    {
      label: "Conservative",
      savings: "15% savings floor",
      annual: "$1,192 / yr",
      payback: "Net payback ~1.3 yrs after SMUD rebate",
    },
    {
      label: "Realistic",
      savings: "23% — scheduling + TOU + occupancy",
      annual: "$1,829 / yr",
      payback: "Net payback ~10 months after SMUD rebate",
    },
  ],
  note: "SMUD rebate assumptions (~$75/unit) reduce net project cost in this illustrative model. BAS on the same RTU building was evaluated and not recommended — longer payback for marginal extra savings.",
} as const;

export const benefits = {
  eyebrow: "Benefits",
  headline: "Everything your building gains",
  items: [
    {
      title: "Lower utility bills",
      body: "Target HVAC energy reductions in the 15–30% range depending on baseline controls — Sacramento peak-season bills make every point count.",
    },
    {
      title: "Longer equipment life",
      body: "Optimized runtimes and fault detection reduce unnecessary wear on compressors and air handlers.",
    },
    {
      title: "Fewer emergency repairs",
      body: "Catch high-temp alerts and stuck dampers early — before they become costly emergency service calls.",
    },
    {
      title: "Remote control",
      body: "Adjust units and override schedules from any device — without calling a contractor for every change.",
    },
    {
      title: "Automated scheduling",
      body: "Occupancy-based setback runs automatically. Nobody has to remember to adjust the thermostat.",
    },
    {
      title: "Better tenant comfort",
      body: "More consistent temperatures across suites — fewer complaints, better retention.",
    },
    {
      title: "SMUD rebates",
      body: "SMUD Custom Retrofit can pay back up to 50% of qualifying project costs. We handle the paperwork.",
    },
    {
      title: "Section 179D",
      body: "Federal deduction of up to $5.65/sq ft for qualifying HVAC improvements — documentation from the audit helps your accountant.",
    },
  ],
} as const;

export const incentives = {
  eyebrow: "Financial Incentives",
  headline: "Three reasons the numbers work even better",
  intro:
    "Compliance pressure, utility rebates, and federal tax incentives stack with operational savings — differentiators most HVAC repair vendors never mention.",
  cards: [
    {
      title: "AB 802 compliance",
      tag: "Up to $2,000/day fines",
      body: "California requires buildings over 50,000 sq ft to benchmark energy annually. Non-compliance can mean fines up to $2,000/day. Many landlords have never heard of it.",
    },
    {
      title: "SMUD Custom Retrofit",
      tag: "Up to 50% back",
      body: "SMUD pays back up to 50% of qualifying project costs (program caps apply). We prepare and submit the paperwork so net project cost drops before the first month of savings.",
    },
    {
      title: "Section 179D deduction",
      tag: "Up to $5.65/sq ft",
      body: "Federal deduction of up to $5.65/sq ft for qualifying HVAC improvements. On a ~12,000 sq ft building, that can mean substantial documented deductions — show it to your accountant.",
    },
  ],
} as const;

export const founder = {
  eyebrow: "Our Story",
  headline: "Built by an engineer who spent years inside these buildings",
  intro:
    "Refine Energy Consulting was founded on a simple observation: small commercial buildings waste enormous amounts of energy, and nobody with the right technical skills is focused on fixing it.",
  name: "Matthew Allen Reed",
  title: "Founder & Mechanical Engineer",
  photo: {
    src: "/matt.png",
    alt: "Matthew Reed, E.I.T., Founder of Refine Energy Consulting",
  },
  bio: [
    "Matthew Reed, E.I.T., is a mechanical engineer focused on controls. He studied mechanical engineering at San Francisco State University and builds on hands-on experience with AutoCAD, MATLAB, and building automation platforms common in the Sacramento market — including Distech and DeltaV systems.",
    "As Controls System Administrator at Stanford and through engineering work with CON-QUEST Contractors, he spent years inside real commercial facilities — programming, commissioning, and keeping HVAC controls running — rather than selling from a brochure.",
    "The gap he saw: buildings roughly 5,000–80,000 sq ft (strip malls, medical offices, small professional buildings) are too small for giants like Johnson Controls or Siemens, yet too technical for local HVAC contractors who mainly fix broken equipment. Energy waste fills that middle.",
    "Before taking clients, he validated pricing, savings estimates, and verification methods against real Sacramento-area properties using public county and listing data — including the illustrative Rosemont Plaza analysis on this site.",
  ],
  credentials: [
    "E.I.T. — HVAC & Refrigeration",
    "Distech + DeltaV BAS",
    "Stanford Controls",
    "SFSU Mechanical Engineering",
  ],
} as const;

export const team = {
  headline: "Meet the team",
  members: [
    {
      name: "Vidit Katyal",
      role: "Sales",
      photo: {
        src: "/vidit.jpeg",
        alt: "Vidit Katyal, Sales at Refine Energy Consulting",
      },
    },
    {
      name: "Sarvesh K.",
      role: "Engineering",
      photo: {
        src: "/sarvesh.jpeg",
        alt: "Sarvesh K., Engineering at Refine Energy Consulting",
      },
    },
  ],
} as const;

/**
 * Illustrative ROI calculator — formulas calibrated to Rosemont Plaza PPTX analysis.
 * Default inputs ($3,000 bill, 45% HVAC) → ~9% bill reduction / ~$3,240 annual,
 * i.e. ~20% of HVAC spend (between PPTX conservative 15% and realistic 23%).
 */
export const roiCalculator = {
  eyebrow: "ROI Calculator",
  headline: "See Your Potential Savings",
  disclaimer:
    "Based on Rosemont Plaza illustrative analysis (conservative–realistic blend). Actual results depend on building type, lease structure, and current controls.",
  cta: { label: "Get a Free Assessment", href: "/#contact" },
  defaults: {
    monthlyBill: 3000,
    units: 6,
    hvacPct: 45,
  },
  ranges: {
    monthlyBill: { min: 500, max: 20000, step: 100 },
    units: { min: 1, max: 40, step: 1 },
  },
  hvacPctOptions: [30, 40, 45, 50, 60] as const,
  /** Fraction of HVAC electric spend saved — between PPTX 15% floor and 23% realistic */
  savingsRateOfHvac: 0.2,
  /**
   * Illustrative net project cost per RTU after ~$75 SMUD rebate/unit.
   * Derived from PPTX ~$1,780 / 3 units ≈ $593 gross → ~$518 net.
   */
  netProjectCostPerUnit: Math.round(1780 / 3 - 75),
  labels: {
    monthlyBill: "Monthly Electric Bill",
    units: "Number of Rooftop Units",
    hvacPct: "HVAC % of Electric Bill",
    annualSavings: "Estimated Annual Savings",
    monthlySavings: "Monthly savings",
    billReduction: "Bill reduction",
    payback: "Estimated payback",
  },
} as const;

export const faq = {
  eyebrow: "FAQ",
  headline: "Common questions",
  items: [
    {
      q: "Do I need to replace my HVAC equipment?",
      a: "Usually no. REC focuses on controls, schedules, and monitoring — fixing how existing equipment runs rather than ripping out rooftop units or boilers.",
    },
    {
      q: "Smart thermostats or full BAS — how do you decide?",
      a: "The audit decides. Independent package RTUs per suite typically favor commercial smart controls. Shared AHUs and multi-zone VAV systems need coordinated BAS optimization.",
    },
    {
      q: "What does the monthly fee cover?",
      a: "Remote monitoring, fault detection, schedule updates, and a plain-English monthly report — typically $95/mo in the current pricing model (subject to building scope).",
    },
    {
      q: "Who does the physical installation?",
      a: "A licensed, insured C-7 contractor handles wiring and physical install. REC owns programming, commissioning, and ongoing optimization.",
    },
  ],
} as const;

export const contact = {
  eyebrow: "Contact",
  headline: "Request a free energy assessment",
  intro:
    "Tell us about your building. We’ll review the basics and follow up with next steps — no obligation.",
  propertyTypes: [
    "Retail / strip mall",
    "Office",
    "Medical",
    "Restaurant",
    "Warehouse / industrial",
    "Religious / community",
    "Mixed-use",
    "Other",
  ],
  sqftOptions: [
    "Under 5,000",
    "5,000 – 15,000",
    "15,000 – 50,000",
    "50,000 – 80,000",
    "Over 80,000",
    "Not sure",
  ],
} as const;

export const bottomCta = {
  headline: "Stop paying for wasted energy.",
  supporting:
    "Find out how much your Sacramento-area building could save — free assessment, no obligation.",
  cta: { label: "Get Your Free Assessment", href: "/#contact" },
  notes: ["No equipment replacement", "Typical one-day install", "Cancel monitoring anytime"],
} as const;

