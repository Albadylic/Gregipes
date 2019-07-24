let recipeCards = [...document.getElementsByClassName("recipe-cards")];
let recipeDisplay = 0;

function hideAll() {
  recipeCards.forEach(element => {
    element.style.display = "none";
  });
}

function initialise() {
  hideAll();
  recipeCards[recipeDisplay].style.display = "grid";
}

setInterval(function() {
  if (recipeDisplay < recipeCards.length - 1) {
    recipeDisplay++;
  } else {
    recipeDisplay = 0;
  }
  hideAll();
  recipeCards[recipeDisplay].style.display = "grid";
}, 5000);

initialise();
