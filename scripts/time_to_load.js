window.addEventListener("load", function () {

    const durationElement = document.querySelector(".time_loaded");

    if (durationElement) {
        let domainLookupEnd = performance.getEntriesByType('navigation')[0].domainLookupEnd;
        let loadEventStart = performance.getEntriesByType('navigation')[0].loadEventStart;
        durationElement.textContent = (loadEventStart - domainLookupEnd).toFixed(1) + " мс";
    }
});