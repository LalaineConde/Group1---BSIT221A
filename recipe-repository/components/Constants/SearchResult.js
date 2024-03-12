import RecipeCard from '@/pages/category/RecipeCard';
import React from 'react';
import { Modal } from 'semantic-ui-react';
import { useRouter } from 'next/router';

function SearchResult({ open, onClose, filteredRecipes }) {

    const router = useRouter();
    const handleRecipeClick = (recipeId) => {
        onClose();
        router.push(`/category/RecipeCard?id=${recipeId}`);
      };

    


  return (
    <Modal open={open} onClose={onClose} className='search-results-modal'>
      <Modal.Header>
       
        <img
          src='/close.svg'
          alt='close icon'
          className='close-icon'
          onClick={onClose}
        />

        <h1 className='modal-title'>Search Results</h1>
      </Modal.Header>
      <Modal.Content>
      {filteredRecipes.length === 0 ? (
        <p>No results found.</p>
        ) : (
    <div>
    {filteredRecipes.map((recipe) => (
      <div key={recipe.id} onClick={() => handleRecipeClick(recipe.id)} className='modal-container'>
        <div className='image-container'>
          <img src={recipe.image} alt={recipe.name} className='modal-image'/>
        </div>
        <div className='details-container'>
          <p className='modal-details'>{recipe.name + ' : ' + recipe.description}</p>
        </div>
      </div>
    ))}
  </div>
)}
        
      </Modal.Content>
    </Modal>
  );
}

export default SearchResult;

