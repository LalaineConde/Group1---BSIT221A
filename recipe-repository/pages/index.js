import React, { useState, useEffect } from 'react';
import Head from "next/head";
import recipe from './category/recipe.json';
import { useRouter } from 'next/router';

export default function Home() {
  const [breakfastRecipe, setBreakfastRecipe] = useState(null);
  const [lunchRecipe, setLunchRecipe] = useState(null);
  const [dinnerRecipe, setDinnerRecipe] = useState(null);
  const router = useRouter();

  const dailyMilliseconds = 24 * 60 * 60; 

  useEffect(() => {
    const date = new Date();
    const currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    const storedBreakfastRecipe = JSON.parse(localStorage.getItem(`breakfastRecipe_${currentDate}`));
    const storedLunchRecipe = JSON.parse(localStorage.getItem(`lunchRecipe_${currentDate}`));
    const storedDinnerRecipe = JSON.parse(localStorage.getItem(`dinnerRecipe_${currentDate}`));

    if (storedBreakfastRecipe && storedLunchRecipe && storedDinnerRecipe) {
      setBreakfastRecipe(storedBreakfastRecipe);
      setLunchRecipe(storedLunchRecipe);
      setDinnerRecipe(storedDinnerRecipe);
    } else {
      const randomBreakfastRecipe = getRandomRecipe(1, 5); 
      const randomLunchRecipe = getRandomRecipe(6, 10); 
      const randomDinnerRecipe = getRandomRecipe(11, 15); 

      setBreakfastRecipe(randomBreakfastRecipe);
      setLunchRecipe(randomLunchRecipe);
      setDinnerRecipe(randomDinnerRecipe);

      localStorage.setItem(`breakfastRecipe_${currentDate}`, JSON.stringify(randomBreakfastRecipe));
      localStorage.setItem(`lunchRecipe_${currentDate}`, JSON.stringify(randomLunchRecipe));
      localStorage.setItem(`dinnerRecipe_${currentDate}`, JSON.stringify(randomDinnerRecipe));
    }

    const dailyInterval = setInterval(() => {
      const randomBreakfastRecipe = getRandomRecipe(1, 5); 
      const randomLunchRecipe = getRandomRecipe(6, 10); 
      const randomDinnerRecipe = getRandomRecipe(11, 15); 

      setBreakfastRecipe(randomBreakfastRecipe);
      setLunchRecipe(randomLunchRecipe);
      setDinnerRecipe(randomDinnerRecipe);

      localStorage.setItem(`breakfastRecipe_${currentDate}`, JSON.stringify(randomBreakfastRecipe));
      localStorage.setItem(`lunchRecipe_${currentDate}`, JSON.stringify(randomLunchRecipe));
      localStorage.setItem(`dinnerRecipe_${currentDate}`, JSON.stringify(randomDinnerRecipe));
    }, dailyMilliseconds);

    return () => {
      clearInterval(dailyInterval);
    };
  }, []); 

  const getRandomRecipe = (minId, maxId) => {
    const filteredRecipes = recipe.filter(recipe => recipe.id >= minId && recipe.id <= maxId);
    const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
    return filteredRecipes[randomIndex];
  };

  const handleRecipeClick = (recipeId) => {
    router.push(`/category/RecipeCard?id=${recipeId}`); 
  };
  

  return (
    <>
      <Head>
        <title>Recipe Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="body">
        <h1 className='titlefeatured-recipes'>Featured Recipes</h1>
        <section className="recipe-sectionindex">

          <div onClick={() => handleRecipeClick(breakfastRecipe.id)} className="recipe-containerindex">
            <h2 className="recipe-nameindex">{breakfastRecipe ? breakfastRecipe.name : ''}</h2>
            <img className="recipe-imageindex" src={breakfastRecipe ? breakfastRecipe.image : ''} alt="Breakfast Recipe" />
            <p className="recipe-descriptionindex">{breakfastRecipe ? breakfastRecipe.description : ''}</p>
          </div>

          <div onClick={() => handleRecipeClick(lunchRecipe.id)} className="recipe-containerindex">
            <h2 className="recipe-nameindex">{lunchRecipe ? lunchRecipe.name : ''}</h2>
            <img className="recipe-imageindex" src={lunchRecipe ? lunchRecipe.image : ''} alt="Lunch Recipe" />
            <p className="recipe-descriptionindex">{lunchRecipe ? lunchRecipe.description : ''}</p>
          </div>

          <div onClick={() => handleRecipeClick(dinnerRecipe.id)} className="recipe-containerindex">
            <h2 className="recipe-nameindex">{dinnerRecipe ? dinnerRecipe.name : ''}</h2>
            <img className="recipe-imageindex" src={dinnerRecipe ? dinnerRecipe.image : ''} alt="Dinner Recipe" />
            <p className="recipe-descriptionindex">{dinnerRecipe ? dinnerRecipe.description : ''}</p>
          </div>

        </section>
      </main>
    </>
  );
}
