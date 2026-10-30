VICTOR FREIGHT — WEBSITE PROJECT
================================

This is a responsive, multi-page HTML/CSS/JavaScript website built for Victor Freight.
It is intended to deploy on Vercel as a static site. No build command or npm install is needed.

PROJECT FILES
-------------
index.html              Homepage
about.html              Company overview (founding story left open for owner input)
services.html           Dispatch and additional services
equipment.html          Supported equipment types
how-it-works.html       Carrier onboarding process and FAQs
quote.html              Carrier Dispatch Request form
contact.html            Phone, email and city-level location
privacy.html             Draft privacy notice (owner/legal review required)
terms.html               Draft website terms (owner/legal review required)
404.html                 Custom not-found page
assets/css/style.css     Responsive design system
assets/js/site.js        Navigation, shared footer, and page interactions
assets/js/config.js      Web3Forms access-key setting
assets/js/forms.js       Quote-form submission and status handling
assets/img/              Victor Freight logo and favicon
vercel.json              Vercel deployment and basic security headers
robots.txt / sitemap.xml Search engine files; sitemap domain is a placeholder

BEFORE THE WEBSITE FORM CAN SEND EMAIL
-------------------------------------
The form is designed for Web3Forms. The owner or an authorized Victor Freight team member should:

1. Open https://web3forms.com/ and create a form using Dispatch@victorfreight.com as the recipient inbox.
2. Verify that inbox and create/copy the form access key.
3. Open assets/js/config.js. Replace the placeholder value with the access key:
   web3formsAccessKey: "PASTE_VICTOR_FREIGHT_WEB3FORMS_ACCESS_KEY_HERE"
4. In the Web3Forms form settings, add the final purchased domain to Allowed Domains.
5. Save and redeploy the website.
6. Submit a real test from the final domain and confirm that the email arrives in Dispatch@victorfreight.com.

The Web3Forms access key is a public form key designed for browser-side form submissions; it is not the mailbox password. Restrict it to the company's domain in Web3Forms. Never put the email account password, email hosting login, or bank details in website files.

DOMAIN & VERCEL DEPLOYMENT
--------------------------
1. Upload the contents of this folder to a GitHub repository (the HTML files should be at the repository root).
2. Import the repository into Vercel. Framework Preset: Other. Build Command: leave blank. Output Directory: leave blank or use the project root.
3. Deploy first to the Vercel preview URL and test every page and the quote form.
4. In Vercel Project Settings → Domains, add the domain Victor already owns.
5. Follow the exact DNS records Vercel displays at the domain provider. Do not delete existing MX, SPF, DKIM or DMARC email records. The domain's email must keep working.
6. Replace the placeholder domain in robots.txt and sitemap.xml with the real domain.
7. Update the final domain/SEO details and redeploy.

LOCAL PREVIEW
-------------
You can double-click index.html for a quick preview. For a better local test, use VS Code Live Server or Python's local server:
  python -m http.server 5500
Then open http://localhost:5500

IMPORTANT OWNER REVIEW
---------------------
- Confirm that Victor Freight's public business details, 24/7 support wording, services, equipment acceptance, payment/fee policy and all claims are accurate.
- The site currently lists Overland Park, Kansas at city level only. It does not invent a street address.
- Dispatch pricing is described as load-based and may vary by equipment type and fleet size. The applicable fee should be explained to the carrier before dispatch service begins; exact rates are not published.
- Carrier MC/operating authority and USDOT fields are for the carrier, not Victor Freight.
- The public quote form does not collect sensitive document uploads. Request MC certificate, COI, W-9, NOA or voided check only through an approved secure onboarding channel.
- The company history/founding date has not been supplied, so the site does not invent one. Add approved founder story before final publication.
- The website explains that Victor Freight does not require carriers to sign a dispatch service contract or commit to a fixed term. Carriers may stop at any time by informing their assigned dispatcher. Carriers still give permission for dispatch activity and decide whether to accept each load. Confirm this wording with Victor Freight before launch.
- Legal pages are starter drafts and must be reviewed by Victor Freight and qualified counsel.
- Stock photographs are illustrative, not photos of Victor Freight-owned trucks or its actual fleet. Replace them with company-owned photos when available.

IMAGE SOURCES
-------------
Pexels images are remotely loaded from Pexels CDN. Photo pages and contributors used in this site:
- https://www.pexels.com/photo/blue-semi-truck-on-a-scenic-mountain-highway-37753989/ — Laszlo Magyar
- https://www.pexels.com/photo/truck-with-red-trailer-near-warehouse-5876475/ — Mark Stebnicki
- https://www.pexels.com/photo/truck-traveling-through-desert-in-saudi-arabia-30484147/ — Pexels contributor page
- https://www.pexels.com/photo/boxes-in-delivery-truck-in-warehouse-21838827/ — Wojciech Kotlicki
- https://www.pexels.com/photo/a-white-truck-on-the-road-12261472/ — Giovanni Spoletini
- https://www.pexels.com/photo/a-truck-on-an-expressway-15595843/ — Boris Hamer

Pexels states that its photos are free for commercial and non-commercial use under the Pexels License, subject to its restrictions: https://www.pexels.com/license/
Please retain these source details and verify each image's current license before final launch. The site's imagery is loaded from Pexels rather than packaged locally because this environment could not download the photo files.
