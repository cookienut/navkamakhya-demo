// Navkamakhya — shared site behavior
document.addEventListener('DOMContentLoaded', function () {
  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close menu when a link is clicked (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Contact form -> mailto (static site, no backend)
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = encodeURIComponent(document.getElementById('name').value);
      var company = encodeURIComponent(document.getElementById('company').value);
      var email = encodeURIComponent(document.getElementById('email').value);
      var vessel = encodeURIComponent(document.getElementById('vessel').value);
      var message = encodeURIComponent(document.getElementById('message').value);

      var subject = encodeURIComponent('Manning Enquiry — ' + decodeURIComponent(name || 'Website Enquiry'));
      var body =
        'Name: ' + decodeURIComponent(name) + '\n' +
        'Company: ' + decodeURIComponent(company) + '\n' +
        'Email: ' + decodeURIComponent(email) + '\n' +
        'Vessel type: ' + decodeURIComponent(vessel) + '\n\n' +
        'Message:\n' + decodeURIComponent(message);

      window.location.href = 'mailto:info@navkamakhya.com?subject=' + subject + '&body=' + encodeURIComponent(body);
    });
  }
});
