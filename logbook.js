
function loadPage(pageUrl) {
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('Main').innerHTML = data;

            const cssElement = document.createElement('link');
            cssElement.rel = 'stylesheet';
            cssElement.href = 'LogbookSample.css';
            document.head.appendChild(cssElement);

            const scriptElement = document.createElement('script');
            scriptElement.onload = () => {
                LogbookSample.init();
            };
            scriptElement.src = 'LogbookSample.js';
            document.body.appendChild(scriptElement);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}