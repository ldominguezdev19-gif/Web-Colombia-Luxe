const sliders = document.querySelectorAll('.division-slider');
sliders.forEach(function(slider){
    const track = slider.querySelector('.division-slider-track');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    const totalSlides = track.children.length;
    track.style.width = (totalSlides *100) + "%";
    const images = track.children;
    for (let i = 0; i < images.length; i++){
        images[i].style.flex = "0 0 " + (100/totalSlides) + "%";
    }

    let currentSlide = 0;

    function updateSlide(){
        track.style.transform = `translateX(-${currentSlide * (100/totalSlides)}%)`;
    }

    nextBtn.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        currentSlide = currentSlide + 1;
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        updateSlide();
    });

    prevBtn.addEventListener('click', function(event) {
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


