var swap;
swap = document.getElementById('RightContent').innerHTML;

function loadPage(pageUrl) {
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const rightContent = document.getElementById('RightContent');
            rightContent.innerHTML = data;

            const existingCSS = document.querySelector('link[data-dynamic="true"]');
            const existingScript = document.querySelector('script[data-dynamic="true"]');
            if (existingCSS) existingCSS.remove();
            if (existingScript) existingScript.remove();

            if (pageUrl === 'week1.html') {
                const cssElement = document.createElement('link');
                cssElement.rel = 'stylesheet';
                cssElement.href = 'week1.css';
                cssElement.setAttribute('data-dynamic', 'true');
                document.head.appendChild(cssElement);

                const scriptElement = document.createElement('script');
                scriptElement.src = 'week1.js';
                scriptElement.setAttribute('data-dynamic', 'true');
                scriptElement.onload = () => {
                    if (typeof week1 !== 'undefined' && typeof week1.init === 'function') {
                        week1.init();
                    }
                };
                document.body.appendChild(scriptElement);
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}


function refresh() {
    window.location.reload();
}

var home = document.querySelector(".Dashboard");
var profile = document.querySelector(".Profile");
var log = document.querySelector(".LogBook");
var mark = document.querySelector(".Marksheet");
var certificate = document.querySelector(".Certificate");

var elements1 = [home, log, mark, certificate];
var elements2 = [profile, log, mark, certificate];
var elements3 = [home, profile, mark, certificate];
var elements4 = [home, profile, log, certificate];
var elements5 = [home, profile, log, mark];

function changeBackgroundColor(activeElement, elementsToChange) {
    activeElement.style.backgroundColor = "#D7EDFF";
    activeElement.querySelector('button').style.color = "#2B5972";
    activeElement.querySelector('button').style.fontWeight = "bold";
    elementsToChange.forEach(function(element) {
        element.style.backgroundColor = "transparent";
        element.querySelector('button').style.fontWeight = "normal";
        element.querySelector('button').style.color = "#758087"; 
    });
}

document.getElementById('Profile').addEventListener('click', function() {
    changeBackgroundColor(profile, elements1);
});
document.getElementById('RightProfile').addEventListener('click', function() {
    changeBackgroundColor(profile, elements1);
});
document.getElementById('Dashboard').addEventListener('click', function() {
    changeBackgroundColor(home, elements2);
});
document.getElementById('LogBook').addEventListener('click', function() {
    changeBackgroundColor(log, elements3);
});
document.getElementById('Marksheet').addEventListener('click', function() {
    changeBackgroundColor(mark, elements4);
});
document.getElementById('Certificate').addEventListener('click', function() {
    changeBackgroundColor(certificate, elements5);
});
document.getElementById('RightProfile').addEventListener('click', function() {
    changeBackgroundColor(profile, elements1);
});
document.getElementById('RightLogbook').addEventListener('click', function() {
    changeBackgroundColor(log, elements3);
});
document.getElementById('RightMarksheet').addEventListener('click', function() {
    changeBackgroundColor(mark, elements4);
});
document.getElementById('RightCertificate').addEventListener('click', function() {
    changeBackgroundColor(certificate, elements5);
});


