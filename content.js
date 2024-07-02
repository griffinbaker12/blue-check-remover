function removeBlueChecks() {
    const blueChecks = document.querySelectorAll('svg[aria-label="Verified account"]');
    blueChecks.forEach(check => {
        // Find the parent div and remove it so the styling doesn't get messed up
        let parentDiv = check.closest('div');
        if (parentDiv) {
            parentDiv.remove();
        }
    });
}

removeBlueChecks();

const observer = new MutationObserver(removeBlueChecks);
observer.observe(document.body, { childList: true, subtree: true });
