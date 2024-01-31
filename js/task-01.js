// Znajdujemy listę kategorii
const categoriesList = document.getElementById('categories');

// Znajdujemy wszystkie elementy listy kategorii
const categoryItems = categoriesList.querySelectorAll('li.item');

// Liczymy liczbę kategorii
const numberOfCategories = categoryItems.length;

// Wyświetlamy liczbę kategorii w konsoli
console.log("Number of categories: " + numberOfCategories);

// Iterujemy przez każdy element listy kategorii
categoryItems.forEach(category => {
    // Znajdujemy tytuł kategorii
    const categoryName = category.querySelector('h2').textContent;

    // Znajdujemy wszystkie elementy w kategorii
    const categoryElements = category.querySelectorAll('ul > li');

    // Liczymy liczbę elementów w kategorii
    const numberOfElements = categoryElements.length;

    // Wyświetlamy tytuł kategorii i liczbę elementów w konsoli
    console.log("\nCategory: " + categoryName);
    console.log("Elements: " + numberOfElements);
});