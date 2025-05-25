chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "downloadAllImages") {
        // Add error handling for image collection
        try {
            const images = document.querySelectorAll('img');
            if(images.length === 0) {
                sendResponse({ status: "error", message: "No images found" });
                return true;
            }
            
            const imageUrls = Array.from(images).map(img => img.src);
            imageUrls.forEach((url, index) => {
                chrome.runtime.sendMessage({
                    action: "downloadImage",
                    url: url,
                    filename: `image-${index + 1}.${getFileExtension(url)}`
                });
            });
            
            sendResponse({ status: "success", count: imageUrls.length });
        } catch (error) {
            sendResponse({ status: "error", message: error.message });
        }
        return true; // Keep the message channel open for async response
    }
});

function getFileExtension(url) {
    return url.split('.').pop().split(/[#?]/)[0].toLowerCase();
}