let xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = function() {
    if(xmlHttp.readyState == 4){
        console.log(xmlHttp.responseText);
    }
}

xmlHttp.open('GET', 'recipes.json', true);
xmlHttp.send(null);

function getRecipe(){
    o = JSON.parse(xmlHttp.responseText);
    document.getElementById('output').innerHTML = o[Math.floor(Math.random() * 1618)].Name;
}