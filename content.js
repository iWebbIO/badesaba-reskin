function runAllFixes() {
    document.querySelector('bs-header')?.remove();
    document.querySelector('bs-footer')?.remove();
    document.querySelector('bs-weather')?.remove();
    document.querySelector('bs-owghat-today')?.remove();
    document.querySelector('app-products')?.remove();
    document.querySelector('bs-news')?.remove();
    document.querySelector('bs-hero-banner')?.remove();
    document.querySelector('bs-faq-slider')?.remove();
    document.querySelector('bs-download-bar')?.remove(); // <--- Add this line
    const layoutWrapper = document.querySelector('.layout-wrapper');
    if (layoutWrapper) {
        layoutWrapper.style.marginTop = '2rem';
    }
    const dateTimeContainer = document.querySelector('bs-date-time')?.closest('.col-md-6');
    if (dateTimeContainer) {
        dateTimeContainer.classList.remove('col-md-6');
        dateTimeContainer.classList.add('col-md-12');
    }
    document.title = "Calendar by Webb";

    const calendarSection = document.querySelector('bs-calendar-section');
    if (calendarSection) {
        calendarSection.classList.remove('bg-white');
        calendarSection.style.backgroundColor = '#1a1b26';
    }

    const converterHeaders = document.querySelectorAll('bs-convert-date .header-title');
    if (converterHeaders.length > 0) {
        converterHeaders.forEach(header => {
            header.style.backgroundColor = '#31364a';
        });
    }
}

let debounceTimer;
const observer = new MutationObserver(() => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(runAllFixes, 50);
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true
});

document.addEventListener('DOMContentLoaded', runAllFixes);