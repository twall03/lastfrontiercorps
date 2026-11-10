// Read-only launch tracker. Steps come from steps.json in this folder.
(function () {
  var PHASES = [
    ['Decide the route', 'Choices that shape everything after: who is on the board, and whether to borrow another nonprofit\'s tax status while your own is pending.'],
    ['Form the Alaska corporation', 'The nonprofit has to exist as a legal entity in Alaska before the IRS will consider it.'],
    ['Get federal 501(c)(3) status', 'This is what makes donations tax-deductible and what nearly every grant maker requires.'],
    ['Be legal to fundraise and run trips', 'State fundraising registration, insurance, permits and participant safety.'],
    ['Be ready to receive money', 'What a donor or grant reviewer checks before giving.'],
    ['Funders to pursue', 'Where the money can come from, roughly in the order a new organization can realistically win it.']
  ];
  var LABEL = { todo: 'To do', doing: 'In progress', done: 'Done', blocked: 'Blocked', skip: 'Not needed' };
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }

  fetch('/tracker/steps.json').then(function (r) { if (!r.ok) throw 0; return r.json(); }).then(function (data) {
    var steps = data.steps, root = $('phases');
    root.textContent = '';
    var live = steps.filter(function (s) { return s.status !== 'skip'; });
    var count = function (st) { return steps.filter(function (s) { return s.status === st; }).length; };
    var done = count('done');
    $('done-n').textContent = done;
    $('done-of').textContent = 'of ' + live.length + ' steps done';
    $('bar').style.width = Math.round(done / live.length * 100) + '%';
    $('tally').textContent = count('doing') + ' in progress · ' + count('blocked') + ' blocked · ' + count('todo') + ' to do';
    var next = steps.filter(function (s) { return s.phase !== 6 && (s.status === 'todo' || s.status === 'doing' || s.status === 'blocked'); })[0];
    $('next-title').textContent = next ? next.title : 'Every setup step is done';
    if (data.updated) $('updated').textContent = 'Last updated ' + data.updated + '.';

    PHASES.forEach(function (p, i) {
      var mine = steps.filter(function (s) { return s.phase === i + 1; });
      if (!mine.length) return;
      var sec = el('section', 'tk-phase'), head = el('div', 'tk-phase-head'), h2 = el('h2');
      h2.appendChild(el('small', null, 'PHASE ' + (i + 1)));
      h2.appendChild(document.createTextNode(p[0]));
      var counted = mine.filter(function (s) { return s.status !== 'skip'; });
      head.appendChild(h2);
      head.appendChild(el('span', 'tk-prog', counted.filter(function (s) { return s.status === 'done'; }).length + ' of ' + counted.length + ' done'));
      sec.appendChild(head);
      sec.appendChild(el('p', 'tk-blurb', p[1]));
      var list = el('div', 'tk-steps');
      mine.forEach(function (s) {
        var d = el('details', 'tk-step'); d.setAttribute('data-s', s.status || 'todo');
        var sum = el('summary');
        sum.appendChild(el('span', 'tk-pill', LABEL[s.status] || LABEL.todo));
        sum.appendChild(el('span', 'tk-title', s.title));
        d.appendChild(sum);
        var more = el('div', 'tk-more');
        if (s.detail) more.appendChild(el('p', null, s.detail));
        var facts = el('div', 'tk-facts');
        if (s.cost) facts.appendChild(el('span', null, 'Cost: ' + s.cost));
        if (s.when) facts.appendChild(el('span', null, 'Timing: ' + s.when));
        if (s.link && /^https:\/\//.test(s.link)) {
          var a = el('a', null, s.linkLabel || 'Official page'); a.href = s.link; a.target = '_blank'; a.rel = 'noopener';
          facts.appendChild(a);
        }
        if (facts.childNodes.length) more.appendChild(facts);
        d.appendChild(more);
        list.appendChild(d);
      });
      sec.appendChild(list);
      root.appendChild(sec);
    });
  }).catch(function () { $('phases').textContent = 'The steps could not be loaded. Refresh the page to try again.'; });
})();
