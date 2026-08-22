document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. PRELOADER & THEME MANAGEMENT
       ========================================================================== */
    const preloader = document.getElementById('preloader');
    const hero = document.querySelector('.hero');
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = themeToggle.querySelector('i');
    
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            hero.classList.add('loaded');
            document.querySelectorAll('.hero .reveal-text').forEach(el => el.classList.add('active'));
        }, 600);
    }, 1500);

    function setTheme(themeName) {
        htmlElement.setAttribute('data-theme', themeName);
        localStorage.setItem('dar_theme', themeName);
        themeIcon.className = themeName === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    const savedTheme = localStorage.getItem('dar_theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        setTheme('light');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    /* ==========================================================================
       2. NAVIGATION & MOBILE MENU
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link:not(.open-contact-modal)');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    }, { passive: true });

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = mobileMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    mobileLinks.forEach(link => link.addEventListener('click', toggleMobileMenu));

    /* ==========================================================================
       3. DATA-DRIVEN ARCHITECTURE RENDERER
       ========================================================================== */
    const gridContainer = document.getElementById('directory-grid');
    const sectionsContainer = document.getElementById('facility-sections-container');

    function renderArchitecture() {
        facilitiesData.forEach((facility, index) => {
            // 1. Generate Directory Card
            const delayClass = index % 3 === 1 ? 'delay-1' : index % 3 === 2 ? 'delay-2' : '';
            const cardHTML = `
                <a href="${facility.fullDesc ? `#${facility.id}` : '#'}" class="grid-card ${facility.gridSize} reveal-up ${delayClass}">
                    <img src="${facility.heroImg}" alt="${facility.name}" loading="lazy">
                    <div class="card-overlay">
                        <span class="card-tag">${facility.category}</span>
                        <h3 class="card-title">${facility.name}</h3>
                        ${facility.shortDesc ? `<p class="card-desc">${facility.shortDesc}</p>` : ''}
                        ${facility.fullDesc ? `<div class="card-cta">اكتشف <i class="fas fa-arrow-left"></i></div>` : ''}
                    </div>
                </a>
            `;
            gridContainer.insertAdjacentHTML('beforeend', cardHTML);

            // 2. Generate Full Section (If Data Exists)
            if (facility.fullDesc) {
                const isReverse = index % 2 !== 0 ? 'reverse-layout bg-alternate' : '';
                
                const amenitiesHTML = facility.amenities.map(item => 
                    `<li><i class="${item.icon}"></i> ${item.text}</li>`
                ).join('');

                let actionsHTML = '';
                if (facility.contact.phone) actionsHTML += `<a href="tel:${facility.contact.phone}" class="btn btn-outline"><i class="fas fa-phone"></i> ${facility.contact.phone}</a>`;
                if (facility.contact.whatsapp) actionsHTML += `<a href="https://wa.me/${facility.contact.whatsapp}" target="_blank" class="btn btn-primary"><i class="fab fa-whatsapp"></i> تواصل معنا</a>`;
                if (facility.menu && facility.menu.length > 0) {
                    const btnText = facility.menuBtnText || 'عرض المنيو';
                    const btnIcon = facility.menuBtnIcon || 'fas fa-book-open';
                    actionsHTML += `<button class="btn btn-text open-menu-btn" data-menu="${facility.id}"><i class="${btnIcon}"></i> ${btnText}</button>`;
                }
                if (facility.locationUrl) actionsHTML += `<a href="${facility.locationUrl}" target="_blank" class="btn btn-text"><i class="fas fa-map-marker-alt"></i> الموقع</a>`;

                const thumbsHTML = facility.galleryThumbs.map(thumb => 
                    `<img src="${thumb}" alt="Gallery" class="lightbox-trigger" data-gallery="${facility.id}" loading="lazy">`
                ).join('');

                const sectionHTML = `
                    <section id="${facility.id}" class="facility-showcase section-padding ${isReverse}">
                        <div class="container facility-layout">
                            <div class="facility-info reveal-up">
                                <span class="facility-category">${facility.category}</span>
                                <h2 class="facility-name">${facility.name}</h2>
                                ${facility.nameEn ? `<h3 class="facility-name-en">${facility.nameEn}</h3>` : ''}
                                <p class="facility-text">${facility.fullDesc}</p>
                                <ul class="amenities-list">${amenitiesHTML}</ul>
                                <div class="action-group">${actionsHTML}</div>
                            </div>
                            <div class="facility-gallery reveal-up delay-1">
                                <div class="gallery-hero">
                                    <img src="${facility.galleryHero}" alt="${facility.name}" class="lightbox-trigger" data-gallery="${facility.id}" loading="lazy">
                                </div>
                                <div class="gallery-thumbnails">${thumbsHTML}</div>
                            </div>
                        </div>
                    </section>
                `;
                sectionsContainer.insertAdjacentHTML('beforeend', sectionHTML);
            }
        });
    }

    renderArchitecture(); // Build DOM before initiating observers

    /* ==========================================================================
       4. SCROLL REVEAL (Intersection Observer)
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-text:not(.hero-title):not(.hero-subtitle)');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));

    /* ==========================================================================
       5. ADVANCED LIGHTBOX & MENU VIEWER
       ========================================================================== */
    const lightbox = document.getElementById('lightbox');
    const lbImage = document.getElementById('lb-image');
    const lbClose = document.getElementById('lb-close');
    const lbPrev = document.getElementById('lb-prev');
    const lbNext = document.getElementById('lb-next');
    const lbCurrent = document.getElementById('lb-current');
    const lbTotal = document.getElementById('lb-total');
    
    let currentGallery = [];
    let currentIndex = 0;

    // Gallery Triggers
    document.querySelectorAll('.lightbox-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const galleryName = trigger.getAttribute('data-gallery');
            const galleryNodes = document.querySelectorAll(`.lightbox-trigger[data-gallery="${galleryName}"]`);
            currentGallery = Array.from(galleryNodes).map(node => node.src);
            currentIndex = currentGallery.indexOf(trigger.src);
            openLightbox();
        });
    });

    // Menu Triggers
    document.querySelectorAll('.open-menu-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const facilityId = btn.getAttribute('data-menu');
            const facility = facilitiesData.find(f => f.id === facilityId);
            if (facility && facility.menu.length > 0) {
                currentGallery = facility.menu;
                currentIndex = 0;
                openLightbox();
            }
        });
    });

    function openLightbox() {
        if (currentGallery.length === 0) return;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => { lbImage.src = ''; }, 300);
    }

    function updateLightboxImage() {
        lbImage.src = currentGallery[currentIndex];
        lbCurrent.textContent = currentIndex + 1;
        lbTotal.textContent = currentGallery.length;
        lbPrev.style.visibility = currentGallery.length > 1 ? 'visible' : 'hidden';
        lbNext.style.visibility = currentGallery.length > 1 ? 'visible' : 'hidden';
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        updateLightboxImage();
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % currentGallery.length;
        updateLightboxImage();
    }

    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
    lbNext.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') prevImage();
        if (e.key === 'ArrowLeft') nextImage();
    });

    let touchStartX = 0;
    let touchEndX = 0;
    
    lightbox.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    lightbox.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 50) nextImage();
        if (touchEndX > touchStartX + 50) prevImage();
    }, { passive: true });

    /* ==========================================================================
       6. CONTACT MODAL LOGIC
       ========================================================================== */
    const contactModal = document.getElementById('contact-modal');
    const openContactBtns = document.querySelectorAll('.open-contact-modal');
    const closeContactBtn = document.querySelector('.close-modal');

    function openContact() {
        if (mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeContact() {
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    openContactBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openContact();
        });
    });

    if (closeContactBtn) closeContactBtn.addEventListener('click', closeContact);
    
    if (contactModal) {
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) closeContact();
        });
    }
    
    /* ==========================================================================
       7. PROMO STATUS SLIDER LOGIC
       ========================================================================== */
    const sliders = document.querySelectorAll('.status-slider');
    
    sliders.forEach(slider => {
        const statusImages = slider.querySelectorAll('.status-img');
        const statusFills = slider.querySelectorAll('.status-fill');
        let currentStatus = 0;
        const statusDuration = 4000; // 4 seconds per image

        if (statusImages.length > 0 && statusFills.length > 0) {
            function updateStatus() {
                // Reset all states for this specific slider
                statusImages.forEach((img, index) => {
                    img.classList.remove('active');
                    statusFills[index].classList.remove('animating', 'completed');
                    if (index < currentStatus) {
                        statusFills[index].classList.add('completed');
                    }
                });

                // Activate current status
                statusImages[currentStatus].classList.add('active');
                statusFills[currentStatus].classList.add('animating');

                // Trigger next loop
                setTimeout(() => {
                    currentStatus = (currentStatus + 1) % statusImages.length;
                    updateStatus();
                }, statusDuration);
            }

            // Initialize the first loop
            updateStatus();
        }
    });

    /* ==========================================================================
       8. SMART CONTACT ROUTER (PC VS MOBILE DETECTION)
       ========================================================================== */
    const actionBtns = document.querySelectorAll('.action-contact-btn');
    const actionSheet = document.getElementById('action-sheet-modal');
    const closeActionSheet = document.querySelector('.close-action-sheet');
    const actionCall = document.getElementById('action-call');
    const actionWa = document.getElementById('action-wa');

    actionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const phone = btn.getAttribute('data-phone');
            const wa = btn.getAttribute('data-whatsapp');
            
            // Check if device is a mobile phone/tablet
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            if (!isMobile) {
                // If PC, route directly to WhatsApp Web
                window.open(`https://wa.me/${wa}`, '_blank');
            } else {
                // If Mobile, show choice Action Sheet
                actionCall.href = `tel:${phone}`;
                actionWa.href = `https://wa.me/${wa}`;
                actionSheet.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (closeActionSheet) {
        closeActionSheet.addEventListener('click', () => {
            actionSheet.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (actionSheet) {
        actionSheet.addEventListener('click', (e) => {
            if (e.target === actionSheet) {
                actionSheet.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Close Action Sheet after making a selection
    if (actionCall && actionWa) {
        [actionCall, actionWa].forEach(el => {
            el.addEventListener('click', () => {
                actionSheet.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
});
