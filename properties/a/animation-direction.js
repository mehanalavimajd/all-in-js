function animationDirection (selector,value){
    //selector and value : String
 let selection =  document.getElementById(selector)
selection.style.animationDirection=value
}
function animationDirection_Class (selector,value){
    //selector and value : String
 let selection =  document.getElementsByClassName(selector)
selection.style.animationDirection=value
}