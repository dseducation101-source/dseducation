 /* FAQ Toggle */
  function toggleFaq(el) {
    var item = el.closest('.faq-item');
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('open'); });
    if (!isOpen) item.classList.add('open');
  }
 
 /* Mobile Menu */
  function toggleMenu(btn) {
    var nav = document.getElementById('mobileNav');
    if (!nav) return;
    nav.classList.toggle('open');
    if (btn) {
      var isOpen = nav.classList.contains('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    }
  }

  function closeMenu() {
    var nav = document.getElementById('mobileNav');
    var hamburger = document.querySelector('.nav-hamburger');
    if (!nav) return;
    nav.classList.remove('open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
  }
 
  /* Close mobile nav on outside click */
  document.addEventListener('click', function(e) {
    var nav = document.getElementById('mobileNav');
    var hamburger = document.querySelector('.nav-hamburger');
    if (!nav || !hamburger) return;
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMenu();
  });
 
  /* Keep in-page links simple and close the mobile menu when used */
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function() {
      if (a.closest('.nav-mobile')) closeMenu();
    });
  });
 
  /* Scroll-based nav active */
  var allSections = document.querySelectorAll('[id]');
  var allNavLinks = document.querySelectorAll('.nav-links a');
  var mobileNavLinks = document.querySelectorAll('.nav-mobile a');
 
  window.addEventListener('scroll', function() {
    var current = '';
    allSections.forEach(function(s) {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    allNavLinks.forEach(function(a) {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
    mobileNavLinks.forEach(function(a) {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  });
