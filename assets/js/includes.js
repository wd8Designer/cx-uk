async function loadInclude(selector, file) {
    const element = document.querySelector(selector);
    if (!element) return false;

    try {
        const response = await fetch(file);
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
        loadInclude("#site-header", "header.html"),
        loadInclude("#site-footer", "footer.html")
    ]);
    
    // Dispatch a custom event so script.js knows the DOM is fully ready
    document.dispatchEvent(new Event("includesLoaded"));
});
