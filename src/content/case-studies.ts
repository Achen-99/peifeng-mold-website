export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  moldType: string;
  steel: string;
  cavitation: string;
  leadTime: string;
  result: string;
  content: string; // HTML
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "automotive-sensor-housing": {
    slug: "automotive-sensor-housing",
    title: "Multi-Cavity Injection Mold for Automotive Sensor Housing",
    client: "German Tier-2 Automotive Supplier",
    industry: "Automotive",
    moldType: "Injection Mold — 4-cavity hot runner",
    steel: "H13 (46-50 HRC)",
    cavitation: "4 cavities, valve-gated hot runner",
    leadTime: "7 weeks from design approval to T0 samples",
    result: "40% cost savings vs. German mold maker. Cycle time reduced 22% vs. original tooling.",
    content: `<h2>Challenge</h2>
<p>A German Tier-2 automotive supplier approached us to build a replacement mold for an ABS sensor housing used in a European vehicle platform. Their existing supplier — a German mold maker — quoted €48,000 for a new 2-cavity cold-runner mold with a 12-week lead time. The customer needed to reduce cost while improving cycle time for an upcoming production ramp.</p>

<h2>What We Did</h2>
<ul>
<li><strong>DFM optimization:</strong> Our engineers identified that the original 2-cavity design could be upgraded to a 4-cavity valve-gated hot runner without changing the molding machine. This doubled output per cycle with no additional equipment investment.</li>
<li><strong>Steel selection:</strong> The sensor housing mounts in the engine bay and requires continuous operating temperature resistance. We specified H13 hot-work tool steel to handle the glass-filled PA66 material, which would have worn standard P20 or 718H within 20,000 shots.</li>
<li><strong>Cooling optimization:</strong> Conformal cooling channels — designed in our DFM phase and machined via the factory partner's 5-axis CNC — reduced cycle time from 28 seconds (original mold) to 22 seconds. At 4 cavities × 500,000 shots per year, that 6-second reduction saves over 3,300 production hours annually.</li>
<li><strong>Quality control:</strong> We inspected at four stages: incoming H13 spectrometer verification, in-process checks at roughing and finishing milestones, T0 sample CMM with full dimensional report, and final pre-shipment inspection including cooling circuit pressure test.</li>
</ul>

<h2>Results</h2>
<table>
<tr><th>Metric</th><th>Original (German)</th><th>Peifeng Precision</th></tr>
<tr><td>Tooling cost</td><td>€48,000</td><td>€28,500 (-40%)</td></tr>
<tr><td>Cavities</td><td>2</td><td>4 (100% more output)</td></tr>
<tr><td>Cycle time</td><td>28s</td><td>22s (-22%)</td></tr>
<tr><td>Lead time</td><td>12 weeks</td><td>7 weeks</td></tr>
<tr><td>Mold life target</td><td>300K shots</td><td>500K+ shots (H13)</td></tr>
</table>

<h2>Customer Feedback</h2>
<blockquote><p>"Peifeng's DFM report found cooling issues in our original mold design that our German supplier never flagged. The 4-cavity upgrade they proposed paid for itself in three months of production. We now run all new mold projects through their DFM process before committing."</p><footer>— Engineering Director, German Tier-2 Automotive Supplier</footer></blockquote>`,
  },

  "medical-device-enclosure": {
    slug: "medical-device-enclosure",
    title: "S136 Medical-Grade Mold for Portable Diagnostic Device",
    client: "UK MedTech Startup",
    industry: "Medical Devices",
    moldType: "Injection Mold — single cavity with texture",
    steel: "S136 (48-52 HRC) Stainless",
    cavitation: "Single cavity, cold runner",
    leadTime: "6 weeks from CAD to T0",
    result: "ISO 13485 compliant documentation. First-pass FDA approval. Saved 35% vs. UK mold maker.",
    content: `<h2>Challenge</h2>
<p>A UK medical device startup developing a portable blood analyzer needed an injection mold for the device enclosure. The part required S136 stainless mold steel for ISO 13485 compliance, a medical-grade surface texture, and full process documentation for their FDA 510(k) submission. UK mold makers quoted £22,000-28,000 with 10-12 week lead times, stretching the startup's timeline and budget.</p>

<h2>What We Did</h2>
<ul>
<li><strong>Material compatibility:</strong> The enclosure is molded from PC/ABS with a biocompatible additive package. S136 was the correct steel — its corrosion resistance prevents mold rust even with humid manufacturing environments, and the 48-52 HRC hardness supports the 200K-shot production target.</li>
<li><strong>DFM for medical:</strong> Our DFM review identified three issues: insufficient draft angle on the snap-fit features (would have caused ejection marks), a wall thickness transition that risked sink marks on the visible surface, and gate location that would have left a visible witness line on the mating face. All corrected before steel was cut.</li>
<li><strong>ISO 13485 documentation package:</strong> We provided the full traceability package required for FDA submission: incoming steel spectrometer report, in-process inspection records at each machining stage, T0 sample CMM dimensional report, material certificates for all mold components, and a comprehensive mold validation report.</li>
<li><strong>Surface finish:</strong> The enclosure required a specific medical-grade matte texture (MT-11020 equivalent) that hides fingerprints and provides a professional feel. Our factory partner matched the texture from a reference sample the customer provided.</li>
</ul>

<h2>Results</h2>
<table>
<tr><th>Metric</th><th>UK Quote</th><th>Peifeng Precision</th></tr>
<tr><td>Mold cost</td><td>£22,000-28,000</td><td>£14,800 (-35-47%)</td></tr>
<tr><td>Lead time</td><td>10-12 weeks</td><td>6 weeks</td></tr>
<tr><td>FDA documentation</td><td>Additional £3,000</td><td>Included at no extra cost</td></tr>
<tr><td>Surface texture match</td><td>2 iterations</td><td>First attempt accepted</td></tr>
</table>

<h2>Customer Feedback</h2>
<blockquote><p>"The documentation package Peifeng provided was exactly what our FDA reviewer needed. No follow-up questions on manufacturing. The mold has been running for 18 months with zero quality issues. As a startup, saving 35% on tooling meant we could allocate budget to clinical trials."</p><footer>— CTO, UK MedTech Startup</footer></blockquote>`,
  },

  "aluminum-die-cast-housing": {
    slug: "aluminum-die-cast-housing",
    title: "High-Pressure Die-Cast Mold for Industrial Camera Housing",
    client: "German Machine Vision Company",
    industry: "Industrial Automation",
    moldType: "Die-Casting Mold — single cavity HPDC",
    steel: "H13 (46-50 HRC) with nitriding",
    cavitation: "Single cavity, 800-ton HPDC machine",
    leadTime: "8 weeks from design to T0",
    result: "50% cost reduction. Porosity below 0.5%. Flatness within 0.05mm across 300mm span.",
    content: `<h2>Challenge</h2>
<p>A German machine vision company needed a high-pressure die-casting mold for an IP67-rated industrial camera housing. The part — measuring 280 × 180 × 80 mm in aluminum A380 — required near-zero porosity in the lens mount area, flatness within 0.05mm across the 300mm diagonal, and a durable mold capable of 150,000+ shots. European HPDC mold makers quoted €65,000-80,000 with 14-week lead times.</p>

<h2>What We Did</h2>
<ul>
<li><strong>Gating and flow analysis:</strong> Our factory partner ran mold flow simulation to optimize gate location and size, ensuring complete cavity fill without turbulence that causes porosity. The lens mount area — the most critical surface — was positioned for laminar flow with a dedicated overflow well to trap gas.</li>
<li><strong>Cooling design:</strong> Conformal cooling lines in the core and cavity, fed by a high-flow temperature control unit, maintained uniform die temperature within ±5°C across the entire cavity. This was essential for the 0.05mm flatness requirement across the 300mm span.</li>
<li><strong>H13 with nitriding:</strong> H13 hot-work steel with a gas nitriding surface treatment (0.15mm case depth, 900-1,000 HV surface hardness) provides resistance to the thermal fatigue and aluminum soldering that destroy untreated H13 in HPDC service. This is standard on our die-casting molds for aluminum.</li>
<li><strong>QC and validation:</strong> T0 samples were measured on CMM with a full dimensional report. X-ray inspection confirmed porosity below 0.5% in all critical areas. The lens mount surface showed less than 0.03mm deviation from nominal — well within the 0.05mm spec.</li>
</ul>

<h2>Results</h2>
<table>
<tr><th>Metric</th><th>European Quote</th><th>Peifeng Precision</th></tr>
<tr><td>Mold cost</td><td>€65,000-80,000</td><td>€35,000 (-46-56%)</td></tr>
<tr><td>Lead time</td><td>14 weeks</td><td>8 weeks</td></tr>
<tr><td>Porosity (lens area)</td><td>N/A</td><td>&lt;0.5% verified by X-ray</td></tr>
<tr><td>Flatness</td><td>N/A</td><td>0.03mm (spec: 0.05mm)</td></tr>
<tr><td>Mold life target</td><td>100K shots</td><td>150K+ shots (nitrided H13)</td></tr>
</table>

<h2>Customer Feedback</h2>
<blockquote><p>"The mold flow analysis identified a gate position that our own team had not considered. The porosity results in the lens mount exceeded our quality requirements. We have since ordered three additional molds from Peifeng for different housing variants."</p><footer>— Head of Mechanical Engineering, German Machine Vision Company</footer></blockquote>`,
  },
};

export function getCaseStudy(slug: string): CaseStudy | null {
  return CASE_STUDIES[slug] ?? null;
}

export function getAllCaseStudies(): CaseStudy[] {
  return Object.values(CASE_STUDIES);
}
