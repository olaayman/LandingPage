# LandingPage
## Project Description 
Web page with dynamic navigation bar and other features using HTML,CSS and javascript
### Navigation Bar
* implemented using empty ul element.
* dynamically created using javascrpit to cover all the sections in the page using ` createElement ` ,` getAttribute `, ` setAttribute ` and ` appendChild ` also using ` createDocumentFragment ` to ensure the high performance of the code.
* using ` navBar.addEventListener('click',scrollToSection); ` so when clicked on any element of the list it scrolls smoothly to the selected section using ` scrollBy ` event with the help of ` getBoundingClientRect() ` method.
* put the event listener in the ul element to increase the efficiency and use the event delegation ` event.target ` 
### Sections Activation
using ` window.addEventListener("scroll",activeClass);
 ` to highlight the element in the navigation bar dynamically with the scrolling accoriding to the current viewport.
 
## how to run the project
1. clone the project into your local PC.
2. simply open the index.html file by dragging it to your browser.

## technologies used in the project
* HTML
* css
* javascript

#### author's name
It is a project in the web development nanodegree by udacity and modified by Ola Ayman.
