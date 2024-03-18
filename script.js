var requestURL = `https://data.gov.lv/dati/lv/api/3/action/datastore_search?resource_id=92ac6e57-c5a5-444e-aaca-ae90c120cc3d`;

var request = new XMLHttpRequest();

request.open('GET', requestURL);
//request.responseType = 'json';
request.send();

request.onload = function(){
    if(request.status >= 200 && request.status < 400){ 
        if(request.response == null){
            console.log("nav datu");
        }
        console.log(request.status);
        
        
        var data = request.response;
        console.log(data);
        var obj = JSON.parse(data);

        console.log(obj.help);
       
    } else {
        console.log("Serveris neadbild");
        console.log(request.status);
    }
    
}