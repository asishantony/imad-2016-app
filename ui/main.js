console.log('Loaded!');
alert("are you ready");
var element = document.getElementById("main");
element.innerHTML="new value";
var madi = document.getElementById("madi");
madi.onClick = function(){
    madi.style.marginLeft = "100px";
};