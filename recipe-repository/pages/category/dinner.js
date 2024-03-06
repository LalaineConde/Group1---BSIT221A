import React from 'react';
import Header from "/components/Constants/Header";
import Footer from "/components/Constants/Footer";
import recipes from "./recipe.json";

function DinnerContainer({ recipe, index }) {
  return (
    <div className={`recipe-container ${index % 2 === 1 ? 'even' : ''}`}>
      <div className="left-column">
        <img className="dinner-image" src={recipe.image} alt={recipe.name} />
      </div>
      <div className="right-column">
        <h2 className="dinner-name">{recipe.name}</h2>
        <p className="dinner-description">{recipe.description}</p>
        <button className="recipe-button">Get Recipe</button>
      </div>
    </div>
  );
}

function Dinner() {
  const filteredRecipes = recipes.filter(recipe => recipe.id >= 11 && recipe.id <= 15);

  return (
    <>
      <Header />

      <main className='body'>
        <h1 className="dinner-title">Dinner</h1>
        <p className='dinner-description'>Make your evenings special with our selected dinner ideas, adding a gourmet touch to create memorable nights.</p>

        <div className='dinner-container'>
          {filteredRecipes.map((recipe, index) => (
            <DinnerContainer key={index} recipe={recipe} index={index} />
          ))}
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Dinner;
