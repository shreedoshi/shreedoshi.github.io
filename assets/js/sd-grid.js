/* Hero figure: a star field seen through barrel distortion that relaxes into a
   corrected, rectilinear grid. Plays once on load; static for reduced motion. */
(function () {
  "use strict";
  var svg = document.getElementById("sd-grid");
  if (!svg) return;

  var NS = "http://www.w3.org/2000/svg";
  var SIZE = 400, C = SIZE / 2, LINES = 10, STEPS = 32;
  var K0 = -0.26; /* starting radial distortion coefficient (barrel) */

  /* deterministic pseudo-random star field */
  var seed = 7;
  function rand() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
  var stars = [];
  for (var s = 0; s < 34; s++) {
    stars.push({ x: 18 + rand() * (SIZE - 36), y: 18 + rand() * (SIZE - 36), r: 0.9 + Math.pow(rand(), 3) * 3.2 });
  }

  function warp(x, y, k) {
    var dx = (x - C) / C, dy = (y - C) / C;
    var f = 1 + k * (dx * dx + dy * dy);
    return [C + dx * f * C, C + dy * f * C];
  }

  var gridGroup = document.createElementNS(NS, "g");
  gridGroup.setAttribute("class", "sd-grid__lines");
  var starGroup = document.createElementNS(NS, "g");
  starGroup.setAttribute("class", "sd-grid__stars");
  svg.appendChild(gridGroup);
  svg.appendChild(starGroup);

  var paths = [];
  for (var i = 0; i <= LINES; i++) {
    for (var dir = 0; dir < 2; dir++) {
      var p = document.createElementNS(NS, "path");
      gridGroup.appendChild(p);
      paths.push({ el: p, t: (i / LINES) * SIZE, horizontal: dir === 0 });
    }
  }
  var dots = stars.map(function (st) {
    var c = document.createElementNS(NS, "circle");
    c.setAttribute("r", st.r.toFixed(2));
    starGroup.appendChild(c);
    return c;
  });

  function draw(k) {
    paths.forEach(function (ln) {
      var d = "";
      for (var j = 0; j <= STEPS; j++) {
        var u = (j / STEPS) * SIZE;
        var pt = ln.horizontal ? warp(u, ln.t, k) : warp(ln.t, u, k);
        d += (j === 0 ? "M" : "L") + pt[0].toFixed(2) + " " + pt[1].toFixed(2);
      }
      ln.el.setAttribute("d", d);
    });
    stars.forEach(function (st, n) {
      var pt = warp(st.x, st.y, k);
      dots[n].setAttribute("cx", pt[0].toFixed(2));
      dots[n].setAttribute("cy", pt[1].toFixed(2));
    });
  }

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { draw(0); return; }

  draw(K0);
  var DURATION = 2200, DELAY = 500, start = null;
  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function frame(ts) {
    if (start === null) start = ts;
    var t = Math.min(1, (ts - start) / DURATION);
    draw(K0 * (1 - ease(t)));
    if (t < 1) window.requestAnimationFrame(frame);
  }
  window.setTimeout(function () { window.requestAnimationFrame(frame); }, DELAY);
})();
