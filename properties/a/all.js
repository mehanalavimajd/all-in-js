function all (selector,value){
    //selector and value : String
 let selection =  document.getElementById(selector)
selection.style.all=value
}
function all_Class (selector,value){
    //selector and value : String
 let selection =  document.getElementsByClassName(selector)
selection.style.all=value
}