function animationTimingFunction (selector,value){
    //selector and value : String
 let selection =  document.getElementById(selector)
selection.style.animationTimingFunction=value
}
function animationTimingFunction_Class (selector,value){
    //selector and value : String
 let selection =  document.getElementsByClassName(selector)
selection.style.animationTimingFunction=value
}