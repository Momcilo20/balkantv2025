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
