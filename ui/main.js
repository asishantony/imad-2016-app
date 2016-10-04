console.log('Loaded!');
alert("are you ready");
var element = document.getElementById("main");
element.innerHTML="new value";
var img = document.getElementById("madi");

img.onclick = function()
{
  var interval= setInterval(moveRight,"10px");
  
};  
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+"px";
}
