function removeBlueChecks() {
    const blueChecks = document.querySelectorAll('svg[aria-label="Verified account"]');
    blueChecks.forEach(check => check.style.display = 'none');
}

removeBlueChecks();

const observer = new MutationObserver(removeBlueChecks);
observer.observe(document.body, { childList: true, subtree: true });
