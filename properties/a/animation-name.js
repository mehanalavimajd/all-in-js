function animationName (selector,value){
    //selector and value : String
 let selection =  document.getElementById(selector)
selection.style.animationName=value
}
function animationName_Class (selector,value){
    //selector and value : String
 let selection =  document.getElementsByClassName(selector)
selection.style.animationName=value
}