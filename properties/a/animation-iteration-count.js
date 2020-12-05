function animationIterationCount (selector,value){
    //selector and value : String
 let selection =  document.getElementById(selector)
selection.style.animationIterationCount=value
}
function animationIterationCount_Class (selector,value){
    //selector and value : String
 let selection =  document.getElementsByClassName(selector)
selection.style.animationIterationCount=value
}