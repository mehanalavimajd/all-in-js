function animationContent (selector,value){
    //selector and value : String
 let selection =  document.getElementById(selector)
selection.style.animationContent=value
}
function animationContent_Class (selector,value){
    //selector and value : String
 let selection =  document.getElementsByClassName(selector)
selection.style.animationContent=value
}

