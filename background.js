chrome.storage.sync.get("isExtensionActive", function (obj) {
    chrome.browserAction.setBadgeText({text: `${obj.isExtensionActive}`});
});
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.storage.sync.get('isExtensionActive', storage => {
        chrome.storage.sync.set({
            isExtensionActive: !storage.isExtensionActive,
        });
        chrome.browserAction.setBadgeText({text: `${!storage.isExtensionActive}`});
    });
});