export const SITE_UX_CSS = `
:root {
  --serif: var(--font-fraunces), Georgia, serif;
  --sans: var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif;
}

:focus-visible {
  outline: 2px solid #c19a5b;
  outline-offset: 3px;
}

/* ——— Navigation mobile ——— */
.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px 6px;
  z-index: 60;
}
.nav-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--cream, #f6f1e7);
  margin: 5px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.nav-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(10, 37, 64, 0.45);
  z-index: 48;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.nav.open .nav-overlay {
  opacity: 1;
  pointer-events: auto;
}
.nav.open .nav-toggle span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.nav.open .nav-toggle span:nth-child(2) {
  opacity: 0;
}
.nav.open .nav-toggle span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}
@media (max-width: 900px) {
  .nav-toggle {
    display: block;
  }
  .nav-links {
    position: fixed !important;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(320px, 88vw);
    background: rgba(10, 37, 64, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column !important;
    align-items: stretch !important;
    padding: 88px 28px 32px !important;
    gap: 0 !important;
    transform: translateX(100%);
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 55;
    box-shadow: -12px 0 40px rgba(0, 0, 0, 0.25);
  }
  .nav.open .nav-links {
    transform: translateX(0);
  }
  .nav-links a:not(.nav-cta) {
    display: block !important;
    padding: 16px 0 !important;
    border-bottom: 1px solid rgba(246, 241, 231, 0.1);
    font-size: 1rem !important;
  }
  .nav-links .nav-cta {
    margin-top: 20px;
    text-align: center;
    padding: 14px 18px !important;
  }
  .nav-overlay {
    display: block;
  }
}

/* ——— Ancres & sections ——— */
#faq,
#contact,
#offre,
#realisations,
#actualites {
  scroll-margin-top: 88px;
}

/* ——— FAQ ——— */
.faq {
  background: var(--cream, #f6f1e7);
}
.faq .sec-head {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.faq .sec-head p {
  margin-left: auto;
  margin-right: auto;
}
.faq-list {
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.faq-item {
  background: var(--paper, #fbf8f1);
  border: 1px solid var(--line, #dcd3c2);
  border-radius: 4px;
  overflow: hidden;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
.faq-item:hover {
  border-color: rgba(193, 154, 91, 0.45);
}
.faq-item.open {
  border-color: var(--gold, #c19a5b);
  box-shadow: 0 10px 32px -18px rgba(10, 37, 64, 0.35);
}
.faq-q {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  padding: 20px 52px 20px 22px;
  font-family: var(--serif);
  font-size: clamp(1rem, 2vw, 1.12rem);
  font-weight: 500;
  color: var(--navy, #0a2540);
  position: relative;
  line-height: 1.4;
  transition: color 0.2s ease;
}
.faq-item.open .faq-q {
  color: var(--navy, #0a2540);
}
.faq-q::after {
  content: "";
  position: absolute;
  right: 22px;
  top: 50%;
  width: 9px;
  height: 9px;
  border-right: 2px solid var(--gold-2, #a67c4f);
  border-bottom: 2px solid var(--gold-2, #a67c4f);
  transform: translateY(-65%) rotate(45deg);
  transition: transform 0.3s ease;
}
.faq-item.open .faq-q::after {
  transform: translateY(-35%) rotate(-135deg);
}
.faq-a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
.faq-a-inner {
  padding: 0 22px 20px;
}
.faq-a p {
  color: var(--muted, #6b7585);
  font-size: 0.96rem;
  line-height: 1.65;
  padding: 0;
  margin: 0;
}
.faq-a p + p {
  margin-top: 10px;
}

/* ——— Formulaires ——— */
.form input,
.form textarea,
.form select {
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.form input:hover,
.form textarea:hover,
.form select:hover {
  border-color: rgba(193, 154, 91, 0.55);
}
.form input:focus,
.form textarea:focus,
.form select:focus {
  border-color: var(--gold, #c19a5b);
  box-shadow: 0 0 0 3px rgba(193, 154, 91, 0.18);
}
.form select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23a67c4f' d='M1 1l5 5 5-5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 36px;
}

/* ——— Boutons ——— */
.btn {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.15s ease;
}
.btn:active {
  transform: scale(0.98);
}
`;

export const SITE_UX_SCRIPT = `
(function initSiteUx(){
  document.querySelectorAll('.nav').forEach(function(nav){
    if(nav.querySelector('.nav-toggle'))return;
    var links=nav.querySelector('.nav-links');
    if(!links)return;
    var toggle=document.createElement('button');
    toggle.type='button';
    toggle.className='nav-toggle';
    toggle.setAttribute('aria-label','Ouvrir le menu');
    toggle.setAttribute('aria-expanded','false');
    toggle.innerHTML='<span></span><span></span><span></span>';
    var overlay=document.createElement('div');
    overlay.className='nav-overlay';
    overlay.setAttribute('aria-hidden','true');
    nav.insertBefore(toggle,links);
    nav.appendChild(overlay);
    function closeNav(){
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      document.body.style.overflow='';
    }
    toggle.addEventListener('click',function(){
      var isOpen=nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',isOpen?'true':'false');
      document.body.style.overflow=isOpen?'hidden':'';
    });
    overlay.addEventListener('click',closeNav);
    links.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeNav);});
  });

  function closeFaqItem(item){
    item.classList.remove('open');
    var btn=item.querySelector('.faq-q');
    var panel=item.querySelector('.faq-a');
    if(btn)btn.setAttribute('aria-expanded','false');
    if(panel)panel.style.maxHeight='0';
  }
  function openFaqItem(item){
    var panel=item.querySelector('.faq-a');
    var btn=item.querySelector('.faq-q');
    item.classList.add('open');
    if(btn)btn.setAttribute('aria-expanded','true');
    if(panel)panel.style.maxHeight=panel.scrollHeight+'px';
  }

  document.querySelectorAll('.faq-list').forEach(function(list){
    var items=list.querySelectorAll('.faq-item');
    items.forEach(function(item,i){
      var btn=item.querySelector('.faq-q');
      var panel=item.querySelector('.faq-a');
      if(!btn||!panel)return;
      var uid='faq-'+i+'-'+Math.random().toString(36).slice(2,7);
      btn.type='button';
      btn.id=uid+'-btn';
      btn.setAttribute('aria-expanded','false');
      btn.setAttribute('aria-controls',uid);
      panel.id=uid;
      panel.setAttribute('role','region');
      panel.setAttribute('aria-labelledby',uid+'-btn');
      if(!panel.querySelector('.faq-a-inner')){
        var inner=document.createElement('div');
        inner.className='faq-a-inner';
        while(panel.firstChild)inner.appendChild(panel.firstChild);
        panel.appendChild(inner);
      }
      btn.addEventListener('click',function(){
        var isOpen=item.classList.contains('open');
        items.forEach(function(other){if(other!==item)closeFaqItem(other);});
        if(isOpen)closeFaqItem(item);
        else openFaqItem(item);
      });
    });
  });

  addEventListener('resize',function(){
    document.querySelectorAll('.faq-item.open .faq-a').forEach(function(panel){
      panel.style.maxHeight=panel.scrollHeight+'px';
    });
  });
})();
`.trim();

const LEGACY_FAQ_SCRIPT =
  /document\.querySelectorAll\(['"]\.faq-q['"]\)\.forEach\([^;]+\);?\s*/g;

export const stripLegacyFaqScript = (script: string) =>
  script.replace(LEGACY_FAQ_SCRIPT, "");

export const appendSiteUxScript = (scripts: string[]) => {
  const cleaned = scripts.map(stripLegacyFaqScript);
  if (cleaned.some((s) => s.includes("initSiteUx"))) return cleaned;
  return [...cleaned, SITE_UX_SCRIPT];
};
