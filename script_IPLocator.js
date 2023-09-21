let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4){
            console.log(xmlHttp.responseText);
            let output = JSON.parse(xmlHttp.responseText);
            document.getElementById('output').innerHTML = "Status: " + output.status + "<br> countryCode: " + output.countryCode + "<br> lat:" 
            + output.lat + "<br> lon:" + output.lon + "<br> timezone: " + output.timezone + "<br> isp:" + output.isp + "<br> org:" + output.org;
            document.getElementById("output2").innerHTML = "<a href='https://www.google.com/maps/search/?api=1&query="+output.lat+","+output.lon+"'>Location on Google Maps</a>"
        }
    }

function GetInfo(){
    xmlHttp.open('GET','http://ip-api.com/json/'+document.getElementById('inputDomain').value+'?fields=status,message,countryCode,isp,org,lat,lon,timezone',true)
    xmlHttp.send(null);
}