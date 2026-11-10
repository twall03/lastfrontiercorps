// Last Frontier Corps — small progressive enhancements. The site works without JS.
(function () {
  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Donation amount picker
  var impact = {
    50: '$50 provides a day of meals for a veteran on a trip.',
    150: '$150 helps outfit a veteran with a sleeping bag and pad for the trail.',
    500: '$500 covers guide and peer-mentor support for one day of a trip.',
    1500: '$1,500 helps send one veteran on a full trip, from travel to trailhead.'
  };
  var amounts = document.querySelectorAll('.amount');
  var line = document.getElementById('impact-line');
  var link = document.getElementById('donate-link');
  amounts.forEach(function (btn) {
    btn.addEventListener('click', function () {
      amounts.forEach(function (b) { b.setAttribute('aria-checked', 'false'); });
      btn.setAttribute('aria-checked', 'true');
      var amt = Number(btn.dataset.amount);
      var label = '$' + amt.toLocaleString('en-US');
      if (line) line.textContent = impact[amt];
      if (link) {
        link.textContent = 'Give ' + label;
        link.dataset.message = "I'd like to give " + label + '.';
      }
    });
  });

  // Buttons that lead to the contact form pre-select who is writing and why
  var role = document.getElementById('contact-role');
  var message = document.getElementById('contact-message');
  document.querySelectorAll('a[data-role]').forEach(function (a) {
    a.addEventListener('click', function () {
      if (role) role.value = a.dataset.role;
      if (message && a.dataset.message) message.value = a.dataset.message + ' ';
      if (message) setTimeout(function () { message.focus({ preventScroll: true }); }, 0);
    });
  });

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
