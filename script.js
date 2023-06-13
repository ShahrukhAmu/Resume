// 1. first method to write a code

// var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');
// // console.log(navMenuAnchorTag);

// for (var i = 0; i < navMenuAnchorTag.length; i++) {
//     navMenuAnchorTag[i].addEventListener('click', function (event) {
//         event.preventDefault();
//         var targetSectionId = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById(targetSectionId);
//         // var targetSectionCoordinates = targetSection.getBoundingClientRect();
//         var scrollInterval = setInterval(function(){
//             var targetSectionCoordinates = targetSection.getBoundingClientRect();
//             if(targetSectionCoordinates.top<=0){
//                 clearInterval(scrollInterval);
//                 return;
//             }
//             window.scrollBy(0 , 50);
//         },50)
//         console.log(targetSection);
//     })
// }


//2 second method

// var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');
// var scrollInterval;
// for (var i = 0; i < navMenuAnchorTag.length; i++) {
//     navMenuAnchorTag[i].addEventListener('click', function (event) {
//         event.preventDefault();
//         var targetSectionId = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById(targetSectionId);
//         // var targetSectionCoordinates = targetSection.getBoundingClientRect();
//         scrollInterval = setInterval(scrollVertically,20 , targetSection)
//         console.log(targetSection);
//     })
// }

// function scrollVertically(targetSection){
//     var targetSectionCoordinates = targetSection.getBoundingClientRect();
//     if(targetSectionCoordinates.top<=0){
//         clearInterval(scrollInterval);
//         return;
//     }
//     window.scrollBy(0 , 50);
// }


//3. third method

// var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');
// var scrollInterval;
// for (var i = 0; i < navMenuAnchorTag.length; i++) {
//     navMenuAnchorTag[i].addEventListener('click', function (event) {
//         event.preventDefault();
//         var targetSectionId = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById(targetSectionId);
//         // var targetSectionCoordinates = targetSection.getBoundingClientRect();
//         scrollInterval = setInterval(function () {
//             scrollVertically(targetSection);
//         }, 20)
//         console.log(targetSection);
//     })
// }

// function scrollVertically(targetSection) {
//     var targetSectionCoordinates = targetSection.getBoundingClientRect();
//     if (targetSectionCoordinates.top <= 0) {
//         clearInterval(scrollInterval);
//         return;
//     }
//     window.scrollBy(0, 50);
// }


// 4.forth method

// var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');
// // var scrollInterval;
// for (var i = 0; i < navMenuAnchorTag.length; i++) {
//     navMenuAnchorTag[i].addEventListener('click', function (event) {
//         event.preventDefault();
//         var targetSectionId = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById(targetSectionId);
//         // var targetSectionCoordinates = targetSection.getBoundingClientRect();
//         var scrollInterval = setInterval(function () {
//             scrollVertically(targetSection ,scrollInterval);
//         }, 20)
//         console.log(targetSection);
//     })
// }

// function scrollVertically(targetSection ,scrollInterval) {
//     var targetSectionCoordinates = targetSection.getBoundingClientRect();
//     if (targetSectionCoordinates.top <= 0) {
//         clearInterval(scrollInterval);
//         return;
//     }
//     window.scrollBy(0, 50);
// }


//SKILL BAR

var progressBars = document.querySelector('skill-progress>.div');
var skillContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.witdh = 0+'%';
    }
}

function checkScroll() {
    // check whether skill section is visible or not
    var coordinates = skillContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top < window.innerHeight) {
        //window.innerHeight give the view port height.
        animationDone = true;

        console.log('skill section is visible');
        //now to filling fire the animation

    }
}


