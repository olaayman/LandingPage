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
        let scrollToSec = document.querySelector("#"+event.target.getAttribute("data-section-id")).getBoundingClientRect();
        window.scrollBy({
            top: scrollToSec.y ,
            behavior: 'smooth',
          });
    }
}
function activeClass(){
    let fromTop = window.scrollY;
    let prevActiveSection = document.querySelector("#active");
    if (prevActiveSection){
        prevActiveSection.id = "";
    }
    for(let i =0 ; i < sectionsPosition.length-1; i++){
        if (fromTop > sectionsPosition[i] && fromTop < sectionsPosition[i+1]){
            document.querySelectorAll('nav ul li')[i].id = "active";
            break;
        }else if (fromTop > sectionsPosition[sectionsPosition.length-1]){
            document.querySelectorAll('nav ul li')[sectionsPosition.length-1].id = "active";
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
// function buildNavBar()
// {
//     const sectionsFragment = document.createDocumentFragment(); 

//     for (section of sectionList) {
//         sectionsPosition.push(section.getBoundingClientRect().y.toFixed(2));
//         const newItem = document.createElement('a');
//         newItem.innerText = section.getAttribute('data-nav');
//         newItem.setAttribute('href','#'+section.id) ;

//         sectionsFragment.appendChild(newItem);
//     }

//     navBar.appendChild(sectionsFragment); 
// }
function buildNavBar()
{
    const sectionsFragment = document.createDocumentFragment(); 

    for (section of sectionList) {
        sectionsPosition.push(section.getBoundingClientRect().y.toFixed(2));
        const newItem = document.createElement('li');
        newItem.innerText = section.getAttribute('data-nav');
        newItem.setAttribute('data-section-id',section.id) ;

        sectionsFragment.appendChild(newItem);
    }

    navBar.appendChild(sectionsFragment); 
}

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll",activeClass)
// Scroll to anchor ID using scrollTO event
navBar.addEventListener('click',scrollToSection);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavBar();


