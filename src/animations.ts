import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- ENGINEERED CONFIGURATION ---
const CONFIG = {
    duration: 0.7,
    ease: "power2.out", // Smooth, engineered feel
    heroDelay: 0.2,
    revealDistance: 25, // Reduced for subtlety
    scaleHover: 1.02, // Stripped back from 1.03
    scaleClick: 0.98, // Tactile
};

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

export function initAnimations() {
    if (prefersReducedMotion) return;

    gsap.config({
        force3D: true,
        nullTargetWarn: false
    });

    initHeroEntry();
    initScrollReveal();
    initMicroInteractions();
    initTextEmphasis();
    initSubtleParallax();
}

// 1️⃣ HERO ENTRY (UI Only - No 3D touch)
function initHeroEntry() {
    // Target only the backup hero text or overlay elements if they exist
    // We explicitly avoid canvas.webgl
    const heroElements = document.querySelectorAll("#hero-backup h3, #hero-backup h1, #hero-backup ul");

    if (heroElements.length) {
        gsap.fromTo(heroElements,
            { autoAlpha: 0, y: 15 },
            {
                autoAlpha: 1,
                y: 0,
                duration: CONFIG.duration,
                stagger: 0.1,
                ease: CONFIG.ease,
                delay: CONFIG.heroDelay
            }
        );
    }

    // Nav entry
    const nav = document.querySelector("nav");
    if (nav) {
        gsap.fromTo(nav,
            { autoAlpha: 0, y: -10 },
            { autoAlpha: 1, y: 0, duration: CONFIG.duration, ease: CONFIG.ease, delay: CONFIG.heroDelay }
        );
    }
}

// 2️⃣ SCROLL REVEAL (Site-wide, Gentle)
function initScrollReveal() {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        // Reveal the section logic
        gsap.fromTo(section,
            { autoAlpha: 0, y: CONFIG.revealDistance },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.8, // Slightly slower for elegance
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    once: true // Quality rule: Trigger once
                }
            }
        );
    });
}

// 3️⃣ & 4️⃣ & 5️⃣ MICRO INTERACTIONS (Hover & Nav)
function initMicroInteractions() {
    // Projects: .gallery-item
    const projects = document.querySelectorAll(".gallery-item, .gallery-item-mobile");

    projects.forEach((el) => {
        el.addEventListener("mouseenter", () => {
            gsap.to(el, {
                y: -4, // Lift slightly
                scale: CONFIG.scaleHover,
                filter: "grayscale(0%) contrast(1.05) brightness(1.05)",
                duration: 0.3,
                ease: "power2.out"
            });
        });

        el.addEventListener("mouseleave", () => {
            gsap.to(el, {
                y: 0,
                scale: 1,
                filter: "grayscale(10%) contrast(0.95) brightness(1)",
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Buttons: .btn, .retro-btn
    const buttons = document.querySelectorAll(".btn, .retro-btn");
    buttons.forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
            // Nav Feedback: 4️⃣ (Subtle background shift handled by CSS usually, enhancing here if needed)
            gsap.to(btn, {
                boxShadow: "0 0 15px rgba(224, 224, 224, 0.1)", // Subtle glow
                duration: 0.3
            });
        });

        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, {
                boxShadow: "none", // Reset
                duration: 0.3
            });
        });

        btn.addEventListener("mousedown", () => {
            gsap.to(btn, { scale: CONFIG.scaleClick, duration: 0.1 });
        });

        btn.addEventListener("mouseup", () => {
            gsap.to(btn, { scale: 1, duration: 0.2 });
        });

        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, { scale: 1, duration: 0.2 }); // Safety reset
        });
    });
}

// 6️⃣ TEXT EMPHASIS (Very High-End)
function initTextEmphasis() {
    // Only major headings
    const headings = document.querySelectorAll("h1, .premium-title");

    headings.forEach((h) => {
        gsap.fromTo(h,
            { opacity: 0.2 }, // Start visible but dim
            {
                opacity: 1,
                duration: 1.2,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: h,
                    start: "top 90%",
                    end: "top 60%",
                    scrub: true // Tied to scroll for "control" feel
                }
            }
        );
    });
}

// 7️⃣ OPTIONAL DEPTH (One section only - About Me)
function initSubtleParallax() {
    // Target the reading container in About section only
    const aboutContainer = document.querySelector("#aboutMe + .flagship-label + h1 + .reading-container");

    if (aboutContainer) {
        gsap.fromTo(aboutContainer,
            { y: 0 },
            {
                y: -30, // Very slow movement against scroll
                ease: "none",
                scrollTrigger: {
                    trigger: aboutContainer,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            }
        );
    }
}
