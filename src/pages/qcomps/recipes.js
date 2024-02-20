export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

export default function RecipeList() {

  const finRecipeItems = recipes.map((recipe) => {
    <div key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>{Array.from(recipe.ingredients).map((ing) => {
        <li>{ing}</li>
      })}</ul>
    </div>
  })
  return (
    <div>
      <h1>Recipes</h1>
      <ul>{finRecipeItems}</ul>
    </div>
  );
}