const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const allLiIngredients = ingredients.map((element) => {
  const liItem = document.createElement("li");
  liItem.textContent = element;
  liItem.classList.add("item");
  return liItem;
});

const ulIngredientsRef = document.querySelector("#ingredients");

ulIngredientsRef.append(...allLiIngredients);
