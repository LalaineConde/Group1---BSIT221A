import React from 'react';
import Header from "/components/Constants/Header";
import Footer from "/components/Constants/Footer";
import recipes from "./recipe.json";

function LunchContainer({ recipe, index }) {
  return (
    <div className={`recipe-container ${index % 2 === 1 ? 'even' : ''}`}>
      <div className="left-column">
        <img className="lunch-image" src={recipe.image} alt={recipe.name} />
      </div>
      <div className="right-column">
        <h2 className="lunch-name">{recipe.name}</h2>
        <p className="lunch-description">{recipe.description}</p>
        <button className="recipe-button">Get Recipe</button>
      </div>
    </div>
  );
}

function Lunch() {
  const filteredRecipes = recipes.filter(recipe => recipe.id >= 6 && recipe.id <= 10);

  return (
    <>
      <Header />

      <main className='body'>
        <h1 className="lunch-title">Lunch</h1>
        <p className='lunch-description'>Enhance your midday break with our suggested lunch recipes, offering a delicious mix of flavors to satisfy your cravings.</p>

        <div className='lunch-container'>
          {filteredRecipes.map((recipe, index) => (
            <LunchContainer key={index} recipe={recipe} index={index} />
          ))}
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Lunch;
