import { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchWordDefinition } from './Api.jsx';

export default function SearchHeader() {
  function handleSearch(event) {
    event.preventDefault();
    fetchWordDefinition(searchTerm).then((response) => {
      setBestMatches(response.data);
    });
  }
  return (
    <>
    <main>
      <header>
        <div className="search-box">
          <form action="" onSubmit={handleSearch} className="search-form">
            <input type="search" className="search" placeholder="Search" />
            <button type="submit" className="btn">
              <i className="bi-search"></i>
            </button>
          </form>
        </div>
      </header>
    </main>
    </>
  );
}
