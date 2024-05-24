
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

    var lAll = document.getElementById('L-All');
    var lComplete = document.getElementById('L-Complete');
    var lPending = document.getElementById('L-Pending');

    var lelements1 = [lComplete, lPending];

function lchangeBackgroundColor(lactiveElement, lelementsToChange) {
    lactiveElement.style.borderBottom = "1px solid black"
    lelementsToChange.forEach(function(lelement) {
        lelement.style.border = "none";
    });
}

document.getElementById('L-All').addEventListener('click', function() {
    lchangeBackgroundColor(lAll, lelements1);
});