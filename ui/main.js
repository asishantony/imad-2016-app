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
//submit code
var code=document.getElementById("submit_code")
code.onclick = function(){
	 document.getElementById('alert_code1').style.display = "none";
	 document.getElementById('show_link').style.display = "none";
	 document.getElementById('alert_code2').style.display = "none";
	 if(document.getElementById("chsl").value===""){
      document.getElementById('alert_code1').style.display = "block";
	 }
	 else if(document.getElementById("chsl").value==="chsl"){
	 
      document.getElementById('show_link').style.display = "block";
	 }
	 else
	 {
		  document.getElementById('alert_code2').style.display = "block";
	 }
		
}
//submit name


var submit=document.getElementById("submit_btn");
    var names=[];

submit.onclick = function(){
    if(document.getElementById("main").value===""){
      document.getElementById('alert').style.display = "block";
	  console.log('error!');
    }
   else
   {
     var request= new XMLHttpRequest(); 
    request.onreadystatechange =function(){
        if(request.readyState == XMLHttpRequest.DONE){
            if(request.status==200){
              console.log('2000!');
             var names1=request.responseText;
         
             names[names.length]=JSON.parse(names1);
             var list="";
      
            for(var i=0;i<names.length;i++){
              list += '<li class="list-group-item comment ">'+names[i]+'</li>';
              
             }
   
    // capture the name and render it 
    var ul= document.getElementById("namelist");
    ul.innerHTML=list; 
	 document.getElementById('alert').style.display = "none";
     document.getElementById("main").value = "";
 
            }
        }
    //should make a request to the server and send the name 
  
    
};

};
 var nameInput= document.getElementById("main");
   var name=nameInput.value;
 request.open('GET','/submit-name?name='+ name,true);
  request.send();
};






