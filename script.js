// Get Recipe Cards
let recipeCards = [...document.getElementsByClassName("recipe-cards")];
let recipeDisplay = 0;

function hideAll() {
  recipeCards.forEach(element => {
    element.classList.toggle("hidden");
  });
}

// Function to hide all cards, show the first card and then begin cycling

function initialise() {
  hideAll();
  recipeCards[recipeDisplay].classList.toggle("hidden");
  cycleRecipes();
}

// Cycle through recipe cards until limit, then return to first card

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

// Auto run
initialise();
