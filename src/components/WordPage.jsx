import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchWordDefinition from "./Api.jsx";

export default function WordPage() {
  const { word } = useParams();
  const [definition, setDefinition] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchWordDefinition(word).then((response) => {
      setDefinition(response.data[0]);
    });
  }, [word]);

  function handleSearch(event) {
    event.preventDefault();
    fetchWordDefinition(searchTerm).then((response) => {
      setSearchTerm(response.data);
    });
  }
  fetchWordDefinition(word).then((response) => {
    if (response.data.length === 0) {
      alert(`Sorry, the word "${word}" was not found.`);
    } else {
      setDefinition(response.data[0]);
    }
  });
  fetchWordDefinition(word)
    .then((response) => {
      setDefinition(response.data[0]);
    })
    .catch((error) => {
      console.log(error);
    });
  if (!definition) {
    return (
      <>
        <main>
          <section className="content">
            <div className="word-def">
              <h4>Loading...</h4>
            </div>
          </section>
        </main>
      </>
    );
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
              <button type="submit" className="btn">
                <i className="bi-search"></i>
              </button>
            </form>
          </div>
        </header>
        <section className="content">
          <div className="word-def">
            <h1>{definition.word}</h1>
            <p>{definition.phonetics[0].text}</p>
            <audio src={definition.phonetics[0].audio} controls />
            <ul>
              {definition.meanings.map((meaning, index) => (
                <div key={index}>
                  <h2>{meaning.partOfSpeech}</h2>
                  <p>{meaning.definition}</p>
                  <h3>Examples: </h3>
                  <p>Synonyms: {meaning.synonyms.join(", ")}</p>
                  <p>Antonyms: {meaning.antonyms.join(", ")}</p>
                </div>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
