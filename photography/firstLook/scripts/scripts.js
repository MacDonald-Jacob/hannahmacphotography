// function to slide out with touchmove
function slideOut(el){
    var elem = document.getElementById(el);
    elem.style.transition = "left 2.0s ease-out 0s";
    elem.style.left = "-2500px";
}