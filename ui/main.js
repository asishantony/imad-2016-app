console.log('Loaded!');
alert("are you ready");
var element = document.getElementById("main");
element.innerHTML="new value";
var img = document.getElementById("madi");
img.onclick = function()
{
    img.style.marginLeft="100px";
    console.log('clicked!');
};  
