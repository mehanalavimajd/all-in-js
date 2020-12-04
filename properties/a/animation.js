function animation (selector,value){
    //selector and value : String
 let selection =  document.getElementById(selector)
selection.style.animation=value
}
function animation_Class (selector,value){
    //selector and value : String
 let selection =  document.getElementsByClassName(selector)
selection.style.animation=value
}