function CSS3_destroy_selector(selector) {
    // warining : this function will destroy all of styles in a id
    let s_selection = document.getElementById(selector)
    s_selection.style.all="unset"
    s_selection.style=""
}
function CSS3_destroy_selector (selector){
        // warining : this function will destroy all of styles in a class
    let s_selection = document.getElementsByClassName(selector)
    s_selection.style.all="unset"
    s_selection.style=""
}