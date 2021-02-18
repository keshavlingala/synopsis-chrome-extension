
if (document.querySelector('article')) {
    const processText = (text) => {
        fetch("https://gensim-flask.herokuapp.com/app", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text, ratio: globalRatio }),
        })
            .then(response => response.json())
            .then(({ summary }) => {
                if (!summary) return;
                globalSummary = summary;
                console.log(summary.split('\n'))
                document.querySelectorAll('.myhigh').forEach((item) => {
                    item.style.backgroundColor = 'inherit'
                })
                summary.split('\n').forEach(s => {
                    document.body.innerHTML = document.body.innerHTML.replace(s, `<span class='myhigh' style="background-color:yellow">${s}</span>`)
                })
            })
            .catch(error => console.log('error', error));
    }
    console.log('Article')
    document.querySelectorAll('article').forEach(art => processText(art.innerText))
} else {
    const processText = (text) => {
        fetch("https://gensim-flask.herokuapp.com/app", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text, ratio: globalRatio }),
        })
            .then(response => response.json())
            .then(({ summary }) => {
                if (!summary) return;
                globalSummary = summary;
                console.log(summary.split('\n'))
                document.querySelectorAll('.myhigh').forEach((item) => {
                    item.style.backgroundColor = 'inherit'
                })
                summary.split('\n').forEach(s => {
                    document.body.innerHTML =
                        document.body.innerHTML
                            .replace(s, `<span class='myhigh' style="background-color:yellow">${s}</span>`)
                })
            })
            .catch(error => console.log('error', error));
    }
    console.log('Full Body')
    processText(document.body.innerText)
}