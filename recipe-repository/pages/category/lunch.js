import React from 'react';
import recipes from "./recipe.json";
import GetRecipe from '/components/GetRecipe';

function Lunch() {
  const filteredRecipes = recipes.filter(recipe => recipe.id >= 6 && recipe.id <= 10);

  return (
    <main className='body'>
      <h1 className="lunch-title">Lunch</h1>
      <p className='lunch-description'>Enhance your midday break with our suggested lunch recipes, offering a delicious mix of flavors to satisfy your cravings.</p>

      <div className='lunch-container'>
        {filteredRecipes.map((recipe, index) => (
          <GetRecipe key={index} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}

export default Lunch;
