const toggleButton = document.getElementById('toggleButton');
const Wrapper = document.querySelector(".extensionWrapper")
const buttonAll = document.querySelector(".btn1")
const buttonActive = document.querySelector(".btn2")
const buttonInactive = document.querySelector(".btn3")

const extensions = [
    {
        "logo": "./assets/images/logo-devlens.svg",
        "name": "DevLens",
        "description": "Quickly inspect page layouts and visualize element boundaries.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-style-spy.svg",
        "name": "StyleSpy",
        "description": "Instantly analyze and copy CSS from any webpage element.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-speed-boost.svg",
        "name": "SpeedBoost",
        "description": "Optimizes browser resource usage to accelerate page loading.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-json-wizard.svg",
        "name": "JSONWizard",
        "description": "Formats, validates, and prettifies JSON responses in-browser.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-tab-master-pro.svg",
        "name": "TabMaster Pro",
        "description": "Organizes browser tabs into groups and sessions.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-viewport-buddy.svg",
        "name": "ViewportBuddy",
        "description": "Simulates various screen resolutions directly within the browser.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-markup-notes.svg",
        "name": "Markup Notes",
        "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-grid-guides.svg",
        "name": "GridGuides",
        "description": "Overlay customizable grids and alignment guides on any webpage.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-palette-picker.svg",
        "name": "Palette Picker",
        "description": "Instantly extracts color palettes from any webpage.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-link-checker.svg",
        "name": "LinkChecker",
        "description": "Scans and highlights broken links on any page.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-dom-snapshot.svg",
        "name": "DOM Snapshot",
        "description": "Capture and export DOM structures quickly.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-console-plus.svg",
        "name": "ConsolePlus",
        "description": "Enhanced developer console with advanced filtering and logging.",
        "isActive": true
    }
  ]

//   5 steps to creat an element or a tag from js and add it to html
// step 1 : create the element or tag
// const elmnt = document.createElement("h1")
// step 2 : give the created element a classname (optional)
// Element.classList.add("newelement")
// step 3 : create the content you want to add to the new element
// elmntContent = "i have just been added with js"
// step 4 : add the content to the created element
// Element.innerHTML = elmntContent
// step 5 : add the created element to html
// Wrapper.appendChild(elmnt)

// function to create card
function createCard(item){
    card = document.createElement("div");

    card.classList.add("extensionCard");

    cardContent = `
                <div class="extensionCardTop">
                    <img src=${item.logo} alt="dev lens">

                    <div class="cardContent">
                        <h2>${item.name}</h2>
                        <p>
                           ${item.description}
                        </p>
                    </div>
                </div>

                <div class="cardToggler">
                    <button class="btnRemove">Remove</button>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider"></span>
                    </label>
                </div>
    `;

    card.innerHTML = cardContent;

    Wrapper.appendChild(card);
}

extensions.map(function(item) {
    return createCard(item);
})
// extensions.filter((item) => {
//     return createCard(item);
// }).map(function(item) {
//     return createCard(item);
// })

// Check if dark mode is already set in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = '';
}

// Event listener for the button toggle
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Update button text and localStorage
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    toggleButton.textContent = '';
    localStorage.removeItem('darkMode');
  }
});