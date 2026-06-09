export const NAV_DRAWER_CSS = `
/* ——— Bandeau & menu déployable ——— */
.nav,
.site-header-inner {
  padding: 12px 24px;
}
.nav.scrolled {
  padding: 10px 24px;
}
.nav-toggle {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px 2px 6px 10px;
  z-index: 60;
  flex-shrink: 0;
}
.nav-toggle::after {
  content: "Menu";
  font-family: var(--sans, var(--font-instrument-sans), sans-serif);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--cream, #f6f1e7);
}
.nav.open .nav-toggle::after {
  content: "Fermer";
}
.nav-toggle-bars {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 24px;
  height: 24px;
}
.nav-toggle-bars span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--cream, #f6f1e7);
  margin: 4px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.nav.open .nav-toggle-bars span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}
.nav.open .nav-toggle-bars span:nth-child(2) {
  opacity: 0;
}
.nav.open .nav-toggle-bars span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}
.nav-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 37, 64, 0.5);
  z-index: 48;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease;
}
.nav.open .nav-overlay,
.nav-overlay.open {
  opacity: 1;
  pointer-events: auto;
}
.nav-links,
.site-nav-drawer {
  position: fixed !important;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(400px, 92vw);
  background: rgba(10, 37, 64, 0.98);
  backdrop-filter: blur(12px);
  display: flex !important;
  flex-direction: column !important;
  align-items: stretch !important;
  justify-content: center !important;
  padding: 80px 36px 40px !important;
  gap: 0 !important;
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 55;
  box-shadow: -16px 0 48px rgba(0, 0, 0, 0.3);
  list-style: none;
}
.nav.open .nav-links,
.nav.open .site-nav-drawer {
  transform: translateX(0);
}
.nav-links::before,
.site-nav-drawer::before {
  content: "Navigation";
  display: block;
  font-family: var(--sans, var(--font-instrument-sans), sans-serif);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold, #c19a5b);
  margin-bottom: 28px;
}
.nav-links a,
.site-nav-drawer a {
  display: block !important;
  font-family: var(--serif, var(--font-fraunces), Georgia, serif) !important;
  font-size: clamp(1.35rem, 4.5vw, 1.75rem) !important;
  font-weight: 500 !important;
  line-height: 1.25 !important;
  color: var(--cream, #f6f1e7) !important;
  opacity: 1 !important;
  letter-spacing: 0.01em !important;
  padding: 18px 0 !important;
  border-bottom: 1px solid rgba(246, 241, 231, 0.12);
  transition: color 0.2s ease, padding-left 0.2s ease;
}
.nav-links a:hover,
.nav-links a.active,
.site-nav-drawer a:hover {
  color: var(--gold, #c19a5b) !important;
  padding-left: 6px !important;
}
.nav-links .nav-cta,
.site-nav-drawer .nav-cta,
.site-nav-drawer .site-header-cta {
  margin-top: 28px;
  text-align: center;
  font-family: var(--sans, var(--font-instrument-sans), sans-serif) !important;
  font-size: 0.88rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.16em !important;
  text-transform: uppercase;
  padding: 16px 24px !important;
  border: 1px solid var(--gold, #c19a5b) !important;
  border-radius: 2px;
  color: var(--gold, #c19a5b) !important;
}
.nav-links .nav-cta:hover,
.site-nav-drawer .nav-cta:hover,
.site-nav-drawer .site-header-cta:hover {
  background: var(--gold, #c19a5b);
  color: var(--navy, #0a2540) !important;
  padding-left: 24px !important;
}
`;

export const SITE_UX_CSS = `
:root {
  --serif: var(--font-fraunces), Georgia, serif;
  --sans: var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif;
}

:focus-visible {
  outline: 2px solid #c19a5b;
  outline-offset: 3px;
}

/* ——— Identité visuelle ——— */
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  line-height: 0;
  text-decoration: none;
  flex-shrink: 0;
}
.brand img,
.foot-brand img {
  display: block;
  height: auto;
  width: auto;
  max-width: 100%;
}
.brand-wordmark {
  height: clamp(32px, 7vw, 44px);
  width: auto;
  max-width: min(220px, 52vw);
}
.foot-brand {
  line-height: 0;
}
.foot-brand img {
  height: clamp(44px, 10vw, 58px);
  width: auto;
  max-width: min(280px, 90vw);
}
.brand img[src*="logo-vertical"] {
  height: clamp(72px, 16vw, 120px);
  width: auto;
  margin: 0 auto;
}
/* ——— Ancres & sections ——— */
#faq,
#contact,
#offre,
#realisations,
#actualites {
  scroll-margin-top: 72px;
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

/* ——— Galerie réalisations — diaporama ——— */
.gallery .gphoto {
  cursor: pointer;
}
.gallery-lightbox {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(16px, 4vw, 40px);
  background: rgba(10, 37, 64, 0.94);
  backdrop-filter: blur(8px);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}
.gallery-lightbox.open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.gallery-lightbox-stage {
  position: relative;
  width: min(1100px, 100%);
  max-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.gallery-lightbox-img {
  display: block;
  max-width: 100%;
  max-height: calc(100vh - 160px);
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 3px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
}
.gallery-lightbox-cap {
  color: var(--cream, #f6f1e7);
  font-size: clamp(0.88rem, 2vw, 1rem);
  text-align: center;
  letter-spacing: 0.03em;
  max-width: 60ch;
  line-height: 1.5;
}
.gallery-lightbox-count {
  color: var(--gold, #c19a5b);
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.gallery-lightbox-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(246, 241, 231, 0.08);
  border: 1px solid rgba(193, 154, 91, 0.45);
  color: var(--cream, #f6f1e7);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.4rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, border-color 0.2s ease;
}
.gallery-lightbox-btn:hover {
  background: rgba(193, 154, 91, 0.25);
  border-color: var(--gold, #c19a5b);
}
.gallery-lightbox-btn:disabled {
  opacity: 0.25;
  cursor: default;
}
.gallery-lightbox-prev {
  left: clamp(8px, 2vw, 24px);
}
.gallery-lightbox-next {
  right: clamp(8px, 2vw, 24px);
}
.gallery-lightbox-close {
  position: absolute;
  top: clamp(12px, 3vw, 24px);
  right: clamp(12px, 3vw, 24px);
  background: none;
  border: none;
  color: var(--cream, #f6f1e7);
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  opacity: 0.75;
  padding: 8px;
  transition: opacity 0.2s ease;
}
.gallery-lightbox-close:hover {
  opacity: 1;
}
@media (max-width: 640px) {
  .gallery-lightbox-btn {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
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
    toggle.innerHTML='<span class="nav-toggle-bars" aria-hidden="true"><span></span><span></span><span></span></span>';
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

  if(!document.querySelector('.gallery-lightbox')){
    var slides=[];
    var slideIndex=0;
    var lightbox=document.createElement('div');
    lightbox.className='gallery-lightbox';
    lightbox.setAttribute('role','dialog');
    lightbox.setAttribute('aria-modal','true');
    lightbox.setAttribute('aria-label','Diaporama photos');
    lightbox.setAttribute('aria-hidden','true');
    lightbox.innerHTML=
      '<button type="button" class="gallery-lightbox-close" aria-label="Fermer">&times;</button>'+
      '<button type="button" class="gallery-lightbox-btn gallery-lightbox-prev" aria-label="Photo précédente">&#8249;</button>'+
      '<button type="button" class="gallery-lightbox-btn gallery-lightbox-next" aria-label="Photo suivante">&#8250;</button>'+
      '<div class="gallery-lightbox-stage">'+
        '<img class="gallery-lightbox-img" src="" alt="">'+
        '<p class="gallery-lightbox-cap"></p>'+
        '<span class="gallery-lightbox-count"></span>'+
      '</div>';
    document.body.appendChild(lightbox);
    var lbImg=lightbox.querySelector('.gallery-lightbox-img');
    var lbCap=lightbox.querySelector('.gallery-lightbox-cap');
    var lbCount=lightbox.querySelector('.gallery-lightbox-count');
    var lbPrev=lightbox.querySelector('.gallery-lightbox-prev');
    var lbNext=lightbox.querySelector('.gallery-lightbox-next');
    var lbClose=lightbox.querySelector('.gallery-lightbox-close');
    function renderSlide(){
      var slide=slides[slideIndex];
      if(!slide)return;
      lbImg.src=slide.src;
      lbImg.alt=slide.alt;
      lbCap.textContent=slide.cap;
      lbCount.textContent=(slideIndex+1)+' / '+slides.length;
      lbPrev.disabled=slideIndex===0;
      lbNext.disabled=slideIndex===slides.length-1;
    }
    function closeLightbox(){
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden','true');
      document.body.style.overflow='';
      lbImg.removeAttribute('src');
    }
    function openLightbox(startIndex){
      slideIndex=startIndex;
      renderSlide();
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden','false');
      document.body.style.overflow='hidden';
      lbClose.focus();
    }
    function step(delta){
      var next=slideIndex+delta;
      if(next<0||next>=slides.length)return;
      slideIndex=next;
      renderSlide();
    }
    lbPrev.addEventListener('click',function(){step(-1);});
    lbNext.addEventListener('click',function(){step(1);});
    lbClose.addEventListener('click',closeLightbox);
    lightbox.addEventListener('click',function(e){
      if(e.target===lightbox)closeLightbox();
    });
    document.addEventListener('keydown',function(e){
      if(!lightbox.classList.contains('open'))return;
      if(e.key==='Escape')closeLightbox();
      if(e.key==='ArrowLeft')step(-1);
      if(e.key==='ArrowRight')step(1);
    });
    document.querySelectorAll('.gallery .gphoto').forEach(function(photo){
      photo.setAttribute('role','button');
      photo.setAttribute('tabindex','0');
      photo.setAttribute('aria-label','Ouvrir le diaporama');
      function openFromPhoto(){
        var gallery=photo.closest('.gallery');
        if(!gallery)return;
        slides=Array.from(gallery.querySelectorAll('.gphoto')).map(function(item){
          var img=item.querySelector('img');
          var cap=item.querySelector('.cap');
          return{
            src:img?img.getAttribute('src'):'',
            alt:img?img.getAttribute('alt')||'':'',
            cap:cap?cap.textContent.trim():''
          };
        }).filter(function(s){return s.src;});
        var idx=Array.from(gallery.querySelectorAll('.gphoto')).indexOf(photo);
        openLightbox(Math.max(0,idx));
      }
      photo.addEventListener('click',openFromPhoto);
      photo.addEventListener('keydown',function(e){
        if(e.key==='Enter'||e.key===' '){
          e.preventDefault();
          openFromPhoto();
        }
      });
    });
  }
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
