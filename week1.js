// JavaScript Code for Text Editor

let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
const fontNames = ["fontName1", "fontName2"];
const fontSizes = ["fontSize1", "fontSize2"];
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");
let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];

// Initialize font options and event listeners
const initializer = () => {
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);

  // options for font names
  fontNames.forEach(id => {
    const fontName = document.getElementById(id);
    if (fontName) {
      fontList.forEach(font => {
        const option = document.createElement("option");
        option.value = font;
        option.innerHTML = font;
        fontName.appendChild(option);
      });
    }
  });

  // options for font sizes
  fontSizes.forEach(id => {
    const fontSize = document.getElementById(id);
    if (fontSize) {
      for (let i = 1; i <= 7; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSize.appendChild(option);
      }
    }
  });

  addFontEventListeners();
};

// Modify text based on command
const modifyText = (command, defaultUi, value) => {
  document.execCommand(command, defaultUi, value);
};

// Add event listeners for buttons
optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});

advancedOptionButton.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value);
  });
});

if (linkButton) {
  linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL");
    if (/http/i.test(userLink)) {
      modifyText(linkButton.id, false, userLink);
    } else {
      userLink = "http://" + userLink;
      modifyText(linkButton.id, false, userLink);
    }
  });
}
const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      if (needsRemoval) {
        let alreadyActive = false;
        if (button.classList.contains("active")) {
          alreadyActive = true;
        }
        highlighterRemover(className);
        if (!alreadyActive) {
          button.classList.add("active");
        }
      } else {
        button.classList.toggle("active");
      }
    });
  });
};
const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};
function addFontEventListeners() {
  fontNames.forEach(id => {
    const fontName = document.getElementById(id);
    if (fontName) {
      fontName.addEventListener("change", function() {
        document.execCommand("fontName", false, this.value);
      });
    }
  });
  fontSizes.forEach(id => {
    const fontSize = document.getElementById(id);
    if (fontSize) {
      fontSize.addEventListener("change", function() {
        document.execCommand("fontSize", false, this.value);
      });
    }
  });
}
document.addEventListener("DOMContentLoaded", initializer);


// anything beneath is for imgae

document.addEventListener("DOMContentLoaded", function () {
  const ImgInp = document.getElementById('W-LBtn');
  const ImgBtn = document.querySelector(".W-LBtn"); // Corrected selector for the image upload button
  const ImgContainer = document.querySelector('.W-LImgInserted'); // Corrected selector for the image container

  ImgBtn.addEventListener("click", function () {
    ImgInp.click();
  });

  ImgInp.addEventListener("change", function () { // Corrected event listener for image input change
    handleImageUpload(ImgInp.files[0]);
  });

  function handleImageUpload(file) {
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.alt = "W-LImgInserted";
        img.classList.add("W-LImgInserted");
        ImgContainer.innerHTML = ""; // Clear previous content in the container
        ImgContainer.appendChild(img); // Append the uploaded image to the container
      };
      reader.readAsDataURL(file);
    }
  }
});
