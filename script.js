const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
if (burger) {
  burger.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    burger.setAttribute('aria-expanded', String(!open));
  });
}
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('inview');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.16 });
document.querySelectorAll('[data-anim]').forEach(el => io.observe(el));
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const note = document.getElementById('formNote');
    note.textContent = 'Díky! Ozvu se ti co nejdřív na telefon nebo e‑mail.';
  });
}