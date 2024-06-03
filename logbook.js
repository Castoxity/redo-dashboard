document.addEventListener('DOMContentLoaded', function() {
   
    function loadPage(pageUrl) {
        fetch(pageUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                const lChangedElement = document.querySelector('.L-Changed');
                if (lChangedElement) {
                    lChangedElement.innerHTML = data;
                } else {
                    console.error('Element with class "L-Changed" not found');
                    return;
                }

                const cssElement = document.createElement('link');
                cssElement.rel = 'stylesheet';
                cssElement.href = 'week1.css';
                document.head.appendChild(cssElement);

                const scriptElement = document.createElement('script');
                scriptElement.onload = () => {
                    if (typeof week1 !== 'undefined' && week1.init) {
                        week1.init();
                    }
                };
                scriptElement.src = 'week1api.js';
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
        lactiveElement.style.borderBottom = "1px solid black";
        lelementsToChange.forEach(function(lelement) {
            lelement.style.border = "none";
        });
    }

    lAll.addEventListener('click', function() {
        lchangeBackgroundColor(lAll, lelements1);
        loadPage('all.html');
    });

    lComplete.addEventListener('click', function() {
        lchangeBackgroundColor(lComplete, [lAll, lPending]);
        loadPage('complete.html');
    });

    lPending.addEventListener('click', function() {
        lchangeBackgroundColor(lPending, [lAll, lComplete]);
        loadPage('pending.html');
    });

    document.querySelectorAll('#L-BtnWeekly').forEach(function(button) {
        button.addEventListener('click', function() {
            const weekNumber = this.querySelector('#L-CardNumber').innerText;
            loadPage(`week${weekNumber}.html`);
        });
    });
});
