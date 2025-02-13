document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const navList = document.getElementById("nav-list");
    const body = document.body;
    const logoContainer = document.getElementById("logo-container");
  
    // Mobile menu toggle
    mobileMenuButton.addEventListener("click", () => {
        navList.classList.toggle("active");
        mobileMenuButton.classList.toggle("active");
    });
  
    // Close mobile menu when clicking a navigation link
    document.querySelectorAll(".nav-button a").forEach(link => {
        link.addEventListener("click", () => {
            navList.classList.remove("active");
            mobileMenuButton.classList.remove("active");
        });
    });
  
    // Close mobile menu when clicking outside of it
    document.addEventListener("click", (event) => {
        if (
            mobileMenuButton.classList.contains("active") &&
            !navList.contains(event.target) &&
            !mobileMenuButton.contains(event.target)
        ) {
            navList.classList.remove("active");
            mobileMenuButton.classList.remove("active");
        }
    });
  
    // Close mobile menu when resizing window beyond mobile breakpoint
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navList.classList.remove("active");
            mobileMenuButton.classList.remove("active");
        }
    });
  
    // Dark mode toggle when clicking the logo container
    if (logoContainer) {
        logoContainer.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
        });
    }
  
    // Smooth scroll for all navigation links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
  
    // Section observer for active state
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.25
    };
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, options);
  
    sections.forEach(section => {
        observer.observe(section);
    });
  });
  