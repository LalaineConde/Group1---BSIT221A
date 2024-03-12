import React, { useState } from 'react';
import SearchResult from './SearchResult';
import recipes from '/pages/category/recipe.json';

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openSearchResultsModal = () => {
    setOpenModal(true);
  };

  const closeSearchResultsModal = () => {
    setOpenModal(false);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter' && searchTerm.trim() !== '') {
      openSearchResultsModal();
    }
  };

  const handleIconClick = () => {
    if (searchTerm.trim() !== '') {
      openSearchResultsModal();
    }
  };

  

  return (
    <>
      <div className="input-container">
        <div className="input-with-icon-container">
          <input
            type="text"
            placeholder="Search Recipe..."
            value={searchTerm}
            onChange={handleChange}
            className="input-with-icon"
            onKeyPress={handleEnterKeyPress}
          />
          <img src='/search.svg' onClick={handleIconClick} className='search' alt='Search Icon' />
        </div>
      </div>

      {searchTerm !== '' && (
        <SearchResult
          open={openModal}
          onClose={closeSearchResultsModal}
          filteredRecipes={filteredRecipes}
        />
      )}
    </>
  );
}

export default Searchbar;