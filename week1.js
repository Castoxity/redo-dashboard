
const DepartmentDropdown = document.getElementById('DepartmentDropdown');
const ShiftDropdown = document.getElementById('ShiftDropdown');
const SectionDropdown = document.getElementById('SectionDropdown');


DepartmentDropdown.innerHTML = '';
ShiftDropdown.innerHTML = '';
SectionDropdown.innerHTML = '';


const departments = ['Option-1', 'Option-2', 'Option-3']; 
const shifts = ['Option-1', 'Option-2', 'Option-3']; 
const sections = ['Option-1', 'Option-2', 'Option-3']; 


departments.forEach(bruh => {
    const option = document.createElement('option');
    option.value = bruh;
    option.textContent = bruh;
    DepartmentDropdown.appendChild(option);
});

shifts.forEach(bruh2 => {
    const option2 = document.createElement('option');
    option2.value = bruh2;
    option2.textContent = bruh2;
    ShiftDropdown.appendChild(option2);
});

sections.forEach(bruh3 => {
    const option3 = document.createElement('option');
    option3.value = bruh3;
    option3.textContent = bruh3;
    SectionDropdown.appendChild(option3);
});


// under this is for image

function loadFile(event, imgId, textId) {
    const image = document.getElementById(imgId);
    const placeholder = image.nextElementSibling;
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = 'block';
    placeholder.style.display = 'none';
}