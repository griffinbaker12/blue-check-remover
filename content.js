function removeBlueChecks() {
    const blueChecks = document.querySelectorAll('svg[aria-label="Verified account"]');
    blueChecks.forEach(check => {
        // Find the parent div and remove it so the styling doesn't get messed up
        let parentDiv = check.closest('div, span');
        if (parentDiv) {
            parentDiv.remove();
        }
    });
}

function reloadPages() {
    const loadMoreText = Array.from(document.querySelectorAll('span'))
        .find(span => span.textContent.match(/Show \d+ posts?/));

    if (loadMoreText) {
        const button = loadMoreText.closest('button');
        if (button) {
            button.click();
        }
    }
}

function enhanceX() {
    removeBlueChecks();
    reloadPages();
}

const observer = new MutationObserver(enhanceX);
observer.observe(document.body, { childList: true, subtree: true });
