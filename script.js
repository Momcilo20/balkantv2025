// WhatsApp click for pricing cards
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('#pricing .card').forEach(function(card) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            var message = encodeURIComponent(card.getAttribute('data-message'));
            var phone = '38766399966'; // WhatsApp number without leading zero
            var url = `https://wa.me/${phone}?text=${message}`;
            window.open(url, '_blank');
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let title = document.getElementById("balkan-title");
    let subtitle = document.getElementById("balkan-subtitle");
    let sections = document.querySelectorAll(".section");

    setTimeout(() => {
        title.style.opacity = "1";
        title.style.transform = "scale(1)";
        subtitle.style.opacity = "1";
    }, 800);

    // Smooth Scroll Effect
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Transparent transition effect
    function revealSections() {
        sections.forEach((section) => {
            let position = section.getBoundingClientRect().top;
            if (position < window.innerHeight * 0.8) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});
// Smooth Scroll Effect
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});
// Promo video mute/unmute logic
document.addEventListener("DOMContentLoaded", function() {
    const promoSection = document.querySelector('.promo-video-section');
    const promoTitle = document.querySelector('.promo-video-title');
    const promoWrapper = document.querySelector('.promo-video-wrapper');
    const video = document.getElementById('promoVideo');
    const muteBtn = document.getElementById('muteToggle');
    const muteIcon = document.getElementById('muteIcon');

    // Fade-in effect
    function revealOnScroll() {
        const sectionTop = promoSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            promoTitle.classList.add('fade-in-pop');
            promoWrapper.classList.add('fade-in-pop');
            window.removeEventListener('scroll', revealOnScroll);
        }
    }
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Always start muted
    if (video) video.muted = true;

    // Mute/unmute on hover
    if (promoWrapper && video && muteBtn && muteIcon) {
        promoWrapper.addEventListener('mouseenter', function() {
            if (!video.muted) return; // Don't override manual unmute
            video.muted = false;
            muteIcon.classList.remove('fa-volume-xmark');
            muteIcon.classList.add('fa-volume-high');
        });
        promoWrapper.addEventListener('mouseleave', function() {
            if (!video.muted) return; // Don't override manual unmute
            video.muted = true;
            muteIcon.classList.remove('fa-volume-high');
            muteIcon.classList.add('fa-volume-xmark');
        });

        // Button toggles mute/unmute
        muteBtn.style.pointerEvents = "auto";
        muteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            video.muted = !video.muted;
            if (video.muted) {
                muteIcon.classList.remove('fa-volume-high');
                muteIcon.classList.add('fa-volume-xmark');
            } else {
                muteIcon.classList.remove('fa-volume-xmark');
                muteIcon.classList.add('fa-volume-high');
            }
        });
    }

    // Mute video if not in promo section (on scroll)
    function muteIfNotInSection() {
        const rect = promoSection.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (!inView && video) {
            video.muted = true;
            muteIcon.classList.remove('fa-volume-high');
            muteIcon.classList.add('fa-volume-xmark');
        }
    }
    window.addEventListener('scroll', muteIfNotInSection);
    muteIfNotInSection();
});

// Ensure promo video starts muted and keep existing promo logic
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('promoVideo');
    if (video) {
        video.muted = true; // start muted
        // Optional: ensure icon matches initial state if icon exists
        const muteIcon = document.getElementById('muteIcon');
        if (muteIcon) {
            muteIcon.classList.remove('fa-volume-high');
            muteIcon.classList.add('fa-volume-xmark');
        }
    }
});
