// Tablica z danymi składników
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Znajdujemy listę składników w dokumencie
const ingredientsList = document.getElementById('ingredients');

// Tworzymy funkcję do dodawania składników do listy
function addIngredientToList(ingredientName) {
  // Tworzymy nowy element li
  const listItem = document.createElement('li');

  // Dodajemy klasę item do elementu li
  listItem.classList.add('item');

  // Ustawiamy tekst składnika jako zawartość elementu li
  listItem.textContent = ingredientName;

  // Dodajemy element li do listy ul
  ingredientsList.appendChild(listItem);
}

// Iterujemy przez tablicę ingredients i dodajemy każdy składnik do listy ul
ingredients.forEach(ingredient => {
  addIngredientToList(ingredient);
});

