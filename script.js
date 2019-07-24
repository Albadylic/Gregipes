let recipeCards = [...document.getElementsByClassName("recipe-cards")];
let recipeDisplay = 0;

function hideAll() {
  recipeCards.forEach(element => {
    element.classList.toggle("hidden");
  });
}

function listAll() {
  recipeCards.forEach(element => {
    console.log(element.classList);
  });
}

function initialise() {
  hideAll();
  recipeCards[recipeDisplay].classList.toggle("hidden");
  cycleRecipes();
}

function cycleRecipes() {
  setInterval(function() {
    if (recipeDisplay < recipeCards.length - 1) {
      recipeDisplay++;
      recipeCards[recipeDisplay - 1].classList.toggle("hidden");
      recipeCards[recipeDisplay].classList.toggle("hidden");
    } else {
      recipeDisplay = 0;
      recipeCards[recipeCards.length - 1].classList.toggle("hidden");
      recipeCards[recipeDisplay].classList.toggle("hidden");
    }
  }, 3000);
}

initialise();
