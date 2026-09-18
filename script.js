const sliders = document.querySelectorAll('.division-slider');
sliders.forEach(function (slider) {
    const track = slider.querySelector('.division-slider-track');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    const totalSlides = track.children.length;
    track.style.width = (totalSlides * 100) + "%";
    const images = track.children;
    for (let i = 0; i < images.length; i++) {
        images[i].style.flex = "0 0 " + (100 / totalSlides) + "%";
    }

    let currentSlide = 0;

    function updateSlide() {
        track.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
    }

    nextBtn.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        currentSlide = currentSlide + 1;
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        updateSlide();
    });

    prevBtn.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        currentSlide = currentSlide - 1;
        if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        updateSlide();
    });
});

/* =========================================
   CONTACT FORM & CONCIERGE INTEGRATION
   ========================================= */

const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');
const submitBtn = document.getElementById('btn-submit-inquiry');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('client-name').value.trim();
        const email = document.getElementById('client-email').value.trim();
        const phone = document.getElementById('client-phone').value.trim();
        const destination = document.getElementById('client-destination').value || 'To be curated';
        const service = document.getElementById('client-service').value || 'Bespoke Experience';
        const dates = document.getElementById('client-dates').value.trim() || 'Flexible';
        const message = document.getElementById('client-message').value.trim() || 'None provided';

        if (!name || !email || !phone) {
            if (formFeedback) {
                formFeedback.className = 'form-feedback error';
                formFeedback.style.display = 'block';
                formFeedback.textContent = 'Please complete all required fields (Name, Email, Phone).';
            }
            return;
        }

        // WhatsApp number for concierge
        const conciergeNumber = '573001234567';

        // Format luxury WhatsApp message
        const waText = `✨ *COLOMBIA LUXE — PRIVATE INQUIRY* ✨\n\n` +
            `👤 *Client:* ${name}\n` +
            `✉️ *Email:* ${email}\n` +
            `📱 *Phone / WA:* ${phone}\n` +
            `📍 *Destination:* ${destination}\n` +
            `🛎️ *Service:* ${service}\n` +
            `🗓️ *Dates:* ${dates}\n` +
            `📝 *Special Requests:* ${message}\n\n` +
            `_Sent via Colombia Luxe VIP Portal_`;

        // Update button state
        const originalBtnHTML = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Connecting with Concierge...</span>`;

        // Display feedback banner
        if (formFeedback) {
            formFeedback.className = 'form-feedback success';
            formFeedback.style.display = 'block';
            formFeedback.innerHTML = `✦ Thank you, <strong>${name}</strong>. Your private inquiry has been recorded. Directing you to our VIP Concierge on WhatsApp...`;
        }

        // Launch WhatsApp handoff
        const waUrl = `https://wa.me/${conciergeNumber}?text=${encodeURIComponent(waText)}`;

        setTimeout(() => {
            window.open(waUrl, '_blank', 'noopener,noreferrer');
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHTML;
            contactForm.reset();
        }, 1200);
    });
}

/* =========================================
   DIVISIONS & SERVICES DATA
   ========================================= */

const divisionsData = {
    stay: {
        title: "Stay & Mobility",
        tagline: "Everything arranged before you land.",
        buttonText: "Explore services",
        services: [
            {
                name: "Accommodation",
                description: "Private villas, luxury hotels and exclusive residences.",
                icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H4a1 1 0 0 1-1-1v-9.5z"/></svg>`
            },
            {
                name: "Boats & Yachts",
                description: "Private charters across the most exclusive coastal destinations.",
                icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 20h20M4 17l2-9h12l2 9H4zM12 4v4"/></svg>`
            },
            {
                name: "Transport",
                description: "Premium vehicles, private drivers and airport transfers.",
                icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="8" rx="2"/><path d="M5 11l2-5h10l2 5M7 19v2M17 19v2"/></svg>`
            },
            {
                name: "Security",
                description: "Discreet private security and event protection.",
                icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
            }
        ]
    },

    culinary: {
        title: "Culinary & Celebrations",
        tagline: "From a private chef to a full night out.",
        buttonText: "Explore experiences",
        services: [
            {
                name: "Private Chef",
                description: "Menus tailored to your occasion, in your own space.",
                icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6v-7.13zM6 17h12"/></svg>`
            },
            {
                name: "Gastronomic",
                description: "Curated dining experiences with local flavor.",
                icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>`
            },
            {
                name: "Birthday & Bachelor(ette)",
                description: "Full logistics for private celebrations.",
                icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
            },
            {
                name: "DJ",
                description: "Sound and atmosphere for any event.",
                icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3"/></svg>`
            },
            {
                name: "Pool Party & Nightlife",
                description: "Access to the city's most exclusive scenes.",
                icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 22h8M12 15v7M19 3H5l7 9 7-9z"/></svg>`
            }
        ]
    },

    wellbeing: {
        title: "Wellbeing & Performance",
        tagline: "Recovery and care for the traveler who never stops.",
        buttonText: "Explore wellbeing",
        services: [
            {
                name: "Aesthetic Medicine",
                description: "Treatments with trusted professionals.",
                icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"/></svg>`
            },
            {
                name: "Golf",
                description: "Access to premium courses and instructors.",
                icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 22h16M12 2v20M12 2l7 4-7 4"/></svg>`
            },
            {
                name: "Hair Salon & Spa",
                description: "In-house styling and relaxation.",
                icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`
            },
            {
                name: "Sports Rehabilitation",
                description: "Recovery sessions during your stay.",
                icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`
            }
        ]
    }
};


