import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchWordDefinition from "./Api.jsx";

export default function WordPage() {
  const { word } = useParams();
  const [definition, setDefinition] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchWordDefinition(word).then((response) => {
      setDefinition(response.data[0]);
    });
  }, [word]);

  // function handleSearch(event) {
  //   event.preventDefault();
  //   fetchWordDefinition(searchTerm).then((response) => {
  //     setSearchTerm(response.data);
  //   });
  // }
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

  function togglePlay() {
    const audioElement = document.getElementById("audio");
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <>
      <main>
        {/* <header>
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
        </header> */}
        <section className="content">
          <div className="word-def">
            <div className="first-word-row">
              <h1 className="word">{definition.word}</h1>
              <div onClick={togglePlay}>
                {isPlaying ? (
                    <i className="volume-button bi-volume-up-fill"></i>
                ) : (
                    <i className="volume-button bi-volume-down-fill"></i>
                )}
              </div>
              <audio id="audio" className="hidden" src={definition.phonetics[0].audio} controls />
            </div>
            <p>{definition.phonetics[0].text}</p>
            <p>{definition.origin}</p>
            <ul>
              {definition.meanings.map((meaning, index) => (
                <li key={index}>
                  <h3 className="word-class">{meaning.partOfSpeech}</h3>
                  <p className="word-definition">
                    {meaning.definitions[0].definition}
                  </p>
                  <div className="other">
                    <p>Synonyms: {meaning.synonyms.join(", ")}</p>
                    <p>Antonyms: {meaning.antonyms.join(", ")}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
