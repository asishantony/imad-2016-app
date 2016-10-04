console.log('Loaded!');
var button= document.getElementById("counter1");
button.onclick = function(){
    var request= new XMLHttpRequest(); 
    request.onreadystatechange =function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status===200){
                var counter = request.responseText;
                counter=counter+1;
                alert(counter.toString());
                var spaan= document.getElementById("cout");
                spaan.innerHTML= counter.toString();
            }
        }
    };
  //make request
  request.open('GET','http://asishantony.imad.hasura-app.io',true);
  request.send(null);
};