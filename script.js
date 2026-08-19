/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Performance: Loader removal
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 400);
    });

    // 2. Navigation: Scroll Progress & Navbar Shrink
    const scrollProgress = document.getElementById('scroll-progress');
    const navbar = document.getElementById('navbar');
    
    // Throttle scroll event for 60fps performance
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                handleScroll();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    function handleScroll() {
        let scrollTop = window.scrollY;
        
        // Scroll Progress Bar
        if (scrollProgress) {
            let docHeight = document.body.scrollHeight - window.innerHeight;
            let scrollPercent = (scrollTop / docHeight) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        }

        // Navbar Glass Shrink
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active Link Highlighting
        updateActiveNav(scrollTop);
    }

    // 3. Navigation: Mobile Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
            
            let icon = hamburger.querySelector('i');
            if(navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu on link click (Touch Friendly)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.querySelector('i').classList.replace('fa-times', 'fa-bars');
            });
        });
    }

    // 4. Hero Parallax (Optimized)
    const heroBg = document.querySelector('.hero-bg');
    const facilityHeroBg = document.querySelector('.facility-hero-bg');
    
    window.addEventListener('scroll', () => {
        let scroll = window.pageYOffset;
        if(heroBg && scroll < window.innerHeight) {
            heroBg.style.transform = `translateY(${scroll * 0.35}px)`;
        }
        if(facilityHeroBg && scroll > 0) {
            // Optional parallax for internal hero sections if needed, background-attachment: fixed usually handles this better via CSS.
        }
    });

    // 5. Micro Animations: Scroll Reveal using Intersection Observer
    const reveals = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Run once for performance
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => revealObserver.observe(reveal));

    // 6. Statistics: Animated Counters
    const counters = document.querySelectorAll('.counter');
    let counted = false;
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !counted) {
                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target');
                        const count = +counter.innerText;
                        // Calculate increment for smooth animation
                        const speed = 150; 
                        const inc = target / speed;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, 15);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                });
                counted = true;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.about-stats');
    if(statsSection) counterObserver.observe(statsSection);

    // 7. Micro Animations: Mouse Hover Glow on Cards
    document.addEventListener('mousemove', e => {
        document.querySelectorAll('.glow-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // 8. Micro Animations: Ripple Effect (Touch and Click)
    document.addEventListener('click', function(e) {
        // Find closest element with ripple classes
        const btn = e.target.closest('.ripple, .ripple-container');
        if (btn) {
            const rect = btn.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            
            let ripples = document.createElement('span');
            ripples.classList.add('ripple-span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            
            btn.appendChild(ripples);
            setTimeout(() => ripples.remove(), 600);
        }
    });

    // 9. Navigation: Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                // Account for fixed navbar height
                const navHeight = document.getElementById('navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
                
                // Add temporary highlight to the targeted section (especially for coming soon cards)
                if(targetElement.classList.contains('coming-soon-banner')) {
                    targetElement.style.transition = "background-color 0.5s ease";
                    targetElement.style.backgroundColor = "rgba(212, 175, 55, 0.1)"; // Gold flash
                    setTimeout(() => {
                        targetElement.style.backgroundColor = "#fff";
                    }, 1000);
                }
            }
        });
    });

    // Navigation: Scroll Spy Logic
    const sections = document.querySelectorAll('section, header, .facility-master-section');
    const navItems = document.querySelectorAll('.nav-links a');

    function updateActiveNav(scrollY) {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const navHeight = document.getElementById('navbar').offsetHeight;
            
            if (scrollY >= (sectionTop - navHeight - 100)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(a => {
            a.classList.remove('active');
            // Check if link href ends with the current ID
            if (current && a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
    }

    // Initialize Advanced Image System
    initGallerySystem();
});

// --- ADVANCED IMAGE SYSTEM (Slider, Lazy Load, Touch, Keyboard) ---

let currentGalleryIndex = 0;
let galleryItems = [];
let startX = 0;
let endX = 0;

function initGallerySystem() {
    const triggers = document.querySelectorAll('.lightbox-trigger');
    galleryItems = [];
    
    triggers.forEach((trigger, index) => {
        const img = trigger.querySelector('img');
        if (img) {
            galleryItems.push({
                src: img.src,
                caption: img.alt || ''
            });
            
            // Attach click handler dynamically
            trigger.addEventListener('click', () => {
                openGalleryLightbox(index);
            });
        }
    });
}

window.openGalleryLightbox = function(index) {
    if(galleryItems.length === 0) initGallerySystem();
    
    currentGalleryIndex = index;
    const lightbox = document.getElementById("advanced-lightbox");
    updateLightboxContent();
    
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";
};

window.closeGalleryLightbox = function() {
    document.getElementById("advanced-lightbox").style.display = "none";
    document.body.style.overflow = "auto";
};

window.changeLightboxImage = function(direction) {
    // In RTL, visual direction is flipped
    currentGalleryIndex += direction;
    
    if (currentGalleryIndex >= galleryItems.length) {
        currentGalleryIndex = 0; // Loop to start
    } else if (currentGalleryIndex < 0) {
        currentGalleryIndex = galleryItems.length - 1; // Loop to end
    }
    
    updateLightboxContent();
};

function updateLightboxContent() {
    if(!galleryItems[currentGalleryIndex]) return;
    
    const imgElement = document.getElementById("lightbox-main-img");
    const captionElement = document.getElementById("lightbox-caption");
    const counterElement = document.getElementById("lightbox-counter");
    
    // Add brief animation reset for smooth transition
    imgElement.style.animation = 'none';
    imgElement.offsetHeight; /* trigger reflow */
    imgElement.style.animation = null;
    
    imgElement.src = galleryItems[currentGalleryIndex].src;
    imgElement.alt = galleryItems[currentGalleryIndex].caption;
    captionElement.innerText = galleryItems[currentGalleryIndex].caption;
    
    // Counter in RTL format
    counterElement.innerText = `${currentGalleryIndex + 1} / ${galleryItems.length}`;
}

// Touch Gestures for Slider
const lightboxElement = document.getElementById('advanced-lightbox');
if (lightboxElement) {
    lightboxElement.addEventListener('touchstart', e => {
        startX = e.changedTouches[0].screenX;
    }, {passive: true});

    lightboxElement.addEventListener('touchend', e => {
        endX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
}

function handleSwipe() {
    const threshold = 50; 
    if (endX < startX - threshold) {
        changeLightboxImage(1); // Swipe left
    } else if (endX > startX + threshold) {
        changeLightboxImage(-1); // Swipe right
    }
}

// Keyboard Navigation Support
document.addEventListener('keydown', function(event) {
    const lightbox = document.getElementById("advanced-lightbox");
    if (lightbox && lightbox.style.display === "flex") {
        if (event.key === "Escape") {
            window.closeGalleryLightbox();
        } else if (event.key === "ArrowLeft") {
            window.changeLightboxImage(1);
        } else if (event.key === "ArrowRight") {
            window.changeLightboxImage(-1);
        }
    }
});
