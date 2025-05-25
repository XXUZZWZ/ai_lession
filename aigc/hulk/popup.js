/*
@description: 当用户点击按钮时，向当前活动的标签页发送消息，要求其更改背景颜色。
@author: lfz
@date: 2024-09-07 15:52:03
@version: 1.0.0

*/


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

document.addEventListener('DOMContentLoaded', function() {
    // 删除旧的changeColorButton引用
    const downloadButton = document.getElementById('downloadImagesButton');
    
    downloadButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, 
                {action: "downloadAllImages"},
                function(response) {
                    if (!response) {
                        console.error("内容脚本未响应，请检查是否已注入");
                    }
                }
            );
        });
    });
});