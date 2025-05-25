chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "changeBackgroundColor") {
        document.body.style.backgroundColor = request.color;
        // 添加响应确认机制
        sendResponse({status: "success"});
    }
    return true; // 保持消息通道开放
});