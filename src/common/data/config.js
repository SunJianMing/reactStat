let url = null;
let href = location.href;


if(/bee-html5\//ig.test(href)){
  url = 'http://172.16.167.85:60000/bee-svr'
}else{
  url = 'http://172.16.167.85:60000/bee-svr-test'
}



export default url
