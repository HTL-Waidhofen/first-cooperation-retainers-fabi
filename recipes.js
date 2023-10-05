let xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = function() {
    if(xmlHttp.readyState == 4){
        console.log(xmlHttp.responseText);
    }
}

xmlHttp.open('GET', 'recipes.json', true);
xmlHttp.send(null);

function getRecipe(){
    document.getElementById('page').innerHTML = '<h1 id="name"></h1><div id="description"></div><div class="content"><h2>Ingredients:</h2><br/><ul id="ingredients"></ul><br/><h2>Method:</h2><ul id="method"></ul></div><div id="output"></div><footer><p>To the recipe</p><a id="recipe" href="">Recipe</a><p id="author"></p></footer>'

    let ran = Math.floor(Math.random() * 1618)
    o = JSON.parse(xmlHttp.responseText);

    document.getElementById('ingredients').innerHTML = "";

    document.getElementById('name').innerHTML = o[ran].Name;
    document.getElementById('description').innerHTML = o[ran].Description;
    for(let i = 0; i < o[ran].Ingredients.length; i++){
        document.getElementById('ingredients').innerHTML += `<li>${o[ran].Ingredients[i]}</li>`;
    }
    for(let i = 0; i < o[ran].Method.length; i++){
        document.getElementById('method').innerHTML += `<li>${o[ran].Method[i]}</li>`;
    }
    document.getElementById('recipe').href = o[ran].url;
    document.getElementById('author').innerHTML = "by " + o[ran].Author;
}