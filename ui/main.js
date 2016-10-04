console.log('Loaded!');
alert("are you ready");
var element = document.getElementById("main");
element.innerHTML="new value";
var img = document.getElementById("madi");
img.onclick = function()
{
    var counter=0;
    img.style.marginLeft="100px";
    counter=counter+1;
    console.log(counter);
};  
