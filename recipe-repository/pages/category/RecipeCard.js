import React from 'react';
import { useRouter } from 'next/router';
import recipes from './recipe.json';

function RecipeCard() {
  const router = useRouter();
  const { id } = router.query;
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id, 10));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className='recipe-indiviual-container'>

      <div className='given-details'>
      <h2 className='individual-recipe-title'>{recipe.name}</h2>
      <img className="individual-recipe-image" src={recipe.image} alt={recipe.name} />
      <p className='individual-recipe-description'>{recipe.description}</p>         
      </div>

      <div className='other-details'>
      <h3 className='ingredients'>Ingredients:</h3>
      <ul className='list-ingredients'>
        {recipe.ingredients.map((ingredient, index) => (
          <li className='bullet-list' key={index}>{ingredient}</li>
        ))}
      </ul>

      <h3 className='steps'>Preparation Steps:</h3>
      <ol>
        {recipe.prepSteps.map((step, index) => (
          <li className="number-list" key={index}>{step}</li>
        ))}
      </ol>

      <h3 className='cooking-time'>Cooking Time:</h3>
      <p className='time'>{recipe.cookingTime}</p>

      <h3 className='serving-size'>Cooking Time:</h3>
      <p className='size'>{recipe.servingSize}</p>

      <h3 className='classification'>Classification:</h3>
      <p className='cuisine-type'>Cuisine Type: {recipe.classification.cuisineType}</p>
      <p className='origin-place'>Origin Place: {recipe.classification.originPlace}</p>

      <h3 className='nutrition-facts'>Nutrition Facts:</h3>

      <ul className='list-nutrition-facts'>
        <li className='bullet-list'>Calories: {recipe.nutritionFacts.calories}</li>
        <li className='bullet-list'>Carbohydrates: {recipe.nutritionFacts.carbohydrates}</li>
        <li className='bullet-list'>Protein: {recipe.nutritionFacts.protein}</li>
        <li className='bullet-list'>Fat: {recipe.nutritionFacts.fat}</li>
        <li className='bullet-list'>Saturated: {recipe.nutritionFacts.saturated}</li>
        <li className='bullet-list'>Cholesterol: {recipe.nutritionFacts.cholesterol}</li>
        <li className='bullet-list'>Sodium: {recipe.nutritionFacts.sodium}</li>
        <li className='bullet-list'>Potassium: {recipe.nutritionFacts.potassium}</li>
        <li className='bullet-list'>Fiber: {recipe.nutritionFacts.fiber}</li>
        <li className='bullet-list'>Vitamin A: {recipe.nutritionFacts.vitaminA}</li>
        <li className='bullet-list'>Vitamin C: {recipe.nutritionFacts.vitaminC}</li>
        <li className='bullet-list'>Calcium: {recipe.nutritionFacts.calcium}</li>
        <li className='bullet-list'>Iron: {recipe.nutritionFacts.iron}</li>
      </ul>
    </div>

    </div>
  );
}
export default RecipeCard;