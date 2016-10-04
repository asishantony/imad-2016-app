console.log('Loaded!');
alert("are you ready");
var element = document.getElementById("main");
element.innerHTML="new value";
var img = document.getElementById("madi");

img.onclick = function()
{
  var interval= setInterval(moveRight,"2");
  
};  
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+"px";
}
