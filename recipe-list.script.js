let recipeList = document.querySelectorAll(".recipe-tile");

recipeList.forEach((item, index) => {
  let recipeTitle = recipeList[index].firstElementChild.innerHTML;

  recipeLink = recipeTitle
    .toLowerCase()
    .split(" ")
    .join("_");

  recipeList[
    index
  ].firstElementChild.innerHTML = `<a href=${recipeLink}.html>${recipeTitle}</a>`;
});
