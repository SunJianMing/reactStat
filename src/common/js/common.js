const  setFont = ()=>{
    let whdef = 100/1920;
    var wW = document.documentElement.getBoundingClientRect().width;

      localStorage.setItem('rem',(wW * whdef).toFixed(4))

    document.documentElement.style.fontSize = wW * whdef +'px'
}
window.addEventListener('resize',()=>{
    setFont()
})

$.interceptors.response.use(({data,status})=>{
  if(status === 200){
    return data
  }
})
setFont()
