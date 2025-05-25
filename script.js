// Contact Form Handling
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xdkepjke", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                status.textContent = "Message sent successfully!";
                status.style.color = "green";
                form.reset();

                setTimeout(() => {
                    status.textContent = "";
                }, 3000);
            } else {
                status.textContent = "Oops! Something went wrong.";
                status.style.color = "red";
            }
        } catch (error) {
            status.textContent = "Error sending message. Please try again.";
            status.style.color = "red";
        }
    });
});

// Navbar active link on scroll
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveLink() {
    const scrollPosition = window.scrollY + 120;

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));
        if (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
        ) {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);

// Section heading underline effect
const sections = document.querySelectorAll("section");
const headings = document.querySelectorAll(".section-heading");

function highlightSectionHeading() {
    const scrollY = window.scrollY + 120;

    sections.forEach((section) => {
        const heading = section.querySelector(".section-heading");
        if (
            section.offsetTop <= scrollY &&
            section.offsetTop + section.offsetHeight > scrollY
        ) {
            headings.forEach((h) => h.classList.remove("active"));
            heading.classList.add("active");
        }
    });
}

window.addEventListener("scroll", highlightSectionHeading);

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  