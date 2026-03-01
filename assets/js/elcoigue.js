/**
 * El Coigue Viejo — JavaScript principal
 * Incluye: slider de fondo, navbar sticky, back-to-top, CounterUp, WOW.js
 */

document.addEventListener("DOMContentLoaded", function () {
  /* ====== SLIDESHOWS DE FONDO ====== */
  initSlideshow("hero-section", "borderBottomLeftRadius");
  initSlideshow("about-section", "borderTopRightRadius");
  initSlideshow("places-section", null);

  /* ====== PRELOADER ====== */
  var preloader = document.querySelector(".preloader");
  if (preloader) {
    window.addEventListener("load", function () {
      preloader.style.display = "none";
    });
    // Por si el evento load ya pasó
    setTimeout(function () {
      preloader.style.display = "none";
    }, 2500);
  }

  /* ====== NAVBAR TOGGLE (hamburguesa personalizada) ====== */
  var navToggler = document.querySelector(".navbar-toggler");
  if (navToggler) {
    navToggler.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }

  /* ====== NAVBAR STICKY AL HACER SCROLL ====== */
  var navbar = document.querySelector(".header_navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    });
  }

  /* ====== ACTIVE NAV LINK EN SCROLL ====== */
  var sections = document.querySelectorAll("section[id], div[id]");
  var navLinks = document.querySelectorAll(".navbar-nav .nav-item a");

  window.addEventListener("scroll", function () {
    var current = "";
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach(function (link) {
      link.closest(".nav-item").classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.closest(".nav-item").classList.add("active");
      }
    });
  });

  /* ====== SMOOTH SCROLL PARA ANCLAS ====== */
  document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        var href = this.getAttribute("href");
        // Ignorar enlaces vacíos o con atributos de Bootstrap (modales, carousels, etc.)
        if (
          href === "#" ||
          this.hasAttribute("data-toggle") ||
          this.hasAttribute("data-slide") ||
          this.hasAttribute("data-dismiss")
        ) {
          return;
        }
        var target;
        try {
          target = document.querySelector(href);
        } catch (err) {
          console.warn("Invalid selector:", href, err);
          return;
        }
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
          // Cerrar menú móvil si está abierto
          var collapse = document.getElementById("navbarNav");
          if (collapse && collapse.classList.contains("show")) {
            $(collapse).collapse("hide");
            var toggler = document.querySelector(".navbar-toggler");
            if (toggler) toggler.classList.remove("active");
          }
        }
      });
    });

  /* ====== BACK TO TOP ====== */
  var backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });
    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ====== WOW.js ====== */
  if (typeof WOW !== "undefined") {
    new WOW({ live: false }).init();
  }

  /* ====== COUNTER UP ====== */
  if (typeof jQuery !== "undefined" && $.fn.counterUp) {
    $(".counter").counterUp({ delay: 10, time: 1000 });
  }

  /* ====== FORMULARIO DE CONTACTO (Web3Forms AJAX) ====== */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var success = document.getElementById("form-success");
      var error = document.getElementById("form-error");
      btn.disabled = true;
      btn.textContent = "Enviando...";
      if (success) success.style.display = "none";
      if (error) error.style.display = "none";

      fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.success) {
            form.reset();
            if (success) success.style.display = "block";
            btn.textContent = "¡Enviado!";
          } else {
            btn.disabled = false;
            btn.textContent = "Enviar mensaje";
            if (error) error.style.display = "block";
          }
        })
        .catch(function () {
          btn.disabled = false;
          btn.textContent = "Enviar mensaje";
          if (error) error.style.display = "block";
        });
    });
  }
});

/* ====== FUNCIÓN SLIDESHOW DE FONDO ====== */
function initSlideshow(containerId, roundedProp) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var images = JSON.parse(container.getAttribute("data-variable"));
  if (!images || images.length === 0) return;

  var currentIndex = 0;

  // Div de transición
  var overlay = document.createElement("div");
  overlay.style.cssText = [
    "position:absolute",
    "top:0",
    "left:0",
    "width:100%",
    "height:100%",
    "background-size:cover",
    "background-position:center center",
    "transition:opacity 1s ease-in-out",
    "opacity:0",
  ].join(";");
  if (roundedProp) {
    overlay.style[roundedProp] = "5rem";
  }
  container.appendChild(overlay);

  function changeImage() {
    overlay.style.backgroundImage = "url(" + images[currentIndex] + ")";
    overlay.style.opacity = "1";
    setTimeout(function () {
      container.style.backgroundImage = "url(" + images[currentIndex] + ")";
      overlay.style.opacity = "0";
      currentIndex = (currentIndex + 1) % images.length;
    }, 1000);
  }

  // Primera llamada y luego cada 5 s
  changeImage();
  setInterval(changeImage, 5000);
}
