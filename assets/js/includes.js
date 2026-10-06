async function loadInclude(selector, file) {
    const element = document.querySelector(selector);
    if (!element) return false;

    try {
        // Append a timestamp to circumvent aggressive fetch caching
        const cacheBuster = new Date().getTime();
        let response = await fetch(`${file}?v=${cacheBuster}`);
        if (!response.ok) {
            // Relative fallback in case site is served from a subfolder
            const relFile = file.startsWith('/') ? file.slice(1) : file;
            const depth = window.location.pathname.split('/').filter(Boolean).length;
            const prefix = depth > 1 ? '../' : './';
            response = await fetch(`${prefix}${relFile}?v=${cacheBuster}`);
        }
        if (!response.ok) {
            throw new Error(`Failed to load ${file}: ${response.status}`);
        }
        element.innerHTML = await response.text();
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

// Preload primary brand fonts immediately with highest priority to eliminate any FOUT/jerk
(function preloadCriticalFonts() {
    const fonts = [
        '/fonts/Poppins-Regular.woff2',
        '/fonts/Poppins-Medium.woff2',
        '/fonts/Poppins-SemiBold.woff2',
        '/fonts/Poppins-Bold.woff2',
        '/fonts/QAEFQSTTFirsNeue-Regular.woff2'
    ];
    fonts.forEach(href => {
        if (!document.querySelector(`link[rel="preload"][href="${href}"]`)) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'font';
            link.type = 'font/woff2';
            link.crossOrigin = 'anonymous';
            link.href = href;
            document.head.appendChild(link);
        }
    });
})();

document.addEventListener("DOMContentLoaded", async () => {
    // Load header first and reveal immediately to prevent any visual delay
    const headerPromise = loadInclude("#site-header", "/header.html").then(() => {
        const headerEl = document.querySelector('.header');
        if (headerEl) {
            requestAnimationFrame(() => {
                headerEl.classList.add('header--visible');
            });
        }
    });

    // Load remaining includes concurrently
    await Promise.all([
        headerPromise,
        loadInclude("#site-footer", "/footer.html"),
        loadInclude("#consultation-form-wrapper, .consultation__form-wrapper", "/consultation-form.html")
    ]);

    // Auto-select dropdown option if data-service attribute is present on wrapper
    const formWrapper = document.querySelector("#consultation-form-wrapper, .consultation__form-wrapper");
    if (formWrapper) {
        const defaultService = formWrapper.getAttribute("data-service");
        if (defaultService) {
            const selectEl = formWrapper.querySelector("#service");
            if (selectEl && selectEl.querySelector(`option[value="${defaultService}"]`)) {
                selectEl.value = defaultService;
            }
        }
    }
    
    // Dispatch a custom event so script.js / service.js knows the DOM is fully ready
    document.dispatchEvent(new Event("includesLoaded"));

    // Ensure header transitions in smoothly without sudden jerk
    requestAnimationFrame(() => {
        const headerEl = document.querySelector('.header');
        if (headerEl) {
            headerEl.classList.add('header--visible');
        }
    });
});

