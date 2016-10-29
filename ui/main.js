console.log('Loaded!');
/*var button= document.getElementById("counter1");
button.onclick = function(){
    var request= new XMLHttpRequest(); 
    request.onreadystatechange =function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status===200){
            var count=document.getElementById("count");
       
            }
        }
    };
  //make request
  request.open('GET','http://asishantony.imad.hasura-app.io/counter',true);
  request.send(null);
};*/
//submit name


var submit=document.getElementById("submit_btn");
    var names=[];

submit.onclick= function(){
    if(document.getElementById("main").value===""){
      document.getElementById('alert').style.display = "block";
    }
   else
   {
     var request= new XMLHttpRequest(); 
    request.onreadystatechange =function(){
        if(request.readyState == XMLHttpRequest.DONE){
            if(request.status==200){
              
             var names1=request.responseText;
         
             names[names.length]=JSON.parse(names1);
             var list="";
      
            for(var i=0;i<names.length;i++){
              list += '<li>'+names[i]+'</li>';
              
             }
   
    // capture the name and render it 
    var ul= document.getElementById("namelist");
    ul.innerHTML=list; 
	 document.getElementById('alert').style.display = "none";
     document.getElementById("main").value = "";
   // document.getElementById("main").placeholder = "comments..";
            }
        }
    //should make a request to the server and send the name 
  
    
};

}
 var nameInput= document.getElementById("main");
   var name=nameInput.value;
 request.open('GET','/submit-name?name='+ name,true);
  request.send();
};
