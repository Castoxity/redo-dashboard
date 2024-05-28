// Load Quill and initialize the editors when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('someone kill me');
    // Load Quill script dynamically
    const quillScript = document.createElement('script');
    quillScript.src = 'https://cdn.quilljs.com/1.3.6/quill.js';
    quillScript.onload = function () {
        initializeQuillEditors();
        fetchAndLoadContent();
    };
    document.body.appendChild(quillScript);
    
    // Load week1.js dynamically
    const week1Script = document.createElement('script');
    week1Script.src = 'week1.js';
    document.body.appendChild(week1Script);

    // Load Bootstrap script dynamically
    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    bootstrapScript.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
    bootstrapScript.crossOrigin = 'anonymous';
    document.body.appendChild(bootstrapScript);
});

function initializeQuillEditors() {
    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link'],
        ['blockquote', 'code-block'],
        [{ 'align': [] }],
        ['clean']
    ];

    var quill = new Quill('#editor-container', {
        modules: {
            toolbar: toolbarOptions
        },
        theme: 'snow'
    });

    var quill2 = new Quill('#editor-container-2', {
        modules: {
            toolbar: toolbarOptions
        },
        theme: 'snow'
    });

    window.quill = quill;  // Make quill instances available globally
    window.quill2 = quill2;
}

function fetchAndLoadContent() {
    const apiUrl = 'https://api.example.com/get-text';
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const content = data.content;
            window.quill.clipboard.dangerouslyPasteHTML(content);
        })
        .catch(error => console.error('Error fetching data:', error));
}
