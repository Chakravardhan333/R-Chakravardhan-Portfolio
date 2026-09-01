/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuButton.textContent = "✕";
            menuButton.setAttribute("aria-label", "Close menu");
        } else {
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Open menu");
        }
    });

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Open menu");
        });
    });
}


/* =====================================================
   NAVBAR SHADOW
===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 30) {
        navbar.style.boxShadow =
            "0 15px 40px rgba(0, 0, 0, 0.25)";
    } else {
        navbar.style.boxShadow = "none";
    }
});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

function updateActiveLink() {
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

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);

updateActiveLink();


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const animatedElements = document.querySelectorAll(
    ".section-heading, .about-card, .skill-card, .timeline-item, .project-card, .education-item, .cert-card, .contact-card"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }

            });
        },
        {
            threshold: 0.12
        }
    );

    animatedElements.forEach((element) => {
        observer.observe(element);
    });

} else {

    /* Fallback for older browsers */
    animatedElements.forEach((element) => {
        element.classList.add("show");
    });

}


/* =====================================================
   CLOSE MENU ON RESIZE
===================================================== */

window.addEventListener("resize", () => {

    if (window.innerWidth > 850) {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuButton) {
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Open menu");
        }
    }

});


/* =====================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener("click", (event) => {

    if (!navMenu || !menuButton) return;

    const clickedInsideMenu =
        navMenu.contains(event.target);

    const clickedMenuButton =
        menuButton.contains(event.target);

    if (
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {
        navMenu.classList.remove("active");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open menu");
    }

});


/* =====================================================
   IMAGE CHECK
===================================================== */

const profileImage =
    document.querySelector(".profile-image");

if (profileImage) {

    profileImage.addEventListener("error", () => {
        console.log(
            "Profile image could not be loaded."
        );
    });

    profileImage.addEventListener("load", () => {
        console.log(
            "Profile image loaded successfully."
        );
    });
}


/* =====================================================
   EXTERNAL LINKS
===================================================== */

const externalLinks =
    document.querySelectorAll('a[target="_blank"]');

externalLinks.forEach((link) => {
    link.setAttribute("rel", "noopener noreferrer");
});


/* =====================================================
   YEAR
===================================================== */

console.log(
    "Ramagiri Chakravardhan Portfolio loaded successfully."
);