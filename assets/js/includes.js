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

document.addEventListener("DOMContentLoaded", async () => {
    // Load includes concurrently
    await Promise.all([
        loadInclude("#site-header", "/header.html"),
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
    
    // Dispatch a custom event so script.js knows the DOM is fully ready
    document.dispatchEvent(new Event("includesLoaded"));
});

