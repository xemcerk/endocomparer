// EndoComparer project page — small, dependency-free interactions.
(function () {
  "use strict";

  // ---- theme toggle (system by default; explicit choice remembered per browser) ----
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  function stored() { try { return localStorage.getItem("theme"); } catch (e) { return null; } }
  function apply(t) {
    if (t === "light" || t === "dark") root.setAttribute("data-theme", t);
    else root.removeAttribute("data-theme");
    if (btn) btn.setAttribute("aria-label", "Theme: " + (t || "system") + " (click to change)");
  }
  apply(stored());
  if (btn) {
    btn.addEventListener("click", function () {
      var cur = stored();
      var dark = root.getAttribute("data-theme") === "dark" ||
        (!root.getAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
      var next = cur ? null : (dark ? "light" : "dark"); // system -> opposite of current; explicit -> back to system
      try { if (next) localStorage.setItem("theme", next); else localStorage.removeItem("theme"); } catch (e) { /* ignore */ }
      apply(next);
    });
  }
})();
