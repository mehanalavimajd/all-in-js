function alignSelf (selector,value){
    //selector and value : String
 let selection =  document.getElementById(selector)
selection.style.alignSelf=value
}
function alignSelf_Class (selector,value){
    //selector and value : String
 let selection =  document.getElementsByClassName(selector)
selection.style.alignSelf=value
}