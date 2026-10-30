(() => {
  const headerHost = document.querySelector('[data-site-header]');
  const footerHost = document.querySelector('[data-site-footer]');
  const navItems = [
    ['Home','index.html','home'],['About','about.html','about'],['Services','services.html','services'],
    ['Equipment','equipment.html','equipment'],['How It Works','how-it-works.html','how'],['Contact','contact.html','contact']
  ];
  const current = location.pathname.split('/').pop() || 'index.html';
  const active = current.replace('.html','').replace('index','home');
  if (headerHost) {
    headerHost.innerHTML = `
      <div class="topline"><div class="container topline-inner"><span>Freight dispatch support for independent carriers and fleets</span><div class="topline-links"><a href="tel:+17133644869">(713) 364-4869</a><a href="mailto:Dispatch@victorfreight.com">Dispatch@victorfreight.com</a></div></div></div>
      <header class="site-header"><div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="Victor Freight home"><img src="assets/img/victor-freight-logo.svg" alt="Victor Freight — Freight Dispatch Services"></a>
        <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-nav">☰</button>
        <nav class="nav" id="primary-nav" aria-label="Main navigation">
          ${navItems.map(([label,href,key])=>`<a href="${href}" class="${active===key?'active':''}">${label}</a>`).join('')}
          <a class="mobile-only" href="quote.html">Get a Quote →</a>
        </nav>
        <div class="nav-actions"><a class="btn btn-outline btn-sm" href="tel:+17133644869">☎ (713) 364-4869</a><a class="btn btn-primary btn-sm" href="quote.html">Get a Quote <span aria-hidden="true">↗</span></a></div>
      </div></header>`;
    const toggle = headerHost.querySelector('.menu-toggle');
    const nav = headerHost.querySelector('.nav');
    toggle?.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      toggle.textContent = open ? '×' : '☰';
    });
    nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open'); toggle?.setAttribute('aria-expanded','false'); if(toggle) toggle.textContent='☰';
    }));
  }
  if (footerHost) {
    footerHost.innerHTML = `
      <footer class="site-footer"><div class="container">
        <div class="footer-grid">
          <div class="footer-brand"><a href="index.html"><img src="assets/img/victor-freight-logo.svg" alt="Victor Freight"></a><p>Carrier-focused dispatch support designed around your equipment, preferred lanes and business goals. Your freight. Our priority.</p><a class="btn btn-primary btn-sm" href="quote.html">Start a Dispatch Request ↗</a></div>
          <div class="footer-col"><h3>Explore</h3><a href="about.html">About Us</a><a href="services.html">Dispatch Services</a><a href="equipment.html">Equipment Types</a><a href="how-it-works.html">How It Works</a></div>
          <div class="footer-col"><h3>Get Started</h3><a href="quote.html">Request a Quote</a><a href="contact.html">Contact</a><a href="mailto:Dispatch@victorfreight.com">Email Dispatch</a><a href="tel:+17133644869">Call (713) 364-4869</a></div>
          <div class="footer-col"><h3>Contact</h3><p>Overland Park, Kansas</p><a href="mailto:Dispatch@victorfreight.com">Dispatch@victorfreight.com</a><a href="tel:+17133644869">(713) 364-4869</a><p>Dispatch support: 24/7</p></div>
        </div>
        <div class="footer-bottom"><span>© <span data-year></span> Victor Freight. All rights reserved.</span><div class="footer-legal"><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms of Use</a></div></div>
      </div></footer>`;
    footerHost.querySelector('[data-year]').textContent = new Date().getFullYear();
  }
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); io.unobserve(entry.target); }
    }), {threshold: .12});
    revealEls.forEach(el => io.observe(el));
  } else revealEls.forEach(el => el.classList.add('in-view'));
})();
