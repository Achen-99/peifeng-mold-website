// Blog content — add new posts here. Each post gets its own page at /blog/[slug]

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  content: string; // HTML
}

export const BLOG_POSTS: Record<string, BlogPost> = {
  "import-injection-molds-from-china": {
    slug: "import-injection-molds-from-china",
    title: "How to Import Injection Molds from China: A Complete Guide (2026)",
    description:
      "Step-by-step guide to sourcing injection molds from China. From finding the right supplier and navigating DFM reviews to QC inspection and international shipping.",
    category: "Sourcing",
    date: "2026-06-12",
    readTime: "12 min read",
    content: `<p>Sourcing injection molds from China can save 30-60% compared to domestic mold makers in North America or Europe. But the process has real risks if you do not know what to look for. This guide covers everything from supplier selection to final delivery, written from the perspective of a mold engineering team based in Shenzhen.</p>

<h2>1. Understand What Kind of Supplier You Are Dealing With</h2>
<p>Not all "mold manufacturers" in China are the same. They fall into three categories:</p>
<ul>
<li><strong>Direct factory</strong> — Owns the machines. Lowest price, but you deal with language barriers and no independent QC. If the factory makes a mistake, there is no one to catch it.</li>
<li><strong>Trading company</strong> — Sources from multiple factories. Adds margin without adding engineering value. Quality is inconsistent because they do not inspect.</li>
<li><strong>Engineering management company</strong> (like Peifeng Precision) — In-house engineers handle DFM, mold design review, and QC at every stage. Manufacturing is done by audited factory partners selected for your specific mold type. You get competitive pricing plus independent quality control.</li>
</ul>

<h2>2. Prepare Your Design Files Properly</h2>
<p>The most common reason for mold delays is incomplete or ambiguous design data. Send these:</p>
<ul>
<li><strong>3D CAD file</strong> — STEP (.step, .stp) is the industry standard. IGES and Parasolid (.x_t) also accepted.</li>
<li><strong>2D drawing with tolerances</strong> — Critical dimensions must be marked with tolerances. The factory uses this for CMM inspection.</li>
<li><strong>Material specification</strong> — Exactly what plastic or alloy, including grade and filler percentage. Glass-filled materials require harder steel.</li>
<li><strong>Surface finish requirement</strong> — SPI (US), VDI (Europe), or sample comparison standard. This affects steel choice and polishing time.</li>
<li><strong>Target volume and mold life</strong> — 10,000 shots per year needs different tooling than 500,000.</li>
</ul>

<h2>3. The DFM Review Is Your Best Friend</h2>
<p>Always insist on a free DFM (Design for Manufacturability) review before steel is cut. A good DFM report will flag:</p>
<ul>
<li>Undercuts and draft angle issues</li>
<li>Wall thickness problems causing sink marks or warpage</li>
<li>Gate location optimization for fill balance</li>
<li>Ejector pin placement to avoid part damage</li>
<li>Cooling channel layout for cycle time optimization</li>
</ul>
<p>At Peifeng, we provide a free DFM review with every quote. It typically catches 3-7 issues per project that would have caused rework or scrap.</p>

<h2>4. Know Your Mold Base Standard</h2>
<p>Your mold base should match your market. If your molding facility is in Germany, specify HASCO. In the US, DME. In Asia, LKM or MISUMI. This ensures spare parts and maintenance compatibility. Your China mold maker must use the correct standard — confirm it in the purchase order.</p>

<h2>5. Quality Control: Four Inspection Gates</h2>
<p>Quality should be checked at four stages, not just at the end:</p>
<ol>
<li><strong>Incoming steel inspection</strong> — Spectrometer check and hardness verification to confirm the correct grade was purchased.</li>
<li><strong>In-process inspection</strong> — Checks at each machining milestone: roughing, finishing, EDM, polishing.</li>
<li><strong>Mold trial (T0 sample)</strong> — Sample parts measured on CMM with full dimensional report. This is when you approve the mold.</li>
<li><strong>Final pre-shipment inspection</strong> — Comprehensive checklist: cooling circuit pressure test, ejector function, surface finish, documentation package.</li>
</ol>

<h2>6. Payment Terms That Protect You</h2>
<p>Standard terms: 50% deposit to start, 50% before shipping — after you have reviewed and approved photos, video, sample parts, and the full CMM report. Never pay 100% upfront. A reputable mold maker will offer terms that protect both sides.</p>

<h2>7. Shipping and Import</h2>
<p>Your mold should arrive ready to run. The supplier should handle: rust preventive treatment, vacuum sealing of critical surfaces, reinforced export-grade plywood crating, export documentation, customs clearance, and freight (sea or air). Door-to-door delivery should be available. You should receive tracking the day it ships.</p>

<h2>8. Red Flags to Watch For</h2>
<ul>
<li>No DFM review offered, or DFM done by salesperson instead of an engineer</li>
<li>Unusually fast lead time quote (quality molds take 4-8 weeks)</li>
<li>No in-process photos or updates during manufacturing</li>
<li>Unwillingness to sign an NDA before receiving design files</li>
<li>No CMM report with sample parts</li>
<li>Cannot name their mold base standard</li>
</ul>

<h2>Take the Next Step</h2>
<p>Send your CAD file or part drawing through our <a href="/contact">RFQ form</a>. Our engineers provide a free DFM review and detailed quote within 24 hours. No obligation, and we sign an NDA before receiving any design files.</p>`,
  },

  "injection-mold-cost-breakdown": {
    slug: "injection-mold-cost-breakdown",
    title: "Injection Mold Cost Breakdown: What You Actually Pay For",
    description:
      "Understand the real factors driving injection mold cost — steel, cavitation, complexity, surface finish — with example price ranges and budgeting guidance.",
    category: "Engineering",
    date: "2026-06-10",
    readTime: "8 min read",
    content: `<p>Injection mold cost ranges from $2,000 for a simple single-cavity mold to over $100,000 for a complex multi-cavity hot-runner system. Understanding what drives these numbers helps you budget accurately and avoid unnecessary costs. Here is exactly what you are paying for.</p>

<h2>The Six Cost Drivers</h2>

<h3>1. Steel Grade (15-25% of total cost)</h3>
<p>Steel is the single largest material cost. The grade depends on your production volume and material:</p>
<ul>
<li><strong>P20</strong> (28-32 HRC) — $200-400 for a typical mold base. General purpose, low volume. Good for PP, PE, ABS.</li>
<li><strong>718H</strong> (33-37 HRC) — $300-600. Medium production, good polishability. Standard for most commercial molds.</li>
<li><strong>NAK80</strong> (38-42 HRC) — $400-800. High polish for optical parts, lenses, transparent components.</li>
<li><strong>S136</strong> (48-52 HRC) — $500-1,000+. Corrosion resistant, required for medical and food-grade. ISO 13485 compliant.</li>
<li><strong>H13</strong> (46-50 HRC) — $400-800. High-temperature, for engineering resins and die-casting. Glass-filled materials require H13 or harder.</li>
<li><strong>M333</strong> (50-54 HRC) — $600-1,200. Extreme wear resistance for high-glass-fiber materials and million-shot production.</li>
</ul>

<h3>2. Cavitation (20-40% of total cost)</h3>
<p>Number of cavities directly multiplies machining time and complexity:</p>
<ul>
<li><strong>Single cavity</strong> — Baseline cost. One part per cycle.</li>
<li><strong>2-cavity</strong> — ~1.5-1.8x single cavity cost.</li>
<li><strong>4-cavity</strong> — ~2.5-3x single cavity cost.</li>
<li><strong>8+ cavity</strong> — 4-6x+. Only justified for high-volume production (500K+ parts/year).</li>
</ul>
<p>For volumes under 100K/year, a 2-cavity or 4-cavity family mold is often the sweet spot. The additional cavitation pays for itself quickly in reduced per-part cost.</p>

<h3>3. Part Complexity (15-30% of total cost)</h3>
<p>Complexity factors that drive up cost:</p>
<ul>
<li><strong>Undercuts</strong> — Require side actions, lifters, or collapsible cores. Each side action adds $500-2,000.</li>
<li><strong>Threads</strong> — Unscrewing mechanisms or split cavities add significant cost.</li>
<li><strong>Tight tolerances</strong> — ±0.02mm requires premium EDM and more inspection time.</li>
<li><strong>Thin walls</strong> — Below 0.8mm requires specialized flow analysis and may need hot runner.</li>
<li><strong>Complex geometry</strong> — Deep ribs, multiple bosses, or intricate surface textures add machining hours.</li>
</ul>

<h3>4. Surface Finish (5-15% of total cost)</h3>
<ul>
<li><strong>SPI B-1 / A-3</strong> (commercial finish) — Included in standard pricing.</li>
<li><strong>SPI A-2 / diamond polish</strong> — Adds $500-3,000 depending on area. Requires NAK80 or S136 steel.</li>
<li><strong>Texture / engraving</strong> — Adds $300-2,000 depending on complexity.</li>
<li><strong>Mirror finish (optical)</strong> — Adds $1,000-5,000+. Requires NAK80 with extended polishing.</li>
</ul>

<h3>5. Runner System (5-20% of total cost)</h3>
<ul>
<li><strong>Cold runner (2-plate)</strong> — Standard, lowest cost. Runner material is scrap.</li>
<li><strong>Cold runner (3-plate)</strong> — Allows automatic degating. ~20% more than 2-plate.</li>
<li><strong>Hot runner</strong> — No runner waste, faster cycles, better for high-volume. Adds $2,000-10,000+. Justified above ~50K parts/year.</li>
<li><strong>Insulated runner</strong> — Middle ground. Less expensive than full hot runner.</li>
</ul>

<h3>6. Mold Base Standard (5-10% of total cost)</h3>
<p>HASCO (Europe) and DME (US) premium ranges add 10-20% versus LKM (Asia). MISUMI (Japan) is price-competitive but has longer lead times for custom plates. Confirm the standard in your purchase order.</p>

<h2>Example Cost Ranges (2026, Shenzhen)</h2>
<table>
<tr><th>Mold Type</th><th>Typical Range</th><th>Example</th></tr>
<tr><td>Simple single-cavity (P20, 2-plate cold runner)</td><td>$2,000-$5,000</td><td>Simple cap or cover</td></tr>
<tr><td>Medium 2-cavity (718H, 2-plate cold runner)</td><td>$5,000-$15,000</td><td>Consumer electronics housing</td></tr>
<tr><td>Complex 4-cavity hot runner (S136, HASCO)</td><td>$20,000-$50,000</td><td>Medical device component</td></tr>
<tr><td>Large multi-cavity hot runner (H13, DME)</td><td>$50,000-$100,000+</td><td>Automotive interior part</td></tr>
</table>

<h2>Get an Accurate Quote for Your Part</h2>
<p>Every part is different. The best way to get an accurate price is to submit your CAD file for a <a href="/contact">free DFM review and quote</a>. Our engineers respond within 24 hours with detailed pricing broken down by steel, cavitation, and complexity. No obligation.</p>`,
  },

  "mold-steel-selection-guide": {
    slug: "mold-steel-selection-guide",
    title: "Mold Steel Selection Guide: P20 vs 718H vs NAK80 vs S136",
    description:
      "How to choose the right steel for your injection mold based on production volume, plastic material, and surface finish requirements. Practical comparison for engineers and buyers.",
    category: "Engineering",
    date: "2026-06-05",
    readTime: "10 min read",
    content: `<p>Choosing the wrong mold steel is expensive. Too soft and your mold wears out before the production run finishes. Too hard and you are paying for capability you do not need. This guide compares the six most common injection mold steels and tells you exactly when to use each one.</p>

<h2>Quick Decision Matrix</h2>
<table>
<tr><th>If you need...</th><th>Choose</th><th>Hardness</th></tr>
<tr><td>Lowest cost, low volume (&lt;50K shots)</td><td>P20</td><td>28-32 HRC</td></tr>
<tr><td>Medium production (50K-300K), general purpose</td><td>718H</td><td>33-37 HRC</td></tr>
<tr><td>High polish, transparent parts, optical</td><td>NAK80</td><td>38-42 HRC</td></tr>
<tr><td>Medical, food-grade, corrosion resistance</td><td>S136</td><td>48-52 HRC</td></tr>
<tr><td>High-temp resins, die-casting</td><td>H13</td><td>46-50 HRC</td></tr>
<tr><td>Glass-filled, abrasive materials, &gt;1M shots</td><td>M333</td><td>50-54 HRC</td></tr>
</table>

<h2>P20 — The Workhorse</h2>
<p><strong>Hardness:</strong> 28-32 HRC | <strong>Cost:</strong> $ | <strong>Best for:</strong> Low-volume production, prototypes, simple parts</p>
<p>P20 is the most commonly used mold steel for a reason — it is affordable and easy to machine. It is pre-hardened, which means no heat treatment distortion after machining. Use P20 when your production volume is under 50,000 shots and your plastic is non-abrasive (PP, PE, ABS, HIPS).</p>
<p><strong>Limitations:</strong> Cannot achieve high polish. Poor corrosion resistance. Wears faster with glass-filled materials. Do not use P20 for medical or food-contact parts.</p>

<h2>718H — The All-Rounder</h2>
<p><strong>Hardness:</strong> 33-37 HRC | <strong>Cost:</strong> $$ | <strong>Best for:</strong> Medium production, commercial parts, good surface finish</p>
<p>718H is the most popular choice for commercial injection molds. It offers better polishability than P20, higher hardness for longer tool life (100K-300K shots), and good machinability. This is the default recommendation for most injection mold projects — it balances cost, durability, and finish quality.</p>
<p><strong>Limitations:</strong> Not suitable for corrosive materials. Not hard enough for abrasive glass-filled compounds above 30% glass.</p>

<h2>NAK80 — The Polisher</h2>
<p><strong>Hardness:</strong> 38-42 HRC | <strong>Cost:</strong> $$$ | <strong>Best for:</strong> High-gloss, transparent, optical parts</p>
<p>NAK80 is a precipitation-hardening steel with exceptional polishability. It can achieve a mirror finish (SPI A-1) that P20 and 718H cannot. It is the steel of choice for lenses, transparent covers, cosmetic surfaces, and any part where surface appearance is critical. It also holds fine detail well — important for textured surfaces.</p>
<p><strong>Limitations:</strong> More expensive. Softer than S136 and H13, so not ideal for very high volume or abrasive materials.</p>

<h2>S136 — The Medical Grade</h2>
<p><strong>Hardness:</strong> 48-52 HRC | <strong>Cost:</strong> $$$$ | <strong>Best for:</strong> Medical devices, food contact, corrosive materials, high volume</p>
<p>S136 is a stainless mold steel with high corrosion resistance. It is required for medical devices under ISO 13485, food-contact parts, and any application where the mold will run PVC or other corrosive materials. The high hardness (48-52 HRC) gives it excellent wear resistance for high-volume production (500K+ shots).</p>
<p><strong>Limitations:</strong> Most expensive common steel. Harder to machine, which extends lead time. Overkill for simple commercial parts.</p>

<h2>H13 — The Hot Worker</h2>
<p><strong>Hardness:</strong> 46-50 HRC | <strong>Cost:</strong> $$$$ | <strong>Best for:</strong> High-temperature engineering resins, die-casting molds</p>
<p>H13 is a hot-work tool steel designed for high-temperature applications. If your plastic requires mold temperatures above 120°C (PEEK, PPS, LCP, PEI/Ultem), you need H13. It is also the standard steel for aluminum and zinc die-casting molds. H13 resists thermal fatigue cracking that would destroy P20 or 718H under sustained heat cycling.</p>
<p><strong>Limitations:</strong> More difficult to polish than NAK80. Higher cost. Generally overkill for commodity thermoplastics.</p>

<h2>M333 — The Tank</h2>
<p><strong>Hardness:</strong> 50-54 HRC | <strong>Cost:</strong> $$$$$ | <strong>Best for:</strong> Glass-filled materials, abrasive compounds, million-shot production</p>
<p>M333 is a high-hardness stainless mold steel designed for extreme wear resistance. If your material contains 30% or more glass fiber, or if you need the mold to run over a million cycles without significant wear, M333 is the answer. The combination of high hardness and stainless properties makes it ideal for high-volume medical and automotive applications.</p>
<p><strong>Limitations:</strong> Premium cost. Longest machining time. Only justified for high-value production programs.</p>

<h2>Common Steel Selection Mistakes</h2>
<ul>
<li><strong>Choosing P20 for glass-filled nylon</strong> — The glass fibers will erode P20 within 10,000-20,000 shots. You need H13 or M333.</li>
<li><strong>Choosing S136 for a simple PP cap</strong> — Paying 3x the steel cost for capability you will never use.</li>
<li><strong>Not specifying the steel grade in the purchase order</strong> — Some low-cost suppliers substitute lower-grade steel. Always confirm via spectrometer verification at incoming inspection.</li>
<li><strong>Using European steel prices for China sourcing</strong> — Chinese mold makers import European steel when specified, but the machining cost is lower. You get the same steel at a better total price.</li>
</ul>

<h2>Get Steel Engineering Support</h2>
<p>Not sure which steel fits your part? <a href="/contact">Send us your CAD file or material spec</a>. Our engineers recommend the right steel and provide a free DFM review with every quote. We verify every steel batch with a spectrometer at incoming inspection — you get a copy of the report.</p>`,
  },
};

export function getBlogPost(slug: string): BlogPost | null {
  return BLOG_POSTS[slug] ?? null;
}

export function getAllBlogPosts(): BlogPost[] {
  return Object.values(BLOG_POSTS);
}
