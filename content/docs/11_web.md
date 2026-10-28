# 11 · E-commerce & Web Design
*(Lesson 9.)* Two halves: **A. Web design/development** (HTML, CSS, JS, UX, SEO) and **B. E-commerce** (models, payments, marketing, laws). Many "Easy" identification items live here (tags, properties, acronyms, company names).

> **How to use this page.** Start with **Basics**: that is what the elimination round tests. The sections after it
> are the deeper detail for the finals (identification, average/difficult). Tip: know the tag/property names, the acronyms and the B2C/C2C/B2B examples cold.

---

## Basics

### The web and browsers
- The **World Wide Web** was invented by **Tim Berners-Lee**; he founded the **W3C** (1994), the body that develops web standards.
- **HTTP** = **HyperText Transfer Protocol**; **URL** = **Uniform Resource Locator** (the web address of a resource).
- Common HTTP status codes: **200** OK · **301** moved permanently · **403 Forbidden** (server understood the request but refuses to authorize it) · **404 Not Found** · **500** server error.
- **Browser engines:** **Blink** = Chrome and Edge · **Gecko** = Firefox · **WebKit** = Safari (Apple).
- **Node.js** runs JavaScript on the server (uses Chrome's **V8** engine).

### HTML (structure)
- **HTML** = **HyperText Markup Language**; it gives a page its structure. `<body>` holds the visible content.
- **Headings:** `<h1>` is the largest, `<h6>` the smallest. **Link:** `<a href="">`. **Image:** `<img src="" alt="">`: **`src`** = file to show, **`alt`** = alternative text (accessibility/SEO).
- **Lists:** `<ol>` ordered (numbers), `<ul>` unordered (bullets), `<li>` item. **Table:** `<table>`, `<tr>` = row, `<th>` header cell, `<td>` data cell.
- **Void (empty) elements** have no end tag: `<br>`, `<hr>`, `<img>`, `<input>`.
- **Semantic HTML5:** `<header> <nav> <main> <section> <article> <aside> <footer>`; **`<nav>`** holds the main navigation links.
- **Forms:** **GET** puts data in the URL (bookmarkable, not for secrets); **POST** sends data in the request body. `<input type="password">` hides typed characters; `type="color"` gives a color picker.

### CSS (style)
- **CSS** = **Cascading Style Sheets**. Best practice for many pages: an **external stylesheet** (`<link rel="stylesheet">`).
- **Selectors:** `.name` = class · `#name` = id · `p` = element. **`color`** sets text color.
- **Media queries** (`@media`) apply styles by screen width, which is the basis of responsive design.
- **HEX colors:** `#FFFFFF` = **white**, `#000000` = **black**, `#FF0000` = red.
- **Box model (inside to outside):** **content, padding, border, margin**.
- **Specificity:** **inline style** > id > class > element.
- **Flexbox** (`display: flex`) = one-dimensional layout; **Grid** = two-dimensional.
- **Tailwind CSS** is utility-first; **Bootstrap** is the grid/component framework from Twitter.

### JavaScript (behavior)
- **JavaScript** was created by **Brendan Eich** (Netscape, 1995).
- **DOM** = **Document Object Model**, the tree representation of the page. Select an element by id with **`document.getElementById()`**.
- **React** (Meta) is a library that uses a **virtual DOM** and **JSX**.

### Design, UX and SEO
- **UI** = look and interface elements (layout, color, buttons); **UX** = the overall experience. **Figma** is the browser-based tool for UI design and collaboration.
- **RGB** is **additive** (light, screens); **CMYK** is **subtractive** (print). **Complementary** colors sit opposite each other on the color wheel.
- **WCAG** = **Web Content Accessibility Guidelines** (W3C).
- **Core Web Vitals:** **LCP** (Largest Contentful Paint) measures **loading** performance; INP = responsiveness; CLS = visual stability.
- **SEO** = **Search Engine Optimization**. **robots.txt** tells crawlers which pages not to crawl; **sitemap.xml** lists pages to index.

### E-commerce
- **E-commerce** = buying and selling goods and services over electronic networks. **M-commerce** = commerce through **mobile devices**.
- **Jeff Bezos** founded **Amazon**.
- **B2C:** firm sells to consumers (Amazon, Lazada, Shopee). **C2C:** consumers sell to consumers via a platform (eBay, Carousell). B2B = business to business (Alibaba.com).
- **Dropshipping:** the seller holds **no inventory**; the supplier ships directly to the customer.
- Major PH **e-wallets:** **GCash** and **Maya**. **QR Ph** = the BSP-standard QR code for interoperable payments.
- **Card payment parties:** the **issuer** is the customer's own bank that approves or declines the transaction.
- **PCI DSS** = the security standard for organizations that handle card data.
- **Conversion rate** = orders ÷ visitors. **CTR** (click-through rate) = clicks ÷ impressions.
- **Data Privacy Act** = **RA 10173** (E-Commerce Act = RA 8792).

---

# PART A — WEB DESIGN & DEVELOPMENT

## How the web works
- **Web** (WWW) ≠ **Internet**. Invented by **Tim Berners-Lee** at CERN (proposal 1989, first site 1991); he founded **W3C** in 1994 (standards: HTML/CSS/DOM/WCAG). **WHATWG** maintains the HTML Living Standard.
- **Client–server**: browser (client) sends HTTP request → web server returns response (HTML/CSS/JS/JSON). **URL** = `scheme://host:port/path?query#fragment` (e.g., `https://www.umak.edu.ph/about?x=1#top`). **URI** ⊃ URL, URN.
- **Browsers** & engines: Chrome (Google; **Blink**), Edge (Microsoft; Blink), Safari (Apple; **WebKit**), Firefox (Mozilla; **Gecko**), Opera, Brave, Samsung Internet. First browsers: WorldWideWeb (Nexus), **Mosaic** (1993), **Netscape Navigator** (1994), Internet Explorer (1995; retired June 2022).
- **Web servers:** Apache HTTP Server, **Nginx**, Microsoft IIS, LiteSpeed, Node.js. **Static** site (fixed files) vs **dynamic** (server generates pages from DB). **Front-end** (client-side: HTML/CSS/JS) vs **back-end** (server: PHP, Python, Node, Java, C#, Ruby, DB) vs **full-stack**. **SPA** vs **MPA**; **SSR / CSR / SSG / ISR**.
- **Hosting:** shared, VPS, dedicated, cloud, managed (WordPress), static hosts (GitHub Pages, Netlify, Vercel, Cloudflare Pages). **Domain name** bought from a registrar; **DNS** maps to IP; **SSL/TLS certificate** (Let's Encrypt free) for HTTPS. **CDN** caches content close to users.
- **CMS:** WordPress (~40 %+ of all sites; PHP/MySQL), Joomla, Drupal, Wix, Squarespace, Webflow, Ghost; e-commerce: Shopify, WooCommerce, Magento (Adobe Commerce), BigCommerce, PrestaShop.

## HTML
- Markup (not programming) language for structure. **HTML5** (W3C recommendation 2014). Case-insensitive tags; elements = start tag + content + end tag; **void/empty elements**: `<br> <hr> <img> <input> <meta> <link>`.
- Skeleton:
```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Page title</title><link rel="stylesheet" href="style.css"></head>
<body><h1>Hello</h1><p>Text</p><script src="app.js"></script></body>
</html>
```
- **Tags:** headings `<h1>`–`<h6>`; `<p>`; `<a href="">` (link; `target="_blank"`); `<img src="" alt="">`; lists `<ul>` (bullets), `<ol>` (numbers), `<li>`, `<dl><dt><dd>`; **table** `<table><tr><th><td>` (`colspan`, `rowspan`, `<thead> <tbody> <tfoot>`); `<form action method>`; `<div>` (block), `<span>` (inline); `<strong>`/`<b>`, `<em>`/`<i>`, `<u>`, `<mark>`, `<small>`, `<sub>`, `<sup>`; `<br>`, `<hr>`; `<iframe>`; `<audio>`, `<video controls>`, `<source>`, `<canvas>`, `<svg>`; `<button>`; `<label for>`; `<script>`, `<style>`, `<link>`, `<meta>`, `<title>`, `<base>`.
- **Semantic HTML5:** `<header> <nav> <main> <section> <article> <aside> <footer> <figure> <figcaption> <time> <details> <summary>` (helps SEO & accessibility).
- **Form inputs (`<input type="">`):** text, password, email, number, tel, url, date, time, datetime-local, month, week, color, range, search, file, checkbox, radio, hidden, submit, reset, button. Attributes: `name, value, placeholder, required, readonly, disabled, maxlength, min, max, pattern, autofocus, autocomplete`. Others: `<select><option>`, `<textarea>`, `<datalist>`, `<fieldset><legend>`. Methods: **GET** (data in URL; bookmarkable; not for secrets) vs **POST** (data in body).
- **Global attributes:** `id` (unique), `class`, `style`, `title`, `lang`, `hidden`, `data-*`, `tabindex`, `contenteditable`, `draggable`.
- **Entities:** `&nbsp;` space · `&lt;` `<` · `&gt;` `>` · `&amp;` `&` · `&quot;` · `&copy;` © · `&reg;` ®.
- **Block vs inline:** block elements (div, p, h1, ul, section) start new line and take full width; inline (span, a, strong, img) flow in text. **Comment:** `<!-- ... -->`. File extension `.html/.htm`. Default page `index.html`.
- **Doctype** declares HTML5. `alt` attribute = alternative text (accessibility/SEO). Path types: absolute vs relative URL.

## CSS
- Proposed by **Håkon Wium Lie** (1994); W3C CSS1 1996; **CSS3** modular; "Cascading" = priority rules. Adding CSS: **inline** (`style=""`), **internal** (`<style>`), **external** (`<link rel="stylesheet">` – best practice). Precedence generally inline > internal/external (by order) > browser default; `!important` overrides.
- **Syntax:** `selector { property: value; }`. Comment `/* … */`.
- **Selectors:** element `p`, class `.box`, id `#main`, universal `*`, group `h1, h2`, descendant `div p`, child `div > p`, adjacent sibling `h1 + p`, general sibling `h1 ~ p`, attribute `[type="text"]`, pseudo-class `:hover :focus :first-child :nth-child(2) :not()`, pseudo-element `::before ::after ::first-line`.
- **Specificity:** inline (1000) > id (100) > class/attribute/pseudo-class (10) > element/pseudo-element (1). Later rule wins on ties.
- **Box model (outside←inside):** **margin → border → padding → content**. `box-sizing: border-box` includes padding & border in width. Shorthand `margin: top right bottom left` (clockwise: TRBL); `margin: 10px 20px` = vertical, horizontal. Margin collapsing. `margin: 0 auto` centers a block.
- **Display:** `block, inline, inline-block, none, flex, grid, table`. `display:none` removes from layout vs `visibility:hidden` keeps space.
- **Position:** `static` (default), `relative` (offset from own spot), `absolute` (relative to nearest positioned ancestor), `fixed` (viewport), `sticky`. `z-index` stacking. `float`/`clear` (older layout).
- **Flexbox** (1-D): container `display:flex; flex-direction; justify-content` (main axis: flex-start, center, space-between, space-around, space-evenly); `align-items` (cross axis); `flex-wrap; gap`; items `flex: 1; order; align-self`.
- **Grid** (2-D): `display:grid; grid-template-columns: repeat(3, 1fr); grid-gap; grid-area`; `fr` fractional unit.
- **Units:** absolute `px, pt, cm, in`; relative `%, em` (parent font size), `rem` (root), `vw/vh` (viewport), `ch`. **Colors:** names, **HEX** `#RRGGBB` (`#FF0000` red; `#FFFFFF` white; `#000000` black), `rgb(255,0,0)`, `rgba()` (alpha), `hsl()`.
- **Text/Font:** `color, font-family, font-size, font-weight, font-style, text-align, text-decoration, text-transform, line-height, letter-spacing`. `@font-face`, Google Fonts. **Backgrounds:** `background-color/image/size/repeat/position`. **Borders:** `border-radius, box-shadow, text-shadow, opacity, overflow`.
- **Responsive design** (Ethan Marcotte, 2010): fluid grids, flexible images, **media queries** `@media (max-width: 768px) { … }`; **viewport meta**; **mobile-first** (min-width queries). Breakpoints ~480/768/1024/1200 px. **Transitions** (`transition: all .3s`), **transforms**, **animations** (`@keyframes`), **CSS variables** (`--main: #333; color: var(--main)`), `calc()`, `clamp()`. 
- **Preprocessors:** Sass/SCSS, Less. **Frameworks:** **Bootstrap** (Twitter; 12-column grid, `container`, `row`, `col-md-6`), **Tailwind CSS** (utility-first), Bulma, Foundation, Material UI.

## JavaScript & back-end
- Created by **Brendan Eich** (Netscape, 1995); standard = **ECMAScript** (ES6/ES2015 major update). Runs in browser; **Node.js** on server (Ryan Dahl 2009; V8 engine from Chrome).
- Adding: `<script>` internal/external; place at end of body or `defer`. `console.log()`, `alert()`, `prompt()`, `confirm()`.
- Variables: `var` (function-scoped), `let` (block), `const` (constant binding). Types: string, number, boolean, null, undefined, object, symbol, bigint; `typeof`. `==` (loose) vs `===` (strict). Arrays `[]`, objects `{}`, arrow functions `(a)=>a*2`, template literals `` `Hi ${name}` ``, destructuring, spread `...`, modules `import/export`, Promises, `async/await`, `fetch()`, JSON `JSON.parse/stringify`.
- **DOM** (Document Object Model): tree representation of the page. `document.getElementById()`, `querySelector()`, `innerHTML`, `textContent`, `addEventListener('click', fn)`, `classList`, `style`. **Events:** click, submit, change, input, keydown, load, mouseover. **BOM:** window, location, history, navigator.
- **Storage:** `localStorage` (persistent, ~5 MB, same-origin), `sessionStorage` (per tab), **cookies** (sent to server, ≤4 KB, expiry), IndexedDB. **AJAX** = async JS + XML/JSON without reload. **CORS** (cross-origin resource sharing), **same-origin policy**. **Service workers / PWA** (offline, installable). **WebSockets**, **WebRTC**, **WebAssembly (WASM)**, **Web APIs** (geolocation, canvas, WebGL/WebGPU).
- **Frameworks/libraries:** **React** (Meta; JSX, virtual DOM, hooks), **Angular** (Google; TypeScript), **Vue** (Evan You), **Svelte**, **Next.js** (React meta-framework, Vercel), Nuxt, Astro, jQuery (old: `$()`), **Express** (Node), **Django/Flask/FastAPI** (Python), **Laravel** (PHP), Spring Boot (Java), **ASP.NET** (C#), Ruby on Rails. Tools: npm/yarn/pnpm, Vite, Webpack, ESLint, Prettier, Git, Chrome DevTools. **TypeScript** adds static types.
- **Back-end basics:** PHP (`<?php ?>`, `$var`, `echo`, `$_GET`, `$_POST`, `$_SESSION`; Rasmus Lerdorf 1994), sessions vs cookies, **JWT**, REST endpoints, MVC, ORM, authentication, input validation (server-side is mandatory).

## Design, UX, SEO & performance
- **UI** (look: layout, color, type, buttons) vs **UX** (overall experience, usability). Process: research → personas/user journeys → **wireframe (low-fi)** → **mockup (visual)** → **prototype (interactive)** → usability test → handoff. Tools: **Figma**, Adobe XD (discontinued), Sketch, Adobe Photoshop/Illustrator, Canva, Balsamiq, Framer, Penpot.
- **Visual design principles:** balance, contrast, emphasis/hierarchy, alignment, proximity, repetition/consistency, white (negative) space, rhythm, unity. **CRAP** (Contrast, Repetition, Alignment, Proximity – Robin Williams). Gestalt principles. **F-pattern / Z-pattern** reading. **Rule of thirds**, golden ratio (1.618), 8-pt grid. "Above the fold".
- **Color:** **RGB** (additive; light/screens; R, G, B primaries) vs **CMYK** (subtractive; print) vs RYB (art primaries). Color wheel: primary, secondary, tertiary; **complementary** (opposites), **analogous** (neighbors), **triadic**, monochromatic. **Hue, saturation, brightness (HSB/HSL)**. **60-30-10 rule**. Warm vs cool colors; color psychology (blue = trust, red = urgency). Web-safe colors (216). Contrast ratio.
- **Typography:** **serif** (Times New Roman, Georgia) vs **sans-serif** (Arial, Helvetica, Roboto, Inter) vs monospace (Courier, Consolas) vs display/script; **kerning** (between letter pairs), **tracking** (overall), **leading** (line spacing); readable line length 45–75 chars; web fonts (Google Fonts, Adobe Fonts); font pairing.
- **Usability heuristics (Jakob Nielsen's 10):** visibility of system status · match between system & real world · user control & freedom · consistency & standards · error prevention · recognition rather than recall · flexibility & efficiency · aesthetic & minimalist design · help users recognize/diagnose/recover from errors · help & documentation. **Laws:** **Fitts's** (bigger/closer targets are faster to hit), **Hick's** (more choices → slower decisions), **Miller's** (7±2 chunks), **Jakob's** (users expect your site to work like others), Postel's, Pareto, Von Restorff. **Dark patterns** (deceptive UI).
- **Accessibility:** **WCAG** (W3C; levels A, AA, AAA; versions 2.1/2.2). **POUR:** Perceivable, Operable, Understandable, Robust. Contrast ≥ **4.5:1** (AA normal text), 7:1 (AAA); alt text; keyboard navigation; focus states; captions; semantic HTML; **ARIA** attributes; screen readers (NVDA, JAWS, VoiceOver). Legal: Section 508 (US), ADA, EN 301 549; PH: Magna Carta for Persons with Disability (RA 7277).
- **Responsive & adaptive**, mobile-first, touch targets ≥ 44×44 px (Apple) / 48 dp (Material). **Design systems:** Material Design (Google), Fluent (Microsoft), Human Interface Guidelines (Apple), Carbon (IBM), Ant Design. **Navigation patterns:** top nav, hamburger menu, breadcrumbs, tabs, sidebar, footer sitemap.
- **Web performance:** **Core Web Vitals** — **LCP** (Largest Contentful Paint, loading), **INP** (Interaction to Next Paint, responsiveness; replaced FID in March 2024), **CLS** (Cumulative Layout Shift, visual stability). Techniques: minify, compress (gzip/Brotli), cache, lazy-load, CDN, image formats **WebP/AVIF**, HTTP/2–3, reduce requests.
- **SEO (Search Engine Optimization):** on-page (title tag, meta description, headings, keywords, alt text, internal links, URL structure), off-page (**backlinks**), technical (**sitemap.xml**, **robots.txt**, speed, mobile-friendly, HTTPS, **schema.org** structured data/JSON-LD, canonical tags). **SERP**; **PageRank** (Larry Page & Sergey Brin); crawler/bot/spider (**Googlebot**), indexing; black-hat (keyword stuffing, link farms) vs white-hat; **SEM** (paid search ads, Google Ads, PPC), **GEO/AEO** (optimizing for AI answers) is an emerging term. Analytics: Google Analytics 4, Search Console, Hotjar. Social: Open Graph tags.
- **Image formats for web:** JPEG (photos, lossy), PNG (transparency), GIF (animation), SVG (vector/icons), WebP/AVIF (modern). Favicon `.ico`.

---

# PART B — E-COMMERCE

## Definitions & history · finals
- **E-commerce** = buying/selling goods/services and transferring funds/data over electronic networks. **E-business** is broader (includes internal processes, collaboration, CRM, SCM). **M-commerce** = via mobile devices. Also: **social commerce** (TikTok Shop, Facebook/Instagram Shops), **voice commerce**, **conversational/agentic commerce**.
- **History:** 1960s–70s **EDI** (Electronic Data Interchange) & **EFT**; **1979 Michael Aldrich** (UK) invented online shopping (teleshopping); **1994** first secure online purchase (NetMarket – a Sting CD); **1994–95** Amazon founded (Jeff Bezos; started with books; Jul 1994 incorporated, site launched Jul 1995); **1995** eBay (Pierre Omidyar; AuctionWeb) ; **1998** PayPal (Peter Thiel, Max Levchin, Elon Musk's X.com merger); **1999** Alibaba (Jack Ma); **2000** dot-com bubble burst; **2003** Taobao; **2006** Shopify (Tobias Lütke); 2007 iPhone → m-commerce; 2010s marketplaces; 2020 COVID boom; 2020s TikTok Shop, Temu (PDD), Shein; **2025** AI shopping agents.
- **Characteristics:** ubiquity, global reach, universal standards, richness, interactivity, information density, personalization, social technology.
- **Benefits:** 24/7, global reach, lower costs, personalization, easy comparison. **Limitations:** no physical touch, security/fraud, delivery time, tech dependency, returns.

## E-commerce models
| Model | Meaning | Examples |
|---|---|---|
| **B2C** Business-to-Consumer | firm sells to individuals | Amazon, Lazada, Shopee, Zalora, Apple Store |
| **B2B** Business-to-Business | firms trade with firms | Alibaba.com, Grainger, Salesforce, IndiaMART |
| **C2C** Consumer-to-Consumer | individuals sell to individuals via platform | eBay, Carousell, Facebook Marketplace, OLX |
| **C2B** Consumer-to-Business | individuals sell services to firms (reverse auction, freelance, influencers) | Upwork, Fiverr, Shutterstock contributors |
| **B2G** Business-to-Government | firms sell to government | **PhilGEPS** (PH Government Electronic Procurement System) |
| **G2C** Government-to-Citizen | gov services online | **eGov PH**, PhilSys, BIR eFPS, SSS/PhilHealth portals |
| **G2B**, **G2G**, **P2P** (peer-to-peer lending/payments: Kickstarter, GCash send money) | | |
- **Other terms:** **Brick-and-mortar** (physical only), **click-and-mortar / omnichannel / O2O (online-to-offline)**, pure-play, **dropshipping** (seller doesn't hold inventory), **print-on-demand**, **marketplace** (many sellers) vs **own storefront**, subscription box, flash sale, group buying, reverse auction, **white-label**, **D2C** (direct-to-consumer), **social proof**, **UGC**.
- **Revenue models:** direct sales, **subscription** (Netflix), **advertising**, **affiliate/commission**, **transaction fee**, **freemium**, licensing, **referral**, data monetization.

## E-commerce architecture · finals
- **Components:** storefront/website/app → product **catalog** & search → **shopping cart** → **checkout** → **payment gateway** → **order management system (OMS)** → **inventory/warehouse (WMS)** → shipping/logistics → customer service/CRM → analytics → back-office ERP. Supporting: CMS, PIM (product information management), CDN, search (Elasticsearch/Algolia), recommendation engine, fraud detection, notifications (email/SMS/push), reviews/ratings, loyalty/coupons.
- **Flow:** Browse → Add to cart → Checkout (address/shipping/payment) → Payment authorization → Order confirmation → Fulfillment (pick/pack/ship) → Delivery → After-sales (returns/refunds/reviews).
- **Fulfillment:** in-house, 3PL, **FBA (Fulfilled by Amazon)**, **dropship**, click-and-collect. **Last-mile delivery.** PH logistics: **J&T Express, LBC, Flash Express, Ninja Van, Lalamove, Grab Express, Xend, JRS, 2GO, SPX Express (Shopee)**. COD (cash on delivery) is very common in PH.
- **Tech stacks:** LAMP/MEAN/MERN, headless commerce (API-first), microservices, SaaS platforms.

## Electronic payment
- **Methods:** credit/debit cards (Visa, Mastercard, JCB, AmEx), **e-wallets** (**GCash**, **Maya**, **GrabPay**, ShopeePay, PayPal, Alipay, WeChat Pay, Apple Pay, Google Pay), online banking, bank transfer, over-the-counter (7-Eleven CLiQQ, Bayad Center), **COD**, BNPL (buy now pay later: ShopeePayLater, Atome, Kredivo, Affirm), crypto, **QR Ph** (BSP-standard interoperable QR code), **InstaPay** (real-time, up to ₱50,000 per transaction) and **PESONet** (batch ACH) — both under the **National Retail Payment System (NRPS)** by **BSP** (Bangko Sentral ng Pilipinas).
- **Payment gateway** (authorizes/encrypts transaction; e.g., **PayPal, Stripe, PayMongo, Xendit, Dragonpay, 2C2P, Adyen**, Square) vs **payment processor** vs **acquirer/merchant account** vs **issuer** (customer's bank). Card flow: customer → merchant → gateway → processor → card network (Visa/MC) → issuing bank → approve/decline.
- **Security standards:** **PCI DSS** (Payment Card Industry Data Security Standard), **3-D Secure** (Verified by Visa / Mastercard Identity Check; OTP), **EMV chip**, **tokenization**, **SSL/TLS**, **CVV/CVC**, AVS, **SET** (old Secure Electronic Transaction), digital signature, digital certificate, fraud scoring, chargeback.
- **Terms:** E-cash, micropayment, e-check, smart card, **POS** (point of sale), NFC contactless, mobile wallet, escrow (Shopee Guarantee), remittance.
- **Digital banks in PH:** GoTyme, Maya Bank, UnionDigital, UNO Digital, Tonik, OwnBank, Seabank (BSP-licensed digital banks).

## Digital marketing & metrics
- **Channels:** SEO, SEM/PPC (Google Ads, Meta Ads, TikTok Ads), social media marketing, **email marketing** (Mailchimp), content marketing, **influencer**, **affiliate**, display/banner, **retargeting/remarketing**, referral, SMS/push, live-selling.
- **Funnel models:** **AIDA** (Attention, Interest, Desire, Action); awareness → consideration → conversion → retention → advocacy. **Marketing mix** 4Ps (Product, Price, Place, Promotion) → 7Ps (+People, Process, Physical evidence). **SWOT**, STP (segmentation, targeting, positioning), customer persona.
- **Key metrics:** **Conversion rate** = orders ÷ visitors; **AOV** (average order value) = revenue ÷ orders; **CAC** (customer acquisition cost); **CLV/LTV** (customer lifetime value); **ROI**, **ROAS** (return on ad spend); **CTR** (click-through rate) = clicks ÷ impressions; **CPC / CPM / CPA**; **bounce rate**; **cart abandonment rate** (~70 %); **churn**; **NPS** (net promoter score); GMV (gross merchandise value). Examples: 10,000 visitors, 250 orders → 2.5 % conversion; revenue ₱500,000 / 250 orders → AOV ₱2,000.
- **CRM** (Customer Relationship Management: Salesforce, HubSpot, Zoho), **SCM**, **ERP** (SAP, Oracle NetSuite, Odoo), **big-data personalization**, recommendation (collaborative filtering), **dynamic pricing**, A/B testing, chatbots.
- **Concepts:** **Long tail** (Chris Anderson), **network effects**, **disintermediation / reintermediation**, **platform business**, **freemium**, **viral marketing**, **flash sale**, **gamification**, **UGC reviews**.

## Trust, law & ethics
- **Security & trust:** HTTPS padlock, trust seals, secure payment, privacy policy, return policy, seller verification, escrow, reviews. Threats: phishing, fake stores, card-not-present fraud, account takeover, counterfeit goods, bots/scalpers, chargeback abuse, data breaches. → the *IT Security* page.
- **Philippine laws & agencies:**
  - **E-Commerce Act — Republic Act 8792 (2000):** legal recognition of electronic data messages, documents and signatures; penalizes hacking, piracy via electronic means.
  - **Internet Transactions Act of 2023 — RA 11967:** regulates online transactions, creates the **E-Commerce Bureau** under **DTI**; online merchants/platform responsibility, consumer redress.
  - **Consumer Act — RA 7394**; **Data Privacy Act — RA 10173** (NPC); **Cybercrime Prevention Act — RA 10175**; **Financial Products and Services Consumer Protection Act — RA 11765**; **Anti-Financial Account Scamming Act (AFASA) — RA 12010 (2024)**; **SIM Registration Act — RA 11934**; **Philippine Competition Act**; **BIR** requires online sellers to register and issue receipts; **BSP** regulates e-money/payments; **DTI** (Dept. of Trade and Industry), **DICT**, **SEC**.
  - **Philippine Digital Payments Transformation Roadmap**; **PhilSys National ID** (RA 11055) used for e-KYC; **eGov Super App**.
- **Global:** **GDPR** (EU, 2018), CCPA/CPRA (California), PCI DSS, **WTO e-commerce moratorium**, UNCITRAL Model Law on Electronic Commerce (1996) — basis for RA 8792.
- **Ethical issues:** privacy, tracking cookies (consent banners), dark patterns, fake reviews, price discrimination, IP infringement/counterfeits, digital divide, e-waste, environmental impact of delivery.
- **Digital signature & PKI:** hash + private-key encryption; certificate issued by CA (DigiCert, Let's Encrypt).

## AI in e-commerce · finals
- Personalized recommendations, visual search (Google Lens), chatbots/virtual assistants, dynamic pricing, demand forecasting, AI-generated product descriptions, virtual try-on (AR), voice shopping, fraud detection.
- **Agentic commerce (2025–26):** AI agents shop/pay on behalf of users. Protocols: **Agentic Commerce Protocol (ACP)** by **OpenAI & Stripe** (powers *Instant Checkout* in ChatGPT), Google's **Agent Payments Protocol (AP2)**, Visa/Mastercard agent tokens. Shopify, Walmart, Etsy integrations. → see `13`.

---

## ✅ Quick self-check
- Language for page structure → **HTML**; styling → **CSS**; behavior → **JavaScript**
- Creator of the Web → **Tim Berners-Lee**; standards body → **W3C**
- JS creator → **Brendan Eich**; CSS proposer → **Håkon Wium Lie**
- Tag for largest heading → `<h1>`; link → `<a href>`; image alt text purpose → **accessibility/SEO**
- `<br>` and `<img>` are **void (empty) elements**
- HTML5 semantic tags → `header, nav, main, section, article, aside, footer`
- CSS box model order (inside→out) → **content, padding, border, margin**
- Specificity order → **inline > id > class > element**
- CSS for responsive layouts → **media queries**; 1-D layout → **Flexbox**; 2-D → **Grid**
- `position: fixed` → relative to **viewport**
- DOM → **Document Object Model**
- Persistent browser storage → **localStorage**
- JS frameworks: React → **Meta**; Angular → **Google**; Vue → **Evan You**
- CSS framework by Twitter → **Bootstrap**; utility-first → **Tailwind**
- WCAG POUR → **Perceivable, Operable, Understandable, Robust**
- Core Web Vitals → **LCP, INP, CLS**
- RGB (screens) vs CMYK (print)
- Nielsen's usability heuristics → **10**
- Fitts's law → target size/distance; Hick's law → number of choices
- Sitemap file → **sitemap.xml**; crawler instructions → **robots.txt**
- E-commerce Act of PH → **RA 8792**; Internet Transactions Act → **RA 11967**; Data Privacy Act → **RA 10173**
- B2C example → **Amazon/Shopee**; C2C → **eBay/Carousell**; B2B → **Alibaba.com**; B2G → **PhilGEPS**
- Real-time PH interbank transfer → **InstaPay**; QR standard → **QR Ph**
- Card security standard → **PCI DSS**; extra OTP authentication → **3-D Secure**
- Conversion rate formula → **orders ÷ visitors**
- Agentic commerce protocol by OpenAI & Stripe → **ACP**
