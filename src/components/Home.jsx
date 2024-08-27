import { useState } from "react";
import { Link } from "react-router-dom";
import fetchWordDefinition from "./Api.jsx";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [bestMatches, setBestMatches] = useState([]);

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
            <form onSubmit={handleSearch} className="search-form">
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                type="search"
                className="search"
                placeholder="Search"
              />
              <button type="submit" className="btn" title="Search">
                <i className="bi-search"></i>
              </button>
            </form>
          </div>
        </header>
        <section className="content">
          <h3 className="command">Search for something by typing in the search bar..</h3>
          <ul className="list-box">
            {bestMatches.map((match) => (
              <li className="list-item" key={match.word}>
                <Link to={`/word/${match.word}`}>{match.word}</Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
