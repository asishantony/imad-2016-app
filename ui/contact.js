
var submit1=document.getElementById("contact-submit");
    var names=[];

submit1.onclick = function(){
    if(document.getElementById("contact_name").value===""){
      document.getElementById('alert_name').style.display = "block";
	  
    }
	else if(document.getElementById("contact_phone").value===""){
      document.getElementById('alert_phone').style.display = "block";
	}
	else if(document.getElementById("contact_email").value===""){
      document.getElementById('alert_email').style.display = "block";
	}
	else if(document.getElementById("contact_message").value===""){
      document.getElementById('alert_message').style.display = "block";
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
              list += '<li class="list-group-item comment ">'+names[i]+'</li>';
              
             }
   
    // capture the name and render it 
    var ul= document.getElementById("namelist");
    ul.innerHTML=list; 
	 document.getElementById('alert').style.display = "none";
     document.getElementById("main").value = "";
			}
            }
        }
    //should make a request to the server and send the name 
  
    
};
   };
