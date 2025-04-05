import './App.css';
import { recipes } from './data.js';
import { useState } from 'react';

function App() {

  function RecipeList() {
    return (
      <div>
      <h1>Recipes</h1>
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