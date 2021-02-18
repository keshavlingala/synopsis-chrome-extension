console.log('testing')
console.log('Process Injected')

chrome.browserAction.onClicked.addListener(function (tab) {
    console.log(tab)
    if (urlRegex.test(tab.url)) {
        chrome.tabs.sendMessage(tab.id, { text: 'report_back' }, res => {
            console.log(res)
        });
    }
});