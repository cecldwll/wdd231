import { getRecipes } from "./recipes.mjs";

const cookieData = getRecipes();

console.log(cookieData);

function setCookieInfo(data) {
    console.log(data);
    const container = document.querySelector(".recipe-container");
    // multiple items in an array to loop through all of them, we use the .map() method
    const html = data.map(recipeTemplate);
    container.innerHTML = html.join("");
}



function recipeTemplate(info) {
    return`<div class="recipe">
        <h2>${info.recipe_name}</h2>
        <img src="${info.image}" alt="${info.notes}"/>
    </div>`;
}

// function getType(data) {
//     const tradContainer = document.querySelector(".traditional");
//     const trad = data.recipes.find((data=> data.type === "traditional"));
//     tradContainer.innerHTML = tradTemplate(trad);
// }

function getType(data) {
    const tradContainer = document.querySelector(".traditional");
    const trad = data.find((data=> data.type === "traditional"));
    tradContainer.innerHTML = trad.type;
}


setCookieInfo(cookieData);
getType(cookieData);