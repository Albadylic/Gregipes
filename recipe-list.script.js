let recipeList = document.querySelectorAll(".recipe-tile");

let recipeTitle = recipeList[0].firstElementChild.innerHTML;

recipeLink = recipeTitle
  .toLowerCase()
  .split(" ")
  .join("_");

console.log(recipeList[0].firstElementChild);

recipeList[0].firstElementChild.innerHTML = `<a href=${recipeLink}.html>${recipeTitle}</a>`;

console.log(recipeList[0].firstElementChild);
