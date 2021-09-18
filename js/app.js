/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sectionList = document.querySelectorAll('section');
let navBar = document.querySelector('ul');
let sectionsPosition = [];
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
function scrollToSection(event){
    if (event.target.nodeName === 'LI'){
        // get the y coordinate to be scrolled to 
        let scrollToSec = document.querySelector("#"+event.target.getAttribute("data-section-id")).getBoundingClientRect();
        // use scrollBy method to smoothly scroll to section
        window.scrollBy({
            top: scrollToSec.y ,
            behavior: 'smooth',
          });
    }
}
function activeClass(){
    let fromTop = window.scrollY;
    // clear any element with active id if exist
    let prevActiveSection = document.querySelector("#active");
    let prevActivePageSec = document.querySelector('.your-active-class');
    if (prevActiveSection && prevActivePageSec){
        prevActiveSection.id = "";
        prevActivePageSec.classList.remove('your-active-class');
    }

    // set id to active if section is in the viewport
    for(let i =0 ; i < sectionsPosition.length-1; i++){
        if (fromTop > sectionsPosition[i] && fromTop < sectionsPosition[i+1]){
            document.querySelectorAll('nav ul li')[i].id = "active";
            sectionList[i].classList.add('your-active-class');
            break;
        }
        else if (fromTop > sectionsPosition[sectionsPosition.length-1]){
            document.querySelectorAll('nav ul li')[sectionsPosition.length-1].id = "active";
            sectionList[sectionsPosition.length-1].classList.add('your-active-class');
            break;
        }
        }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavBar()
{
    const sectionsFragment = document.createDocumentFragment(); 

    for (section of sectionList) {
        // push the positions of the sections to be use later in the activeClass function
        sectionsPosition.push(section.offsetTop);
        // create the list items and set the attributes
        const newItem = document.createElement('li');
        newItem.innerText = section.getAttribute('data-nav');
        newItem.setAttribute('data-section-id',section.id) ;

        // append to the document fragment
        sectionsFragment.appendChild(newItem);
    }

    // appent to the navigation bar
    navBar.appendChild(sectionsFragment); 
}

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll",activeClass);
// Scroll to anchor ID using scrollTO event
navBar.addEventListener('click',scrollToSection);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavBar();


