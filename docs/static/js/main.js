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

  // ---- swap control on the task example ----
  // Exchanging Video 1 and Video 2 exchanges the two perception statements and maps the
  // answer through the swap map: "better in Video 1" <-> "better in Video 2".
  var ex = document.getElementById("example");
  var swapBtn = document.getElementById("swap-btn");
  if (ex && swapBtn) {
    var swapped = false;
    var strips = ex.querySelector(".strips");
    var s1 = ex.querySelector(".strip.v1");
    var s2 = ex.querySelector(".strip.v2");
    var opts = ex.querySelectorAll(".options li");
    var ans = ex.querySelector(".answer .line");
    var state = ex.querySelector("#swap-state");
    var original = {
      answer: ans.innerHTML,
      correct: Array.prototype.map.call(opts, function (li) { return li.classList.contains("correct"); })
    };
    swapBtn.addEventListener("click", function () {
      swapped = !swapped;
      // reorder the strips; the labels "Video 1" / "Video 2" stay with the slot, the frames move
      if (swapped) { strips.insertBefore(s2, s1); } else { strips.insertBefore(s1, s2); }
      s1.classList.toggle("v1", !swapped); s1.classList.toggle("v2", swapped);
      s2.classList.toggle("v2", !swapped); s2.classList.toggle("v1", swapped);
      s1.querySelector(".label span").textContent = swapped ? "Video 2" : "Video 1";
      s2.querySelector(".label span").textContent = swapped ? "Video 1" : "Video 2";
      // correct option moves from (a) "clearly better in Video 1" to (c) "clearly better in Video 2"
      opts.forEach(function (li, i) {
        var on = swapped ? li.getAttribute("data-swap-correct") === "1" : original.correct[i];
        li.classList.toggle("correct", on);
        li.querySelector(".why").textContent = on ? "correct" : li.getAttribute("data-role");
      });
      ans.innerHTML = swapped ? ans.getAttribute("data-swapped") : original.answer;
      if (state) state.textContent = swapped
        ? "Swapped order: the facts are the same, but the correct letter moves to (c)."
        : "Release order. Press swap to see how the swap control re-labels the item.";
      swapBtn.querySelector("span").textContent = swapped ? "Restore order" : "Swap Video 1 ↔ Video 2";
    });
  }

  // ---- copy BibTeX ----
  var copy = document.getElementById("copy-bib");
  if (copy) {
    copy.addEventListener("click", function () {
      var txt = document.getElementById("bibtex").textContent;
      function done() { copy.textContent = "Copied"; setTimeout(function () { copy.textContent = "Copy"; }, 1600); }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, done);
      else { var r = document.createRange(); r.selectNodeContents(document.getElementById("bibtex")); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); done(); }
    });
  }
})();
