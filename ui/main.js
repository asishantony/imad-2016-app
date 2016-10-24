console.log('Loaded!');
/*var button= document.getElementById("counter1");
button.onclick = function(){
    var request= new XMLHttpRequest(); 
    request.onreadystatechange =function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status===200){
            
            }
        }
    };
  //make request
  request.open('GET','http://asishantony.imad.hasura-app.io/counter',true);
  request.send(null);
};*/
//submit name

var submit=document.getElementById("submit_btn");
submit.onclick= function(){
   
     var request= new XMLHttpRequest(); 
    request.onreadystatechange =function(){
        if(request.readyState == XMLHttpRequest.DONE){
            if(request.status==200){
              
             var names1=request.responseText;
             var names=[];
             names[names.length]=JSON.parse(names1);
             var list="";
      
            for(var i=0;i<names.length;i++){
              list += '<li>'+names+'</li>';
              
             }
   
    // capture the name and render it 
    var ul= document.getElementById("namelist");
    ul.innerHTML=list;      
            }
        }
    //should make a request to the server and send the name 
  
    
};
 var nameInput= document.getElementById("main");
   var name=nameInput.value;
 request.open('GET','http://asishantony.imad.hasura-app.io/submit-name?name='+ name,true);
  request.send();
};
