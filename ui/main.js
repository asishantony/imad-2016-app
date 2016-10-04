console.log('Loaded!');
var button= document.getElementById("counter1");
button.onclick = function(){
    var request= new XMLHttpRequest(); 
    request.onreadystatechange =function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status===200){
                var counter = request.responseText;
                //counter=counter+1;
                var spaan= document.getElementById("count");
                spaan.innerHTML= counter.toString();
            }
        }
    };
  //make request
  request.open('GET','http://asishantony.imad.hasura-app.io/counter',true);
  request.send(null);
};
//submit name
var nameInput= document.getElementById("name");
var name=nameInput.value;
var submit=document.getElementById("submit_btn");
