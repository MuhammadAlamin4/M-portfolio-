// Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const response = document.getElementById('response-message');

  if (name && email && message) {
    response.textContent = `Thank you, ${name}, your message has been sent!`;
    this.reset();
  } else {
    response.textContent = 'Please fill in all the fields.';
  }
});

// Muhammad Button
document.getElementById('name-button').addEventListener('click', () => {
  alert("👋 Welcome! I'm Muhammad Alamin. Enjoy exploring my portfolio.");
});

// Enable music on click (autoplay policy fix)
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");

  document.body.addEventListener("click", () => {
    audio.muted = false;
    audio.play();
  }, { once: true });
});

// Nigeria Map
const map = L.map('map').setView([9.0820, 8.6753], 6); // Nigeria

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([9.0820, 8.6753])
  .addTo(map)
  .bindPopup('Muhammad Alamin - Nigeria')
  .openPopup();