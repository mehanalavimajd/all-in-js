function animationDuration (selector,value){
    //selector and value : String
 let selection =  document.getElementById(selector)
selection.style.animationDuration=value
}
function animationDuration_Class (selector,value){
    //selector and value : String
 let selection =  document.getElementsByClassName(selector)
selection.style.animationDuration=value
}