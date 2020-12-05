function animationDelay(selector, value) {
    //selector and value : String
    let selection = document.getElementById(selector);
    selection.style.animationDelay = value;
}
function animationDelay_Class(selector, value) {
    //selector and value : String
    let selection = document.getElementsByClassName(selector);
    selection.style.animationDelay = value;
}
