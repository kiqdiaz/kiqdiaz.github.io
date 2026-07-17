document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  const navToggle = document.getElementById('navToggle');
  const navLinksEl = document.getElementById('navLinks');

  function showSection(id) {
    sections.forEach(s => s.classList.remove('active'));
    navLinks.forEach(l => l.classList.remove('active'));

    const target = document.getElementById(id);
    if (target) target.classList.add('active');

    navLinks.forEach(l => { if (l.dataset.section === id) l.classList.add('active'); });
    navLinksEl.classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('[data-section]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      showSection(el.dataset.section);
    });
  });

  navToggle.addEventListener('click', () => navLinksEl.classList.toggle('open'));

  // Close mobile menu clicking outside
  document.addEventListener('click', e => {
    if (!e.target.closest('header')) navLinksEl.classList.remove('open');
  });
});
