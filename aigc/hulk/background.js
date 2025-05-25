chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "downloadImage") {
        chrome.downloads.download({
            url: request.url,
            filename: request.filename,
            conflictAction: 'uniquify'
        }, (downloadId) => {
            if (chrome.runtime.lastError) {
                console.error('Download failed:', chrome.runtime.lastError);
            }
        });
    }
    return true;
});