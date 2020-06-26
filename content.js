$(function () {
    chrome.storage.sync.get("isExtensionActive", function (obj) {
        if (obj.isExtensionActive) {
            deleteAllBiBiMentions();
            setInterval(deleteAllBiBiMentions, 1000);
        }
    });
});

deleteAllBiBiMentions = function deleteAllBiBiMentions() {
    const divs = $("[role=article]");
    divs.each((index, div) => {
        let text = $(div).text();
        if (text.includes("ביבי") || text.includes("נתניהו")) {
            $(div).hide();
        }
        // $("[role=article] div span a").text("Idan Magled");
        // if (text.includes("איילת שקד")) {
        //     text.replace("איילת שקד", "איילת שקד השולטתתתת");
        // }
        // if (text.includes("נפתלי בנט")) {
        //     text.replace("נפתלי בנט", "נפתלי בנט השולטתתתת");
        // }
    });
};

chrome.storage.onChanged.addListener(changes => {
    if (changes.isExtensionActive) {
        localStorage.isExtensionActive = changes.isExtensionActive.newValue;
        changes.isExtensionActive.newValue ? deleteAllBiBiMentions() : location.reload();
    }
});