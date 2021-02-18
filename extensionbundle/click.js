const summerize = () => {
    chrome.tabs.executeScript(null, { file: 'highlight.js' }, (res) => {
        console.log(res)
    })
}
const stopSpeak = () => {
    chrome.tabs.executeScript(null, { code: 'window.speechSynthesis.cancel();' }, (res) => {
        console.log('Stopped', res);
    })
}
const startSpeak = () => {
    chrome.tabs.executeScript(null, { code: 'window.speechSynthesis.speak(new SpeechSynthesisUtterance(globalSummary));' },
        (res) => {
            console.log('Stopped', res);
        })
}
const getSummary = () => {
    chrome.tabs.executeScript(null, { code: 'window.alert(globalSummary);' }, (res) => {
        console.log('Stopped', res);
    })
}
const ratioChange = (event) => {
    chrome.tabs.executeScript(null, { code: `globalRatio=${event.target.value}` }, (res) => {
        console.log('Stopped', res);
    })
}
document.getElementById('highlight').addEventListener('click', summerize);
document.getElementById('off').addEventListener('click', stopSpeak);
document.getElementById('on').addEventListener('click', startSpeak);
document.getElementById('sum').addEventListener('click', getSummary);
document.getElementById('ratio').addEventListener('change', ratioChange);
window.onload = () => {
    chrome.tabs.executeScript(null, { code: `let globalSummary = 'Not Yet Loaded... Please Wait';let globalRatio = 30;` },
        (res) => {
            console.log('Stopped', res);
        })
}