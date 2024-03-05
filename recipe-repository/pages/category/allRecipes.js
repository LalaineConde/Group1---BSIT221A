import React from 'react';
import Header from "/components/Constants/Header";
import Footer from "/components/Constants/Footer";
import recipes from "./recipe.json";

function RecipeContainer({ recipe, index }) {
  return (
    <div className={`recipe-container ${index % 2 === 1 ? 'even' : ''}`}>
      <div className="left-column">
        <img className="AllRecipes-image" src={recipe.image} alt={recipe.name} />
      </div>
      <div className="right-column">
        <h2 className="recipe-name">{recipe.name}</h2>
        <p className="recipe-description">{recipe.description}</p>
        <button className="recipe-button">Get Recipe</button>
      </div>
    </div>
  );
}

function AllRecipes() {
  return (
    <>
      <Header />

    <main className='body'>
    <h1 className="AllRecipes-title">All Recipes</h1>
    <p className='AllRecipes-description'>Discover a variety of tasty dishes in our recipe collection that suits every taste and occasion.</p>

      <div className='AllRecipes-container'> 
      
        {recipes.map((recipe, index) => (
          <RecipeContainer key={index} recipe={recipe} index={index} />
        ))}
      </div>

      </main>
      <Footer />
    </>
  );
}

export default AllRecipes;