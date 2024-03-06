import React from 'react';
import Header from "/components/Constants/Header";
import Footer from "/components/Constants/Footer";
import recipes from "./recipe.json";

function RecipeContainer({ recipe, index }) {
  return (
    <div className={`recipe-container ${index % 2 === 1 ? 'even' : ''}`}>
      <div className="left-column">
        <img className="Breakfast-image" src={recipe.image} alt={recipe.name} />
      </div>
      <div className="right-column">
        <h2 className="recipe-name">{recipe.name}</h2>
        <p className="recipe-description">{recipe.description}</p>
        <button className="recipe-button">Get Recipe</button>
      </div>
    </div>
  );
}

function Breakfast() {

    const filteredRecipes = recipes.filter(recipe => recipe.id >= 1 && recipe.id <= 5);

  return (
    <>
      <Header />

    <main className='body'>
    <h1 className="breakfast-title">Breakfast</h1>
    <p className='breakfast-description'>Enjoy a flavorful midday break with our lunch recipes, 
    offering a perfect mix of taste and nourishment to keep you going.</p>

      <div className='breakfast-container'> 
      
      {filteredRecipes.map((recipe, index) => (
            <RecipeContainer key={index} recipe={recipe} index={index} />
          ))}
      </div>

      </main>
      <Footer />
    </>
  );
}

export default Breakfast;