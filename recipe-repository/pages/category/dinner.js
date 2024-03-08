import React from 'react';
import recipes from "./recipe.json";
import GetRecipe from '/components/GetRecipe';


function Dinner() {
  const filteredRecipes = recipes.filter(recipe => recipe.id >= 11 && recipe.id <= 15);

  return (
    <>


      <main className='body'>
        <h1 className="dinner-title">Dinner</h1>
        <p className='dinner-description'>Make your evenings special with our selected dinner ideas, adding a gourmet touch to create memorable nights.</p>

        <div className='dinner-container'>
          {filteredRecipes.map((recipe, index) => (
            <GetRecipe key={index} recipe={recipe} index={index} />
          ))}
        </div>

      </main>
            
    </>
  );
}

export default Dinner;
