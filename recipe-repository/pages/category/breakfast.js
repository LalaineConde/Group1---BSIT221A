import React from 'react';
import recipes from "./recipe.json";
import GetRecipe from '/components/GetRecipe';


function Breakfast() {

    const filteredRecipes = recipes.filter(recipe => recipe.id >= 1 && recipe.id <= 5);

  return (
    <>


    <main className='body'>
    <h1 className="breakfast-title">Breakfast</h1>
    <p className='breakfast-description'>Enjoy a flavorful midday break with our lunch recipes, 
    offering a perfect mix of taste and nourishment to keep you going.</p>

      <div className='breakfast-container'> 
      
      {filteredRecipes.map((recipe, index) => (
            <GetRecipe key={index} recipe={recipe} index={index} />
          ))}
      </div>

      </main>

    </>
  );
}

export default Breakfast;