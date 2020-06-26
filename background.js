chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.storage.sync.get('isExtensionActive', storage => {
        chrome.storage.sync.set({
            isExtensionActive: !storage.isExtensionActive,
        });
    });
});