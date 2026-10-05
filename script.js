/* =========================================================
   IMRAN AHMAD AUWAL
   LUXURY AI ENGINEER PORTFOLIO — V2
   script.js
   ========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
   ========================================================= */

const menuButton = document.querySelector(".hamburger");
const navigation = document.querySelector(".navmenu");

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");

  });

}


/* Close mobile menu when a navigation link is clicked */

document.querySelectorAll(".navmenu a").forEach((link) => {

  link.addEventListener("click", () => {

    navigation?.classList.remove("open");

    menuButton?.setAttribute("aria-expanded", "false");

  });

});


/* =========================================================
   2. DARK / LIGHT MODE
   ========================================================= */

const modeButton = document.getElementById("mode");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

  document.body.classList.add("light");

}


/* Update theme button accessibility */

function updateThemeButton() {

  if (!modeButton) return;

  const lightMode =
    document.body.classList.contains("light");

  modeButton.setAttribute(
    "aria-label",
    lightMode
      ? "Switch to dark mode"
      : "Switch to light mode"
  );

  modeButton.setAttribute(
    "title",
    lightMode
      ? "Switch to dark mode"
      : "Switch to light mode"
  );

}


updateThemeButton();


if (modeButton) {

  modeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const currentTheme =
      document.body.classList.contains("light")
        ? "light"
        : "dark";

    localStorage.setItem(
      "portfolio-theme",
      currentTheme
    );

    updateThemeButton();

  });

}


/* =========================================================
   3. CURRENT YEAR
   ========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================================================
   4. SCROLL REVEAL
   ========================================================= */

const revealItems = document.querySelectorAll(
  ".project, .expertise-grid article, .experience article"
);


if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("seen");

          observer.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.08
    }

  );


  revealItems.forEach((element) => {

    observer.observe(element);

  });

} else {

  revealItems.forEach((element) => {

    element.classList.add("seen");

  });

}


/* =========================================================
   5. SMOOTH INTERNAL NAVIGATION
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId =
      link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target =
      document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* =========================================================
   6. ACTIVE NAVIGATION LINK
   ========================================================= */

const sections =
  document.querySelectorAll("section[id]");

const navLinks =
  document.querySelectorAll('.navmenu a[href^="#"]');


if ("IntersectionObserver" in window && sections.length) {

  const sectionObserver =
    new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          const currentId =
            entry.target.getAttribute("id");

          navLinks.forEach((link) => {

            const linkTarget =
              link.getAttribute("href");

            link.classList.toggle(
              "active",
              linkTarget === `#${currentId}`
            );

          });

        });

      },

      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0
      }

    );


  sections.forEach((section) => {

    sectionObserver.observe(section);

  });

}


/* =========================================================
   7. PROJECT / CARD INTERACTION
   ========================================================= */

document
  .querySelectorAll(".project, .expertise-grid article")
  .forEach((card) => {

    card.addEventListener("mouseenter", () => {

      card.classList.add("card-active");

    });


    card.addEventListener("mouseleave", () => {

      card.classList.remove("card-active");

    });

  });


/* =========================================================
   8. KEYBOARD ACCESSIBILITY
   ========================================================= */

document.addEventListener("keydown", (event) => {

  /* Escape closes the mobile menu */

  if (event.key === "Escape") {

    navigation?.classList.remove("open");

    menuButton?.setAttribute(
      "aria-expanded",
      "false"
    );

  }

});


/* =========================================================
   9. PREVENT MOBILE MENU FROM STAYING OPEN
      AFTER SCREEN RESIZE
   ========================================================= */

window.addEventListener("resize", () => {

  if (window.innerWidth > 850) {

    navigation?.classList.remove("open");

    menuButton?.setAttribute(
      "aria-expanded",
      "false"
    );

  }

});


/* =========================================================
   10. TERMINAL STATUS
   ========================================================= */

const terminalStatus =
  document.querySelector(".terminal code b");


if (terminalStatus) {

  const statusMessages = [
    "SYSTEM_READY",
    "MODEL_READY",
    "PIPELINE_ACTIVE",
    "EVALUATION_READY"
  ];

  let statusIndex = 0;

  setInterval(() => {

    statusIndex =
      (statusIndex + 1) %
      statusMessages.length;

    terminalStatus.textContent =
      statusMessages[statusIndex];

  }, 3500);

}


/* =========================================================
   11. SMALL HERO INTERACTION
   ========================================================= */

const core =
  document.querySelector(".core");


if (core) {

  core.addEventListener("mouseenter", () => {

    core.style.boxShadow =
      "0 0 120px rgba(215,180,106,.22), inset 0 0 60px rgba(77,229,224,.08)";

  });


  core.addEventListener("mouseleave", () => {

    core.style.boxShadow =
      "0 0 100px rgba(215,180,106,.12), inset 0 0 50px rgba(77,229,224,.05)";

  });

}


/* =========================================================
   12. CONSOLE BRANDING
   ========================================================= */

console.log(
  "%c IMRAN AHMAD AUWAL ",
  "background:#d7b46a;color:#05080c;font-weight:bold;padding:6px 10px;"
);

console.log(
  "%c Senior Full-Stack Software Engineer & AI Systems Specialist ",
  "color:#4de5e0;font-weight:bold;"
);

console.log(
  "%c AI • LLM Evaluation • Full-Stack Engineering • Agentic Systems ",
  "color:#91a0ad;"
);


/* =========================================================
   13. PAGE READY
   ========================================================= */

document.documentElement.classList.add(
  "js-ready"
);
