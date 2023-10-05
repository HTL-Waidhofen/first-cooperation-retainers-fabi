let xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = function() {
    if(xmlHttp.readyState == 4){
        console.log(xmlHttp.responseText);
    }
}

xmlHttp.open('GET', 'recipes.json', true);
xmlHttp.send(null);

function getRecipe(){
    let ran = Math.floor(Math.random() * 1618)
    o = JSON.parse(xmlHttp.responseText);

    document.getElementById('ingredients').innerHTML = "";

    document.getElementById('name').innerHTML = o[ran].Name;
    document.getElementById('description').innerHTML = o[ran].Description;
    for(let i = 0; i < o[ran].Ingredients.length; i++){
        document.getElementById('ingredients').innerHTML += `<li>${o[ran].Ingredients[i]}</li>`;
    }
}