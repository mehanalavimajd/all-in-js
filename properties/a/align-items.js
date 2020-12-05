function alignItems (selector,value){
    //selector and value : String
 let selection =  document.getElementById(selector)
selection.style.alignItems=value
}
function alignItems_Class (selector,value){
    //selector and value : String
 let selection_class =  document.getElementsByClassName(selector)
selection_class.style.alignItems=value
}