document.addEventListener('DOMContentLoaded', function() {
    const changeColorButton = document.getElementById('changeColorButton');
    changeColorButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, 
                {action: "changeBackgroundColor", color: "green"},
                function(response) {
                    if (!response) {
                        console.error("内容脚本未响应，请检查是否已注入");
                    }
                }
            );
        });
    });
});