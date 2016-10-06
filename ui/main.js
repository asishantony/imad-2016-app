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
var nameInput= document.getElementById("main");
var name=nameInput.value;
var submit=document.getElementById("submit_btn");
submit.onclick= function(){
    //should make a request to the server and send the name 
    var names=['Asish','HK','Sujinesh','Hari'];
    var list="";
      
    for(var i=0;i<names.length;i++){
         list += '<li>'+names[i]+'</li>';
       console.log(names[i]);
    }
   
    // capture the name and render it 
    var ul= document.getElementById("namelist");
    ul.innerHTML=list;      
    
};
