/* =========================================================
   RAMAGIRI CHAKRAVARDHAN PORTFOLIO
   Main JavaScript
   ========================================================= */

   document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("open");

            if (navMenu.classList.contains("open")) {
                menuButton.textContent = "✕";
            } else {
                menuButton.textContent = "☰";
            }
        });


        // Close menu after clicking a navigation link

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");
                menuButton.textContent = "☰";

            });

        });

    }


    /* =====================================================
       ACTIVE NAVIGATION LINK
       ===================================================== */

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll(".nav-link");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navigationLinks.forEach((link) => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    /* =====================================================
       NAVBAR SCROLL EFFECT
       ===================================================== */

    const navbar = document.getElementById("navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 30) {
            navbar.style.background = "rgba(10, 10, 10, 0.96)";
        } else {
            navbar.style.background = "rgba(10, 10, 10, 0.88)";
        }

    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                const navbarHeight = navbar
                    ? navbar.offsetHeight
                    : 0;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }

        });

    });


    /* =====================================================
       REVEAL ANIMATION
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".about-card, .skill-card, .project-card, .cert-card, .timeline-item, .education-item, .contact-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";

                        observerInstance.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        revealElements.forEach((element) => {

            element.style.opacity = "0";
            element.style.transform = "translateY(20px)";
            element.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            observer.observe(element);

        });

    }


    /* =====================================================
       EXTERNAL LINKS
       ===================================================== */

    const externalLinks = document.querySelectorAll(
        'a[href^="http"]'
    );

    externalLinks.forEach((link) => {

        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");

    });


    /* =====================================================
       EMAIL LINKS
       ===================================================== */

    const emailLinks = document.querySelectorAll(
        'a[href^="mailto:"]'
    );

    emailLinks.forEach((link) => {

        link.addEventListener("click", () => {

            console.log(
                "Opening email:",
                link.getAttribute("href")
            );

        });

    });


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const yearElements = document.querySelectorAll(
        "[data-current-year]"
    );

    yearElements.forEach((element) => {

        element.textContent = new Date().getFullYear();

    });


    /* =====================================================
       IMAGE ERROR HANDLING
       ===================================================== */

    const profileImage =
        document.querySelector(".profile-image");

    if (profileImage) {

        profileImage.addEventListener("error", () => {

            profileImage.style.display = "none";

            const parent =
                profileImage.parentElement;

            if (parent) {

                parent.style.display = "grid";
                parent.style.placeItems = "center";

                const fallback =
                    document.createElement("span");

                fallback.textContent = "RC";

                fallback.style.fontFamily =
                    '"Space Grotesk", sans-serif';

                fallback.style.fontSize = "48px";
                fallback.style.fontWeight = "800";
                fallback.style.color = "#777";

                parent.appendChild(fallback);

            }

        });

    }


    /* =====================================================
       CONSOLE MESSAGE
       ===================================================== */

    console.log(
        "Ramagiri Chakravardhan Portfolio loaded successfully."
    );

});