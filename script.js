/* =====================================================
   KH ESPORTS CHAMPIONSHIP 2026
   MASTER INTERACTION SYSTEM
===================================================== */

(() => {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const navbar =
        document.getElementById("navbar");

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const menuBackdrop =
        document.getElementById("menuBackdrop");

    const desktopLinks =
        Array.from(
            document.querySelectorAll(
                ".nav-links a"
            )
        );

    const mobileLinks =
        Array.from(
            document.querySelectorAll(
                ".mobile-links a, .mobile-register"
            )
        );

    const sections =
        Array.from(
            document.querySelectorAll(
                "main section[id]"
            )
        );


    /* =====================================================
       MOTION PREFERENCE
    ===================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    /* =====================================================
       CREATE SCROLL PROGRESS BAR
       
       Created automatically.
       No HTML modification required.
    ===================================================== */

    const progressBar =
        document.createElement("div");

    progressBar.id =
        "scrollProgress";

    progressBar.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.appendChild(
        progressBar
    );


    /* =====================================================
       CREATE BACK TO TOP BUTTON
       
       Created automatically.
       No HTML modification required.
    ===================================================== */

    const backToTop =
        document.createElement("button");

    backToTop.id =
        "backToTop";

    backToTop.type =
        "button";

    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );

    backToTop.setAttribute(
        "title",
        "Back to top"
    );

    backToTop.innerHTML =
        `
            <span class="back-to-top-line"></span>
            <span class="back-to-top-arrow">↑</span>
        `;

    document.body.appendChild(
        backToTop
    );


    /* =====================================================
       INJECT REQUIRED MOTION STYLES
       
       This makes the new interaction system
       work even if the existing CSS does not
       contain animation styles yet.
    ===================================================== */

    const interactionStyles =
        document.createElement("style");

    interactionStyles.id =
        "khInteractionStyles";

    interactionStyles.textContent = `

        /* ---------------------------------------------
           SCROLL PROGRESS
        --------------------------------------------- */

        #scrollProgress {
            position: fixed;

            top: 0;
            left: 0;

            width: 0%;
            height: 2px;

            z-index: 2000;

            pointer-events: none;

            background:
                linear-gradient(
                    90deg,
                    #a855f7 0%,
                    #c084fc 45%,
                    #22d3ee 100%
                );

            box-shadow:
                0 0 10px
                rgba(168,85,247,0.55),
                0 0 18px
                rgba(34,211,238,0.25);

            transform-origin: left center;

            transition:
                width 0.08s linear;

            opacity: 0.95;
        }


        /* ---------------------------------------------
           BACK TO TOP
        --------------------------------------------- */

        #backToTop {
            position: fixed;

            right: 28px;
            bottom: 28px;

            width: 46px;
            height: 46px;

            z-index: 1200;

            display: flex;

            align-items: center;
            justify-content: center;

            flex-direction: column;

            gap: 2px;

            padding: 0;

            border:
                1px solid
                rgba(168,85,247,0.35);

            background:
                rgba(7,8,13,0.78);

            color: #f4f5f7;

            cursor: pointer;

            opacity: 0;
            visibility: hidden;

            transform:
                translateY(14px)
                scale(0.92);

            backdrop-filter:
                blur(14px);

            -webkit-backdrop-filter:
                blur(14px);

            box-shadow:
                0 10px 35px
                rgba(0,0,0,0.35);

            transition:
                opacity 0.3s ease,
                visibility 0.3s ease,
                transform 0.3s ease,
                border-color 0.25s ease,
                background 0.25s ease;
        }


        #backToTop.visible {
            opacity: 1;
            visibility: visible;

            transform:
                translateY(0)
                scale(1);
        }


        #backToTop:hover {
            border-color:
                rgba(168,85,247,0.8);

            background:
                rgba(168,85,247,0.12);

            transform:
                translateY(-3px)
                scale(1.02);
        }


        .back-to-top-arrow {
            font-size: 17px;

            line-height: 1;

            font-weight: 500;
        }


        .back-to-top-line {
            width: 10px;
            height: 1px;

            background:
                linear-gradient(
                    90deg,
                    #a855f7,
                    #22d3ee
                );

            opacity: 0.8;
        }


        /* ---------------------------------------------
           INITIAL HERO ANIMATION
        --------------------------------------------- */

        body.kh-page-ready
        .hero .eyebrow {

            opacity: 0;

            transform:
                translateY(14px);

            animation:
                khFadeUp
                0.7s
                cubic-bezier(.22,1,.36,1)
                0.08s
                forwards;
        }


        body.kh-page-ready
        .hero h1 span {

            opacity: 0;

            transform:
                translateY(28px);

            animation:
                khFadeUp
                0.85s
                cubic-bezier(.22,1,.36,1)
                0.16s
                forwards;
        }


        body.kh-page-ready
        .hero h1 strong {

            opacity: 0;

            transform:
                translateY(35px)
                scale(0.985);

            animation:
                khHeroTitle
                1s
                cubic-bezier(.22,1,.36,1)
                0.24s
                forwards;
        }


        body.kh-page-ready
        .hero h1 em {

            opacity: 0;

            transform:
                translateY(22px);

            animation:
                khFadeUp
                0.85s
                cubic-bezier(.22,1,.36,1)
                0.36s
                forwards;
        }


        body.kh-page-ready
        .hero h1 small {

            opacity: 0;

            transform:
                translateY(15px);

            animation:
                khFadeUp
                0.7s
                cubic-bezier(.22,1,.36,1)
                0.46s
                forwards;
        }


        body.kh-page-ready
        .hero .hero-tagline {

            opacity: 0;

            transform:
                translateY(12px);

            animation:
                khFadeUp
                0.7s
                cubic-bezier(.22,1,.36,1)
                0.58s
                forwards;
        }


        body.kh-page-ready
        .hero .hero-description {

            opacity: 0;

            transform:
                translateY(12px);

            animation:
                khFadeUp
                0.7s
                cubic-bezier(.22,1,.36,1)
                0.68s
                forwards;
        }


        body.kh-page-ready
        .hero .hero-actions {

            opacity: 0;

            transform:
                translateY(12px);

            animation:
                khFadeUp
                0.7s
                cubic-bezier(.22,1,.36,1)
                0.78s
                forwards;
        }


        body.kh-page-ready
        .hero .hero-bottom {

            opacity: 0;

            transform:
                translateY(10px);

            animation:
                khFadeUp
                0.65s
                cubic-bezier(.22,1,.36,1)
                0.9s
                forwards;
        }


        /* ---------------------------------------------
           SCROLL REVEAL
        --------------------------------------------- */

        .kh-reveal {

            opacity: 0;

            transform:
                translateY(28px);

            transition:
                opacity 0.75s
                cubic-bezier(.22,1,.36,1),
                transform 0.75s
                cubic-bezier(.22,1,.36,1);
        }


        .kh-reveal.kh-visible {

            opacity: 1;

            transform:
                translateY(0);
        }


        /* ---------------------------------------------
           CARD REVEAL
        --------------------------------------------- */

        .kh-card-reveal {

            opacity: 0;

            transform:
                translateY(24px)
                scale(0.985);

            transition:
                opacity 0.7s
                cubic-bezier(.22,1,.36,1),
                transform 0.7s
                cubic-bezier(.22,1,.36,1);
        }


        .kh-card-reveal.kh-visible {

            opacity: 1;

            transform:
                translateY(0)
                scale(1);
        }


        /* ---------------------------------------------
           KEYFRAMES
        --------------------------------------------- */

        @keyframes khFadeUp {

            from {
                opacity: 0;

                transform:
                    translateY(18px);
            }

            to {
                opacity: 1;

                transform:
                    translateY(0);
            }

        }


        @keyframes khHeroTitle {

            from {
                opacity: 0;

                transform:
                    translateY(35px)
                    scale(0.985);
            }

            to {
                opacity: 1;

                transform:
                    translateY(0)
                    scale(1);
            }

        }


        /* ---------------------------------------------
           MOBILE
        --------------------------------------------- */

        @media (max-width: 760px) {

            #scrollProgress {
                height: 2px;
            }

            #backToTop {

                right: 17px;
                bottom: 18px;

                width: 42px;
                height: 42px;
            }

        }


        /* ---------------------------------------------
           REDUCED MOTION
        --------------------------------------------- */

        @media (prefers-reduced-motion: reduce) {

            #scrollProgress {
                transition: none;
            }

            #backToTop {
                transition: none;
            }

            .kh-reveal,
            .kh-card-reveal {

                opacity: 1;

                transform:
                    none;

                transition: none;
            }

            body.kh-page-ready
            .hero .eyebrow,
            body.kh-page-ready
            .hero h1 span,
            body.kh-page-ready
            .hero h1 strong,
            body.kh-page-ready
            .hero h1 em,
            body.kh-page-ready
            .hero h1 small,
            body.kh-page-ready
            .hero .hero-tagline,
            body.kh-page-ready
            .hero .hero-description,
            body.kh-page-ready
            .hero .hero-actions,
            body.kh-page-ready
            .hero .hero-bottom {

                opacity: 1;

                transform:
                    none;

                animation: none;
            }

        }

    `;

    document.head.appendChild(
        interactionStyles
    );


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    function updateNavbar() {

        if (!navbar) return;

        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 24
        );

    }


    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    function updateProgress() {

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        if (documentHeight <= 0) {

            progressBar.style.width =
                "0%";

            return;
        }

        const progress =
            (
                window.scrollY /
                documentHeight
            ) * 100;

        progressBar.style.width =
            `${Math.min(100, Math.max(0, progress))}%`;

    }


    /* =====================================================
       BACK TO TOP VISIBILITY
    ===================================================== */

    function updateBackToTop() {

        backToTop.classList.toggle(
            "visible",
            window.scrollY > 500
        );

    }


    /* =====================================================
       BACK TO TOP ACTION
    ===================================================== */

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,

                behavior:
                    prefersReducedMotion
                        ? "auto"
                        : "smooth"
            });

        }
    );


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    function openMenu() {

        if (
            !mobileMenu ||
            !menuBackdrop ||
            !menuToggle
        ) {
            return;
        }

        mobileMenu.classList.add("open");

        menuBackdrop.classList.add("open");

        menuToggle.classList.add("open");

        document.body.classList.add(
            "menu-open"
        );

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

        mobileMenu.setAttribute(
            "aria-hidden",
            "false"
        );

        menuBackdrop.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    function closeMenu() {

        if (
            !mobileMenu ||
            !menuBackdrop ||
            !menuToggle
        ) {
            return;
        }

        mobileMenu.classList.remove("open");

        menuBackdrop.classList.remove("open");

        menuToggle.classList.remove("open");

        document.body.classList.remove(
            "menu-open"
        );

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        mobileMenu.setAttribute(
            "aria-hidden",
            "true"
        );

        menuBackdrop.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    mobileMenu &&
                    mobileMenu.classList.contains(
                        "open"
                    );

                if (isOpen) {

                    closeMenu();

                } else {

                    openMenu();

                }

            }
        );

    }


    if (menuBackdrop) {

        menuBackdrop.addEventListener(
            "click",
            closeMenu
        );

    }


    /* =====================================================
       SMOOTH NAVIGATION
    ===================================================== */

    function getHeaderOffset() {

        if (!navbar) {
            return 0;
        }

        return navbar.offsetHeight + 12;

    }


    function scrollToTarget(targetId) {

        const target =
            document.getElementById(
                targetId
            );

        if (!target) {
            return;
        }

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            getHeaderOffset();

        window.scrollTo({

            top:
                Math.max(
                    0,
                    targetPosition
                ),

            behavior:
                prefersReducedMotion
                    ? "auto"
                    : "smooth"

        });

    }


    function handleNavigationClick(
        event
    ) {

        const link =
            event.currentTarget;

        const href =
            link.getAttribute("href");

        if (
            !href ||
            !href.startsWith("#") ||
            href === "#"
        ) {
            return;
        }

        const targetId =
            href.substring(1);

        const target =
            document.getElementById(
                targetId
            );

        if (!target) {
            return;
        }

        event.preventDefault();

        closeMenu();

        scrollToTarget(
            targetId
        );

    }


    desktopLinks.forEach(
        link => {

            link.addEventListener(
                "click",
                handleNavigationClick
            );

        }
    );


    mobileLinks.forEach(
        link => {

            link.addEventListener(
                "click",
                handleNavigationClick
            );

        }
    );


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    function setActiveSection(
        sectionId
    ) {

        desktopLinks.forEach(
            link => {

                const matches =
                    link.getAttribute("href") ===
                    `#${sectionId}`;

                link.classList.toggle(
                    "active",
                    matches
                );

            }
        );


        mobileLinks.forEach(
            link => {

                const matches =
                    link.getAttribute("href") ===
                    `#${sectionId}`;

                link.classList.toggle(
                    "active",
                    matches
                );

            }
        );

    }


    function updateActiveSection() {

        if (!sections.length) {
            return;
        }

        const headerHeight =
            navbar
                ? navbar.offsetHeight
                : 0;

        const marker =
            window.scrollY +
            headerHeight +
            Math.min(
                window.innerHeight * 0.28,
                220
            );


        let currentSection =
            "home";


        for (
            let i = 0;
            i < sections.length;
            i++
        ) {

            const section =
                sections[i];

            if (
                marker >=
                section.offsetTop
            ) {

                currentSection =
                    section.id;

            } else {

                break;

            }

        }


        if (
            currentSection ===
            "register"
        ) {

            currentSection =
                "rules";

        }


        setActiveSection(
            currentSection
        );

    }


    /* =====================================================
       SCROLL REVEAL SETUP
    ===================================================== */

    function prepareRevealElements() {

        /*
         * Section headings
         */

        const headings =
            document.querySelectorAll(
                ".section-heading"
            );

        headings.forEach(
            element => {

                element.classList.add(
                    "kh-reveal"
                );

            }
        );


        /*
         * Main content blocks
         */

        const contentBlocks =
            document.querySelectorAll(
                `
                .about-main,
                .format-flow,
                .format-features,
                .schedule-grid,
                .venue-banner,
                .prize-total,
                .prize-grid,
                .rules-grid,
                .register-content,
                .footer-main
                `
            );

        contentBlocks.forEach(
            element => {

                element.classList.add(
                    "kh-reveal"
                );

            }
        );


        /*
         * Cards
         */

        const cards =
            document.querySelectorAll(
                `
                .stat-card,
                .title-card,
                .format-step,
                .feature-card,
                .schedule-card,
                .prize-card,
                .rule
                `
            );

        cards.forEach(
            element => {

                element.classList.add(
                    "kh-card-reveal"
                );

            }
        );


        return [
            ...document.querySelectorAll(
                ".kh-reveal, .kh-card-reveal"
            )
        ];

    }


    /* =====================================================
       REVEAL OBSERVER
    ===================================================== */

    function setupRevealObserver() {

        const revealElements =
            prepareRevealElements();

        if (
            !revealElements.length
        ) {
            return;
        }


        if (
            prefersReducedMotion ||
            !("IntersectionObserver" in window)
        ) {

            revealElements.forEach(
                element => {

                    element.classList.add(
                        "kh-visible"
                    );

                }
            );

            return;
        }


        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }

                            entry.target.classList.add(
                                "kh-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -60px 0px"
                }
            );


        revealElements.forEach(
            element => {

                observer.observe(
                    element
                );

            }
        );

    }


    /* =====================================================
       STAGGER CARD ANIMATIONS
    ===================================================== */

    function setupCardStagger() {

        const groups = [

            ".stats-section",

            ".title-grid",

            ".format-features",

            ".schedule-grid",

            ".prize-grid",

            ".rules-grid"

        ];


        groups.forEach(
            selector => {

                const group =
                    document.querySelector(
                        selector
                    );

                if (!group) {
                    return;
                }


                const cards =
                    group.querySelectorAll(
                        ".kh-card-reveal"
                    );


                cards.forEach(
                    (card, index) => {

                        card.style.transitionDelay =
                            `${Math.min(
                                index * 0.08,
                                0.36
                            )}s`;

                    }
                );

            }
        );

    }


    /* =====================================================
       INITIAL PAGE ANIMATION
    ===================================================== */

    function startPageAnimation() {

        /*
         * Add class on next frame.
         *
         * This guarantees that the browser
         * sees the initial state before
         * starting the animation.
         */

        requestAnimationFrame(
            () => {

                requestAnimationFrame(
                    () => {

                        document.body.classList.add(
                            "kh-page-ready"
                        );

                    }
                );

            }
        );

    }


    /* =====================================================
       COMBINED SCROLL HANDLER
    ===================================================== */

    let ticking =
        false;


    function handleScroll() {

        if (ticking) {
            return;
        }

        ticking =
            true;


        window.requestAnimationFrame(
            () => {

                updateNavbar();

                updateProgress();

                updateBackToTop();

                updateActiveSection();

                ticking =
                    false;

            }
        );

    }


    window.addEventListener(
        "scroll",
        handleScroll,
        {
            passive: true
        }
    );


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 900
            ) {

                closeMenu();

            }

            updateProgress();

            updateActiveSection();

        }
    );


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Escape"
            ) {

                closeMenu();

            }

        }
    );


    /* =====================================================
       TOURNAMENT BRACKETS — FINAL INTERACTION
    ===================================================== */

    const bracketTabs = Array.from(document.querySelectorAll(".bracket-tab"));
    const bracketPanels = Array.from(document.querySelectorAll(".bracket-panel"));
    const bracketAccordions = Array.from(document.querySelectorAll(".bracket-accordion-toggle"));

    function setBracket(title) {
        bracketTabs.forEach(tab => {
            const active = tab.dataset.bracketTab === title;
            tab.classList.toggle("active", active);
            tab.setAttribute("aria-selected", active ? "true" : "false");
            tab.tabIndex = active ? 0 : -1;
        });

        bracketPanels.forEach(panel => {
            const active = panel.dataset.bracketPanel === title;
            panel.hidden = !active;
            panel.classList.toggle("active", active);
        });
    }

    bracketTabs.forEach((tab, index) => {
        tab.addEventListener("click", event => {
            event.preventDefault();
            setBracket(tab.dataset.bracketTab);
        });

        tab.addEventListener("keydown", event => {
            if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
            event.preventDefault();
            const direction = event.key === "ArrowRight" ? 1 : -1;
            const next = (index + direction + bracketTabs.length) % bracketTabs.length;
            bracketTabs[next].focus();
            setBracket(bracketTabs[next].dataset.bracketTab);
        });
    });

    function setAccordionState(toggle, expand) {
        const targetId = toggle.getAttribute("aria-controls");
        const target = targetId ? document.getElementById(targetId) : null;
        if (!target) return;

        toggle.setAttribute("aria-expanded", expand ? "true" : "false");

        /*
           hidden is delayed until the close animation finishes.
           This keeps the CSS transition smooth while preserving
           proper accessibility semantics when the panel is closed.
        */
        if (expand) {
            target.hidden = false;
            requestAnimationFrame(() => target.classList.add("is-opening"));
        } else {
            target.classList.remove("is-opening");
            window.setTimeout(() => {
                if (toggle.getAttribute("aria-expanded") !== "true") target.hidden = true;
            }, 500);
        }
    }

    bracketAccordions.forEach(toggle => {
        toggle.addEventListener("click", event => {
            event.preventDefault();
            const expanded = toggle.getAttribute("aria-expanded") === "true";
            setAccordionState(toggle, !expanded);
        });
    });

    if (bracketTabs.length) {
        setBracket("hok");
    }

    bracketAccordions.forEach(toggle => {
        toggle.setAttribute("aria-expanded", "false");
        const targetId = toggle.getAttribute("aria-controls");
        const target = targetId ? document.getElementById(targetId) : null;
        if (target) {
            target.classList.remove("is-opening");
            target.hidden = true;
        }
    });

    /* =====================================================
       VENUE NAVIGATION MODAL
    ===================================================== */

    const venueNavigationButton = document.getElementById("venueNavigationButton");
    const venueNavigationModal = document.getElementById("venueNavigationModal");
    const venueNavigationClose = document.getElementById("venueNavigationClose");
    const venueNavigationBackdrop = venueNavigationModal
        ? venueNavigationModal.querySelector("[data-close-venue-navigation]")
        : null;

    let venueNavigationOpen = false;
    let venueNavigationCloseTimer = null;

    function openVenueNavigation() {
        if (!venueNavigationModal) return;

        if (venueNavigationCloseTimer) {
            clearTimeout(venueNavigationCloseTimer);
            venueNavigationCloseTimer = null;
        }

        venueNavigationOpen = true;
        venueNavigationModal.hidden = false;
        requestAnimationFrame(() => venueNavigationModal.classList.add("open"));
        document.documentElement.classList.add("venue-navigation-html-open");
        document.body.classList.add("venue-navigation-open");
    }

    function closeVenueNavigation() {
        if (!venueNavigationModal || !venueNavigationOpen) return;
        venueNavigationOpen = false;
        venueNavigationModal.classList.remove("open");

        /*
           Match Tentative Flow's actual close architecture exactly:
           the modal starts closing immediately, but the page/body open
           state is retained until the close lifecycle finishes. The icon
           is driven by that body state, so × -> + begins only AFTER the
           popup has closed rather than at the same time.
        */
        venueNavigationCloseTimer = window.setTimeout(() => {
            if (!venueNavigationOpen) {
                document.documentElement.classList.remove("venue-navigation-html-open");
                document.body.classList.remove("venue-navigation-open");
                venueNavigationModal.hidden = true;
            }
            venueNavigationCloseTimer = null;
        }, 420);
    }

    if (venueNavigationButton) venueNavigationButton.addEventListener("click", openVenueNavigation);
    if (venueNavigationClose) venueNavigationClose.addEventListener("click", closeVenueNavigation);
    if (venueNavigationBackdrop) venueNavigationBackdrop.addEventListener("click", closeVenueNavigation);

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && venueNavigationOpen) closeVenueNavigation();
    });

    /* =====================================================
       INITIALIZATION
    ===================================================== */

    setupRevealObserver();

    setupCardStagger();

    updateNavbar();

    updateProgress();

    updateBackToTop();

    updateActiveSection();

    startPageAnimation();

    /* =====================================================
       DETAILED PRIZE POOL MODAL
    ===================================================== */
    const prizeDetailsButton = document.getElementById("prizeDetailsButton");
    const prizeDetailsModal = document.getElementById("prizeDetailsModal");
    const prizeDetailsClose = document.getElementById("prizeDetailsClose");
    const prizeDetailsBackdrop = prizeDetailsModal
        ? prizeDetailsModal.querySelector("[data-close-prize-details]")
        : null;
    const prizeTabs = Array.from(document.querySelectorAll(".prize-details-tab"));
    const prizePanels = Array.from(document.querySelectorAll(".prize-details-panel"));
    let prizeDetailsOpen = false;
    let prizeDetailsClosing = false;
    let prizeDetailsCloseTimer = null;

    function setPrizeTitle(title) {
        prizeTabs.forEach(tab => {
            const active = tab === title;
            tab.classList.toggle("is-active", active);
            tab.setAttribute("aria-selected", active ? "true" : "false");
        });
        prizePanels.forEach(panel => {
            const active = panel.id === (title ? title.getAttribute("aria-controls") : "prizePanelHok");
            panel.hidden = !active;
            panel.classList.toggle("is-active", active);
        });
    }

    function openPrizeDetails() {
        if (!prizeDetailsModal) return;

        if (prizeDetailsCloseTimer) {
            clearTimeout(prizeDetailsCloseTimer);
            prizeDetailsCloseTimer = null;
        }

        prizeDetailsClosing = false;
        prizeDetailsOpen = true;
        setPrizeTitle(prizeTabs[0] || null);
        prizeDetailsModal.hidden = false;
        prizeDetailsModal.setAttribute("aria-hidden", "false");
        requestAnimationFrame(() => prizeDetailsModal.classList.add("open"));
        document.documentElement.classList.add("prize-details-html-open");
        document.body.classList.add("prize-details-open");
    }

    function closePrizeDetails() {
        if (!prizeDetailsModal || !prizeDetailsOpen || prizeDetailsClosing) return;
        prizeDetailsClosing = true;
        prizeDetailsOpen = false;
        prizeDetailsModal.classList.remove("open");

        /*
           Same close architecture as Tentative Flow: keep the body open
           state alive for the complete 420ms exit lifecycle. Because the
           icon is controlled by this state, × remains visible while the
           popup closes, then the existing .42s transition runs afterward.
        */
        prizeDetailsCloseTimer = window.setTimeout(() => {
            if (!prizeDetailsOpen) {
                document.documentElement.classList.remove("prize-details-html-open");
                document.body.classList.remove("prize-details-open");
                prizeDetailsModal.hidden = true;
                prizeDetailsModal.setAttribute("aria-hidden", "true");
                prizeDetailsClosing = false;
            }
            prizeDetailsCloseTimer = null;
        }, 420);
    }

    if (prizeDetailsButton) prizeDetailsButton.addEventListener("click", openPrizeDetails);
    if (prizeDetailsClose) prizeDetailsClose.addEventListener("click", closePrizeDetails);
    if (prizeDetailsBackdrop) prizeDetailsBackdrop.addEventListener("click", closePrizeDetails);
    prizeTabs.forEach(tab => tab.addEventListener("click", () => setPrizeTitle(tab)));
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && prizeDetailsOpen) closePrizeDetails();
    });

    if (prizeDetailsModal) {
        prizeDetailsModal.hidden = true;
        prizeDetailsModal.setAttribute("aria-hidden", "true");
    }

})();

/* v52 — Detailed Prize Pool controller */
(function(){function init(){var b=document.getElementById("viewDetailedPrizePool"),m=document.getElementById("prizePoolModal");if(!b||!m||m.dataset.bound)return;m.dataset.bound="1";var tabs=[...m.querySelectorAll("[data-prize-title]")],panels=[...m.querySelectorAll("[data-prize-panel]")];var awards=[["CHAMPION","RM500 Cash Prize","5 × Medals","5 × Certificates of Achievement"],["RUNNER-UP","RM300 Cash Prize","5 × Medals","5 × Certificates of Achievement"],["THIRD PLACE × 2","RM200 Cash Prize each","5 × Medals per team","5 × Certificates of Achievement per team"],["FMVP — SPECIAL AWARD","Individual Award","RM100 Cash Prize","1 × Trophy","1 × Certificate of Achievement"]];panels.forEach(function(p){p.innerHTML=awards.map(function(a){return '<article class="prize-award"><div class="prize-award-title">'+a[0]+'</div><div class="prize-award-meta">'+a.slice(1).map(function(x){return '<span class="prize-chip">'+x+'</span>'}).join("")+'</div></article>'}).join("")+'<div class="prize-participation"><strong>EVERY PARTICIPANT</strong><div style="margin-top:7px;opacity:.78">Certificate of Participation — one for every participant</div></div>'});function select(t){tabs.forEach(function(x){var a=x.dataset.prizeTitle===t;x.classList.toggle("is-active",a);x.setAttribute("aria-selected",a?"true":"false")});panels.forEach(function(x){x.hidden=x.dataset.prizePanel!==t})}function open(){m.classList.add("is-open");m.setAttribute("aria-hidden","false");document.documentElement.classList.add("prize-modal-open");document.body.classList.add("prize-modal-open");select("hok")}function close(){m.classList.remove("is-open");m.setAttribute("aria-hidden","true");document.documentElement.classList.remove("prize-modal-open");document.body.classList.remove("prize-modal-open")}b.addEventListener("click",function(e){e.preventDefault();open()});tabs.forEach(function(t){t.addEventListener("click",function(){select(t.dataset.prizeTitle)})});m.querySelectorAll("[data-prize-close]").forEach(function(x){x.addEventListener("click",close)});document.addEventListener("keydown",function(e){if(e.key==="Escape"&&m.classList.contains("is-open"))close()})}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init()})();


/* =========================================================
   v72 — UNIFIED MODAL ICON CONTROLLER
   Tentative Flow remains the reference.
   Get Directions + Detailed Prize Pool share one explicit
   OPEN -> CLOSING -> CLOSED icon lifecycle.
========================================================= */
(function(){
  "use strict";

  const CLOSE_LIFECYCLE = 420;

  function bind(buttonId, modalId, closeSelector){
    const button = document.getElementById(buttonId);
    const modal = document.getElementById(modalId);
    if(!button || !modal) return;

    const icon = button.querySelector("span");
    if(!icon) return;

    modal.querySelectorAll(closeSelector).forEach(function(closeControl){
      closeControl.addEventListener("click", function(){
        // CLOSING: lock the icon at × before the original close handler runs.
        icon.classList.add("v72-closing");

        // CLOSED: release only after the same close lifecycle as Tentative Flow.
        window.setTimeout(function(){
          requestAnimationFrame(function(){
            requestAnimationFrame(function(){
              icon.classList.remove("v72-closing");
              icon.classList.add("v72-release");

              window.setTimeout(function(){
                icon.classList.remove("v72-release");
              }, 500);
            });
          });
        }, CLOSE_LIFECYCLE);
      }, true);
    });
  }

  bind(
    "venueNavigationButton",
    "venueNavigationModal",
    "#venueNavigationClose,[data-close-venue-navigation]"
  );

  bind(
    "prizeDetailsButton",
    "prizeDetailsModal",
    "#prizeDetailsClose,[data-close-prize-details]"
  );
})();


/* =========================================================
   v73 — SINGLE SHARED ICON STATE
   All three in-page modal buttons use one icon state model.
   Tentative Flow remains visually/reference-correct.
========================================================= */
(function(){
  "use strict";

  const CLOSE_MS = 420;

  function setIconState(button, open){
    if(!button) return;
    const icon = button.querySelector(":scope > span");
    if(!icon) return;

    if(open){
      icon.classList.add("shared-modal-icon-open");
    }else{
      icon.classList.remove("shared-modal-icon-open");
    }
  }

  function bindModalButton(buttonId, modalId, closeSelector){
    const button = document.getElementById(buttonId);
    const modal = document.getElementById(modalId);
    if(!button || !modal) return;

    const closeControls = modal.querySelectorAll(closeSelector);

    closeControls.forEach(function(control){
      control.addEventListener("click", function(){
        /*
         * Capture the current × state before the original modal close code
         * changes its state. The icon is therefore not allowed to transition
         * while the popup itself is closing.
         */
        setIconState(button, true);

        window.setTimeout(function(){
          /*
           * Release at the same close boundary used by Tentative Flow.
           * The browser gets a fresh paint before the transition begins.
           */
          requestAnimationFrame(function(){
            setIconState(button, false);
          });
        }, CLOSE_MS);
      }, true);
    });
  }

  bindModalButton(
    "venueNavigationButton",
    "venueNavigationModal",
    "#venueNavigationClose,[data-close-venue-navigation]"
  );

  bindModalButton(
    "prizeDetailsButton",
    "prizeDetailsModal",
    "#prizeDetailsClose,[data-close-prize-details]"
  );
})();

