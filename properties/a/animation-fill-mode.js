function animationFillMode (selector,value){
    //selector and value : String
 let selection =  document.getElementById(selector)
selection.style.animationFillMode=value
}
function animationFillMode_Class (selector,value){
    //selector and value : String
 let selection =  document.getElementsByClassName(selector)
selection.style.animationFillMode=value
}

