(function () {
  "use strict";

  var cfg = window.SITE_CONFIG;
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- WhatsApp links ---------- */
  var waUrl = "https://wa.me/" + cfg.contact.whatsappNumber +
    "?text=" + encodeURIComponent(cfg.contact.whatsappMessage);
  $$("[data-wa]").forEach(function (a) { a.href = waUrl; });

  /* ---------- Materials ---------- */
  var mat = $("[data-materials]");
  if (mat) mat.innerHTML = cfg.materials.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("");

  /* ---------- Services ---------- */
  var icons = {
    install: '<path d="M4 20V11l8-6 8 6v9"/><path d="M2 12 12 4l10 8"/><path d="M9 20v-5h6v5"/>',
    repair: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5Z"/>',
    replace: '<path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 21v-5h5"/>',
    tile: '<path d="M3 8c2 0 2 2 4.5 2S9.5 8 12 8s2 2 4.5 2S19 8 21 8"/><path d="M3 13c2 0 2 2 4.5 2s2-2 4.5-2 2 2 4.5 2 2.5-2 4.5-2"/><path d="M3 18c2 0 2 2 4.5 2s2-2 4.5-2 2 2 4.5 2 2.5-2 4.5-2"/>',
    metal: '<path d="M3 6h18v12H3z"/><path d="M7 6v12M11 6v12M15 6v12M19 6v12"/>',
    water: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/><path d="M9 14a3 3 0 0 0 3 3"/>',
    inspect: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/><path d="m8 10.5 2 2 3.5-4"/>',
    contract: '<path d="M2 20h20"/><path d="M5 20V9h6v11"/><path d="M11 13h8v7"/><path d="M5 9l3-5 3 5"/><path d="M14 16h2"/>',
    home: '<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><path d="M12 17v-4"/><path d="M10 15h4"/>',
  };
  function svgIcon(name) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (icons[name] || icons.install) + "</svg>";
  }

  var visibleServices = cfg.services.filter(function (s) { return s.show; });
  var grid = $("[data-services]");
  if (grid) {
    grid.innerHTML = visibleServices.map(function (s) {
      var featured = s.id === "general-contracting" ? " service-card--featured" : "";
      var href = s.id === "general-contracting" ? "#contracting" : "#quote";
      return '<article class="service-card' + featured + '" id="svc-' + esc(s.id) + '">' +
        '<div class="service-icon">' + svgIcon(s.icon) + "</div>" +
        "<h3>" + esc(s.title) + "</h3>" +
        "<p>" + esc(s.text) + "</p>" +
        '<a class="link-arrow" href="' + href + '" data-service="' + esc(s.title) + '">' +
        (href === "#quote" ? "Get a quote" : "Learn more") +
        '<span class="sr-only"> for ' + esc(s.title) + "</span></a>" +
        "</article>";
    }).join("");
  }

  var footerSvc = $("[data-footer-services]");
  if (footerSvc) {
    footerSvc.innerHTML = visibleServices.map(function (s) {
      return '<li><a href="#svc-' + esc(s.id) + '">' + esc(s.title) + "</a></li>";
    }).join("");
  }

  // "Get a quote" on a service card preselects that service in the form
  document.addEventListener("click", function (e) {
    var link = e.target.closest && e.target.closest("[data-service]");
    if (!link || link.getAttribute("href") !== "#quote") return;
    var select = $("#f-service");
    var name = link.getAttribute("data-service");
    $$("option", select).forEach(function (o) { if (o.value === name || o.text === name) select.value = o.value || o.text; });
  });

  /* ---------- Projects gallery ---------- */
  var filtersEl = $("[data-filters]");
  var galleryEl = $("[data-gallery]");
  function renderGallery(cat) {
    var items = cfg.projects.filter(function (p) { return cat === "All" || p.category === cat; });
    if (!items.length) {
      galleryEl.innerHTML = '<p class="gallery-empty">Photos for <strong>' + esc(cat) +
        '</strong> are coming soon. Ask us about this service on <a data-wa href="' + waUrl +
        '" target="_blank" rel="noopener">WhatsApp</a>.</p>';
      return;
    }
    galleryEl.innerHTML = items.map(function (p) {
      return '<figure class="gallery-item"><img src="' + esc(p.img) + '" alt="' + esc(p.caption) +
        '" loading="lazy" /><figcaption><span>' + esc(p.category) + "</span>" + esc(p.caption) + "</figcaption></figure>";
    }).join("");
  }
  if (filtersEl && galleryEl) {
    var cats = ["All"].concat(cfg.projectCategories);
    filtersEl.innerHTML = cats.map(function (c, i) {
      return '<button type="button" role="tab" class="filter-btn" aria-selected="' + (i === 0) + '" data-cat="' + esc(c) + '">' + esc(c) + "</button>";
    }).join("");
    filtersEl.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (!btn) return;
      $$(".filter-btn", filtersEl).forEach(function (b) { b.setAttribute("aria-selected", String(b === btn)); });
      renderGallery(btn.getAttribute("data-cat"));
    });
    renderGallery("All");
  }

  /* ---------- FAQ ---------- */
  var faqEl = $("[data-faqs]");
  if (faqEl) {
    faqEl.innerHTML = cfg.faqs.map(function (f) {
      return '<details class="faq-item"><summary>' + esc(f.q) + '<span class="faq-icon" aria-hidden="true"></span></summary><div class="faq-a"><p>' + esc(f.a) + "</p></div></details>";
    }).join("");
  }

  /* ---------- Social links ---------- */
  var socialEl = $("[data-socials]");
  if (socialEl) {
    socialEl.innerHTML = cfg.social.map(function (s) {
      var icon = '<svg aria-hidden="true"><use href="#ic-' + esc(s.network) + '"/></svg>';
      if (s.url) {
        return '<a class="social" href="' + esc(s.url) + '" target="_blank" rel="noopener" aria-label="' + esc(s.label) + '">' + icon + "</a>";
      }
      // Unconfirmed profile: inactive icon, no link
      return '<span class="social is-inactive" role="img" aria-label="' + esc(s.label) + ' profile coming soon" title="' + esc(s.label) + ' link coming soon">' + icon + "</span>";
    }).join("");
  }

  /* ---------- Year ---------- */
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Header + mobile nav ---------- */
  var header = $(".site-header");
  var toggle = $(".nav-toggle");
  var nav = $("#main-nav");
  function setNav(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("nav-open", open);
  }
  toggle.addEventListener("click", function () { setNav(toggle.getAttribute("aria-expanded") !== "true"); });
  $$("a", nav).forEach(function (a) { a.addEventListener("click", function () { setNav(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setNav(false); });
  function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 20); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Quote form ---------- */
  var form = $(".quote-form");
  if (!form) return;
  var status = $(".form-status", form);

  var rules = [
    { el: "#f-name", err: "#e-name", test: function (v) { return v.trim().length >= 2; }, msg: "Please enter your full name." },
    { el: "#f-phone", err: "#e-phone", test: function (v) { return /^\+?[\d\s()-]{7,20}$/.test(v.trim()) && v.replace(/\D/g, "").length >= 7; }, msg: "Please enter a valid phone number, e.g. 0803 000 0000." },
    { el: "#f-email", err: "#e-email", test: function (v) { return !v.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()); }, msg: "Please enter a valid email address, or leave it blank." },
    { el: "#f-service", err: "#e-service", test: function (v) { return v !== ""; }, msg: "Please choose the service you need." },
    { el: "#f-location", err: "#e-location", test: function (v) { return v.trim().length >= 2; }, msg: "Please tell us where the project is." },
    { el: "#f-desc", err: "#e-desc", test: function (v) { return v.trim().length >= 10; }, msg: "Please describe your project in a few words (at least 10 characters)." },
  ];

  function checkField(r) {
    var input = $(r.el, form);
    var ok = r.test(input.value);
    input.setAttribute("aria-invalid", String(!ok));
    $(r.err, form).textContent = ok ? "" : r.msg;
    return ok;
  }
  function checkMethod() {
    var ok = !!$('input[name="contact-method"]:checked', form);
    $("#e-method", form).textContent = ok ? "" : "Please choose how you would like us to contact you.";
    return ok;
  }
  rules.forEach(function (r) {
    $(r.el, form).addEventListener("blur", function () { checkField(r); });
  });
  $$('input[name="contact-method"]', form).forEach(function (radio) {
    radio.addEventListener("change", checkMethod);
  });

  function showStatus(kind, html) {
    status.hidden = false;
    status.className = "form-status is-" + kind;
    status.innerHTML = html;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var results = rules.map(checkField);
    var methodOk = checkMethod();
    var method = $('input[name="contact-method"]:checked', form);
    if (method && method.value === "Email" && !$("#f-email", form).value.trim()) {
      $("#e-email", form).textContent = "Please add your email, since you prefer email contact.";
      $("#f-email", form).setAttribute("aria-invalid", "true");
      results.push(false);
    }
    if (results.indexOf(false) !== -1 || !methodOk) {
      showStatus("error", "Please fix the highlighted fields and try again.");
      var firstBad = $('[aria-invalid="true"]', form) || $('input[name="contact-method"]', form);
      if (firstBad) firstBad.focus();
      return;
    }

    var btn = $('button[type="submit"]', form);
    btn.disabled = true;
    btn.textContent = "Sending...";
    status.hidden = true;

    var body = new URLSearchParams(new FormData(form)).toString();
    fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        form.reset();
        showStatus("success", "<strong>Thank you!</strong> Your request has been sent. We will contact you soon.");
      })
      .catch(function () {
        // Only show success when the submission really went through
        showStatus("error", "Sorry, we could not send your request right now. Please try again, or message us on " +
          '<a href="' + waUrl + '" target="_blank" rel="noopener">WhatsApp</a> or call <a href="tel:+2348038116293">0803 811 6293</a>.');
      })
      .then(function () {
        btn.disabled = false;
        btn.textContent = "Send My Request";
      });
  });
})();
