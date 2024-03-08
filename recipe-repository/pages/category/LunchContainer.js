import React from 'react';
import Link from 'next/link';

function LunchContainer({ recipe }) {
  return (
    <div className="recipe-container">
      <div className="left-column">
        <img className="lunch-image" src={recipe.image} alt={recipe.name} />
      </div>
      <div className="right-column">
        <h2 className="lunch-name">{recipe.name}</h2>
        <p className="lunch-description">{recipe.description}</p>
        <Link href={`/category/RecipeCard?id=${recipe.id}`} passHref>
          <button className="recipe-button">Get Recipe</button>
        </Link>
      </div>
    </div>
  );
}

export default LunchContainer;
