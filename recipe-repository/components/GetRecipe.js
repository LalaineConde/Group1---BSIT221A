import React from 'react';
import { Button } from 'semantic-ui-react';
import Link from 'next/link';


function GetRecipe({ recipe, index }) {


    return (
      <div className={`recipe-container ${index % 2 === 1 ? 'even' : ''}`}>
        <div className="left-column">
          <img className="AllRecipes-image" src={recipe.image} alt={recipe.name} />
        </div>
        <div className="right-column">
          <h2 className="recipe-name">{recipe.name}</h2>
          <p className="recipe-description">{recipe.description}</p>
          <div className="recipe-button-container">
          <Link href={`/category/RecipeCard?id=${recipe.id}`} passHref>
            <Button className='recipe-button'>Get Recipe</Button>
          </Link>
        </div>
        </div>
      </div>
    );
  }

  export default GetRecipe