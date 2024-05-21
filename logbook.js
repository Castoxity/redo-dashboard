document.addEventListener('DOMContentLoaded', function loadPage(pageUrl) {
    fetch(pageUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {

        document.getElementById('Main').innerHTML = data;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
})