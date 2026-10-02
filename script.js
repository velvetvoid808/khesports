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


        /*
         * Current-site reveal items not present in the original reference
         * selector list (objectives and action wrappers included).
         * They use the same reference reveal motion.
         */

        const remainingRevealItems =
            document.querySelectorAll(
                ".reveal:not(.kh-reveal):not(.kh-card-reveal)"
            );

        remainingRevealItems.forEach(
            element => {

                element.classList.add(
                    "kh-reveal"
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

                            if (entry.isIntersecting) {
                                /*
                                 * Reversible reveal:
                                 * enter viewport -> play reveal
                                 * leave viewport -> reset reveal
                                 *
                                 * Do NOT unobserve. This lets the same
                                 * animation run again every time the user
                                 * scrolls back to the section.
                                 */
                                entry.target.classList.add(
                                    "kh-visible"
                                );
                            } else {
                                entry.target.classList.remove(
                                    "kh-visible"
                                );
                            }

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
       INITIALIZATION
    ===================================================== */

    setupRevealObserver();

    setupCardStagger();

    updateNavbar();

    updateProgress();

    updateBackToTop();

    updateActiveSection();

    startPageAnimation();


})();


/* =====================================================
   VERSION 1 — REQUESTED COMPONENT CONTROLLERS ONLY
   Brackets + Schedule Flow/Directions + Prize Details.
===================================================== */
(function(){
    "use strict";
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

        if (expand) {
            target.hidden = false;
            requestAnimationFrame(() => target.classList.add("is-opening"));
        } else {
            target.classList.remove("is-opening");
            target.hidden = true;
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
   VENUE NAVIGATION MODAL — STABLE CONTROLLER
===================================================== */

const venueNavigationButton = document.getElementById("venueNavigationButton");
const venueNavigationModal = document.getElementById("venueNavigationModal");
const venueNavigationClose = document.getElementById("venueNavigationClose");
const venueNavigationBackdrop = venueNavigationModal
    ? venueNavigationModal.querySelector("[data-close-venue-navigation]")
    : null;

let venueNavigationOpen = false;

function openVenueNavigation() {
    if (!venueNavigationModal) return;
    venueNavigationOpen = true;
    venueNavigationModal.hidden = false;
    venueNavigationModal.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("venue-navigation-html-open");
    document.body.classList.add("venue-navigation-open");
    requestAnimationFrame(() => {
        requestAnimationFrame(() => venueNavigationModal.classList.add("open"));
    });
}

function closeVenueNavigation() {
    if (!venueNavigationModal || !venueNavigationOpen) return;
    venueNavigationOpen = false;
    venueNavigationModal.classList.remove("open");
    venueNavigationModal.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("venue-navigation-html-open");
    document.body.classList.remove("venue-navigation-open");
    window.setTimeout(() => {
        if (!venueNavigationOpen) venueNavigationModal.hidden = true;
    }, 380);
}

if (venueNavigationButton) {
    venueNavigationButton.addEventListener("click", (event) => {
        event.preventDefault();
        openVenueNavigation();
    });
}
if (venueNavigationClose) venueNavigationClose.addEventListener("click", closeVenueNavigation);
if (venueNavigationBackdrop) venueNavigationBackdrop.addEventListener("click", closeVenueNavigation);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && venueNavigationOpen) closeVenueNavigation();
});
})();

/* =====================================================
   TENTATIVE FLOW MODAL — STABLE CONTROLLER
===================================================== */
(function () {
    "use strict";

    const button = document.getElementById("tentativeFlowButton");
    const modal = document.getElementById("tentativeFlowModal");
    const closeButton = document.getElementById("tentativeFlowClose");
    const dayTab1 = document.getElementById("tentativeFlowDay1");
    const dayTab2 = document.getElementById("tentativeFlowDay2");
    const dayPanel1 = document.getElementById("tentativeFlowDayPanel1");
    const dayPanel2 = document.getElementById("tentativeFlowDayPanel2");
    const dayAttendance = document.getElementById("tentativeFlowAttendance");
    const flowBody = modal ? modal.querySelector(".tentative-flow-body") : null;

    if (!button || !modal || !closeButton || !dayTab1 || !dayTab2 || !dayPanel1 || !dayPanel2 || !dayAttendance || !flowBody) return;

    // Keep a completely independent scroll position for each day.
    // Switching Day 1 ↔ Day 2 must never inherit the previous day's
    // scroll position.
    const dayScrollPositions = { 1: 0, 2: 0 };

    const backdrop = modal.querySelector("[data-close-tentative-flow]");
    let closeTimer = null;
    let isOpen = false;
    let isClosing = false;

    function lockPage() {
        document.documentElement.classList.add("tentative-flow-html-open");
        document.body.classList.add("tentative-flow-open");
    }

    function unlockPage() {
        document.documentElement.classList.remove("tentative-flow-html-open");
        document.body.classList.remove("tentative-flow-open");
    }

    function switchTentativeDay(day) {
        // Save the current day's position before switching.
        const currentDay = dayPanel1.classList.contains("is-active") ? 1 : 2;
        if (!dayPanel1.hidden && !dayPanel2.hidden) {
            dayScrollPositions[currentDay] = flowBody.scrollTop;
        } else if (!dayPanel1.hidden) {
            dayScrollPositions[1] = flowBody.scrollTop;
        } else if (!dayPanel2.hidden) {
            dayScrollPositions[2] = flowBody.scrollTop;
        }

        const isDay1 = day === 1;
        const activeTab = isDay1 ? dayTab1 : dayTab2;
        const inactiveTab = isDay1 ? dayTab2 : dayTab1;
        const activePanel = isDay1 ? dayPanel1 : dayPanel2;
        const inactivePanel = isDay1 ? dayPanel2 : dayPanel1;

        activeTab.classList.add("is-active");
        inactiveTab.classList.remove("is-active");
        activeTab.setAttribute("aria-selected", "true");
        inactiveTab.setAttribute("aria-selected", "false");

        inactivePanel.classList.remove("is-active");
        inactivePanel.hidden = true;
        activePanel.hidden = false;

        // Day 2 attendance is a standalone notice shown above the Day 2 flow.
        dayAttendance.hidden = isDay1;

        /* Restart only the panel transition, without moving the page. */
        activePanel.classList.remove("is-active");
        void activePanel.offsetWidth;
        activePanel.classList.add("is-active");

        // Restore only the selected day's own scroll position.
        // This prevents Day 2 from opening at Day 1's bottom (and vice versa).
        requestAnimationFrame(() => {
            flowBody.scrollTop = dayScrollPositions[day] || 0;
        });
    }

    dayTab1.addEventListener("click", () => switchTentativeDay(1));
    dayTab2.addEventListener("click", () => switchTentativeDay(2));

    function openTentativeFlow() {
        if (isOpen && !isClosing) return;

        if (closeTimer) {
            clearTimeout(closeTimer);
            closeTimer = null;
        }

        isOpen = true;
        isClosing = false;

        switchTentativeDay(1);

        modal.hidden = false;
        modal.classList.remove("closing-complete");
        modal.setAttribute("aria-hidden", "false");
        lockPage();

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (isOpen && !isClosing) {
                    modal.classList.add("open");
                }
            });
        });
    }

    function finishClose() {
        if (!isClosing) return;

        isClosing = false;
        isOpen = false;

        modal.classList.remove("open", "closing-complete");
        modal.hidden = true;
        modal.setAttribute("aria-hidden", "true");
        unlockPage();
        closeTimer = null;
    }

    function closeTentativeFlow() {
        if (!isOpen || isClosing) return;

        isClosing = true;
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");

        /*
           Keep the modal layer mounted and the document locked for the
           entire exit transition. Crucially, there is only ONE close
           controller and ONE state transition, so the modal cannot briefly
           re-open during Safari's repaint cycle.
        */
        closeTimer = window.setTimeout(finishClose, 420);
    }

    button.addEventListener("click", openTentativeFlow);
    closeButton.addEventListener("click", closeTentativeFlow);

    if (backdrop) {
        backdrop.addEventListener("click", closeTentativeFlow);
    }

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && isOpen && !isClosing) {
            closeTentativeFlow();
        }
    });

    modal.hidden = true;
    modal.classList.remove("open", "closing-complete");
    modal.setAttribute("aria-hidden", "true");
})();

/* =====================================================
   DETAILED PRIZE POOL MODAL — STABLE CONTROLLER
===================================================== */
(function () {
    "use strict";

    const button = document.getElementById("prizeDetailsButton");
    const modal = document.getElementById("prizeDetailsModal");
    const closeButton = document.getElementById("prizeDetailsClose");
    const backdrop = modal
        ? modal.querySelector("[data-close-prize-details]")
        : null;

    const tabHok = document.getElementById("prizeTabHok");
    const tabMlbb = document.getElementById("prizeTabMlbb");
    const panelHok = document.getElementById("prizePanelHok");
    const panelMlbb = document.getElementById("prizePanelMlbb");

    if (!button || !modal || !closeButton || !tabHok || !tabMlbb || !panelHok || !panelMlbb) {
        return;
    }

    let isOpen = false;

    function lockPage() {
        document.documentElement.classList.add("prize-details-html-open");
        document.body.classList.add("prize-details-page-open");
    }

    function unlockPage() {
        document.documentElement.classList.remove("prize-details-html-open");
        document.body.classList.remove("prize-details-page-open");
    }

    function selectTitle(title) {
        const hok = title === "hok";

        tabHok.classList.toggle("is-active", hok);
        tabMlbb.classList.toggle("is-active", !hok);

        tabHok.setAttribute("aria-selected", hok ? "true" : "false");
        tabMlbb.setAttribute("aria-selected", hok ? "false" : "true");

        panelHok.classList.toggle("is-active", hok);
        panelMlbb.classList.toggle("is-active", !hok);

        panelHok.hidden = !hok;
        panelMlbb.hidden = hok;
    }

    function openPrizeDetails() {
        if (isOpen) return;

        isOpen = true;
        selectTitle("hok");

        modal.hidden = false;
        modal.setAttribute("aria-hidden", "false");
        modal.classList.remove("closing-complete");
        lockPage();

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (isOpen) {
                    modal.classList.add("open");
                }
            });
        });
    }

    function closePrizeDetails() {
        if (!isOpen) return;

        isOpen = false;
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");

        window.setTimeout(() => {
            if (!isOpen) {
                modal.hidden = true;
                unlockPage();
            }
        }, 300);
    }

    button.addEventListener("click", function (event) {
        event.preventDefault();
        openPrizeDetails();
    });

    tabHok.addEventListener("click", function () {
        selectTitle("hok");
    });

    tabMlbb.addEventListener("click", function () {
        selectTitle("mlbb");
    });

    closeButton.addEventListener("click", closePrizeDetails);

    if (backdrop) {
        backdrop.addEventListener("click", closePrizeDetails);
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && isOpen) {
            closePrizeDetails();
        }
    });

    modal.hidden = true;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
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

/* =========================================================
   WEBSITE SETTINGS — MUSIC CONTROLLER
========================================================= */
(function () {
    "use strict";

    const trigger = document.getElementById("siteSettingsTrigger");
    const modal = document.getElementById("siteSettingsModal");
    const panel = modal ? modal.querySelector(".site-settings-panel") : null;
    const closeButton = document.getElementById("siteSettingsClose");
    const backgroundMusic = document.getElementById("backgroundMusic");
    const pulseMusic = document.getElementById("pulseMusic");
    const arcadeMusic = document.getElementById("arcadeMusic");
    const backgroundMusicTracks = [
        backgroundMusic,
        pulseMusic,
        arcadeMusic
    ].filter(Boolean);
    const musicSwitch = document.getElementById("musicSwitch");
    const musicSwitchState = musicSwitch
        ? musicSwitch.querySelector(".music-switch-state")
        : null;
    const musicVolumeControl = document.getElementById("musicVolumeControl");
    const musicVolumeValue = document.getElementById("musicVolumeValue");
    const musicTrackButtons = Array.from(
        document.querySelectorAll("[data-music-track]")
    );
    const soundEffectsSwitch = document.getElementById("soundEffectsSwitch");
    const soundEffectsSwitchState = soundEffectsSwitch
        ? soundEffectsSwitch.querySelector(".music-switch-state")
        : null;
    const soundEffectsVolumeControl = document.getElementById(
        "soundEffectsVolumeControl"
    );
    const soundEffectsVolumeValue = document.getElementById(
        "soundEffectsVolumeValue"
    );
    const soundStyleButtons = Array.from(
        document.querySelectorAll("[data-sound-style]")
    );
    const cardShapeButtons = Array.from(
        document.querySelectorAll("[data-card-shape]")
    );
    const buttonShapeButtons = Array.from(
        document.querySelectorAll("[data-button-shape]")
    );
    const siteThemeButtons = Array.from(
        document.querySelectorAll("[data-site-theme]")
    );
    const motionPreferenceButtons = Array.from(
        document.querySelectorAll("[data-motion-preference]")
    );
    const desktopNavigationButtons = Array.from(
        document.querySelectorAll("[data-desktop-navigation]")
    );
    const siteLanguageButtons = Array.from(
        document.querySelectorAll("[data-site-language]")
    );
    const textSizeControl = document.getElementById("textSizeControl");
    const textSizeValue = document.getElementById("textSizeValue");
    const resetSettingsButton = document.getElementById("resetSettingsButton");
    const settingsResetStatus = document.getElementById("settingsResetStatus");
    const backdrop = modal
        ? modal.querySelector("[data-close-site-settings]")
        : null;

    if (!trigger || !modal || !panel || !closeButton) {
        return;
    }

    let opener = null;
    let closeTimer = null;
    const musicPreferenceKey = "kh-esports-background-music-v2";
    // A new key makes the updated 50% default apply for visitors who saved
    // the former 0% default, while keeping any new choice persistent.
    const musicVolumePreferenceKey = "kh-esports-music-volume-v2";
    const musicTrackPreferenceKey = "kh-esports-music-track-v1";
    const soundEffectsPreferenceKey = "kh-esports-sound-effects-v1";
    const soundEffectsVolumePreferenceKey = "kh-esports-sfx-volume-v2";
    const soundStylePreferenceKey = "kh-esports-sfx-style-v1";
    const cardShapePreferenceKey = "kh-esports-card-shape-v1";
    const buttonShapePreferenceKey = "kh-esports-button-shape-v1";
    const cornerStylePreferenceKey = "kh-esports-corner-style-v1";
    const legacyAccentThemePreferenceKey = "kh-esports-accent-theme-v1";
    const siteThemePreferenceKey = "kh-esports-theme-v1";
    const motionPreferenceKey = "kh-esports-motion-v1";
    const desktopNavigationPreferenceKey =
        "kh-esports-desktop-navigation-v1";
    const textSizePreferenceKey = "kh-esports-text-size-v1";
    const siteLanguagePreferenceKey = "kh-esports-language-v1";
    const textSizeMinimum = -2;
    const textSizeMaximum = 5;
    const textSizeScalePerStep = 0.08;
    const textSizeBaseSizes = new WeakMap();
    const musicTrackNames = ["night", "pulse", "arcade"];
    let musicEnabled = getMusicPreference();
    let musicVolume = getVolumePreference(musicVolumePreferenceKey, 50);
    let musicTrack = getChoicePreference(
        musicTrackPreferenceKey,
        ["random", ...musicTrackNames],
        "random"
    );
    let soundEffectsEnabled = getSoundEffectsPreference();
    let soundEffectsVolume = getVolumePreference(
        soundEffectsVolumePreferenceKey,
        50
    );
    let soundStyle = getChoicePreference(
        soundStylePreferenceKey,
        ["pulse", "arena", "arcade"],
        "pulse"
    );
    const legacyCornerStyle = getChoicePreference(
        cornerStylePreferenceKey,
        ["sharp", "rounded"],
        null
    );
    let cardShape = getShapePreference(cardShapePreferenceKey);
    let buttonShape = getShapePreference(buttonShapePreferenceKey);
    let siteTheme = getSiteThemePreference();
    let motionPreference = getChoicePreference(
        motionPreferenceKey,
        ["full", "reduced", "off"],
        "full"
    );
    let desktopNavigation = getDesktopNavigationPreference();
    let textSize = getTextSizePreference();
    let siteLanguage = getChoicePreference(
        siteLanguagePreferenceKey,
        ["en", "zh", "ms"],
        "en"
    );
    const translationTargets = collectTranslationTargets();
    const translationAriaTargets = collectTranslationAriaTargets();
    let soundEffectContext = null;
    let musicContext = null;
    let synthMusicMaster = null;
    let synthMusicTimer = null;
    let activeMusicTrack = null;

    if (legacyCornerStyle) {
        cardShape = legacyCornerStyle === "rounded" ? "rounded" : "square";
        buttonShape = legacyCornerStyle === "rounded" ? "rounded" : "square";

        try {
            window.localStorage.setItem(cardShapePreferenceKey, cardShape);
            window.localStorage.setItem(buttonShapePreferenceKey, buttonShape);
            window.localStorage.removeItem(cornerStylePreferenceKey);
        } catch (error) {
            // The converted choices remain active until the current page closes.
        }
    }

    function normalizeTranslationKey(value) {
        return String(value || "").replace(/\s+/g, " ").trim();
    }

    function getLocalizedText(sourceText) {
        const catalogue = window.KH_TRANSLATIONS || {};
        const languageCatalogue = catalogue[siteLanguage] || {};

        return languageCatalogue[sourceText] || sourceText;
    }

    function isTranslatable(sourceText) {
        const catalogue = window.KH_TRANSLATIONS || {};

        return Boolean(
            (catalogue.zh && catalogue.zh[sourceText]) ||
            (catalogue.ms && catalogue.ms[sourceText])
        );
    }

    function collectTranslationTargets() {
        const targets = [];
        const textWalker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    const parent = node.parentElement;
                    const sourceText = normalizeTranslationKey(node.nodeValue);

                    if (
                        !parent ||
                        !sourceText ||
                        parent.closest("script, style, [data-site-language]") ||
                        !isTranslatable(sourceText)
                    ) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        let target = textWalker.nextNode();

        while (target) {
            targets.push({
                node: target,
                sourceText: target.nodeValue,
                key: normalizeTranslationKey(target.nodeValue)
            });
            target = textWalker.nextNode();
        }

        return targets;
    }

    function collectTranslationAriaTargets() {
        return Array.from(document.querySelectorAll("[aria-label]"))
            .map(function (element) {
                return {
                    element,
                    sourceText: element.getAttribute("aria-label")
                };
            })
            .filter(function (target) {
                return isTranslatable(target.sourceText);
            });
    }

    function replaceNodeText(node, sourceText, replacement) {
        const leadingWhitespace = sourceText.match(/^\s*/)[0];
        const trailingWhitespace = sourceText.match(/\s*$/)[0];

        node.nodeValue = `${leadingWhitespace}${replacement}${trailingWhitespace}`;
    }

    function applyTranslations() {
        translationTargets.forEach(function (target) {
            replaceNodeText(
                target.node,
                target.sourceText,
                getLocalizedText(target.key)
            );
        });

        translationAriaTargets.forEach(function (target) {
            target.element.setAttribute(
                "aria-label",
                getLocalizedText(target.sourceText)
            );
        });
    }

    function updateLanguageChoices() {
        siteLanguageButtons.forEach(function (button) {
            const isSelected = button.dataset.siteLanguage === siteLanguage;

            button.classList.toggle("is-active", isSelected);
            button.setAttribute("aria-pressed", isSelected ? "true" : "false");
        });
    }

    function applySiteLanguage() {
        const languageCode = {
            en: "en",
            zh: "zh-Hans",
            ms: "ms"
        }[siteLanguage] || "en";

        document.documentElement.lang = languageCode;
        document.documentElement.dataset.siteLanguage = siteLanguage;
        document.body.dataset.siteLanguage = siteLanguage;
        applyTranslations();
        updateLanguageChoices();
        updateMusicSwitch();
        updateSoundEffectsSwitch();
        applyMusicVolume();
        applySoundEffectsVolume();
        applyTextSize();
    }

    function formatPercent(value) {
        if (siteLanguage === "zh") {
            return `${value}％`;
        }

        return siteLanguage === "ms" ? `${value} peratus` : `${value} percent`;
    }

    function getMusicPreference() {
        try {
            // Browsers do not reliably permit audio to begin on page load.
            // Always begin a fresh visit with music disabled; it can be
            // enabled by the visitor after they interact with the page.
            window.localStorage.setItem(musicPreferenceKey, "off");
        } catch (error) {
            // The same OFF default applies when local storage is unavailable.
        }

        return false;
    }

    function saveMusicPreference() {
        try {
            window.localStorage.setItem(
                musicPreferenceKey,
                musicEnabled ? "on" : "off"
            );
        } catch (error) {
            // Music still works when browser storage is unavailable.
        }
    }

    function constrainVolume(value, fallback) {
        if (value === null || value === "") {
            return fallback;
        }

        const selectedVolume = Number(value);

        if (!Number.isFinite(selectedVolume)) {
            return fallback;
        }

        return Math.min(100, Math.max(0, Math.round(selectedVolume)));
    }

    function getVolumePreference(preferenceKey, fallback) {
        try {
            return constrainVolume(
                window.localStorage.getItem(preferenceKey),
                fallback
            );
        } catch (error) {
            return fallback;
        }
    }

    function saveVolumePreference(preferenceKey, value) {
        try {
            window.localStorage.setItem(preferenceKey, value);
        } catch (error) {
            // The selected volume remains active until the current page closes.
        }
    }

    function getSoundEffectsPreference() {
        try {
            return window.localStorage.getItem(soundEffectsPreferenceKey) === "on";
        } catch (error) {
            return false;
        }
    }

    function saveSoundEffectsPreference() {
        try {
            window.localStorage.setItem(
                soundEffectsPreferenceKey,
                soundEffectsEnabled ? "on" : "off"
            );
        } catch (error) {
            // Sound effects still work when browser storage is unavailable.
        }
    }

    function getShapePreference(preferenceKey) {
        try {
            return window.localStorage.getItem(preferenceKey) === "rounded"
                ? "rounded"
                : "square";
        } catch (error) {
            return "square";
        }
    }

    function getChoicePreference(preferenceKey, allowedValues, fallback) {
        try {
            const savedValue = window.localStorage.getItem(preferenceKey);

            return allowedValues.includes(savedValue) ? savedValue : fallback;
        } catch (error) {
            return fallback;
        }
    }

    function getSiteThemePreference() {
        const savedTheme = getChoicePreference(
            siteThemePreferenceKey,
            ["default", "aurora", "ember"],
            null
        );

        if (savedTheme) {
            return savedTheme;
        }

        const legacyTheme = getChoicePreference(
            legacyAccentThemePreferenceKey,
            ["default", "cyan", "violet"],
            null
        );

        if (!legacyTheme) {
            return "default";
        }

        const convertedTheme = legacyTheme === "cyan"
            ? "aurora"
            : legacyTheme === "violet"
                ? "ember"
                : "default";

        try {
            window.localStorage.setItem(siteThemePreferenceKey, convertedTheme);
            window.localStorage.removeItem(legacyAccentThemePreferenceKey);
        } catch (error) {
            // The converted theme remains active until the current page closes.
        }

        return convertedTheme;
    }

    function saveChoicePreference(preferenceKey, value) {
        try {
            window.localStorage.setItem(preferenceKey, value);
        } catch (error) {
            // The selected preference remains active until the current page closes.
        }
    }

    function getDesktopNavigationPreference() {
        try {
            const savedPreference = window.localStorage.getItem(
                desktopNavigationPreferenceKey
            );

            return savedPreference === "compact" || savedPreference === "collapsed"
                ? "compact"
                : "expanded";
        } catch (error) {
            return "expanded";
        }
    }

    function saveDesktopNavigationPreference() {
        try {
            window.localStorage.setItem(
                desktopNavigationPreferenceKey,
                desktopNavigation
            );
        } catch (error) {
            // The selected layout remains active until the current page closes.
        }
    }

    function constrainTextSize(value) {
        const selectedSize = Number(value);

        if (!Number.isFinite(selectedSize)) {
            return 0;
        }

        return Math.min(
            textSizeMaximum,
            Math.max(textSizeMinimum, Math.round(selectedSize))
        );
    }

    function getTextSizePreference() {
        try {
            return constrainTextSize(
                window.localStorage.getItem(textSizePreferenceKey)
            );
        } catch (error) {
            return 0;
        }
    }

    function saveTextSizePreference() {
        try {
            window.localStorage.setItem(textSizePreferenceKey, textSize);
        } catch (error) {
            // The selected size remains active until the current page closes.
        }
    }

    function formatTextSize(value) {
        return value > 0 ? `+${value}` : String(value);
    }

    function applyTextSize() {
        const scale = 1 + textSize * textSizeScalePerStep;
        const textElements = [
            document.body,
            ...document.body.querySelectorAll("*")
        ];

        textElements.forEach(function (element) {
            let baseSize = textSizeBaseSizes.get(element);

            if (!Number.isFinite(baseSize)) {
                baseSize = Number.parseFloat(
                    window.getComputedStyle(element).fontSize
                );

                if (!Number.isFinite(baseSize) || baseSize <= 0) {
                    return;
                }

                textSizeBaseSizes.set(element, baseSize);
            }

            element.style.setProperty(
                "--site-text-size",
                `${Math.max(1, baseSize * scale).toFixed(3)}px`
            );
        });

        document.body.dataset.textSizeActive = "true";

        if (textSizeControl) {
            textSizeControl.value = String(textSize);
            textSizeControl.setAttribute(
                "aria-valuetext",
                textSize === 0
                    ? getLocalizedText("Current text size")
                    : formatPercent(Math.round(scale * 100))
            );
        }

        if (textSizeValue) {
            textSizeValue.textContent = formatTextSize(textSize);
        }
    }

    function updateAppearanceChoices(buttons, selectedShape) {
        buttons.forEach(function (button) {
            const choiceValue =
                button.dataset.cardShape ||
                button.dataset.buttonShape ||
                button.dataset.cornerStyle ||
                button.dataset.siteTheme ||
                button.dataset.motionPreference ||
                button.dataset.musicTrack ||
                button.dataset.soundStyle;
            const isSelected = choiceValue === selectedShape;

            button.classList.toggle("is-active", isSelected);
            button.setAttribute("aria-pressed", isSelected ? "true" : "false");
        });
    }

    function applyCardShape() {
        document.body.dataset.cardShape = cardShape;
        updateAppearanceChoices(cardShapeButtons, cardShape);
    }

    function applyButtonShape() {
        document.body.dataset.buttonShape = buttonShape;
        updateAppearanceChoices(buttonShapeButtons, buttonShape);
    }

    function updateVolumeControl(control, valueLabel, volume) {
        if (control) {
            control.value = String(volume);
            control.setAttribute("aria-valuetext", formatPercent(volume));
        }

        if (valueLabel) {
            valueLabel.textContent = `${volume}%`;
        }
    }

    function applyMusicVolume() {
        const normalizedVolume = musicVolume / 100;

        backgroundMusicTracks.forEach(function (track) {
            track.volume = normalizedVolume;
        });

        if (synthMusicMaster && musicContext) {
            synthMusicMaster.gain.cancelScheduledValues(musicContext.currentTime);
            synthMusicMaster.gain.setTargetAtTime(
                normalizedVolume * 0.42,
                musicContext.currentTime,
                0.05
            );
        }

        updateVolumeControl(musicVolumeControl, musicVolumeValue, musicVolume);
    }

    function applyMusicTrack() {
        updateAppearanceChoices(musicTrackButtons, musicTrack);
    }

    function applySoundEffectsVolume() {
        updateVolumeControl(
            soundEffectsVolumeControl,
            soundEffectsVolumeValue,
            soundEffectsVolume
        );
    }

    function applySoundStyle() {
        updateAppearanceChoices(soundStyleButtons, soundStyle);
    }

    function applySiteTheme() {
        document.body.dataset.siteTheme = siteTheme;
        updateAppearanceChoices(siteThemeButtons, siteTheme);
    }

    function applyMotionPreference() {
        document.documentElement.dataset.motionPreference = motionPreference;
        document.body.dataset.motionPreference = motionPreference;
        updateAppearanceChoices(motionPreferenceButtons, motionPreference);
    }

    /* Only real desktop/laptop computers (mouse or trackpad as the
       primary input) get the EXPAND / COMPACT navigation choice.
       Phones, tablets and iPads always use the compact navigation. */
    const desktopDeviceQuery = window.matchMedia
        ? window.matchMedia("(hover: hover) and (pointer: fine)")
        : null;

    function isDesktopDevice() {
        return Boolean(desktopDeviceQuery && desktopDeviceQuery.matches);
    }

    function applyDesktopNavigation() {
        document.body.dataset.desktopNavigation = isDesktopDevice()
            ? desktopNavigation
            : "compact";

        desktopNavigationButtons.forEach(function (button) {
            const isSelected =
                button.dataset.desktopNavigation === desktopNavigation;

            button.classList.toggle("is-active", isSelected);
            button.setAttribute("aria-pressed", isSelected ? "true" : "false");
        });
    }

    function updateMusicSwitch() {
        updateSwitch(musicSwitch, musicSwitchState, musicEnabled);
    }

    function updateSoundEffectsSwitch() {
        updateSwitch(
            soundEffectsSwitch,
            soundEffectsSwitchState,
            soundEffectsEnabled
        );
    }

    function updateSwitch(toggle, stateLabel, enabled) {
        if (!toggle) {
            return;
        }

        toggle.setAttribute("aria-checked", enabled ? "true" : "false");

        if (stateLabel) {
            stateLabel.textContent = getLocalizedText(enabled ? "ON" : "OFF");
        }
    }

    function getAudioContext(kind) {
        const AudioContextConstructor =
            window.AudioContext || window.webkitAudioContext;

        if (!AudioContextConstructor) {
            return null;
        }

        const context = kind === "music"
            ? musicContext
            : soundEffectContext;

        if (context) {
            return context;
        }

        try {
            const nextContext = new AudioContextConstructor();

            if (kind === "music") {
                musicContext = nextContext;
            } else {
                soundEffectContext = nextContext;
            }

            return nextContext;
        } catch (error) {
            return null;
        }
    }

    function getSoundEffectNotes(kind) {
        const notes = {
            control: [659.25, 987.77],
            select: [523.25, 783.99],
            navigation: [587.33, 880],
            tab: [698.46, 1046.5],
            expand: [392, 587.33, 783.99],
            collapse: [783.99, 587.33, 392],
            action: [440, 659.25, 880],
            menu: [493.88, 739.99],
            close: [739.99, 493.88],
            reset: [880, 659.25, 440],
            volume: [587.33, 783.99]
        };

        return notes[kind] || notes.control;
    }

    function getSoundEffectProfile() {
        const profiles = {
            pulse: {
                oscillator: "sine",
                supportingOscillator: "triangle",
                brightness: 3900,
                duration: 0.09,
                tone: 1
            },
            arena: {
                oscillator: "triangle",
                supportingOscillator: "sawtooth",
                brightness: 2500,
                duration: 0.12,
                tone: 1
            },
            arcade: {
                oscillator: "square",
                supportingOscillator: "triangle",
                brightness: 5200,
                duration: 0.075,
                tone: 0.95
            }
        };

        return profiles[soundStyle] || profiles.pulse;
    }

    function playSoundEffect(kind) {
        if (!soundEffectsEnabled || soundEffectsVolume === 0) {
            return;
        }

        const context = getAudioContext("effects");

        if (!context) {
            return;
        }

        try {
            if (context.state === "suspended") {
                context.resume();
            }

            const profile = getSoundEffectProfile();
            const startedAt = context.currentTime + 0.005;
            const notes = getSoundEffectNotes(kind);
            const master = context.createGain();
            const compressor = context.createDynamicsCompressor();
            const filter = context.createBiquadFilter();
            // At the 50% default, all sound styles stay prominently audible
            // without requiring visitors to raise their device volume.
            const volume = (soundEffectsVolume / 100) * 0.7;

            filter.type = "lowpass";
            filter.frequency.setValueAtTime(profile.brightness, startedAt);
            compressor.threshold.setValueAtTime(-15, startedAt);
            compressor.knee.setValueAtTime(18, startedAt);
            compressor.ratio.setValueAtTime(8, startedAt);
            compressor.attack.setValueAtTime(0.003, startedAt);
            compressor.release.setValueAtTime(0.12, startedAt);
            master.connect(filter);
            filter.connect(compressor);
            compressor.connect(context.destination);

            notes.forEach(function (frequency, index) {
                const oscillator = context.createOscillator();
                const gain = context.createGain();
                const noteStart = startedAt + index * 0.035;
                const duration = profile.duration + index * 0.006;
                const isAccent = index === notes.length - 1;

                oscillator.type = isAccent
                    ? profile.oscillator
                    : profile.supportingOscillator;
                oscillator.frequency.setValueAtTime(frequency, noteStart);
                oscillator.detune.setValueAtTime(
                    soundStyle === "arena" ? -4 + index * 3 : 0,
                    noteStart
                );
                gain.gain.setValueAtTime(0.0001, noteStart);
                gain.gain.exponentialRampToValueAtTime(
                    Math.max(0.001, volume * profile.tone / (index + 1)),
                    noteStart + 0.008
                );
                gain.gain.exponentialRampToValueAtTime(
                    0.0001,
                    noteStart + duration
                );

                oscillator.connect(gain);
                gain.connect(master);
                oscillator.start(noteStart);
                oscillator.stop(noteStart + duration + 0.012);
            });

            window.setTimeout(function () {
                master.disconnect();
                filter.disconnect();
                compressor.disconnect();
            }, 360);
        } catch (error) {
            // A browser can refuse generated audio until a visitor interacts with the page.
        }
    }

    function createSynthTone(context, destination, frequency, start, duration, type, level) {
        const oscillator = context.createOscillator();
        const filter = context.createBiquadFilter();
        const gain = context.createGain();

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, start);
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(type === "sawtooth" ? 1650 : 2900, start);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(
            Math.max(0.0005, level),
            start + 0.018
        );
        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            start + Math.max(0.06, duration)
        );

        oscillator.connect(filter);
        filter.connect(gain);
        gain.connect(destination);
        oscillator.start(start);
        oscillator.stop(start + duration + 0.03);
    }

    function createSynthKick(context, destination, start, level) {
        const oscillator = context.createOscillator();
        const gain = context.createGain();

        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(148, start);
        oscillator.frequency.exponentialRampToValueAtTime(48, start + 0.12);
        gain.gain.setValueAtTime(Math.max(0.0005, level), start);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.13);

        oscillator.connect(gain);
        gain.connect(destination);
        oscillator.start(start);
        oscillator.stop(start + 0.14);
    }

    function createSynthHat(context, destination, start, level) {
        const duration = 0.045;
        const buffer = context.createBuffer(
            1,
            Math.floor(context.sampleRate * duration),
            context.sampleRate
        );
        const data = buffer.getChannelData(0);
        const source = context.createBufferSource();
        const filter = context.createBiquadFilter();
        const gain = context.createGain();

        for (let index = 0; index < data.length; index += 1) {
            data[index] = Math.random() * 2 - 1;
        }

        source.buffer = buffer;
        filter.type = "highpass";
        filter.frequency.setValueAtTime(6200, start);
        gain.gain.setValueAtTime(Math.max(0.0001, level), start);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

        source.connect(filter);
        filter.connect(gain);
        gain.connect(destination);
        source.start(start);
    }

    function scheduleSynthBar(track, start) {
        if (!musicContext || !synthMusicMaster) {
            return;
        }

        const stepDuration = track === "arcade" ? 0.205 : 0.25;
        const roots = track === "arcade"
            ? [65.41, 73.42, 55, 61.74]
            : [55, 55, 65.41, 49];
        const pulseMelody = [0, 7, 12, 7, 3, 7, 10, 7, 0, 7, 14, 12, 3, 7, 10, 5];
        const arcadeMelody = [12, 16, 19, 16, 14, 19, 21, 19, 12, 16, 24, 21, 14, 19, 21, 16];
        const melody = track === "arcade" ? arcadeMelody : pulseMelody;
        const barDuration = stepDuration * 16;

        roots.forEach(function (root, chordIndex) {
            const chordStart = start + chordIndex * stepDuration * 4;
            createSynthTone(
                musicContext,
                synthMusicMaster,
                root * 2,
                chordStart,
                stepDuration * 3.8,
                "triangle",
                track === "arcade" ? 0.05 : 0.075
            );
            createSynthTone(
                musicContext,
                synthMusicMaster,
                root * 2.52,
                chordStart,
                stepDuration * 3.6,
                "sine",
                0.032
            );
        });

        for (let step = 0; step < 16; step += 1) {
            const noteStart = start + step * stepDuration;
            const root = roots[Math.floor(step / 4)];
            const semitone = melody[step];
            const frequency = root * 4 * Math.pow(2, semitone / 12);

            if (step % 4 === 0 || (track === "arcade" && step % 4 === 2)) {
                createSynthKick(
                    musicContext,
                    synthMusicMaster,
                    noteStart,
                    track === "arcade" ? 0.2 : 0.24
                );
            }

            if (step % 2 === 1) {
                createSynthHat(
                    musicContext,
                    synthMusicMaster,
                    noteStart,
                    track === "arcade" ? 0.035 : 0.026
                );
            }

            createSynthTone(
                musicContext,
                synthMusicMaster,
                root,
                noteStart,
                stepDuration * 0.72,
                "sawtooth",
                track === "arcade" ? 0.064 : 0.052
            );

            if (step % 2 === 0 || track === "arcade") {
                createSynthTone(
                    musicContext,
                    synthMusicMaster,
                    frequency,
                    noteStart + stepDuration * 0.07,
                    stepDuration * 0.7,
                    track === "arcade" ? "square" : "triangle",
                    track === "arcade" ? 0.035 : 0.024
                );
            }
        }

        return barDuration;
    }

    function stopSynthMusic() {
        if (synthMusicTimer) {
            window.clearInterval(synthMusicTimer);
            synthMusicTimer = null;
        }

        if (synthMusicMaster && musicContext) {
            const masterToStop = synthMusicMaster;

            masterToStop.gain.cancelScheduledValues(musicContext.currentTime);
            masterToStop.gain.setTargetAtTime(0.0001, musicContext.currentTime, 0.04);
            window.setTimeout(function () {
                masterToStop.disconnect();
            }, 200);
        }

        synthMusicMaster = null;
    }

    function startSynthMusic(track) {
        const context = getAudioContext("music");

        if (!context) {
            return;
        }

        try {
            if (context.state === "suspended") {
                context.resume();
            }

            synthMusicMaster = context.createGain();
            synthMusicMaster.gain.setValueAtTime(0.0001, context.currentTime);
            synthMusicMaster.connect(context.destination);
            applyMusicVolume();

            const barDuration = scheduleSynthBar(track, context.currentTime + 0.06);

            synthMusicTimer = window.setInterval(function () {
                scheduleSynthBar(track, context.currentTime + 0.06);
            }, Math.round(barDuration * 1000));
        } catch (error) {
            stopSynthMusic();
        }
    }

    function selectMusicTrack() {
        if (musicTrack !== "random") {
            return musicTrack;
        }

        const availableTracks = musicTrackNames.filter(function (track) {
            return track !== activeMusicTrack;
        });
        const tracksToChoose = availableTracks.length
            ? availableTracks
            : musicTrackNames;

        return tracksToChoose[
            Math.floor(Math.random() * tracksToChoose.length)
        ];
    }

    function startMusic() {
        if (!musicEnabled) {
            return;
        }

        const selectedTrack = selectMusicTrack();

        stopMusic();
        activeMusicTrack = selectedTrack;

        const selectedAudioTrack = {
            night: backgroundMusic,
            pulse: pulseMusic,
            arcade: arcadeMusic
        }[selectedTrack];

        if (selectedAudioTrack) {
            selectedAudioTrack.currentTime = 0;
            selectedAudioTrack.loop = true;
            applyMusicVolume();

            const playback = selectedAudioTrack.play();

            if (playback) {
                playback.catch(function () {
                    // Playback can only begin after a visitor interaction.
                });
            }

            return;
        }

    }

    function stopMusic() {
        backgroundMusicTracks.forEach(function (track) {
            track.pause();
            track.currentTime = 0;
        });

        stopSynthMusic();
        activeMusicTrack = null;
    }

    function resetAllSettings() {
        musicEnabled = false;
        musicVolume = 50;
        musicTrack = "random";
        soundEffectsEnabled = false;
        soundEffectsVolume = 50;
        soundStyle = "pulse";
        cardShape = "square";
        buttonShape = "square";
        siteTheme = "default";
        motionPreference = "full";
        desktopNavigation = "expanded";
        textSize = 0;
        siteLanguage = "en";

        try {
            [
                musicPreferenceKey,
                musicVolumePreferenceKey,
                "kh-esports-music-volume-v1",
                musicTrackPreferenceKey,
                soundEffectsPreferenceKey,
                soundEffectsVolumePreferenceKey,
                "kh-esports-sfx-volume-v1",
                soundStylePreferenceKey,
                cardShapePreferenceKey,
                buttonShapePreferenceKey,
                cornerStylePreferenceKey,
                legacyAccentThemePreferenceKey,
                siteThemePreferenceKey,
                motionPreferenceKey,
                desktopNavigationPreferenceKey,
                textSizePreferenceKey,
                siteLanguagePreferenceKey
            ].forEach(function (preferenceKey) {
                window.localStorage.removeItem(preferenceKey);
            });
        } catch (error) {
            // The default appearance still applies for the current visit.
        }

        stopMusic();
        updateMusicSwitch();
        applyMusicVolume();
        applyMusicTrack();
        updateSoundEffectsSwitch();
        applySoundEffectsVolume();
        applySoundStyle();
        applyCardShape();
        applyButtonShape();
        applySiteTheme();
        applyMotionPreference();
        applyDesktopNavigation();
        applyTextSize();
        applySiteLanguage();

        if (settingsResetStatus) {
            settingsResetStatus.textContent = getLocalizedText(
                "Settings restored to their defaults."
            );
        }
    }

    function openSettings() {
        if (modal.classList.contains("is-open")) {
            return;
        }

        if (closeTimer) {
            window.clearTimeout(closeTimer);
            closeTimer = null;
        }

        opener = document.activeElement;
        modal.hidden = false;
        modal.setAttribute("aria-hidden", "false");
        trigger.setAttribute("aria-expanded", "true");
        document.body.classList.add("site-settings-open");

        window.requestAnimationFrame(function () {
            modal.classList.add("is-open");
            closeButton.focus();
        });
    }

    function closeSettings() {
        if (!modal.classList.contains("is-open")) {
            return;
        }

        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        trigger.setAttribute("aria-expanded", "false");

        closeTimer = window.setTimeout(function () {
            modal.hidden = true;
            document.body.classList.remove("site-settings-open");
            closeTimer = null;

            if (opener && typeof opener.focus === "function") {
                opener.focus();
            }
        }, 280);
    }

    trigger.addEventListener("click", openSettings);
    closeButton.addEventListener("click", closeSettings);

    if (backdrop) {
        backdrop.addEventListener("click", closeSettings);
    }

    if (musicSwitch) {
        musicSwitch.addEventListener("click", function () {
            musicEnabled = !musicEnabled;
            saveMusicPreference();
            updateMusicSwitch();

            if (musicEnabled) {
                startMusic();
            } else {
                stopMusic();
            }
        });
    }

    if (musicVolumeControl) {
        musicVolumeControl.addEventListener("input", function () {
            musicVolume = constrainVolume(musicVolumeControl.value, 50);
            saveVolumePreference(musicVolumePreferenceKey, musicVolume);
            applyMusicVolume();
        });
    }

    musicTrackButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            musicTrack = button.dataset.musicTrack;
            saveChoicePreference(musicTrackPreferenceKey, musicTrack);
            applyMusicTrack();

            if (musicEnabled) {
                startMusic();
            }
        });
    });

    if (soundEffectsSwitch) {
        soundEffectsSwitch.addEventListener("click", function () {
            soundEffectsEnabled = !soundEffectsEnabled;
            saveSoundEffectsPreference();
            updateSoundEffectsSwitch();
        });
    }

    if (soundEffectsVolumeControl) {
        soundEffectsVolumeControl.addEventListener("input", function () {
            soundEffectsVolume = constrainVolume(
                soundEffectsVolumeControl.value,
                50
            );
            saveVolumePreference(
                soundEffectsVolumePreferenceKey,
                soundEffectsVolume
            );
            applySoundEffectsVolume();
        });

        soundEffectsVolumeControl.addEventListener("change", function () {
            playSoundEffect("volume");
        });
    }

    soundStyleButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            soundStyle = button.dataset.soundStyle;
            saveChoicePreference(soundStylePreferenceKey, soundStyle);
            applySoundStyle();
        });
    });

    cardShapeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            cardShape = button.dataset.cardShape === "rounded"
                ? "rounded"
                : "square";
            saveChoicePreference(cardShapePreferenceKey, cardShape);
            applyCardShape();
        });
    });

    buttonShapeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            buttonShape = button.dataset.buttonShape === "rounded"
                ? "rounded"
                : "square";
            saveChoicePreference(buttonShapePreferenceKey, buttonShape);
            applyButtonShape();
        });
    });

    siteThemeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            siteTheme = button.dataset.siteTheme;
            saveChoicePreference(siteThemePreferenceKey, siteTheme);
            applySiteTheme();
        });
    });

    motionPreferenceButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            motionPreference = button.dataset.motionPreference;
            saveChoicePreference(motionPreferenceKey, motionPreference);
            applyMotionPreference();
        });
    });

    desktopNavigationButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            desktopNavigation =
                button.dataset.desktopNavigation === "compact"
                    ? "compact"
                    : "expanded";
            saveDesktopNavigationPreference();
            applyDesktopNavigation();
        });
    });

    siteLanguageButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            siteLanguage = ["en", "zh", "ms"].includes(
                button.dataset.siteLanguage
            )
                ? button.dataset.siteLanguage
                : "en";
            saveChoicePreference(siteLanguagePreferenceKey, siteLanguage);
            applySiteLanguage();
        });
    });

    if (textSizeControl) {
        textSizeControl.addEventListener("input", function () {
            textSize = constrainTextSize(textSizeControl.value);
            saveTextSizePreference();
            applyTextSize();
        });

        textSizeControl.addEventListener("change", playSoundEffect);
    }

    if (resetSettingsButton) {
        resetSettingsButton.addEventListener("click", resetAllSettings);
    }

    function getSoundEffectKind(interactiveElement) {
        if (interactiveElement.id === "resetSettingsButton") {
            return "reset";
        }

        if (
            interactiveElement.matches(
                ".site-settings-close, [data-close-site-settings], .tentative-flow-close, .venue-navigation-close, .prize-details-close"
            )
        ) {
            return "close";
        }

        if (interactiveElement.matches(".bracket-accordion-toggle")) {
            return interactiveElement.getAttribute("aria-expanded") === "true"
                ? "expand"
                : "collapse";
        }

        if (interactiveElement.matches(".bracket-tab")) {
            return "tab";
        }

        if (interactiveElement.matches(".menu-toggle")) {
            return "menu";
        }

        if (
            interactiveElement.matches(
                "[data-card-shape], [data-button-shape], [data-site-theme], [data-motion-preference], [data-desktop-navigation], [data-site-language], [data-music-track], [data-sound-style]"
            )
        ) {
            return "select";
        }

        if (interactiveElement.matches("a")) {
            return "navigation";
        }

        if (
            interactiveElement.matches(
                ".primary-button, .secondary-button, .nav-button, .mobile-register, .tentative-flow-button, .venue-navigation-button, .prize-details-button"
            )
        ) {
            return "action";
        }

        return "control";
    }

    document.addEventListener("click", function (event) {
        const interactiveElement = event.target.closest("button, a");

        if (interactiveElement) {
            playSoundEffect(getSoundEffectKind(interactiveElement));
        }
    });

    document.addEventListener(
        "pointerdown",
        function () {
            if (musicEnabled && !activeMusicTrack) {
                startMusic();
            }
        },
        { once: true }
    );

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && modal.classList.contains("is-open")) {
            closeSettings();
        }
    });

    updateMusicSwitch();
    applyMusicVolume();
    applyMusicTrack();
    updateSoundEffectsSwitch();
    applySoundEffectsVolume();
    applySoundStyle();
    applyCardShape();
    applyButtonShape();
    applySiteTheme();
    applyMotionPreference();
    applyDesktopNavigation();

    if (desktopDeviceQuery) {
        if (desktopDeviceQuery.addEventListener) {
            desktopDeviceQuery.addEventListener("change", applyDesktopNavigation);
        } else if (desktopDeviceQuery.addListener) {
            desktopDeviceQuery.addListener(applyDesktopNavigation);
        }
    }

    applyTextSize();
    applySiteLanguage();
})();


/* =====================================================
   RELOAD SCROLL GUARD

   After a reload, keep the page exactly where the visitor
   was. Some browsers (notably iPad Safari) can end up
   scrolling to a different section while the page is still
   loading, so the last known position is restored instantly
   until the page has settled or the visitor touches it.
===================================================== */

(function () {
    "use strict";

    var storageKey = "kh-esports-scroll-position-v1";
    var root = document.documentElement;

    var savedPosition = null;
    var guardActive = false;
    var visitorMoved = false;
    var saveQueued = false;

    function isReloadNavigation() {
        try {
            var entries = window.performance.getEntriesByType("navigation");

            if (entries && entries.length) {
                return entries[0].type === "reload";
            }

            return Boolean(
                window.performance.navigation &&
                window.performance.navigation.type === 1
            );
        } catch (error) {
            return false;
        }
    }

    function readSavedPosition() {
        try {
            var stored = window.sessionStorage.getItem(storageKey);
            var parsed = stored === null ? NaN : parseFloat(stored);

            return isFinite(parsed) && parsed >= 0 ? parsed : null;
        } catch (error) {
            return null;
        }
    }

    function writeSavedPosition() {
        if (guardActive) {
            return;
        }

        try {
            window.sessionStorage.setItem(
                storageKey,
                String(Math.round(window.scrollY))
            );
        } catch (error) {
            // Scroll position simply will not be remembered.
        }
    }

    function queueSave() {
        if (saveQueued) {
            return;
        }

        saveQueued = true;

        window.requestAnimationFrame(function () {
            saveQueued = false;
            writeSavedPosition();
        });
    }

    function restorePosition() {
        if (!guardActive || visitorMoved || savedPosition === null) {
            return;
        }

        var maxScroll = Math.max(
            0,
            root.scrollHeight - window.innerHeight
        );

        var target = Math.min(savedPosition, maxScroll);

        if (Math.abs(window.scrollY - target) > 2) {
            window.scrollTo(0, target);
        }
    }

    function releaseGuard() {
        guardActive = false;
        root.classList.remove("kh-restoring");
    }

    guardActive = isReloadNavigation();
    savedPosition = guardActive ? readSavedPosition() : null;

    if (savedPosition === null) {
        guardActive = false;
    }

    ["touchstart", "wheel", "mousedown", "keydown"].forEach(function (name) {
        window.addEventListener(
            name,
            function () {
                visitorMoved = true;
            },
            { passive: true, once: true }
        );
    });

    window.addEventListener("scroll", queueSave, { passive: true });
    window.addEventListener("pagehide", writeSavedPosition);

    document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "hidden") {
            writeSavedPosition();
        }
    });

    if (guardActive) {
        window.addEventListener("resize", restorePosition);
        restorePosition();
        document.addEventListener("DOMContentLoaded", restorePosition);
    }

    function onPageLoaded() {
        restorePosition();

        [150, 400, 800, 1400].forEach(function (delay) {
            window.setTimeout(restorePosition, delay);
        });

        window.setTimeout(releaseGuard, 1600);
    }

    if (document.readyState === "complete") {
        onPageLoaded();
    } else {
        window.addEventListener("load", onPageLoaded);
    }
})();
