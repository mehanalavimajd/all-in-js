const CSS3 = (selector) =>{
    let css_s=document.getElementById(selector)
    return css_s.style
}
const CSS3_class=(selector)=> {
    let css_s=document.getElementsByClassName(selector)
    return css_s.style
}
CSS3("ed").background="blue"
