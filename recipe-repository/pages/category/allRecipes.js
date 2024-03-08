import React from 'react';
import recipes from "./recipe.json";
import GetRecipe from '/components/GetRecipe';



function AllRecipes() {
  return (
    <>
   

    <main className='body'>
    <h1 className="AllRecipes-title">All Recipes</h1>
    <p className='AllRecipes-description'>Discover a variety of tasty dishes in our recipe collection that suits every taste and occasion.</p>

      <div className='AllRecipes-container'> 
      
        {recipes.map((recipe, index) => (
          <GetRecipe key={index} recipe={recipe} index={index} />
        ))}
      </div>

      </main>
  
    </>
  );
}

export default AllRecipes;