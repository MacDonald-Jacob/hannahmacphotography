// load in the nav before anything else
// window.addEventListener('load', includeHTML);
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// this is for putting the nav bar in each page
// from W3 Schools
// function includeHTML() {
//    var z, i, elmnt, file, xhttp;
//    /*loop through a collection of all HTML elements:*/
//    z = document.getElementsByTagName('*');
//    for (i = 0; i < z.length; i++) {
//       elmnt = z[i];
//       /*search for elements with a certain atrribute:*/
//       file = elmnt.getAttribute('navbar');
//       if (file) {
//          /*make an HTTP request using the attribute value as the file name:*/
//          xhttp = new XMLHttpRequest();
//          xhttp.onreadystatechange = function() {
//             if (this.readyState == 4) {
//                if (this.status == 200) {
//                   elmnt.innerHTML = this.responseText;
//                }
//                if (this.status == 404) {
//                   elmnt.innerHTML = 'Page not found.';
//                }
//                /*remove the attribute, and call this function once more:*/
//                elmnt.removeAttribute('navbar');
//                includeHTML();
//             }
//          };
//          xhttp.open('GET', file, true);
//          xhttp.send();
//          /*exit the function:*/
//          return;
//       }
//    }
// }