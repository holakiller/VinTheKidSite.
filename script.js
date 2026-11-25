const intro = document.getElementById('intro');
let introTimer;
function closeIntro() {
  if (!intro) return;
  window.clearTimeout(introTimer);
  intro.classList.add('finished');
}
window.addEventListener('load', () => {
  introTimer = window.setTimeout(closeIntro, 4300);
});
document.getElementById('skipIntro')?.addEventListener('click', closeIntro);
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('contactForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const subject = encodeURIComponent(`Website message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  document.getElementById('formHint').textContent = 'Opening your email app…';
  window.location.href = `mailto:oshandilhara08@gmail.com?subject=${subject}&body=${body}`;
});
