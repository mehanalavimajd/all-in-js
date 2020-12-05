function animationPlayState (selector,value){
    //selector and value : String
 let selection =  document.getElementById(selector)
selection.style.animationPlayState=value
}
function animationPlayState_Class (selector,value){
    //selector and value : String
 let selection =  document.getElementsByClassName(selector)
selection.style.animationPlayState=value
}