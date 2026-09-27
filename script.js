document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       0. HISTORY API (BACK BUTTON MANAGER)
       ========================================================================== */
    function pushOverlayState() {
        if (!window.history.state || !window.history.state.overlayOpen) {
            window.history.pushState({ overlayOpen: true }, "");
        }
    }

    function popOverlayState() {
        if (window.history.state && window.history.state.overlayOpen) {
            window.history.back();
        }
    }

    window.addEventListener('popstate', (e) => {
        document.querySelectorAll('.glass-modal.active, #lightbox.active, #mobile-menu.active').forEach(el => {
            el.classList.remove('active');
        });
        document.body.style.overflow = '';
        
        const lbImage = document.getElementById('lb-image');
        if (lbImage) setTimeout(() => { lbImage.src = ''; }, 300);
        
        const mobileMenuBtnIcon = document.querySelector('#mobile-menu-btn i');
        if (mobileMenuBtnIcon) mobileMenuBtnIcon.className = 'fas fa-bars';
    });

    /* ==========================================================================
       0.5 SHARED SCROLL DISPATCHER
       ========================================================================== */
    // The page used to attach 3 separate `scroll` listeners (navbar state,
    // scroll-spy/scroll-to-top, hero parallax), each reading layout on every
    // scroll event. Registering them here instead means a single listener
    // and a single requestAnimationFrame batch per frame, so all three run
    // together instead of forcing 3x the reflow work while scrolling.
    const scrollCallbacks = [];
    function onScroll(callback) {
        scrollCallbacks.push(callback);
    }
    let scrollTicking = false;
    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(() => {
                scrollCallbacks.forEach(cb => cb());
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }, { passive: true });

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
    } else {
        setTheme('dark'); 
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    /* ==========================================================================
       2. NAVIGATION & MOBILE MENU (BUG FIXED)
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link:not(.open-contact-modal)');

    onScroll(() => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    function toggleMobileMenu() {
        const isActive = mobileMenu.classList.contains('active');
        if (!isActive) {
            mobileMenu.classList.add('active');
            pushOverlayState();
        } else {
            mobileMenu.classList.remove('active');
            popOverlayState();
        }
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = mobileMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // THE FIX: Safe asynchronous scrolling for mobile links
    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Stop default jump
            
            const targetId = link.getAttribute('href');
            
            // 1. Close menu visually immediately
            mobileMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
            document.body.style.overflow = '';
            
            // 2. Consume the history state safely
            popOverlayState();
            
            // 3. Scroll to the target manually after a tiny delay
            setTimeout(() => {
                if (targetId && targetId !== '#') {
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        const headerOffset = document.querySelector('.navbar').offsetHeight || 80;
                        const elementPosition = targetSection.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                } else if (targetId === '#') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 50);
        });
    });

    /* ==========================================================================
       3. DATA-DRIVEN ARCHITECTURE RENDERER
       ========================================================================== */
    const gridContainer = document.getElementById('directory-grid');
    const sectionsContainer = document.getElementById('facility-sections-container');

    function renderArchitecture() {
        facilitiesData.forEach((facility, index) => {
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

            if (facility.fullDesc) {
                const isReverse = index % 2 !== 0 ? 'reverse-layout bg-alternate' : '';
                
                const amenitiesHTML = facility.amenities.map(item => 
                    `<li><i class="${item.icon}"></i> ${item.text}</li>`
                ).join('');

                let actionsHTML = '';
                
                if (facility.instructions) {
                    actionsHTML += `<button class="btn btn-outline open-instructions-btn" data-id="${facility.id}"><i class="fas fa-file-alt"></i> التعليمات</button>`;
                }
                if (facility.pricing) {
                    actionsHTML += `<button class="btn btn-primary open-pricing-btn" data-id="${facility.id}"><i class="fas fa-tags"></i> الأسعار</button>`;
                }
                if (facility.menu && facility.menu.length > 0) {
                    const btnText = facility.menuBtnText || 'عرض المنيو';
                    const btnIcon = facility.menuBtnIcon || 'fas fa-book-open';
                    actionsHTML += `<button class="btn btn-outline open-menu-btn" data-menu="${facility.id}"><i class="${btnIcon}"></i> ${btnText}</button>`;
                }
                
                if (facility.contact.phone) actionsHTML += `<a href="tel:${facility.contact.phone}" class="btn btn-outline"><i class="fas fa-phone"></i> ${facility.contact.phone}</a>`;
                if (facility.contact.whatsapp) actionsHTML += `<a href="https://wa.me/${facility.contact.whatsapp}" target="_blank" class="btn btn-whatsapp"><i class="fab fa-whatsapp"></i> تواصل معنا</a>`;
                
                if (facility.locationUrl) actionsHTML += `<a href="${facility.locationUrl}" target="_blank" class="btn btn-text"><i class="fas fa-map-marker-alt"></i> الموقع</a>`;

                const thumbsHTML = facility.galleryThumbs.map(thumb => 
                    `<img src="${thumb}" alt="${facility.name}" class="lightbox-trigger" data-gallery="${facility.id}" loading="lazy">`
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

    renderArchitecture(); 
    
    /* ==========================================================================
       3.5 GOOGLE MAPS REVIEWS RENDERER
       ========================================================================== */
    function renderReviews() {
        const track = document.getElementById('reviews-track');
        if (!track || typeof reviewsData === 'undefined') return;
        
        const colors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58', '#009688', '#673AB7', '#3F51B5'];
        
        reviewsData.forEach(review => {
            const nameParts = review.name.trim().split(' ');
            let initials = nameParts[0].charAt(0);
            if (nameParts.length > 1 && nameParts[1]) initials += nameParts[1].charAt(0);
            initials = initials.toUpperCase();
            
            const charCodeSum = review.name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
            const color = colors[charCodeSum % colors.length];
            
            let starsHTML = '';
            for(let i=1; i<=5; i++) {
                if(i <= review.rating) starsHTML += '<i class="fas fa-star"></i>';
                else if(i - 0.5 === review.rating) starsHTML += '<i class="fas fa-star-half-alt"></i>';
                else starsHTML += '<i class="far fa-star"></i>';
            }
            
            const cardHTML = `
                <div class="review-card">
                    <div class="review-header">
                        <div class="review-avatar" style="background-color: ${color}">${initials}</div>
                        <div class="review-meta">
                            <h4>${review.name}</h4>
                            <div class="review-badges">
                                ${review.isLocalGuide ? '<span class="local-guide"><i class="fas fa-certificate"></i> مرشد محلي</span>' : ''}
                                ${review.date ? `<span class="review-date">${review.date}</span>` : ''}
                            </div>
                        </div>
                    </div>
                    <div class="review-stars">${starsHTML}</div>
                    <p class="review-text">${review.text.replace(/\n/g, '<br>')}</p>
                </div>
            `;
            track.insertAdjacentHTML('beforeend', cardHTML);
        });
    }
    
    renderReviews();

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
    let currentGalleryLabel = '';
    let lightboxLastFocusedTrigger = null;

    document.querySelectorAll('.lightbox-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const galleryName = trigger.getAttribute('data-gallery');
            const galleryNodes = document.querySelectorAll(`.lightbox-trigger[data-gallery="${galleryName}"]`);
            currentGallery = Array.from(galleryNodes).map(node => node.src);
            currentIndex = currentGallery.indexOf(trigger.src);
            currentGalleryLabel = trigger.alt || '';
            lightboxLastFocusedTrigger = trigger;
            openLightbox();
        });
    });

    document.querySelectorAll('.open-menu-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const facilityId = btn.getAttribute('data-menu');
            const facility = facilitiesData.find(f => f.id === facilityId);
            if (facility && facility.menu.length > 0) {
                currentGallery = facility.menu;
                currentIndex = 0;
                currentGalleryLabel = facility.name;
                lightboxLastFocusedTrigger = btn;
                openLightbox();
            }
        });
    });

    function openLightbox() {
        if (currentGallery.length === 0) return;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        pushOverlayState();
        lbClose.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => { lbImage.src = ''; }, 300);
        popOverlayState();
        if (lightboxLastFocusedTrigger && typeof lightboxLastFocusedTrigger.focus === 'function') {
            lightboxLastFocusedTrigger.focus();
        }
        lightboxLastFocusedTrigger = null;
    }

    function updateLightboxImage() {
        lbImage.src = currentGallery[currentIndex];
        lbImage.alt = currentGalleryLabel ? `${currentGalleryLabel} (${currentIndex + 1}/${currentGallery.length})` : '';
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
       6. GLOBAL MODALS (CONTACT, INSTRUCTIONS, PRICING)
       ========================================================================== */
    const allModals = document.querySelectorAll('.glass-modal');
    let lastFocusedTrigger = null;

    function closeModal(modalElement) {
        if (modalElement.classList.contains('active')) {
            modalElement.classList.remove('active');
            document.body.style.overflow = '';
            popOverlayState();
            // Return focus to whatever opened the modal, so keyboard users
            // don't land back at the top of the page.
            if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
                lastFocusedTrigger.focus();
            }
            lastFocusedTrigger = null;
        }
    }

    // Opens a modal and moves focus into it (its .glass-modal-content carries
    // tabindex="-1" + role="dialog" in the HTML so it can receive focus and
    // is announced correctly by screen readers).
    function openModal(modalElement, triggerElement) {
        lastFocusedTrigger = triggerElement || document.activeElement;
        modalElement.classList.add('active');
        document.body.style.overflow = 'hidden';
        pushOverlayState();
        const content = modalElement.querySelector('.glass-modal-content');
        if (content) content.focus();
    }

    function getFocusableIn(container) {
        return Array.from(container.querySelectorAll(
            'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ));
    }

    // Escape closes whichever modal is open, and Tab is trapped inside it
    // so keyboard focus can't silently escape to the page underneath.
    document.addEventListener('keydown', (e) => {
        const openModalEl = Array.from(allModals).find(m => m.classList.contains('active'));
        if (!openModalEl) return;

        if (e.key === 'Escape') {
            closeModal(openModalEl);
            return;
        }

        if (e.key === 'Tab') {
            const content = openModalEl.querySelector('.glass-modal-content');
            if (!content) return;
            const focusable = getFocusableIn(content);
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    });

    document.querySelectorAll('.close-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            closeModal(document.getElementById(targetId));
        });
    });

    allModals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    });

    const contactModal = document.getElementById('contact-modal');
    document.querySelectorAll('.open-contact-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Safe swap: Close menu visually but KEEP history state for the modal
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                const icon = document.querySelector('#mobile-menu-btn i');
                if (icon) icon.className = 'fas fa-bars';
            }
            openModal(contactModal, btn);
        });
    });

    const instructionsModal = document.getElementById('instructions-modal');
    const instructionsList = document.getElementById('instructions-list');
    
    document.querySelectorAll('.open-instructions-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const facilityId = btn.getAttribute('data-id');
            const facility = facilitiesData.find(f => f.id === facilityId);
            
            instructionsList.innerHTML = facility.instructions.map(inst => 
                `<li><i class="fas fa-check-circle gold-text"></i> <span>${inst}</span></li>`
            ).join('');
            
            openModal(instructionsModal, btn);
        });
    });

    const pricingModal = document.getElementById('pricing-modal');
    const pricingTabsContainer = document.getElementById('pricing-tabs-container');
    const pricingDetailsContainer = document.getElementById('pricing-details-container');

    document.querySelectorAll('.open-pricing-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const facilityId = btn.getAttribute('data-id');
            const facility = facilitiesData.find(f => f.id === facilityId);
            
            renderPricingData(facility.pricing);
            
            openModal(pricingModal, btn);
        });
    });

    function renderPricingData(pricingArray) {
        pricingTabsContainer.innerHTML = '';
        pricingDetailsContainer.innerHTML = '';

        pricingArray.forEach((category, index) => {
            const tabBtn = document.createElement('button');
            tabBtn.className = `pricing-tab-btn ${index === 0 ? 'active' : ''}`;
            tabBtn.textContent = category.title;
            tabBtn.id = `pricing-tab-${index}`;
            tabBtn.setAttribute('role', 'tab');
            tabBtn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
            tabBtn.setAttribute('aria-controls', `pricing-view-${index}`);
            tabBtn.addEventListener('click', () => switchPricingTab(index));
            pricingTabsContainer.appendChild(tabBtn);

            const contentBox = document.createElement('div');
            contentBox.className = `pricing-content-view ${index === 0 ? 'active fade-in' : ''}`;
            contentBox.id = `pricing-view-${index}`;
            contentBox.setAttribute('role', 'tabpanel');
            contentBox.setAttribute('aria-labelledby', `pricing-tab-${index}`);
            
            let tiersHTML = category.tiers.map(tier => {
                let pricesHTML = '';
                
                if (tier.normal) pricesHTML += `<div class="price-box"><span>أيام عادية</span><strong>${tier.normal} ج</strong></div>`;
                if (tier.holiday) pricesHTML += `<div class="price-box"><span>إجازات رسمية</span><strong>${tier.holiday} ج</strong></div>`;
                if (tier.price) pricesHTML += `<div class="price-box"><span>${tier.priceLabel || 'الاشتراك'}</span><strong>${tier.price} ج</strong></div>`;

                let timeHTML = tier.time ? `<p class="tier-time"><i class="fas fa-clock"></i> ${tier.time}</p>` : '';

                return `
                    <div class="pricing-tier">
                        <h4>${tier.name}</h4>
                        ${timeHTML}
                        <div class="tier-prices">
                            ${pricesHTML}
                        </div>
                    </div>
                `;
            }).join('');

            let notesHTML = category.notes.map(note => `<li><i class="fas fa-info-circle"></i> ${note}</li>`).join('');

            contentBox.innerHTML = `
                <div class="pricing-tiers-grid">${tiersHTML}</div>
                <ul class="pricing-notes">${notesHTML}</ul>
            `;
            pricingDetailsContainer.appendChild(contentBox);
        });
    }

    function switchPricingTab(activeIndex) {
        document.querySelectorAll('.pricing-tab-btn').forEach((btn, idx) => {
            btn.classList.toggle('active', idx === activeIndex);
            btn.setAttribute('aria-selected', idx === activeIndex ? 'true' : 'false');
        });
        document.querySelectorAll('.pricing-content-view').forEach((view, idx) => {
            view.classList.remove('active', 'fade-in');
            if (idx === activeIndex) {
                view.classList.add('active');
                setTimeout(() => view.classList.add('fade-in'), 10);
            }
        });
    }
    
    /* ==========================================================================
       7. PROMO STATUS SLIDER LOGIC (with auto-pause off-screen)
       ========================================================================== */
    const sliders = document.querySelectorAll('.status-slider');
    
    sliders.forEach(slider => {
        const statusImages = slider.querySelectorAll('.status-img');
        const statusFills = slider.querySelectorAll('.status-fill');
        let currentStatus = 0;
        let intervalId = null;
        const statusDuration = 4000; 

        if (statusImages.length > 0 && statusFills.length > 0) {
            function applyStatus() {
                statusImages.forEach((img, index) => {
                    img.classList.remove('active');
                    statusFills[index].classList.remove('animating', 'completed');
                    if (index < currentStatus) {
                        statusFills[index].classList.add('completed');
                    }
                });

                statusImages[currentStatus].classList.add('active');
                statusFills[currentStatus].classList.add('animating');
            }

            function advanceStatus() {
                currentStatus = (currentStatus + 1) % statusImages.length;
                applyStatus();
            }

            function startSlider() {
                if (!intervalId) {
                    applyStatus();
                    intervalId = setInterval(advanceStatus, statusDuration);
                }
            }

            function stopSlider() {
                if (intervalId) {
                    clearInterval(intervalId);
                    intervalId = null;
                }
            }

            // Auto-pause when slider scrolls out of view
            const sliderObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) startSlider();
                    else stopSlider();
                });
            }, { threshold: 0.1 });

            sliderObserver.observe(slider);
        }
    });

    /* ==========================================================================
       8. SMART CONTACT ROUTER (PC VS MOBILE DETECTION)
       ========================================================================== */
    const actionBtns = document.querySelectorAll('.action-contact-btn');
    const actionSheet = document.getElementById('action-sheet-modal');
    const actionCall = document.getElementById('action-call');
    const actionWa = document.getElementById('action-wa');

    actionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const phone = btn.getAttribute('data-phone');
            const wa = btn.getAttribute('data-whatsapp');
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            if (!isMobile) {
                window.open(`https://wa.me/${wa}`, '_blank');
            } else {
                actionCall.href = `tel:${phone}`;
                actionWa.href = `https://wa.me/${wa}`;
                openModal(actionSheet, btn);
            }
        });
    });

    if (actionCall && actionWa) {
        [actionCall, actionWa].forEach(el => {
            el.addEventListener('click', () => { closeModal(actionSheet); });
        });
    }

    /* ==========================================================================
       9. SCROLL TO TOP & SCROLL SPY
       ========================================================================== */
    const scrollTopBtn = document.getElementById('scroll-to-top');
    const getSections = () => document.querySelectorAll('section[id], header[id]');
    const getNavItems = () => document.querySelectorAll('.nav-links .nav-item:not(.open-contact-modal)');

    onScroll(() => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }

        let current = '';
        getSections().forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - window.innerHeight / 2)) {
                current = section.getAttribute('id');
            }
        });

        getNavItems().forEach(item => {
            item.classList.remove('active-nav');
            if (item.getAttribute('href').includes(current) && current !== '') {
                item.classList.add('active-nav');
            }
        });
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ==========================================================================
       10. VISUAL ENHANCEMENTS — HERO PARALLAX & ANIMATED COUNTER
       ========================================================================== */
    
    // Hero Parallax: background drifts + content fades on scroll
    const heroBg = document.querySelector('.hero-bg');
    const heroContent = document.querySelector('.hero-content');
    const heroScrollIndicator = document.querySelector('.scroll-indicator');
    const heroSection = document.querySelector('.hero');
    
    if (heroBg && heroSection) {
        const heroHeight = heroSection.offsetHeight;
        
        onScroll(() => {
            const scrollY = window.scrollY;
            if (scrollY <= heroHeight) {
                const progress = scrollY / heroHeight;
                
                // Parallax: push background down slower than scroll
                heroBg.style.transform = `translateY(${scrollY * 0.35}px)`;
                
                // Fade out hero content as user scrolls
                const fadeOpacity = Math.max(0, 1 - progress * 2);
                if (heroContent) {
                    heroContent.style.opacity = fadeOpacity;
                    heroContent.style.transform = `translateY(${scrollY * 0.15}px)`;
                }
                if (heroScrollIndicator) {
                    heroScrollIndicator.style.opacity = Math.max(0, fadeOpacity - 0.3);
                }
            }
        });
    }
    
    // Animated Counter: rating score counts up from 0 on scroll-in
    const ratingEl = document.querySelector('.rating-score');
    if (ratingEl) {
        const targetValue = parseFloat(ratingEl.textContent);
        let hasAnimated = false;
        
        function animateCounter(element, target, duration) {
            const start = performance.now();
            function step(timestamp) {
                const elapsed = timestamp - start;
                const progress = Math.min(elapsed / duration, 1);
                // Ease-out cubic for a smooth deceleration
                const eased = 1 - Math.pow(1 - progress, 3);
                element.textContent = (target * eased).toFixed(1);
                if (progress < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
        }
        
        const ratingObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    animateCounter(ratingEl, targetValue, 1800);
                    ratingObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        ratingObserver.observe(ratingEl);
    }
});
