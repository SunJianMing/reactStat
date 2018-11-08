const  setFont = ()=>{
    let whdef = 100/1920;
    var wW = document.documentElement.getBoundingClientRect().width;
    document.documentElement.style.fontSize = wW * whdef +'px'
}
window.addEventListener('resize',()=>{
    setFont()
})
setFont()
