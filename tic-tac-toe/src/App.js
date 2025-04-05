import './App.css';
import { recipes } from './data.js';
import Recipe from './Recipe';

function App() {

  function RecipeList() {
    return (
      <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => (
        <Recipe
        key={recipe.id}
        id={recipe.id}
        name={recipe.name}
        ingredients={recipe.ingredients}
        />
            ))}
    </div>
    );
  }

  return (
      <div>
       <RecipeList />
      </div>
  );
}


export default App;